const root = document.getElementById("root");

function render(plantslist) {
    const template = plantslist.map((plant, index) => {
      const { id, name, Light, Water, price, imgSrc } = plant;
      return `
        <section class="plant" >
            <img src="./CSS/Images/${imgSrc}">
                <div class="card">
                     <h5 class="pt-4"> Name: ${name}</h5>
                     <h5 class="pt-4"> Light: ${Light}</h5>
                     <h5 class="pt-4"> Water: ${Water}</h5>
                     <h5 class="pt-4"> Price: ${price}</h5>
                     <button onclick="addToCart()">SHOP NOW</button>
                </div>  
        </section>
        `;
    }).join("");
    root.innerHTML += template;
  }
  
  
window.addEventListener("load", () => {
    render(plants);});



