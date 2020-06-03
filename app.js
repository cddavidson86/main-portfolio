// Tool Tip Popups enabled
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    })
})

// Navbar Expand
let workCard = $("#work-cards").position().top;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) > workCard) {
        $('.navbar-main').addClass('scrolled');
    } else {
        $('.navbar-main').removeClass('scrolled');
    }
});


// Anime Timeline for grid
let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

var windowSize = $(window).width();
$(window).resize(function () {
    windowSize = $(window).width();
    workCard = $("#work-cards").position().top;
    console.log(windowSize);
    console.log(workCard);
});

// Function for grid to make responsive
function timeLineGrid(percentWidth, paddingW) {
    tl.add({
        targets: '.anime-grid',
        width: '80%',
        backgroundColor: '#191919',
        delay: anime.stagger(100, { start: 0 }) // increase delay by 100ms for each elements.
    })
        .add({
            targets: '.anime-grid',
            width: '90%',
            backgroundColor: '#157FFB',
            delay: anime.stagger(100, { from: 'center' })
        })
        .add({
            targets: '.anime-grid',
            backgroundColor: '#191919',
            width: '103%',
            delay: anime.stagger(100, { start: 300 })
        })
        .add({
            targets: ['.first-name', '.last-name'],
            color: '#F0F0F0',
            delay: anime.stagger(30),
            duration: 500
        })
        .add({
            targets: ['.first-name-div', '.last-name-div'],
            marginLeft: paddingW + '%',
            width: percentWidth + '%',
            flex: 'none',
            delay: anime.stagger(30),
            easing: 'easeOutSine',
            duration: 250
        })
        .add({
            targets: ['.first-name', '.last-name'],
            delay: anime.stagger(30),
            easing: 'easeOutSine',
            duration: 250
        })
        .add({
            targets: '.anime-dev-box',
            opacity: 1,
            easing: 'easeOutSine',
            duration: 3000
        })
}

// Responzive Grid animation functions using window size

if (windowSize < 321) {
    timeLineGrid(80, 5);
} else if (windowSize >= 321 && windowSize < 400) {
    timeLineGrid(70, 12);
} else if (windowSize >= 400 && windowSize < 700) {
    timeLineGrid(70, 8);
} else if (windowSize >= 700 && windowSize < 900) {
    timeLineGrid(60, 8);
} else if (windowSize >= 900 && windowSize < 1100) {
    timeLineGrid(65, 6);
} else if (windowSize >= 1100) {
    timeLineGrid(35, 3);
}


// Grid scroll anime
var gridScrollUp = false;
$(window).on('scroll', function () {
    // Ride Up
    if (Math.round($(window).scrollTop()) >= 250 && gridScrollUp == false) {
        anime({
            targets: '.intro-section',
            scaleY: '1',
            scaleX: '1',
            translateY: '-70%',
            rotateZ: '45deg',
            duration: 6000,
            backgroundColor: [
                { value: '#ffffff', duration: 2000 },
            ]
        });
        gridScrollUp = true;
        anime({
            targets: '.anime-grid',
            width: '80%',
            easing: 'linear',
            duration: 1000
        })
        anime({
            targets: '.first-name-div',
            translateX: '-1400',
            delay: anime.stagger(30),
            easing: 'linear',
            duration: 250
        })
        anime({
            targets: '.last-name-div',
            translateX: '-1400',
            delay: anime.stagger(30),
            easing: 'linear',
            duration: 250
        })
        // Ride Down
    } else if (Math.round($(window).scrollTop()) < 10 && gridScrollUp == true) {
        anime({
            targets: '.intro-section',
            scaleY: '1',
            scaleX: '1',
            translateY: '0',
            rotateZ: '0deg',
            duration: 4000,
            backgroundColor: [
                { value: '#191919', delay: 1800 },
            ],
        })
        gridScrollUp = false;
        anime({
            targets: '.anime-grid',
            width: '101%',
            delay: '2000'
        })
        anime({
            targets: '.first-name-div',
            translateX: function (el, i, l) { return i * -115 },
            delay: anime.stagger(30),
            easing: 'linear',
            delay: '2000',
            duration: 500
        })
        anime({
            targets: '.last-name-div',
            translateX: function (el, i, l) { return i * -120 },
            delay: anime.stagger(30),
            easing: 'linear',
            delay: '2000',
            duration: 500
        })
    }
});


// Card Ease In

