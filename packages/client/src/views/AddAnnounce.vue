<script setup lang="ts">
import Announce from '@/components/event/AddAnnounceTemplate.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { CreateAnnounceDocument } from '@/api/graphql';
import { useMutation } from '@vue/apollo-composable';
import router from '@/router';

const { mutate } = useMutation(CreateAnnounceDocument)

const title = ref('')
const description = ref('')

const errors = ref({
  title: '',
  description: ''
});

const route = useRoute()

const validateForm = () => {
  let isValid = true;
  errors.value = {
    title: '',
    description: ''
  };

  if (!title.value) {
    errors.value.title = 'Titlul este necesar';
    isValid = false;
  } else if (title.value.length < 3) {
    errors.value.title = 'Titlul trebuie să aibă minim 3 caractere';
    isValid = false;
  }

  if (!description.value) {
    errors.value.description = 'Descrierea este necesară';
    isValid = false;
  } else if (description.value.length < 10) {
    errors.value.description = 'Descrierea trebuie să aibă minim 10 caractere';
    isValid = false;
  }

  return isValid;
};

const addAnnounce = async () => {
  if (!validateForm()) return;

  try {
    const result = await mutate({
      description: description.value,
      title: title.value,
      eventId: route.params.id as string
    });
    await router.push("/event/" + route.params.id);
  } catch (error) {
    console.error('Error creating announcement:', error);
  }
};

</script>

<template>
  <main>
    <Announce>
      <template #announce-title>
        <input type="text" v-model="title" placeholder="Denumirea anunțului" class="event-name-input" />
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.title">{{ errors.title }}</span>
      </template>
      <template #announce-desc>
        <textarea v-model="description" placeholder="Descrierea anunțului" class="event-description-input" />
        <span class="text-red-500 text-sm mt-1 block" v-if="errors.description">{{ errors.description }}</span>
      </template>
      <template #add-announce-button>
        <button class="add-announce-button" @click="addAnnounce">Adaugă anunț</button>
      </template>
    </Announce>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.event-name-input {
  border: none !important;
  font-size: 1.5em !important;
}
</style>