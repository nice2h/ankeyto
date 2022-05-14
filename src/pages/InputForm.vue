<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia';
import { inputFormStore } from "../store/inputForm.js"
const store = inputFormStore();
const {status} = storeToRefs(store);

import FormTitle from "../components/FormTitle.vue";
import FormStatus from '../components/FormStatus.vue';
import FormQuestion from "../components/FormQuestion.vue";
import FormSub from '../components/FormSub.vue';
import FormOption from '../components/FormOption.vue';


</script>

<template>
<FormTitle />
<FormStatus :msg=status />
<FormQuestion />
<FormOption />

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
