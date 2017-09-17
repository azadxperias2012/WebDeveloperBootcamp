var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var isBlue= false;

setInterval(function() {
    if(isBlue) {
        body.style.background = "white";
        h1.style.color = "black";
    } else {
        body.style.background = "#3498db";
        h1.style.color = "pink";
    }
    isBlue = !isBlue;
}, 1000);
