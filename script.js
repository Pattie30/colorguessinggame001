let colorsArray =  [
    ' #00FFFF'  ,
    '#32CD32'   ,
     ' #9873AC' ,
    ' #FFA500'  ,
     ' #FF00FF' ,
     '#FFDB58'

]

let grid = document.querySelector('.grid')
let colors = document.querySelector('.play')
let reset = document.querySelector('.reset')
let divs = document.querySelectorAll('.grid > div')

//^ This function creates an array with 6 random colors
const rainbow = () => {
let randomColors = []
for(let i=0; i<6; i++){
  randomColors.push(colorsArray[Math.floor(Math.random() * colorsArray.length) ])
}

    return randomColors
}

//^ Gets random colors and updates UI to have colors inside
const updateUI = () => {
  //^ Calling rainbow we generate the array with the six random colors
  let randomColors = rainbow()
  console.log(randomColors)
  //^ Take all divs from the DOM and looping over the array of divs and changing
  //^background color of each 
  divs.forEach((div, i ) => div.style.backgroundColor = randomColors[i])
}




colors.addEventListener('click',updateUI)











































