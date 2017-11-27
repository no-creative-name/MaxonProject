
$(document).ready(function(){
    menuTopOnScroll();

    $('.col').click(function(){
        if(isAnimationFinished && !isScrolling) {
            isAnimationFinished = false;
            resetSiblingColumns($(this));
            //  If active column is clicked
            if($(this).hasClass("col-active")) {
                makeActiveColumnInactive($(this));
            } 
            //  If inactive column is clicked
            else {
                makeInactiveColumnActive($(this));
            }
            // Timeout to prevent multiple animations to disturb each other
            setTimeout(function() {
                isAnimationFinished = true;
            }, 1000);
        } 
    })
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