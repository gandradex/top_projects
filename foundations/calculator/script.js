const display = document.querySelector("#display");

display.textContent = 0;

// const btnGo = document.querySelector("#btnChangeGrid");
// const txtSize = document.querySelector("#txtGridSize");

// btnGo.onclick = (e) => {
//     try {

//         let blockSize = txtSize.value;

//         if (blockSize > 100) { 
//             txtSize.value = 100;
//             blockSize = 100;
//          }

//         let gridCount = blockSize * blockSize;

//         let height = container.clientWidth;
//         let sqSize = Math.floor(height / blockSize) + "px"

//         //Clear the container
//         while (container.firstChild) {
//             container.removeChild(container.lastChild);
//         }

//         //Generate new grid
//         for (let index = 0; index < gridCount; index++) {
//             let div = document.createElement("div");

//             div.classList.add("square");
//             div.addEventListener('mouseover', (e) => mouseOverSquare(e));

//             div.style.width = sqSize
//             div.style.height = sqSize

//             container.appendChild(div);
//         }
//         console.log("ran with " + blockSize)
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// function mouseOverSquare(e) {
//     console.log(e);
//     e.target.style.backgroundColor = "blue";
// }

// //Initialize
// txtSize.value = 15;
// btnGo.dispatchEvent(new Event("click"));



