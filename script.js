// ==== Data Setup ====

// Years available
const years = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];

// Sample questions data (add more for each year)
const questionsData = {
    2015: [
        { question: "Who is considered the father of Political Science?", options: ["Plato","Aristotle","Machiavelli","Socrates"], answer: 1, explanation: "Aristotle is known as the father of Political Science." },
        { question: "The term 'Liberty' means?", options: ["Absence of law","Freedom under law","Unlimited freedom","Obedience"], answer: 1, explanation: "Liberty is freedom under law." }
    ],
    2016: [
        { question: "What is the capital of France?", options: ["Paris","London","Berlin","Rome"], answer: 0, explanation: "Paris is the capital of France." }
    ]
    // Add remaining years similarly
};

// ==== DOM Elements ====
const yearList = document.getElementById('yearList');
const selectedYearTitle = document.getElementById('selectedYear');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const submitBtn = document.getElementById('submitBtn');
const explanationDiv = document.getElementById('explanation');
const timerDiv = document.getElementById('timer');

// Navigation Buttons
let nextBtn, prevBtn;

// ==== Variables ====
let currentYear = null;
let currentQuestionIndex = 0;
let selectedOption = null;
let timerInterval;
let timePerQuestion = 120; // 2 minutes
let timeRemaining = timePerQuestion;
let score = 0;

// ==== Populate Year List ====
years.forEach(y => {
    const li = document.createElement('li');
    li.textContent = y;
    li.addEventListener('click', () => selectYear(y));
    yearList.appendChild(li);
});

// ==== Select Year ====
function selectYear(year){
    currentYear = year;
    currentQuestionIndex = 0;
    score = 0;
    selectedYearTitle.textContent = `Year: ${year}`;
    loadQuestion();
}

// ==== Load Question ====
function loadQuestion(){
    clearInterval(timerInterval);
    selectedOption = null;
    timeRemaining = timePerQuestion;
    explanationDiv.innerHTML = "";

    const questions = questionsData[currentYear];
    if(!questions || questions.length === 0){
        questionText.textContent = "No questions available for this year.";
        optionsList.innerHTML = "";
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = `Q${currentQuestionIndex+1}: ${question.question}`;

    optionsList.innerHTML = "";
    question.options.forEach((opt,index) => {
        const li = document.createElement('li');
        li.textContent = opt;
        li.addEventListener('click', () => selectOption(index, li));
        optionsList.appendChild(li);
    });

    // Add navigation buttons if not exist
    if(!nextBtn){
        nextBtn = document.createElement('button');
        nextBtn.textContent = "Next";
        nextBtn.style.marginLeft = "10px";
        nextBtn.addEventListener('click', nextQuestion);
        submitBtn.parentNode.appendChild(nextBtn);
    }
    if(!prevBtn){
        prevBtn = document.createElement('button');
        prevBtn.textContent = "Previous";
        prevBtn.style.marginLeft = "10px";
        prevBtn.addEventListener('click', prevQuestion);
        submitBtn.parentNode.appendChild(prevBtn);
    }

    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
}

// ==== Select Option ====
function selectOption(index, li){
    selectedOption = index;
    Array.from(optionsList.children).forEach(c => c.style.background = '#fdebd3');
    li.style.background = '#fad7a0';
}

// ==== Submit Answer ====
submitBtn.addEventListener('click', () => {
    if(selectedOption === null) return alert("Select an option first!");

    clearInterval(timerInterval);
    const question = questionsData[currentYear][currentQuestionIndex];

    if(selectedOption === question.answer){
        score++;
    }

    explanationDiv.innerHTML = `<strong>Correct Answer:</strong> ${question.options[question.answer]}<br><strong>Explanation:</strong> ${question.explanation}`;
});

// ==== Next Question ====
function nextQuestion(){
    const questions = questionsData[currentYear];
    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        questionText.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
        optionsList.innerHTML = "";
        explanationDiv.innerHTML = "";
    }
}

// ==== Previous Question ====
function prevQuestion(){
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ==== Timer ====
function updateTimer(){
    timeRemaining--;
    updateTimerDisplay();

    if(timeRemaining <= 0){
        clearInterval(timerInterval);
        explanationDiv.innerHTML = `<strong>Time Over!</strong> Correct Answer: ${questionsData[currentYear][currentQuestionIndex].options[questionsData[currentYear][currentQuestionIndex].answer]}`;
    }
}

function updateTimerDisplay(){
    let minutes = Math.floor(timeRemaining/60);
    let seconds = timeRemaining % 60;
    timerDiv.textContent = `Time: ${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

// ==== Mobile Menu Toggle ====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
