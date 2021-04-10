var questionsArr = [
    {
        question:"What is an interger?", 
        answers:["A whole number","A decimal","A word","Nothing"],
        correct:"A whole number"

    },
    {
        question:"What does HTML stand for?", 
        answers:["Hypertext Markup link","How to meet ladies", "Hypertext Markup Language","High text making links"],
        correct:"Hypertext Markup Language"
    },
    {
        question:"What does CSS stand for?", 
        answers:["Cascading Style Sheet","Colorful Stlying Structure","Calling Stlye Sheet","Cryptic System Source"],
        correct:"Cascading Style Sheet"
    },
]


var time= 60;
var timer;
var timeEl = document.getElementById("time")
var index=0;

// console.log(questionsArr[index].question)
// index=index+1
// console.log(questionsArr[index].question)

function startTimer() {
    timeEl.textContent= time
    timer = setInterval(function(){
    time =time -1
    timeEl.textContent = time
    if (time <=0) {
      gameOver();  
    }
    },1000)
}




function startGame() {
    startTimer();
    displayQuestion();
}
function displayQuestion() {
    document.getElementById("question").textContent=(questionsArr[index].question);
    // if (questionsArr===true)
}

function displayAnswers() {
    document.getElementById("answer-buttons").textContent=(questionArr[index].answers);
    displayQuestion();
}

function gameOver() {
    time=0
    clearInterval(timer)
}
var startBtn= document.getElementById("startbtn") 
startBtn.addEventListener("click", startGame)

