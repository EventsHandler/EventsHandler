<script setup lang="ts">
defineProps<{
  announces: any
}>()
</script>
<template>
  <div v-if="announces.length !== 0">
      <h2>Anunțuri:</h2>
      <div v-for="announce in announces">
          <h3>{{ announce.title }}</h3> 
          <p v-if="announce.desc != ''">{{  announce.description }}</p>
      </div>
  </div>
</template>