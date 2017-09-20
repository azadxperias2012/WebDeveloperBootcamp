// $("div").fadeOut();

// $("button").click(function() {
//     $("div").fadeOut(1000);
//     console.log("Fade Completed!");
// });

// $("button").click(function() {
//     $("div").fadeOut(1000, function() {
//         // remove the element from DOM
//         $(this).remove();
//         console.log("Fade Completed!");
//     });
// });

$("#fadeOut").click(function() {
    $("div").fadeOut(1000);
});

$("#fadeIn").click(function() {
    $("div").fadeIn(1000);
});

$("#fadeToggle").click(function() {
    $("div").fadeToggle(1000);
});

$("#slide").click(function() {
    // $("div").slideDown(1000);
    // $("div").slideUp(1000);
    $("div").slideToggle(1000);
});