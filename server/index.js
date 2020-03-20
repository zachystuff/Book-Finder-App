const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const request = require('request');
// var items = require('../database-mongo');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/api', (req, res)=> {
  console.log(req.params)
  axios.get('http://newsapi.org/v2/top-headlines', {
    headers: {'X-Api-Key': process.env.API_KEY},
    params: params,
  })
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.log(err);
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

