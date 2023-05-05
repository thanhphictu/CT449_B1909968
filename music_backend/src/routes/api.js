const express = require('express');
const router = express.Router();
const PlaylistCotroller = require("../controllers/PlaylistController");
const SongController = require("../controllers/SongController");

const multer = require('multer');
const os = require('os');
const upload = multer({})


//song
router.post("/song/delete-one-song", SongController.delete);
router.post("/playlist/addsonginto-playlist", SongController.addSongIntoPlaylist);
router.get("/song/getsong/:playlist", SongController.getSongByPlaylist);
router.post("/song/getone", SongController.getOneSong);

router.get("/playlist-default-img", (req, res) => {
    const path = "public\\assets\\images\\album_default.png";
    // const path = "/public/assets/playlists/" + req.body.playlist + "/" + obj.nameSong
    res.sendFile(path, { root: './src' });
});

router.get("/find-song-api/:playlist/:nameSong", (req, res) => {
    // const path = "public\\assets\\playlists\\py1\\1678765428609.mp3";
    const path = "/public/assets/playlists/" + req.params.playlist + "/" + req.params.nameSong
    res.sendFile(path, { root: './src' });
})
//playlist


router.post("/playlist/delete-playlist", PlaylistCotroller.delete);
router.put("/playlist/update/:updateId", PlaylistCotroller.update);
router.post("/playlist/addone", PlaylistCotroller.addOne);
router.get("/playlist/getOne/:getOne", PlaylistCotroller.getOne);
router.get('/playlist', PlaylistCotroller.findAll);


module.exports = router;
