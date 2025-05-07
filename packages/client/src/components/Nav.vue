<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Menu from './Menu.vue'
import { ref } from 'vue'
import logo from '../assets/logo.svg'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-blue-600 text-white w-full text-2xl">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <img :src="logo" alt="logo" />
        </RouterLink>

        <button @click="toggleMenu" class="md:hidden inline-flex items-center justify-center">
          <svg class="h-8 w-8" :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="h-8 w-8" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="hidden md:flex items-center space-x-12">
          <Menu @close-menu="isMenuOpen = false" />
        </div>
      </div>

      <div class="md:hidden" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }">
        <hr class="border-t-2">
        <div class="pl-5 py-5 space-y-5">
          <Menu @close-menu="isMenuOpen = false" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>