// Card var for animations
var easeDuration = 1000;
var descFade = 1000;

// Cater Card

var caterCard = false;
var caterScroll = 900;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) >= caterScroll && caterCard == false) {
        anime({
            targets: '#cater2me-card',
            translateX: '12.5%',
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#cater2me-card .wrk-txt-fade',
            opacity: 1,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade

        });
        caterCard = true;
    } else if (Math.round($(window).scrollTop()) <= caterScroll && caterCard == true) {
        anime({
            targets: '#cater2me-card',
            translateX: '-12.5%',
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#cater2me-card .wrk-txt-fade',
            opacity: 0,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade
        });
        caterCard = false;
    }
});

// Cine Card
var cineCard = false;
var cineScroll = 1400;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) >= cineScroll && cineCard == false) {
        anime({
            targets: '#cine-card',
            translateX: '-12.5%',
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#cine-card .wrk-txt-fade',
            opacity: 1,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade

        });
        cineCard = true;
    } else if (Math.round($(window).scrollTop()) <= cineScroll && cineCard == true) {
        anime({
            targets: '#cine-card',
            translateX: '12.5%',
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#cine-card .wrk-txt-fade',
            opacity: 0,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade
        });
        cineCard = false;
    }
});

// Book Card
var bookCard = false;
var bookScroll = 1900;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) >= bookScroll && bookCard == false) {
        anime({
            targets: '#book-card',
            translateX: '12.5%',
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#book-card .wrk-txt-fade',
            opacity: 1,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade
        });
        bookCard = true;
    } else if (Math.round($(window).scrollTop()) <= bookScroll && bookCard == true) {
        anime({
            targets: '#book-card',
            translateX: '-12.5%',
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: easeDuration
        });
        anime({
            targets: '#book-card .wrk-txt-fade',
            opacity: 0,
            delay: 1000,
            easing: 'easeInOutQuad',
            duration: descFade
        });
        bookCard = false;
    }
});

// Card Hover Animation

$(".hover-on").mouseover(function () {
    anime({
        targets: '#anime-blocks > div',
        translateX: [
            { value: 250, duration: 1000, delay: 500 },
            { value: 0, duration: 1000, delay: 500 }
        ],
        translateY: [
            { value: -40, duration: 500 },
            { value: 40, duration: 500, delay: 1000 },
            { value: 0, duration: 500, delay: 1000 }
        ],
        scaleX: [
            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900 },
            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900 }
        ],
        scaleY: [
            { value: [1.75, 1], duration: 500 },
            { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            { value: 1, duration: 450 },
            { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            { value: 1, duration: 450 }
        ],
        easing: 'easeOutElastic(1, .8)',

        loop: true
    });
});
// $(".hover-on").mouseout(function () {
//     anime({
//         targets: '#anime-blocks > div',
//         // height: '80%',
//         translateX: '0',
//         translateY: '0',
//         rotateZ: '0deg',
//         easing: 'easeInOutQuad',
//         duration: '500',
//     });
// });

// Icon Animation 
var iconTrigger = false;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) > 2300 && iconTrigger == false) {
        anime({
            targets: '.icon-anime',
            translateX: 1200,
            translateY: -1200,
            easing: 'easeInOutQuad',
            delay: anime.stagger(100),
        });
        iconTrigger = true;
    }
});

// Icon Animation 
var footerFade = false;
$(window).on('scroll', function () {
    if (Math.round($(window).scrollTop()) > 2900 && footerFade == false) {
        anime({
            targets: '#info-icons',
            opacity: 1,
            duration: '1500',
            easing: 'easeInOutQuad'
        });
        footerFade = true;
    }
});

// Icon color change 
$(function () {
    $('#icon-1').hover(function () {
        $('#icon-1 i').css('color', '#F0F0F0');
    }, function () {
        // on mouseout, reset the background colour
        $('#icon-1 i').css('color', '#7e7e7e');
    });
});
$(function () {
    $('#icon-2').hover(function () {
        $('#icon-2 i').css('color', '#F0F0F0');
    }, function () {
        // on mouseout, reset the background colour
        $('#icon-2 i').css('color', '#7e7e7e');
    });
});
$(function () {
    $('#icon-3').hover(function () {
        $('#icon-3 i').css('color', '#F0F0F0');
    }, function () {
        // on mouseout, reset the background colour
        $('#icon-3 i').css('color', '#7e7e7e');
    });
});





