setTimeout(function() {
	$(document).ready(function() {
		// Allow the page to load before animating
		document.body.classList.add('js-loading');

		window.addEventListener('load', showPage);

		function showPage() {
			document.body.classList.remove('js-loading');
		}

		// setTimeout(function(){ alert("Hello"); }, 3000);

		// Tool Tip Popups enabled
		$(function() {
			$('[data-toggle="tooltip"]').tooltip({
				trigger: 'hover'
			});
		});

		// Navbar Expand
		let workCard = $('#work-cards').position().top;
		$(window).on('scroll', function() {
			if (Math.round($(window).scrollTop()) > workCard) {
				$('.navbar-main').addClass('scrolled');
			} else {
				$('.navbar-main').removeClass('scrolled');
			}
		});

		// Global Card vars for animations

		var gridScrollUp = false;
		var easeDuration = 1000;
		var descFade = 1000;
		var caterCard = false;
		var subtScroll = -400;
		var subtIcon = -650;
		var caterScroll = $('#cater2me-card').position().top + subtScroll;
		var cineCard = false;
		var cineScroll = $('#cine-card').position().top + subtScroll;
		var bookCard = false;
		var bookScroll = $('#book-card').position().top + subtScroll;
		var iconTrigger = false;
		var iconAnime = $('#icon-section').position().top + subtIcon;

		// Anime Timeline for grid
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 750
		});

		// Screen width checker
		var windowSize = $(window).width();
		$(window).resize(function() {
			windowSize = $(window).width();
			workCard = $('#work-cards').position().top;
			caterScroll = $('#cater2me-card').position().top + subtScroll;
			cineScroll = $('#cine-card').position().top + subtScroll;
			bookScroll = $('#book-card').position().top + subtScroll;
			iconAnime = $('#icon-section').position().top + subtIcon;
		});

		// Function to make name animations responsive
		function timeLineGrid(percentWidth, paddingW) {
			tl
				.add({
					targets: [ '.first-name-div', '.last-name-div' ],
					opacity: 1,
					easing: 'linear',
					duration: 500
				})
				.add({
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
					targets: [ '.first-name', '.last-name' ],
					color: '#F0F0F0',
					delay: anime.stagger(30),
					duration: 500
				})
				.add({
					targets: [ '.first-name-div', '.last-name-div' ],
					marginLeft: paddingW + '%',
					width: percentWidth + '%',
					flex: 'none',
					delay: anime.stagger(30),
					easing: 'easeOutSine',
					duration: 250
				})
				.add({
					targets: [ '.first-name', '.last-name' ],
					delay: anime.stagger(30),
					easing: 'easeOutSine',
					duration: 250
				})
				.add({
					targets: '.anime-dev-box',
					opacity: 1,
					easing: 'easeOutSine',
					duration: 3000
				});
		}

		// Responsive grid animation - functions are using window size

		// window.onload = function () {
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
		// };

		// Scroll functions

		$(window).on('scroll', function() {
			// Grid scroll animation

			// Ride Up
			if (Math.round($(window).scrollTop()) >= 250 && gridScrollUp == false) {
				anime({
					targets: '.intro-section',
					scaleY: '1',
					scaleX: '1',
					translateY: '-70%',
					rotateZ: '45deg',
					duration: 6000,
					backgroundColor: [ { value: '#ffffff', duration: 2000 } ]
				});
				gridScrollUp = true;
				anime({
					targets: '.anime-grid',
					width: '80%',
					easing: 'linear',
					duration: 1000
				});
				anime({
					targets: '.first-name-div',
					translateX: '-1400',
					delay: anime.stagger(30),
					easing: 'linear',
					duration: 250
				});
				anime({
					targets: '.last-name-div',
					translateX: '-1400',
					delay: anime.stagger(30),
					easing: 'linear',
					duration: 250
				});
				// Ride Down
			} else if (Math.round($(window).scrollTop()) < 10 && gridScrollUp == true) {
				anime({
					targets: '.intro-section',
					scaleY: '1',
					scaleX: '1',
					translateY: '0',
					rotateZ: '0deg',
					duration: 4000,
					backgroundColor: [ { value: '#191919', delay: 1800 } ]
				});
				gridScrollUp = false;
				anime({
					targets: '.anime-grid',
					width: '101%',
					delay: '2000'
				});
				anime({
					targets: '.first-name-div',
					translateX: function(el, i, l) {
						return i * -115;
					},
					delay: anime.stagger(30),
					easing: 'linear',
					delay: '2000',
					duration: 500
				});
				anime({
					targets: '.last-name-div',
					translateX: function(el, i, l) {
						return i * -120;
					},
					delay: anime.stagger(30),
					easing: 'linear',
					delay: '2000',
					duration: 500
				});
			}

			// Cards Ease In

			// Cater Card

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

			// Cine Card

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

			// Book Card

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

		// Icon Animation

		$(window).on('scroll', function() {
			if (Math.round($(window).scrollTop()) > iconAnime && iconTrigger == false) {
				anime({
					targets: '.icon-anime',
					translateX: 1200,
					translateY: -1200,
					easing: 'easeInOutQuad',
					delay: anime.stagger(80)
				});
				iconTrigger = true;
			}
		});

		// footer Animation
		var footerFade = false;
		$(window).on('scroll', function() {
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
		$(function() {
			$('#icon-1').hover(
				function() {
					$('#icon-1 i').css('color', '#F0F0F0');
				},
				function() {
					// on mouseout, reset the background colour
					$('#icon-1 i').css('color', '#7e7e7e');
				}
			);
			$('#icon-2').hover(
				function() {
					$('#icon-2 i').css('color', '#F0F0F0');
				},
				function() {
					// on mouseout, reset the background colour
					$('#icon-2 i').css('color', '#7e7e7e');
				}
			);
			$('#icon-3').hover(
				function() {
					$('#icon-3 i').css('color', '#F0F0F0');
				},
				function() {
					// on mouseout, reset the background colour
					$('#icon-3 i').css('color', '#7e7e7e');
				}
			);
		});

		// Resume Popup

		$(function() {
			$('#icon-3').click(function() {
				$('#resume-mb').toggleClass('invis');
			});
		});
	});
}, 1500);
