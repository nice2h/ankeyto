<script setup>
import { ref } from 'vue'
import FormError from "../components/FormError.vue";

import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {title} = storeToRefs(store);

</script>

<template>
  <h2>質問文</h2>
  <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" v-model="title">
  <FormError v-if="false" msg="error" />
</template>