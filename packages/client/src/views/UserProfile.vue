<script setup lang="ts">
import Profile from '@/components/user/Profile.vue';
import { UserDocument, type User } from '@/api/graphql';
import { useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import EventsList from '@/components/event/EventsList.vue';
const route = useRoute()

const { onResult } = useQuery(UserDocument, { userId: route.params.id as string })
const user = ref<User | null>(null)
onResult(({data}) => {
  if(data?.user) {
    user.value = data.user as User
  }
})
</script>

<template>
  <div class="flex lg:flex-row flex-col w-[100%]">
    <Profile v-if="user" :user />
    <EventsList :noSearchBar="true" :events="user?.createdEvents" />
  </div>
</template>

<style scoped>
  main {
    width: 100%;
  }
</style>