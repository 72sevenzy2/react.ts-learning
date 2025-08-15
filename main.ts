enum Status {
    Pending = "Pending",
    Done = "Done"
}

interface Todo {
    id: number;
    title: string;
    status: Status;
}

let todos: Todo[] = [];
let idCounter = 1;

function addTodo(title: string): void {
    todos.push({ id: idCounter++, title, status: Status.Pending });
}

function completeTodo(id: number): void {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.status = Status.Done;
}

function showTodos(): void {
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