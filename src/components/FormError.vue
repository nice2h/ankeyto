<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});
</script>

<template>
    <p class="text-pink-400 font-bold">{{ msg }}</p>
</template>
