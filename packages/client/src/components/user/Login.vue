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

const userStore = useUserStore()

async function login() {
  try {
    let res = await mutate({
      email: username.value
    })
    if(!res?.data?.login.email) return
    localStorage.setItem('token', res?.data?.login.email)
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
