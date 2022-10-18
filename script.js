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
        question: "1+1 equals 2?",
        type: "boolean",
        alternatives: ["True", "False"],
        correctAnswer: ["True"],
    },
    {
        question: "What is the name of Australia's capital city?",
        type: "singleChoice",
        alternatives: ["Brisbane", "Sydney", "Perth", "Canberra"],
        correctAnswer: ["Canberra"],
    },
    {
        question: "What is the smallest country in the world by area?",
        type: "singleChoice",
        alternatives: ["Vatican City", "Liechtenstein","Monaco","San Marino"],
        correctAnswer: ["Vatican City"],
    },
    {
        question: "Who was the first US president?",
        type: "singleChoice",
        alternatives: ["Thomas Jefferson","George Washington","Abraham Lincoln","Theodore Roosevelt"],
        correctAnswer: ["George Washington"],
    },
    {
        question: "Arizona is the biggest state in US by area?",
        type: "boolean",
        alternatives: ["True", "False"],
        correctAnswer: ["False"],
    },
    {
        question: "Which nations won the 2010 & 2014 football World Cup?",
        type: "multiChoice",
        alternatives: ["Brazil","Germany","France","Spain"],
        correctAnswer: ["Germany","Spain"],
    },
    {
        question: "Which countries have over 50 million population?",
        type: "multiChoice",
        alternatives: ["Italy","Thailand","Canada","Turkey"],
        correctAnswer: ["Italy","Thailand","Turkey"],
    },
    {
        question: "Which planets are next to Earth?",
        type: "multiChoice",
        alternatives: ["Mercury","Venus","Mars","Jupiter"],
        correctAnswer: ["Venus","Mars"],
    },
    {
        question: "Is the Black box in an airplane actually black?",
        type: "boolean",
        alternatives: ["True", "False"],
        correctAnswer: ["False"],
    },
    {
        question: "How many elements are there on the periodic table?",
        type:"singleChoice",
        alternatives:["118","181","108","188"],
        correctAnswer: ["118"],
    }

]

let currentQuestion = 0;
let score = 0;

/*
let alt1Btn = document.querySelector("#alt1Btn");
let alt2Btn = document.querySelector("#alt2Btn");
let alt3Btn = document.querySelector("#alt3Btn");
let alt4Btn = document.querySelector("#alt4Btn");
*/

let startBtn = document.querySelector("#startBtn");

let questionText = document.querySelector("#questionText");

let resultBtn = document.querySelector("#resultBtn");
let buttons = document.querySelector("#buttonDiv");
let booleanBtns = document.querySelector("#booleanDiv");
let submitBtn = document.querySelector("#submitBtn");

let historyUl = document.querySelector("#history");
let historyArray =[];

let scoreText = document.querySelector("#scoreText");
let screenQuestionText = document.querySelector("#screenQuestionText");

let boolean_alt1Btn = document.querySelector("#boolean_alt1Btn");
let boolean_alt2Btn = document.querySelector("#boolean_alt2Btn");
let boolean_alt1lbl= document.querySelector("#boolean_alt1lbl");
let boolean_alt2lbl= document.querySelector("#boolean_alt2lbl");

let booleanDiv = document.querySelector("#booleanDiv");
let singleChoice = document.querySelector("#singleChoice");
let multipleChoice = document.querySelector("#multipleChoice");

let single_alt1Btn = document.querySelector("#single_alt1Btn");
let single_alt2Btn = document.querySelector("#single_alt2Btn");
let single_alt3Btn = document.querySelector("#single_alt3Btn");
let single_alt4Btn = document.querySelector("#single_alt4Btn");
let single_alt1lbl= document.querySelector("#single_alt1lbl");
let single_alt2lbl= document.querySelector("#single_alt2lbl");
let single_alt3lbl= document.querySelector("#single_alt3lbl");
let single_alt4lbl= document.querySelector("#single_alt4lbl");


let checkbox_alt1Btn = document.querySelector("#checkbox_alt1Btn");
let checkbox_alt2Btn = document.querySelector("#checkbox_alt2Btn");
let checkbox_alt3Btn = document.querySelector("#checkbox_alt3Btn");
let checkbox_alt4Btn = document.querySelector("#checkbox_alt4Btn");
let checkbox_alt1lbl= document.querySelector("#checkbox_alt1lbl");
let checkbox_alt2lbl= document.querySelector("#checkbox_alt2lbl");
let checkbox_alt3lbl= document.querySelector("#checkbox_alt3lbl");
let checkbox_alt4lbl= document.querySelector("#checkbox_alt4lbl");

let lightModeBtn = document.querySelector("#lightModeBtn");
let darkModeBtn = document.querySelector("#darkModeBtn");

lightModeBtn.addEventListener("click", ()=>{
    
})




resultBtn.style.display = "none";




