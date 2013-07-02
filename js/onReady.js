function randomColour() {
    var letters = '0123456789ABCD'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 13)]
    }
    return color
}

function showAside() {
	if ($("aside").is(":hidden")) {
		$("aside").fadeIn(500);
	} else {
		$("aside").fadeOut(500);
	}
}

function doRequest() {
    var text = $("#string").val();
    $("#md5").val(md5(text))
}

function age(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

$(document).ready(function () {

    $("#string").keyup(function () {
        setInterval(doRequest(), 100)
    });
    
    $("body,html").css("background", randomColour())
    
    $(".age").text(age("1995-11-10"));  
      
});