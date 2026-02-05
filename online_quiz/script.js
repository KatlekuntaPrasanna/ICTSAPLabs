const quizData = [
    {
        question: "Which language is primarily used for web styling?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        options: ["React", "Angular", "Django", "Vue"],
        correct: 2
    },
    {
        question: "Which language is used for database queries?",
        options: ["HTML", "CSS", "SQL", "Python"],
        correct: 2
    },
    {
        question: "Inside which HTML tag do we include JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: 0
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
        correct: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "class", "style", "styles"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "##", "**"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreBox = document.getElementById("scoreBox");

function loadQuestion() {
    answered = false;
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectAnswer(index, button);
        optionsEl.appendChild(button);
    });
}

function selectAnswer(index, button) {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentQuestion].correct;

    if (index === correctIndex) {
        score++;
        button.style.background = "green";
        button.style.color = "white";
    } else {
        button.style.background = "red";
        button.style.color = "white";
        optionsEl.children[correctIndex].style.background = "green";
        optionsEl.children[correctIndex].style.color = "white";
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    scoreBox.textContent = `Your Score: ${score} / ${quizData.length}`;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreBox.textContent = "";
    restartBtn.style.display = "none";
    loadQuestion();
});

loadQuestion();