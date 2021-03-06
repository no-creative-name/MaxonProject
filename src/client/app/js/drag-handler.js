var isColumnTransformationFinished = true;
var isScrolling = false;
var isAnyColumnActive = false;

//  COLUMN TRANSFORM HELPER FUNCTIONS

function resetSiblingColumns (column) {
    column.parent().children().removeClass("col-1 col-9").addClass("col-3");
    column.parent().children().children(".info").removeClass("is-visible");
}

function resetAllColumns (row) {
    $(document.body).removeClass("overflow-y-visible");
    row.children().removeClass("col-1 col-9 col-active").addClass("col-3");
    row.children().children(".info").removeClass("is-visible");
    isAnyColumnActive = false;
}

function makeActiveColumnInactive (column) {
    $(document.body).removeClass("overflow-y-visible");
    column.removeClass("col-9 col-active");
    isAnyColumnActive = false;
}

function makeInactiveColumnActive (column) {
    if(!isAnyColumnActive) {
        $(document.body).addClass("overflow-y-visible");
        isAnyColumnActive = true;
    }
    //  Scroll to the top when you open another column
    $(".container").scrollTop(0);
    //  Make clicked column active
    column.siblings().removeClass("col-9 col-3 col-active").addClass("col-1");
    column.removeClass("col-1 col-3").addClass("col-9 col-active");
    //  Toggle info texts
    column.siblings().children(".info").removeClass("is-visible");
    column.children(".info").addClass("is-visible");
}

//  COLUMN CLICK

function onColumnClick (elem) {
    if(isColumnTransformationFinished) {
        isColumnTransformationFinished = false;
        resetSiblingColumns(elem);
        //  If active column is clicked
        if(elem.hasClass("col-active")) {
            makeActiveColumnInactive(elem);
        } 
        //  If inactive column is clicked
        else {
            makeInactiveColumnActive(elem);
        }
        // Timeout to prevent multiple animations to disturb each other
        setTimeout(function() {
            isColumnTransformationFinished = true;
        }, 1000);
    }
}

//  COLUMN DRAG

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
    if(isColumnTransformationFinished && !isScrolling) {
        isColumnTransformationFinished = false;
        resetSiblingColumns(elem);
        //  If active column is clicked
        if(elem.hasClass("col-active")) {
            makeActiveColumnInactive(elem);
        } 
        //  If inactive column is clicked
        else {
            makeInactiveColumnActive(elem);
        }
        // Timeout to prevent multiple animations to disturb each other
        setTimeout(function() {
            isColumnTransformationFinished = true;
        }, 1000);
    } 

}

//  LANDING PAGE DRAG

var lastPosX = 0;
var isDragging = false;
var isLandingPageOutOfViewport = false;
var widthUntilPageSlidesAway = $(window).width()/2;

function handleLandingPageDrag(ev) {
  
    var elem = document.getElementById("landing-page");
    var lPage = $("#landing-page");

    lPage.stop();

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
    if (ev.isFinal && !isLandingPageOutOfViewport) {
        if (parseInt(elem.style.left) > widthUntilPageSlidesAway) {
            lPage.animate({'left': 2000}, 1000);
            isLandingPageOutOfViewport = true;
        }
        else if (-parseInt(elem.style.left) > widthUntilPageSlidesAway) {
            lPage.animate({'left': -2000}, 1000);
            isLandingPageOutOfViewport = true;
        }
        else {
            isDragging = false;
            lPage.animate({'left': 0}, 1300, "easeOutBounce");
        }
    } 

}

//  HOME BUTTON CLICK

function onHomeButtonClick() {
    var lPage = $("#landing-page");
    lPage.animate({'left': 0}, 1000, "easeOutBack");
    isLandingPageOutOfViewport = false;
    resetAllColumns($("#fan-row"));
    document.location.hash = "";
}

//  GENERAL DRAG LOGIC

document.addEventListener('DOMContentLoaded', function () {
    var landingPage = document.getElementById("landing-page");

    if(landingPage != null) {
        var landingPageHammer = new Hammer(landingPage);
        landingPageHammer.on('pan', handleLandingPageDrag);
    }

    for(let i = 0; i < 4; i++) {
        var column = $(".col")[i];
        var columnHammer = new Hammer(column);
        columnHammer.on("panleft panright", handleColumnDrag);
    };
});

//  GENERAL CLICK LOGIC

$(document).ready(function(){
    if(document.location.hash == "#running") {
        var lPage = $("#landing-page");
        lPage.css("left", 2000);
        isLandingPageOutOfViewport = true;
    }
    $('.col').click(function(){onColumnClick($(this))});
    $('#home-button').click(function(){onHomeButtonClick()});
});