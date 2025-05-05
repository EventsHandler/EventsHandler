<script setup lang="ts">
defineProps<{
  event: any
}>()
</script>

<template>
  <div class="event">
    <img :src="event.image" :alt="event.title">
    <div>{{ event.title }}</div>
    <div>Start: {{ event.date }}</div>
    <div class="details"><a href="/event">Mai multe detalii</a></div>
  </div>
</template>

<style scoped>
.event {
  min-width: 300px;
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
</style>