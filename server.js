const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {useNewURLParser: true});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
//can prob get rid of this after first use
require('./seeders/seed');

app,listen(PORT, () => {
    console.log(`It is running on port ${PORT}..`);
});




