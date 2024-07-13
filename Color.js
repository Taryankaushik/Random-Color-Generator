
let button = document.querySelector("button")
let box = document.querySelector(".main")
let para = document.querySelector("p")
// button.style.backgroundColor = "red";

button.addEventListener( "click" , ()=>{
    let hexColor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    para.innerHTML = hexColor;
    box.style.backgroundColor = hexColor;
    // console.log(hexColor)
})


// let hexChar = '0123456789ABCDEF';
// let hexDeciamlLength = 6;

// function randomDigitForInerval(min, max){
//     return Math.floor(Math.random( )* (max - min +1) + min);
// }

// function getNextRandomColor() {
//     hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         const getRandomChar = hexChar.charAt(randomDigitForInerval(0,15));
//         hexColor += getRandomChar;
//     }

//     para.innerHTML = hexColor;
//     box.style.backgroundColor = hexColor;
// }

// // getNextRandomColor();

// button.addEventListener('click',()=>{
//     getNextRandomColor();
// })