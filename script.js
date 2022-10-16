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
    },
    {
        question: "Sweden capital?",
        questionAlternative1: "Oslo",
        questionAlternative2: "Copenhagen",
        questionAlternative3: "Stockholm",
        questionAlternative4: "Helsinki",
        correctAnswer: "Stockholm"
    },
    {
        question: "What is the smallest country in the world by area?",
        questionAlternative1: "Vatican City",
        questionAlternative2: "Liechtenstein",
        questionAlternative3: "Monaco",
        questionAlternative4: "San Marino",
        correctAnswer: "Vatican City",
    },
    {
        question: "Who was the first US president?",
        questionAlternative1: "Thomas Jefferson",
        questionAlternative2: "George Washington",
        questionAlternative3: "Abraham Lincoln",
        questionAlternative4: "Theodore Roosevelt",
        correctAnswer: "George Washington",
    },
    {
        question: "In what sport do you compete to win the Stanley Cup?",
        questionAlternative1: "Baseball",
        questionAlternative2: "Hockey",
        questionAlternative3: "Basketball",
        questionAlternative4: "American football",
        correctAnswer: "Hockey",
    },
    {
        question: "Which nation won the 2010 football World Cup?",
        questionAlternative1: "Brazil",
        questionAlternative2: "Germany",
        questionAlternative3: "France",
        questionAlternative4: "Spain",
        correctAnswer: "Spain",
    },
    {
        question: "What year did Apple launch the first iPhone?",
        questionAlternative1: "2006",
        questionAlternative2: "2008",
        questionAlternative3: "2007",
        questionAlternative4: "2009",
        correctAnswer: "2008",
    }
]

let currentQuestion = 0;
let score = 0;


console.log(questionsArr)

let startBtn = document.querySelector("#startBtn");

let questionText = document.querySelector("#questionText");
let alt1Btn = document.querySelector("#alt1Btn");
let alt2Btn = document.querySelector("#alt2Btn");
let alt3Btn = document.querySelector("#alt3Btn");
let alt4Btn = document.querySelector("#alt4Btn");
let submitBtn = document.querySelector("#submitButton");
let buttons = document.querySelector("#buttonDiv")

let screenQuestionText = document.querySelector("#screenQuestionText");



startBtn.addEventListener("click", () =>{
    setup()
    loadQuiz();
    buttons.style.display ="block";
    buttons.style.display = "center";

})

submitBtn.addEventListener("click", ()=> {
    //checkCorrectAnswer();
})


function setup() {
    // add all eventlistener
    //alt1Btn.addEventListener

   // alt2Btn.addEventListener("click


   alt1Btn.addEventListener("click",()=>{
    checkCorrectAnswer2(alt1Btn.innerText, questionsArr[currentQuestion].correctAnswer)
    })


    alt2Btn.addEventListener("click",()=>{
        checkCorrectAnswer2(alt2Btn.innerText, questionsArr[currentQuestion].correctAnswer)
        })

        alt3Btn.addEventListener("click",()=>{
            checkCorrectAnswer2(alt3Btn.innerText, questionsArr[currentQuestion].correctAnswer)
            })

            alt4Btn.addEventListener("click",()=>{
                checkCorrectAnswer2(alt4Btn.innerText, questionsArr[currentQuestion].correctAnswer)
                })
}

function loadQuiz(){
    questionText.innerText = questionsArr[currentQuestion].question;
    alt1Btn.innerText = questionsArr[currentQuestion].questionAlternative1;
    alt2Btn.innerText = questionsArr[currentQuestion].questionAlternative2;
    alt3Btn.innerText = questionsArr[currentQuestion].questionAlternative3;
    alt4Btn.innerText = questionsArr[currentQuestion].questionAlternative4;
    //checkCorrectAnswer();

    console.log("score" + score)
    console.log("question" + currentQuestion)
    screenQuestionText.innerText = `Question: ${currentQuestion+1}/${questionsArr.length}`
}

function checkCorrectAnswer2(text, correctAnswer) {

    currentQuestion++
    
    console.log("button.innerText", text)
    console.log("correctAnswer", correctAnswer)

    if (text == correctAnswer) {
        console.log("rätt1")
        score++
    } else {
        console.log("fel")
    }
    // button == correctAnswer
    // if rätt:
   

    // fel: 
    
    
    loadQuiz();
}

function checkCorrectAnswer(){
    alt1Btn.addEventListener("click",()=>{

        checkCorrectAnswer2(alt1Btn.innerText, questionsArr[currentQuestion].correctAnswer)

        /*
        if(alt1Btn.innerText === questionsArr[currentQuestion].correctAnswer){
            console.log("rätt1")
            currentQuestion++
            score++
            loadQuiz();
        } else {
            console.log("fel")
            currentQuestion++
            loadQuiz();
        } */
})

    alt2Btn.addEventListener("click",()=>{
        if(alt2Btn.innerText === questionsArr[currentQuestion].correctAnswer){
            console.log("rätt1")
            currentQuestion++
            score++
            loadQuiz();
        } else {
            console.log("fel")
            currentQuestion++
            loadQuiz();
        }
    })

    alt3Btn.addEventListener("click",()=>{
        if(alt3Btn.innerText === questionsArr[currentQuestion].correctAnswer){
            console.log("rätt1")
            currentQuestion++
            score++
            loadQuiz();
        } else {
            console.log("fel")
            currentQuestion++
            loadQuiz();
        }
})

    alt4Btn.addEventListener("click",()=>{
        if(alt4Btn.innerText === questionsArr[currentQuestion].correctAnswer){
            console.log("rätt1")
            currentQuestion++
            score++
            loadQuiz();
        } else {
            console.log("fel")
            currentQuestion++
            loadQuiz();
        }
    })
    
   
}


