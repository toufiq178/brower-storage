const submitCart = () => {

    // console.log('yes');
    
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");

    const product = productEl.value
    const quantity = parseInt(quantityEl.value)

    // console.log(product , quantity);
    
    displayProduct(product , quantity)
    addProductToCart(product , quantity)

    productEl.value = ''
    quantityEl.value = ''
}

const getCart = () => {

    let cart = {}
    const cartJSON = localStorage.getItem("cart")

    if (cartJSON) {
        
        cart = JSON.parse(cartJSON)
    }
    console.log(cartJSON);
    
    return cart
}

const addProductToCart = (product , quantity) => {

    const cart = getCart () ;

    if (cart[product]) {
        
        cart[product] = cart[product] + quantity

    }else{

        cart[product] = quantity ;
    }



    console.log("cart" , cart);

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart" , cartJSON)
    
}


const displayProduct = (product , quantity) => {

    const listContainer = document.getElementById("list-card");

    const li = document.createElement("li");
    li.textContent = `${product} : ${quantity}`

    listContainer.appendChild(li)
}


const displayStoredProducts =() => {

    const cart = getCart()


    for(const product in cart){

        const quantity = cart[product]
        console.log(product, quantity);
        
        displayProduct(product , quantity)
    }
}

displayStoredProducts()