const express = require('express');
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000

let refs = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.post('/bin/:referenceKey', (req, res) => {
  refs[req.params.referenceKey] = [].concat({
    body: req.body,
    created_at: new Date().toISOString()
  });
  res.status(200);
  res.end();
});

app.get('/bin/:referenceKey', (req, res) => {
  res.send(refs[req.params.referenceKey]);
  res.status(200);
});

app.get('/bin/', (req, res) => {
  res.send(refs);
  res.status(200);
});

app.delete('/bin/', (req, res) => {
  refs = {}
  res.send();
  res.status(200);
});