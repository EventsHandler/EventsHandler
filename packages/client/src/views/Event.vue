<script setup lang="ts">
import Event from '@/components/event/Event.vue'

const event = {
  title: "Eveniment1",
  image: "https://i.simpalsmedia.com/afisha.md/media/original/8e25401f5216382b2267a43918a3b0fc.webp",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential",
  date: '12.09.2025',
  address: 'Stefan Cel Mare',
  creator: { username: "User" },
  announces: [
    { title: "new announce", description: "This is a new announce" },
    { title: "new announce2", description: "This is a new announce2" },
  ],
  participants: [
    { username: "Participant" },
    { username: "Participant2" }
  ]
}
</script>

<template>
  <main>
    <Event :event="event"></Event>
  </main> 
</template>

<style scoped>
main {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}
@media (max-width: 1125px) {
  main {
    flex-direction: column;
  }
}
</style>