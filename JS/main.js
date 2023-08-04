const root = document.getElementById("root");

function render(plantslist) {
    const template = plantslist.map((plant, index) => {
      const { id, name, Light, Water, price, imgSrc } = plant;
      return `
        <section class="plant" >
            <img src="./CSS/Images/${imgSrc}">
                <div class="card">
                     <h3> Name: ${name}</h3>
                     <h4> Light: ${Light}</h4>
                     <h4> Water: ${Water}</h4>
                     <h4> Price: ${price}</h4>
                     <button onclick="addToCart()">SHOP NOW</button>
                </div>  
        </section>
        `;
    }).join("");
    root.innerHTML += template;
  }
  
  
window.addEventListener("load", () => {
    render(plants);});



