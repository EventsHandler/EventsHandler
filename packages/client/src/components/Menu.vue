<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';

const userStore = useUserStore()
onMounted(() => {
  userStore.refreshUser()
})
</script>

<template>
<RouterLink to="/create" class="block hover:text-blue-200 transition" @click="$emit('close-menu')">
  Crează
</RouterLink>
<RouterLink to="/myEvents" class="block hover:text-blue-200 transition" @click="$emit('close-menu')">
  Evenimentele mele
</RouterLink>
<RouterLink to="/events" class="block hover:text-blue-200 transition" @click="$emit('close-menu')">
  Evenimente
</RouterLink>
<RouterLink to="/auth" class="block hover:text-blue-200 transition" @click="$emit('close-menu')">
  {{ userStore.user?.username ?? "Cont" }}
</RouterLink>
</template>