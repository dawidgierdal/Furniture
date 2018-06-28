var getArt = document.querySelector(".main-art-ele");
var getBox = document.querySelector(".main-art-art");

var getArtSec = document.querySelector(".main-art-ele-sec");
var getBoxSec = document.querySelector(".main-art-art-sec");

getArt.addEventListener("mouseover", function () {
    getBox.style.visibility="hidden"
});
getArt.addEventListener("mouseout", function () {
    getBox.style.visibility="visible"
});

getArtSec.addEventListener("mouseover", function () {
    getBoxSec.style.visibility="hidden"
});
getArtSec.addEventListener("mouseout", function () {
    getBoxSec.style.visibility="visible"
});

