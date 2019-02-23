// const express = require('express');
// const routes = require('../routes/api');
// const app = express();

// const port = 5000;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// /*
// app.use((req, res, next) => {
//   res.send('Welcome to Express');
// });
// */

// app.use('/api', routes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.js"

// ReactDOM.render(<App />, document.getElementById("root"));

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

// handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);