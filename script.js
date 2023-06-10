var startButton =document.querySelector("btn")
var timeEl = document.querySelector(".time")
var question = document.querySelector("#question")
var choices = Array.from(document.querySelectorAll('.choice-text'));


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

var currentQuestion = {};
var acceptingAnswers = true
var score = 0
var questionList = [];

var questions = [
    {
        question: 'Commonly used data types DO not Include',
        option1: 'strings',
        option2: 'booleans',
        option3: 'alerts',
        option4: 'numbers',
        answer: 3,
    },

    {
        question: 'The condition in an if/else statement is enclosed with ___________.',
        option1: 'quotes',
        option2: 'curly brackets',
        option3: 'parenthesis',
        option4: 'square brackets',
        answer: 2,
    },

    {
        question: 'Arrays in JavaScript can be used to store',
        option1: 'numbers and strings',
        option2: 'other arrays',
        option3: 'booleans',
        option4: 'all of the above',
        answer: 4,
    },

    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        option1: 'commas',
        option2: 'curly brackets',
        option3: 'quotes',
        option4: 'parenthesis',
        answer: 3,
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is',
        option1: 'JavaScript',
        option2: 'terminal/bash',
        option3: 'for loops',
        option4: 'console.log',
        answer: 4,
    }
]

function startGame () {
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0) {
        localStorage.setItem('recentScore', score)

        return window.location.assign('./highscores.html')
    }

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    // the question to ask
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers= false;
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
});



setTime();
startGame();