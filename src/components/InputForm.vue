<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {title} = storeToRefs(store);
console.log(title.value);

</script>

<template>

  <p>
{{title}}
  </p>


</template>

<style scoped>
a {
  color: #42b983;
}
</style>
