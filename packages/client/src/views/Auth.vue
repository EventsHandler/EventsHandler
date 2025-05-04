<script setup lang="ts">
import { ref } from 'vue';
const username = ref('');
const password = ref('');
</script>
<template>
    <div class="login">
        <div class="login-container">
            <h1 class="login-title">Login</h1>
            <div class="login-form">
                <h1 class="username">Username:</h1>
                <input type="text" v-model="username" class="login-input" placeholder="Enter your username" />
                <h1 class="password">Password:</h1>
                <input type="password" v-model="password" class="login-input" placeholder="Enter your password" />
            </div>
            <div class="login-button-container">
                <button class="login-button">Login</button>
        </div>
      </div>
    </div>
</template>