const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is smallest continent  in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia ", correct: true },
            { text: "Artic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is larget desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: true },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
]
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Next';
    showQuestion();
}