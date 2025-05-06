<script setup lang="ts">
import { type User } from '@/api/graphql';
defineProps<{
  user: User
}>()
</script>

<template>
  <div class="m-4 text-2xl">{{ user.username }}</div>
</template>