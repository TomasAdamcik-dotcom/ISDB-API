const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');
const jwtOptions = {secretOrKey: "aSecret"}

// REGISTER --------------------------------------
router.post('/register', (req, res) => {
    // check if username and password are passed from body
    if (req.body.username && req.body.password) {
        // check for errors during search for user
        User.findOne({ username: req.body.username }, function (err, user) {
            if (err) {
                res.status(401).json(err);
                // check if user does not exist
            } else if (!user) {
                // create a new user ans save (as this user does not exist)
                let newUser = new User({ username: req.body.username });
                User.register(newUser, req.body.password, function (err) { //also check for an error
                    if (err) {
                        res.status(401).json(err);
                    } else {
                        res.status(201).json({ message: "You are successfully registered." });
                    };
                });
                // in case user already exists
            } else {
                res.status(401).json({ message: "This user already exists." });
            };
        });
    } else {
        res.status(401).json({ message: "Please enter username and password." })
    };
});

// LOGIN -----------------------------------------
router.post('/login', (req, res) => {
    // check if username and password are entered
    if (req.body.username && req.body.password) {
        const username = req.body.username;
        const password = req.body.password;
        // check if user exists
        User.findOne({ username: username }, function (err, user) {
            // check for errors  
            if (err) {
                res.status(401).json(err)
            } else if (!user) {
                res.status(401).json({ message: "User is not registered." });
            } 
            // if yes, check username and password is matching
            user.authenticate(password, function (err, user) {
                if (err) {
                    res.status(401).json(err)
                }
                if (user) {
                    // log in & release token
                    const payload = { id: user.id };
                    const token = jwt.sign(payload, jwtOptions.secretOrKey);
                    res.status(200).json({
                        message: "login successful",
                        // transmit token to the user
                        token: token
                    });
                } else {
                    res.status(401).json({ message: "You entered incorrect password." });
                };
            });
        });
    } else {
        res.status(201).json({ message: "Please enter username and password." })
    }
});

module.exports = router;