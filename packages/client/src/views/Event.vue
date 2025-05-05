<script setup lang="ts">
import Event from '@/components/event/Event.vue'

const event = {
  title: "Eveniment1",
  image: "https://i.simpalsmedia.com/afisha.md/media/original/8e25401f5216382b2267a43918a3b0fc.webp",
  description: "desc",
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