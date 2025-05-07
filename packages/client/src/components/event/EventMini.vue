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
  <div class="event">
    <div class="image-wrapper">
      <img :src="'/uploads/' + event.image" :alt="event.title">
    </div>
        <div class="event-mini-info">
        <div class="event-title">{{ event.title }}</div>
        <div class="event-address"><i class="fa fa-location-dot event-icon"></i> {{ event.address }}</div>
        <div class="start-day"><svg class="event-icon" fill="none" stroke="#007bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 3.75h-15A2.25 2.25 0 0 0 2.25 6v13.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Z"></path>
      <path fill="#000000" stroke="none" d="M13.875 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M17.625 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M13.875 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M17.625 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M6.375 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M10.125 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M6.375 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M10.125 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path fill="#000000" stroke="none" d="M13.875 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
      <path d="M6 2.25v1.5"></path>
      <path d="M18 2.25v1.5"></path>
      <path d="M21.75 7.5H2.25"></path>
    </svg> {{ formatDate(event.date) }}</div>
    </div>

    <div class="details"><a :href="'/event/' + event.id">Mai multe detalii</a></div>
  </div>
</template>

<style scoped>
.event {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 10px #0166d1;
  background-color: #fff;
}

.image-wrapper {
  width: 100%;
  height: 150px; 
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.event-mini-info {
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.event-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 5px;
  }

.start-day, .event-address {
  font-size: 14px;
  color: #555;
  margin: 6px 0;
  text-align: flex-start;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
}

.details {
  padding: 12px 25px;
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
  margin-top: 10px;
}

.details:hover {
  background: linear-gradient(45deg, #0056b3, #003d80);
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 123, 255, 0.5);
}

.details a {
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 100%;
}
.event-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #007bff !important;
}
</style>
