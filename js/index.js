let data = document.getElementById("dynamicData");


let product = [

    {
        name: "Mathemathics",
        price: "999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Physics",
        price: "88",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    }, {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
    {
        name: "Mathemathics",
        price: "&999",
        discount: "77%",
        images: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",

    },
]
const handleAdd = () => {
    data.innerHTML = product.map((x) => (

        `
   

   <div class="box-container">
   <div class="box">
       <span class="discount">${x.discount}</span>
       <div class="image">
           <img src=${x.images} alt="">
           <div class="icons">
               <a href="http://127.0.0.1:5500/home.html#"><i class="fa fa-heart"
                       aria-hidden="true"></i></a>
               <a href="http://127.0.0.1:5500/home.html#"> add to cart</a>
               <a href="http://127.0.0.1:5500/home.html#"><i class="fa fa-share"
                       aria-hidden="true"></i></a>
           </div>
       </div>
       <div class="content">
           <h3>${x.name} </h3>
           <div class="price"> ${x.discount}<span> ${x.discount}</span></div>
       </div>
   </div>
</div>
   
   `
    ))
}

handleAdd();