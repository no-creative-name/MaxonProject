var isAnimationFinished = true;
var isAnyColumnActive = false;

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

function resetAllColumnsToDefaultWidth () {
    $("#fan-row").children().removeClass("col-1 col-9").addClass("col-3");
    $("#fan-row").children().children(".info").removeClass("is-visible");
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

var lastPosX = 0;
var isDragging = false;
var isOutOfViewport = false;
var isScrolling = false;

document.addEventListener('DOMContentLoaded', function () {
    var landingPage = document.getElementById("landing-page");
    var landingPageHammer = new Hammer(landingPage);
    landingPageHammer.on('pan', handleLandingPageDrag);

   for(let i = 0; i < 4; i++) {
        var column = $(".col")[i];
        var columnHammer = new Hammer(column);
        
        columnHammer.on("panleft panright", handleColumnDrag);
    };
});

function handleLandingPageDrag(ev) {
  
    // for convience, let's get a reference to our object
    var elem = document.getElementById("landing-page");;
    var lPage = $("#landing-page");

    // DRAG STARTED
    // here, let's snag the current position
    // and keep track of the fact that we're dragging
    if ( ! isDragging ) {
    isDragging = true;
    lastPosX = elem.offsetLeft;
    }

    // we simply need to determine where the x,y of this
    // object is relative to where it's "last" known position is
    // NOTE: 
    //    deltaX and deltaY are cumulative
    // Thus we need to always calculate 'real x and y' relative
    // to the "lastPosX/Y"
    var posX = ev.deltaX + lastPosX;

    // move our element to that position
    elem.style.left = posX + "px";

    // DRAG ENDED
    // this is where we simply forget we are dragging
    if (parseInt(elem.style.left) > $(window).width()/3) {
        lPage.animate({'left': 2000}, 1000);
        isOutOfViewport = true;
    }
    else if (-parseInt(elem.style.left) > $(window).width()/3) {
        lPage.animate({'left': -2000}, 1000);
        isOutOfViewport = true;
    }
    if (ev.isFinal && !isOutOfViewport) {
        isDragging = false;
        lPage.animate({'left': 15}, 1300, "easeOutBounce");
    } 

}

function handleColumnDrag(ev) {

    var elem = $(ev.target);
    if(elem.parents(".col").length) {
        elem = elem.parent(".col");
    }
    var angle = Math.abs(ev.angle);

    if(angle > 20 && angle < 160){
        isScrolling = true;
    }
    else {
        isScrolling = false;
    }
    
    if(isAnimationFinished && !isScrolling) {
        isAnimationFinished = false;
        resetAllColumnsToDefaultWidth();
        //If active column is clicked
        if(elem.hasClass("col-active")) {
            $(document.body).removeClass("overflow-y-visible");
            isAnyColumnActive = false;
            elem.removeClass("col-9 col-active");    
        } else {
            if(!isAnyColumnActive) {
                $(document.body).addClass("overflow-y-visible");
                isAnyColumnActive = true;
            }
            //Make clicked column active
            elem.siblings().removeClass("col-9 col-3 col-active").addClass("col-1");
            elem.removeClass("col-1 col-3").addClass("col-9 col-active");
            //Toggle info texts
            elem.parents().children().children(".info-text").removeClass("is-visible");
            elem.children(".info").addClass("is-visible");
        }
        setTimeout(function() {
            isAnimationFinished = true;
        }, 1000);
    } 

}