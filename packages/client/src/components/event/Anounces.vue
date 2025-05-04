<script setup lang="ts">
defineProps<{
  anounces: any
}>()
</script>

<template>
  <div v-if="anounces.length != 0">
      <h2>Anunțuri:</h2>
      <div v-for="anounce in anounces">
          <h3>Bla bla{{ anounce.title }}</h3> 
          <p v-if="anounce.desc != ''">{{  anounce.desc }}</p>
      </div>
  </div>
</template>