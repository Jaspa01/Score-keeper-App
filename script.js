
var p1Btn = document.querySelector("#p1-btn");
var p2Btn = document.querySelector("#p2-btn");
var resetBtn = document.getElementById("reset-btn");
var pText = document.querySelector(".p-text");
var input = document.querySelector("input");
var gameNum = document.querySelector("p span");
p1Display = document.querySelector(".p1-display");
p2Display = document.querySelector(".p2-display");
p1Num = 0;
p2Num = 0;
gamewinning = 7;
gameEnd = false;

const pValue = "Playing to: 7";

const color1 = "#149cea";
const color2 = "#d21717";

p1Btn.addEventListener("click", () => {
    if (!gameEnd) {
        p1Num++;
        p1Display.textContent = p1Num;
    }
    p1Game();
});

p2Btn.addEventListener("click", () => {
    if (!gameEnd) {
        p2Num++;
        p2Display.textContent = p2Num;
    }
    p2Game();
});

resetBtn.addEventListener("click", () => {
    reset();
});


input.addEventListener("change", () => {
    gameNum.textContent = input.value;
    gamewinning = Number(input.value);
    pText.textContent = "Playing to: " + input.value;
    pText.style.color = color1;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = color1;
    p2Display.style.color = color1;

});

function p1Game() {
    if (p1Num === gamewinning) {
        gameEnd = true;
        pText.style.color = color2;
        pText.textContent = "Player One WINS!!!";
        p1Display.style.color = color2;
    }
};

function p2Game() {
    if (p2Num === gamewinning) {
        gameEnd = true;
        pText.style.color = "#d21717";
        pText.textContent = "Player Two WINS!!!";
        p2Display.style.color = color2;

    }
};

function reset() {
    p1Num = 0;
    p2Num = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = color1;
    p2Display.style.color = color1;
    pText.style.color = color1;
    gameNum.textContent = input.value;
    pText.textContent = "Playing to: " + input.value;
    gameEnd = false;
};