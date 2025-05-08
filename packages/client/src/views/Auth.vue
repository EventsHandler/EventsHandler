<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Login from '@/components/user/Login.vue';
import Register from '@/components/user/Register.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()

function logout() {
  localStorage.removeItem('token')
  userStore.refreshUser()
}

const switchLog = ref(true); 
const switching = () => {
  switchLog.value = !switchLog.value;
};
</script>

<template>
  <main class="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50">
    <div v-if="!userStore.user">
      <Login v-if="switchLog" @switch="switching"/>
      <Register v-else @switch="switching"/>
    </div>
    <div v-else-if="!userStore.loading">
      <div class="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-[90%]">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Bine ai revenit, {{ userStore.user?.username }}!</h2>
        <p class="text-gray-600 mb-6 text-lg">Contul tău este activ și gata de utilizare</p>
        <button 
          @click="logout"
          class="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition-all duration-200 hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
        >
          Deconectare
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>