<script setup lang="ts">
import router from '@/router';

function loginRedirect() {
  router.push("/auth")
}
</script>

<template>
  <div class="no-loggin">
    <div>Nu esti logat</div>
    <button class="login-button" @click="loginRedirect">Login</button>
  </div>
</template>

<style scoped>
.no-loggin {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>