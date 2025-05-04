<script setup lang="ts">
import AuthTemplate from '@/components/AuthTemplate.vue';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const registerUsername = ref('');
const registerPassword = ref('');
const confirmPassword = ref('');

const register = () => {
  console.log('Register with:', firstName.value, lastName.value, registerUsername.value, registerPassword.value, confirmPassword.value);
};
</script>

<template>
  <AuthTemplate>
    <template #title>
      <h1 class="auth-title">Creează un cont</h1>
    </template>

    <template #subtitle>
      <p class="auth-subtitle">Completează formularul pentru a te înregistra</p>
    </template>

    <template #input-header>
      <h1 class="first-name">Numele:</h1>
      <input type="text" v-model="firstName" class="auth-input" placeholder="Popescu" />
      <h1 class="last-name">Prenumele:</h1>
      <input type="text" v-model="lastName" class="auth-input" placeholder="Ana" />
      <h1 class="username">Numele de utilizator:</h1>
      <input type="text" v-model="registerUsername" class="auth-input" placeholder="ana123" />
      <h1 class="password">Parola:</h1>
      <input type="password" v-model="registerPassword" class="auth-input" placeholder="Cel puțin 8 caractere" />
      <h1 class="confirm-password">Confirmă parola:</h1>
      <input type="password" v-model="confirmPassword" class="auth-input" placeholder="Reintrodu parola" />
    </template>

    <template #button>
      <button class="auth-button" @click="register">Creează cont</button>
      <button class="auth-button-register" @click="$emit('switch')">Loghează-te</button>
    </template>
  </AuthTemplate>
</template>
