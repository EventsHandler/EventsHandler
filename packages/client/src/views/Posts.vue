<script setup lang="ts">

</script>

<template>
    <div class="post-container">
        <div class="title">
            <h1>FESTIVAL</h1>
        </div>
        <div class="images">
            <img src="https://i.simpalsmedia.com/afisha.md/media/original/8e25401f5216382b2267a43918a3b0fc.webp" alt="image"/>
        </div>
        <div class="description">
            <h2 id="description-name">Festival Chisinau</h2>
            <p id="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque explicabo accusantium delectus, porro veniam ipsam iste dicta id aperiam inventore in autem sequi veritatis et quae odit ipsa unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum hic modi recusandae ratione? Atque, consectetur voluptatibus. Odio exercitationem, quia ex laudantium dolor iusto voluptas ab dolorum consequatur voluptatum consectetur!</p>
        </div>

        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}

.title h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 60px;
}

.images {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: 10px 0;
}
.images img{
    border-radius: 20px;
}
.description h2{
    
}
</style>