// Intro Animation
// let tl = anime.timeline({
//     easing: 'easeInOutQuad',
// })
// tl.add({
//     targets: '.anime-intro-div',
//     scale: [
//         { value: .1, easing: 'easeOutSine', duration: 300 },
//         { value: 1, easing: 'easeInOutQuad', duration: 900 }
//     ],
//     delay: anime.stagger(100, { grid: [14, 5], from: 'center' })
// })
//     .add({
//         backgroundColor: 'rgb(197, 197, 255)',
//         scale: .2,
//         borderRadius: 50,
//         targets: '.anime-intro-div',
//         translateX: [{ value: -200, duration: 300 }],
//         rotateZ: [0, 360],
//         delay: anime.stagger(20),
//         easing: 'easeInOutSine'
//     })
//     .add({
//         targets: '.anime-intro-div',
//         translateY: [{ value: -3500, duration: 300 }],
//         delay: anime.stagger(20),
//         easing: 'easeInOutSine'
//     })
//     .add({
//         targets: '.title-anime',
//         keyframes: [
//             { translateY: 1500, duration: 1000 },
//             { translateY: 1600, duration: 500 },
//         ],
//         rotate: [360, 0],
//         easing: 'easeOutElastic(3, 3)',
//         delay: function (el, i, l) { return i * 1000 }
//     })


// $(window).on('scroll', function () {
//     console.log($(this).scrollTop());
// });



// Anime Var

// let tl = anime.timeline({
//     easing: 'easeInOutQuad',
//     // duration: 400,
// })
// tl.add({
//     targets: '.anime-intro-div',
//     width: '80%',
//     backgroundColor: 'rgb(197, 197, 255)',
//     delay: anime.stagger(50), // increase delay by 100ms for each elements.
//     duration: 300
// })
//     .add({
//         targets: '.anime-intro-div',
//         width: '80%',
//         backgroundColor: 'rgb(235, 235, 255)',
//         duration: 300
//     })
//     .add({
//         targets: '.anime-intro-div',
//         rotateZ: [0, 360],
//         delay: anime.stagger(100),
//         easing: 'easeInOutQuad',
//         duration: 300
//     })
//     .add({
//         targets: '.anime-intro-div',
//         borderRadius: 100,
//         scaleY: .25,
//         delay: anime.stagger(100),
//         easing: 'easeInOutQuad',
//         duration: 250
//     })
//     .add({
//         targets: '.anime-intro-div',
//         translateY: [{ value: -900, duration: 150 },
//         { value: 900, duration: 150 }, { value: 0, duration: 150 }],
//         delay: anime.stagger(100),
//         easing: 'easeInOutSine'
//     })
//     .add({
//         targets: '.anime-intro-div',
//         translateY: [{ value: -2000, duration: 50 }],
//         rotateZ: [0, 360],
//         delay: anime.stagger(100),
//         easing: 'easeInOutSine'
//     })

// tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 750,
//     direction: 'alternate', // Is not inherited
//     loop: true // Is not inherited
// })
// .add({
//     targets: '.anime-intro-div',
//     translateY: -600,
//     direction: 'alternate',
//     loop: true,
//     delay: anime.stagger(200),
//     easing: 'easeInOutSine'
// })


// // Icon Animation
// $(document).ready(function () {
//     var triggered = false;
//     $(window).on('scroll', function () {
//         if (Math.round($(window).scrollTop()) > 4100 && triggered == false) {
//             $('body').addClass('stop-scrolling');

//             anime({
//                 targets: '.icon-anime',
//                 translateY: [
//                     { value: 250, duration: 1500, duration: 100 },
//                     { value: 0, duration: 1800 }
//                 ],
//                 translateX: {
//                     value: '*=2.5', // 100px * 2.5 = '250px'
//                     duration: 1000
//                 },
//                 delay: function (el, i, l) { return i * 100 }
//             });

//             triggered = true;

//         }
//         else {
//             setTimeout(function () { $('body').removeClass('stop-scrolling'); }, 3500);
//         }

//     });
// });



// .add({
//     targets: 'h1',
//     top: '20%',
//     opacity: 1,
//     duration: 4000,
// }, '-=1600')

// $(window).on('scroll', function () {
//     if (Math.round($(window).scrollTop()) > 300) {
//         anime({
//             targets: '.anime-grid',
//             width: '100%',
//             backgroundColor: '#F0F0F0;',
//             delay: anime.stagger(100)
//         });
//     }
// });

