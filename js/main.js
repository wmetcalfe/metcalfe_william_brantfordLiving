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