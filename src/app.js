const express = require('express');
const routes = require('./routes/api');
const app = express();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});