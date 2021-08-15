const button = document.querySelector('button')
const counter = document.querySelector('h1')
console.log(button, counter);
let count = 1

// button.addEventListener('click', () => {
//     counter.innerHTML = "You Click " + count + " times"
//     count++
// })
button.addEventListener('click', () => {
    counter.innerHTML = "You Clicked"
})


button.addEventListener('mouseover', () => {
    counter.innerHTML = "you mouse overed"
})


button.addEventListener('mouseleave', () => {
    counter.innerHTML = "you mouse leaved"
})



const div = document.querySelector('#main')
console.log(div);

div.addEventListener('mouseover', () => {
    div.innerHTML = "Mousse Over"
})

div.addEventListener('click', () => {
    div.innerHTML = "Clicked On Div"
})

div.addEventListener('mouseleave', () => {
    div.innerHTML = "Mousse Leave"
})