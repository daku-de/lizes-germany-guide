window.addEventListener('scroll', closeScrollCta);
document.body.addEventListener('keydown', closeScrollCta);
document.body.addEventListener('click', closeScrollCta);
document.body.addEventListener('touchstart', closeScrollCta);

function closeScrollCta() {
    document.getElementById("scroll-cta").setAttribute("style", "display: none;")
    setTimeout(() => {document.getElementById("music-cta").setAttribute("style", "display: none;")}, 1500);
}

window.onload = () => {
    window.history.scrollRestoration = 'manual';
};

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

SmoothScroll({
    frameRate: 150,
    animationTime: 1000,
    stepSize: 60,
    pulseAlgorithm: 1,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: 1,
    arrowScroll: 50,
    fixedBackground: 0
});


// setInterval(() => {
//     let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
//     let vh = $(window).height();

//     let screenCenter = scrollPos + 0.5 * vh;

//     var sections = document.getElementsByClassName("section");
//     let i = 0;
//     for (let section of sections) {
//         i++;
//         var rect = section.getBoundingClientRect();
//         let divCenter = scrollPos + (rect.bottom + rect.top) / 2;
//         let videoWrapper = section.getElementsByClassName("video-wrapper")[0];
//         let calculatedTransform = 0;
//         calculatedTransform = (screenCenter - divCenter) / 1.8;
//         videoWrapper.setAttribute("style", "transform: translateY(" + calculatedTransform + "px);");
//     }

// }, 1);

$(document).scroll(function () {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    let vh = $(window).height();

    let screenCenter = scrollPos + 0.5 * vh;

    var sections = document.getElementsByClassName("section");
    let i = 0;
    for (let section of sections) {
        i++;
        var rect = section.getBoundingClientRect();
        let divCenter = scrollPos + (rect.bottom + rect.top) / 2;
        let videoWrapper = section.getElementsByClassName("video-wrapper")[0];
        let calculatedTransform = 0;
        calculatedTransform = (screenCenter - divCenter) / 1.8;
        videoWrapper.setAttribute("style", "transform: translateY(" + calculatedTransform + "px);");
    }
})

function calculateScroll() {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(-" + scrollPos + "px);");
    return
    // const transformArray = $("#smooth-scroll-wrapper").css("transform").split(",");
    // let transformY = transformArray[transformArray.length-1].replace(")", "");
    // if (transformY == "none") {
    //     transformY = 0;
    // } else {
    //     transformY = Number(transformY);
    // }

    // const difference = Math.abs(scrollPos + transformY);


    // if (isTouchDevice()) {
    //     if (Math.abs(scrollPos + transformY) <= 10) {
    //         document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(-" + scrollPos + "px);");
    //     } else if ((scrollPos + transformY) > 0) {
    //         document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY - 10) + "px);");
    //     } else if ((scrollPos + transformY) < 0) {
    //         document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY + 10) + "px);");
    //     }

    // } else {
    //     if (Math.abs(scrollPos + transformY) <= 2) {
    //         document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(-" + scrollPos + "px);");
    //     } else if ((scrollPos + transformY) >= 0) {
    //         if ((scrollPos + transformY) >= 400) {
    //             window.scrollTo(0, 400 - transformY);
    //         }
    //         if ((scrollPos + transformY) >= 100) {
    //             document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY - 10) + "px);");
    //         } else {
    //             document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY - Math.log(1+ ((scrollPos + transformY)/100) * (Math.E-1)) * 5)+ "px);");
    //         }
    //     } else if ((scrollPos + transformY) < -0) {
    //         if ((scrollPos + transformY) <= -400) {
    //             window.scrollTo(0, -400 - transformY);
    //         }
    //         if ((scrollPos + transformY) <= -100) {
    //             document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY + 10) + "px);");
    //         } else {
    //             document.getElementById("smooth-scroll-wrapper").setAttribute("style", "transform: " + "translateY(" + (transformY + Math.log(1+ ((-scrollPos - transformY)/100) * (Math.E-1)) * 5) + "px);");
    //         }
    //     }

    // }
}