const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const app = express();


app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});



// require("./seeders/seed.js")

require('./routes/api-routes')(app)

require('./routes/html-routes')(app)




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})