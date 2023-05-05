<script>
import FooterMusic from "./Footer/FooterMusic.vue";
import CreatePlaylist from "./PlayList/CreatePlaylist.vue";
import axios from "axios";
export default {

    data() {
        return {
            motionImgFirst: 0,
            timeout: null,
            songs: "",
            nameMotionImg1: "",
            nameMotionImg2: "",
            nameMotionImg3: "",
            nameMotionImg4: "",
            nameMotionImg5: "",
            nameMotionImg6: "",
            isShowCreatePlaylist: false,
        }
    },
    components: {
        FooterMusic, CreatePlaylist,
    },
    computed: {
        classObject() {
            if (this.$route.fullPath.includes("/mymusic")) {
                return 'sidebar-active';
            }

        }
    },
    methods: {
        // chưa upload file qua server được

        clickShowCreatePlatList() {
            this.isShowCreatePlaylist = !this.isShowCreatePlaylist;
        }
    }
}
</script>

<template>
    <div class="musicWeb">
        <div class="header">
            <div class="header-content">
                <div class="h-content-left">

                </div>
                <div class="h-content-right">
                    <div class="theme" data-toggle="tooltip" data-placement="bottom" title="Giao Diện">
                        <button class="btn-theme" onClick={onClickTheme}>
                            <i class="icon-theme">
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <defs>
                                        <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                                            <stop offset="0%" stopColor="#F81212"></stop>
                                            <stop offset="100%" stopColor="red"></stop>
                                        </linearGradient>
                                        <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                                            <stop offset="0%" stopColor="#00F"></stop>
                                            <stop offset="100%" stopColor="#0031FF"></stop>
                                        </linearGradient>
                                        <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                                            <stop offset="0%" stopColor="#FFA600"></stop>
                                            <stop offset="100%" stopColor="orange"></stop>
                                        </linearGradient>
                                        <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                                            <stop offset="0%" stopColor="#13EFEC"></stop>
                                            <stop offset="100%" stopColor="#00E8DF"></stop>
                                        </linearGradient>
                                        <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%"
                                            filterUnits="objectBoundingBox">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%"
                                            filterUnits="objectBoundingBox">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%"
                                            filterUnits="objectBoundingBox">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%"
                                            filterUnits="objectBoundingBox">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9">
                                            </feGaussianBlur>
                                        </filter>
                                        <path id="qtpqrj1oda"
                                            d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                        </path>
                                        <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                                        <path id="2eiwxjmc7m"
                                            d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                                        <mask id="tinejqaasb" fill="#fff">
                                            {/* <use xlink:to="#qtpqrj1oda"></use> */}
                                            <use xlinkHref='#qtpqrj1oda' />
                                        </mask>
                                        <use fill="#FFF" fillOpacity="0" xlinkHref='#qtpqrj1oda'></use>
                                        <g mask="url(#tinejqaasb)">
                                            <g transform="translate(-2 -3)">
                                                <mask id="uf3ckvfvpf" fill="#fff">
                                                    <use xlinkHref='#jggzvnjgfc'></use>
                                                </mask>
                                                <use fill="#D8D8D8" xlinkHref='#jggzvnjgfc'></use>
                                                <circle cx="8.9" cy="6.8" r="9" fill="url(#j32lhg93hd)"
                                                    filter="url(#4a7imk8mze)" mask="url(#uf3ckvfvpf)"></circle>
                                                <circle cx="9.3" cy="13.7" r="5.5" fill="url(#hjoavsus6g)"
                                                    filter="url(#301mo6jeah)" mask="url(#uf3ckvfvpf)"></circle>
                                                <circle cx="15.9" cy="6.9" r="6" fill="url(#la1y5u3dvi)"
                                                    filter="url(#b2zvzgq7fj)" mask="url(#uf3ckvfvpf)"></circle>
                                                <circle cx="16.4" cy="17.7" r="7.5" fill="url(#2dsmrlvdik)"
                                                    filter="url(#a1wq161tvl)" mask="url(#uf3ckvfvpf)"></circle>
                                            </g>
                                        </g>
                                        <use fill="#FFF" fillOpacity="0.05" xlinkHref='#2eiwxjmc7m'></use>
                                    </g>
                                </svg>
                            </i>


                        </button>
                    </div>


                </div>
            </div>


        </div>

        <div class="playlist-home"></div>
        <div class="music_user--home">
            <div class="home_user-1">
                <div class="home_user-2">
                    <router-view></router-view>
                </div>
            </div>

        </div>

        <aside class="sidebar">
            <div class="sidebar-wrapper">
                <nav class="sidebar-brand">
                    <div class="logo-brand  ">
                        <router-link :to="{ path: '/' }">
                            <div class="img-logo-main">

                            </div>
                        </router-link>


                    </div>
                </nav>
                <ul class="sidebar-main">
                    <li class="individual type-main">
                        <router-link :to="{ path: '/mymusic' }" class="link-main" :active-class="classObject">
                            <div class="main-icon">
                                <i class="fas fa-music"></i>
                            </div>
                            <div class="main-name">
                                <span>Cá Nhân</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="discover type-main">
                        <router-link :to="{ path: '/' }" class="link-main" active-class="sidebar-active">
                            <div class="main-icon">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                            <div class="main-name">
                                <span>Khám Phá</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="sidebar-divide">

                </div>
                <div class="sidebar-more">
                    <nav class="sidebar-more--srcoll">
                        <div class="sidebar-libary">
                            <div class="sidebar-libary-title">
                                thư viện
                            </div>
                            <div class="icon-labary">
                                <span class="link-libary">
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                            </div>
                        </div>
                        <ul class="sidebar-libary-personal">

                            <li class="libary-personal-item">
                                <router-link :to="{ path: '/mymusic' }" class="link-libary-item">
                                    <i class="icon-p-item">
                                        <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                                            alt="icon" />
                                    </i>
                                    <span>Cá nhân</span>
                                </router-link>
                            </li>

                            <li class="libary-personal-item">
                                <router-link :to="{ path: '/' }" class="link-libary-item">
                                    <i class="icon-p-item">
                                        <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                                            alt="icon" />
                                    </i>
                                    <span>Playlist</span>
                                </router-link>
                            </li>


                        </ul>
                    </nav>
                </div>
                <div class="sidebar-divide">

                </div>
                <div class="add-list" @click="clickShowCreatePlatList">
                    <button class="sidebar-btn">
                        <i class="fas fa-plus"></i>
                        <span>Tạo playlist mới</span>
                    </button>
                </div>
                <div v-if="isShowCreatePlaylist">
                    <CreatePlaylist @closeCreatePlaylist="clickShowCreatePlatList" />
                </div>


            </div>

        </aside>

        <div class="row">

        </div>
        <div class="footer">
            <FooterMusic />
        </div>
    </div>
</template>

<style></style>