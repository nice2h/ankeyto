<script setup>
import { ref } from 'vue'
import FormError from "../components/FormError.vue";
</script>

<template>
  <h2>回答選択肢</h2>
  <div class="flex flex-row justify-center items-center"> 
    <div class="optionQuestion"><p class="text-3xl">1</p><p>question</p></div>
    <div class="optionQuestion"><p class="text-3xl">2</p><p>questions</p></div>
    <div class="optionQuestion"><p class="text-3xl">3</p><p>questions</p></div>
  </div>
  
  <div class="">
  <h3>回答1</h3>
    <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" value="アンケート文">
    <FormError msg="error" />
  </div>
  <div class="">
    <h3>回答1</h3>
      <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" value="アンケート文">
      <FormError msg="error" />
  </div><div class="">
  <h3>回答1</h3>
    <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" value="アンケート文">
    <FormError msg="error" />
  </div>
  <p>areareateartearaeaer</p>
</template>

<style scoped>
.optionQuestion {
  @apply border-2 border-gray-400 rounded-2xl p-2 mx-2;
}

</style>