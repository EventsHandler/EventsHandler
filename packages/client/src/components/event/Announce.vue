<script setup lang="ts">
defineProps<{
  announces: any
}>()
</script>

<template>
  <div v-for="anounce in announces" class="m-4">
      <div class="text-2xl">{{ anounce.title }}</div> 
      <div class="desc" v-if="anounce.description != ''">{{  anounce.description }}</div>
  </div>
</template>

<style scoped>
.desc {
  color: #666
}
</style>