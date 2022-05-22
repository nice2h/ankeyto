const axios = require("axios");
class Question {
    constructor() {
        this.admin = require("firebase-admin");
        if (this.admin.apps.length === 0) {
            this.admin.initializeApp();
        }
        this.firestore = this.admin.firestore();
        this.firestoreTimestamp = this.admin.firestore.Timestamp;
    }

    async create(data) {
        try {
            console.log("create");
            console.log(data);
            //データベースに登録
            //URL生成
            //結果を返却
        } catch {
            console.log("error");
        }
    }
}

module.exports = { Question };
