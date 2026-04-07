let cart = [];

function addToCart(name, price){
    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.quantity++;
    } else {
        cart.push({name, price, quantity:1});
    }

    displayCart();
}

function removeFromCart(index){
    cart.splice(index,1);
    displayCart();
}

function displayCart(){
    let cartList = document.getElementById("cart");
    let total = 0;

    cartList.innerHTML = "";

    cart.forEach((item, index)=>{
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartList.innerHTML += `
        <li>
            ${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}
            <button onclick="removeFromCart(${index})">Remove</button>
        </li>
        `;
    });

    cartList.innerHTML += `<h3>Total: $${total}</h3>`;
}