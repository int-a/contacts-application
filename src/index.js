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

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"

ReactDOM.render(<App />, document.getElementById("root"));