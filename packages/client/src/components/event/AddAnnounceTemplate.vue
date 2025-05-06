<template>
    <div class="announce-container">
        <slot name="announce-title"></slot>
        <slot name="announce-desc"></slot>
        <slot name="add-announce-button"></slot>
    </div>
</template>

<style scoped>
.announce-container {
    padding: 5rem;
    width: 90vw;
    max-width: 90%;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px #003d80;
    display: flex;
    flex-direction: column;
}
.announce-container :deep(input[type="text"]),
.announce-container :deep(textarea) {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 1em;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.announce-container :deep(input[type="text"]:focus),
.announce-container :deep(textarea:focus) {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
}
.announce-container :deep(button) {
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
.announce-container :deep(button:hover) {
  background: linear-gradient(45deg, #0056b3, #003d80);
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 123, 255, 0.5);
}
@media (max-width: 768px) {
    .announce-container {
        padding: 2rem;
    }
}
@media (max-width: 480px) {
    .announce-container {
        padding: 1rem;
    }
}
</style>