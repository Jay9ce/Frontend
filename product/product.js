console.log(window.location.href)
const url = new URL(window.location.href)

const id = url.searchParams.get('id')
const productContainer = document.getElementById('new-product')

//let category = data.category
const productContainer1 = document.getElementById(`product-suggestions`) 

async function getProducts() {
  console.log('Loading')
  try {
    const response = await axios({
      method: "get",
      url: `https://dummyjson.com/product/${id}`,
    });

    console.log(response)
    return response?.data
  } catch (error) {
    alert(error.message);
  }
  console.log('Done')

}

async function getProducts1() {
  console.log('Loading')
  try {
    const response = await axios({
      method: "get",
      url: `https://dummyjson.com/product/category/smartphones?limit=4`,
    });

    console.log(response)
    return response?.data.products
  } catch (error) {
    alert(error.message);
  }
  console.log('Done')

}


async function displayProducts() {
  const data = await getProducts()

  let images = ''
  data.images.map((img, i) => {
    images += `<img class="img1" src="${img}">`
  })

  productContainer.innerHTML += `

    <div class="product-img">
      <img class="thumbnail" src="${data.thumbnail}">
      <div class="slide-img">
      ${images}
      </div>
    </div>
    <div class="product-details">
      <h3>${data.title}</h3>
      <p class="description">${data.description}</p>
      <p class="brand">
      Brand: <span>${data.brand}</span>
      </p>
      <p class="category">Category: ${data.category}</p>
      <div class="price-tag">
        <p class="price">$${data.price}</p>
        <p class="percentage">${data.discountPercentage}</p>
      </div>
      <P class="stock">In stock: ${data.stock}</P>
      <div class="footer">
        <div class="rating">
          <svg
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
          </svg>

          <svg
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
          </svg>

          <svg
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
          </svg>

          <svg
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
          </svg>

          <svg
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
          </svg>
        </div>
        <p class="rating-text">${data.rating}</p>
      </div>
      <button>ADD TO CART</button>
    </div>
      
      `

}

async function displayProducts1() {
  const suggestions = await getProducts1()

  suggestions.map((suggestion, i) => {
    let starRating = "";

    new Array(1, 2, 3, 4, 5).map((num, i) => {
      console.log(Math.round(suggestion.rating), num);
      starRating +=
        Math.round(suggestion.rating) < num
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

  
  productContainer1.innerHTML += `
  <div class="suggestions">
  <img class="suggested-img" src="${suggestion.thumbnail}" alt="img" />
  <h3 style="font-size: 12px;">${suggestion.title}</h3>
  <div class="suggested-price">
    <p style="font-size: 11px;">$${suggestion.price}</p>
    <p style="font-size:10px;color: #FF1313;text-decoration: line-through;margin: auto 15px;">$${suggestion.discountPercentage}</p>
  </div>
  <div class="footer" style="width: fit-content; display: flex; gap: 60px;">
    <div class="rating">
      ${starRating}
    </div>
    <p class="rating-text" style="margin: auto 0;">${suggestion.rating}</p>
  </div>
</div>

  `
})
}

displayProducts()
displayProducts1()