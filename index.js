const container = document.querySelector(".kategori_grid");
const endpoint = `https://kea-alt-del.dk/t7/api/categories`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  let markup = "";

  data.forEach((item) => {
    markup += `
      <a href="produktliste.html?category=${item.category}">
        <article class="kategori_card">
          <h3 class="cards_title">${item.category}</h3>
        </article>
      </a>
    `;
  });

  container.innerHTML = markup;
}

getData();
