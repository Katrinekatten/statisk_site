const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);
const container = document.querySelector(".produktliste_grid");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}&limit=30`;

const knapper = document.querySelectorAll("button");

console.log(knapper);

knapper.forEach((element) => element.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });
}
function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "Se alt") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    showProducts(udsnit);
  }
}
function showProducts(json) {
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
           ${product.soldout ? `<p class="udsolgt-badge">SoldOut</p>` : ""}
              ${product.discount ? `<p class="rabat-badge">-${product.discount}%</p>` : ""}
            </div>
            <div class="produkt-content">
              
              <h3 class="produkt-title">${product.productdisplayname}</h3>
              <p class="brand_sub">${product.brandname} | ${product.subcategory}</p><div class="pris-produktliste">
              <p class="produkt-pris">${product.price} DKK</p>
              <p class="produkt-pris-ny">Now <span>${Math.round(product.price - (product.price * product.discount) / 100)}<span> DKK<p>
              </div>
            </div>
          </article></a
        >
`;
  });
  container.innerHTML = markup;
}

getData();
