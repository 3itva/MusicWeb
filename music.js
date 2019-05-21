var artistName = document.querySelector("#artistName");
var musicName = document.querySelector("#musicName");
var playMusic = document.querySelector("#playBtn");
var pauseMusic = document.querySelector("#pauseBtn")
var myMusic = document.querySelector("#myMusic");

/* Event Listener! */
playMusic.addEventListener("click", playfunc);
pauseMusic.addEventListener("click", pausefunc);




/* Functions begining! */
function playfunc() {
	myMusic.play();
	pauseMusic.style.display = "inline";
    playMusic.style.display = "none";
}
function pausefunc() {
	myMusic.pause();
	pauseMusic.style.display = "none";
    playMusic.style.display = "inline";
}
// function checkVis() {
//   if (myMusic.play()) {
//     pauseMusic.style.display === "none";
//   }
// }