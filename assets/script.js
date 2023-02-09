
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
   let totalQuestions = 5; // set number of questions in the game


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

//Game function, calls questions and answers from setQuestion array.
startGame = () => {  
    document.getElementById("start").addEventListener(
        "click",
       () => {
        document.getElementById("game-area").style.display = "flex"; // display main game area with questions and answers
        document.getElementById("start").style.display = "none"; // hide start button
        document.getElementById("score").style.display ="flex";
       },
       false
    );
    // keep track of questions
    questionCounter = 0;
    questionLeft = [...setQuestions];
    getNextQuestion();
};

getNextQuestion = () => {
    if (questionLeft.length === 0 || questionCounter >= totalQuestions) {      // ends game when preset number of questions is reached || or until you reach the end of all questions
        return window.location.href = "endGame.html"      // end of the game managed by endGame.js
    }

    questionCounter++;   //add questions used, 
    
    const randomQuestion = Math.floor(Math.random() * questionLeft.length);  // create a random number between 1-5 (|| max questions) shuffle questions
    activeQuestion = questionLeft[randomQuestion];     
    
    mainQuestion.innerText = activeQuestion.question; 

options.forEach((options) => {
    const number = options.dataset["option"];
    options.innerText = activeQuestion ["option" + number]; // loop through options and assign a number, in order to match the number in correct .answer (setQuestions.answer)
   });
  

questionLeft.splice(randomQuestion, 1);  
displayAnswers = true;
};
                                             
options.forEach(options => {
    options.addEventListener("click", e => {                 
        if (!displayAnswers) return;

        displayAnswers =false;

        let selection = e.target;
        let answerSelection = selection.dataset["option"];   
       let finalAnswer = "Incorrect";                          // displays correct or incorrect 
   
       if (answerSelection == activeQuestion.answer) {         //matches the click answer with the active question, if match display message and logs score
        finalAnswer ="Correct";                                
        
        score++;
        document.getElementById("score").innerText = `Score : ${score}`   // tracks score and stored in local storage
        localStorage.setItem("score", score);
      } 
       
       selection.classList.add(finalAnswer);                                //add class "incorrect" or "correct" HTML as identifier, to add css stylings 
       document.getElementById("display-answer").innerText = finalAnswer;

       setTimeout (function() {
        selection.classList.remove(finalAnswer);
        document.getElementById("display-answer").innerText = "";
        getNextQuestion();
        }, 1000);     // delays the removal of class incorrect or correct allows time for the button to change color to give visual representation of the answer.
    });
});

startGame();

