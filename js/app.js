const listBtn = document.querySelector("#list_btn");

const startText = "Start";
const stopText = "Stop";
const resetText = "Reset";


function createButton(text) {
    const newBtn = document.createElement("button");
    newBtn.innerText = text;
    listBtn.appendChild(newBtn);
    return newBtn;
}

const startBtn = createButton(startText);
startBtn.addEventListener("click", () => {
    console.log("hello")
})

createButton(stopText);
createButton(resetText);

let milliseconds = 0;
let seconds = 0;


const msElement = document.querySelector("#milliseconds");
const secElement = document.querySelector("#seconds");

milliseconds = milliseconds + 60;
seconds = seconds + 10;

if (milliseconds >= 60) {
    milliseconds = 0;
    seconds = seconds + 1;
}

function render(time, element) {
    if (time < 10) {
        element.innerText = "0" + time;
    } else {
        element.innerText = time;
    }
}

render(milliseconds, msElement);
render(seconds, secElement);
