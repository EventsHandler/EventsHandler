<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="bg-blue-600 text-white w-full text-2xl">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <RouterLink to="/" class="flex items-center">
      <img src="/public/logo.svg" alt="logo" />
    </RouterLink>
    
    <div class="flex items-center space-x-12">
      <RouterLink to="/" class="hover:text-blue-200 transition">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-200 transition">About</RouterLink>
      <RouterLink to="/events" class="hover:text-blue-200 transition">Event list</RouterLink>
    </div>
  </div>
</nav>

</template>

<style scoped>
nav { position: fixed }
</style>