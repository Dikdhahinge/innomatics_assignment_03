const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://www.google.com/imgres?q=air%20shoes&imgurl=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fnike-mens-footwear-23-07-2021-592-239598626-vhqbv.png&imgrefurl=https%3A%2F%2Fwww.justdial.com%2Fjdmart%2FBegusarai%2FNike-Mens-Air-More-Uptempo-96-Shoe-WhiteWhiteVarsity-Red%2Fpid-239598626%2F9999P6243-6243-181002032718-X3E5&docid=UzEkuEZj6f7ZFM&tbnid=PsuQMP8IRiEW0M&vet=12ahUKEwixqeXwrLiLAxXw8zgGHWk7N0AQM3oECEYQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwixqeXwrLiLAxXw8zgGHWk7N0AQM3oECEYQAA",
      },
      {
        code: "darkblue",
        img: "https://www.google.com/imgres?q=dark%20blue%20nike%20shoes&imgurl=https%3A%2F%2Fassets.myntassets.com%2Fdpr_1.5%2Cq_60%2Cw_400%2Cc_limit%2Cfl_progressive%2Fassets%2Fimages%2F16273972%2F2024%2F8%2F5%2F5aff1008-8847-4695-862e-c5628ed3a1c21722840485367-Nike-Men-Solid-Revolution-6-Next-Nature-Road-Running-Shoes-3-1.jpg&imgrefurl=https%3A%2F%2Fwww.myntra.com%2Fnike-men-navy-blue-shoes&docid=nAII-23Loupa2M&tbnid=BF2I_8GYEB1cJM&vet=12ahUKEwjJg-G0rbiLAxX0s1YBHV2tEZgQM3oECBsQAA..i&w=600&h=800&hcb=2&ved=2ahUKEwjJg-G0rbiLAxX0s1YBHV2tEZgQM3oECBsQAA",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.soleretriever.com%2Fnews%2Farticles%2Fair-jordan-2-retro-white-crystal-mint-metallic-red-bronze-release-date-fall-2023&psig=AOvVaw1S35ce64X0o9HukgbOdBZA&ust=1739251169670000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKidt9WtuIsDFQAAAAAdAAAAABAE",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://www.google.com/imgres?q=.%2Fimg%2Fjordan2.png&imgurl=https%3A%2F%2Fwww.swiftsole.app%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.swiftsole.app%252Freleases%252Fuploads%252F9ffd132d-e8bb-49ad-b2c2-0bd8d0f02936_ggwq0zR2k.png%26w%3D3840%26q%3D30&imgrefurl=https%3A%2F%2Fwww.swiftsole.app%2Freleases%2Fclgslkazo012dmc0uux8rfraz&docid=CyxFiBvL5sGyrM&tbnid=yTtamf0X966YGM&vet=12ahUKEwiN2rHRrbiLAxXT1zQHHdc2Fo8QM3oECDkQAA..i&w=814&h=468&hcb=2&ved=2ahUKEwiN2rHRrbiLAxXT1zQHHdc2Fo8QM3oECDkQAA",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
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

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
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