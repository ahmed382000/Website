
// bxSlider Options
$('.slider').bxSlider({
    nextSelector: '.bxNext',
    prevSelector: '.bxPrev',
    nextText: '<i class="fa fa-arrow-circle-right fa-3x"></i>',
    prevText: '<i class="fa fa-arrow-circle-left fa-3x"></i>',
    keyboardEnabled: true
});

// To make the words in the center
$('.slider').css('marginTop', ($(window).height() - $('.slider li').height()) / 2);
// To make the header take the same height of window dynamically
$('header').height($(window).height());

// To make the website responsive when you resize it
$(window).resize(function () {
    $('header').height($(window).height());
    $('.slider').css('marginTop', ($(window).height() - $('.slider li').height()) / 2);
});

// Moving the active class to where the mouse clicked in the Nav buttons
$('nav ul li a').click(function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});

// To make the nav options scroll smoothly to the desired place
$('nav .links li a').click(function (e) {
    e.preventDefault();
    // $($(this).attr('href')).get(0).scrollIntoView({ behavior: 'smooth' });            /* Another method  */ 
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 1,
    }, 1000)
});

$('.box .item .overlay').hover(function () {
    // over
    $(this).animate({ opacity: '1' }, 300);

}, function () {
    // out
    $(this).animate({ opacity: '0' }, 300);
}
);

var i = 0;
var X = $('.testimonials .container .testi');

// Sliding the testimonials
(function sliding() {
    X.eq(i).delay(4000).fadeOut(1000, function () {
        X.eq(++i).fadeIn(1000)
        if (i >= X.length - 1) {
            i = -1;
        };
        sliding()
    });
})();

// Sliding the testimonials => Another Methode
// $($('.testimonials .container .testi')[i]).delay(2000).fadeOut(1000, function () {
//     $($('.testimonials .container .testi')[++i]).fadeIn(1000);
// });
// setTimeout(() => {

//     setInterval(() => {
//         $($('.testimonials .container .testi')[i]).fadeOut(1000, function () {

//             $($('.testimonials .container .testi')[++i]).fadeIn(1000);

//         });

//         if (i >= X.length - 1) {
//             i = -1;
//         };

//     }, 4000);

// }, 2000);


// display mixItUp plugin
var mixer = mixitup('.CON');

// Moving the active class to where the mouse clicked in the Portfolio buttons
$('.portfolio ul li').click(function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});

// display niceScroll plugin
$("body").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "10px",
    cursorborder: 'none',
    zindex: 100000,
    // autohidemode: 'cursor',
    // cursoropacitymin: .3,
    // cursoropacitymax: .9,
    // cursorborderradius: 0,
    // cursorminheight: 100,
    // cursorfixedheight: 150,
});








