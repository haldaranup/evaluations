let cart = localStorage.getItem("cart");

if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(cart);
}



let contain = document.getElementById("cart")

cart.forEach(function (p){

  let div = document.createElement("div")
  let name = document.createElement("p")
  name.textContent = p.strMeal

  let image = document.createElement("img")
  image.src = p.strMealThumb

div.append(name, image)
contain.append(div)
})
