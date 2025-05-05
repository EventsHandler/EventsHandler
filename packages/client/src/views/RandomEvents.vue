<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
const events = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]
</script>

<template>
  <EventsList :events="events"></EventsList>
</template>
