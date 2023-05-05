<script>
import axios from "axios";
export default {
    data() {
        return {
            namePlaylist: "",
        }
    },
    props: ['idPlaylist'],
    methods: {
        async updatePlaylist() {
            if (this.namePlaylist !== "") {
                console.log(this.namePlaylist + "......" + this.idPlaylist);
                let formData = new FormData();
                formData.append('name', this.namePlaylist);
                formData.append('imageURL', "http://localhost:8787/api/playlist-default-img");
                try {
                    let response = await axios.put('http://localhost:8787/api/playlist/update/' + this.idPlaylist, formData, {
                        headers: { "Content-Type": "application/json" },
                    });
                    if (response.data.success === 1) {
                        this.$router.go(this.$router.currentRoute);
                    }
                } catch (e) {
                    console.log(e);
                }
            }

        },
    }
}
</script>
<template>
    <div class="portal-modal">
        <div class="playlist-modal pm-is-active">
            <div class="modal-background">
                <div class="modal-content">
                    <div class="form-playlist-content">
                        <button class="playlist-btn zm-tooltip-btn close-btn is-hover-circle button" tabindex="0"
                            @click="$emit('closeEditPlaylist')">
                            <i class="fal fa-times"></i>
                        </button>
                        <h3 class="title">Chỉnh sửa playlist</h3>

                        <input class="input" placeholder="Nhập tên playlist" value="" name="name"
                            @change="(e) => { this.namePlaylist = e.target.value }">
                        <div class="mt-20"></div>

                        <button class="playlist-btn mar-t-20 is-outlined active is-fullwidth is-upper button" tabindex="-1"
                            @click="updatePlaylist">
                            <i class="icon"></i>
                            <span>Cập nhật</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.portal-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1080;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.portal-modal .modal-content {
    background-color: #333;
    border-radius: 8px;
    max-height: 100%;
}

.form-playlist-content {
    width: 290px;
    text-align: center;
    margin: 20px;
}

.form-playlist-content .close-btn {
    position: absolute;
    right: 10px;
    top: 10px
}

.zm-tooltip-btn i {
    font-size: 24px;
    padding: 5px;
    border-radius: 50%;
    color: #fff;
}

.playlist-btn {
    font-size: 14px;
    border-radius: 999px;
    line-height: normal;
    border: 0;
    display: inline-block;
    font-weight: 400;
    text-transform: none;
    text-align: center;
    cursor: pointer;
    position: relative;
}

.form-playlist-content .title {
    text-transform: none;
    font-size: 18px;
    margin-bottom: 10px
}

.form-playlist-content .input {
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    background-color: hsla(0, 0%, 100%, 0.1);
    padding: 0 15px;
    font-size: 14px;
    outline: none;
    color: #fff;
}

.playlist-btn.is-outlined.active {
    background-color: #9b4de0;
    border-color: #9b4de0;
    color: #fff;
}

.playlist-btn.is-outlined {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    background-color: var(--alpha-bg);
    border: 1px solid var(--border-primary);
    color: var(--text-primary);
    margin: 0 auto;
}

.playlist-btn.is-fullwidth {
    padding: 8px 0;
}

.playlist-btn[disabled] {
    box-shadow: none;
    opacity: .5;
    cursor: not-allowed;
}

.is-fullwidth {
    width: 100%;
}

.mar-t-20 {
    margin-top: 20px !important;
}

.playlist-btn {
    font-size: 14px;
    border-radius: 999px;
    line-height: normal;
    border: 0;
    display: inline-block;
    font-weight: 400;
    text-transform: none;
    text-align: center;
    cursor: pointer;
    position: relative;
}
</style>