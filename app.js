// Tool Tip Popups enabled
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    })
})

// Navbar Expand
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) > 590) {
            $('.navbar-main').addClass('scrolled');
        } else {
            $('.navbar-main').removeClass('scrolled');
        }
    });
});

// Scroll
function scrollFunction() {
    window.scroll({
        top: 780,
        left: 0,
        behavior: 'smooth'
    });
}