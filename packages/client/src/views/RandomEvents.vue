<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
import { ref } from 'vue'

import { EventsDocument, type Event as IEvent } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';

const load = ref<boolean>(false)
const events = ref<IEvent[] | null>(null)

const { result, refetch, onResult, loading } = useQuery(EventsDocument)

onResult(({data}) => {
  if(data?.events) {
    events.value = data.events as IEvent[]
  }
})

</script>

<template>
  <EventsList v-if="events" :events="events"></EventsList>
</template>
