const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const container = document.querySelector(".produkt_grid");
function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  console.log(json);
  container.innerHTML = `
 <section class="produkt_grid">
        <div class="produkt_img">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp" alt="" />
        </div>
        <div class="produkt_info">
          <h2>${json.productdisplayname}</h2>
         ${
           json.discount
             ? `
          <p class="produkt-pris gammel-pris">${json.price} DKK</p>
          <p class="ny-pris">
         ${Math.round(json.price - (json.price * json.discount) / 100)} DKK
          </p>
          <p class="rabat-badge">-${json.discount}%</p>
         `
             : `
          <p class="produkt-pris">${json.price} DKK</p>
          `
         }
          <p class="produkt_text">
            ${json.description}
          </p>
          <img
            class="add_to_cart"
            src="img/logo_icons/shopping-cart-add.svg"
            alt=""
          />
        </div>
  </section>`;
}
getData();
