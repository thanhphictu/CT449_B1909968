import { defineStore } from 'pinia';

const defaultState = {
    myplaylist:
        [
            {
                id: "/mymusic_01",
                name: "Sóng",
                artist: "Dzàng Hoàng, Thúy Anh, Bảo Nguyên",
                songUrl: "/src/assets/song/mymusic/song1.mp3",
                imageUrl: "/assets/img/song1_img.jpg",
                duration: "05:05"
            },
            {
                id: "/mymusic_02",
                name: "Đã Từng",
                artist: "Bùi Anh Tuấn, Dương Hoàng Yến",
                songUrl: "/src/assets/song/mymusic/song2.mp3",
                imageUrl: "/assets/img/song2_img.jpg",
                duration: "04:56"
            },
            {
                id: "/mymusic_03",
                name: "Suýt Nữa Thì",
                artist: "Andiez",
                songUrl: "/src/assets/song/mymusic/song3.mp3",
                imageUrl: "/assets/img/song3_img.jpg",
                duration: "04:43"
            },
            {
                id: "/mymusic_04",
                name: "Ngày Mai Em Đi (Touliver Mix)",
                artist: "Touliver, Lê Hiếu, SooBin",
                songUrl: "/src/assets/song/mymusic/song4.mp3",
                imageUrl: "/assets/img/song4_img.jpg",
                duration: "03:38"
            },
            {
                id: "/mymusic_05",
                name: "Giả Vờ Nhưng Em Yêu Anh",
                artist: "Miu Lê",
                songUrl: "/src/assets/song/mymusic/song5.mp3",
                imageUrl: "/assets/img/song5_img.jpg",
                duration: "03:54"
            },
            {
                id: "/mymusic_06",
                name: "Muộn Rồi Mà Sao Còn",
                artist: "Sơn Tùng M-TP",
                songUrl: "/src/assets/song/mymusic/song6.mp3",
                imageUrl: "/assets/img/song6_img.jpg",
                duration: "04:35"
            },
            {
                id: "/mymusic_07",
                name: "STAY",
                artist: "Justin Bieber",
                songUrl: "/src/assets/song/mymusic/song7.mp3",
                imageUrl: "/assets/img/song7_img.jpg",
                duration: "02:21"
            },
            {
                id: "/mymusic_08",
                name: "Heartbreak Anniversary",
                artist: "Giveon",
                uri:
                    "/src/assets/song/mymusic/song8.mp3",
                imageUrl: "/assets/img/song8_img.jpg",
                duration: "03:16"
            },
            {
                id: "/mymusic_09",
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/1/e/3/31e3c0cca618fa62edb760f908d6f3c5.jpg",
                name: "Phải Chăng Em Đã Yêu?",
                artist:
                    "Juky San, RedT",
                duration: "03:10",
                songUrl: "/src/assets/song/mymusic/song9.mp3",

            },
        ],
}

export const useSongs = defineStore(
    'SongsReducer', {
    state: () => {
        return {
            myplaylist: defaultState.myplaylist,
            IndexSongPlaying: 0,
            currentPlaylist: defaultState.myplaylist,
            songCurrentUri: defaultState.myplaylist[0].songUrl,
        }
    },
    actions: {
        setIndexSong(index) {
            this.IndexSongPlaying = index;
        },
        setCurrentPlaylist(playlist) {
            this.currentPlaylist = playlist;
        },
        setSongCurrentUri(uri) {
            this.songCurrentUri = uri;
        }
    },

})