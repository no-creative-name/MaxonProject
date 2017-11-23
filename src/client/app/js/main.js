
$(document).ready(function(){
    menuTopOnScroll();
});

function menuTopOnScroll () {
    $(".container").scroll(function () {
        if ($(".container").scrollTop() > ($('.thumbnail').position().top)) {
            $('.thumbnail').attr('id', 'fixed-on-top');
        }
        if ($(".container").scrollTop() < 150-10 ) {
            $('.thumbnail').attr('id', '');;
        }
    });
}