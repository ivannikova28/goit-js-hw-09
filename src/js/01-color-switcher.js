
const startBtn = document.querySelector("[data-start]")
const stopBtn = document.querySelector("[data-stop]")

stopBtn.disabled = true;

// const body = document.body
const body = document.querySelector("body")


let timerId = null;


startBtn.addEventListener("click", () => { 
    stopBtn.disabled = false;
    startBtn.disabled = true; 

    timerId = delay(1000, () => { 
        const color = getRandomHexColor();
        console.log(color)
        body.style.backgroundColor = color
    })
})

stopBtn.addEventListener("click", () => { 
    stopBtn.disabled = true;
    startBtn.disabled = false;

    clearInterval(timerId);
    timerId = null;
    // alert("stop timer")
})



function delay(ms, fn) {
    return setInterval(fn, ms)
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


[1,2,3,4,5].map( (item) => console.log(item) )