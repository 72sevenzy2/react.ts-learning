"use strict";
const input = document.getElementById("inputtasks");
const add = document.getElementById("addtodo");
const ul = document.getElementById("tasks");
;
;
let nextid = 1;
add.addEventListener("click", () => {
    const task = input.value.trim();
    if (!task) {
        return undefined;
    }
    ;
    const todos = { id: nextid++, text: task };
    const uul = document.createElement("li");
    ul.appendChild(uul);
    uul.innerHTML = `${todos.id} : ${todos.text}`;
    uul.addEventListener("click", () => { ul.removeChild(uul); });
    input.value = "";
});
// reusable submit function added
function submitconfig(event) { if (event.key === "Enter") {
    add.click();
} }
input.addEventListener("keydown", submitconfig);
//# sourceMappingURL=main.js.map