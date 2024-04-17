console.log(window.location.href)
const url = new URL(window.location.href)

const id = url.searchParams.get('id')
const productContainer = document.getElementById('new-product')

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

displayProducts()