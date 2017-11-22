//var isAnimationFinished = true;
//var isAnyColumnActive = false;

$(document).ready(function(){

    /*$(".col").click(function(){
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
            setTimeout(function() {
                isAnimationFinished = true;
            }, 1000);
        } 
    });*/
    menuTopOnScroll();
    
});

function resetAllColumnsToDefaultWidth (row) {
    row.children().removeClass("col-1 col-9").addClass("col-3");
    row.children().children(".info").removeClass("is-visible");
}

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