$(function () {

    /* Video player */

    $('.popup-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /* Callery slider */

    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg"alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg"alt=""></button>',
    });

    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

    /* Menu btn */

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

    /* Themes */

    document.querySelector('.themes').addEventListener('change', (event) => {
        if (event.target.nodeName === "INPUT") {
            console.log('Hello!');
            document.documentElement.classList.remove('dark', 'light');
            document.documentElement.classList.add(event.target.value);
        }
    });

    /* Submit request */

    const formEl = document.querySelector("#booking__form");
    const emailModal = document.querySelector("#modal__email");
    const successModal = document.querySelector("#success__modal");

    formEl.addEventListener('submit', function (event) {
        event.preventDefault();

        emailModal.classList.add("modal__active");
    });

    const closeButtons = document.querySelectorAll(".modal__close-btn");

    closeButtons.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            emailModal.classList.remove("modal__active");
            successModal.classList.remove("modal__active");
        });
    });

    const modalEmailContainer = document.querySelector("#modal__email-container");

    modalEmailContainer.addEventListener('submit', function (event) {
        event.preventDefault();

        const userEmailInput = document.querySelector("#user__email");

        if (userEmailInput.value) {
            emailModal.classList.remove("modal__active");
            successModal.classList.add("modal__active");
        }
        const inputContainer = document.querySelector("#email__input-container");
        inputContainer.classList.add("email__input-container-error");

    });

});