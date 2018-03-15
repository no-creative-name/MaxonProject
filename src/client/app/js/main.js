$(document).ready(function(){
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });

    $('#home-button').click(function(){onHomeButtonClick()});
    menuTopOnScroll();
});

$(window).on("load", function(){
    $("body").fadeIn(1000);   
})

function redirectPage() {
    window.location = linkLocation;
}

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

function onHomeButtonClick () {
    window.location.href = "./index.html#running";
}