const axios = require("axios");
const Hashids = require("hashids/cjs");
class Question {
    constructor() {
        this.admin = require("firebase-admin");
        if (this.admin.apps.length === 0) {
            this.admin.initializeApp();
        }
        this.database = this.admin.database();
        this.firestore = this.admin.firestore();
        this.firestoreTimestamp = this.admin.firestore.Timestamp;
    }

    async create(data) {
        try {
            console.log("create");
            console.log(data);
            const hashids = new Hashids("ankeyto", 8);
            const id = hashids.encode(100);
            console.log(id);
            await this.database.ref("quesitons/" + id).set(data);
            //データベースに登録
            //URL生成
            //結果を返却
        } catch {
            console.log("error");
        }
    }
}

module.exports = { Question };
