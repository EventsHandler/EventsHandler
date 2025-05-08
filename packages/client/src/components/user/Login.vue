<script setup lang="ts">
import AuthTemplate from '@/components/user/AuthTemplate.vue';
import { ref } from 'vue';

import { useMutation } from '@vue/apollo-composable';
import { LoginDocument } from '@/api/graphql';
import router from '@/router';
import { useUserStore } from '@/store/user';

const { mutate } = useMutation(LoginDocument)

const username = ref('');
const password = ref('');

const errors = ref({
  username: '',
  password: ''
});

const userStore = useUserStore()

const validateForm = () => {
  let isValid = true;
  errors.value = {
    username: '',
    password: ''
  };

  if (!username.value) {
    errors.value.username = 'Username este necesară';
    isValid = false;
  }
  if (!password.value) {
    errors.value.password = 'Parola este necesară';
    isValid = false;
  }

  return isValid;
};

async function login() {
  if (!validateForm()) return;
  
  try {
    let res = await mutate({
      username: username.value,
      password: password.value
    })
    if(!res?.data?.login.email) return
    localStorage.setItem('token', res?.data?.login.email)
    userStore.refreshUser()
    router.push("/events")
  } catch(error) {
    console.error(error)
    errors.value.username = 'Username sau parola este incorectă'
  }
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
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.username">{{ errors.username }}</span>
      
      <h1 class="password">Parola:</h1>
      <input type="password" v-model="password" class="auth-input" placeholder="Introdu parola" />
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.password">{{ errors.password }}</span>
    </template>

    <template #button>
      <button class="auth-button" @click="login">Login</button>
      <button class="auth-button-register cursor-pointer" @click="$emit('switch')">Creează un cont</button>
    </template>
  </AuthTemplate>
</template>

<style scoped>
</style>
