var songs = ["je-veux.m4a", "tout-le-monde.m4a", "la-quete.m4a", "vie-en-rose.m4a"];
var remainingSongs = ["tout-le-monde.m4a"];
var audio = document.getElementById("sound");

audio.volume = 0.5;

var pickSong = function () {
    if (!remainingSongs.length) {
        remainingSongs = songs;
    }

    var index = Math.floor(Math.random() * (remainingSongs.length - 1));

    var soundFile = remainingSongs[index];

    remainingSongs.splice(index, 1);

    audio.setAttribute("src", "resources/audio/" + soundFile);
}

pickSong();
audio.addEventListener("ended", pickSong, false);


document.getElementById("music-button").addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        startAnimation();
    } else {
        endAnimation();
    }
});