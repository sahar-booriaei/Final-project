
// dom nodes
const root = document.getElementById("root");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let start = 0;
let end = 4;

// functions 

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
  debugger;
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


function render(plantslist) {
  const template = plantslist.slice(start, end).map((plant) => {
    const { id, name, Light, Water, price, imgSrc } = plant;
    return `
        <section class="plant" >
            <img src="./CSS/Images/${imgSrc}">
                <div class="card">
                     <h5 class="pt-4"> Name: ${name}</h6>
                     <h6 class="pt-4"> Light: ${Light}</h6>
                     <h6 class="pt-4"> Water: ${Water}</h6>
                     <h6 class="pt-4"> Price: ${price}</h6>
                     <button onclick="addToCart()">SHOP NOW</button>
                </div>  
        </section>
        `
      ;
  }).join("");

  root.innerHTML = template;
}

// events

window.addEventListener("load", () => {
  render(plants);
});



