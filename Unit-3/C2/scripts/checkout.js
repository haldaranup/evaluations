let order = document.getElementById("order-form")




let address = document.createElement("input")

let valueOrder = address.value



let btn = document.createElement("button")


    btn.addEventListener("click", function(){
        setTimeout(function () {
            alert("Order Successful")
        }, 3000);
        
    })


btn.textContent = "Order Now"
order.append(address, btn)


