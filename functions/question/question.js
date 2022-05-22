const axios = require("axios");
const Hashids = require("hashids/cjs");
class Question {
    constructor() {
        this.admin = require("firebase-admin");
        if (this.admin.apps.length === 0) {
            this.admin.initializeApp();
        }
        this.database = this.admin.database();
    }

    async create(data) {
        try {
            data.createdAt = this.admin.database.ServerValue.TIMESTAMP;

            const results = {};
            for (let i = 0; i < data.numberOfChoice; i++) {
                results[i] = 0;
            }
            data.result = results;

            const date = new Date();
            const mUnixTime = date.getTime();

            const hashids = new Hashids("ankeyto", 8);
            const id = hashids.encode(mUnixTime);
            const snapshot = await this.database
                .ref("quesitons/" + id)
                .set(data);

            console.log("created : " + id);
            console.log(data);

            return { id: id };
        } catch (e) {
            console.log("error");
            console.log(e.message);
        }
    }
}

module.exports = { Question };
