const input = document.getElementById("inputtasks") as HTMLInputElement;
const add = document.getElementById("addtodo") as HTMLButtonElement;
const ul = document.getElementById("tasks") as HTMLUListElement;
interface proto { id: number }; interface newt extends proto { text: string };
let nextid = 1;
add.addEventListener("click", (): void => {
  const task = input.value.trim(); if (!task) { return undefined };
  const todos: newt = { id: nextid++, text: task };

  const uul = document.createElement("li") as HTMLLIElement;
  ul.appendChild(uul); uul.innerHTML = `${todos.id} : ${todos.text}`;
  uul.addEventListener("click", (): void => { ul.removeChild(uul); }); input.value = "";
})

// reusable submit function added
function submitconfig(event: KeyboardEvent) { if (event.key === "Enter") { add.click(); } }
input.addEventListener("keydown", submitconfig);