console.log("Js file")

var cart = []
var products = [

]
const addProductButton = document.querySelector('#add-product-button')
const listProductButton = document.querySelector('#list-product-button')
const listContainer = document.querySelector('#list-container')
const formContainer = document.querySelector('#form-container')
const productForm = document.querySelector('#productForm')


window.addEventListener('load', () => {

    products = getProductsFromLocalStorage()
    cart = getCartFromLocalStorage()

    renderTable()
    updateCartItemCount()

})

addProductButton.addEventListener('click', () => {
    console.log("show add product div");

    formContainer.style.display = 'block'
    listContainer.style.display = 'none'
})


listProductButton.addEventListener('click', () => {
    console.log('show list product div');

    formContainer.style.display = 'none'
    listContainer.style.display = 'block'
})

productForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log('form is submitting...');

    const imageUrl = document.querySelector("#productImageUrlInput").value
    const name = document.querySelector("#productNameInput").value
    const description = document.querySelector("#productDescriptionInput").value

    const product = {
        id: products.length + 1, imageUrl, name, description
    }

    products.push(product)
    console.log(products);

    productForm.reset()
    saveProductsToLocalStorage()
    renderTable()
})


function updateCartItemCount() {
    document.querySelector('#cartCount').innerHTML = cart.length
    saveCartToLocalStorage()
}
function onAddToCartClick(product, card) {
    cart.push(product.id)

    card.querySelector('#addtocart').classList.add('hidden')
    card.querySelector('#removeFromCart').classList.remove('hidden')
    console.log(cart);

    updateCartItemCount()
}

function onRemoveFromCartClick(product, card) {

    const index = cart.findIndex(item => item == product.id)
    cart.splice(index, 1)

    card.querySelector('#addtocart').classList.remove('hidden')
    card.querySelector('#removeFromCart').classList.add('hidden')
    console.log(cart);

    updateCartItemCount()
}

function isInCart(productId) {
    const index = cart.findIndex(item => item === productId)

    return index > -1
}

function renderTable() {
    const list = document.querySelector('#list')

    list.innerHTML = ""
    const template = document.querySelector('.template')

    products.forEach(product => {
        const card = template.cloneNode(true)
        card.style.display = 'block'
        console.log(card);

        card.querySelector(".card-title").innerHTML = product.name
        card.querySelector(".card-text").innerHTML = product.description
        card.querySelector("img").src = product.imageUrl

        const removeFromCart = card.querySelector('#removeFromCart')
        const addToCart = card.querySelector('#addtocart')

        addToCart.addEventListener('click', () => onAddToCartClick(product, card))

        removeFromCart
            .addEventListener('click', () => onRemoveFromCartClick(product, card))

        if (isInCart(product.id)) {
            card.querySelector('#addtocart').classList.add('hidden')
            card.querySelector('#removeFromCart').classList.remove('hidden')
        } else {
            card.querySelector('#addtocart').classList.remove('hidden')
            card.querySelector('#removeFromCart').classList.add('hidden')
        }

        list.appendChild(card)
    })

}


function saveProductsToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products))
}

function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function getProductsFromLocalStorage() {
    const products = localStorage.getItem('products')

    return products ? JSON.parse(products) : []
}

function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart')

    return cart ? JSON.parse(cart) : []
}

