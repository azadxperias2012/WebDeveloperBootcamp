// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    // here this refers to 'span' element
    $(this).parent().fadeOut(500, function() {
        // here this refers to 'li' element
        $(this).remove();
    });
    // to stop bubbling of this event to parent
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // grab new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");        
    }
});