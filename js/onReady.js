function randomColour() {
    var letters = '0123456789ABCD'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 13)]
    }
    return color
}

function doRequest() {
    var text = $("#string").val();
    $("#md5").val(md5(text))
}
$(document).ready(function () {
    $("#string").keyup(function () {
        setInterval(doRequest(), 100)
    });
    $("body,html").css("background", randomColour())
});