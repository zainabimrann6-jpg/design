let swiper = new Swiper(".mySwiper", {

    watchSlidesProgress: true,

    loop: true,

    slidesPerView: 4,

    centeredSlides: true,

    autoplay: {
        delay: 700,
    }

});


AOS.init();



const swiperPhotos = new Swiper(".mySwiperPhotos", {

    pagination: {
        el: ".swiper-pagination",
    },

    watchSlidesProgress: true,

    loop: true,

    slidesPerView: 1,

    centeredSlides: true,

    autoplay: {
        delay: 4000,
    }

});



let mySwiperText = new Swiper(".mySwiperText", {

    pagination: {
        el: ".pagination-container",
        clickable: true,
    },

    spaceBetween: 30,

    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    watchSlidesProgress: true,

    slidesPerView: 1,

    centeredSlides: true,

    autoplay: {
        delay: 4000,
    }

});



function subscribe() {

    const email = document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email address.");

        return;

    }

    alert("Thank you for subscribing!");

}