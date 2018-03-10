function onHomeButtonClick () {
    window.location.href = "./index.html#running";    
}

$(document).ready(function(){
    $('#home-button').click(function(){onHomeButtonClick()});
    setTimeout(function() {
        $("#webgl-viewer-waiting-screen").remove();
    }, 5000);
});