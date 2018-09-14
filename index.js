const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.Server(app);

let sets = {'11111111': {
  title: 'test app',
  terms: {
    'term1': 'answer1',
    'term2': 'answer2',
    'term3': 'answer3',
    'term4': 'answer4',
    'term5': 'answer5',
    'term6': 'answer6',
    'term7': 'answer7',
    'term8': 'answer8',
    'term9': 'answer9',
    'term10': 'answer10',
    'term11': 'answer11',
    'term12': 'answer12',
    'term13': 'answer13',
  }
}}

app.get('/get', (req, res) => {
  let code = req.query.code;
  if(Object.keys(sets).indexOf(code) == -1) res.send({status: false});
  else res.send({status: true, set: sets[code]});
});

app.use(express.static("static"));

let port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log("server up on port " + port);
});
