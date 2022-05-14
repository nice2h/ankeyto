import { defineStore } from "pinia";

export const inputFormStore = defineStore("inputFormStore", {
    state: () => {
        return {
            title: "testTitle",
            numberOfChoice: 1,
            answers: []
        };
    }
});
