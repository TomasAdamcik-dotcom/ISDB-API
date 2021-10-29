const express = require('express');
const jwt = require('jsonwebtoken'); // to use jwt for signing in
const mongoose = require('mongoose') // to use mongodb
const routes = require('./routes/apis')
// libraries for authentication
const passport = require("passport");
const passportJWT = require("passport-jwt");
const passportLocalMongoose = require("passport-local-mongoose");

// imports for routes
// const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/apis');

const app = express();
mongoose.connect("mongodb://localhost:27017/isdbDb")
app.use(express.json())

// utilisation of routes
// app.use('/api', authRoutes)
app.use('/api', apiRoutes)

// define strategy
  // !!! use passportLocalMongoose to hash password and add salt

// REGISTER --------------------------------------
app.post('/register',(req,res)=>{

// check if user already exists
  // if exists give error message
  //  if does not exists, save username and password

  res.send("Register page")
})

// LOGIN -----------------------------------------
app.post('/login',(req,res)=>{

  // check if username exists
    // if not, give error message
    // if yes, check username and password is matching
      // log in & release jwt token
    
  res.send("Login page")
})

app.get('*',(req,res)=>{
  res.send("This directory does not exist.")
})

// this is to use bin/www 
// module.exports = app;

app.listen(3000, ()=>{
  console.log("Listening on port 3000")
})