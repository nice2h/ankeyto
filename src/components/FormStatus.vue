<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});
</script>

<template>
    <h2>{{ msg }}</h2>
</template>
