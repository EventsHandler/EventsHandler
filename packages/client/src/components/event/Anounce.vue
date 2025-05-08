<script setup lang="ts">
defineProps<{
  title?: string
  desc?: string
}>()
</script>

<template>
  <div>
    <div>{{ title }}</div>
    <p>{{ desc }}</p>
  </div>
</template>