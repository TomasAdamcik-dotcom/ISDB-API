var express = require('express');
var router = express.Router();
const passport = require('passport')
const { Track, MediaType, Genre, Artist, Album } = require('../models/collections')


// router.get(
//   '/secret',
//   passport.authenticate('jwt', { session: false }),
//    function (req, res) {
//     res.send({message: "you are in secret zone"})
//   })


// TRACKS/:ID ------------------------------------
// get all info about specific track: 
// include genre and album info

// router.get('/tracks/:id', /*async*/ function (req, res) {
// const track = await Track.findOne({ id: req.params.TrackId })
// return res.json(track)
// })

// router.get(
//   '/tracks/:id',
//   // passport.authenticate('jwt', { session: false }),
//   function (req, res) {
//     Track.findOne({ id: req.body.params }, function (err, track) {
//       if (err) {
//         res.status(401).json(err);
//       } else {
//         res.json(track);
//       }
//     });
//   }
// );



// GENRES ----THIS IS A TEST - NEED TO BE CORRECTED------------------------------------
router.get(
  '/genres/:id',
  passport.authenticate('jwt', { session: false }),
   function (req, res) {
     Genre.find({GenreId: req.params.id}, function (err, genres) {
      if (err) {
        res.status(401).json(err)
      } else {
        res.status(200).json(genres)
      }
    })
  })

  // router.get(
  //   '/genres/:id',
  //   // passport.authenticate('jwt', { session: false }),
  //   async function (req, res) {
  //     Genre.findOne({id: req.body.params}, await function (err, genres) {
  //       if (err) {
  //         res.status(401).json(err)
  //       } else {
  //         res.status(200).json(genres)
  //       }
  //     })
  
  //   })


// ALBUMS/:ID ------------------------------------
// TRACKS ----------------------------------------
// ARTISTS/:ID -----------------------------------





module.exports = router;
