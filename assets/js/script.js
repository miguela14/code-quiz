const QUIZZES = [
    {
        questionText: "what file is used to style a webpage?",
        choices: [
            "javascript",
            "html",
            "css",
            "non of the above"
        ],
        correctAnswer: "css"
    },
    {
            questionText: "A short sections of code written to complete a task.",
        choices: [
            "Buffer",
            "Array",
            "Function",
            "Loop"
        ],
        correctAnswer: "Function"
    },
    {
        questionText: "What dose this equation mean ? a != t",
        choices: [
            "A is assinged t",
            "A and t are equal",
            "A is not equal to t",
            "T is add to a"
        ],
        correctAnswer: "A is not equal to t"
    }
]

let startbtn = document.getElementById("js-start-button");
let h2Element = document.getElementById("js-question-text");
let buttonOne = document.getElementById("answer-1");
let buttonTwo = document.getElementById("answer-2");
let buttonThree = document.getElementById("answer-3");
let buttonFour = document.getElementById("answer-4");
let score = 0;
let currentQuestionIndex = 0;

function checkAnswer(buttonText) {
    if (buttonText === QUIZZES[currentQuestionIndex].correctAnswer) {
        score++; // increment score if correct answer chosen
        console.log("Correct answer!");
    } else {
        console.log("Wrong answer! :(");
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
};

startbtn.addEventListener("click", function() {
    displayQuiz(currentQuestionIndex);
});
