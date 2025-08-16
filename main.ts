// Define a Task type
type Task = { id: number; title: string; completed: boolean; };
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

let tasks: Task[] = []; let taskId = 1;

// Add task function
function addTask(title: string) {
  if (!title) return;
  const newTask: Task = { id: taskId++, title, completed: false };
  tasks.push(newTask);
  renderTasks();
  taskInput.value = "";
}

// Toggle complete
function toggleTask(id: number) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  renderTasks();
}

// Delete task
function deleteTask(id: number) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

// Render tasks to DOM
function renderTasks(): void {
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
      const id = parseInt((btn as HTMLButtonElement).dataset.id!);
      toggleTask(id);
    });
  });

  document.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt((btn as HTMLButtonElement).dataset.id!);
      deleteTask(id);
    });
  });
}

// Event listener
addBtn.addEventListener("click", () => addTask(taskInput.value));

// Optional: add task on Enter
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask(taskInput.value);
});
