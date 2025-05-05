<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/components/user/Login.vue';
import Register from '@/components/user/Register.vue';

const switchLog = ref(true); 
const switching = () => {
  switchLog.value = !switchLog.value;
};
</script>

<template>
  <main>
    <Login v-if="switchLog" @switch="switching"/>
  
    <Register v-else @switch="switching"/>
  </main>
</template>

<style scoped>
div, main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
}
</style>
