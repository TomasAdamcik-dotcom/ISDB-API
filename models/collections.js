const mongoose = require('mongoose'), Schema = mongoose.Schema

// SCHEMAS -------------------------------------------


const TrackSchema = new Schema({
    // _id: {
    //     $oid: String
    // },
    TrackId: Number,
    Name: String,
    // AlbumId: {type: Schema.Types.ObjectId, ref: "Album"}, // genreid and albumid does not send if defined this way
    AlbumId: Number,
    MediaTypeId: {type: Schema.Types.ObjectId, ref: "MediaType"},
    // GenreId: {type: Schema.Types.ObjectId, ref: "Genre"}, // genreid and albumid does not send if defined this way
    GenreId: Number,
    Composer: String,
    Milliseconds: Number,
    Bytes: Number,
    UnitPrice: Number
})

const MediaTypeSchema = new Schema({
    // _id: {
    //     $oid: String
    // },
    MediaTypeId: Number,
    Name: String
})

const GenreSchema = new Schema({
    // _id: {
    //     $oid: String
    // },
    GenreId: Number,
    Name: String
})

const ArtistSchema = new Schema({
    // _id: {
    //     $oid: String
    // },
    ArtistId: Number,
    Name: String
})

const AlbumSchema = new Schema({
    // _id: {
    //     $oid: String
    // },
    AlbumId: Number,
    Title: String,
    ArtistId: {type: Schema.Types.ObjectId, ref: "Album"}
})

// MODELS -------------------------------------------

const Track = mongoose.model('Track', TrackSchema)
const MediaType = mongoose.model('MediaType', MediaTypeSchema)
const Genre = mongoose.model('Genre', GenreSchema)
const Artist = mongoose.model('Artist', ArtistSchema)
const Album = mongoose.model('Album', AlbumSchema)



// EXPORTS -------------------------------------------
module.exports = { Track, MediaType, Genre, Artist, Album }
