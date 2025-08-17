"use strict";
const input = document.getElementById("inputtasks");
const addtodo = document.getElementById("addtodo");
const tasksul = document.getElementById("tasks");
;
;
let nextId = 1;
addtodo.addEventListener("click", (event) => {
    const task = input.value.trim();
    if (!task) {
        return undefined;
    }
    const todos = { id: nextId++, text: task };
    const li = document.createElement("li");
    li.innerHTML = `${todos.id} : ${todos.text}`;
    tasksul.appendChild(li);
    li.addEventListener("click", () => { tasksul.removeChild(li); });
    input.value = "";
});
//# sourceMappingURL=main.js.map