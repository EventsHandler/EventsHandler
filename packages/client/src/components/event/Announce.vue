<script setup lang="ts">
import { type Announces } from '@/api/graphql';
defineProps<{
  announce: Announces
}>()
</script>
<template>
  <div v-if="announce">
      <h2>Anunțuri:</h2>
      <div>
          <h3>{{ announce.title }}</h3> 
          <p v-if="announce.description != ''">{{  announce.description }}</p>
      </div>
  </div>
</template>