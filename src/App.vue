<script setup>
import LandingPage from './pages/LandingPage.vue'
import InputForm from './pages/InputForm.vue'
</script>

<template>
<LandingPage v-if="false"/>
<InputForm />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
