<script setup lang="ts">
import Event from '@/components/event/Event.vue'

import { EventDocument, type Event as IEvent } from '@/api/graphql'
import { useQuery } from '@vue/apollo-composable'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const event = ref<IEvent | null>(null)

const { result, refetch, loading, onResult } = useQuery(EventDocument, { eventId: (route.params.id as string) || "" })

onResult(({data}) => {
  if(data?.event) {
    event.value = data.event as IEvent
  }
})
</script>

<template>
  <main>
    <Event v-if="event" :event="event"></Event>
  </main> 
</template>

<style scoped>
main {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}
@media (max-width: 1125px) {
  main {
    flex-direction: column;
  }
}
</style>