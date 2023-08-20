
// dom nodes
const root = document.getElementById("root");
let Basket = [];
let body = document.getElementById("body");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let totalPrice = document.querySelector(".totalPrice");
let totalSum;
totalPrice.textContent = totalSum;
let start = 0;
let end = 4;
let button;



window.onload = function () {
  let BasketStore = localStorage.getItem("Basket");
  Basket = BasketStore ? JSON.parse(BasketStore) : [];
  console.log(totalSum)
  let priceCount = localStorage.getItem("totalSum");
  totalSum = priceCount ? JSON.parse(priceCount) : 0;
  totalPrice.textContent = `$ ${totalSum}.00`;
  updateBasketCounter();
}

// clear localStorage
// let BasketStore = localStorage.clear()
// let BasketStore = localStorage.getItem("Basket");
// Basket = BasketStore ? JSON.parse(BasketStore) : [];
// let priceCount = localStorage.getItem("totalSum");
// totalSum = priceCount ? JSON.parse(priceCount) : 0;
// debugger;
// updateBasketCounter();


// window.onload = function () {
//   let BasketStore = localStorage.getItem("Basket");
//   Basket = BasketStore ? JSON.parse(BasketStore) : [];
//   console.log(totalSum)
//   let priceCount = localStorage.getItem("totalSum");
//   totalSum = priceCount ? JSON.parse(priceCount) : 0;
//   totalPrice.textContent = totalSum;
//   updateBasketCounter();
// }

// if (totalSum && Array.isArray(totalSum)) {
//   let sum = 0;
//   for (let i = 0; i < totalSum.length; i++) {
//     sum += parseInt(totalSum[i]);
//   }
//   // display sum
// }

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



window.addEventListener("load", () => {
  render(plants);
});



