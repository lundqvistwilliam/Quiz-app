/*
Du har fått i uppgift att skapa en quiz-applikation åt Ankademin. 
Användare ska kunna svara på frågor och få feedback på huruvida 
hen besvarat dessa rätt eller fel. Applikationen ska fungera utan 
några större buggar. Du väljer själv vilka frågor som quizet ska bestå utav.

Du ska även ha ditt projekt på Github och pusha upp kod 
kontinuerligt under projektets gång.


Quizet ska innehålla 10 frågor. Frågorna ska bestå utav 
sant/falskt påståenden med två möjliga svarsalternativ: Sant eller Falskt.

Användaren ska utöver att besvara frågor för quizet, 
även kunna byta utseende på sidan mellan dark mode 
(dvs mörk bakgrundsfärg med ljus text ) och light mode 
(ljus bakgrundsfärg med mörk text).

Användaren ska kunna besvara samtliga frågor och sedan 
klicka på en knapp för att se sitt resultat.

Skriv ut antal rätt som användaren fått. Använd även 
färg och text för att meddela användarens resultat utefter följande kriterier: 

< 50% - Underkänt (röd)
50%-75% - Godkänt (gul/orange)
> 75% - Mycket väl godkänt (grönt)
*/


let questionsArr = [
    {
        question: "1+1 equals?",
        questionAlternative1: "1",
        questionAlternative2: "4",
        questionAlternative3: "3",
        questionAlternative4: "2",
        correctAnswer: "2",
        type: "multipleChoice",
    },
    {
        question: "What is the name of Australia's capital city?",
        questionAlternative1: "Brisbane",
        questionAlternative2: "Sydney",
        questionAlternative3: "Perth",
        questionAlternative4: "Canberra",
        correctAnswer: "Canberra",
        type: "multipleChoice",
    },
    {
        question: "What is the smallest country in the world by area?",
        questionAlternative1: "Vatican City",
        questionAlternative2: "Liechtenstein",
        questionAlternative3: "Monaco",
        questionAlternative4: "San Marino",
        correctAnswer: "Vatican City",
        type: "multipleChoice",
    },
    {
        question: "Who was the first US president?",
        questionAlternative1: "Thomas Jefferson",
        questionAlternative2: "George Washington",
        questionAlternative3: "Abraham Lincoln",
        questionAlternative4: "Theodore Roosevelt",
        correctAnswer: "George Washington",
        type: "multipleChoice",
    },
    {
        question: "In what sport do you compete to win the Stanley Cup?",
        questionAlternative1: "Baseball",
        questionAlternative2: "Hockey",
        questionAlternative3: "Basketball",
        questionAlternative4: "American football",
        correctAnswer: "Hockey",
        type: "multipleChoice",
    },
    {
        question: "Which nation won the 2010 football World Cup?",
        questionAlternative1: "Brazil",
        questionAlternative2: "Germany",
        questionAlternative3: "France",
        questionAlternative4: "Spain",
        correctAnswer: "Spain",
        type: "multipleChoice",
    },
    {
        question: "What year did Apple launch the first iPhone?",
        questionAlternative1: "2006",
        questionAlternative2: "2008",
        questionAlternative3: "2007",
        questionAlternative4: "2009",
        correctAnswer: "2008",
        type: "multipleChoice",
    },
    {
        question: "Which planet is closest to the sun?",
        questionAlternative1: "Mercury",
        questionAlternative2: "Venus",
        questionAlternative3: "Mars",
        questionAlternative4: "Jupiter",
        correctAnswer: "Mercury",
        type: "multipleChoice",
    },
    {
        question: "Who was the first Roman emperor?",
        questionAlternative1: "Tiberius",
        questionAlternative2: "Nero",
        questionAlternative3: "Augustus",
        questionAlternative4: "Caligula",
        correctAnswer: "Augustus",
        type: "multipleChoice",
    },
    {
        question: "How many elements are there on the periodic table?",
        questionAlternative1: "118",
        questionAlternative2: "181",
        questionAlternative3: "108",
        questionAlternative4: "188",
        correctAnswer: "118",
        type: "multipleChoice",
    }

]

