const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 6969;

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  const dbName = database.db("reja3li_app_db");
  require('./app/routes')(app, dbName);

  app.listen(port, () => {
    console.log('We are serving live on ' + port )
  });
})