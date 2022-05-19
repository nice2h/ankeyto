<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { inputFormStore } from "../store/inputForm.js";
const store = inputFormStore();
const { status, isModalEnabled } = storeToRefs(store);

import FormTitle from "../components/FormTitle.vue";
import FormStatus from "../components/FormStatus.vue";
import FormQuestion from "../components/FormQuestion.vue";
import FormOption from "../components/FormOption.vue";
import FormConfirmButton from "../components/FormConfirmButton.vue";
import ModalForm from "../components/ModalForm.vue";
</script>

<template>
    <FormTitle />
    <FormStatus :msg="status" />
    <FormQuestion />
    <FormOption />
    <FormConfirmButton msg="内容確認" @click="isModalEnabled = true" />
    <ModalForm v-if="isModalEnabled" />
</template>
