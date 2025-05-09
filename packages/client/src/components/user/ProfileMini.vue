<script setup lang="ts">
import { type User } from '@/api/graphql';
defineProps<{
  users: User[] | undefined | null
}>()
</script>

<template>
    <div v-if="users?.length" >
    <div class="participants-title text-2xl">Participanți:</div>
    <ul class="participants-list participants-wrapper" >
      <li v-for="usr in users" :key="usr.id" class="participant-item ml-4">
        <a :href="'/user/'+usr.id" class="participant-link">{{ usr.username }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.participants-wrapper {
  margin-left: .8rem;
  margin-top: 20px;
  padding: 10px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

.participants-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.participants-list {
  list-style-type: disc;
  padding-left: 20px;
}

.participant-item {
  margin-bottom: 4px;
}

.participant-link {
  font-size: 0.85rem;
  color: #2563eb;
  text-decoration: none;
}

.participant-link:hover {
  text-decoration: underline;
}
</style>
