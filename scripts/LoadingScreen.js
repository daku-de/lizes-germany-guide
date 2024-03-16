// document.fonts.ready.then(() => {
//     document.getElementById("loading-label").setAttribute("style", "display: block");
// })


let loading = true;

let dots = 0;
let up = true;
const dotInterval = setInterval(() => {
    const label = document.getElementById("dots");
    if (up) {
        dots += 1;
        if (dots == 3) up = false;
    } else {
        dots -= 1;
        if (dots == 0) up = true;
    }
    label.innerHTML = ".".repeat(dots);
}, 500);



function closeLoader() {
    document.getElementById("loading-overlay").classList.add("hidden");
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
    clearInterval(dotInterval);
    setTimeout(() => {

        let headerAnimY = 100;

        let headerAnimInterval = setInterval(() => {
            if (headerAnimY > 0) {
                headerAnimY -= 5;
                document.getElementById("main-logo").setAttribute("style", "display: flex; transform: translateY(" + Math.round(headerAnimY / 7) + "px); opacity: " + (100 - headerAnimY) / 100)
                document.getElementById("music-button").setAttribute("style", "display: flex; transform: translateY(" + Math.round(headerAnimY / 7) + "px); opacity: " + (100 - headerAnimY) / 100)
                document.getElementById("music-cta").setAttribute("style", "display: flex; transform: translateY(" + Math.round(headerAnimY / 7) + "px); opacity: " + (100 - headerAnimY) / 100)
            } else {
                document.getElementById("main-logo").setAttribute("style", "display: flex; transform: translateY(0px);")
                document.getElementById("music-button").setAttribute("style", "display: flex; transform: translateY(0px);")
                document.getElementById("music-cta").setAttribute("style", "display: flex; transform: translateY(0px);")
                clearInterval(headerAnimInterval);
            }
        }, 15);

    }, 1300);

    setTimeout(() => {
        let headerAnimY = 100;

        let headerAnimInterval = setInterval(() => {
            if (headerAnimY > 0) {
                headerAnimY -= 5;
                document.getElementById("travel-info-button").setAttribute("style", "display: flex; transform: translateY(" + Math.round(headerAnimY / 7) + "px); opacity: " + (100 - headerAnimY) / 100)
                document.getElementById("developed-by").setAttribute("style", "display: flex; transform: translateY(" + Math.round(headerAnimY / 7) + "px); opacity: " + (100 - headerAnimY) / 100)
            } else {
                document.getElementById("travel-info-button").setAttribute("style", "display: flex; transform: translateY(0px);")
                document.getElementById("developed-by").setAttribute("style", "display: flex; transform: translateY(0px);")
                clearInterval(headerAnimInterval);
            }
        }, 15);
    }, 1400);
}