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

const userStore = useUserStore()

async function register() {
  try {
    let res = await mutate({
      email: email.value,
      username: username.value,
      password: password.value
    })
    if(!res?.data?.register.email) return
    localStorage.setItem('token', res?.data?.register.email)
    userStore.refreshUser()
    router.push("/events")
  } catch(error) {
    console.error(error)
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
      <h1 class="email">Email:</h1>
      <input type="text" v-model="email" class="auth-input" placeholder="exemplu@email.com" />
      <h1 class="username">Numele de utilizator:</h1>
      <input type="text" v-model="username" class="auth-input" placeholder="ana123" />
      <h1 class="password">Parola:</h1>
      <input type="password" v-model="password" class="auth-input" placeholder="Cel puțin 8 caractere" />
      <h1 class="confirm-password">Confirmă parola:</h1>
      <input type="password" v-model="confirm" class="auth-input" placeholder="Reintrodu parola" />
    </template>

    <template #button>
      <button class="auth-button" @click="register">Creează cont</button>
      <button class="auth-button-register" @click="$emit('switch')">Loghează-te</button>
    </template>
  </AuthTemplate>
</template>
