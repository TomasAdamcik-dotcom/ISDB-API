var express = require('express');
var router = express.Router();
const passport = require('passport')
const { Track, MediaType, Genre, Artist, Album } = require('../models/collections')


// TRACKS/:ID ------------------------------------
router.get('/tracks/:id',
  passport.authenticate('jwt', { session: false }),
  async function (req, res) {
    // !!! I need to parse to integer, because mongo sees the id as a string
    let searchId = parseInt(req.params.id);
    let query = await Track.aggregate([

      { $match: { "TrackId": searchId } },
      {
        $lookup: {
          from: "albums",
          localField: "AlbumId",
          foreignField: "AlbumId",
          as: "Album"
        }
      },
      {
        $lookup: {
          from: "genres",
          localField: "GenreId",
          foreignField: "GenreId",
          as: "Genre"
        }
      }

    ])

    return res.json(query)
  })
// GENRES ----------------------------------------
router.get(
  '/genres',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    Genre.aggregate([{ $project: { _id: 0, GenreId: 0 } }], function (err, genres) {
      if (err) {
        res.status(401).json(err);
      } else {
        res.status(200).json(genres);
      }
    })
  })

// ALBUMS/:ID ------------------------------------
router.get('/albums/:id',
  passport.authenticate('jwt', { session: false }),
  async function (req, res) {
    let searchId = parseInt(req.params.id);
    let query = await Album.aggregate([

      { $match: { "AlbumId": searchId } },
      {
        $lookup: {
          from: "artists",
          localField: "ArtistId",
          foreignField: "ArtistId",
          as: "Artist"
        },
      },
      { $unwind: "$Artist" },
      {
        $lookup: {
          from: "tracks",
          localField: "AlbumId",
          foreignField: "AlbumId",
          as: "Tracks"
        }
      }
    ])
    return res.json(query)
  })

// POST TRACKS ----------------------------------------
router.post('/tracks',
  passport.authenticate('jwt', { session: false }),
  async function (req, res) {
    // check if data is passed from body
    let passedAlbumId = req.body.albumId;
    let passedGenreId = req.body.genreId;
    if (passedAlbumId && passedGenreId) {
      // res.json({message: "Hello"})

      // check if genreid and album already exist 
      let genre = await Genre.findOne({ GenreId: passedGenreId });
      if (genre) {
        // check album
        let album = await Album.findOne({ AlbumId: passedAlbumId });
        if (album) {
          // save data to Tracks
          
          let newTrack = new Track({
            Name: req.body.trackName,
            AlbumId: passedAlbumId,
            GenreId: passedGenreId,
            Composer: req.body.composer,
            Milliseconds: req.body.duration,
            Bytes: req.body.sizeInBytes,
            UnitPrice: req.body.unitPrice
          })

          await newTrack.save();
          res.send(newTrack);


          // res.json({message: `${passedGenreId} and ${passedAlbumId}`})

        } else {
          res.status(401).json({ message: "Entered album id does not exist" })  
        }

      } else {
        res.status(401).json({ message: "Entered genre id does not exist" })
      }


    } else {
      res.status(401).json({ message: "Please enter AlbumId and GenreId" })
    }
  })


// ARTISTS/:ID -----------------------------------
router.get('/artists/:id',
  passport.authenticate('jwt', { session: false }),
  async function (req, res) {
    let searchId = parseInt(req.params.id);
    let query = await Artist.aggregate([

      { $match: { "ArtistId": searchId } },
      { $project: { _id: 0 } },
      {
        $lookup: {
          from: "albums",
          localField: "ArtistId",
          foreignField: "ArtistId",
          as: "Artist"
        },
      }
    ])
    return res.json(query)
  })

module.exports = router;
