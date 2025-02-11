var admin = require("firebase-admin");

var serviceAccount = require("./restuarant-menu-8c081-firebase-adminsdk-fbsvc-de02c74566.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
