<script setup lang="ts">
import AuthTemplate from '@/components/user/AuthTemplate.vue';
import { ref } from 'vue';

import { useMutation } from '@vue/apollo-composable';
import { RegisterDocument } from '@/api/graphql';
import router from '@/router';
import { useUserStore } from '@/store/user';

const { mutate } = useMutation(RegisterDocument)

const email = ref('');
const username = ref('');
const password = ref('');
const confirm = ref('');

const errors = ref({
  email: '',
  username: '',
  password: '',
  confirm: '',
  general: ''
});

const userStore = useUserStore()

const validateForm = () => {
  let isValid = true;
  errors.value = {
    email: '',
    username: '',
    password: '',
    confirm: '',
    general: ''
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    errors.value.email = 'Email este necesar';
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    errors.value.email = 'Adresa de email este invalidă';
    isValid = false;
  }

  if (!username.value) {
    errors.value.username = 'Username este necesar';
    isValid = false;
  } else if (username.value.length < 3) {
    errors.value.username = 'Username trebuie să aibă minim 3 caractere';
    isValid = false;
  }

  if (!password.value) {
    errors.value.password = 'Parola este necesară';
    isValid = false;
  } else if (password.value.length < 8) {
    errors.value.password = 'Parola trebuie să aibă minim 8 caractere';
    isValid = false;
  }

  if (!confirm.value) {
    errors.value.confirm = 'Confirmați parola';
    isValid = false;
  } else if (confirm.value !== password.value) {
    errors.value.confirm = 'Parolele nu coincid';
    isValid = false;
  }

  return isValid;
};

async function register() {
  if (!validateForm()) return;
  
  try {
    let res = await mutate({
      email: email.value,
      username: username.value,
      password: password.value
    })
    if(!res?.data?.register.email || !res?.data?.register.username) {
      errors.value.general = 'Un utilizator cu acest email sau username există deja';
      return;
    }
    localStorage.setItem('token', res?.data?.register.email)
    userStore.refreshUser()
    router.push("/events")
  } catch(error) {
    console.error(error)
    errors.value.general = 'A apărut o eroare la înregistrare. Vă rugăm să încercați din nou.';
  }
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
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.general">{{ errors.general }}</span>
      <h1 class="email">Email:</h1>
      <input type="text" v-model="email" class="auth-input" placeholder="exemplu@email.com" />
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.email">{{ errors.email }}</span>
      
      <h1 class="username">Numele de utilizator:</h1>
      <input type="text" v-model="username" class="auth-input" placeholder="ana123" />
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.username">{{ errors.username }}</span>
      
      <h1 class="password">Parola:</h1>
      <input type="password" v-model="password" class="auth-input" placeholder="Cel puțin 8 caractere" />
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.password">{{ errors.password }}</span>
      
      <h1 class="confirm-password">Confirmă parola:</h1>
      <input type="password" v-model="confirm" class="auth-input" placeholder="Reintrodu parola" />
      <span class="text-red-500 text-sm mt-1 block" v-if="errors.confirm">{{ errors.confirm }}</span>
    </template>

    <template #button>
      <button class="auth-button" @click="register">Creează cont</button>
      <button class="auth-button-register cursor-pointer" @click="$emit('switch')">Loghează-te</button>
    </template>
  </AuthTemplate>
</template>

<style scoped>
</style>
