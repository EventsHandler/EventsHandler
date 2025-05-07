<script setup lang="ts">
import EventsList from '@/components/event/EventsList.vue';
import NoLoggin from '@/components/assets/NoLoggin.vue';
import { onMounted, ref, watch } from 'vue'

import { MyEventsDocument, type Event as IEvent } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';
import router from '@/router';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const events = ref<IEvent[] | null>(null)

const { onResult, refetch, loading } = useQuery(MyEventsDocument)

onResult(({ data }) => {
  if(data?.myEvents) {
    events.value = data.myEvents as IEvent[]
  }
})

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

watch(user, () => {
  refetch()
})

</script>

<template>
  <EventsList v-if="events && userStore.user && !loading" :events="events"></EventsList>
  <NoLoggin v-else-if="!userStore.loading && !loading" />
</template>