const express = require('express');
const jwt = require('jsonwebtoken'); // to use jwt for signing in
const mongoose = require('mongoose') // to use mongodb
// libraries for authentication
const passport = require("passport");
const passportJWT = require("passport-jwt");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();


mongoose.connect("mongodb://localhost:27017/isdbDb")


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

app.use(express.json())
app.use('/api', routes)

// TRACKS/:ID ------------------------------------
  // get all info about specific track: 
    // include genre and album info

    app.get('/tracks/:id',(req,res)=>{

      // 
        
      res.send("Login page")
    })

// GENRES ----------------------------------------
// ALBUMS/:ID ------------------------------------
// TRACKS ----------------------------------------
// ARTISTS/:ID -----------------------------------



app.get('*',(req,res)=>{
  res.send("This directory does not exist.")
})

module.exports = app;