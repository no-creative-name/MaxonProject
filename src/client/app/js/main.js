var isAnimationFinished = true;
var isAnyColumnActive = false;

$(document).ready(function(){

    $("#landing-page").click(function() {
        $(this).animate({'left': 1920}, 1000);
    });

    $(".col").click(function(){
        if(isAnimationFinished) {
            isAnimationFinished = false;
            resetAllColumnsToDefaultWidth($(this));
            //If active column is clicked
            if($(this).hasClass("col-active")) {
                $(document.body).removeClass("overflow-y-visible");
                isAnyColumnActive = false;
                resetActiveColumn($(this));
            } else {
                if(!isAnyColumnActive) {
                    $(document.body).addClass("overflow-y-visible");
                    isAnyColumnActive = true;
                }
                //Make clicked column active
                $(this).siblings().removeClass("col-9 col-3 col-active").addClass("col-1");
                $(this).removeClass("col-1 col-3").addClass("col-9 col-active");
                //Toggle info texts
                $(this).parents().children().children(".info-text").removeClass("is-visible");
                $(this).children(".info").addClass("is-visible");
            }
            console.log(isAnimationFinished);
            setTimeout(function() {
                isAnimationFinished = true;
            }, 1000);
            /*$(this).on('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function (e) {
                if($(e.target).is(this)) {
                    isAnimationFinished = true;
                    $(this).off('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd');
                }
            });*/
        } 
    });
    menuTopOnScroll();
    
});

function resetAllColumnsToDefaultWidth (col) {
    col.siblings().removeClass("col-1 col-9").addClass("col-3");
    col.parents().children().children(".info").removeClass("is-visible");
}

function resetActiveColumn (col) {
    col.siblings().removeClass("col-active");
    col.toggleClass("col-3 col-9 col-active");
}

function menuTopOnScroll () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > ($('.thumbnail').position().top)) {
            $('.thumbnail').attr('id', 'fixed-on-top');
        }
        if ($(window).scrollTop() < 150-10 ) {
            $('.thumbnail').attr('id', '');;
        }
    });
}