<script setup lang="ts">
import { type Event } from '@/api/graphql';

defineProps<{
  event: Event
}>();

function formatDate(date: string) {
  return new Date(date).toLocaleString('ro-RO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}
</script>

<template>
  <div class="event-card">
    <img class="event-image" :src="'http://localhost:3000/uploads/' + event.image" :alt="event.title" />
    <div class="event-content">
      <h3 class="event-title">{{ event.title }}</h3>
      <p class="event-date">📅 {{ formatDate(event.date) }}</p>
      <a class="event-link" :href="'/event/' + event.id">Mai multe detalii</a>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease-in-out;
}
.event-card:hover {
  transform: translateY(-5px);
}
.event-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.event-content {
  padding: 16px;
}
.event-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.event-date {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 12px;
}
.event-link {
  display: inline-block;
  padding: 10px 16px;
  background-color: #3b82f6;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.event-link:hover {
  background-color: #2563eb;
}
</style>