startBtn.addEventListener("click", () =>{
    setup()
    loadQuiz();
    booleanBtns.style.display="block"
    booleanBtns.style.display="center"
    startBtn.style.display="none";
})

submitBtn.addEventListener("click",()=>{

   let text
   if(!boolean_alt1Btn.checked && !boolean_alt2Btn.checked){
    alert("You must click on an answer.")
   }

   let question =questionsArr[currentQuestion];

   switch(question.type){
    case "boolean":
        if(boolean_alt1Btn.checked){
            text = boolean_alt1Btn.value
           } else if(boolean_alt2Btn.checked) {
            text = boolean_alt2Btn.value
           } 
           break;

    case "singleChoice":
        if(single_alt1Btn.checked){
            text= single_alt1lbl.innerText
           } else if(single_alt2Btn.checked){
            text=single_alt2lbl.innerText
           } else if(single_alt3Btn.checked){
            text=single_alt3lbl.innerText
           } else if(single_alt4Btn.checked) {
            text=single_alt4lbl.innerText
           }
           break;
    case "multiChoice":
        text = []
        if(checkbox_alt1Btn.checked){
            text.push(checkbox_alt1lbl.innerText)
        }
        if(checkbox_alt2Btn.checked){
            text.push(checkbox_alt2lbl.innerText)
        }
        if(checkbox_alt3Btn.checked){
            text.push(checkbox_alt3lbl.innerText)
        }
        if(checkbox_alt4Btn.checked){
            text.push(checkbox_alt4lbl.innerText)
        }
        break;

    default: 
        break;
   }

   

   

   

   let correctAnswers = questionsArr[currentQuestion].correctAnswer;
   checkCorrectAnswer(text,correctAnswers)
   console.log("Text: " + text, "correctAnswers: " + correctAnswers)
   console.log(score)
})

resultBtn.addEventListener("click", ()=> {

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

    /*
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
    */

}



function loadQuiz(){
    let question = questionsArr[currentQuestion]
    questionText.innerText= question.question;
    
   switch(question.type){
    case "boolean":
        boolean_alt1lbl.innerHTML = questionsArr[currentQuestion].alternatives[0];
        boolean_alt2lbl.innerHTML = questionsArr[currentQuestion].alternatives[1];

        booleanDiv.style.display="block"
        booleanDiv.style.display="center"
        singleChoice.style.display="none";
        multipleChoice.style.display="none";

        break;

    case "singleChoice":
        single_alt1lbl.innerHTML = questionsArr[currentQuestion].alternatives[0];
        single_alt2lbl.innerHTML = questionsArr[currentQuestion].alternatives[1];
        single_alt3lbl.innerHTML = questionsArr[currentQuestion].alternatives[2];
        single_alt4lbl.innerHTML = questionsArr[currentQuestion].alternatives[3];

      
        singleChoice.style.display="block";
        singleChoice.style.display="center";
        booleanDiv.style.display="none";
        multipleChoice.style.display="none"

        break;

    case "multiChoice":
        checkbox_alt1lbl.innerHTML = questionsArr[currentQuestion].alternatives[0];
        checkbox_alt2lbl.innerHTML = questionsArr[currentQuestion].alternatives[1];
        checkbox_alt3lbl.innerHTML = questionsArr[currentQuestion].alternatives[2];
        checkbox_alt4lbl.innerHTML = questionsArr[currentQuestion].alternatives[3];

        multipleChoice.style.display="block";
        multipleChoice.style.display="center";
        singleChoice.style.display="none"
        booleanDiv.style.display="none";

        break;
    default:
        console.log("Invalid question type: " + question.type)
        break;
   }

    screenQuestionText.innerText = `Question: ${currentQuestion+1}/${questionsArr.length}`
}

function checkCorrectAnswer(text, correctAnswers) {

    let question = questionsArr[currentQuestion];

    let historyObject = {
        question: currentQuestion,
        answer: text
    }
    historyArray.push(historyObject)
    console.log(historyObject)
    
    console.log("text", text)
    console.log("correctA", correctAnswers)

    if(question.type === "multiChoice"){
        var multiChoiceScore = 0
        text.forEach(answer => {
            if(correctAnswers.includes(answer)){
                multiChoiceScore++
            } else {
                multiChoiceScore--
            }
        })
        multiChoiceScore = Math.max(multiChoiceScore,0)

        console.log(multiChoiceScore + " av " + correctAnswers.length + " rätt")
        score += multiChoiceScore
    } else {
        if (correctAnswers.includes(text)) {
            console.log("rätt1")
            score++
        } else {
            console.log("fel1")
        }
    }
   
    if(currentQuestion === questionsArr.length -1){
        console.log("completed")
        resultBtn.disabled=false;
        resultBtn.style.display="block";
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
    singleChoice.style.display="none"
    
}