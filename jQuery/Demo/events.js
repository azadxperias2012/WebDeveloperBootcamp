$("h1").click(function() {
    alert("h1 clicked");
});

$("button").click(function() {
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").keypress(function(event) {
    if(event.which === 13) {
        var text = $(this).val();
        console.log("YOU HIT ENTER, text : " + text);
    }
});