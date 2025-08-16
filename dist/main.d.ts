type Task = {
    id: number;
    title: string;
    completed: boolean;
};
declare const taskInput: HTMLInputElement;
declare const addBtn: HTMLButtonElement;
declare const taskList: HTMLUListElement;
declare let tasks: Task[];
declare let taskId: number;
declare function addTask(title: string): void;
declare function toggleTask(id: number): void;
declare function deleteTask(id: number): void;
declare function renderTasks(): void;
//# sourceMappingURL=main.d.ts.map