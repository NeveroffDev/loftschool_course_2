(function () {
    const video = document.querySelector('#videoplayer');
    const videoProgress = document.querySelector('#videoprogress');
    const videoProgressPicker = document.querySelector('#videoprogressPicker');
    const audioProgress = document.querySelector('#audioprogress');
    const audioProgressPicker = document.querySelector('#audioprogressPicker');
    const playButton = document.querySelector('#videoplay');
    const sound = document.querySelector('#videosound');
    const activeClass = 'player__active';

    audioProgress.addEventListener('click', e => {
        const position = e.offsetX / audioProgress.offsetWidth;
        audioProgressPicker.style.left = (position * 95) + '%';
        video.volume = position;
    });

    videoProgress.addEventListener('click', e => {
        const position = e.offsetX / videoProgress.offsetWidth;
        const scrubTime = position * video.duration;
        videoProgressPicker.style.left = (position * 99) + '%';
        video.currentTime = scrubTime;
    });


    video.addEventListener('timeupdate', e => {
        let position = video.currentTime/ video.duration;
        videoProgressPicker.style.left = (position * 99) + '%';
        if(position === 1){
            playButton.classList.remove(activeClass);
        }
    });
    video.addEventListener('click', togglePlayPause);

    playButton.addEventListener('click', function (e) {
        e.preventDefault();
        togglePlayPause();
    });

    sound.addEventListener('click', function (e) {
        e.preventDefault();
        if(video.muted){
            video.muted = false;
            sound.classList.remove(activeClass);
            audioProgressPicker.style.left = '95%';
            video.volume = 1;

        }else{
            video.muted = true;
            sound.classList.add(activeClass);
            audioProgressPicker.style.left = 0;
        }
    });

    function togglePlayPause() {
        if (video.paused) {
            playButton.classList.add(activeClass);
            video.play();
        } else {
            playButton.classList.remove(activeClass);
            video.pause();
        }

    }

})();