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
        <div>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp" alt="" />
        </div>
        <div class="produkt_info">
          <h2>${json.productdisplayname}</h2>
          <p class="produkt-pris">${json.price} DKK</p>
          <p class="produkt_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ipsa eaque nesciunt libero a tempora ab tempore ducimus explicabo
            autem cumque cum, soluta odio aut, minima modi esse molestias sunt!
          </p>
          <img
            class="add_to_cart"
            src="img/logo_icons/shopping-cart-add.svg"
            alt=""
          />
          <div class="accordion">
            <button class="accordion-btn">Produktbeskrivelse</button>
            <div class="accordion-content">
              <p>Her står produktbeskrivelsen...</p>
            </div>
          </div>

          <div class="accordion">
            <button class="accordion-btn">Specifikationer</button>
            <div class="accordion-content">
              <p>Materiale, mål osv...</p>
            </div>
          </div>
        </div>
      </section>`;
}
getData();
