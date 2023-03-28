const QUIZZES = [
    {
        questionText: "what file is used to style a webpage.",
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
        correctAnswer: 2
    },
    {
        questionText: "What dose this equation mean ? a != t",
        choices: [
            "A is assinged t",
            "A and t are equal",
            "A is not equal to t",
            "T is add to a"
        ],
        correctAnswer: 2
    }
]

let startbtn = document.getElementById("js-start-button")
let h2Element = document.getElementById("js-question-text")
let buttonOne = document.getElementById("answer-1")
let buttonTwo = document.getElementById("answer-2")
let buttonThree = document.getElementById("answer-3")
let buttonFour = document.getElementById("answer-4")
// startbtn.textContent
const buttons = document.querySelectorAll(".answer-choice")

startbtn.addEventListener("click", function(){
    //if statment when a button is clicked, compare the text content to that button to the answer
    //if the answer is correct, add to the quiz takers score and run next quiz function
    //else if the answer is wrong, subtract from the takers score and run the next quiz funtion
    //button.addEventListener("click", function(){if else statment written above})

    //need to convert list items to buttons
    h2Element.textContent = QUIZZES[0].questionText ;
    buttonOne.textContent = QUIZZES[0].choices[0];
    buttonTwo.textContent = QUIZZES[0].choices[1];
    buttonThree.textContent = QUIZZES[0].choices[2];
    buttonFour.textContent = QUIZZES[0].choices[3];

   buttonOne.addEventListener("click", function(){ 

        console.log("you chose" + buttonOne.textContent)

    }
   )
});

function nextQuiz (){
    startbtn.addEventListener("click", function(){
        h2Element.textContent = QUIZZES[1].questionText ;
        choiceOne.textContent = QUIZZES[1].choices[0]
        choiceTwo.textContent = QUIZZES[1].choices[1]
        choiceThree.textContent = QUIZZES[1].choices[2]
        choiceFour.textContent = QUIZZES[1].choices[3]
    
    });


function lastQuiz (){
        startbtn.addEventListener("click", function(){
            h2Element.textContent = QUIZZES[2].questionText ;
            choiceOne.textContent = QUIZZES[2].choices[0]
            choiceTwo.textContent = QUIZZES[2].choices[1]
            choiceThree.textContent = QUIZZES[2].choices[2]
            choiceFour.textContent = QUIZZES[2].choices[3]
        
            console.log("start button was clicked")
         
        });
    }
}