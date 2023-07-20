const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase-admin.json");

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://dsm-3b.firebaseio.com"
});

module.exports = app;