<script setup lang="ts">
import { type Event } from '@/api/graphql';
defineProps<{
  event: Event
}>()
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
</script>

<template>
  <div class="event">
    <img :src="'/uploads/' + event.image" :alt="event.title">
    <div>{{ event.title }}</div>
    <div>Start: {{ formatDate(event.date) }}</div>
    <div class="details"><a :href="'/event/' + event.id">Mai multe detalii</a></div>
  </div>
</template>

<style scoped>
.event {
  width: 300px;
  height: 100%;
}
img {
  max-width: 300px;
}
.details {
  padding: 10px 20px;
  border: none;
  text-align: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.details a {
  width: 100%;
  height: 100%;
}
</style>