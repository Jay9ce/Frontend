data.map((data, i) => {
  let starRating = "";

  new Array(1, 2, 3, 4, 5).map((num, i) => {
    console.log(Math.round(data.rating), num);
    starRating +=
      Math.round(data.rating) < num
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
})