
const questions = [
    {
        "question": "Which type of Mallakhamb is performed using a hanging wooden pole?",
        "answers": [
            {"text": "Pole Mallakhamb", "correct": false},
            {"text": "Rope Mallakhamb", "correct": false},
            {"text": "Hanging Mallakhamb", "correct": true},
            {"text": "Fixed Mallakhamb", "correct": false}
        ]
    },
    {
        "question": "What is the historical origin of Kabaddi?",
        "answers": [
            {"text": "It began as a combat training exercise.", "correct": true},
            {"text": "It was derived from farming activities.", "correct": false},
            {"text": "It started as a religious ritual.", "correct": false},
            {"text": "It originated from wrestling tournaments.", "correct": false}
        ]
    },
    {
        "question": "Which martial art emphasizes precise movements to mimic animals?",
        "answers": [
            {"text": "Thang-Ta", "correct": false},
            {"text": "Silambam", "correct": false},
            {"text": "Kalaripayattu", "correct": true},
            {"text": "Gatka", "correct": false}
        ]
    },
    {
        "question": "What is the unique feature of the Alugulimane game?",
        "answers": [
            {"text": "Use of hollow pits as containers", "correct": true},
            {"text": "Specialized scoring techniques", "correct": false},
            {"text": "Rotating dice mechanics", "correct": false},
            {"text": "Grid-based playfield", "correct": false}
        ]
    },
    {
        "question": "In Chaupar, what is the primary strategy to win?",
        "answers": [
            {"text": "Collecting all tokens of the opponent", "correct": false},
            {"text": "Bringing all tokens to the home square", "correct": true},
            {"text": "Blocking opponent movement", "correct": false},
            {"text": "Achieving the highest score", "correct": false}
        ]
    },
    {
        "question": "What distinguishes Vajra Mushti from other martial arts?",
        "answers": [
            {"text": "Incorporation of metal knuckles", "correct": true},
            {"text": "Focus on dual combat with swords", "correct": false},
            {"text": "Use of flexible weaponry", "correct": false},
            {"text": "Emphasis on team battles", "correct": false}
        ]
    },
    {
        "question": "Which Indian sport has rules most similar to dodgeball?",
        "answers": [
            {"text": "Kho Kho", "correct": false},
            {"text": "Atya Patya", "correct": true},
            {"text": "Kabaddi", "correct": false},
            {"text": "Lagori", "correct": false}
        ]
    },
    {
        "question": "In which season is Vallam Kali traditionally held?",
        "answers": [
            {"text": "Winter", "correct": false},
            {"text": "Spring", "correct": false},
            {"text": "Monsoon", "correct": true},
            {"text": "Autumn", "correct": false}
        ]
    },
    {
        "question": "What is the cultural significance of Kalaripayattu?",
        "answers": [
            {"text": "It is a method of physical fitness training.", "correct": false},
            {"text": "It is considered one of the oldest martial arts in the world.", "correct": true},
            {"text": "It is used exclusively in warfare.", "correct": false},
            {"text": "It is a dance form to depict battles.", "correct": false}
        ]
    },
    {
        "question": "What is the key skill for success in Gilli Danda?",
        "answers": [
            {"text": "Accurate estimation of angles and force", "correct": true},
            {"text": "Running speed", "correct": false},
            {"text": "Teamwork and coordination", "correct": false},
            {"text": "Quick reflexes", "correct": false}
        ]
    },
    {
        "question": "What does the term 'Astapadham' signify?",
        "answers": [
            {"text": "A lotus-shaped grid", "correct": true},
            {"text": "A warrior's stance", "correct": false},
            {"text": "A unique dice configuration", "correct": false},
            {"text": "A stick maneuver", "correct": false}
        ]
    },
    {
        "question": "What is the average number of players in a traditional Kho Kho team?",
        "answers": [
            {"text": "9 players", "correct": false},
            {"text": "12 players", "correct": true},
            {"text": "7 players", "correct": false},
            {"text": "10 players", "correct": false}
        ]
    },
    {
        "question": "What distinguishes Lagori as a unique sport?",
        "answers": [
            {"text": "Knocking down stacked stones with a ball", "correct": true},
            {"text": "Hitting opponents with a gilli", "correct": false},
            {"text": "Jumping across pits", "correct": false},
            {"text": "Chasing opponents to tag them", "correct": false}
        ]
    },
    {
        "question": "Which martial art incorporates spiritual practices alongside combat?",
        "answers": [
            {"text": "Thang-Ta", "correct": false},
            {"text": "Gatka", "correct": true},
            {"text": "Silambam", "correct": false},
            {"text": "Kalaripayattu", "correct": false}
        ]
    },
    {
        "question": "What is the maximum number of points typically scored in Nondi?",
        "answers": [
            {"text": "10", "correct": false},
            {"text": "7", "correct": true},
            {"text": "5", "correct": false},
            {"text": "12", "correct": false}
        ]
    },
    {
        "question": "In which region did Jallikattu originate?",
        "answers": [
            {"text": "Tamil Nadu", "correct": true},
            {"text": "Kerala", "correct": false},
            {"text": "Punjab", "correct": false},
            {"text": "Karnataka", "correct": false}
        ]
    },
    {
        "question": "What is the primary skill required for mastery in spinning tops?",
        "answers": [
            {"text": "Maintaining balance", "correct": false},
            {"text": "Precision spinning with string control", "correct": true},
            {"text": "Speed of release", "correct": false},
            {"text": "Coordination with teammates", "correct": false}
        ]
    },
    {
        "question": "Which martial art uses shields as part of its technique?",
        "answers": [
            {"text": "Thang-Ta", "correct": true},
            {"text": "Silambam", "correct": false},
            {"text": "Kalaripayattu", "correct": false},
            {"text": "Gatka", "correct": false}
        ]
    },
    {
        "question": "What is a common feature of the snake boats in Vallam Kali?",
        "answers": [
            {"text": "The head of the boat resembles a cobra's hood.", "correct": true},
            {"text": "The boats are made entirely of bamboo.", "correct": false},
            {"text": "The paddles are shaped like fish.", "correct": false},
            {"text": "The boats use sails for propulsion.", "correct": false}
        ]
    },
    {
        "question": "What does the winner of Jallikattu typically receive?",
        "answers": [
            {"text": "Cash prize", "correct": false},
            {"text": "A bull", "correct": true},
            {"text": "A shield", "correct": false},
            {"text": "Grain bags", "correct": false}
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