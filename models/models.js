const mongoose = require('mongoose')

// SCHEMAS -------------------------------------------
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    }
})

const TrackSchema = new mongoose.Schema({
    _id: {
        $oid: String
    },
    TrackId: Number,
    Name: String,
    AlbumId: Number,
    MediaTypeId: Number,
    GenreId: Number,
    Composer: String,
    Milliseconds: Number,
    Bytes: Number,
    UnitPrice: Number
})

const MediaTypeSchema = new mongoose.Schema({
    _id: {
        $oid: String
    },
    MediaTypeId: Number,
    Name: String
})

const GenreSchema = new mongoose.Schema({
    _id: {
        $oid: String
    },
    GenreId: Number,
    Name: String
})

const ArtistSchema = new mongoose.Schema({
    _id: {
        $oid: String
    },
    ArtistId: Number,
    Name: String
})

const AlbumSchema = new mongoose.Schema({
    _id: {
        $oid: String
    },
    AlbumId: Number,
    Title: String,
    ArtistId: Number
})

// MODELS -------------------------------------------
const User = mongoose.model('User', UserSchema)
const Track = mongoose.model('Track', TrackSchema)
const MediaType = mongoose.model('MediaType', MediaTypeSchema)
const Genre = mongoose.model('Genre', GenreSchema)
const Artist = mongoose.model('Artist', ArtistSchema)
const Album = mongoose.model('Album', AlbumSchema)



// EXPORTS -------------------------------------------
module.exports = { User, Track, MediaType, Genre, Artist, Album }
