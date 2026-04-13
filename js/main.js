// slideshow controls; smooth horizontal scrolling
$('div.work-sample-slideshow div[class$="-arrow"], div.work-sample-slideshow div.carousel-thumbnail').on('click',function() {
    var slideContainer = ($(this).hasClass('carousel-thumbnail')) ? $(this).parent().siblings('ul.display') : $(this).siblings('ul.display');
    var currentSlide = slideContainer.children('.active');
    var scrollToCoord;
    currentSlide.removeClass('active');
    if($(this).hasClass('left-arrow')) {
        var prevSlide = (currentSlide.prev().length>0) ? currentSlide.prev() : slideContainer.children().last();
        scrollToCoord = prevSlide[0].offsetLeft;
        prevSlide.addClass('active');
    } else if($(this).hasClass('right-arrow')) {
        var nextSlide = (currentSlide.next().length>0) ? currentSlide.next() : slideContainer.children().first();
        scrollToCoord = nextSlide[0].offsetLeft;
        nextSlide.addClass('active');
    } else {
        var chosenSlideId = $(this).attr('data-target');
        var chosenSlide = $(chosenSlideId);
        chosenSlide.addClass('active');
        scrollToCoord = chosenSlide[0].offsetLeft;
    }
    slideContainer[0].scrollTo({
        left: scrollToCoord,
        behavior: 'smooth'
    });
});

// navigation items
$('.nav-item,.page-scroller,#mobile-nav-list li.nav-item').on('click',function() {
    var hamburgerIcon = $('#hamburger-menu');
    if(hamburgerIcon.hasClass('open')) {
        toggleMobileMenu();
    }
    var scrollToCoord = $($(this).attr('data-target'))[0].offsetTop;
    window.scrollTo({
        top: scrollToCoord,
        behavior: 'smooth'
    })
});

$('#hamburger-menu').on('click',toggleMobileMenu);
function toggleMobileMenu() {
    var hamburgerIcon = $('#hamburger-menu');
    var mobileNav = $('nav#mobile-nav');
    if(hamburgerIcon.hasClass('closed')) {
        hamburgerIcon.removeClass('closed');
        hamburgerIcon.addClass('open');
        hamburgerIcon.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>');
        mobileNav.addClass('visible');
    } else {
        mobileNav.removeClass('visible');
        hamburgerIcon.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>');
        hamburgerIcon.addClass('closed');
        hamburgerIcon.removeClass('open');
    }
}
