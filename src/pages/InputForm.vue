<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {status} = storeToRefs(store);

import FormTitle from "../components/FormTitle.vue";
import FormStatus from '../components/FormStatus.vue';
import FormQuestion from "../components/FormQuestion.vue";
import FormOption from '../components/FormOption.vue';
import FormConfirmButton from "../components/FormConfirmButton.vue"
</script>

<template>
<FormTitle />
<FormStatus :msg=status />
<FormQuestion />
<FormOption />
<FormConfirmButton />
</template>
