const express = require('express');
const path = require('path');

const app = express();

// serve the static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Express backend is connected to react' });
});

// handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);