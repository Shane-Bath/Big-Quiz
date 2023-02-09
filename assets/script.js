
   let mainQuestion = document.getElementById("question");
   let options = Array.from(document.getElementsByClassName("btn"));
   let finalAnswer = document.getElementById("display-answer");
   let activeQuestion = {};
   let displayAnswers = false;
   let questionCounter = 0;
   let questionLeft = [];
   let restart = document.getElementById("game");
   let score = 0
   document.getElementById("score").innerText = `Score : 0`
   let totalQuestions = 5; // set number of questions


const setQuestions = [
    {
        question: "What is a group of crows called?",
        option1: "flock",
        option2: "Murder",
        option3: "Swarm",
        option4: "Firm",
        answer: 2,
    },
     {
        question: "How many dots appear on pair of dice?", 
        option1: "42",
        option2: "40",
        option3: "44",
        option4: "38",
        answer: 1,
     },
     {
        question: "Which is the only body part that is fully grown from birth?",
        option1: "Nose",
        option2: "Ears",
        option3: "Eyes",
        option4: "Elbow",
        answer: 3,
     },
     {
        question: "Where would you be if you were standing on the spanish Steps?",
        option1: "Paris",
        option2: "Dublin",
        option3:"New York",
        option4: "Rome",
        answer: "4",
     },
     {
        question: "What is the most common surname in the United States?",
        option1: "Smith",
        option2: "Jones",
        option3:"Murphy",
        option4: "Javed",
        answer: "1",
     },
     {
        question: "What year was the United Nations established?",
        option1: "1939",
        option2: "1945",
        option3:"1952",
        option4: "1943",
        answer: "2",
     },
     {
        question: "How many elements are in the periodic table?",
        option1: "99",
        option2: "101",
        option3:"118",
        option4: "145",
        answer: "3",
     },
     {
        question: "What shoe brand makes the Mexico 66?",
        option1: "Nike",
        option2: "Reebok",
        option3:"Adidas",
        option4: "Onitsuka Tiger",
        answer: "4",
     },
     {
        question: "What company was originally called Cadabra? ",
        option1: "Intel",
        option2: "Yahoo",
        option3:"Google",
        option4: "Amazon",
        answer: "4",
     },
     {
        question: "How many ghosts chase Pac-Man at the start of each game?",
        option1: "1",
        option2: "2",
        option3:"4",
        option4: "3",
        answer: "3",
     },
        
];

//Game function, calls questions and answers for setQuestion array.
startGame = () => {  
    document.getElementById("start").addEventListener(
        "click",
       () => {
        document.getElementById("game-area").style.display = "flex";
        document.getElementById("start").style.display = "none";
        document.getElementById("score").style.display ="flex";
       },
       false
    );
    questionCounter = 0;
    questionLeft = [...setQuestions];
    getNextQuestion();
};

getNextQuestion = () => {
    if (questionLeft.length === 0 || questionCounter >= totalQuestions) {
        return window.location.href = "endGame.html"
    }
//add questions 
    questionCounter++;
    
// select random question
const randomQuestion = Math.floor(Math.random() * questionLeft.length);
//console.log(randomQuestion); // working selection number between 0-2
activeQuestion = questionLeft[randomQuestion];

//populate the question and choose from the array
mainQuestion.innerText = activeQuestion.question;
//populate the answers https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
options.forEach((options) => {
    const number = options.dataset["option"];
    options.innerText = activeQuestion ["option" + number];
    
});

// remove question from array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

questionLeft.splice(randomQuestion, 1);
displayAnswers =true;
};

options.forEach(options => {
    options.addEventListener("click", e => {
        if (!displayAnswers) return;

        displayAnswers =false;

        let selection = e.target;
        let answerSelection = selection.dataset["option"];
       // show correct answer

       let finalAnswer = "Incorrect";
   
       if (answerSelection == activeQuestion.answer) {
        finalAnswer ="Correct";
        score++;
        //console.log(score)
        document.getElementById("score").innerText = `Score : ${score}`
        localStorage.setItem("score", score);
      } 

         
   
        // store the score to use in endgame.js
        
    
//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
//clear inner.HTML https://stackoverflow.com/questions/22593759/how-do-i-clear-inner-html
//https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element  setAttribute is over writing the class in the element, I want to add an extra class
       
       selection.classList.add(finalAnswer);
       document.getElementById("display-answer").innerText = finalAnswer;

       setTimeout (function() {
        selection.classList.remove(finalAnswer);
        document.getElementById("display-answer").innerText = "";
        getNextQuestion();
        }, 1000);
    });
});

startGame();

