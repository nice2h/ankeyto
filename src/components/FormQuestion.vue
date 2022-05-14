<script setup>
import { ref } from 'vue'
import FormError from "../components/FormError.vue";
</script>

<template>
  <h2>質問文</h2>
  <input type="text" class=" text-sky-500 text-center p-1 border-2 border-gray-400 rounded-lg" value="アンケート文">
  <FormError msg="error" />
</template>