
var questions = [
    {
        question: "What is a binary variable, having two possible values called 'true' and 'false'? ",
        choices:[ "string", "boolean", "array", "none of these"],
        correctAnswer: "b"
    },
    {
        question: "where are a function's instructions enclosed?",
        choices:["quotes", "parentheses", "periods", "none of these"],
        correctAnswer: "d"
    },
    {
        question: " a function which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user is what?",
       choices:["console.log","javascript", "for loop", "none of these"],
        correctAnswer: "a"
    },
    {
        question: "What type of pop up would allow a user to fill in a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        correctAnswer: "b"
    },
   {
       question: "How many elements can you apply an 'ID' attribute to?",
       choices: ["As many as you want", "3", "1", "128"],
       correctAnswer: "1"
   }
];





var startBtn = document.querySelector(".start-btn")
var openingQuestionsIndex = 0;
var choices = document.querySelector(".choices")
// var currentQuestion = document.querySelector(".currentQuestion")
var infoBox = document.querySelector(".info-box")
var infoList = document.querySelector(".info-list")
var infoTitle = document.querySelector(".info-title")
var quizArea = document.querySelector(".quiz-area")
var nextBtn = document.querySelector(".next-btn")
var result = document.querySelector(".result")
var completion = document.querySelector(".completion")
var scoreText = document.querySelector(".score-text")
var restart = document.querySelector(".restart")
var quit = document.querySelector(".quit")
var startQuiz = document.querySelector(".start-screen")
// var currentQuestionIndex = 0;
var questionElement = document.querySelector(".question-text")

function startGame(){
    console.log("something");
    startBtn.classList.add("hide");
    infoBox.classList.add("hide");
    startQuiz.classList.add("active");
    setNextQuestion();
}

function setNextQuestion(){
    showQuestion([openingQuestionsIndex])

}

function showQuestion(){
questionElement.innerHTML = (openingQuestionsIndex)
}

startBtn.addEventListener("click", startGame)

