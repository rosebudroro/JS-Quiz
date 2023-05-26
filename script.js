var startButton =document.querySelector("btn")
var timeEl = document.querySelector(".time")
var question = document.querySelector(".question")


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

var currentQuestion = {}
var Answers = true
var score = 0
var questionList = []

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
        question: 'String values mut be enclosed within _______ when being assigned to variables.',
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




setTime()