var startButton =document.querySelector("btn")
var timeEl = document.querySelector(".time")
var questionsEl = document.querySelector("#question")
var choicesEl = document.querySelectorAll('#choices')
var feedbackEl = document.querySelector("feedback");


var secondsLeft = 76;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
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

function startGame () {
    setTime();
    score = 0;
    getNewQuestion()
}

getNewQuestion = () => {
    // if(availableQuestions.length === 0) {
    //     localStorage.setItem('recentScore', score)

    //     return window.location.assign('./highscores.html')
    // }

    var currentQuestion = questions[questionsIndex]
    // the question to ask

    question.innerText = currentQuestion.question;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
};

function questionClick() {
    if (this.value !== questions[questionsIndex].answer) {
      timerEl.textContent = time;
      feedbackEl.textContent = `Wrong! The correct answer was ${questions[questionsIndex].answer}.`;
      feedbackEl.style.color = "red";
    } else {
      feedbackEl.textContent = "Correct!";
      feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
}

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return
//         acceptingAnswers= false;
//         var selectedChoice = e.target
//         var selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()
//         }, 1000)
//     })
// });




startGame();