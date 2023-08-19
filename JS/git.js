const render = () => {

  root.innerHTML = "";

  for (const plant of plants) {

    const template = `
          <section class="plant" >
              <img src="./CSS/Images/${plant.imgSrc}">
                  <div class="card">
                       <h5 class="pt-4"> Name: ${plant.name}</h6>
                       <h6 class="pt-4"> Light: ${plant.Light}</h6>
                       <h6 class="pt-4"> Water: ${plant.Water}</h6>
                       <h6 class="pt-4"> Price: ${plant.price}</h6>
                       ${Basket.find((phrchase) => phrchase.id === plant.id)
          ? `<button onclick="" class="primary">AVAILABLE IN CART</button>`
          : `<button onclick="addToCart(${plant.id})">SHOP NOW</button>`
        }
                  </div>  
          </section>
          `
          ;

          root.innerHTML += template;
      
        }
      
      };
  function renderBasket(plantslist) {
    body.innerHTML = `
    <div class="basket d-flex justify-content-between align-items-center">
    <a class="basket__home" href="./index.html">Home</a>
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
          <img src="./CSS/Images/${imgSrc}">
          <div class="d-flex justify-content-between align-items-center">
             <h5 class="m-3"> Name: ${name}</h5>
             <h5 class="m-3"> Product: ${name}</h5>
             <h6 class="m-3"> Price: ${price}</h6>
             <button class="m-5" onclick="removeFromBasket(${id})">REMOVE</button>
          </div>  
        </li>
      </div>
        `
        ;
    }).join("");
    body.innerHTML += template;
    body.innerHTML += `
    <div class="pay">
    <button>Final Payment</button>
    </div>
    `;
    updateBasketCounter();
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
    value.textContent = Basket.length;
    render(plants);
  };