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
    let productsHtml = ''
    products.forEach(product => {
        const productHtmlText = `
                <DIV class='col'>
                <div class="card" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn btn-dark">Add to cart</a>
                    </div>
                 </div>
                </DIV>
                `

        productsHtml += productHtmlText
    })

    list.innerHTML = productsHtml

}


renderTable()
