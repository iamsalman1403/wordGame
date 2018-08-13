window.addEventListener('load', init2);

///variables

let time2 = 3;
let score2 = 0;
let playOn2;

let high_score2 = localStorage.getItem("highscore");

//Array of words

const words2 = ['moon', 'noon', 'baloon', 'light', 'height', 'bright']


//const declaration

const currentWord2 = document.getElementById('displayWords');
const displayTime2 = document.getElementById('time');
const displayScore2 = document.getElementById('score');
const message2 = document.getElementById('showStatus');
const inputWord2 = document.getElementById('inputField');
const DisplayHighscore2 = document.getElementById('highscore');
const alertMsg2 = document.getElementById('alert');



//displayin word

function showWords2(words2) {
    const randomWord2 = Math.floor(Math.random() * words2.length);

    currentWord2.innerHTML = words2[randomWord2];
}

// show time

function countDown2() {
    if (time2 > 0) {
        time2--;
    }
    else if (time2 === 0) {
        playOn2 = false;
    }
    displayTime2.innerHTML = time2;
}

//show status

function gameStatus2() {
    if (!playOn2 && time2 === 0) {
        message2.innerHTML = 'Game over!'
        DisplayHighscore2.innerHTML = high_score2;
        // score = -1;
    }
    if (!playOn2 && score2 > high_score2) {
        alertMsg2.innerHTML = 'New highScore'
    }
}

//main game

function matchWords2() {
    if (inputWord2.value === currentWord2.innerHTML) {
        message2.innerHTML = 'correct!'
        return true;
    }
    else {
        message2.innerHTML = ''
        return false;
    }
}

function startMatch2() {
    if (matchWords2()) {
        playOn2 = true;
        time2 = 4;
        score2 = score2 + 2;
        inputWord2.value = '';
        showWords2(words2);
    }
    // if (score === -1) {
    //     score.innerHTML = 0;
    // }
    // else {
    //     displayScore.innerHTML = score;
    //     DisplayHighscore.innerHTML = high_score;
    // }
    displayScore2.innerHTML = score2;
    DisplayHighscore2.innerHTML = high_score2;
}


//highscore

function showHighscore2() {
    if (high_score2 !== null) {
        if (score2 > high_score2) {
            localStorage.setItem("highscore", score2);
        }
        // else{
        //     localStorage.setItem("highscore", score);
        // }
    }
}

//initialization

function init2() {
    DisplayHighscore2.innerHTML = high_score2;
}

//main
function levelTwo() {
    showWords2(words2);
    setInterval(countDown2, 1000);
    setInterval(gameStatus2, 50);
    inputWord2.addEventListener('input', startMatch2);
    setInterval(showHighscore2, 50);
}



