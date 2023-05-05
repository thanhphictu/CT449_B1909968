<script>

import LoopSong from './MusicControl/LoopSong.vue';
import NextSong from './MusicControl/NextSong.vue';
import StartMusic from './MusicControl/StartMusic.vue';
import PrevSong from './MusicControl/PrevSong.vue';
import RanDomSong from './MusicControl/RanDomSong.vue';
import { formatSecond } from '../../utils/util';

import {
    ref, reactive, toRefs, watch, onMounted,
    onUnmounted,
} from "vue";
import Core from '@any-touch/core';
import Pan from '@any-touch/pan';
import { useStateSongStore } from "../../stores/StateSong";
import { useSongs } from "../../stores/Songs";


export default {
    setup() {
        const audioPlayer = ref();
        const audioProgress = ref();
        const audioProgressWrap = ref();
        const audioProgressPoint = ref();
        const stateSongStore = useStateSongStore();
        const SongsReducerParam = useSongs();
        const progressInterval = 200;
        let timer = null;
        let toucher = null;

        const state = reactive({
            isPlaying: false,
            isDragging: false,
            currentTime: 0,
            totalTime: 0,
            totalTimeStr: '00:00',
        })

        //tips: initialize the state when switch music.
        const initState = () => {
            state.isPlaying = false
            state.isDragging = false
            state.currentTime = 0
            state.totalTime = 0
            state.totalTimeStr = '00:00'
        }

        //
        const playUpdate = () => {
            if (state.isDragging) {
                return
            }
            const offsetLeft =
                (audioPlayer?.value?.currentTime / audioPlayer?.value?.duration) * 100;
            state.currentTime = audioPlayer?.value?.currentTime;
            audioProgress.value.style.width = `${offsetLeft}%`;
            // setPointPosition(offsetLeft);
        }
        const startTimer = () => {
            clearTimer()
            timer = window.setInterval(playUpdate, progressInterval)
            state.isPlaying = true
        }
        const clearTimer = () => {
            if (timer) {
                window.clearInterval(timer)
                timer = null
            }
        }

        const play = () => {
            audioPlayer.value
                .play()
                .then(() => {
                    stateSongStore.setStateSong(true);
                    startTimer()
                    setTotalTime(audioPlayer.value.duration)
                })
                .catch((error) => {
                    console.log(error);
                })
        };
        const pause = () => {
            audioPlayer.value.pause()
            stateSongStore.setStateSong(false);
        };
        const togglePlayer = () => {
            if (stateSongStore.StateSong) {
                pause();
            } else {
                play();
            }
        };

        const setTotalTime = (seconds) => {
            state.totalTime = seconds
            state.totalTimeStr = formatSecond(state.totalTime)
        }

        const setPointPosition = (offsetLeft) => {
            audioProgressPoint.value.style.left = `${offsetLeft - audioProgressPoint.value.offsetWidth / 2
                }px`
        }

        const NextCurrentIndex = () => {
            // nếu mảng có 9 thì lấy > 8
            if (SongsReducerParam.IndexSongPlaying >= SongsReducerParam.currentPlaylist.length - 1) {
                SongsReducerParam.setIndexSong(0);
                localStorage.setItem('IndexSongPlaying', 0);
            } else {
                SongsReducerParam.setIndexSong(SongsReducerParam.IndexSongPlaying + 1);
                localStorage.setItem('IndexSongPlaying', SongsReducerParam.IndexSongPlaying + 1);
            }
            var playlist = SongsReducerParam.currentPlaylist;
            var index = SongsReducerParam.IndexSongPlaying;
            SongsReducerParam.setSongCurrentUri(playlist[index].songUrl);
        }
        const PrevCurrentIndex = () => {
            if (SongsReducerParam.IndexSongPlaying < 1) {
                SongsReducerParam.setIndexSong(SongsReducerParam.currentPlaylist.length - 1);
                localStorage.setItem('IndexSongPlaying', SongsReducerParam.currentPlaylist.length - 1);
            } else {
                SongsReducerParam.setIndexSong(SongsReducerParam.IndexSongPlaying - 1);
                localStorage.setItem('IndexSongPlaying', SongsReducerParam.IndexSongPlaying - 1);
            }
            var playlist = SongsReducerParam.currentPlaylist;
            var index = SongsReducerParam.IndexSongPlaying;
            SongsReducerParam.setSongCurrentUri(playlist[index].songUrl);

        }

        const handleClickProgressWrap = (event) => {
            if (!event) {
                return;
            } else {
                const numberProgress = Number(event.target.value);
                // if (event.target === audioProgressPoint.value) {
                //     return
                // }
                state.currentTime = (numberProgress / 100) * state.totalTime;
                audioPlayer.value.currentTime = state.currentTime;
                if (audioProgress)
                    audioProgress.value.style.width = `${numberProgress}%`;
                play();
            }
        }



        const onAudioEnded = () => {
            NextCurrentIndex();
            clearTimer()
        }

        watch(
            () => SongsReducerParam.songCurrentUri,
            (newValue, oldValue) => {
                audioPlayer.value.src = newValue;
                initState()
                play();
            },
            { deep: true },
        )

        onMounted(() => {
            toucher = new Core(document.getElementById('app') || undefined, {
                preventDefault: false,
            })
            toucher.use(Pan);
            //
        })
        onUnmounted(() => {
            if (toucher) toucher.destroy()
            // pause()
        })


        return {
            audioPlayer, audioProgress, audioProgressWrap, ...toRefs(state),
            stateSongStore, SongsReducerParam,
            play, pause, togglePlayer,
            NextCurrentIndex, PrevCurrentIndex, onAudioEnded,
            handleClickProgressWrap,
            setPointPosition,
            formatSecond,
        }
    },

    data() {
        return {
            avtStyleActive: {
                transform: `rotate(${this.timeImgRoute * 10}deg)`,
                transition: 'all 1s linear',
            },
            isLiked: false,
        }
    },
    components: {
        LoopSong, NextSong, PrevSong, StartMusic, RanDomSong
    },
    methods: {
        clickLiked() {
            this.isLiked = !this.isLiked;
        },

    },


}
</script>

