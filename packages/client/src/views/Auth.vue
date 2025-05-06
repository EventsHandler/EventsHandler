<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Login from '@/components/user/Login.vue';
import Register from '@/components/user/Register.vue';
import { useUserStore } from '@/store/user';

function logout() {
  localStorage.removeItem('token')
  window.location.reload()
}

const switchLog = ref(true); 
const switching = () => {
  switchLog.value = !switchLog.value;
};

const userStore = useUserStore()
onMounted(() => {
  userStore.refreshUser()
})
</script>

<template>
  <main>
    <div v-if="!userStore.user">
      <Login v-if="switchLog" @switch="switching"/>
    
      <Register v-else @switch="switching"/>
    </div>
    <div v-else-if="!userStore.loading">
      <div>Salut {{ userStore.user?.username }}, deja esti logat</div>
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: #f7f7f7;
}

.logout-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
