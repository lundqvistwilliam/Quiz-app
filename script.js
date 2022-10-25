


let currentQuestion = 0;
let score = 0;


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

let toggleMode = document.querySelector("#toggleMode")
let toggleModelbl = document.querySelector("#toggleModelbl")

let historyDiv = document.querySelector("#history")

let body = document.querySelector("body");
let header = document.querySelector(".header");

let questionsArr = [
    {
        question: "Apple launched their first iPhone in 2010",
        type: "boolean",
        alternatives: ["True", "False"],
        correctAnswer: ["False"],
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
        question: "Texas is the biggest state in US by area",
        type: "boolean",
        alternatives: ["True", "False"],
        correctAnswer: ["False"],
    },
    {
        question: "Which two nations won the 2010 & 2014 football World Cup?",
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

resultBtn.style.display = "none";
submitBtn.style.display="none"


startBtn.addEventListener("click", () =>{
    setup()
    loadQuiz();
    booleanBtns.style.display="block"
    booleanBtns.style.display="center"
    startBtn.style.display="none";
    submitBtn.style.display="block"

})

toggleMode.addEventListener("click", () =>{
    
    if(toggleMode.checked){
        historyDiv.style.color="white"
        darkModeToggle();
    } else {
        historyDiv.style.color="black"
        lightModeToggle();
    }

     
})


submitBtn.addEventListener("click",()=>{

   let text

   let question =questionsArr[currentQuestion];

   switch(question.type){
    case "boolean":
        text = this.getBooleanAnswer();
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
})

resultBtn.addEventListener("click", ()=> {

    resultBtn.style.display="none";

    scoreText.style.display="block";
    scoreText.style.display="center";
    removeQuestions();
    printScore();

    historyUl.innerHTML="";


    historyArray.forEach(historyObject => {
        let li = document.createElement("li");
        li.className= "li_item";
        let question = questionsArr[historyObject.question]    
        li.innerHTML = "Question " + (historyObject.question +1) + ": " + question.question +", Your answer: " + historyObject.answer + ", Correct answer: " + question.correctAnswer
        historyUl.appendChild(li);
    })
})


function setup() {
   let allButtons = document.querySelectorAll("#boolean_alt1Btn, #boolean_alt2Btn, #single_alt1Btn, #single_alt2Btn,#single_alt3Btn,#single_alt4Btn,#checkbox_alt1Btn,#checkbox_alt2Btn,#checkbox_alt3Btn,#checkbox_alt4Btn")
   allButtons.forEach(button => {
    button.addEventListener("click", () =>{
        submitBtn.disabled = false;
    })
   })
}



function loadQuiz(){

    uncheckAll();
    let question = questionsArr[currentQuestion]
    questionText.innerText= question.question;

    submitBtn.disabled=true;

    
   switch(question.type){
    case "boolean":
        boolean_alt1lbl.innerHTML = questionsArr[currentQuestion].alternatives[0];
        boolean_alt2lbl.innerHTML = questionsArr[currentQuestion].alternatives[1];
        boolean_alt1Btn.checked = false;
        boolean_alt2Btn.checked = false;

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

        single_alt1Btn.checked = false;
        single_alt2Btn.checked = false;
        single_alt3Btn.checked = false;
        single_alt4Btn.checked = false;


      
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

        checkbox_alt1Btn.checked = false;
        checkbox_alt2Btn.checked = false;
        checkbox_alt3Btn.checked = false;
        checkbox_alt4Btn.checked = false;


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
     
    if(question.type === "multiChoice"){
        var multiChoiceScore = 0
        text.forEach(answer => {
            if(correctAnswers.includes(answer)){
                multiChoiceScore = 1
            } else {
                multiChoiceScore = 0;
            }
        })
        multiChoiceScore = Math.max(multiChoiceScore,0)
        score += multiChoiceScore
    } else {
        if (correctAnswers.includes(text)) {
            score++
        }
    }
    
   
    if(currentQuestion === questionsArr.length -1){
        resultBtn.disabled=false;
        resultBtn.style.display="block";
        submitBtn.style.display="none";
    } else {
        currentQuestion++
        loadQuiz();
    }
    
}

function getBooleanAnswer(){
    let trueButton = document.querySelector("#boolean_alt1Btn")
    let falseButton = document.querySelector("#boolean_alt2Btn")

    if(trueButton.checked){
        return trueButton.value
       } else if(falseButton.checked) {
        return falseButton.value
       } 

}


function printScore(){
    if (score > questionsArr.length * 0.75) {
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

function uncheckAll(){
    let allButtons = document.querySelectorAll("#boolean_alt1Btn, #boolean_alt2Btn, #single_alt1Btn, #single_alt2Btn,#single_alt3Btn,#single_alt4Btn,#checkbox_alt1Btn,#checkbox_alt2Btn,#checkbox_alt3Btn,#checkbox_alt4Btn")
    allButtons.forEach(button => {
        button.checked = false;
    })
}

function removeQuestions() {
    questionText.style.display="none";
    singleChoice.style.display="none";
    screenQuestionText.style.display="none";

}

function darkModeToggle(){
    this.modeToggle("#1F1B24", "#1F1B24", "white")
}

function lightModeToggle(){
    this.modeToggle("white", "white", "black")
}

function modeToggle(bodyColor, headerColor, textColor) {
    body.style.background = bodyColor;
    body.style.transition = "1s";
    startBtn.style.color = bodyColor;
    header.style.background = headerColor;  
    toggleModelbl.style.color = textColor;
    screenQuestionText.style.color = textColor;
    container.style.background = headerColor;
    questionText.style.color=textColor;
    booleanDiv.style.color=textColor;
    singleChoice.style.color=textColor;
    multipleChoice.style.color=textColor;
}