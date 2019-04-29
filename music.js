var artistName = document.querySelector("#artistName");
var musicName = document.querySelector("#musicName");
var playMusic = document.querySelector("#playBtn");
var pauseMusic = document.querySelector("#pauseBtn")
var myMusic = document.querySelector("#myMusic");

playMusic.addEventListener("click", function(){
    myMusic.play();
    pauseMusic.style.display = "inline";
    playMusic.style.display = "none";
});
pauseMusic.addEventListener("click", function(){
    myMusic.pause();
    pauseMusic.style.display = "none";
    playMusic.style.display = "inline";
});

// function checkVis() {
//   if (myMusic.play()) {
//     pauseMusic.style.display === "none";
//   }
// }