// dom nodes
const root = document.getElementById("root");
let Basket = [];
let body = document.getElementById("body")
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let start = 0;
let end = 4;
// events
one.addEventListener("click", () => {
  one.classList.add("active")
  two.classList.remove("active")
  three.classList.remove("active")
  four.classList.remove("active")
  five.classList.remove("active")
  start = 0;
  end = 4;
  render(plants);
})
two.addEventListener("click", () => {
  one.classList.remove("active")
  two.classList.add("active")
  three.classList.remove("active")
  four.classList.remove("active")
  five.classList.remove("active")
  start = 4;
  end = 8;
  render(plants);
})
three.addEventListener("click", () => {
  one.classList.remove("active")
  two.classList.remove("active")
  three.classList.add("active")
  four.classList.remove("active")
  five.classList.remove("active")
  start = 8;
  end = 12;
  render(plants);
})
four.addEventListener("click", () => {
  one.classList.remove("active")
  two.classList.remove("active")
  three.classList.remove("active")
  four.classList.add("active")
  five.classList.remove("active")
  start = 12;
  end = 16;
  render(plants);
})
five.addEventListener("click", () => {
  one.classList.remove("active")
  two.classList.remove("active")
  three.classList.remove("active")
  four.classList.remove("active")
  five.classList.add("active")
  start = 16;
  end = 20;
  render(plants);
})


let BasketStore = localStorage.getItem("Basket");
Basket = JSON.parse(BasketStore);
// updateBasketCounter();

window.addEventListener("load", () => {
  render(plants);
});