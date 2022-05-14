<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <h2>{{title}}</h2>
</template>