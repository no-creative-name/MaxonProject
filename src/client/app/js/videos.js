var URLs =  [
            "https://www.youtube.com/embed/NisdK3g7TPA?autoplay=1&showinfo=0&controls=1&rel=0",
            "https://www.youtube.com/embed/rCHMUBSKIl0?autoplay=1&showinfo=0&controls=1&rel=0",
            "https://www.youtube.com/embed/WJY4RIC_b10?autoplay=1&showinfo=0&controls=1&rel=0",
            "https://www.youtube.com/embed/Q02gF0OF40Y?autoplay=1&showinfo=0&controls=1&rel=0"
            ];
var currentVid;

function onThumbClick() {
    $(".video-thumb").click(function(){
        $("#video-overlay").css("display", "block");
        $(this).siblings().removeClass("active-thumb");
        $(this).addClass("active-thumb");

        if($(this).attr("id") == "video-thumb1") {
            $(this).siblings().css("z-index", 2);
            $(this).css("z-index", 1000);
            $(".video-player").attr("src", URLs[0]);
            currentVid = 1;
        }
        if($(this).attr("id") == "video-thumb2") {
            $(this).siblings().css("z-index", 2);
            $(this).css("z-index", 1000);
            $(".video-player").attr("src", URLs[1]);
            currentVid = 2;
        }
        if($(this).attr("id") == "video-thumb3") {
            $(this).siblings().css("z-index", 2);
            $(this).css("z-index", 1000);
            $(".video-player").attr("src", URLs[2]);
            currentVid = 3;
        }
        if($(this).attr("id") == "video-thumb4") {
            $(this).siblings().css("z-index", 2);
            $(this).css("z-index", 1000);
            $(".video-player").attr("src", URLs[3]);
            currentVid = 4;
        }
        window.setTimeout(function(){
            $("#video-overlay").css("display", "none");         
        }, 1000);
    });
}

$(document).ready(function(){
    onThumbClick();
});