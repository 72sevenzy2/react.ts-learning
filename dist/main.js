"use strict";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];
let taskId = 1;
// Add task function
function addTask(title) {
    if (!title)
        return;
    const newTask = { id: taskId++, title, completed: false };
    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
}
// Toggle complete
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task)
        task.completed = !task.completed;
    renderTasks();
}
// Delete task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}
// Render tasks to DOM
function renderTasks() {
    taskList.innerHTML = ""; // Clear list
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
      <span style="text-decoration: ${task.completed ? "line-through" : "none"}">${task.title}</span>
      <button data-id="${task.id}" class="completeBtn">✔</button>
      <button data-id="${task.id}" class="deleteBtn">✖</button>
    `;
        taskList.appendChild(li);
    });
    // Add event listeners for new buttons
    document.querySelectorAll(".completeBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            toggleTask(id);
        });
    });
    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            deleteTask(id);
        });
    });
}
// Event listener
addBtn.addEventListener("click", () => addTask(taskInput.value));
// Optional: add task on Enter
taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter")
        addTask(taskInput.value);
});
//# sourceMappingURL=main.js.map