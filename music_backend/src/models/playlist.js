const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        imageURL: {
            type: String,
            required: true,
        },

        code: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("playlist", playlistSchema);