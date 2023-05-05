<script>
import axios from "axios";
export default {
    data() {
        return {
            namePlaylist: "",
            codePlaylist: "",
        }
    },
    methods: {
        async addPlaylist() {
            if (this.namePlaylist !== "" && this.codePlaylist !== "") {
                let formData = new FormData();
                formData.append('name', this.namePlaylist);
                formData.append('code', this.codePlaylist);
                formData.append('imageURL', "http://localhost:8787/api/playlist-default-img");
                try {
                    let response = await axios.post('http://localhost:8787/api/playlist/addone', formData, {
                        headers: { "Content-Type": "application/json" },
                    });
                    alert("tao thanh cong");
                    this.$emit('closeCreatePlaylist');
                    if (response.data && response.data === "item saved to database") {
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
                            @click="$emit('closeCreatePlaylist')">
                            <i class="fal fa-times"></i>
                        </button>
                        <h3 class="title">Tạo playlist mới</h3>


                        <input class="input" placeholder="Nhập tên playlist" value="" name="name"
                            @change="(e) => { this.namePlaylist = e.target.value }">
                        <div class="mt-20"></div>
                        <input class="input" placeholder="Nhập mã playlist" value="" name="code"
                            @change="(e) => { this.codePlaylist = e.target.value }">
                        <button class="playlist-btn mar-t-20 is-outlined active is-fullwidth is-upper button" tabindex="-1"
                            @click="addPlaylist">
                            <i class="icon"></i>
                            <span>Tạo mới</span>
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