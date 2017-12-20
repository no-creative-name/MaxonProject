
$(document).ready(function(){
    onThumbClick();
});

var titles = ["Dusk Till Dawn","How Long", "Symphony", "There's Nothing Holdin' Me Back"];
var descriptions = ["ZAYN ft. Sia", "Charlie Puth", "Clean Bandit ft. Zara Larsson", "Shawn Mendes"];
var URLs =  [
            "https://www.youtube.com/embed/DbF91ZtpGGc?autoplay=0&showinfo=0&controls=1",
            "https://www.youtube.com/embed/KROef3M9gjk?autoplay=0&showinfo=0&controls=1",
            "https://www.youtube.com/embed/65wblLv1XDk?autoplay=0&showinfo=0&controls=1",
            "https://www.youtube.com/embed/EFO9EiXFG4c?autoplay=0&showinfo=0&controls=1"
            ];
var currentVid;

function onThumbClick() {
    $(".video-thumb").click(function(){
        
        $("#video-overlay").css("display", "block");

        if($(this).attr("id") == "video-thumb1") {
            $(".video-player").attr("src", URLs[0]);
            currentVid = 1;
        }
        if($(this).attr("id") == "video-thumb2") {
            $(".video-player").attr("src", URLs[1]);
            currentVid = 2;
        }
        if($(this).attr("id") == "video-thumb3") {
            $(".video-player").attr("src", URLs[2]);
            currentVid = 3;
        }
        if($(this).attr("id") == "video-thumb4") {
            $(".video-player").attr("src", URLs[3]);
            currentVid = 4;
        }
        window.setTimeout(function(){
            $("#video-overlay").css("display", "none");         
        }, 1000);
    });
}