<script setup lang="ts">
import CreateEvent from '@/components/event/Create.vue';
import NoLoggin from '@/components/assets/NoLoggin.vue';
import { onMounted, ref, toRef } from 'vue';

import { CreateEventDocument, CategorysDocument, type Category, EventDocument, EditEventDocument, DeleteEventDocument } from '@/api/graphql';
import { useMutation, useQuery } from '@vue/apollo-composable';

import router from '@/router'
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';

const route = useRoute()

const { mutate } = useMutation(CreateEventDocument)
const { mutate: mutateEdit } = useMutation(EditEventDocument)
const { mutate: mutateDelete } = useMutation(DeleteEventDocument)
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
    form.value.imagePreview = `http://localhost:3000/uploads/${data.event.image}`
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

const addEvent = async () => {
  const sendDateToClient = `${form.value.date}T${form.value.time}:00.000Z`
  await mutate({
    title: form.value.title,
    description: form.value.description,
    image: image.value,
    date: sendDateToClient,
    address: form.value.location,
    categoryName: form.value.category
  })
  router.push('/events')
};

const editEvent = async () => {
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

const userStore = useUserStore()
</script>

<template>
  <main>
    <CreateEvent v-if="userStore.user">
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
      </template>


      <template #event-name-input>
        <input type="text" v-model="form.title" placeholder="Denumirea evenimentului" class="event-name-input"/>
      </template>

      <template #event-desc-input>
        <textarea v-model="form.description" placeholder="Descrierea evenimentului"></textarea>
      </template>

      <template #event-date-input>
        <input type="date" v-model="form.date" />
      </template>

      <template #event-time-input>
        <input type="time" v-model="form.time" />
      </template>

      <template #event-location-input>
        <input type="text" v-model="form.location" placeholder="Locația evenimentului" />
      </template>

      <template #event-category-input>
        <select v-model="form.category">
          <option value="">Selectează categoria</option>
          <option v-for="c in categories" :value="c.name">{{ c.name }}</option>
        </select>
      </template>

      <template #create-button>
        <button v-if="!result?.event" @click="addEvent">Create Event</button>
        <div v-else class="flex flex-col">
          <button @click="editEvent">Edit Event</button>
          <button @click="deleteEvent">Delete Event</button>
        </div>
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