$(document).ready(function(){

    $(".col").click(function(){
        //Reset all columns to their default width
        $(this).parents().siblings().removeClass("col-1 col-9").addClass("col-3");
        $(this).parents().children().children(".info").removeClass("is-visible");
        //If active column is clicked
        if($(this).hasClass("col-9")) {
            //Reset active column
            $(this).siblings().removeClass("col-9 col-1").addClass("col-3");
            $(this).toggleClass("col-3 col-9");
        } else {
            //Make clicked column active
            $(this).siblings().removeClass("col-9 col-3").addClass("col-1");
            $(this).removeClass("col-1 col-3").toggleClass("col-9");
            $(this).parents().children().children(".info-text").removeClass("is-visible");
            $(this).children(".info").addClass("is-visible");
        }
        
    });

    $(".col").mouseenter(function(){
        $(this).toggleClass("is-hovered");
    });

    $(".col").mouseleave(function(){
        $(this).toggleClass("is-hovered");
    });
    
});