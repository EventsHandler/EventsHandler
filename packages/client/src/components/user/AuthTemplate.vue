<template>
    <div class="auth-wrapper">
      <div class="auth-container">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <div class="auth-form">
          <slot name="input-header"></slot>
          <slot name="input"></slot>
        </div>
        <div class="auth-buttons">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  .auth-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    min-width: 500px;
  }
  
  .auth-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
  }
  
  .auth-title, .auth-subtitle {
    text-align: center;
  }
  
  .auth-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .auth-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .auth-input {
    border: #666 solid 1px;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .auth-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .auth-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .auth-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .auth-button-register {
    background-color: transparent;
    color: #007bff;
    border: none;
  }
  
  .auth-button-register:hover {
    text-decoration: underline;
  }
  
  .auth-input {
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    .auth-wrapper {
      min-width: 100vw;
    }
  }
  </style>
  