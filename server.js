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


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittracker", {useNewUrlParser: true, useUnifiedTopology: true});


// require("./seeders/seed.js")

require('./routes/api-routes')(app)

require('./routes/html-routes')(app)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})
