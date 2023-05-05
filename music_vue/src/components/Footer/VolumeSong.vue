<script>
</script>
<template>
    <div class="player-controll-right">
        <div class="mv-right tooltip--color" data-tip="MV" data-effect="solid" data-offset="{'top' : 2}">
            <ReactTooltip />
            <i class="fas fa-tv"></i>
        </div>
        <div class="lyric-right tooltip--color" data-tip="Lyrics" data-effect="solid" data-offset="{'top' : 2}">
            <ReactTooltip />
            <i class="fas fa-microphone"></i>
        </div>
        <div class="volume-right">
            <div class="volume-icon" onClick={onClickMute}>
                <i className={setIconVolume}></i>

            </div>
            <div class="volume-progress">
                <div class="music-progress">
                    <div class="item-progress">
                        <input id="progress_volume" class="progress-input_volume" type="range" defaultValue="0"
                            step="1" min="0" max="100" />
                        <div id="progress-bs4_volume" class="progress_volume">
                            <div class="progress-bar_volume" id="progress-bar_volume" role="progressbar"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={widthVolumeProgress}>
                                <i class="fas fa-circle" id="circle-progress_volume"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="devide-nav">
            <span class="devide"></span>
        </div>
        <div class="playlist-right-song tooltip--color" data-tip="Playlist" data-effect="solid"
            data-offset="{'top' : 0}">
            <ReactTooltip />
            <i class="fas fa-list-ul"></i>
        </div>
    </div>
</template>