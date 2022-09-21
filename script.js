<<<<<<< HEAD
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











































=======
Colors_Array =  [
    'blue = #00FFFF',
    'green = 	#32CD32',
    'lavander = #9873AC',
    'orange =#FFA500 ',
    'magenta = #FF00FF',
    'mustard = #FFDB58'

]

let table = document.getElementById('table')
let Btn1 = document.getElementById('Btn-One')
let Btn2 = document.getElementById('Btn-Two')
let Btn3 = document.getElementById('Btn-Three')
let Btn4 = document.getElementById('Btn-Four')
let Btn5 = document.getElementById('Btn-Five')
let Btn6 = document.getElementById('Btn-Six')


const rainbow = () => {
    let A = (Math.floor(Math.random() * Colors_Array.length) )
    let B = (Math.floor(Math.random() * Colors_Array.length) )
    let C = (Math.floor(Math.random() * Colors_Array.length) )
    let D = (Math.floor(Math.random() * Colors_Array.length) )
    let E = (Math.floor(Math.random() * Colors_Array.length) )
    let F = (Math.floor(Math.random() * Colors_Array.length) )
    
    
   
    table.appendChild[rainbow]
   
    
    
}
rainbow()











































>>>>>>> 82f25ca47a2e8e95f963848a48dfa6977a84e8e0
