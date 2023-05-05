<script>
export default {
    data() {
        return {
            mymusics:
                [
                    {
                        path: "/mymusic",
                        label: "tổng quan"
                    },
                    {
                        path: "/mymusic/libary/song",
                        label: "Bài Hát"
                    },
                    {
                        path: "/mymusic/libary/playlist",
                        label: "Playlist"
                    },
                    {
                        path: "/mymusic/libary/artist",
                        label: "Nghệ Sĩ"
                    },
                    {
                        path: "/mymusic/libary/album",
                        label: "Album"
                    },
                    {
                        path: "/mymusic/libary/mv",
                        label: "MV"
                    },
                    {
                        path: "/mymusic/libary/upload",
                        label: "Tải Lên"
                    }
                ]
        }
    }
}
</script>

<template>
    <div class="logedIn">

        <div class="user_profile_header">
            <div class="profile_container">
                <div class="profile_cnt_avt">
                    <img src="/assets/img/avt01.jpg" class="avt_profile" alt="avt Profile" />
                </div>
                <div class="profile_cnt_name">
                    <span>
                        Thành Phi
                    </span>
                </div>

            </div>
        </div>

        <nav class="user_profile_navbar">
            <div class="profile_navbar_music">
                <div class="navbar_menu">
                    <router-link v-for="item in mymusics" :to="{ path: `${item.path}` }" class="nav_item"
                        exact-active-class="nav_item-active">
                        <li class="pro_nav_menu_item">
                            <div class="nav_item-link">
                                {{ item.label }}
                        </div>
                    </li>
                    </router-link>
                </div>
            </div>
        </nav>

        <div class="container" :style="{
            paddingTop: 0, paddingBottom: 0, paddingLeft: 60 + 'px', paddingRight: 60 + 'px'
        }">
            <div class="song-list-header">
                <div class="list-title">
                    <span>Bài Hát</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="list-header-options">
                    <div class="header-option-upload">
                        <input type="file" name="option-upload" id="option-upload" hidden />
                        <label htmlFor="option-upload">
                            <div class="option-upload">
                                <span class="btn-option-link" tabIndex="0">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                </span>
                            </div>
                        </label>
                    </div>
                    <div class="option-play-all" onClick={onPlayAll}>
                        <div class="play-all">
                            <i class="fas fa-play"></i>
                            <span>Phát Tất Cả</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <router-view></router-view>
            </div>

        </div>


    </div>
</template>