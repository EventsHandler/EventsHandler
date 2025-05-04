<script setup lang="ts">
import { ref } from "vue"

const title = ref<string>("")
const desc = ref<string>("")

function createEvent() {
  console.log(title.value, desc.value)
}
</script>

<template>
  <form @submit.prevent="createEvent">
    <fieldset>
      <label for="newPostTitle text-3xl">Titlu</label>
      <input type="text" id="newPostTitle" v-model="title" placeholder="Titlu" />

      <label for="newPostDesc text-3xl">Descriere</label>
      <input type="text" id="newPostDesc" v-model="desc" placeholder="Descriere" />

      <label for="newPostDesc text-3xl">Data</label>
      <input type="text" id="newPostDesc" v-model="desc" placeholder="Description" />

      <label for="newPostDesc text-3xl">Adresa</label>
      <input type="text" id="newPostDesc" v-model="desc" placeholder="Description" />
    </fieldset>
    <button type="submit">Create new event</button>
  </form>
</template>