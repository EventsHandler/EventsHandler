<script setup lang="ts">
defineProps<{
  name?: string
}>()
</script>

<template>
  <div>
    <div>{{ name }}</div>   
  </div>
</template>