<script setup lang="ts">
defineProps<{
  users: any
}>()
</script>

<template>
  <div v-if="users.lenght != 0">
    <p>Participanti: </p>
      <ul>
          <li v-for="user in users"><a href="">{{ user.username }}</a></li>
      </ul>
  </div>
</template>