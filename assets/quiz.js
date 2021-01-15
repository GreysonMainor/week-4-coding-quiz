var startBtn = document.querySelector(".start-btn")
var openingQuestionsIndex = 0;
var choices = document.querySelector(".choices")
var currentQuestion = document.querySelector(".currentQuestion")
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


function startGame(){
    console.log("something")
    startBtn.classList.add("hide")
    startQuiz.classList.add("active")
}

startBtn.addEventListener("click", startGame)