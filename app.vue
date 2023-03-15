<script setup lang="ts">
const image = `url(https://www.davinci-studio.com/wp-content/uploads/Czym-jest-Vue.js-i-do-czego-mozna-wykorzystac-ten-framework-What-is-Vue.js-and-what-can-you-use-this-framework-for.png)`
const cm = () => alert('click')
</script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      background-color: blue;
      background-size: 100% 100%;
      background-size: cover;
    "
    :style="{ backgroundImage: image ?? undefined }"
  >
    <button @click="cm">CLICK</button>
  </div>
  <Particulas />
</template>

<style>
body,
html,
#__nuxt {
  background: black;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
