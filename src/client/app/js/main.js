$(document).ready(function(){

    $("#landing-page").click(function() {
        $(this).animate({left: '1920px'}, 1000);
    });

    $(".col").click(function(){
        resetAllColumnsToDefaultWidth($(this));
        //If active column is clicked
        if($(this).hasClass("col-active")) {
            resetActiveColumn($(this));
        } else {
            //Make clicked column active
            $(this).siblings().removeClass("col-9 col-3 col-active").addClass("col-1");
            $(this).removeClass("col-1 col-3").toggleClass("col-9 col-active");
            //Toggle info texts
            $(this).parents().children().children(".info-text").removeClass("is-visible");
            $(this).children(".info").addClass("is-visible");
        }
        
    });

    menuTopOnScroll();
    
});

function resetAllColumnsToDefaultWidth (col) {
    col.parents().siblings().removeClass("col-1 col-9").addClass("col-3");
    col.parents().children().children(".info").removeClass("is-visible");
}

function resetActiveColumn (col) {
    col.siblings().removeClass("col-9 col-1 col-active").addClass("col-3");
    col.toggleClass("col-3 col-9 col-active");
}

function menuTopOnScroll () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.thumbnail').position().top) {
            $('.thumbnail').attr('id', 'fixed-on-top');
        }
        if ($(window).scrollTop() < 100 ) {    
            $('.thumbnail').attr('id', '');;
        }
    });
}