var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetbutton = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numinput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var p = document.querySelector("p");



p1button.addEventListener("click", function () {
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            p1display.classList.add("winner")
            gameOver = true;
        }
        p1display.textContent = p1score;
    }
});
p2button.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            p2display.classList.add("winner")
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
});

resetbutton.addEventListener("click", function(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
});

numinput.addEventListener("change", setInput)

function setInput() {
    winningScoreDisplay.textContent = numinput.value;
    winningScore = Number(numinput.value);
    reset();
}

function reset() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}