/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function () {

	"use strict";

	// here all ready functions

	kura_tm_nav_bg();
	kura_tm_trigger_menu();
	kura_tm_down();
	kura_tm_hero_image();
	kura_tm_service_popup();
	kura_tm_news_popup();
	kura_tm_portfolio_popup();
	kura_tm_cursor();
	kura_tm_imgtosvg();
	kura_tm_popup();
	kura_tm_data_images();
	kura_tm_contact_form();
	kura_tm_swiper();
	kura_tm_jarallax();
	initTheme();
	kura_tm_portfolio_view();
	kura_tm_photo_sounds();

	// Fallback load to prevent getting stuck on refresh
	setTimeout(function () {
		kura_tm_my_load();
	}, 500);
	jQuery(window).on('load', function () {
		kura_tm_my_load();
	});

	// Video Playback: We are now using direct YouTube links for 100% compatibility.
	// No JavaScript injection needed.

});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function kura_tm_nav_bg() {

	"use strict";

	jQuery(window).on('scroll', function () {
		var menu = jQuery('.kura_tm_topbar');
		var WinOffset = jQuery(window).scrollTop();

		if (WinOffset >= 100) {
			menu.addClass('animate');
		} else {
			menu.removeClass('animate');
		}
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.1,
	filter: '',
	easing: 'swing'
});

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function kura_tm_trigger_menu() {

	"use strict";

	var audio1 = jQuery('#audio1');
	var audio2 = jQuery('#audio2');
	var hamburger = jQuery('.trigger .hamburger');
	var list = jQuery('.kura_tm_topbar .list ul li');
	var mobileMenu = jQuery('.kura_tm_mobile_menu .dropdown');
	var mobileMenuList = jQuery('.kura_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click', function () {
		var element = jQuery(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			audio1[0].play();
			list.removeClass('opened');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			audio2[0].play();
			list.each(function (i) {
				var ele = jQuery(this);
				setTimeout(function () { ele.addClass('opened'); }, i * 50);
			});
			mobileMenu.slideDown();
		}
		return false;
	});

	mobileMenuList.on('click', function () {
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		audio1[0].play();
		return false;
	});

	// Add audio to desktop sidebar clicks
	list.find('a').on('click', function () {
		audio1[0].play();
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function kura_tm_down() {

	"use strict";
	jQuery('.kura_tm_hero .down a').on('click', function () {
		var topbar = (jQuery(window).width() > 1040) ? 0 : jQuery('.kura_tm_topbar').outerHeight();
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - topbar + 20
			}, 800);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   HERO IMAGE  -----------------------
// -----------------------------------------------------

function kura_tm_hero_image() {
	"use strict";

	var FixedImage = jQuery('.kura_tm_hero .right .image .main').data('img-url');
	var wrapper = jQuery('.kura_tm_hero .services ul');
	var list = wrapper.find('li a');
	list.on('mouseenter', function () {
		var element = jQuery(this);
		var image = element.find('.image').attr('src');
		element.closest('.kura_tm_hero').find('.right .image .main').css({ backgroundImage: 'url(' + image + ')' });
		console.log(image);
	});
	wrapper.on('mouseleave', function () {
		jQuery('.kura_tm_hero .right .image .main').css({ backgroundImage: 'url(' + FixedImage + ')' });
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function kura_tm_service_popup() {

	"use strict";

	var modalBox = jQuery('.kura_tm_modalbox');
	var button = jQuery('.kura_tm_hero .services ul li a');
	var closePopup = modalBox.find('.close');

	button.on('click', function () {
		var element = jQuery(this);
		var elImage = element.find('.image').attr('src');
		var title = element.find('span').text();
		var content = element.parent('li').find('.hidden_content').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + elImage + '"></div></div>');
		kura_tm_data_images();
		modalBox.find('.popup_informations .image').after('<div class="title"><h3>' + title + '</h3></div>');
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function kura_tm_news_popup() {

	"use strict";

	var modalBox = jQuery('.kura_tm_modalbox');
	var button = jQuery('.kura_tm_news .list_inner .kura_tm_full_link');
	var closePopup = modalBox.find('.close');

	button.on('click', function () {
		var element = jQuery(this);
		var parent = element.closest('.list_inner');
		var content = parent.find('.news_hidden_details').html();
		var image = element.closest('.list_inner').find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details">' + details + '<div>');
		kura_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function kura_tm_portfolio_popup() {

	"use strict";

	var modalBox = jQuery('.kura_tm_modalbox');
	var button = jQuery('.kura_tm_portfolio .list_inner .portfolio_popup');
	var closePopup = modalBox.find('.close');

	button.on('click', function () {
		var element = jQuery(this);
		var parent = element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image = parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">' + details + '<div>');
		kura_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container) {

	"use strict";

	container.find('.progress_inner').each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		pBar.css({ width: pValue + '%', backgroundColor: pColor });
		setTimeout(function () { pBarWrap.addClass('open'); });
	});
}

jQuery('.dodo_progress').each(function () {

	"use strict";

	var pWrap = jQuery(this);
	pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' });
});

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function kura_tm_preloader() {

	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function kura_tm_my_load() {

	"use strict";

	var speed = 500;
	setTimeout(function () { kura_tm_preloader(); }, speed);
	setTimeout(function () { jQuery('body').addClass('opened'); }, speed + 2000);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function kura_tm_cursor() {
	"use strict";

	var myCursor = jQuery('.mouse-cursor');

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a,.kura_tm_topbar .trigger, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a,.kura_tm_topbar .trigger, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function kura_tm_imgtosvg() {

	"use strict";

	jQuery('img.svg').each(function () {

		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function kura_tm_popup() {

	"use strict";

	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});

	// Magnific Popup Video Fix - Removed in favor of High-Compatibility Video Playback Fix at the top of the file


	jQuery('.soundcloude_link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function kura_tm_data_images() {

	"use strict";

	var data = jQuery('*[data-img-url]');

	data.each(function () {
		var element = jQuery(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function kura_tm_contact_form() {

	"use strict";

	jQuery(".contact_form #send_message").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   SWIPER SLIDER    ------------------
// -----------------------------------------------------

function kura_tm_swiper() {
	"use strict";

	$('.kura_tm_portfolio .portfolio_list,.kura_tm_news .news_list').each(function () {
		var element = $(this);
		var container = element.find('.swiper-container');
		var mySwiper = new Swiper(container, {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			loopAdditionalSlides: 1,
			autoplay: {
				delay: 6000,
			},

			navigation: {
				nextEl: '.my_next',
				prevEl: '.my_prev',
			},

			pagination: {
				el: '.kura_tm_swiper_progress',
				type: 'custom', // progressbar
				renderCustom: function (swiper, current, total) {


					// progress animation
					var scale, translateX;
					var progressDOM = container.find('.kura_tm_swiper_progress');
					if (progressDOM.hasClass('fill')) {
						translateX = '0px';
						scale = parseInt((current / total) * 100) / 100;
					} else {
						scale = parseInt((1 / total) * 100) / 100;
						translateX = (current - 1) * parseInt((100 / total) * 100) / 100 + 'px';
					}


					progressDOM.find('.all span').css({ transform: 'translate3d(' + translateX + ',0px,0px) scaleX(' + scale + ') scaleY(1)' });
					if (current < 10) { current = '0' + current; }
					if (total < 10) { total = '0' + total; }
					progressDOM.find('.current').html(current);
					progressDOM.find('.total').html(total);
				}
			},
			breakpoints: {
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 40,
				}
			}
		});
	});
	kura_tm_imgtosvg();

}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function kura_tm_jarallax() {

	"use strict";

	jQuery('.jarallax').each(function () {
		var element = jQuery(this);
		var customSpeed = element.data('speed');

		if (customSpeed !== "undefined" && customSpeed !== "") {
			customSpeed = customSpeed;
		} else {
			customSpeed = 0.5;
		}

		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
			videoVolume: 0,
		});
	});
}


// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

new WOW().init();

// -----------------------------------------------------
// ----------------    THEME SWITCHER    ---------------
// -----------------------------------------------------

function toggleTheme() {
	var themeLink = document.getElementById('theme-css');
	var currentTheme = 'dark';

	// Check if dark.css is currently active
	if (themeLink.href && themeLink.href.indexOf('css/dark.css') !== -1) {
		// Switch to Light
		themeLink.href = '';
		document.body.classList.remove('dark');
		currentTheme = 'light';
	} else {
		// Switch to Dark
		themeLink.href = 'css/dark.css';
		document.body.classList.add('dark');
		currentTheme = 'dark';
	}

	updateLogo(currentTheme);
	localStorage.setItem('selectedTheme', currentTheme);
}

function updateLogo(theme) {
	var logoImages = document.querySelectorAll('.logo img');
	// Light Theme (White BG) -> Needs Black Logo
	// Dark Theme (Dark BG) -> Needs White Logo
	var newSrc = (theme === 'light') ? 'img/logo/UNHEARD PICTURES LOGO black.svg' : 'img/logo/UNHEARD PICTURES LOGO.svg';

	logoImages.forEach(function (img) {
		img.src = newSrc;
	});
}

function initTheme() {
	var savedTheme = localStorage.getItem('selectedTheme');
	var themeLink = document.getElementById('theme-css');

	// Determine current state from HTML
	var currentIsDark = document.body.classList.contains('dark') || (themeLink && themeLink.href && themeLink.href.indexOf('css/dark.css') !== -1);
	var targetTheme = savedTheme || (currentIsDark ? 'dark' : 'light');

	if (targetTheme === 'light') {
		if (themeLink) themeLink.href = '';
		document.body.classList.remove('dark');
		updateLogo('light');
	} else {
		if (themeLink && (!themeLink.href || themeLink.href.indexOf('css/dark.css') === -1)) {
			themeLink.href = 'css/dark.css';
		}
		document.body.classList.add('dark');
		updateLogo('dark');
	}
}

// -----------------------------------------------------
// ----------   FULLSCREEN PORTFOLIO VIEW   ------------
// -----------------------------------------------------

function kura_tm_portfolio_view() {
	"use strict";

	var portfolioView = jQuery('.kura_tm_portfolio_view');
	var closeBtn = portfolioView.find('.close_button');

	// Apply background images to the grid thumbnails
	portfolioView.find('.main[data-img-url]').each(function () {
		var el = jQuery(this);
		el.css('background-image', 'url(' + el.data('img-url') + ')');
	});

	// When clicking "Portfolio" in any nav, open the view instead of scrolling
	jQuery('a[href="#portfolio"]').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		// Close mobile menu if open
		jQuery('.trigger .hamburger').removeClass('is-active');
		jQuery('.kura_tm_mobile_menu .dropdown').slideUp();

		portfolioView.addClass('opened');
		jQuery('body').addClass('portfolio_view_open');
		return false;
	});

	// Close button
	closeBtn.on('click', function (e) {
		e.preventDefault();
		portfolioView.removeClass('opened');
		jQuery('body').removeClass('portfolio_view_open');
		return false;
	});

	// Close on Escape key
	jQuery(document).on('keydown', function (e) {
		if (e.key === 'Escape' && portfolioView.hasClass('opened')) {
			portfolioView.removeClass('opened');
			jQuery('body').removeClass('portfolio_view_open');
		}
	});

	// Open YouTube directly on grid item click (new tab)
	portfolioView.find('.kura_tm_full_link').on('click', function (e) {
		e.stopPropagation();
	});

	// Tab switching: Videos / Photos
	jQuery('.tab_btn').on('click', function () {
		var tab = jQuery(this).data('tab');

		// Audio click for tab
		jQuery('#audio1')[0].play();

		// Update active button
		jQuery('.tab_btn').removeClass('active');
		jQuery(this).addClass('active');

		// Show correct content
		jQuery('.tab_content').hide();
		jQuery('#tab-' + tab).show();
	});
}

// -----------------------------------------------------
// ---------------   PHOTO SOUNDS    -------------------
// -----------------------------------------------------

function kura_tm_photo_sounds() {
	"use strict";

	var audio1 = jQuery('#audio1'); // Click sound
	var audio2 = jQuery('#audio2'); // Alternative sound
	var photoItems = jQuery('.photo_item a');
	var grids = jQuery('.photos_grid');

	// Sound on image click
	photoItems.on('click', function () {
		if (audio1.length) {
			audio1[0].currentTime = 0;
			audio1[0].play();
		}
	});

	// Sound on horizontal scroll (Film Strip)
	grids.each(function () {
		var element = jQuery(this);
		var lastScrollLeft = 0;
		var scrollThreshold = 150; // Pixels to trigger sound

		element.on('scroll', function () {
			var currentScrollLeft = element.scrollLeft();
			if (Math.abs(currentScrollLeft - lastScrollLeft) > scrollThreshold) {
				if (audio2.length) {
					// Rapid ticking sound for film reel effect
					var clone = audio2[0].cloneNode();
					clone.volume = 0.2; // Soft scrolling sound
					clone.play();
				}
				lastScrollLeft = currentScrollLeft;
			}
		});
	});
}

