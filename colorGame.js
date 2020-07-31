let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

const message = document.getElementById('message')
const squares = document.querySelectorAll('.square')
const pickedColor = colors[3]
const colorDisplay = document.getElementById('colorDisplay')

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]

    ele.style.backgroundColor = colors[i]
    
    ele.addEventListener('click', ()=> {
       //grab color of picked square 
       let clickedColor = ele.style.backgroundColor
       //compare to color of pickedColor
       if(clickedColor === pickedColor) {
           message.innerText = "CORRECT!"
           changeColors(clickedColor)

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
