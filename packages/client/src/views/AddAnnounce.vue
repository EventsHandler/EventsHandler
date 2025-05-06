<script setup lang="ts">
import Announce from '@/components/event/AddAnnounceTemplate.vue'
import { ref } from 'vue';

const title = ref('')
const description = ref('')

const addAnnounce = () => {
    console.log('Title:', title.value);
    console.log('Description:', description.value);
    // logica de adaugare a anuntului
};

</script>

<template>
    <main>
        <Announce>
            <template #announce-title>
                <input type="text" v-model="title" placeholder="Denumirea anunțului" class="event-name-input" />
            </template>
            <template #announce-desc>
                <textarea v-model="description" placeholder="Descrierea anunțului" class="event-description-input" />
            </template>
            <template #add-announce-button>
                <button class="add-announce-button" @click="addAnnounce">Adaugă anunț</button>
            </template>
        </Announce>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    padding: 2rem;
}
.event-name-input {
    border: none !important; 
    font-size: 1.5em !important;   
}
</style>