const player = document.querySelector('video');
const title = document.querySelector('.index-banner');
const playButton = document.querySelector('.play-button');


function playing() {
        player.style.visibility = 'visible';
        title.style.visibility = 'hidden';
}

function paused() {
        title.style.visibility = 'visible';
        player.style.visibility = 'hidden';
}

function playVideo() {
    player.play();
    
}


player.addEventListener("play", playing);
player.addEventListener("pause", paused)
playButton.addEventListener('click', playVideo)