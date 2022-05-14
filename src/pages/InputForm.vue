<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {title} = storeToRefs(store);

import FormTitle from "../components/FormTitle.vue"

</script>

<template>

<FormTitle />


</template>

<style scoped>
a {
  color: #42b983;
}
</style>
