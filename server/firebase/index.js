
var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://presupuestos-956d8.firebaseio.com"
});

module.exports = admin; 