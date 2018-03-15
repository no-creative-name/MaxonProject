let numberOfPages = 23;
let currentLeftPage = 0;
let currentRightPage = 1;
let imgStringPrefix = "./docs/maxon_magazine/maxon_magazine-"

$(document).ready(function(){

    $("#prev-button").click(function(){
        if(currentLeftPage > 0){
            currentLeftPage = currentLeftPage-2
        }
        if(currentRightPage > 1){
            currentRightPage = currentRightPage-2;
        }
        $("#left-page").attr("src", imgStringPrefix+currentLeftPage+".jpg");
        $("#right-page").attr("src", imgStringPrefix+currentRightPage+".jpg");
    });

    $("#next-button").click(function(){
        if(currentLeftPage < numberOfPages-1){
            currentLeftPage = currentLeftPage+2;
        }
        if(currentRightPage < numberOfPages){
            currentRightPage = currentRightPage+2;
        }
        $("#left-page").attr("src", imgStringPrefix+currentLeftPage+".jpg");
        $("#right-page").attr("src", imgStringPrefix+currentRightPage+".jpg");
    });
});