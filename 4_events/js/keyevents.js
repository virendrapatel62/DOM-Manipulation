console.log("Key events")


const input = document.querySelector("#title")
const errorMessage = document.querySelector("#error")
console.log(input);

function validateName(nameValue) {
    if (!nameValue) {
        return "name is required.."
    }

    if (nameValue.length < 5) {
        return "name must be more then 5 char"
    }

    return null
}

input.addEventListener("keyup", (event) => {
    console.log(input.value)
    const value = input.value

    const error = validateName(value.trim())
    if (error) {
        errorMessage.style.display = 'block'
        errorMessage.innerHTML = error
    } else {
        errorMessage.style.display = 'none'
    }

})

