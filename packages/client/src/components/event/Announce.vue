<script setup lang="ts">
import { type Announces } from '@/api/graphql';
defineProps<{
  announces: Announces[] | null | undefined
}>()
</script>
<template>
  <div v-if="announces?.length" class="announce-wrapper">
      <h2>Anunțuri:</h2>
      <div v-for="ann in announces" class="announce-box">
          <h3 class="announce-title">{{ ann.title }}</h3> 
          <p v-if="ann.description != ''"  class="announce-description">{{  ann.description }}</p>
      </div>
  </div>
</template>

<style scoped>
.announce-wrapper {
  margin-top: 10px;
  padding: 8px;
}

.section-title {
  font-size: 0.90rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1f2937;
}

.announce-box {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 10px;
  border-radius: 6px;
  margin: 10px
}

.announce-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #0f172a;
}

.announce-description {
  font-size: 0.85rem;
  color: #4b5563;
  line-height: 1.4;
}
</style>