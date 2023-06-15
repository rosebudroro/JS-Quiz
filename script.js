var startButton = document.querySelector("btn")
var timeEl = document.querySelector(".time")
var questionsEl = document.querySelector("#question")
var choicesEl = document.querySelector('#choices')
var feedbackEl = document.querySelector("#feedback");


var secondsLeft = 76;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft <= 0) {
            // clearInterval(timerInterval);
            endQuiz()
        }
    }, 1000);
}


var questionsIndex = 0;

var questions = [
    {
        question: 'Commonly used data types DO not Include',
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        question: 'The condition in an if/else statement is enclosed with ___________.',
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets"
    },

    {
        question: 'Arrays in JavaScript can be used to store',
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is',
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

function startGame() {
    setTime();
    score = 0;
    getNewQuestion()
}

function endQuiz() {
    // clearInterval(timerInterval);
    var finishQuiz = document.getElementById("endQuiz");
    finishQuiz.removeAttribute("class");
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

function getNewQuestion() {
    var currentQuestion = questions[questionsIndex];
    var promptEl = document.getElementById("question")
    promptEl.textContent = currentQuestion.question;
    // clear the choices
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
}


function questionClick() {
    if (this.value !== questions[questionsIndex].answer) {
        feedbackEl.textContent = 'Wrong!';
        feedbackEl.style.color = "gray";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "gray";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    questionsIndex++;
    if (questionsIndex === questions.length) {
        endQuiz();
    } else {
        getNewQuestion();
    }
}






startGame();