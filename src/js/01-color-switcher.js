const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
const body = document.body;
let isActive = false;




function  getRandomHexColor ( )  {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}` ;
}

buttonStart.addEventListener("click",randomColorGeneration );
buttonStop.addEventListener("click", stopColor);
function randomColorGeneration() {
    if (isActive) {
    return
}

    isActive = true;
      timeId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000);

}

function stopColor() {
clearInterval(timeId)
}

