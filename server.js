const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//the port works for the local host

const PORT = process.env.PORT || 27017;

const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

//no mongodb add ons are free

const MONGODB_URI = 'mongodb+srv://dan-admin:Merrychristmas@cluster0.ufqj5.mongodb.net/fittracker?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || "mongodb://localhost/fittracker", {useNewUrlParser: true,});

mongoose.connection.on('connected', () => {
    console.log("MONGOOSE IS CONNECTED!!!!!")
})





// require("./seeders/seed.js")

require('./routes/api-routes')(app)

require('./routes/html-routes')(app)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})