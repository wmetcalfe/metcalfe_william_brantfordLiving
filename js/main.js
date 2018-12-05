/* Brantford Living JS */

// Show/Hide Main Nav
$(document).ready(function() {
    $(".menu").click(function(){
        $(".mainNav").toggle();
    });
});

// Auto Scroll Function
$(".findOut").click(function() {
    $('html, body').animate({
        scrollTop: $("#brantfordContainer").offset().top
    }, 1000);
});

$(".home").click(function() {
    $('html, body').animate({
        scrollTop: $(".logo").offset().top
    }, 1000);
});

$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#brantfordContainer").offset().top
    }, 1000);
});

$(".choose").click(function() {
    $('html, body').animate({
        scrollTop: $("#chooseBrantford").offset().top
    }, 1000);
});

$(".commute").click(function() {
    $('html, body').animate({
        scrollTop: $("#commuteTitle").offset().top
    }, 1000);
});