<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import logo from '../assets/logo.svg'

const isMenuOpen = ref(false)
const isEventsOpen = ref(false)
const userStore = useUserStore()

onMounted(() => {
  userStore.refreshUser()
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleEvents = () => {
  isEventsOpen.value = !isEventsOpen.value
}
</script>

<template>
  <nav class="bg-blue-600 text-white text-2xl">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <img :src="logo" alt="logo" />
        </RouterLink>

        <button @click="toggleMenu" class="lg:hidden inline-flex items-center justify-center">
          <svg class="h-8 w-8" :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="h-8 w-8" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="hidden lg:flex items-center space-x-12">
          <RouterLink to="/create" class="block hover:text-blue-200 transition">
            Crează
          </RouterLink>
          
          <div class="relative group">
            <button 
              @click="toggleEvents"
              class="hover:text-blue-200 transition flex items-center cursor-pointer"
            >
              Evenimente
              <svg 
                class="w-4 h-4 ml-1 transition-transform"
                :class="{ 'rotate-180': isEventsOpen }"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <!-- Invisible bridge to maintain hover state -->
            <div class="absolute inset-x-0 h-2 -bottom-2"></div>
            
            <div 
              v-show="isEventsOpen"
              class="absolute left-0 mt-2 rounded-b-md bg-blue-600 z-50 w-60"
            >
              <div class="py-1 w-full">
                <RouterLink 
                  to="/events" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200"
                  @click="isEventsOpen = false"
                >
                  Aleatorii
                </RouterLink>
                <RouterLink 
                  to="/joined" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200"
                  @click="isEventsOpen = false"
                >
                  Participările mele
                </RouterLink>
                <RouterLink 
                  to="/myEvents" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200"
                  @click="isEventsOpen = false"
                >
                  Evenimentele mele
                </RouterLink>
              </div>
            </div>
          </div>

          <RouterLink to="/auth" class="block hover:text-blue-200 transition">
            {{ userStore.user?.username ?? "Cont" }}
          </RouterLink>
        </div>
      </div>

      <div class="lg:hidden" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }">
        <hr class="border-t-2">
        <div class="pl-5 py-5 space-y-5">
          <RouterLink to="/create" class="block hover:text-blue-200 transition" @click="isMenuOpen = false">
            Crează
          </RouterLink>
          
          <div class="relative">
            <button 
              @click="toggleEvents"
              class="hover:text-blue-200 transition flex items-center"
            >
              Evenimente
              <svg 
                class="w-4 h-4 ml-1 transition-transform"
                :class="{ 'rotate-180': isEventsOpen }"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <div 
              v-show="isEventsOpen"
              class="mt-2 w-48 w-full"
            >
              <div class="py-1 w-full">
                <RouterLink 
                  to="/events" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200 w-full"
                  @click="isMenuOpen = false"
                >
                  Aleatorii
                </RouterLink>
                <RouterLink 
                  to="/joined" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200 w-full"
                  @click="isMenuOpen = false"
                >
                  Participările mele
                </RouterLink>
                <RouterLink 
                  to="/myEvents" 
                  class="block px-4 py-2 text-[1.25rem] hover:text-blue-200 w-full"
                  @click="isMenuOpen = false"
                >
                  Evenimentele mele
                </RouterLink>
              </div>
            </div>
          </div>

          <RouterLink to="/auth" class="block hover:text-blue-200 transition" @click="isMenuOpen = false">
            {{ userStore.user?.username ?? "Cont" }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>