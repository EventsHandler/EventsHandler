<script setup lang="ts">
defineProps<{
  users: any
}>()
</script>

<template>
  <div v-for="user in users" class="m-4 text-2xl">{{ user.username }}</div>
</template>