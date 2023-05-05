<script>

import HomePlayList from "./HomePlayList.vue";

export default {
    data() {
        return {
            motionGalleryIndex: 1,
            increaseIndex: null,
            nameMotion1: "",
            nameMotion2: "",
            nameMotion3: "",
            nameMotion4: "",
            nameMotion5: "",
            nameMotion6: "",

        }
    },
    components: {
        HomePlayList
    },
    mounted() {
        this.motionGalleryIndex = this.motionGalleryIndex + 1;
    },
    watch: {
        motionGalleryIndex() {
            if (this.increaseIndex) {
                clearTimeout(this.increaseIndex);
            }
            if (this.motionGalleryIndex > 6) {
                this.motionGalleryIndex = 1;
            }
            this.increaseIndex = setInterval(() => {
                this.motionGalleryIndex = (this.motionGalleryIndex + 1);
            }, 2500);
            this.motion1(this.motionGalleryIndex);
            this.motion2(this.motionGalleryIndex);
            this.motion3(this.motionGalleryIndex);
            this.motion4(this.motionGalleryIndex);
            this.motion5(this.motionGalleryIndex);
            this.motion6(this.motionGalleryIndex);
        }

    },
    methods: {
        //previous
        clickPrevious() {
            if (this.motionGalleryIndex < 2) {
                this.motionGalleryIndex = (6);
            }
            else {
                this.motionGalleryIndex = (this.motionGalleryIndex - 1);
            }
        },
        //next
        clickNext() {
            if (this.motionGalleryIndex > 5) {
                this.motionGalleryIndex = (1);
            }
            else {
                this.motionGalleryIndex = (this.motionGalleryIndex + 1);
            }
        },
        // hình 1 
        motion1(number) {
            if (number === 1) {
                this.nameMotion1 = "gallery-item gallery-item-first";
            }
            else if (number === 2) {
                this.nameMotion1 = "gallery-item gallery-item-add";
            }
            else if (number === 3) {
                this.nameMotion1 = "gallery-item gallery-item-last";
            }
            else if (number === 4) {
                this.nameMotion1 = "gallery-item gallery-item-next";
            }
            else if (number === 5) {
                this.nameMotion1 = "gallery-item gallery-item-selected";
            }
            else if (number === 6) {
                this.nameMotion1 = "gallery-item gallery-item-previous";
            }
        },
        //hình 2
        motion2(number) {
            if (number === 1) {
                this.nameMotion2 = "gallery-item gallery-item-previous";
            }
            else if (number === 2) {
                this.nameMotion2 = "gallery-item gallery-item-first";
            }
            else if (number === 3) {
                this.nameMotion2 = "gallery-item gallery-item-add";
            }
            else if (number === 4) {
                this.nameMotion2 = "gallery-item gallery-item-last";
            }
            else if (number === 5) {
                this.nameMotion2 = "gallery-item gallery-item-next";
            }
            else if (number === 6) {
                this.nameMotion2 = "gallery-item gallery-item-selected";
            }
        },
        //hình 3
        motion3(number) {
            if (number === 1) {
                this.nameMotion3 = "gallery-item gallery-item-selected";
            }
            else if (number === 2) {
                this.nameMotion3 = "gallery-item gallery-item-previous";
            }
            else if (number === 3) {
                this.nameMotion3 = "gallery-item gallery-item-first";
            }
            else if (number === 4) {
                this.nameMotion3 = "gallery-item gallery-item-add";
            }
            else if (number === 5) {
                this.nameMotion3 = "gallery-item gallery-item-last";
            }
            else if (number === 6) {
                this.nameMotion3 = "gallery-item gallery-item-next";
            }
        },
        //hình 4
        motion4(number) {
            if (number === 1) {
                this.nameMotion4 = "gallery-item gallery-item-next";
            }
            else if (number === 2) {
                this.nameMotion4 = "gallery-item gallery-item-selected";
            }
            else if (number === 3) {
                this.nameMotion4 = "gallery-item gallery-item-previous";
            }
            else if (number === 4) {
                this.nameMotion4 = "gallery-item gallery-item-first";
            }
            else if (number === 5) {
                this.nameMotion4 = "gallery-item gallery-item-add";
            }
            else if (number === 6) {
                this.nameMotion4 = "gallery-item gallery-item-last";
            }
        },
        // hình 5 
        motion5(number) {
            if (number === 1) {
                this.nameMotion5 = "gallery-item gallery-item-last";
            }
            else if (number === 2) {
                this.nameMotion5 = "gallery-item gallery-item-next";
            }
            else if (number === 3) {
                this.nameMotion5 = "gallery-item gallery-item-selected";
            }
            else if (number === 4) {
                this.nameMotion5 = "gallery-item gallery-item-previous";
            }
            else if (number === 5) {
                this.nameMotion5 = "gallery-item gallery-item-first";
            }
            else if (number === 6) {
                this.nameMotion5 = "gallery-item gallery-item-add";
            }
        },
        // hình 6
        motion6(number) {
            if (number === 1) {
                this.nameMotion6 = "gallery-item gallery-item-add";
            }
            else if (number === 2) {
                this.nameMotion6 = "gallery-item gallery-item-last";
            }
            else if (number === 3) {
                this.nameMotion6 = "gallery-item gallery-item-next";
            }
            else if (number === 4) {
                this.nameMotion6 = "gallery-item gallery-item-selected";
            }
            else if (number === 5) {
                this.nameMotion6 = "gallery-item gallery-item-previous";
            }
            else if (number === 6) {
                this.nameMotion6 = "gallery-item gallery-item-first";
            }
        }
    },
}
</script>

<template>
    <div class="home-container">
        <div class="home-intro-container">
            <div class="gallery">
                <div class="gallery-container">
                    <div class="gallery-previous" @click="clickPrevious">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div :class="this.nameMotion1">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://vnn-imgs-f.vgcloud.vn/2020/04/14/00/suzy-tinh-dau-quoc-dan-so-huu-khoi-tai-san-chuc-trieu-do-38.jpg?width=600"
                                        alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div :class="this.nameMotion2">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/4/rose-2-1614827659727271147948.jpeg"
                                        alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div :class="this.nameMotion3">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://censor.vn/wp-content/uploads/2022/03/justin-bieber.jpeg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div :class="this.nameMotion4">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://vcdn1-giaitri.vnecdn.net/2021/02/03/PosterOfficial1562037152-16123-1267-4089-1612328655.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0lNOphg10V23vjAkFWWr6g"
                                        alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div :class="this.nameMotion5">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://media.viez.vn/prod/2021/11/18/thay_giao_ba_e6d906a44b.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div :class="this.nameMotion6">
                        <div class="music-card">
                            <div class="music-card-image">
                                <figure>
                                    <img src="https://a-static.besthdwallpaper.com/twice-s-momo-in-perfect-world-mv-shoot-2021-wallpaper-3840x2160-73959_54.jpg"
                                        alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>


                    <div class="gallery-next" @click="clickNext">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>

        </div>

        <div class="playlist-section-container">
            <div class="playlist-section-intro-container">
                <div class="playlist--flex">
                    <div class="playlist-section_title">
                        <div class="title-section">
                            Có Thể Bạn Muốn Nghe
                        </div>
                        <div class="icon-section">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>

                <HomePlayList />

            </div>



        </div>
    </div>
</template>