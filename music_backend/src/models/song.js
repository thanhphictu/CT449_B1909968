const mongoose = require("mongoose");

const SongSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        album: {
            type: String,
        },

        imageURL: {
            type: Buffer,
            required: true,
        },
        songUrl: {
            type: String,
            required: true,
        },
        playlist: {
            type: String,
        },
        artist: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("song", SongSchema);