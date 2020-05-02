const mongoose = require('mongoose');
const key = require('../config/global-config');



module.exports = (db) => {
    mongoose.connect(global.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});     
    
    mongoose.set('useCreateIndex', true);

    mongoose.Promise = global.Promise;

    mongoose.connection.on('open', function () {
        console.log('connection successful');
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    return db;    
};

/*var firebase = require('firebase-admin');
var serviceAccount = require('../config/serviceAccountKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://vanillacode-e93df.firebaseio.com"
  });

module.exports = () => {
    return firebase.database();    
}*/
