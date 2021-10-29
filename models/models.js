const mongoose = require('mongoose'), Schema = mongoose.Schema

// SCHEMAS -------------------------------------------
const UserSchema = new Schema({
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

const TrackSchema = new Schema({
    _id: {
        $oid: String
    },
    TrackId: Number,
    Name: String,
    AlbumId: {type: Schema.Types.ObjectId, ref: "Album"},
    MediaTypeId: {type: Schema.Types.ObjectId, ref: "MediaType"},
    GenreId: {type: Schema.Types.ObjectId, ref: "Genre"},
    Composer: String,
    Milliseconds: Number,
    Bytes: Number,
    UnitPrice: Number
})

const MediaTypeSchema = new Schema({
    _id: {
        $oid: String
    },
    MediaTypeId: Number,
    Name: String
})

const GenreSchema = new Schema({
    _id: {
        $oid: String
    },
    GenreId: Number,
    Name: String
})

const ArtistSchema = new Schema({
    _id: {
        $oid: String
    },
    ArtistId: Number,
    Name: String
})

const AlbumSchema = new Schema({
    _id: {
        $oid: String
    },
    AlbumId: Number,
    Title: String,
    ArtistId: {type: Schema.Types.ObjectId, ref: "Album"}
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