let currentQuestion = 0;
let score = 0;


let startBtn = document.querySelector("#startBtn");

let questionText = document.querySelector("#questionText");
let alt1Btn = document.querySelector("#alt1Btn");
let alt2Btn = document.querySelector("#alt2Btn");
let alt3Btn = document.querySelector("#alt3Btn");
let alt4Btn = document.querySelector("#alt4Btn");
let submitBtn = document.querySelector("#submitButton");
let buttons = document.querySelector("#buttonDiv");

let historyUl = document.querySelector("#history");
let historyArray =[];

let scoreText = document.querySelector("#scoreText");
let screenQuestionText = document.querySelector("#screenQuestionText");

submitBtn.disabled =true;




startBtn.addEventListener("click", () =>{
    setup()
    loadQuiz();
    buttons.style.display ="block";
    buttons.style.display = "center";
    startBtn.style.display="none";
})

submitBtn.addEventListener("click", ()=> {

    scoreText.style.display="block";
    scoreText.style.display="center";
    removeQuestions();
    printScore();
    console.log(history);

    historyUl.innerHTML="";


    historyArray.forEach(historyObject => {
        let li = document.createElement("li");
        let question = questionsArr[historyObject.question]
        li.innerHTML = "Question " + (historyObject.question +1) + ": " + question.question +", Your answer: " + historyObject.answer + ", Correct answer: " + question.correctAnswer
        historyUl.appendChild(li);
    })
})


function setup() {

   alt1Btn.addEventListener("click",()=>{
    checkCorrectAnswer(alt1Btn.innerText, questionsArr[currentQuestion].correctAnswer)
    })

   alt2Btn.addEventListener("click",()=>{
        checkCorrectAnswer(alt2Btn.innerText, questionsArr[currentQuestion].correctAnswer)
    })

   alt3Btn.addEventListener("click",()=>{
        checkCorrectAnswer(alt3Btn.innerText, questionsArr[currentQuestion].correctAnswer)
    })

   alt4Btn.addEventListener("click",()=>{
        checkCorrectAnswer(alt4Btn.innerText, questionsArr[currentQuestion].correctAnswer)
    })
}

function loadQuiz(){
    questionText.innerText = questionsArr[currentQuestion].question;
    alt1Btn.innerText = questionsArr[currentQuestion].questionAlternative1;
    alt2Btn.innerText = questionsArr[currentQuestion].questionAlternative2;
    alt3Btn.innerText = questionsArr[currentQuestion].questionAlternative3;
    alt4Btn.innerText = questionsArr[currentQuestion].questionAlternative4;

    screenQuestionText.innerText = `Question: ${currentQuestion+1}/${questionsArr.length}`
}

function checkCorrectAnswer(text, correctAnswer) {

    let question = questionsArr[currentQuestion];

    let historyObject = {
        question: currentQuestion,
        answer: text
    }
    historyArray.push(historyObject)
    console.log(historyObject)


    
    if (text === correctAnswer) {
        console.log("rätt1")
        score++
    } else {
        console.log("fel")
    }
   
    if(currentQuestion === questionsArr.length -1){
        console.log("completed")
        submitBtn.disabled=false;
    } else {
        currentQuestion++
        loadQuiz();
    }
    
}



function printScore(){
    if(score > questionsArr.length * 0.75){
        scoreText.style.color= "green"
        scoreText.innerText =`Your score was:\n ${score}/${questionsArr.length}\n Mycket Väl Godkänt!`
    } else if (score > questionsArr.length * 0.5){
        scoreText.style.color= "orange"
        scoreText.innerText =`Your score was:\n ${score}/${questionsArr.length}\n Godkänt`
    } else if(score < questionsArr.length * 0.5){
        scoreText.style.color= "red"
        scoreText.innerText =`Your score was:\n ${score}/${questionsArr.length}\nUnderkänt`
    }

}

function removeQuestions(){
    questionText.style.display="none";
    alt1Btn.style.display="none";
    alt2Btn.style.display="none";
    alt3Btn.style.display="none";
    alt4Btn.style.display="none";
}