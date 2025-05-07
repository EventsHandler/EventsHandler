<script setup lang="ts">
import EventMini from '@/components/event/EventMini.vue';
defineProps<{
  events: any
}>()
</script>

<template>
  <main>
    <EventMini v-for="event in events" :event="event"></EventMini>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 3rem;
}
</style>