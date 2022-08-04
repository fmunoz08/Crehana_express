const mongoose = require('mongoose')

const {
    MONGO_URI,
    MONGO_PORT,
    MONGO_DB
} = process.env

const options = {
    useNewUrlParser: true,
};

const url = `mongodb://${MONGO_URI}:${MONGO_PORT}/${MONGO_DB}`

mongoose.connect(url,options)
    .then( function() {
        console.log("MongoBD is connected");
    })
    .catch(function(err) {
        console.log(err);
    })