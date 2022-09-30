// Code By Webdevtrick ( https://webdevtrick.com )



var swiper2 = new Swiper(".swiper-2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
    el: ".swiper-pagination",
    },
    on: {
        slideChange: function () {
        let index_currentSlide = swiper2.realIndex;
        let currentSlide = swiper2.slides[index_currentSlide]
        
        let textoPower = document.getElementById("displayer")
        let paragrafoPower = document.getElementById('displayer-paragrafo')

        if (currentSlide.id== 'hoof') {
            animateCSS('#display', 'fadeOutLeft').then(() => {
                textoPower.innerHTML = "HOOF"
                textoPower.style.color = "#CB3378"
                paragrafoPower.innerHTML = "Plataforma de adoção de animais"
                animateCSS('#display', 'fadeInLeft');
            });
            animateCSS('#hoof-logo', 'pulse');
        }
        if (currentSlide.id== "temazcal") {
            animateCSS('#display', 'fadeOutLeft').then(() => {
                textoPower.innerHTML = "Temazcal Love"
                textoPower.style.color = "#EB4B68"
                paragrafoPower.innerHTML = "Plataforma de eventos"
                animateCSS('#display', 'fadeInLeft');
            });
            animateCSS('#temazcal-logo', 'headShake');
        }
        if (currentSlide.id== "travado") {
            animateCSS('#display', 'fadeOutLeft').then(() => {
                textoPower.innerHTML = "Breve"
                textoPower.style.color = "#EB4B68"
                paragrafoPower.innerHTML = "O mais breve possivel"
                animateCSS('#display', 'fadeInLeft');
            });
            animateCSS('#travado-logo', 'headShake');
        }

        },
    },
});

