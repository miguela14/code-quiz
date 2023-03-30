const QUIZZES = [
  {
    questionText: "what file is used to style a webpage?",
    choices: ["javascript", "html", "css", "non of the above"],
    correctAnswer: 2,
  },
  {
    questionText: "A short sections of code written to complete a task.",
    choices: ["Buffer","Loop", "Array", "Function"],
    correctAnswer: 3,
  },
  {
    questionText: "What dose this equation mean ? a != t",
    choices: [
      "A is not equal to t",
      "A is assinged t",
      "A and t are equal",
      "T is add to a",
    ],
    correctAnswer: 0,
  },
];

const timerElement = document.getElementById("timer");
const startScreen = document.querySelector(".start-screen");
const startBtn = document.getElementById("js-start-button");
const quizSection = document.querySelector(".quiz-section");
const h2Element = document.getElementById("js-question-text");
const inputForm = document.querySelector(".input-form");
const submitBtn = document.getElementById("js-submit-button");
const buttonOne = document.getElementById("answer-1");
const buttonTwo = document.getElementById("answer-2");
const buttonThree = document.getElementById("answer-3");
const buttonFour = document.getElementById("answer-4");

let score = 0;
let currentQuestionIndex = 0;
let timer = 60000;
let intervalId;
const HIGH_SCORE = [];

function setTimer() {
  intervalId = setInterval(function () {
    timer -= 1000;
    if (timer <= 0 || currentQuestionIndex >= QUIZZES.length) {
      clearInterval(intervalId);
    }
    timerElement.textContent = timer / 1000;
  }, 1000);
}

function checkAnswer(buttonText) {
  if (currentQuestionIndex >= QUIZZES.length || timer <= 0) {
    clearInterval(intervalId);
    console.log(`Quiz complete! Score: ${score}`);

    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value;
    const highScore = { initials: initials, score: score };
    HIGH_SCORE.push(highScore);

    //this hides the quiz section and displays the input form after the last question
    quizSection.style.display = "none";
    inputForm.style.display = "block";
    return;
  }

  if (
    buttonText ===
    QUIZZES[currentQuestionIndex].choices[
      QUIZZES[currentQuestionIndex].correctAnswer
    ]
  ) {
    score++;
    console.log("Correct answer!");
  } else {
    console.log("Wrong answer! :(");
    timer -= 20000;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < QUIZZES.length) {
    displayQuiz(currentQuestionIndex);
  } else {
    console.log(`Quiz complete! Score: ${score}`);
  }
}

function displayQuiz(index) {
  h2Element.textContent = QUIZZES[index].questionText;
  buttonOne.textContent = QUIZZES[index].choices[0];
  buttonTwo.textContent = QUIZZES[index].choices[1];
  buttonThree.textContent = QUIZZES[index].choices[2];
  buttonFour.textContent = QUIZZES[index].choices[3];

  console.log(`Time remaining: ${timer / 1000} seconds`);

  buttonOne.addEventListener("click", function () {
    checkAnswer(buttonOne.textContent);
  });
  buttonTwo.addEventListener("click", function () {
    checkAnswer(buttonTwo.textContent);
  });
  buttonThree.addEventListener("click", function () {
    checkAnswer(buttonThree.textContent);
  });
  buttonFour.addEventListener("click", function () {
    checkAnswer(buttonFour.textContent);
  });

  if (index === QUIZZES.length) {
    quizSection.style.display = "none";
    inputForm.style.display = "block";
  } else {
    inputForm.style.display = "none";
  }
}

startBtn.addEventListener("click", function () {
  startScreen.style.display = "none";
  quizSection.style.display = "block";
  displayQuiz(currentQuestionIndex);
  setTimer();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("highScore", JSON.stringify(HIGH_SCORE));
  console.log("high score saved to local storage!");
});
