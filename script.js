console.log('hello')

let colors =  [
    ' #00FFFF'  ,
    ' #00308F'   ,
    
    '  #007FFF'  ,
     ' #00BFFF' ,
    

]

let hiddenBox = document.querySelector('#hiddenBox')

let gridBox = document.querySelector('.grid')
let playbtn = document.getElementById('play')
let resetbtn = document.getElementById('reset')

let cyanBlueBtn = document.querySelector('.colorOne')
let airForceBtn = document.querySelector('.colorTwo')
let azureBtn = document.querySelector('.colorThree')
let deepSkyBtn = document.querySelector('.colorFour')

const createdColor = () => {
 
    let color = ''
    for(let i= 0; i <= 4; i++){
       let sub =  Math.floor(Math.random() * colors.length)
       color += (sub.length == 1 ? '0' + sub : sub);
       }
     return '#' + color;

  
} 



// const playUI = () => {
//   //  if(hiddenBox.addEventListener('click'))
//   return createdColor()
// }



 playbtn.addEventListener('click', createdColor)


// //let colors = [];
//  // let numOfSquares = 6
//  // let chosenColor;
// //let grid = document.querySelector('#grid')
// let checkmark = document.getElementById('checkmark');
// let wrong = document.getElementById('wrong')
// let correct = document.getElementById('correct')
// let playbtn = document.querySelector('#play')
// let resetbtn = document.querySelector('#reset')
//  let colorOne =document.querySelector('.color1')
//  let colorTwo =document.querySelector('.color2')
 
//  let colorThree =document.querySelector('.color3')
//  let colorFour =document.querySelector('.color4')
 
//  let hiddenbtn = document.querySelector('.hiddencolor')
//  //let divs = document.querySelectorAll('.div')
//  let correctInt = 0
//  const checkColor = (colors, correctAnswer) 
//     if (colors === correctAnswer){
//         correctInt++;
//         checkmark.classList.add('fadeAway');
        

//         }else{
//             wrong.classList.add('fadeAway');

//         }
//         setTimeout(function(){
//             checkmark.classList.remove('fadeAway');
//             wrong.classList.remove('fadeAway');
//         },500);
//         reset();
//         correct.innerHTML = correctInt;
        
    
//         const reset =() => {
//             let random1 = Math.floor(Math.random() *2);
//             if(random1==0) {
//                 let colorOne = document.getElementById('color1');
//                 let colorTwo = document.getElementById('color2');

//             }else {
//                 let colorTwo = document.getElementById('color1');
//                 let colorOne = document.getElementById('color2');
//             }
//         document.getElementById('play').style.display = 'none';
//  let random = Math.floor(Math.random() * 4);
//  let correctAnswer= colors[random];
//  colorOne.innerHTML = correctAnswer;
//  colorTwo.styles.color = correctAnswer;
 
// if(random+1 ===4) {
//    colorTwo.innerHTML = colors[random-3];
// }else{
//    colorTwo.innerHTML = colors[random+1];

// }if (random -1==-1){
//    colorOne.style.color = colors[random+3];
// }else{
//    colorOne.style.color = colors[random-1];
// }
// colorOne.style.display = 'block';
// colorTwo.style.display = 'block';
// addClick('colorOne', correctAnswer);
// addClick('colorTwo' , correctAnswer);

// addClick(' colorThree', correctAnswer);
// addClick(' colorFour', correctAnswer);
// }
// //  
// //  return randomColors
// //  
//  const playUI = () => {
   
//        rainbow()
//        console.log(playUI)
//  }
// // function addClick(color, correctAnswer){
//    // let colorSpan = document.getElementById(color);
//     //let onclick = //'checkColor('".concat(color, "','",correctAnswer, "') ");
//    // colorSpan.setAttribute("onclick", onclick);



// //^ This function creates an array with 6 random colors
// // const rainbow = (color, correctAnswer) => {
// //  // let randomColors = []
// // for(let i=0; i <= 6; i++){
     // let randomColors = Math.floor(Math.random() * colorsArray.length) 

// // return randomColors

// // } }
// // const playUI = () => {
// //   rainbow()
// //   if(colorsArray == rainbow())
// //   alert('You are correct!')
// //   console.log(playUI)
// // }
// //   const resetBtn = () => {
// //     let coral = ['#f08080']
// //     reset = coral
       
       
// //   }
//   playbtn.addEventListener('click',playUI)
//   //reset.addEventListener('click',resetBtn)