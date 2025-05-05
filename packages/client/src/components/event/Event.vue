<script setup lang="ts">
defineProps<{
  event: any
}>()
</script>

<template>
  <div>{{ event.title }}</div>
</template>
