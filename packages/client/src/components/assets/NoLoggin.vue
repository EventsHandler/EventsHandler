<script setup lang="ts">
import router from '@/router';

function loginRedirect() {
  router.push("/auth")
}
</script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-[90%]">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Bine ai venit!</h2>
      <p class="text-gray-600 mb-6 text-lg cursor-pointer">Te rugăm să te autentifici pentru a accesa această pagină</p>
      <button 
        @click="loginRedirect"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        Autentificare
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>