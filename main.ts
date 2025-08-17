const input = document.getElementById("inputtasks") as HTMLInputElement;
const addtodo = document.getElementById("addtodo") as HTMLButtonElement;
const tasksul = document.getElementById("tasks") as HTMLUListElement;

interface baset { id: number; }; interface newt extends baset { text: string; };
let nextId: number = 1;
addtodo.addEventListener("click", (event): void => {
  const task = input.value.trim(); if (!task) { return undefined; }
  const todos: newt = { id: nextId++, text: task }; const li = document.createElement("li");
  li.innerHTML = `${todos.id} : ${todos.text}`; tasksul.appendChild(li);
  li.addEventListener("click", (): void => { tasksul.removeChild(li) }); input.value = "";
});