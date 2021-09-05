console.log("Js file")

const products = []
const addProductButton = document.querySelector('#add-product-button')
const listProductButton = document.querySelector('#list-product-button')
const listContainer = document.querySelector('#list-container')
const formContainer = document.querySelector('#form-container')
const productForm = document.querySelector('#productForm')

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
        imageUrl, name, description
    }

    products.push(product)
    console.log(products);

    productForm.reset()
    renderTable()
})


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

        list.appendChild(card)
    })



}


renderTable()
