'use strict';


let secretNumber = Math.floor(Math.random()* (20-0) + 0);
let highscore = 0;
let score = 5;

const tryCorrect =   () => {
        document.querySelector('.check').addEventListener('click', () => {
                var value = Number(document.querySelector('.guess').value);
                if(value == "") document.querySelector('.message').textContent = 'Empty. Please select a number!'
                else if( value > secretNumber){
                        document.querySelector('.message').textContent = 'Too high!'
                        score--;
                        document.querySelector('.score').textContent = score;
                }
                else if(value < secretNumber){
                        document.querySelector('.message').textContent = 'Too low!'
                        score--;
                        document.querySelector('.score').textContent = score;
                }
                else {
                        document.querySelector('.message').textContent = 'Congratulations! Correct number';
                        document.querySelector('.number').textContent = secretNumber;
                        highscore++;
                        document.querySelector('.highscore').textContent = highscore;
                        document.querySelector('body').style.backgroundColor = '#7cd408';
                        document.querySelector('.guess').setAttribute("type","hidden"); 
                        document.querySelector('.check').style.visibility = "hidden"
                }
                
                if(score == 0){
                        document.querySelector('.guess').setAttribute("type","hidden"); 
                        document.querySelector('.check').style.visibility = "hidden"
                        document.querySelector('.message').textContent = 'You lose! Try again';
                        document.querySelector('body').style.backgroundColor = '#ff002b';
                        document.querySelector('.highscore').textContent = 0;
                }
})}
const again = () => {
        document.querySelector('.again').addEventListener('click',() => {
                document.querySelector('.guess').value = "";
                document.querySelector('.number').textContent = "?"
                score = 5;
                secretNumber = Math.floor(Math.random()* (20-0) + 0);
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#222';
                document.querySelector('.number').style.width = '15rem';
                document.querySelector('.guess').setAttribute("type","number"); 
                document.querySelector('.check').style.visibility = "visible"
        })
}
tryCorrect();
again();