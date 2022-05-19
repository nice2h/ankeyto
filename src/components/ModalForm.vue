<script setup>
import { ref } from "vue";
import FormConfirmButton from "../components/FormConfirmButton.vue";
import FormError from "../components/FormError.vue";

import { storeToRefs } from "pinia";
import { inputFormStore } from "../store/inputForm.js";
const store = inputFormStore();
const { title, numberOfChoice, answers, isModalEnabled } = storeToRefs(store);

const sendData = () => {};
</script>

<template>
    <div
        class="container flex flex-row justify-center items-center text-white z-10"
        @click.self="isModalEnabled = false"
    >
        <div
            class="flex flex-col justify-center items-center bg-white border-2 border-gray-400 text-black rounded-xl w-11/12 py-2 z-20"
        >
            <p class="border-b-2 w-11/12 mb-2">内容確認</p>
            <div class="flex flex-row w-full justify-center items-center p-1">
                <div class="w-2/5">質問文</div>
                <div class="w-4/5 text-sky-400 text-bold">{{ title }}</div>
            </div>
            <div class="flex flex-row w-full justify-center items-center p-1">
                <div class="w-2/5">回答選択肢数</div>
                <div class="w-4/5 text-sky-400 text-bold">
                    {{ numberOfChoice }}
                </div>
            </div>

            <div
                v-for="n of numberOfChoice"
                :key="n"
                class="flex flex-row w-full justify-center items-center p-1"
            >
                <div class="w-2/5">回答{{ n }}</div>
                <div class="w-4/5 text-sky-400 text-bold">
                    {{ answers[n - 1] }}
                </div>
            </div>
            <FormConfirmButton msg="この内容で作成する" @click="sendData()" />
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply bg-gray-500/70 z-10 w-full h-full top-0 bottom-0 left-0 right-0 fixed;
}
</style>
