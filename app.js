const express = require('express');
const mongoose = require('mongoose'); // to use mongodb
const routes = require('./routes/apis');

// import middleware code
require("./middleware/auth");

// libraries for authentication
const passport = require("passport");

// imports for routes
const authRoute = require('./routes/auth');
const apiRoutes = require('./routes/apis');

// logic
const app = express();
mongoose.connect("mongodb://localhost:27017/isdbDb")
app.use(express.json())

// utilisation of routes
app.use('/api', authRoute)
// app.use('/api', apiRoutes)

app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));

// this is to use bin/www 
// module.exports = app;


app.listen(3000, () => {
  console.log("Listening on port 3000")
})