<script setup lang="ts">
import Event from '@/components/event/Event.vue'

import { EventDocument, type Event as IEvent, type User } from '@/api/graphql'
import { useQuery } from '@vue/apollo-composable'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'

const route = useRoute()

const event = ref<IEvent | null>(null)

const { result, refetch, loading, onResult } = useQuery(EventDocument, { eventId: (route.params.id as string) || "" })

onResult(({data}) => {
  if(data?.event) {
    event.value = data.event as IEvent
  }
})

const userStore = useUserStore()

onMounted(() => {
  refetch()
  userStore.refreshUser()
})
</script>

<template>
  <main>
    <Event v-if="event" :event="event" :user="userStore.user"></Event>
  </main> 
</template>

<style scoped>
main {
  display: flex;
  min-height: calc(100vh - 30px);
  justify-content: center;
  background-color: #f9fafb;
}
@media (max-width: 1125px) {
  main {
    flex-direction: column;
  }
}
</style>