var questionsArr = [
    {
        question:"What is an interger?", 
        answers:["A whole number","A decimal","A word","Nothing"],
        correct:"A whole number"

    },
    {
        question:"What is an array?", 
        answers:["A whole number","A decimal","A word","Nothing"],
        correct:"A whole number"
    }
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
    document.getElementById("question").textContent=(questionsArr[index].question)
}

function gameOver() {
    time=0
    clearInterval(timer)
}
var startBtn= document.getElementById("startbtn") 
startBtn.addEventListener("click", startGame)