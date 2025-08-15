"use strict";
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["Done"] = "Done";
})(Status || (Status = {}));
let todos = [];
let idCounter = 1;
function addTodo(title) {
    todos.push({ id: idCounter++, title, status: Status.Pending });
}
function completeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo)
        todo.status = Status.Done;
}
function showTodos() {
    console.log("=== Todo List ===");
    todos.forEach(todo => {
        console.log(`${todo.id}. ${todo.title} - ${todo.status}`);
    });
}
// Example usage:
addTodo("Learn TypeScript basics");
addTodo("Practice enums");
showTodos();
completeTodo(1);
showTodos();
//# sourceMappingURL=main.js.map