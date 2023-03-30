const QUIZZES = [
    {
        questionText: "what file is used to style a webpage?",
        choices: [
            "javascript",
            "html",
            "css",
            "non of the above"
        ],
        correctAnswer: 2
    },
    {
            questionText: "A short sections of code written to complete a task.",
        choices: [
            "Buffer",
            "Loop",
            "Array",
            "Function"
        ],
        correctAnswer: 3
    },
    {
        questionText: "What dose this equation mean ? a != t",
        choices: [
            "A is not equal to t",
            "A is assinged t",
            "A and t are equal",
            "T is add to a"
        ],
        correctAnswer: 0
    }
];

let timerElement = document.getElementById("timer");
const startScreen = document.querySelector(".start-screen");
let startbtn = document.getElementById("js-start-button");
const quizSection = document.querySelector(".quiz-section");
let h2Element = document.getElementById("js-question-text");
const inputForm = document.querySelector(".input-form")
let buttonOne = document.getElementById("answer-1");
let buttonTwo = document.getElementById("answer-2");
let buttonThree = document.getElementById("answer-3");
let buttonFour = document.getElementById("answer-4");

let score = 0;
let currentQuestionIndex = 0;
let timer = 60000;
let intervalId;


function setTimer() {
    intervalId = setInterval(function() {
        timer -= 1000;
        if (timer <= 0 || currentQuestionIndex >= QUIZZES.length) {
        clearInterval(intervalId);
        }
        timerElement.textContent = timer / 1000;
    }, 1000);
};
  

function checkAnswer(buttonText) {

    if (currentQuestionIndex >= QUIZZES.length || timer <= 0) {
        clearInterval(intervalId);
    console.log(`Quiz complete! Score: ${score}`);

     //this hides the quiz section and displays the input form after the last question
        quizSection.style.display = "none";
        inputForm.style.display = "block";
        return;
    
    };

    if (buttonText === QUIZZES[currentQuestionIndex].choices[QUIZZES[currentQuestionIndex].correctAnswer]) {
        score++; // increment score if correct answer is chosen
        console.log("Correct answer!");
    } else {
        console.log("Wrong answer! :(");
        timer -= 10000;
    }
    currentQuestionIndex++; // move on to next quiz question

    if (currentQuestionIndex < QUIZZES.length) {
        // display next quiz question if available
        displayQuiz(currentQuestionIndex);
    } else {
        // end of quiz
        console.log(`Quiz complete! Score: ${score}`);
    };
};
    

function displayQuiz(index) {
    // display quiz question and choices for given index

    h2Element.textContent = QUIZZES[index].questionText;
    buttonOne.textContent = QUIZZES[index].choices[0];
    buttonTwo.textContent = QUIZZES[index].choices[1];
    buttonThree.textContent = QUIZZES[index].choices[2];
    buttonFour.textContent = QUIZZES[index].choices[3];

    console.log(`Time remaining: ${timer / 1000} seconds`);

    // add event listeners to each button to check answer and move on to next quiz
    buttonOne.addEventListener("click", function() {
        checkAnswer(buttonOne.textContent);
    });
    buttonTwo.addEventListener("click", function() {
        checkAnswer(buttonTwo.textContent);
    });
    buttonThree.addEventListener("click", function() {
        checkAnswer(buttonThree.textContent);
    });
    buttonFour.addEventListener("click", function() {
        checkAnswer(buttonFour.textContent);
    });

    if (index === QUIZZES.length) {
        quizSection.style.display = "none";
        inputForm.style.display = "block";
    } else {
        inputForm.style.display = "none";
    }

};

startbtn.addEventListener("click", function() {
    startScreen.style.display = "none";
    quizSection.style.display = "block";
    displayQuiz(currentQuestionIndex);
    setTimer();
});