<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { UploadFileDocument } from '@/api/graphql'
import { ref } from 'vue'

const file = ref<File | null>(null)
function handleFileChange(event: any) {
  file.value = event.target.files[0]
  console.log(file.value)
}

const { mutate } = useMutation(UploadFileDocument)

async function uploadFile() {
  try {
    let res = await mutate({ file: file.value, test: "idk" })
    console.log(res)
  } catch(error) {
    console.error(error)
  }
}
</script>

<template>
  <main>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadFile">Încarcă fișier</button>
  </main>
</template>

<style scoped>
main {
  display: flex; 
  justify-content: center;
  align-items: center;
}
</style>