<script setup lang="ts">
import { ref } from 'vue'

const userInput = ref('')
const messages = ref<{ text: string; type: 'incoming' | 'outgoing' }[]>([
  { text: 'Salut! Cu ce te pot ajuta?', type: 'incoming' }
])

const chatHandle = () => {
  const input = userInput.value.trim()
  if (!input) return
  messages.value.push({ text: input, type: 'outgoing' })
  userInput.value = ''
  setTimeout(() => {
    messages.value.push({ text: 'Se gândește...', type: 'incoming' })
  }, 600)
}

 const container = ref<HTMLElement | null>(null)
const toggleVisibility = () =>{
    container.value?.classList.toggle("show-chatbot")
}
</script>

<template>
  <div class="show-chatbot" ref="container">
    <button class="chatbot-toggle"  @click="toggleVisibility">
      <span><i class="fa-solid fa-message"></i></span>
      <span><i class="fa-regular fa-circle-xmark"></i></span>
    </button>

    <div class="chatbot">
      <header>
        <h2>Helper</h2>
        <span  @click="toggleVisibility"><i class="fa-regular fa-circle-xmark"></i></span>
      </header>

      <ul class="chatbox">
        <li v-for="(msg, i) in messages" :key="i" class="chat" :class="msg.type">
          <span v-if="msg.type === 'incoming'"><i class="fa-solid fa-robot"></i></span>
          <p>{{ msg.text }}</p>
        </li>
      </ul>

      <div class="chat-input">
        <textarea
          v-model="userInput"
          placeholder="Introduceți întrebarea..."
          required
        ></textarea>
        <span
          id="send-btn"
          @click="chatHandle"
          v-show="userInput.trim().length > 0"
        >
          <i class="fa-solid fa-paper-plane"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
.chatbot-toggle {
    position: fixed;
    right: 40px;
    bottom: 40px; 
    width: 60px;
    height: 60px;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    background: #0b81ff;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
}
.chatbot-toggle span {
    position: absolute;
}
.show-chatbot .chatbot-toggle span:first-child, 
.chatbot-toggle span:last-child {
    opacity: 0;
}
.show-chatbot .chatbot-toggle span:last-child {
    opacity: 1;

}
.chatbot {
    position: fixed;
    right: 40px;
    bottom: 107px;
    width: 420px;
    transform: scale(0.5);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    background-color: #f9fafb;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.show-chatbot .chatbot{
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
}
.chatbot header {
    background: #007bff;
    padding: 6px 0;
    text-align: center;
    position: relative;
}
.chatbot header span {
    position: absolute;
    right: 20px;
    top: 50%;
    color: white;
    cursor: pointer;
    transform: translateY(-50%);
    display: none;
}
.chatbot header h2 {
    color: white;
    font-size: 1.4rem;
}
.chatbot .chatbox {    
    height: calc(100vh - 400px); 
    max-height: 400px; 
    overflow-y: auto;
    padding: 30px 20px 70px;
}
.chatbox .chat{ 
    margin: 20px 0;
    display: flex;
}
.chatbox .incoming span {
    height: 32px;
    width: 32px;
    background: #007bff;
    align-self: flex-end;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;
    margin: 0 10px 7px 0;
}
.chatbox .incoming span i {
    color: white;
}
.chatbox .outgoing {
    justify-content: flex-end;
}
.chatbox .chat p {
    color: white;
    max-width: 75%;
    font-size: 0.95rem;
    padding: 12px 16px;
    border-radius: 10px 10px 0 10px;
    background: #0b81ff;
}
.chatbox .incoming p {
    color: black;
    background: #dbdbdb;
    border-radius: 10px 10px 10px 0;
}
.chatbot .chat-input {
    position: relative;
    bottom: 0;
    width: 100%;
    background: white;
    padding: 5px 20px;
    border-top: 1px solid #dbdbdb;
}

.chat-input textarea {
    width: 100%;
    height: 50px;
    font-size: 0.95rem;
    border: none;
    outline: none;
    resize: none;
    padding: 16px 45px 16px 15px; /* spațiu în dreapta pentru icon */
    box-sizing: border-box;
}

.chat-input span#send-btn {
    position: absolute;
    right: 60px;
    bottom: 20px;
    color: #0b81ff;
    cursor: pointer;
    visibility: hidden;
}

.chat-input textarea:valid ~ span#send-btn {
    visibility: visible;
}@media(max-width: 490px) {
    .chatbot{
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    .chatbot .chatbox{
        height: 90%;
    }
    .chatbot header span{
        display: block;
    }
}
</style>