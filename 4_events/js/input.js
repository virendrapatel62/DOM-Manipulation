const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.querySelector('#name')
    const address = document.querySelector('#address')

    const nameValue = name.value
    const addressValue = address.value

    if (!nameValue) {
        alert("Eneter name")
        return
    }

    if (!addressValue) {
        alert("Eneter Address")
        return
    }
})