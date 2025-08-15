declare enum Status {
    Pending = "Pending",
    Done = "Done"
}
interface Todo {
    id: number;
    title: string;
    status: Status;
}
declare let todos: Todo[];
declare let idCounter: number;
declare function addTodo(title: string): void;
declare function completeTodo(id: number): void;
declare function showTodos(): void;
//# sourceMappingURL=main.d.ts.map