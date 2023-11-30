// enabling bootsratp tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOutDown',
        animateIn: 'flipInX'
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 1
        //     },
        //     1000: {
        //         items: 1
        //     }
        // }
    })
})