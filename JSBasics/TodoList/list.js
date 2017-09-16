var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
    // handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete") {
        deleteTodo();
    }
    // Ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
    console.log("*****************************");
    for(var todoIndex in todos) {
        console.log(todoIndex + ": " + todos[todoIndex]);
    }
    console.log("*****************************");
}

function addTodo() {
    // Ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
    console.log(newTodo + " has been added");
}

function deleteTodo() {
    // Ask for index of todo to be deleted
    var index = prompt("Enter the index of todo to delete");
    // delete that todo
    todos.splice(index, 1);
    console.log("Deleted Todo");
}