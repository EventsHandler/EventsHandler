<script setup lang="ts">
import Event from '@/components/event/Event.vue'

import { EventDocument } from '@/api/graphql'
import { useQuery } from '@vue/apollo-composable'
import { ref } from 'vue'

const { result, refetch, loading } = useQuery(EventDocument, { eventId: "t9gr2275a3523vdfglcj7r20" })
console.log(result)

</script>

<template>
  <main>
    <Event :event="result"></Event>
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