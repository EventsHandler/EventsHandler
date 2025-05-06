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
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 3rem;
  min-height: 100vh;
  justify-content: center;
}
</style>