<template>
    <div class="play__music">
        <div class="col-md-3 player-left">
            <div class="player-controll-left">
                <router-link :to="{
                    path: `${SongsReducerParam.currentPlaylist[SongsReducerParam.IndexSongPlaying].playlist
                        ? '/playlistpage/' + SongsReducerParam.currentPlaylist[SongsReducerParam.IndexSongPlaying].playlist
                        : '/mymusic'
                        }`
                }" style="display: flex;">
                    <span v-if="SongsReducerParam.currentPlaylist[0].name === 'Sóng'">
                        <div class="avt-song" v-bind:style="{
                            backgroundImage:
                                'url(' + this.SongsReducerParam.currentPlaylist[this.SongsReducerParam.IndexSongPlaying].imageUrl + ')',
                            transform: `rotate(${currentTime * 30}deg)`,
                            transition: 'all 1s linear',
                        }">
                        </div>
                    </span>
                    <span v-else>
                        <img class="avt-song" v-bind:style="{
                            transform: `rotate(${currentTime * 30}deg)`,
                            transition: 'all 1s linear',
                        }"
                            v-bind:src="'data:image/webp;base64,' + SongsReducerParam.currentPlaylist[SongsReducerParam.IndexSongPlaying].imageURL" />
                    </span>

                    <div class="name-singer-song">
                        <div class="name-song">
                            <marquee width="100%" behavior="scroll">
                                {{ SongsReducerParam.currentPlaylist[SongsReducerParam.IndexSongPlaying].name }}
                            </marquee>
                        </div>
                        <div class="list-songs--info--artist">

                            <span key={index}>
                                <span class="list-songs--info--name-artist">
                                    {{ SongsReducerParam.currentPlaylist[SongsReducerParam.IndexSongPlaying].artist }}
                                </span>
                            </span>


                        </div>

                    </div>
                </router-link>
                <div class="like-list" @click="clickLiked">
                    <div class="icon-heart">
                        <a href="#" class="link-heart-list">
                            <i v-if="isLiked" class="fas fa-heart"></i>
                            <i v-else class="far fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="more-song-left">

                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="player-controll-bar">
                <div class="control">
                    <PrevSong @click.native="PrevCurrentIndex" />
                    <StartMusic @togglePlayer="togglePlayer" />
                    <NextSong @click.native="NextCurrentIndex" />
                </div>
                <div class="music-progress">
                    <div class="time-left-song">
                        <span>
                            {{ `${formatSecond(currentTime)}` }}
                        </span>
                    </div>
                    <div class="item-progress">
                        <input id="progress" class="progress-input" type="range" defaultValue="0" step="1" min="0"
                            @change="handleClickProgressWrap" />
                        <div id="progress-bs4" class="progress" ref="audioProgressWrap">
                            <div class="progress-bar progress-bar1" id="progress-bar" role="progressbar" ref="audioProgress"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                                <i class="fas fa-circle" id="circle-progress"></i>
                            </div>
                        </div>
                    </div>
                    <div class="time-right-song">
                        <span>
                            {{ `${totalTimeStr}` }}
                        </span>
                    </div>
                </div>

                <audio ref="audioPlayer" @ended="onAudioEnded"></audio>

            </div>


        </div>
    </div>
</template>