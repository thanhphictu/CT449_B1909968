import { defineStore } from 'pinia'

export const useStateSongStore = defineStore('StateSong', {
    state: () => {
        return { StateSong: false }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setStateSong(state) {
            this.StateSong = state;
        },
    },
})