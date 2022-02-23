'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').value = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;

function displayMessage(text) {
    document.querySelector('.message').textContent = text;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Nu number!');
    } else if (guess === secretNumber) {
        // when player wins
        displayMessage('Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        // putting a highscore to its place
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
});

// making the again btn work
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').value = secretNumber;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})