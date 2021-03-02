const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.MONGODB_URI;

const app = express();


app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://dan-admin:Durango11790>@cluster0.ufqj5.mongodb.net/fittracker?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


require('./routes/api-routes')(app)

require('./routes/html-routes')(app)



