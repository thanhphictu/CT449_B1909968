<script>
import { ref } from "vue";
import { useStateSongStore } from "../../../stores/StateSong";


export default {
    setup() {
        const stateSongStore = useStateSongStore();
        return {
            stateSongStore
        }
    },
    data() {
        return {

        }
    },
    methods: {
        nameSong() {
            // return "/src/assets/song/ctbmn3/song1.mp3";
        }
    }
}
</script>

<template>
    <div class="btn btn-toggle-play" :class='stateSongStore.StateSong ? "playing " : ""' @click="$emit('togglePlayer')">
        <i class="fas fa-pause icon-pause"></i>
        <i class="fas fa-play icon-play"></i>
    </div>
</template>