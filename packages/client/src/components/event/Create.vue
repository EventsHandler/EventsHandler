<script setup lang="ts">
defineProps<{
  loadingAskDesc: boolean
}>()
</script>
<template>
  <div class="createEvent">
    <div class="upload-container">
      <slot name="upload-input"></slot>
    </div>
    <div class="form-container">
      <slot name="event-name-input"></slot>
      <div class="relative">
        <slot name="event-desc-input"></slot>
        <i v-if="!loadingAskDesc" class="fa-solid fa-brain absolute bottom-3 right-3 text-2xl cursor-pointer" @click="$emit('aiGenDesc')"></i>
        <i v-else class="fa-solid fa-hourglass-start absolute bottom-3 right-3 text-2xl cursor-progress"></i>
      </div>
      <div class="date-and-time">
        <slot name="event-date-input"></slot>
        <slot name="event-time-input"></slot>
      </div>
      <slot name="event-location-input"></slot>
      <slot name="event-category-input"></slot>
      <slot name="create-button"></slot>
    </div>
  </div>
</template>

<style scoped>
.createEvent {
  padding: 5rem;
  width: 90vw;
  max-width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px #003d80;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.upload-container {
  flex: 1;
  min-width: 50%;
  height: 30%;
  padding: 20px;
  border: 2px dashed #cccccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: default; 
}

.upload-container:hover {
  background-color: #f0f0f0;
  border-color: #007bff;
}

.upload-container::before {
  content: '⬆️';
  font-size: 2.5em;
  color: #cccccc;
  transition: color 0.3s ease;
  pointer-events: none;
  margin-bottom: 5px;
}
.upload-container:hover::before {
    color: #aaaaaa;
}

.upload-container :deep(p) {
  margin: 10px 0 0 0;
  color: #555555;
  font-size: 0.9em;
  pointer-events: none; 
}

.upload-container :deep(input[type="file"]) {
  width: 100%;
  height: 100%; 
  opacity: 0;
  cursor: pointer;
}

.form-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-container :deep(input[type="text"]),
.form-container :deep(input[type="date"]),
.form-container :deep(input[type="time"]),
.form-container :deep(textarea),
.form-container :deep(select) {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-container :deep(input[type="text"]:focus),
.form-container :deep(input[type="date"]:focus),
.form-container :deep(input[type="time"]:focus),
.form-container :deep(textarea:focus),
.form-container :deep(select:focus) {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  outline: none;
}

.form-container :deep(textarea) {
  min-height: 100px;
  resize: vertical;
}

.form-container :deep(button) {
  padding: 12px 25px;
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
  margin-top: 10px;
}

.form-container :deep(button:hover) {
  background: linear-gradient(45deg, #0056b3, #003d80);
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 123, 255, 0.5);
}

.form-container :deep(button:active) {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
}
.date-and-time {
  display: flex;
  gap: 15px;
}


@media (max-width: 768px) {
  .createEvent {
    padding: 3rem;
    flex-direction: column;
  }

  .upload-container {
      min-width: 100%;
  }

  .form-container {
      width: 100%;
  }
}
</style>