let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`;

async function products() {
  try {
    let pro = await fetch(url);
    let data = pro.json();
    renderProducts(data);
  } catch (error) {
    return "error";
  }
}
products();
console.log(products());

//   function fetchData(res) {
//     return fetch(url)
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (res) {
//         return res;
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }

let cart = localStorage.getItem("cart");

if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(cart);
}

// Name, image, price and add to cart button.

function renderProducts(pro) {
  let menu = document.getElementById("menu");
  menu.innerHTML = "";
  pro.forEach(function (p) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.textContent = p.strMeal;

    let image = document.createElement("img");
    image.src = p.strMealThumb;

    let cartbtn = document.createElement("button");
    cartbtn.textContent = "Add to Cart";

    cartbtn.addEventListener("click", function (){
        addtocart(p)
    })

    div.append(name, image, cartbtn);
    menu.append(div);
  });
  function addtocart(p){
      let cart = localStorage.getItem("cart")
      cart.push(p)
      localStorage.setItem("cart", JSON.stringify(cart))
  }
}
