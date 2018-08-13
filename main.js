window.addEventListener('load', init);

///variables

let time = 5;
let score = 0;
let playOn;

let high_score = localStorage.getItem("highscore");

//Array of words

const words = ['moon', 'noon', 'baloon', 'light', 'height', 'bright']


//const declaration

const currentWord = document.getElementById('displayWords');
const displayTime = document.getElementById('time');
const displayScore = document.getElementById('score');
const message =document.getElementById('showStatus');
const inputWord = document.getElementById('inputField');
const DisplayHighscore = document.getElementById('highscore');
const alertMsg = document.getElementById('alert');



//displayin word

function showWords(words) {
    const randomWord = Math.floor(Math.random()*words.length);

    currentWord.innerHTML = words[randomWord];
}

// show time

function countDown() {
    if (time > 0) {
        time--;
    }
    else if (time===0) {
        playOn=false;
    }
    displayTime.innerHTML=time;
}

//show status

function gameStatus() {
    if (!playOn && time===0) {
        message.innerHTML = 'Game over!'
        DisplayHighscore.innerHTML =high_score;
        // score = -1;
    }
    if (!playOn && score > high_score) {
        alertMsg.innerHTML = 'New highScore'
    }
}

//main game

function matchWords() {
    if (inputWord.value===currentWord.innerHTML) {
        message.innerHTML='correct!'
        return true;
    }
    else{
        message.innerHTML=''
        return false;
    }
}

function startMatch() {
    if (matchWords()) {
        playOn=true;
        time=6;
        score++;
        inputWord.value='';
        showWords(words);
    }
    // if (score === -1) {
    //     score.innerHTML = 0;
    // }
    // else {
    //     displayScore.innerHTML = score;
    //     DisplayHighscore.innerHTML = high_score;
    // }
    displayScore.innerHTML=score;
    DisplayHighscore.innerHTML = high_score;
}


//highscore

function showHighscore() {
    if (high_score !== null) {
        if (score > high_score) {
            localStorage.setItem("highscore", score);
        }
        // else{
        //     localStorage.setItem("highscore", score);
        // }
    }
}

//initialization

function init() {
    // DisplayHighscore.innerHTML = high_score;
}

//main
function levelOne() {
    showWords(words);
    setInterval(countDown, 1000);
    setInterval(gameStatus, 50);
    inputWord.addEventListener('input', startMatch);
    setInterval(showHighscore, 50);
    DisplayHighscore.innerHTML = high_score;
}




//level Two


