function onHomeButtonClick () {
    window.location.href = "./index.html";    
}


$(document).ready(function(){
    $('#home-button').click(function(){onHomeButtonClick()});
});