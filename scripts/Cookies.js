const cookie = document.cookie;
if (cookie.includes("musicPlayed")) {
    document.getElementById("music-cta").remove();
}

document.getElementById("music-button").addEventListener("click", () => {
    var expires = (new Date(Date.now()+ 86400*1000*365)).toUTCString();
    document.cookie = "musicPlayed=0; expires=" + expires + ";path=/;"
    document.getElementById("music-cta").setAttribute("style", "display: none;");
});