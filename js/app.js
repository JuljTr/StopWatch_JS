const listBtn = document.querySelector("#list_btn");
const msElement = document.querySelector("#milliseconds");
const secElement = document.querySelector("#seconds");

const startText = "Start";
const stopText = "Stop";
const resetText = "Reset";

let intervalId;
let milliseconds = 0;
let seconds = 0;

function createButton(text) {
    const newBtn = document.createElement("button");
    newBtn.innerText = text;
    listBtn.appendChild(newBtn);
    return newBtn;
}

function render(time, element) {
    if (time < 10) {
        element.innerText = "0" + time;
    } else {
        element.innerText = time;
    }
}

function startTimer() {
    milliseconds += 1;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds = seconds + 1;
    }
    render(milliseconds, msElement);
    render(seconds, secElement);
}

const startBtn = createButton(startText);
startBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 10);
});

const stopBtn = createButton(stopText);
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});

const resetBtn = createButton(resetText);
resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    milliseconds = 0;
    seconds = 0;

    render(milliseconds, msElement);
    render(seconds, secElement);
});