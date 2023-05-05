<script>
import { useSongs } from "../../stores/Songs";
export default {
    setup() {
        const SongsReducerParam = useSongs();

        const clickSong = (index) => {
            SongsReducerParam.setCurrentPlaylist(SongsReducerParam.myplaylist);
            SongsReducerParam.setIndexSong(index);
            SongsReducerParam.setSongCurrentUri(SongsReducerParam.myplaylist[index].songUrl);
        }

        return {
            SongsReducerParam,
            clickSong,
        }
    },
    data() {
        return {
            image: "https://avatar-ex-swe.nixcdn.com/song/2022/09/14/4/b/b/7/1663131041716_640.jpg"
        }
    }
}
</script>

<template>
    <div class="song-playlist">
        <div class="song-playlist--css-1">
            <div class="song-playlist--css-2">
                <div class="list-border">
                    <div class="playlist-song">
                        <div class="playlist">

                            <div v-for="(item, index) in SongsReducerParam.myplaylist"
                                :class="[index === SongsReducerParam.IndexSongPlaying ? 'song active' : 'song']"
                                @click="clickSong(index)">
                                <div class="thumb" v-bind:style="{ 'background-image': 'url(' + item.imageUrl + ')' }">
                                </div>
                                <div class="body">
                                    <div class="name">
                                        <div class="title">
                                            {{ item.name }}
                                        </div>
                                        <div class="list-songs--info--artist">

                                            <span class="list-songs--info--name-artist">
                                                {{ item.artist }}
                                            </span>

                                        </div>
                                    </div>
                                    <div class="timeSong">{{ item.duration }}</div>
                                </div>
                                <div class="option">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>