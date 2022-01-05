function playAudio(url) {
    new Audio(url).play();
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
var element = document.getElementById("poster");
element.classList.toggle("poster-light");
}
function posterRotate() {
var element = document.getElementById("poster");
element.classList.toggle("poster-rotate");
}