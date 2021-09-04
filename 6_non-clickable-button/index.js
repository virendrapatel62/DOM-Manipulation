
const button = document.querySelector('button')

button.addEventListener('click', () => {
    alert()
})

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY
    const rect = button.getClientRects()[0]
    const buttonX = rect.x
    const buttonY = rect.y
    console.log({ mouseX, mouseY, buttonX, buttonY });

    const padding = 20

    if (mouseX > buttonX - padding &&
        mouseY > buttonY - padding &&

        mouseX < (buttonX + rect.width) + padding &&
        mouseY < (buttonY + rect.height) + padding

    ) {
        moveButton()
    }
})

function moveButton() {
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    const buttonRect = button.getClientRects()[0];
    button.style.top = Math.abs((height * Math.random()) - buttonRect.height) + "px"
    button.style.left = Math.abs(Math.abs((width * Math.random())) - buttonRect.width) + "px"
}