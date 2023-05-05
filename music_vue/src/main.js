import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import "./assets/base.css";
import './assets/main.css';
import { createRouter, createWebHashHistory } from 'vue-router';

// createApp(App).mount('#app')

import HomePage from "./components/Playlist/HomePage.vue";
import MyMusic from "./components/MyMusic/MyMusic.vue";
import OverviewMM from "./components/MyMusic/OverviewMM.vue";
import MyPlayList from "./components/MyMusic/MyPlayList.vue";
import Playlist from "./components/MyMusic/Playlist.vue";
import Artist from "./components/MyMusic/Artist.vue";
import MV from "./components/MyMusic/MV.vue";
import Album from "./components/MyMusic/Album.vue";
import Upload from "./components/MyMusic/Upload.vue";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage.vue";
import PlaylistCom from "./components/PlaylistPage/PlaylistCom.vue";


const routes = [
    {
        path: '/playlistpage/:code', name: 'playlistcom', component: PlaylistCom,
        children: [
            { path: '', name: 'playlistpage', component: PlaylistPage }
        ]
    },
    {
        path: '/mymusic', name: 'mymusic', component: MyMusic,
        children: [
            { path: '', name: 'OverviewMM', component: OverviewMM },
            {
                path: 'libary',
                children: [
                    { path: 'song', name: 'libary', component: MyPlayList },
                    { path: 'playlist', name: 'playlist', component: Playlist },
                    { path: 'artist', name: 'artist', component: Artist },
                    { path: 'mv', name: 'mv', component: MV },
                    { path: 'album', name: 'album', component: Album },
                    { path: 'upload', name: 'upload', component: Upload },


                ]
            }
        ]
    },
    { path: '/', name: 'HomePage', component: HomePage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)


app.mount('#app')