<script setup lang="ts">
import CreateEvent from '@/components/event/Create.vue';
import NoLoggin from '@/components/assets/NoLoggin.vue';
import { onMounted, ref, toRef } from 'vue';

import { CreateEventDocument, CategorysDocument, type Category, EventDocument, EditEventDocument, DeleteEventDocument, AskForDescriptionDocument } from '@/api/graphql';
import { useMutation, useQuery } from '@vue/apollo-composable';

import router from '@/router'
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';

const route = useRoute()

const { mutate, loading: loadingCreate } = useMutation(CreateEventDocument)
const { mutate: mutateEdit, loading: loadingEdit } = useMutation(EditEventDocument)
const { mutate: mutateDelete, loading: loadingDelete } = useMutation(DeleteEventDocument)
const { mutate: mutateAskDesc, loading: loadingAskDesc } = useMutation(AskForDescriptionDocument)
const { onResult } = useQuery(CategorysDocument)

const categories = ref<Category[] | null>(null)

onResult(({data}) => {
  if(data?.categories) {
    categories.value = data?.categories as Category[]
  }
})

const parseDateTime = (datetimeStr: string) => {
  const dateObj = new Date(datetimeStr)

  const date = dateObj.toISOString().slice(0, 10)
  const time = dateObj.toTimeString().slice(0, 5)

  return { date, time }
}

const image = ref<File | null>(null)

const form = ref<any>({
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  creator: '',
  imagePreview: null
});

const { result, refetch, loading, onResult: onResultEvent } = useQuery(EventDocument, { eventId: (route.params.id as string) || "" })

onResultEvent(({data}) => {
  if(data?.event) {
    const { date, time } = parseDateTime(data.event.date)
    form.value.title = data.event.title
    form.value.description = data.event.description
    form.value.location = data.event.address
    form.value.category = data.event.category.name
    form.value.date = date
    form.value.time = time
    form.value.imagePreview = `/uploads/${data.event.image}`
  }
})

const removeImage = () => {
  console.log('Remove image clicked');
  image.value = null
  form.value.imagePreview = null
};

const uploadPhoto = (event: any) => {
  console.log('Upload photo clicked');
  image.value = event.target.files[0]
  if(image.value) form.value.imagePreview = URL.createObjectURL(image.value)
}

const errors = ref({
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  image: ''
});

const validateForm = () => {
  let isValid = true;
  errors.value = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    image: ''
  };

  if (!form.value.title) {
    errors.value.title = 'Titlul este necesar';
    isValid = false;
  } else if (form.value.title.length < 3) {
    errors.value.title = 'Titlul trebuie să aibă minim 3 caractere';
    isValid = false;
  }

  if (!form.value.description) {
    errors.value.description = 'Descrierea este necesară';
    isValid = false;
  } else if (form.value.description.length < 10) {
    errors.value.description = 'Descrierea trebuie să aibă minim 10 caractere';
    isValid = false;
  }

  if (!form.value.date) {
    errors.value.date = 'Data este necesară';
    isValid = false;
  } else {
    const selectedDate = new Date(`${form.value.date}T${form.value.time}:00.000Z`);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      errors.value.date = 'Data evenimentului nu poate fi în trecut';
      isValid = false;
    }
  }

  if (!form.value.time) {
    errors.value.time = 'Ora este necesară';
    isValid = false;
  }

  if (!form.value.location) {
    errors.value.location = 'Locația evenimentului este necesară';
    isValid = false;
  }

  if (!form.value.category) {
    errors.value.category = 'Categoria evenimentului este necesară';
    isValid = false;
  }

  if (!image.value && !form.value.imagePreview) {
    errors.value.image = 'Imagine evenimentului este necesară';
    isValid = false;
  }

  return isValid;
};

const addEvent = async () => {
  if (!validateForm()) return;
  
  const sendDateToClient = `${form.value.date}T${form.value.time}:00.000Z`
  const res = await mutate({
    title: form.value.title,
    description: form.value.description,
    image: image.value,
    date: sendDateToClient,
    address: form.value.location,
    categoryName: form.value.category
  })
  if(res?.data?.createEvent) {
    router.push("/event/" + res.data.createEvent.id)
  } else {
    router.push("/events")
  }
};

const editEvent = async () => {
  if (!validateForm()) return;
  
  const sendDateToClient = `${form.value.date}T${form.value.time}:00.000Z`
  await mutateEdit({
    title: form.value.title,
    description: form.value.description,
    image: image.value,
    date: sendDateToClient,
    address: form.value.location,
    categoryName: form.value.category,
    eventId: route.params.id as string
  })
  router.push('/event/' + route.params.id)
}

const deleteEvent = async () => {
  await mutateDelete({
    eventId: route.params.id as string
  })
  router.push('/events')
}

async function generateDesc() {
  const res = await mutateAskDesc({ input: form.value.description })
  if(res?.data?.askForDescription) form.value.description = res.data.askForDescription
}

const userStore = useUserStore()
</script>

<template>
  <main>
    <CreateEvent v-if="userStore.user" @ai-gen-desc="generateDesc" :loadingAskDesc="loadingAskDesc">
      <template #upload-input>
        <div v-if="!image && !form.imagePreview" class="upload-area" @click="uploadPhoto " :style="{ cursor: 'pointer' }">
          <input
            type="file"
            accept="image/*"
            @change="uploadPhoto"
          />
          <p>Apasă pentru a încărca imaginea evenimentului</p>
        </div>
        <div v-else class="preview-item">
          <img v-if="form.imagePreview" :src="form.imagePreview" :alt="form.title" />
          <button class="remove-btn" @click.stop="removeImage()">X</button>
        </div>
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.image">{{ errors.image }}</span>
      </template>
      


      <template #event-name-input>
        <input type="text" v-model="form.title" placeholder="Denumirea evenimentului" class="event-name-input"/>
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.title">{{ errors.title }}</span>
      </template>

      <template #event-desc-input>
        <textarea v-model="form.description" placeholder="Descrierea evenimentului"></textarea>
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.description">{{ errors.description }}</span>
      </template>

      <template #event-date-input>
        <input type="date" v-model="form.date" />
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.date">{{ errors.date }}</span>
      </template>

      <template #event-time-input>
        <input type="time" v-model="form.time" />
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.time">{{ errors.time }}</span>
      </template>

      <template #event-location-input>
        <input type="text" v-model="form.location" placeholder="Locația evenimentului" />
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.location">{{ errors.location }}</span>
      </template>

      <template #event-category-input>
        <select v-model="form.category">
          <option value="">Selectează categoria</option>
          <option v-for="c in categories" :value="c.name">{{ c.name }}</option>
        </select>
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.category">{{ errors.category }}</span>
      </template>

      <template #create-button>
        <div v-if="!loadingCreate && !loadingDelete && !loadingEdit" class="w-full">
          <button v-if="!result?.event" @click="addEvent" class="w-full">Create Event</button>
          <div v-else class="flex flex-col w-full">
            <button @click="editEvent" class="w-full">Edit Event</button>
            <button @click="deleteEvent" class="w-full">Delete Event</button>
          </div>
        </div>
        <button v-else class="cursor-not-allowed w-full">Loading...</button>
      </template>
    </CreateEvent>
    <NoLoggin v-else-if="!userStore.loading" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}
.preview-item {
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: default;
}

.remove-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  padding: 0;
}

.upload-area {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  flex-direction: column;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}
.upload-area:hover {
  border-color: #007bff;
}
.event-name-input {
  border: none !important; 
  font-size: 1.5em !important; 
}
</style>