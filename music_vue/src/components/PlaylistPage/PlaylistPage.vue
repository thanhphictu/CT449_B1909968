<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useSongs } from '../../stores/Songs';
import FormEditPlaylist from './FormEditPlaylist.vue';

export default {
    setup() {
        const SongsReducerParam = useSongs();
        const route = useRoute();
        return {
            SongsReducerParam, route
        }
    },

    data() {
        return {
            playlist: {},
            songs: [],
            code: this.route.params.code,
            isShowEditPlaylist: false,
        }
    },

    components: {
        FormEditPlaylist,
    },
    mounted() {
        this.getOnePlaylist();
        this.getSongByPlaylist();
    },
    methods: {
        clickShowEditPlatList() {
            this.isShowEditPlaylist = !this.isShowEditPlaylist;
        },
        onFileChange(e) {
            let types = /(\.|\/)(mp3|mp4)$/i;
            let file = this.$refs.filesong.files[0];
            if (types.test(file.type) || types.test(file.name)) {
                this.songs = this.$refs.filesong.files[0];
                this.addPlaylist();
            }
            else {
                alert("Vui lòng chọn file MP3");
            }

        },
        async addPlaylist() {

            let rawData = {
                songs: this.songs,
            }

            rawData = JSON.stringify(rawData);
            let formData = new FormData();
            formData.append('playlist', this.code);
            formData.append('songs', this.songs);
            try {
                let response = await axios.post('http://localhost:8787/api/playlist/addsonginto-playlist', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                if (response.data.err === 0) {
                    this.$router.go(this.$router.currentRoute);
                }
            } catch (e) {
                console.log(e);
            }
        },
        async getOnePlaylist() {
            try {
                let response = await axios.get('http://localhost:8787' + '/api/playlist/getOne/' + this.code);
                this.playlist = response.data.data
            } catch (e) {
                console.log(e);
            }
        },
        async getSongByPlaylist() {
            try {
                let response = await axios.get('http://localhost:8787' + '/api/song/getsong/' + this.code);
                this.songs = response.data.data
            } catch (e) {
                console.log(e);
            }
        },
        async deleteSong(item, event) {
            event.stopPropagation();
            try {
                let arr = item.songUrl.split("/");
                let nameSong = arr[arr.length - 1];
                let formData = new FormData();
                formData.append('deleteId', item._id);
                formData.append('playlist', item.playlist);
                formData.append('nameSong', nameSong);

                let response = await axios.post('http://localhost:8787' + '/api/song/delete-one-song', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

                this.$router.go(this.$router.currentRoute)
            } catch (e) {
                console.log(e);
            }
        },
        async playSong(item, index) {
            try {
                this.SongsReducerParam.setCurrentPlaylist(this.songs);
                this.SongsReducerParam.setIndexSong(index);
                this.SongsReducerParam.setSongCurrentUri(item.songUrl);
            } catch (e) {
                console.log(e);
            }
        },
        async deletePlaylist() {
            try {
                let formData = new FormData();
                formData.append('playlist', this.code);

                let response = await axios.post('http://localhost:8787' + '/api/playlist/delete-playlist', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                if (response.data && response.data.success === true) {
                    this.$router.push("/");
                }

            } catch (e) {
                console.log(e);
            }
        },
    }
}
</script>
<template>
    <div class='home-container'>
        <div class="container container-playlist">
            <div class="media-container playlist-header">
                <div class="media-left-img">
                    <figure class='img-media'>
                        <img :src="this.playlist.imageURL" alt="img-playlist" />
                    </figure>

                </div>
                <div class="media-content">
                    <div class="media-content-title">
                        {{ this.playlist.name }}
                        <span class="edit-playlist" @click="clickShowEditPlatList">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                        <div v-if="isShowEditPlaylist">
                            <FormEditPlaylist :idPlaylist="this.playlist._id" @closeEditPlaylist="clickShowEditPlatList" />
                        </div>

                        <span class="edit-playlist" @click="deletePlaylist">
                            <i class="far fa-trash"></i>
                        </span>

                    </div>
                    <div class="media-content-update">
                        Cập nhật ngày: 28/02/2023
                    </div>
                    <div class="media-content-artist">

                        <span class="name-singer-content" key={index2}>
                        </span>

                    </div>
                    <label htmlFor="upload-btn">
                        <div class="media-content-continue-play">
                            <input class="input1" type="file" name="upload-btn" id="upload-btn" ref="filesong"
                                @change="onFileChange" />

                            <div class="upload-playlist">
                                <span class="btn-theme-link" tabIndex="0">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                </span>
                                <div class='title-media-continue-play'>
                                    Tải lên
                                </div>
                            </div>

                        </div>
                    </label>
                </div>
            </div>
            <div class="playlist-right">
                <div class="playlist-title">
                    <span>Lời tựa</span>
                    Va vào những giai điệu chill khó cưỡng của V-Pop
                </div>
                <div class="list-music">
                    <div class="list-music-header select-header">
                        <div class="list-music-header--songs">
                            <div class="icon-list-songs">
                                <!-- <MusicalNote color={'#ffffff80'} height="16px" width="16px" /> -->
                            </div>
                            <div class="title-list-songs">
                                Bài hát
                            </div>
                        </div>
                        <div class="list-music-header--albums">
                            album
                        </div>
                        <div class="list-music-header--duration">
                            xóa bài hát
                        </div>
                    </div>

                    <div v-for="(item, index) in songs" :key="item._id" v-bind:class="index === this.SongsReducerParam.IndexSongPlaying ? 'list-music-content select-header song active' : 'list-music-content select-header song'
                        " @click="playSong(item, index)">
                        <div class="list-music-content--songs">
                            <div class="list-music-content--songs--icon">
                                <!-- <MusicalNotes color={'#ffffff80'} height="16px" width="16px" /> -->
                            </div>
                            <div class="list-music-content--songs--image">
                                <figure>
                                    <img v-bind:src="'data:image/webp;base64,' + item.imageURL" alt="" />
                                </figure>
                            </div>
                            <div class="list-music-content--songs--info">
                                <div class="list-songs--info--name title">
                                    <div>
                                        {{ item.name }}
                                    </div>
                                </div>
                                <div class="list-songs--info--artist">
                                    <span key={index}>
                                        <span class="list-songs--info--name-artist">
                                            {{ item.artist }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="list-music-content--albums">
                            <div class="album-info">
                                <span>
                                    {{ item.album }}

                                </span>
                            </div>
                        </div>

                        <div class="list-music-content--duration" @click="deleteSong(item, $event)">
                            <div class="level-item-duration">
                                <i class="far fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style></style>