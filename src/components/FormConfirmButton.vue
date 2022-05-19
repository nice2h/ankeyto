<script setup>
import { ref } from "vue";
import FormError from "../components/FormError.vue";

defineProps({
    msg: String,
});
</script>

<template>
    <button class="shadow-xl p-2 w-1/2 rounded-2xl">{{ msg }}</button>
</template>
