"use strict";

// Imports dependencies and set up http server
const express = require("express"),
  app = express().use(express.json()); // creates express http server

const routes = require('./routes/route');

require("dotenv").config();

routes(app);

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => {
  console.log("webhook is listening in" + process.env.PORT);
});

module.exports = app; // for testing
