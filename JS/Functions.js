
// functions 

function render(plantslist) {
  const template = plantslist.slice(start, end).map(plant => {
    const { id, name, Light, Water, price, imgSrc } = plant;
    return `
        <section class="plant" >
            <img src="./CSS/Images/${imgSrc}">
                <div class="card">
                     <h5 class="pt-4"> Name: ${name}</h6>
                     <h6 class="pt-4"> Light: ${Light}</h6>
                     <h6 class="pt-4"> Water: ${Water}</h6>
                     <h6 class="pt-4"> Price: ${price}</h6>
                     ${Basket.find((phrchase) => phrchase.id === id)
        ?
        `<button onclick="" class="primary">موجود در سبد </button>`
        :
        `<button onclick="addToCart(${id})">SHOP NOW</button>`
      }
                </div>  
        </section>
        `
      ;
  }).join("");

  root.innerHTML = template;
}


function renderBasket(plantslist) {
  body.innerHTML = "";
  const template = plantslist.map(plant => {
    const { id, name, Light, Water, price, imgSrc } = plant;
    return `
      <li class="basketItem" >
      <img src="./CSS/Images/${imgSrc}">
      <div class="card">
           <h5 class="pt-4"> Name: ${name}</h6>
           <h6 class="pt-4"> Light: ${Light}</h6>
           <h6 class="pt-4"> Water: ${Water}</h6>
           <h6 class="pt-4"> Price: ${price}</h6>
           <button onclick="removeFromBasket(${id})">REMOVE</button>
      </div>  
      </li>
      `
      ;
  }).join("");

  body.innerHTML += template;
}


const addToCart = (id) => {
  let selectedPlant = plants.find((plant) => plant.id === id);
  Basket.push(selectedPlant);
  localStorage.setItem("Basket", JSON.stringify(Basket));
  updateBasketCounter();
  render();
};



const removeFromBasket = (id) => {
  let index = Basket.findIndex((plant) => plant.id === id);
  Basket.splice(index, 1);
  localStorage.setItem("Basket", JSON.stringify(Basket));
  updateBasketCounter();
  renderBasket(Basket);
};



const updateBasketCounter = () => {
  let value = document.querySelector(".value");
  // value.textContent = Basket.length;
};