// Require Dependencies
const express = require('express');
const fs = require("fs");
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes/routes')(app);


// Listener//
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});