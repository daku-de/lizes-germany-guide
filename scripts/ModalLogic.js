const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalElements = document.querySelectorAll("[data-close-modal]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

closeModalElements.forEach((element) => {
    element.addEventListener("click", () => {closeModal();})
})

function openModal(modal) {
    if (modal==null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove("active");
    const modals = document.querySelectorAll(".modal");
    

    $('.active-indicator').css("left", "50%");
    $(".blue").css("left", "-100%");
    $(".yellow").css("right", "-100%");
    document.getElementsByTagName('body')[0].style.overflow = 'visible';

    console.log(modals)
    modals.forEach(modal => {modal.classList.remove("active")});
}



$(document).ready(function () {
        var active = $('.active-indicator'),
            firstTab = $('.tab:nth-child(1)'),
            secondTab = $('.tab:nth-child(2)'),
            thirdTab = $('.tab:nth-child(3)'),
            yellowBg = $(".yellow"),
            blueBg = $(".blue");

        firstTab.on('click', function () {
            active.animate({
                left: '16.66667%'
            });
            blueBg.animate({
                left: '0'
            });
            yellowBg.animate({
                right: '-100%'
            });
        });

        secondTab.on('click', function () {
            active.animate({
                left: "50%"
            });
            blueBg.animate({
                left: "-100%"
            });
            yellowBg.animate({
                right: "-100%"
            });
        });

        thirdTab.on('click', function () {
            active.animate({
                left: "83.33333%"
            });
            blueBg.animate({
                left: "-100%"
            });
            yellowBg.animate({
                right: "0"
            });
        });
    });