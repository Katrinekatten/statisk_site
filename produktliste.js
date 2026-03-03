const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);
const container = document.querySelector(".produktliste_grid");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  console.log();
  let markup = "";
  json.forEach((product) => {
    markup += `
 <a href="produkt.html?id=${product.id}">
          <article
            class="produkt-card"
            style="
              background-image: url(https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp);
            "
          >
            <div class="produkt-badges">
              <p class="udsolgt-badge">UDSOLGT</p>
              <p class="rabat-badge">-${product.discount}%</p>
            </div>
            <div class="produkt-content">
              <h3 class="produkt-title">${product.productdisplayname}</h3>
              <p class="produkt-pris">${product.price}</p>
              <button class="produkt-button">Se mere</button>
            </div>
          </article></a
        >
`;
  });
  container.innerHTML = markup;
}

getData();
