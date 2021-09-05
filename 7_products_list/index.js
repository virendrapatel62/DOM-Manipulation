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
    const productTableBody = document.querySelector('#productTableBody')
    let productsHtml = ''
    products.forEach(product => {
        const productHtmlText = `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td><img src="${product.imageUrl}" /></td>
                </tr>
                
                `

        productsHtml += productHtmlText
    })

    productTableBody.innerHTML = productsHtml

}


renderTable()
