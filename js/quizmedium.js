const questions = [
    {
        "question": "What is the typical size of a team in Kabaddi?",
        "answers": [
            {"text": "5 players", "correct": false},
            {"text": "7 players", "correct": true},
            {"text": "9 players", "correct": false},
            {"text": "11 players", "correct": false}
        ]
    },
    {
        "question": "What is the most common Mallakhamb style performed in competitions?",
        "answers": [
            {"text": "Pole Mallakhamb", "correct": true},
            {"text": "Rope Mallakhamb", "correct": false},
            {"text": "Hanging Mallakhamb", "correct": false},
            {"text": "Aerial Mallakhamb", "correct": false}
        ]
    },
    {
        "question": "Which ancient Indian epic references the game of Chaturanga?",
        "answers": [
            {"text": "Ramayana", "correct": false},
            {"text": "Mahabharata", "correct": true},
            {"text": "Arthashastra", "correct": false},
            {"text": "Manusmriti", "correct": false}
        ]
    },
    {
        "question": "Which martial art incorporates traditional Manipuri weapons?",
        "answers": [
            {"text": "Kalaripayattu", "correct": false},
            {"text": "Thang-Ta", "correct": true},
            {"text": "Silambam", "correct": false},
            {"text": "Gatka", "correct": false}
        ]
    },
    {
        "question": "What is the main goal in Atya Patya?",
        "answers": [
            {"text": "Capture marbles", "correct": false},
            {"text": "Cross all lanes without being tagged", "correct": true},
            {"text": "Knock down stacked stones", "correct": false},
            {"text": "Win a race", "correct": false}
        ]
    },
    {
        "question": "What is the traditional purpose of Jallikattu?",
        "answers": [
            {"text": "Harvest celebration", "correct": true},
            {"text": "Warfare training", "correct": false},
            {"text": "Spiritual offering", "correct": false},
            {"text": "Sporting event", "correct": false}
        ]
    },
    {
        "question": "Which sport involves hopping on a grid-like court on one leg?",
        "answers": [
            {"text": "Nondi", "correct": true},
            {"text": "Atya Patya", "correct": false},
            {"text": "Lagori", "correct": false},
            {"text": "Kancha", "correct": false}
        ]
    },
    {
        "question": "Which Indian board game is considered the precursor to Ludo?",
        "answers": [
            {"text": "Pachisi", "correct": true},
            {"text": "Chaturanga", "correct": false},
            {"text": "Chaupar", "correct": false},
            {"text": "Astapadham", "correct": false}
        ]
    },
    {
        "question": "What is used to play Alugulimane?",
        "answers": [
            {"text": "Pebbles or seeds", "correct": true},
            {"text": "Dice and pawns", "correct": false},
            {"text": "Small sticks", "correct": false},
            {"text": "Flat stones", "correct": false}
        ]
    },
    {
        "question": "What is the main skill required in Silambam?",
        "answers": [
            {"text": "Precision with swordplay", "correct": false},
            {"text": "Mastery of stick techniques", "correct": true},
            {"text": "Balance and agility", "correct": false},
            {"text": "Defensive maneuvers", "correct": false}
        ]
    },
    {
        "question": "What is the significance of Vallam Kali in Kerala?",
        "answers": [
            {"text": "It is a martial art form", "correct": false},
            {"text": "It is a traditional boat race", "correct": true},
            {"text": "It is a bull taming sport", "correct": false},
            {"text": "It is a folk dance", "correct": false}
        ]
    },
    {
        "question": "What distinguishes Thang-Ta from other martial arts?",
        "answers": [
            {"text": "Use of wooden poles", "correct": false},
            {"text": "Integration of swords and spears", "correct": true},
            {"text": "Emphasis on acrobatics", "correct": false},
            {"text": "Focus on healing techniques", "correct": false}
        ]
    },
    {
        "question": "In Kancha, what is the primary objective?",
        "answers": [
            {"text": "Capture all marbles", "correct": true},
            {"text": "Hop across a grid", "correct": false},
            {"text": "Stack stones", "correct": false},
            {"text": "Tag opponents", "correct": false}
        ]
    },
    {
        "question": "What material is traditionally used to make the dice in Chaupar?",
        "answers": [
            {"text": "Ivory", "correct": false},
            {"text": "Cowrie shells", "correct": true},
            {"text": "Wood", "correct": false},
            {"text": "Metal", "correct": false}
        ]
    },
    {
        "question": "Which martial art is closely associated with Sikh culture?",
        "answers": [
            {"text": "Silambam", "correct": false},
            {"text": "Gatka", "correct": true},
            {"text": "Thang-Ta", "correct": false},
            {"text": "Vajra Mushti", "correct": false}
        ]
    },
    {
        "question": "What is the main objective in the game Astapadham?",
        "answers": [
            {"text": "To collect seeds", "correct": false},
            {"text": "To reach the center lotus of the grid", "correct": true},
            {"text": "To score the most marbles", "correct": false},
            {"text": "To defend your lane", "correct": false}
        ]
    },
    {
        "question": "What is the typical length of a Vallam Kali snake boat?",
        "answers": [
            {"text": "40-50 feet", "correct": false},
            {"text": "80-100 feet", "correct": true},
            {"text": "20-30 feet", "correct": false},
            {"text": "120-150 feet", "correct": false}
        ]
    },
    {
        "question": "Which skill is emphasized in Mallakhamb?",
        "answers": [
            {"text": "Team coordination", "correct": false},
            {"text": "Strength and flexibility", "correct": true},
            {"text": "Accuracy and speed", "correct": false},
            {"text": "Mental focus", "correct": false}
        ]
    },
    {
        "question": "In Gilli Danda, how is the gilli launched?",
        "answers": [
            {"text": "By throwing it", "correct": false},
            {"text": "By striking it with the danda", "correct": true},
            {"text": "By rolling it", "correct": false},
            {"text": "By kicking it", "correct": false}
        ]
    },
    {
        "question": "Which martial art uses stick spinning as a primary technique?",
        "answers": [
            {"text": "Silambam", "correct": true},
            {"text": "Gatka", "correct": false},
            {"text": "Thang-Ta", "correct": false},
            {"text": "Kalaripayattu", "correct": false}
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