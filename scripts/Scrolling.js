var viewportHeight = 0;

$(window).on('resize', function () {
    updateViewportHeight();
});
function updateViewportHeight() {
    let height = $(window).height();
    viewportHeight = height;
    $("body").get(0).style.setProperty("--vh", (height / 100) + "px");
}
updateViewportHeight();

document.body.addEventListener('keydown', closeScrollCta);
document.body.addEventListener('click', closeScrollCta);
document.body.addEventListener('touchstart', closeScrollCta);

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function closeScrollCta() {
    document.getElementById("scroll-cta").setAttribute("style", "display: none;")
    setTimeout(() => { document.getElementById("music-cta").setAttribute("style", "display: none;") }, 1500);
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


$("#section-wrap").scroll(function () {
    closeScrollCta();
    let scrollPos = document.getElementById("section-wrap").scrollTop;
    let vh = viewportHeight;

    let screenCenter = scrollPos + 0.5 * vh;

    var sections = document.getElementsByClassName("section");
    let i = 0;
    for (let section of sections) {
        if (!$(section).isInViewport()) {
            continue;
        }
        i++;
        var rect = section.getBoundingClientRect();
        let divCenter = scrollPos + (rect.bottom + rect.top) / 2;
        let videoWrapper = section.getElementsByClassName("video-wrapper")[0];
        let calculatedTransform = 0;
        calculatedTransform = (screenCenter - divCenter) / 2.2;
        videoWrapper.setAttribute("style", "transform: translate3d(0px," + calculatedTransform + "px, 0px);");
    }
})