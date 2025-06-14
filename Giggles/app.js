const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "COOKIES",
    price: 28,
    colors: [
      {
        code: "black",
        img: "./img/products/red velvet cookies.jpg",
      },
      {
        code: "darkblue",
        img: "./img/products/m and m cookies.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "MUFFINS",
    price: 25,
    colors: [
      {
        code: "lightgray",
        img: "./img/products/coffee muffin.png",
      },
      {
        code: "green",
        img: "./img/products/corn muffin.webp",
      },
    ],
  },
  {
    id: 3,
    title: "CAKES",
    price: 199,
    colors: [
      {
        code: "lightgray",
        img: "./img/products/rainbow cake.jpg",
      },
      {
        code: "green",
        img: "./img/products/strawberry vanilla cake.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "ICE CREAMS",
    price: 28,
    colors: [
      {
        code: "black",
        img: "./img/products/strawberry ice cream.jpg",
      },
      {
        code: "lightgray",
        img: "./img/products/cookies and cream ice cream.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".colors");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});