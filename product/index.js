// Send a POST request
const productContainer = document.getElementById("product-cards");

axios({
  method: "get",
  url: "https://dummyjson.com/products",
})
  .then((res) => {
    console.log(res);
    displayProducts(res.data.products);
  })
  .catch((err) => {
    console.log(err);
  });

function displayProducts(products) {
  products.map((product, i) => {
    let starRating = "";

    new Array(1, 2, 3, 4, 5).map((num, i) => {
      console.log(Math.round(product.rating), num);
      starRating +=
        Math.round(product.rating) < num
          ? `<svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
        fill="#D9D9D9"
      />
    </svg>`
          : `<svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
        fill="#F5C64D"
      />
    </svg>`;
    });

    productContainer.innerHTML += `
      <a href="/product.html?id=${product.id}">
        <div id="product-card">
        <img src="${product.thumbnail}" alt="img" />
        <h3>${product.title}</h3>
        <p class="category">Category: ${product.category}</p>
        <div class="price">
          <p>$567</p>
          <p style="font-size:15px;color: #FF1313;text-decoration: line-through;margin: auto 15px;">$1000</p>
        </div>
        <div class="footer">
          <div class="rating">
            ${starRating}
          </div>
          <p class="rating-text" style="margin: auto 0;">${product.rating}</p>
        </div>
      </div>
      </a>  
        `;
  });
}