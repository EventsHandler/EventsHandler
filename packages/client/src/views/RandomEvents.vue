<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
import Chatbot from '@/components/event/Chatbot.vue';

import { ref } from 'vue'

import { EventsDocument, type Event as IEvent } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';

const events = ref<IEvent[] | null>(null)
const category = ref<string | null>(null)

const { result, refetch, onResult, loading } = useQuery(EventsDocument, { category: category.value })

onResult(({data}) => {
  if(data?.events) {
    events.value = data.events as IEvent[]
  }
})

function refetchCategory(c: string | null) {
  category.value = c
  refetch({ category: category.value })
}

</script>

<template>
  <EventsList :noSearchBar="false" v-if="events" :events="events" @refetchCategory="(c) => refetchCategory(c)"></EventsList>
  <Chatbot @refetch-category="(c) => refetchCategory(c)"></Chatbot>
</template>
