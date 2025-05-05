<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <!-- <RouterLink to="/"><img src="/public/favicon.ico" alt="logo" ></RouterLink> -->
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/events">Event list</RouterLink>
  </nav>
</template>

<style scoped>
nav { position: fixed }
</style>