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

    {
        question:"What does DOM mean?", 
        answers:["Director of Manufacturing ","Document Object Model","Distributed Order Management","Director of Marketing"],
        correct:"Document Object Model"
    },
   
    {
        question:"What is the desired results in a program?", 
        answers:["The input","The output"," Functionality","Readability"],
        correct:"The output"
    },
    {
        question:"Which of the following can’t be assigned to Character data type?", 
        answers:["Letter","Digit"," String","Special Character"],
        correct:"String"
    },
]


var time= 60;
var timer;
var timeEl = document.getElementById("time")
var index=0;

var score =0;
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
    document.getElementById("question").textContent= questionsArr[index].question;
    var answer1=document.getElementById("answer1");
    var answer2=document.getElementById("answer2");
    var answer3=document.getElementById("answer3");
    var answer4=document.getElementById("answer4");

    answer1.textContent= questionsArr[index].answers[0];
    answer2.textContent= questionsArr[index].answers[1];
    answer3.textContent= questionsArr[index].answers[2];
    answer4.textContent= questionsArr[index].answers[3];
    // if (questionsArr===true)
    answer1.onclick = checkAnswers; 
    answer2.onclick = checkAnswers; 
    answer3.onclick = checkAnswers; 
    answer4.onclick = checkAnswers; 
}
function checkAnswers(event) {
    console.log(event.target.textContent);
    if (event.target.textContent===questionsArr[index].correct) {
        score++;
        alert("Correct!")
        
    } else {
        time =time -10
        timeEl.textContent = time
        alert("Incorrect!")
    }
    index= index +1
    if (index===questionsArr.length) {
        gameOver();
        alert("Your Score is" + score);
    } else {
        displayQuestion();
    } 
}

function displayAnswers() {
    document.getElementById("answer-buttons").textContent=(questionArr[index].answers);
    displayQuestion();
}

function gameOver() {
    time=0
    clearInterval(timer)
    console.log("Game Over");
    document.getElementById("gameover").classList.remove("hidden");
}
var startBtn= document.getElementById("startbtn") 
startBtn.addEventListener("click", startGame)

