const playlist = require("../models/playlist");
const songModel = require("../models/song");

const multer = require('multer');
let fs = require('fs-extra');
var appRoot = require('app-root-path');

class PlaylistCotroller {

    //[DELETE] /api/playlist/delete-playlist
    delete = async (req, res) => {
        const filter = { code: req.body.playlist };
        const result = await playlist.deleteOne(filter);
        let directory = appRoot + "/src/public/assets/playlists/" + req.body.playlist;
        var query = { playlist: req.body.playlist };
        const resultDeleteSong = await songModel.deleteMany(query);
        if (result.deletedCount === 1) {
            fs.rmSync(directory, { recursive: true, force: true });
            res.status(200).send({ success: true, msg: "Data Deleted" });
        } else {
            res.status(200).send({ success: false, msg: "Data Not Found" });
        }
    }

    //[PUT] playlist/update/:updateId
    update = async (req, res) => {
        const filter = { _id: req.params.updateId };
        const options = {
            upsert: true,
            new: true,
        };
        try {
            const result = await playlist.findOneAndUpdate(
                filter,
                {
                    name: req.body.name,
                },
                options
            );
            res.status(200).send({ success: 1 });
        } catch (error) {
            res.status(400).send({ success: false, msg: error });
        }
    }

    //[POST] /api/playlist/addone
    addOne = async (req, res) => {
        try {
            let playlistModel = new playlist({
                name: req.body.name,
                code: req.body.code,
                imageURL: req.body.imageURL,
            });
            playlistModel
                .save()
                .then(item => {
                    res.send("item saved to database");
                })
                .catch(err => {
                    res.status(400).send({ msg: "err create new playlist" + err });
                });

        } catch (e) {
            res.status(400).send({ msg: "err create new playlist" + err });
        }
    }

    //[GET] /playlist/getOne/:getOne
    getOne = async (req, res) => {
        const filter = { code: req.params.getOne };
        const cursor = await playlist.findOne(filter);
        if (cursor) {
            res.status(200).send({ success: true, data: cursor });
        } else {
            res.status(200).send({ success: true, msg: "No Data Found" });
        }
    };

    //[GET] /api/playlist
    findAll = async (req, res) => {
        const options = {
            // sort returned documents in ascending order
            // sort: { createdAt: 1 },
            // Include only the following
            // projection : {}
        };

        const cursor = await playlist.find(options);
        if (cursor) {
            res.status(200).send({ success: true, data: cursor });
        } else {
            res.status(200).send({ success: true, msg: "No Data Found" });
        }
    }

}
module.exports = new PlaylistCotroller;