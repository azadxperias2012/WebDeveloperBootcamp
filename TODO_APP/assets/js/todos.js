// Check Off Specific Todos By Clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event) {
    // here this refers to 'span' element
    $(this).parent().fadeOut(500, function() {
        // here this refers to 'li' element
        $(this).remove();
    });
    // $(this).parent().remove();
    // to stop bubbling of this event to parent
    event.stopPropagation();
});