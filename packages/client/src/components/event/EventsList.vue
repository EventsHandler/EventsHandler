<script setup lang="ts">
import EventMini from '@/components/event/EventMini.vue';
import { ref, computed } from 'vue';
import { type Event } from '@/api/graphql';

const props = defineProps<{
  events: any
  noSearchBar: boolean | undefined
}>();

const searchQuery = ref('');

const filteredEvents = computed(() => {
  if (!searchQuery.value) return props.events;
  
  return props.events.filter((event: any) => {
    const searchLower = searchQuery.value.toLowerCase();
    return (
      event.creator.username.toLowerCase().includes(searchLower) ||
      event.category.name.toLowerCase().includes(searchLower)
    );
  });
});
</script>

<template>
  <main class="p-8">
    <div class="max-w-7xl mx-auto mb-8" v-if="!noSearchBar">
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Caută..."
          class="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <i class="fa fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>

    <div v-if="filteredEvents && filteredEvents.length > 0" class="grid lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      <EventMini v-for="event in filteredEvents" :event="event"></EventMini>
    </div>
    <div v-else class="bg-white p-12 rounded-xl shadow-md text-center max-w-md mx-auto">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Nu există evenimente</h2>
      <p class="text-gray-600 text-lg">Momentan nu există evenimente disponibile. Verifică mai târziu sau creează unul nou!</p>
    </div>
  </main>
</template>

<style scoped>
input::placeholder {
  color: #9CA3AF;
}
</style>