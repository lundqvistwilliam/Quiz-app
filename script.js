





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

let booleanDiv = document.querySelector("#booleanDiv");
let singleChoice = document.querySelector("#singleChoice");
let multipleChoice = document.querySelector("#multipleChoice");

let booleanAltLabels = document.querySelectorAll("#boolean_alt1lbl, #boolean_alt2lbl")
let singleAltLabels = document.querySelectorAll("#single_alt1lbl,#single_alt2lbl,#single_alt3lbl,#single_alt4lbl ")
let checkboxAltLabels = document.querySelectorAll("#checkbox_alt1lbl,#checkbox_alt2lbl,#checkbox_alt3lbl,#checkbox_alt4lbl")

let toggleMode = document.querySelector("#toggleMode")
let toggleModelbl = document.querySelector("#toggleModelbl")

let historyDiv = document.querySelector("#history")

let body = document.querySelector("body");
let header = document.querySelector(".header");

let currentQuestion = 0;
let score = 0;

resultBtn.style.display = "none";
submitBtn.style.display="none"

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

startBtn.addEventListener("click", () =>{
    setup();
    loadQuiz();
    startBtn.style.display="none";
    submitBtn.style.display="block";
})

toggleMode.addEventListener("click", () =>{
    if(toggleMode.checked){
        historyDiv.style.color="white";
        darkModeToggle();
    } else {
        historyDiv.style.color="black";
        lightModeToggle();
    }
})


submitBtn.addEventListener("click",()=>{
   let text
   let question = questionsArr[currentQuestion];

   switch(question.type){
    case "boolean":
        text = this.getBooleanAnswer();
        break;

    case "singleChoice":
        text=this.getSingleChoiceAnswer();
        break;

    case "multiChoice":
        text=this.getMultiChoiceAnswer();
        break;

    default: 
        break;
   }
   let correctAnswers = questionsArr[currentQuestion].correctAnswer;
   checkCorrectAnswer(text,correctAnswers);
})

resultBtn.addEventListener("click", ()=> {
    resultBtn.style.display="none";
    scoreText.style.display="block";
    removeQuestions();
    printScore();

    historyUl.innerHTML="";
    historyArray.forEach(historyObject => {
        let li = document.createElement("li");
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
    let question = questionsArr[currentQuestion];
    questionText.innerText= question.question;
    submitBtn.disabled=true;

    switch(question.type){
    case "boolean":
        this.setQuestionAlternatives(questionsArr[currentQuestion].alternatives, booleanAltLabels);
        this.displayQuestionAlternatives("block","none","none");
        break;

    case "singleChoice":
        this.setQuestionAlternatives(questionsArr[currentQuestion].alternatives, singleAltLabels);
        this.displayQuestionAlternatives("none","block","none");
        break;

    case "multiChoice":
        this.setQuestionAlternatives(questionsArr[currentQuestion].alternatives, checkboxAltLabels);
        this.displayQuestionAlternatives("none","none","block");
        break;

    default:
        console.log("Invalid question type: " + question.type)
        break;
   }
    screenQuestionText.innerText = `Question: ${currentQuestion+1}/${questionsArr.length}`
}

function setQuestionAlternatives(alternatives,labels){
    labels.forEach((label,i) => {
        label.innerHTML = alternatives[i]
    })
}

function displayQuestionAlternatives(booleanDisplay, singleChoiceDisplay, multipleChoiceDisplay){
    booleanDiv.style.display = booleanDisplay;
    singleChoice.style.display = singleChoiceDisplay;
    multipleChoice.style.display = multipleChoiceDisplay;
}

function checkCorrectAnswer(text, correctAnswers) {
    let question = questionsArr[currentQuestion];

    let historyObject = {
        question: currentQuestion,
        answer: text
    }
    historyArray.push(historyObject)
    
    if(question.type === "multiChoice"){
        let sortedCorrectAnswers = correctAnswers.sort();
        let sortedAnswers = text.sort();

        var allCorrectAnswers = true;
        if(sortedAnswers.length !== sortedCorrectAnswers.length){
            allCorrectAnswers=false;
        } else {
        for (let i=0; i < sortedCorrectAnswers.length; i++){
            if(sortedCorrectAnswers[i] !== sortedAnswers[i]){
                allCorrectAnswers = false;
            }
        }
    }
        
    if(allCorrectAnswers){
        score++
    }
    } else if(correctAnswers.includes(text)) {
        score++
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

function getSingleChoiceAnswer(){
    let singleCoiceButtons = document.querySelectorAll("#single_alt1Btn,#single_alt2Btn,#single_alt3Btn,#single_alt4Btn")
    let singleCoiceLabels = document.querySelectorAll("#single_alt1lbl,#single_alt2lbl,#single_alt3lbl,#single_alt4lbl")
    var text
    singleCoiceButtons.forEach((singleCoiceButtons, i) => {
        if(singleCoiceButtons.checked){
            text = singleCoiceLabels[i].innerText
        }
    })
    return text
}

function getMultiChoiceAnswer(){
    let multiChoiceButtons = document.querySelectorAll("#checkbox_alt1Btn,#checkbox_alt2Btn,#checkbox_alt3Btn,#checkbox_alt4Btn");
    let multiChoiceLabels = document.querySelectorAll("#checkbox_alt1lbl,#checkbox_alt2lbl,#checkbox_alt3lbl,#checkbox_alt4lbl");
    var text = []
    multiChoiceButtons.forEach((multiChoiceButton, i) => {
        if(multiChoiceButton.checked){
            text.push(multiChoiceLabels[i].innerText)
        }
    })
    return text
}


function printScore(){
    if (score > questionsArr.length * 0.75) {
        scoreText.style.color= "green"
        scoreText.innerText =`Your score was:\n ${score}/${questionsArr.length}\n Mycket Väl Godkänt!`
    } else if (score >= questionsArr.length * 0.5){
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

