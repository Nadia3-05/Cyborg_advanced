// function generateBlocks() {
//     let main = document.createElement("block");
//     document.body.prepend(main);
//     main.classList.add("box");
   
//     for (let i = 0; i < 25; i++) {
//         let div = document.createElement("div");
//         main.prepend(div);
//         div.classList.add("square");
//         div.style.cssText = `background-color: ${getColors()};`;
//     }
// }
// function getColors(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let rgb = "rgb("+r+","+g+","+b+")";
//         return rgb;
// }

// let counter = 0;
// function generateBlocksInterval() {
//     if (counter === 0) {
//         generateBlocks();
//         counter += 1;
//     } else {
//         let div = document.getElementsByTagName("div");
//         for (let i = 0; i < 25; i++) {
//             div[i].style.backgroundColor = `${getColors()}`;
//         }
//     }

//     setTimeout(generateBlocksInterval, 1000);
// }
// generateBlocksInterval();













// function generateRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   const randomColor = generateRandomColor();
//   console.log(generateRandomColor());

