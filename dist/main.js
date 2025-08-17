"use strict";
const button = document.getElementById("btnclick");
const adding = document.getElementById("btnadd");
const buttondec = document.getElementById("btnclickdec");
const buttonres = document.getElementById("btnclickres");
const obj = { count: 0 };
button.addEventListener("click", () => {
    obj.count++;
    adding.innerHTML = obj.count.toString();
});
buttondec.addEventListener("click", () => {
    obj.count--;
    adding.innerHTML = obj.count.toString();
});
buttonres.addEventListener("click", () => {
    obj.count = 0;
    adding.innerHTML = obj.count.toString();
});
//# sourceMappingURL=main.js.map