function playAudio(url) {
    new Audio(url).play();
}

function playMusic() {
    var myMusic = document.getElementById("myMusic");
    return myMusic.paused ? myMusic.play() : myMusic.pause();
}

function lightLamp() {
var element = document.getElementById("lamp");
element.classList.toggle("jaune");
} 

function lightBody() {
var element = document.getElementById("body");
element.classList.toggle("body-light");
}

function lightPoster() {
var element = document.getElementById("objects");
element.classList.toggle("light");
}

function posterRotate() {
var element = document.getElementById("poster");
element.classList.toggle("poster-rotate");
}


