<script setup lang="ts">
import Anounces from '@/components/event/Anounces.vue'
import Participants from '@/components/user/ProfileMini.vue'
defineProps<{
  post: any
}>()
function addToEvent(title: String) {
  console.log("adaugat in ", title)
}
</script>

<template>
        <div>
            <h1 class="title">{{ post.title }}</h1>

            <div class="image-wrapper">
                <img :src="post.image" :alt="`event-${post.title}-image`">
            </div>

            <div class="description">{{ post.desc }}</div>

            <p class="info"><strong>Evenimentul va avea luc pe data de:</strong> {{ post.date }}</p>
            <p class="info"><strong>Adresa desfasurarii evenimentului:</strong> {{ post.adress }}</p>

            <Anounces :anounces="post.anounces" class="section"></Anounces>

            <Participants :users="post.participants" class="section"></Participants>

            <div class="join-button">
                <button @click="() => addToEvent(post.title)">Alatura-te evenimentului</button>
            </div>

        </div>
</template>

<style scoped>
.post {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.image-wrapper img {
  max-width: 100%;
  border-radius: 8px;
  margin: 10px 0;
}

.description {
  margin: 10px 0;
}

.info {
  margin: 5px 0;
}

.section {
  margin: 10px 0;
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
</style>