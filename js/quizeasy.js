const questions = [
    {
        "question": "Which sport involves a raider chanting 'Kabaddi' while tagging opponents?",
        "answers": [
            {"text": "Kho Kho", "correct": false},
            {"text": "Kabaddi", "correct": true},
            {"text": "Lagori", "correct": false},
            {"text": "Gilli Danda", "correct": false}
        ]
    },
    {
        "question": "What is the primary equipment used in Mallakhamb?",
        "answers": [
            {"text": "Rope", "correct": false},
            {"text": "Pole", "correct": false},
            {"text": "Both rope and pole", "correct": true},
            {"text": "Ball", "correct": false}
        ]
    },
    {
        "question": "Which game uses a stack of seven flat stones?",
        "answers": [
            {"text": "Pachisi", "correct": false},
            {"text": "Lagori", "correct": true},
            {"text": "Atya Patya", "correct": false},
            {"text": "Nondi", "correct": false}
        ]
    },
    {
        "question": "In which sport do participants tame bulls?",
        "answers": [
            {"text": "Bullock Cart Racing", "correct": false},
            {"text": "Gatka", "correct": false},
            {"text": "Jallikattu", "correct": true},
            {"text": "Vajra Mushti", "correct": false}
        ]
    },
    {
        "question": "Which martial art originates from Kerala?",
        "answers": [
            {"text": "Kalaripayattu", "correct": true},
            {"text": "Thang-Ta", "correct": false},
            {"text": "Silambam", "correct": false},
            {"text": "Gatka", "correct": false}
        ]
    },
    {
        "question": "What equipment is commonly used in Gilli Danda?",
        "answers": [
            {"text": "A ball and bat", "correct": false},
            {"text": "A small stick and a longer stick", "correct": true},
            {"text": "A rope", "correct": false},
            {"text": "A stone and a stick", "correct": false}
        ]
    },
    {
        "question": "Which sport is played on a hopscotch-like grid?",
        "answers": [
            {"text": "Lagori", "correct": false},
            {"text": "Atya Patya", "correct": false},
            {"text": "Nondi", "correct": true},
            {"text": "Pachisi", "correct": false}
        ]
    },
    {
        "question": "Which game is the precursor to modern chess?",
        "answers": [
            {"text": "Chaupar", "correct": false},
            {"text": "Chaturanga", "correct": true},
            {"text": "Pachisi", "correct": false},
            {"text": "Astapadham", "correct": false}
        ]
    },
    {
        "question": "What material is used for spinning tops in the traditional Lattu game?",
        "answers": [
            {"text": "Wood", "correct": true},
            {"text": "Metal", "correct": false},
            {"text": "Clay", "correct": false},
            {"text": "Plastic", "correct": false}
        ]
    },
    {
        "question": "Which traditional sport is known as 'stick fighting'?",
        "answers": [
            {"text": "Gatka", "correct": false},
            {"text": "Thang-Ta", "correct": false},
            {"text": "Silambam", "correct": true},
            {"text": "Kalaripayattu", "correct": false}
        ]
    },
    {
        "question": "Which sport requires participants to cross multiple lanes without being tagged?",
        "answers": [
            {"text": "Kho Kho", "correct": false},
            {"text": "Atya Patya", "correct": true},
            {"text": "Kabaddi", "correct": false},
            {"text": "Lagori", "correct": false}
        ]
    },
    {
        "question": "What is the primary focus of the game Pachisi?",
        "answers": [
            {"text": "Team coordination", "correct": false},
            {"text": "Strategic movement of pawns", "correct": true},
            {"text": "Throwing accuracy", "correct": false},
            {"text": "Jumping skills", "correct": false}
        ]
    },
    {
        "question": "Which game is traditionally played with marbles?",
        "answers": [
            {"text": "Kancha", "correct": true},
            {"text": "Nondi", "correct": false},
            {"text": "Pachisi", "correct": false},
            {"text": "Lagori", "correct": false}
        ]
    },
    {
        "question": "What is the primary feature of Jallikattu?",
        "answers": [
            {"text": "Bull taming", "correct": true},
            {"text": "Bullock cart racing", "correct": false},
            {"text": "Stick fighting", "correct": false},
            {"text": "Pole climbing", "correct": false}
        ]
    },
    {
        "question": "Which game uses small seeds or pebbles in hollow pits?",
        "answers": [
            {"text": "Alugulimane", "correct": true},
            {"text": "Nondi", "correct": false},
            {"text": "Astapadham", "correct": false},
            {"text": "Gilli Danda", "correct": false}
        ]
    },
    {
        "question": "What is the primary goal in the game Astapadham?",
        "answers": [
            {"text": "Cross all squares", "correct": false},
            {"text": "Reach the center of the lotus grid", "correct": true},
            {"text": "Stack stones", "correct": false},
            {"text": "Tag opponents", "correct": false}
        ]
    },
    {
        "question": "Which martial art emphasizes rhythmic swordplay?",
        "answers": [
            {"text": "Kalaripayattu", "correct": false},
            {"text": "Thang-Ta", "correct": true},
            {"text": "Gatka", "correct": false},
            {"text": "Silambam", "correct": false}
        ]
    },
    {
        "question": "What is used as dice in traditional Pachisi?",
        "answers": [
            {"text": "Cowrie shells", "correct": true},
            {"text": "Pebbles", "correct": false},
            {"text": "Wooden blocks", "correct": false},
            {"text": "Spinning tops", "correct": false}
        ]
    },
    {
        "question": "Which martial art originated in Punjab and features spiritual connections?",
        "answers": [
            {"text": "Gatka", "correct": true},
            {"text": "Kalaripayattu", "correct": false},
            {"text": "Thang-Ta", "correct": false},
            {"text": "Silambam", "correct": false}
        ]
    },
    {
        "question": "Which game involves knocking down stacked stones with a ball?",
        "answers": [
            {"text": "Lagori", "correct": true},
            {"text": "Gilli Danda", "correct": false},
            {"text": "Kabaddi", "correct": false},
            {"text": "Kho Kho", "correct": false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn1");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = "Q"+ questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Return to main page";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        window.location.href = "./index.html";
    }
})

startQuiz();