import { defineStore } from "pinia";

export const inputFormStore = defineStore("inputFormStore", {
    state: () => {
        return {
            qid: "",
            title: "",
            status: "アンケート作成",
            numberOfChoice: 1,
            answers: ["", "", ""],
            isModalEnabled: false,
        };
    },
});
