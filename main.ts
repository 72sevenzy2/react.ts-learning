const button = document.getElementById("btnclick") as HTMLButtonElement;
const adding = document.getElementById("btnadd") as HTMLParagraphElement;
const buttondec = document.getElementById("btnclickdec") as HTMLButtonElement;
const buttonres = document.getElementById("btnclickres") as HTMLButtonElement;

interface Proto { count: number; reset: number; }
type omitreset = Omit<Proto, 'reset'>;
const obj: omitreset = { count: 0 };

button.addEventListener("click", () => {
  obj.count++;
  adding.innerHTML = obj.count.toString();
})

buttondec.addEventListener("click", () => {
  obj.count--;
  adding.innerHTML = obj.count.toString();
})

buttonres.addEventListener("click", () => {
  obj.count = 0;
  adding.innerHTML = obj.count.toString();
})