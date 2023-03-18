<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <img alt="GitHub image" src="./assets/github-mark.png">
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  Components: {
    HelloWorld
  }
}
</script>

<style>
html, body, #app {
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  position: absolute;
  top:0px;
  right:0px;
  bottom:50px;
  left:0px;
}
img {
  margin-top: -10px;
  margin-bottom: 30px;
}

.img {
  border-radius: 50px;
  size: 35px;
  margin-right: 100px;
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
  object-fit: cover; 
}
</style>
