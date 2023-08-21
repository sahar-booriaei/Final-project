
// functions 


function render(plantslist) {
  const template = plantslist.slice(start, end).map(plant => {
    const { id, name, Light, Water, price, imgSrc } = plant;
    return `
      <section class="plant" >
          <img class="plant__img" src="./CSS/Images/${imgSrc}">
              <div class="card">
                   <h5 class="pt-4"> Name: ${name}</h6>
                   <h6 class="pt-4 card__content"> Light: ${Light}</h6>
                   <h6 class="pt-4 card__content"> Water: ${Water}</h6>
                   <h6 class="pt-4 card__content"> Price:$ ${price}</h6
                   <button class="card__button">${getButton(id)}</button
              </div>  
      </section>
      `
      ;
  }).join("");
  root.innerHTML = template;
}


function getButton(id) {
  if (Basket.find((purchase) => purchase && purchase.id === id)) {
    return `<button class="primary">AVAILABLE IN CART</button>`;
  } else {
    return `<button class="card__button" onclick="addToCart(${id})">SHOP NOW</button>`;
  }
}


function renderBasket(plantslist) {
  // let counters = document.querySelectorAll('.counter');
  //         counters.forEach(counter => {
  //           counter.addEventListener('change', function(event) {
  //             let priceSum = event.target.parentElement.querySelector(".priceSum");
  //             let quantity = Number(event.target.value);
  //             let price = Number(event.target.getAttribute('data-price'));
  //             let totalPrice = quantity * price;
  //             priceSum.textContent = `$ ${totalPrice}.00`;
  //   });
  // });
  // <label for="count">Quantity: </label>
  // <input class="counter" type="number" name="count" min="1" max="15" value="1" data-price="${price}">
  // <span class="priceSum"></span>
  body.innerHTML = `
  <div class="basket d-flex justify-content-between align-items-center">
  <a class="basket__home" href="./index.html">Home</a>
  <span>${totalPrice.textContent = `$ ${totalSum}.00`}</span>
  <a class="basket__a" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
    <span class="value">0</span>
  </a>
  `;
  const template = plantslist.map(plant => {
    const { id, name, Light, Water, price, imgSrc } = plant;
    return `
    <div class="basketData d-flex justify-content-center align-items-center">
      <li class="basketItem" >
        <img class="basketItem__img" src="./CSS/Images/${imgSrc}">
        <div class="basketItem__content d-flex justify-content-between align-items-center">
           <h5 class="m-3"> Product: ${name}</h5>
           <h6 class="m-3"> Price: ${price}</h6>
           ${removeButton(id)}
        </div>  
      </li>
    </div>
      `
      ;

  }).join("");
  body.innerHTML += template;
  body.innerHTML += `
  <div class="pay">
  <button class="pay__button">Final Payment</button>
  </div>
  `;
  updateBasketCounter();
}


function removeButton(id) {
  if (Basket.find((purchase) => purchase.id === id)) {
    return `<button class="basketItem__content--button m-5" onclick="removeFromBasket(${id})">REMOVE</button>`;
  }
}


const addToCart = (id) => {
  let selectedPlant = plants.find((plant) => plant.id === id);
  Basket.push(selectedPlant);
  totalSum += Number(selectedPlant.price);
  totalPrice.textContent = `$ ${totalSum}.00`;
  localStorage.setItem("totalSum", JSON.stringify(totalSum));
  localStorage.setItem("Basket", JSON.stringify(Basket));
  updateBasketCounter();
  render();
}



const removeFromBasket = (id) => {
  let index = Basket.findIndex((plant) => plant.id === id);
  let selectedPlant = Basket.find((plant) => plant.id === id);
  if (index !== -1) {
    Basket.splice(index, 1);
    localStorage.setItem("Basket", JSON.stringify(Basket));
    totalSum -= Number(selectedPlant.price);
    totalPrice.textContent = `$ ${totalSum}.00`;
    localStorage.setItem("totalSum", JSON.stringify(totalSum));
    updateBasketCounter();
    renderBasket(Basket);
  }
};



const updateBasketCounter = () => {
  let value = document.querySelector(".value");
  value.textContent = Basket.length;
  render(plants);
};

