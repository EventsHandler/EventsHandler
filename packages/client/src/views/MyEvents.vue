<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
import { ref } from 'vue'

import { MyEventsDocument, type Event as IEvent } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';

const events = ref<IEvent[] | null>(null)

const { onResult } = useQuery(MyEventsDocument)

onResult(({ data }) => {
  if(data?.myEvents) {
    events.value = data.myEvents as IEvent[]
  }
})
</script>

<template>
  <EventsList v-if="events" :events="events"></EventsList>
</template>
