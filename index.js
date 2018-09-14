const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.Server(app);

let sets = {'11111111': {
  title: 'test app',
  terms: {
    'test': 'app'
  }
}}

app.get('/get', (req, res) => {
  let code = res.query.code;
  if(Object.keys(sets).indexOf(code) == -1) res.send({status: false});
  else res.send({status: true, set: sets[code]});
});

app.use(express.static("static"));

let port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log("server up on port " + port);
});
