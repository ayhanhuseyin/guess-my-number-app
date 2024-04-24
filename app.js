let randomEded;
let guessText = document.querySelector('.guess-text');
const btnCheck = document.querySelector(".btnCheck");
const number = document.querySelector('.number');
const input = document.querySelector('.input');
const body = document.body;
const score = document.querySelector(".score");

let xal = 20;


function randomEdedYarat() {
    randomEded = Math.floor(Math.random() * 20) + 1;
    alert("Random number generated!")

    console.log(randomEded);
}

number.addEventListener('click', randomEdedYarat);


function edediYoxla() {
    let input = parseInt(document.querySelector(".input").value);
    if (isNaN(input)) {
        alert("Please enter a number between 1 and 20")
    }
    else if ((input > 20 || input < 1)) {
        alert("Please enter a number between 1 and 20");
    }
    else if ((input === randomEded)) {
        guessText.innerHTML = "Congratulations!"
        body.style.backgroundColor = "green"
        number.innerHTML = randomEded;
        xal = xal + 1
        score.textContent = xal;
    }

    else {
        guessText.innerHTML = "Try again!";
        number.innerHTML = ":(";
        body.style.backgroundColor = "red";
        xal = xal - 1;
        score.textContent = xal
    }
}

function checkWinOrLose() {
    if (xal < 1) {
        guessText.textContent = "You lost the game. Start again!";
        input.disabled = true;
    }
}

btnCheck.addEventListener('click', edediYoxla);
btnCheck.addEventListener('click', checkWinOrLose);



const btnAgain = document.querySelector(".btnAgain");
btnAgain.addEventListener("click", sehifeniYenile);
function sehifeniYenile() {
    location.reload();
}