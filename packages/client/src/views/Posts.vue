<script setup lang="ts">
import posts from '@/tempdb.ts'
import { ref } from 'vue'
import Post from '@/components/event/EventView.vue'

function addToEvent(title) {
    console.log("Adaugat", title)
    
}
</script>

<template>
    <main>
        <Post v-for="post in posts" :post="post"></Post>
    </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>