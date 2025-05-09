<script setup lang="ts">
import Profile from '@/components/user/Profile.vue';
import { UserDocument, JoinedEventsDocument, type User, type Event } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import EventsList from '@/components/event/EventsList.vue';
const route = useRoute()

const { onResult } = useQuery(UserDocument, { userId: route.params.id as string })
const { onResult: onResultJoined } = useQuery(JoinedEventsDocument, { userId: route.params.id as string })
const user = ref<User | null>(null)
const joined = ref<Event[] | null>(null)
onResult(({data}) => {
  if(data?.user) {
    user.value = data.user as User
  }
})
onResultJoined(({data}) => {
  if(data?.joinedEvents) {
    joined.value = data.joinedEvents as Event[]
  }
})
</script>

<template>
  <div class="flex lg:flex-row flex-col w-[100%]">
    <Profile v-if="user" :user />
    <div class="w-full">
      <div class="p-5 text-center bg-blue-600 m-10 text-white text-3xl rounded-lg">Organizator</div>
      <EventsList :noSearchBar="true" :events="user?.createdEvents" />
      <div class="p-5 text-center bg-blue-600 m-10 text-white text-3xl rounded-lg">Participant</div>
      <EventsList :noSearchBar="true" :events="joined" />
    </div>
  </div>
</template>

<style scoped>
  main {
    width: 100%;
  }
</style>