<script setup lang="ts">
import Announce from './Announce.vue';
import ProfileMini from '../user/ProfileMini.vue';
import { ref } from 'vue'

import { MeDocument, type User } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';

const { onResult } = useQuery(MeDocument)

const me = ref<User | null>(null)

defineProps<{
  event: any
}>()

function edit(event: string) {}
function join(event: string) {}

onResult(({data}) => {
  if(data?.me) {
    me.value = data.me as User
  }
})

</script>

<template>
  <div class="event">
    <img :src="'http://localhost:3000/uploads' + event.image" :alt="event.title">
  </div>
  <div class="event">
    <div class="text-center text-3xl bold m-8">{{ event.title }}</div>
    <div class="desc m-8">{{ event.description }}</div>
    <div>Eventul va avea loc pe: {{ event.date }}</div>
    <div>Locatie: {{ event.address }}</div>
    <div v-if="event.creator">Creator: {{ event.creator.username }}</div>
    <div v-if="event.announces" class="m-8">
      <div class="text-2xl">Anunturi:</div>
      <Announce :announces="event.announces"></Announce>
    </div>
    <div v-if="event.participants" class="m-8">
      <div class="text-2xl">Participanti:</div>
      <ProfileMini :users="event.participants"></ProfileMini>
    </div>
    <div v-if="me?.id != event.creator?.id" class="join-button">
      <button @click="() => join(event.id)">Alatura-te evenimentului</button>
    </div>
    <div v-else class="join-button">
      <button @click="() => edit(event.id)">Editeaza evenimentul</button>
    </div>
  </div>
</template>

<style scoped>
.event {
  width: 50vw;
  padding: 3rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.desc {
  color: #666
}

.join-button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  text-align: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.join-button:hover {
  background-color: #2563eb;
}

@media (max-width: 1125px) {
  .event {
    width: 100%
  }
}
</style>
