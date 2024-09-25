const player = document.querySelector('video');
const title = document.querySelector('.index-banner');
const playButton = document.querySelector('.play-button');
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');


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

//function burgerChecked() {
       // burgerMenu.style.left = '0px';//
//} //

player.addEventListener("play", playing);
player.addEventListener("pause", paused);
playButton.addEventListener('click', playVideo);
//burgerButton.addEventListener('click', toggleBurgerMenu); //