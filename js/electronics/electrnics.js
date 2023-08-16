const electronics = [
  {
    discount: "10%",
    image:
      "https://rukminim2.flixcart.com/image/416/416/kah413k0/printer/k/f/g/brother-hl-l2321d-ind-original-imafsffc6q5bfym4.jpeg?q=70",
    name: "Printer",
    actualPrice: 4500,
    discountPrice: 4000,
    qty: 2,
  },

  {
    discount: "20%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6M6Ae8C1-rGB5nfEvJPRgrfe8rfjnA_07ocu1a0B26tAJFk0LIFE9G29JOCLMXcM7p0&usqp=CAU",
    name: "Vivo",
    actualPrice: 3500,
    discountPrice: 4500,
    qty: 5,
  },
  {
    discount: "30%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlp_aI8kcR_h4YTvvD8xyhDQLS3lhEw7G9w&usqp=CAU",
    name: "Samsung",
    actualPrice: 1500,
    discountPrice: 64000,
    qty: 13,
  },
  {
    discount: "40%",
    image:
      "https://www.jiomart.com/images/product/original/rvacjuil7u/nokia-105-dual-sim-keypad-mobile-phone-with-wireless-fm-radio-charcoal-product-images-orvacjuil7u-p602663761-0-202306251015.jpg?im=Resize=(420,420)",
    name: "Nokia",
    actualPrice: 7500,
    discountPrice: 1000,
    qty: 34,
  },
];

let ElectronicsItem = document.getElementById("electronics");
let a = 20;
ElectronicsItem.innerHTML = electronics.map((x, i) => {
  return `
        <div class="box-container">

                <div class="box">
                    <span class="discount">${x.discount}</span>
                    <div class="image" onclick="ProductDetails(${i})">
                        <a href="electro1.html">
                            <img src=${x.image}
                                alt=""></a>
                        <div class="icons">
                            <a href="http://127.0.0.1:5500/home.html#"><i class="fa fa-heart"
                                    aria-hidden="true"></i></a>
                            <a href="http://127.0.0.1:5500/home.html#" class="cart-btn"> add to cart</a>
                            <a href="http://127.0.0.1:5500/home.html#"><i class="fa fa-share"
                                    aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>${x.name}</h3>
                        <div class="price">$${x.actualPrice}<span>$${x.discountPrice}</span></div>
                    </div>
                </div>
            </div>
        
        `;
});

const ProductDetails = (x) => {
  window.localStorage.setItem("id", x);
};
