<script>
import MyPlayList from "./MyPlayList.vue";

export default {

    data() {
        return {
            motionImgFirst: 0,
            timeout: null,
            nameMotionImg1: "",
            nameMotionImg2: "",
            nameMotionImg3: "",
            nameMotionImg4: "",
            nameMotionImg5: "",
            nameMotionImg6: "",
        }
    },
    watch: {
        // whenever motionImage changes, this function will run
        motionImgFirst(newMotion) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.motionImgFirst > 6) {
                this.motionImgFirst = 1;
            }
            this.timeout = setTimeout(() => {
                this.motionImgFirst = newMotion + 1;
            }, 2000);
            //
            this.motionImg1(this.motionImgFirst);
            this.motionImg2(this.motionImgFirst);
            this.motionImg3(this.motionImgFirst);
            this.motionImg4(this.motionImgFirst);
            this.motionImg5(this.motionImgFirst);
            this.motionImg6(this.motionImgFirst);
        },

        immediate: true,
    },
    mounted() {
        this.motionImgFirst = this.motionImgFirst + 1;
    },
    methods: {
        motionImg1(number) {
            if (number === 1) {
                this.nameMotionImg1 = "song-img-item first";
            }
            else if (number === 6) {
                this.nameMotionImg1 = "song-img-item second";
            }
            else {
                this.nameMotionImg1 = "song-img-item third";
            }
        },
        //
        motionImg2(number) {
            if (number === 1) {
                this.nameMotionImg2 = "song-img-item second";
            }
            else if (number === 2) {
                this.nameMotionImg2 = "song-img-item first";
            }
            else {
                this.nameMotionImg2 = "song-img-item third";
            }
        },
        //
        motionImg3(number) {
            if (number === 2) {
                this.nameMotionImg3 = "song-img-item second";
            }
            else if (number === 3) {
                this.nameMotionImg3 = "song-img-item first";
            }
            else {
                this.nameMotionImg3 = "song-img-item third";
            }
        },
        //
        motionImg4(number) {
            if (number === 3) {
                this.nameMotionImg4 = "song-img-item second";
            }
            else if (number === 4) {
                this.nameMotionImg4 = "song-img-item first";
            }
            else {
                this.nameMotionImg4 = "song-img-item third";
            }
        },
        //
        motionImg5(number) {
            if (number === 4) {
                this.nameMotionImg5 = "song-img-item second";
            }
            else if (number === 5) {
                this.nameMotionImg5 = "song-img-item first";
            }
            else {
                this.nameMotionImg5 = "song-img-item third";
            }
        },
        //
        motionImg6(number) {
            if (number === 5) {
                this.nameMotionImg6 = "song-img-item second";
            }
            else if (number === 6) {
                this.nameMotionImg6 = "song-img-item first";
            }
            else {
                this.nameMotionImg6 = "song-img-item third";
            }
        }
    },
    computed: {

    },
    components: {
        MyPlayList
    }
}
</script>

<template>
    <div class="song-animate-section">
        <ul class="song-img-animate">
            <li :class="this.nameMotionImg1">
                <figure class="img-figure">
                    <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/6/a/6/56a6a853bfc5603520c3298623461467.jpg"
                        alt="" />
                </figure>
            </li>
            <li :class="this.nameMotionImg2">
                <figure class="img-figure">
                    <img src="assets/img/song2_img.jpg" alt="" />
                </figure>
            </li>
            <li :class="this.nameMotionImg3">
                <figure class="img-figure">
                    <img src="assets/img/song3_img.jpg" alt="" />
                </figure>
            </li>
            <li :class="this.nameMotionImg4">
                <figure class="img-figure">
                    <img src="assets/img/song4_img.jpg" alt="" />
                </figure>
            </li>
            <li :class="this.nameMotionImg5">
                <figure class="img-figure">
                    <img src="assets/img/song5_img.jpg" alt="" />
                </figure>
            </li>
            <li :class="this.nameMotionImg6">
                <figure class="img-figure">
                    <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/d/b/c/2/dbc2256e873048550e1410a7f65b51d2.jpg"
                        alt="" />
                </figure>
            </li>

        </ul>

        <MyPlayList />
    </div>
</template>

<style scoped>

</style>