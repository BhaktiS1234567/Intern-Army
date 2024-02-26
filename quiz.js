// quiz.js
const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
  },
  {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
},
{
  question: "Which planet is known as the 'Red Planet'? ",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  answer: "Mars"
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
  answer: "William Shakespeare"
},


  // Add more questions here...
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;
let answeredQuestions = 0;

function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;

    optionsElement.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(option) {
    const currentQuiz = quizData[currentQuestion];
    quizData[currentQuestion].userAnswer = option; // Store the user's answer
    if (option === currentQuiz.answer) {
        score++;
    }
    currentQuestion++;
    answeredQuestions++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultHTML = `You scored ${score} out of ${quizData.length}.<br><br>`;
    quizData.forEach((quiz, index) => {
        resultHTML += `Question ${index + 1}: ${quiz.question}<br>`;
        if (quizData[index].userAnswer === quiz.answer) {
            resultHTML += `Your answer: ${quizData[index].userAnswer} (Correct)<br><br>`;
        } else {
            resultHTML += `Your answer: ${quizData[index].userAnswer} (Incorrect)<br>`;
            resultHTML += `Correct answer: ${quiz.answer}<br><br>`;
        }
    });
    resultElement.innerHTML = resultHTML;
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', function() {
    if (answeredQuestions === quizData.length) {
        showResult();
    } else {
        alert('Please answer all questions before submitting.');
    }
});

displayQuestion();