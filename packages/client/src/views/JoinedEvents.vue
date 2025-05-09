<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
import NoLoggin from '@/components/assets/NoLoggin.vue';
import { onMounted, ref, watch } from 'vue'

import { JoinedEventsDocument, type Event as IEvent } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const events = ref<IEvent[] | null>(null)

const { onResult, refetch, loading } = useQuery(JoinedEventsDocument)

onResult(({ data }) => {
  if(data?.joinedEvents) {
    events.value = data.joinedEvents as IEvent[]
  }
})

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

watch(user, () => {
  refetch()
}, { immediate: true })

</script>

<template>
  <EventsList :noSearchBar="false" v-if="events && userStore.user && !loading" :events="events"></EventsList>
  <NoLoggin v-else-if="!userStore.loading && !loading" />
</template>