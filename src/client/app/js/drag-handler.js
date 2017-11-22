var lastPosX = 0;
var isDragging = false;
var isOutOfViewport = false;
var isScrolling = false;
var isAnimationFinished = true;
var isAnyColumnActive = false;

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

    //  Check if child of col is dragged, if yes, then elem = col
    if(!elem.hasClass("col")) {
        elem = elem.parents(".col");
    }
    
    //  Prevent animation if vertical scrolling is in action
    var angle = Math.abs(ev.angle);

    if(angle > 20 && angle < 160){
        isScrolling = true;
    }
    else {
        isScrolling = false;
    }
    
    //  Actual animation
    if(isAnimationFinished && !isScrolling) {
        isAnimationFinished = false;
        resetAllColumnsToDefaultWidth($("#fan-row"));
        //  If active column is clicked
        if(elem.hasClass("col-active")) {
            $(document.body).removeClass("overflow-y-visible");
            isAnyColumnActive = false;
            elem.removeClass("col-9 col-active");    
        } 
        //  If inactive column is clicked
        else {
            if(!isAnyColumnActive) {
                $(document.body).addClass("overflow-y-visible");
                isAnyColumnActive = true;
            }
            //  Make clicked column active
            elem.siblings().removeClass("col-9 col-3 col-active").addClass("col-1");
            elem.removeClass("col-1 col-3").addClass("col-9 col-active");
            //  Toggle info texts
            elem.parents().children().children(".info-text").removeClass("is-visible");
            elem.children(".info").addClass("is-visible");
        }
        // Timeout to prevent multiple animations to disturb each other
        setTimeout(function() {
            isAnimationFinished = true;
        }, 1000);
    } 

}