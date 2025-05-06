<script setup lang="ts">
import Announces from './Announce.vue';
import Participants from '../user/ProfileMini.vue';
import { ref } from 'vue'

import { MeDocument, type User, type Event } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';

const { onResult } = useQuery(MeDocument)

const me = ref<User | null>(null)

defineProps<{
  event: Event
}>()

function edit(event: string) {}
function join(event: string) {}
function announce(event: string) {}
function formatDate(date: string) {
  return new Date(date).toLocaleString("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

onResult(({data}) => {
  if(data?.me) {
    me.value = data.me as User
  }
})

const showFullDescription = ref(false)
</script>

<template>
  <div class="event-container">
    <img :src="'http://localhost:3000/uploads/' + event.image" class="event-image" />

    <div class="event-content-grid">
      <div class="event-info">
        <h1>{{ event.title }}</h1>
        <div><p>
  {{ showFullDescription ? event.description : event.description.slice(0, 200) + '...' }}
</p>
<button v-if="event.description.length > 200" @click="showFullDescription = !showFullDescription" class="toggle-description-btn">
  {{ showFullDescription ? 'Afișează mai puțin' : 'Afișează mai mult' }}
</button></div>
        <Announces v-for="announce in event.announces" :announce="announce" />
        <p v-if="event.category"><strong>Category:</strong> {{ event.category.name }}</p>
        <Participants v-for="user in event.participants" :user="user" />
      </div>
      <div class="detaiils-container">
        <button v-if="me?.id != event.creator.id" @click="() => join(event.id)">Alătură-te evenimentului</button>
        <button v-else @click="() => edit(event.id)">Editează evenimentul</button>
        <button v-if="me?.id == event.creator.id" @click="() => announce(event.id)">Posteaza un anunț</button>
        <div><i class="fa fa-location-arrow"></i> {{ event.address }}</div>
        <div><i class="fa-solid fa-clock"></i> {{ formatDate(event.date) }}</div>
        <div><i class="fa fa-user"></i> <a href="">{{ event.creator.username }}</a></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.event-container {
  width: 100%;
  padding: 5rem;
  background-color: #f9fafb;
}
@media (max-width: 768px) {
  .event-container {
    padding: 2rem;
  }  
}
.event-image {
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: block;
  margin: 0 auto 2rem auto;
}
.event-content-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
}
.event-info {
  max-width: 700px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.event-info h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.event-info > div,
.event-info p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
}
.toggle-description-btn {
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  margin-top: -0.5rem;
  display: inline-block;
  transition: color 0.2s ease;
}
.toggle-description-btn:hover {
  color: #0056b3;
  text-decoration: underline;
}
.detaiils-container {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    position: sticky;
  top: 2rem;
}
.detaiils-container div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.detaiils-container i {
  color: #007bff;
  font-size: 1.2rem;
}
.detaiils-container a {
  color: #28a745;
  text-decoration: none;
  font-weight: 500;
}
.detaiils-container a:hover {
  text-decoration: underline;
}
.detaiils-container button {
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.detaiils-container button:hover {
  background-color: #0056b3;
  transform: scale(1.02);
}
@media (max-width: 768px) {
  .event-content-grid {
    grid-template-columns: 1fr;
  }
  .detaiils-container {
    width: 100%;
    margin-top: 1.5rem;
  }
}
</style>