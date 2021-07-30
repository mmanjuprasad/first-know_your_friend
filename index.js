var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("what's your name?");

console.log("welcome ! "+ userName + " DO YOU KNOW Manju! ");


// play function

function play(question, answer){
var userAnswer = readlineSync.question(question);

if(userAnswer === answer){
  console.log("Right!");
  score++;
}
else{
  console.log("wrong!")
}

  console.log(" Current score", score)
}


var question = [{question:"Where Do I live??", answer:"Bangalore"}, 
{question:"My college is", answer:"VIT"},{question:"where do i work", answer:"RSA"}];


for(var i=0; i<question.length; i++){
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}



console.log("Yay! you score:",score);
