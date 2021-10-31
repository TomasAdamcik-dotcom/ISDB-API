const express = require('express');
const mongoose = require('mongoose'); // to use mongodb
const routes = require('./routes/apis');       
require('dotenv').config()

// import middleware code
require("./middleware/auth");

// libraries for authentication
const passport = require("passport");

// imports for routes
const authRoute = require('./routes/auth');
const apiRoutes = require('./routes/apis');

// importing swagger
const swaggerUI = require('swagger-ui-express');
const swaggerDocumentation = require('./swagger.json')

// logic
const app = express();
const atlasKey = process.env.MONGO_ATLAS_PWD

// to switch between dbs when working with localhost
// mongoose.connect("mongodb://localhost:27017/isdbDb")
mongoose.connect(`mongodb+srv://TomasAdam:${atlasKey}@cluster0.qo7k8.mongodb.net/isdbDb?retryWrites=true&w=majority`)

app.use(express.json())
app.use(passport.initialize());

// utilisation of routes
app.use('/api', authRoute);
app.use('/api', apiRoutes);
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation) );



app.use(express.urlencoded({ extended: true }));

// this is to use bin/www 
module.exports = app;

// to use when working with loacalhost
// app.listen(3000, () => {
//   console.log("Listening on port 3000")
// })