<script setup lang="ts">
import CreateEvent from '@/components/event/Create.vue';
import { ref } from 'vue';

const form = ref({
  name: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  organizer: '',
  image: {
    name: '',
    url: ''
  } 
});

const removeImage = () => {
  console.log('Remove image clicked');
  // logica de remove image
};

const uploadPhoto = () => {
  console.log('Upload photo clicked');
  // logica de upload photo
}

const addEvent = () => {
  console.log('Event data:', form.value);
};
</script>

<template>
  <main>
    <CreateEvent>
      <template #upload-input>
        <div v-if="form.image.url === ''" class="upload-area" @click="uploadPhoto " :style="{ cursor: 'pointer' }">
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            style="display: none"
          />
          <p>Apasă pentru a încărca imaginea evenimentului</p>
        </div>

        <div v-else class="preview-item">
          <img :src="form.image.url" :alt="form.image.name" />
          <button class="remove-btn" @click.stop="removeImage()">X</button>
        </div>
      </template>


      <template #event-name-input>
        <input type="text" v-model="form.name" placeholder="Denumirea evenimentului" class="event-name-input"/>
      </template>

      <template #event-desc-input>
        <textarea v-model="form.description" placeholder="Descrierea evenimentului"></textarea>
      </template>

      <template #event-date-input>
        <input type="date" v-model="form.date" />
      </template>

      <template #event-time-input>
        <input type="time" v-model="form.time" />
      </template>

      <template #event-location-input>
        <input type="text" v-model="form.location" placeholder="Locația evenimentului" />
      </template>

      <template #event-category-input>
        <select v-model="form.category">
          <option value="">Selectează categoria</option>
          <option value="music">Music</option>
          <option value="art">Art</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="travel">Travel</option>
          <option value="business">Business</option>
        </select>
      </template>

      <template #create-button>
        <button @click="addEvent">Create Event</button>
      </template>
    </CreateEvent>
  </main>
</template>

<style scoped>
.preview-item {
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: default;
}

.remove-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  padding: 0;
}

.upload-area {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  flex-direction: column;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}
.upload-area:hover {
  border-color: #007bff;
}
.event-name-input {
  border: none !important; 
  font-size: 1.5em !important; 
}

</style>