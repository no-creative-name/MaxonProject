function onHomeButtonClick () {
    window.location.href = "./index.html#running";    
}

$(document).ready(function(){
    $('#home-button').click(function(){onHomeButtonClick()});
});