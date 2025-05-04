<script setup lang="ts">
import AuthTemplate from '@/components/AuthTemplate.vue';
import { ref } from 'vue';


const username = ref('');
const password = ref('');

const login = () => {
  console.log('Login with:', username.value, password.value);
};
</script>

<template>
  <AuthTemplate>
    <template #title>
      <h1 class="auth-title">Ești gata să te loghezi?</h1>
    </template>

    <template #subtitle>
      <p class="auth-subtitle">Bine ai revenit. Te-am așteptat!</p>
    </template>

    <template #input-header>
      <h1 class="username">Nickname-ul:</h1>
      <input type="text" v-model="username" class="auth-input" placeholder="Introdu numele tău de utilizator" />
      <h1 class="password">Parola:</h1>
      <input type="password" v-model="password" class="auth-input" placeholder="Introdu parola" />
    </template>

    <template #button>
      <button class="auth-button" @click="login">Login</button>
      <button class="auth-button-register" @click="$emit('switch')">Creează un cont</button>
    </template>
  </AuthTemplate>
</template>
