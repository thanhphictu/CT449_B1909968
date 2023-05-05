<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from 'axios';

export default {
    data() {
        return {
            playlist: []
        }
    },
    mounted() {
        this.loadPlaylist();
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    methods: {
        async loadPlaylist() {
            try {
                let response = await axios.get('http://localhost:8787' + '/api/playlist')
                this.playlist = response.data.data

            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<template>
    <div class="playlist-section_carousel">
        <carousel class="carousel" :items-to-show="5">
            <slide v-for="item in playlist" :key="item._id">
                <router-link :to="{ path: '/playlistpage/' + item.code }">
                    <div class="item">
                        <div class="image_music">
                            <figure>
                                <img class="listened" :src="item.imageURL" :alt="item.name" />
                            </figure>
                            <div class="overlay_image_music">
                                <div class="overlay__heart">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="overlay__play">

                                    <i class="fas fa-play icon-play"></i>

                                </div>
                                <div class="overlay__more">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <div class="title_music">
                            <div>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="name_singer_music">
                            <div class='info-name-singer'>
                                <span class="name-singer-content">
                                    {artist},
                                </span>
                                <span class="name-singer-content">
                                    {artist},
                                </span>
                                <span class="name-singer-content">
                                    {artist},
                                </span>

                            </div>
                        </div>
                    </div>
                </router-link>

            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>

    </div>
</template>