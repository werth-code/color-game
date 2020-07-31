let colors = generateRandomColors(6) //

let message = document.getElementById('message')
const squares = document.querySelectorAll('.square')
let pickedColor = randomColor()
let colorDisplay = document.getElementById('colorDisplay')
const h1 = document.querySelector('h1')
let resetGame = document.getElementById('newColorsButton')

resetGame.addEventListener("click", ()=> {
    colors = generateRandomColors(6)
    pickedColor = randomColor()
    colorDisplay.textContent = pickedColor
    resetGame.textContent = "New Colors"
    message.textContent = "Guess A Square!"
    h1.style.backgroundColor = 'rgb(10, 27, 41)'

    for (let i = 0; i < squares.length; i++) { //REFACTOR DRY
        let ele = squares[i]

        ele.style.backgroundColor = colors[i]
    }
})

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]

    ele.style.backgroundColor = colors[i]
    
    ele.addEventListener('click', ()=> {
        
       let clickedColor = ele.style.backgroundColor
       
       if(clickedColor === pickedColor) {
           message.innerText = "CORRECT!"
           resetGame.innerText = "Play Again?"
           changeColors(clickedColor)
           h1.style.backgroundColor = pickedColor

       } else { 
           ele.style.backgroundColor = 'rgb(10, 27, 41)'
       }
    })
}

function changeColors(color) {
    for(let i = 0; i < squares.length; i++) {
        let current = squares[i]
        current.style.backgroundColor = color
    }
}

function randomColor() {
    let number = Math.floor(Math.random() * colors.length)
    return colors[number]
}

function rgbColorGen() {
   return Math.floor(Math.random() * 256)
}

function generateRandomColors(num) {
    let randomArr = []
    for(let i = 0; i < num; i++) {
        let newColor = `rgb(${rgbColorGen()}, ${rgbColorGen()}, ${rgbColorGen()})`
        randomArr.push(newColor)
    }
    return randomArr
}