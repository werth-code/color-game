let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll('.square')
const pickedColor = colors[3]
const colorDisplay = document.getElementById('colorDisplay')

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]
    //add initial colors
    ele.style.backgroundColor = colors[i]
    //add click listeners
    ele.addEventListener('click', ()=> {
        console.log('Clicked!')
    })
}
