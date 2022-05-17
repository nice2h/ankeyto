<script setup>
import { ref } from 'vue'
import FormError from "../components/FormError.vue";

import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {numberOfChoice,answers} = storeToRefs(store);
console.log(numberOfChoice.value);
</script>

<template>
  <h2>回答選択肢</h2>
  <div class="flex flex-row justify-center items-center"> 
    <div v-bind:class="{'optionQuestionSelected': numberOfChoice == 1, 'optionQuestion': numberOfChoice != 1 }"  @click="numberOfChoice = 1"><p class="text-3xl">1</p><p>question</p></div>
    <div v-bind:class="{'optionQuestionSelected': numberOfChoice == 2, 'optionQuestion': numberOfChoice != 2 }"  @click="numberOfChoice = 2"><p class="text-3xl">2</p><p>questions</p></div>
    <div v-bind:class="{'optionQuestionSelected': numberOfChoice == 3, 'optionQuestion': numberOfChoice != 3 }"  @click="numberOfChoice = 3"><p class="text-3xl">3</p><p>questions</p></div>
  </div>
  
  <div v-for="n of numberOfChoice" :key="n" class="">
  <h3>回答{{n}}</h3>
    <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" v-model="answers[n-1]">
    <FormError v-if="false" msg="error" />
  </div>
</template>

<style scoped>
.optionQuestion {
  @apply border-2 bg-white border-gray-400 rounded-2xl p-2 mx-2;
}
.optionQuestionSelected {
  @apply border-2 border-pink-400 bg-pink-500 text-white rounded-2xl p-2 mx-2;
}

</style>