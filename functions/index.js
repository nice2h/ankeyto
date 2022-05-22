const functions = require("firebase-functions");
const { Question } = require("./question/question.js");

exports.createQuestion = functions.https.onRequest(
    async (request, response) => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set(
            "Access-Control-Allow-Methods",
            "GET, HEAD, OPTIONS, POST"
        );
        response.set("Access-Control-Allow-Headers", "Content-Type");

        const q = new Question();
        await q.create(request.body);
        response.send("completed");
    }
);
