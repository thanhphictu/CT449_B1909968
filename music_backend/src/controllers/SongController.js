const songModel = require("../models/song");
const multer = require('multer');
var jsmediatags = require("jsmediatags");
let fs = require('fs-extra');
var appRoot = require('app-root-path');
const song = require("../models/song");

class SongController {

    //[GET] /api/song/getsong/:playlist
    getSongByPlaylist = async (req, res) => {
        const filter = { playlist: req.params.playlist };
        const cursor = await song.find(filter);
        let ua = cursor.map((value) => ({
            _id: value._id,
            album: value.album,
            artist: value.artist,
            name: value.name,
            playlist: value.playlist,
            songUrl: value.songUrl,
            imageURL: Buffer.from(value.imageURL, 'binary').toString('base64')
        }));
        if (cursor) {
            res.status(200).send({ success: true, data: ua });
        } else {
            res.status(200).send({ success: true, msg: "No Data Found" });
        }
    };

    //[POST]
    getOneSong = async (req, res) => {
        const filter = { _id: req.params.getOne };
        const cursor = await songModel.findOne(filter);
        if (cursor) {
            res.status(200).send({ success: true, data: cursor });
        } else {
            res.status(200).send({ success: true, msg: "No Data Found" });
        }
    };

    //[POST] /api/playlist/addsonginto-playlist
    addSongIntoPlaylist = async (req, res) => {
        let obj = {};
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                let directory = appRoot + "/src/public/assets/playlists/" + req.body.playlist;
                if (fs.existsSync(directory) && fs.lstatSync(directory).isDirectory()) {
                    cb(null, directory);
                } else {
                    fs.mkdirSync(directory, { recursive: true });
                    cb(null, directory);
                }

            },
            filename: (req, file, cb) => {
                const fileExt = file.originalname.split(".").pop();
                const filename = `${new Date().getTime()}.${fileExt}`;

                obj.nameSong = filename;

                cb(null, filename);
            },
        });

        // Filter the file to validate if it meets the required audio extension
        const fileFilter = (req, file, cb) => {
            if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
                cb(null, true);
            } else {
                cb(
                    {
                        message: "Unsupported File Format",
                    },
                    false
                );
            }
        };

        // Set the storage, file filter and file size with multer
        const upload = multer({
            storage,
            limits: {
                fieldNameSize: 200,
                fileSize: 20 * 1024 * 1024,
            },
            fileFilter,
        }).single("songs");

        upload(req, res, (err) => {
            if (err) {
                return res.send(err);
            }

            jsmediatags.read(appRoot + "/src/public/assets/playlists/" + req.body.playlist + "/" + obj.nameSong, {
                onSuccess: function (tag) {
                    // var img = Buffer.from(tag.tags.picture.data, 'base64').toString('hex');
                    let model = new songModel({
                        name: tag.tags.title,
                        album: tag?.tags?.album ? tag.tags.album : "Đang cập nhật",
                        imageURL: tag.tags.picture.data,
                        songUrl: process.env.URL_WEBSITE + "/api/find-song-api/" + req.body.playlist + "/" + obj.nameSong,
                        playlist: req.body.playlist,
                        artist: tag.tags.artist,

                    });

                    model
                        .save()
                        .then((item) => {
                            res.send({ err: 0 })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                },
                onError: function (error) {
                    console.log(':(', error.type, error.info);
                    res.send("that bai");

                }
            });


        });

    }

    //[POST] /api/playlist/add-song-image
    addSongImgage = async (req, res) => {
        let directory = appRoot + "/src/public/assets/playlists/" + req.body.playlist;
        const fileExt = req.file.originalname.split(".").pop();
        const filename = `${new Date().getTime()}.${fileExt}`;
    }

    //[DELETE] /api/song/delete-one-song
    delete = async (req, res) => {
        const filter = { _id: req.body.deleteId };
        let directory = appRoot + "/src/public/assets/playlists/" + req.body.playlist + "/" + req.body.nameSong;
        const result = await song.deleteOne(filter);
        if (result.deletedCount === 1 && directory) {
            fs.unlinkSync(directory);
            res.status(200).send({ success: true, msg: "Data Deleted" });
        } else {
            res.status(200).send({ success: false, msg: "Data Not Found" });
        }
    }

}

module.exports = new SongController; 