$(document).on('click', '.close', function () {
    
    $('html, body').animate({
        scrollTop: $("#text-copy-lp").offset().top
    }, 500);
});
