$(document).ready(function(){
    menuTopOnScroll();
});

//  This function fixes the icons on top of the page
//  once they reach the top by scrollign
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