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

const id = localStorage.getItem("id");
console.log("id:-", id);
productDetails = {};

function filterData() {
  productDetails = electronics.find((item, i) => i === Number(id));
  console.log("********", productDetails);
}
filterData();

let electroParent = document.getElementById("electroparent");
electroParent.innerHTML += `
 <div class="product-details">
            <div class="product_image">
                <img id="checkjack"
                    src=${productDetails.image}
                    alt="Product Image">
                <button class="add-to-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Add to
                    Cart</button>
                <button class="buy-now"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp; Buy Now</button>
            </div>
            <div class="product-info">
                <h1>Product name</h1>
                <p>${productDetails.name}</p> 
                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i>$${productDetails.actualPrice}</p>
                <p>Available Offers</p>

                <p><i class="fa fa-tag" aria-hidden="true"></i>Lorem ipsum,laudantium odio similique repellat ut
                    .voluptatibus natus!<span>T&C</span></p>
                <p><i class="fa fa-tag" aria-hidden="true"></i>Lorem ipsum,laudantium odio similique repellat ut
                    voluptatibus natus!<span>T&C</span></p>
                <p><i class="fa fa-tag" aria-hidden="true"></i>Lorem ipsum,laudantium odio similique repellat ut
                    .voluptatibus natus!<span>T&C</span></p>
                <p><span>View 18 more offers</span></p>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus nostrum
                    magnam debitis, veritatis minus tempore iure molestias optio totam voluptatum omnis quod cupiditate
                    nesciunt quaerat expedita. Sit, laudantiu Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident sequi consequatur nulla iste eaque laudantium dicta maiores delectus vitae accusamus
                    praesentium perspiciatis incidunt modi quibusdam, quo nemo quam voluptatem voluptates!</minus>
                </p>
                <div class="Quantity">
                    <span>quantity:${productDetails.qty}</span>
                    <input type="number" min="1" max="100" value="1">
                </div>
            </div>
            <!-- userreview -->

            <iframe src="review.html" frameborder="0"></iframe>
        </div>

`;
