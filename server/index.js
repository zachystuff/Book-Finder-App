const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
// var items = require('../database-mongo');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/api', (req, res)=> {
  const { q, country } = req.query;
  if(!country) {
    res.send('err');
  }
  axios.get('http://newsapi.org/v2/top-headlines', {
      headers: { 'X-Api-Key': process.env.API_KEY },
      params: {
        q,
        country
      }
    })
  .then((results) => res.json(results.data))
  .catch((err) => { throw err;})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

