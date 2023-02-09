
/*Start the game 
start the game, https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
   https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
   https://www.w3schools.com/jsref/prop_style_display.asp
   */

   let mainQuestion = document.getElementById("question");
   let options = Array.from(document.getElementsByClassName("btn"));
   let finalAnswer = document.getElementById("display-answer");
   let activeQuestion = {};
   let displayAnswers = false;
   let questionCounter = 0;
   let questionLeft = [];
   let restart = document.getElementById("game");
   let score = 0

  

   let totalQuestions = 3;

   
//https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object?noredirect=1&lq=1
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://stackoverflow.com/questions/29886552/why-are-objects-not-iterable-in-javascript
//https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
//https://stackoverflow.com/questions/69312775/how-do-i-populate-an-array-of-objects-where-every-object-has-an-array-inside-of
//https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript?rq=1
//https://stackoverflow.com/questions/1996747/add-new-value-to-an-existing-array-in-javascript?noredirect=1&lq=1
//https://stackoverflow.com/questions/64121914/pushing-fetched-data-to-array-of-objects
//https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript?rq=1
//https://stackoverflow.com/questions/68123766/javascript-how-to-push-fetch-data-to-an-array
//https://www.youtube.com/watch?v=uxf0--uiX0I
//https://www.youtube.com/watch?v=tc8DU14qX6I&t=10s
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://www.youtube.com/watch?v=zgHim4ZDpZY&list=PLJJVMUtpCkXWgmK8ksQGZuhlHXbG2Rlyn&index=21&t=3150s     10:00  1200 26:13


   
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results); // returning array
        data.results.map(data => {
            let setQuestions = {
                question: data.question   
            };
            console.log(setQuestions)  // returning question: question
        
        let options = [... data.incorrect_answers]; // array spread operator to divide up into a new array
        options.splice(setQuestions.options +1, 0, data.incorrect_answers); // splice into options1: etc
        console.log(options);  // returning mix of  'M&amp;M&#039;s' ?!? and clear text?
    });
})
    .catch(error => console.error(error));


//    let questionTransfer = 


//    async function bob(url) {
//     const response = await fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`);
//     let data = await response.json();
//     console.log(data);
    
// }
//  bob(questionTransfer);

// let q = questionTransfer.map(data => {
//     let setQuestions = {
//     "questions": data.results[0].question,
//     "option1": data.results[0].correct_answer,
//     };
//     return setQuestions;
// })
// console.log(q);



// fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`)
  
//             .then(response => response.json())
//             .then(data => {
//             questionTransfer = data;
//             });
// console.log(questionTransfer)
    //  = .Map(({results, question}) => ({
    //     [question]: question}));
    






//08 02 23 hwo to populate the below oject array from api. 
// fetch() and JSON?  map? and Destructuring assignment
// open triva DB API
//"question": "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?", == question
// "correct_answer": "Ed Sheeran - I See Fire",    == option 1 (or random between 1 - 4 )
// "incorrect_answers": [
// "Marvin Gaye - Sexual Healing", == option (random )
// "Coldplay - Midnight", == option (random )
// "a-ha - Take On Me" == option (random )
// then correct answer to 1-4 
// A set of questions for the game in a object -JS: Definitive guide CH6 Objects CH7 Arrays




//    const setQuestions = [
//     {
//         question: "What is a group of crows called?",
//         option1: "flock",
//         option2: "Murder",
//         option3: "Swarm",
//         option4: "Firm",
//         answer: 2,
//     },
//      {
//         question: "How many dots appear on pair of dice?", 
//         option1: "42",
//         option2: "40",
//         option3: "44",
//         option4: "38",
//         answer: 1,
//      },
//      {
//         question: "Which is the only body part that is fully grown from birth?",
//         option1: "Nose",
//         option2: "Ears",
//         option3: "Eyes",
//         option4: "Elbow",
//         answer: 3,
//      },
//      {
//         question: "",
//         option1: "",
//         option2: "",
//         option3:"",
//         option4: "",
//         answer: "",
//      }


// ];

document.getElementById("start").addEventListener(
    "click",
   () => {
    document.getElementById("game-area").style.display = "flex";
    document.getElementById("start").style.display = "none";
    document.getElementById("score").style.display ="flex";
   },
   false
);


// create array from the object array.And set ci
startGame = () => {
    questionCounter = 0;
    questionLeft = [...setQuestions];
    getNextQuestion();
};

getNextQuestion = () => {
    
    // how to reset the game https://stackoverflow.com/questions/59142915/how-to-get-back-to-the-start-of-the-array-in-javascript
    //https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript

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
        document.getElementById("score").innerText = `Score : ${score}`
        // store the score to use in endgame.js
        localStorage.setItem("score", score);
    }
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

//endGame.HMTL
//let finalScore = document.getElementById("final-score")








// Add API for questions 
// The text does not read very well, look at font 
// check javascript through validator 






//https://stackoverflow.com/questions/19030742/difference-between-innertext-innerhtml-and-value 
// select question 

 





// An event to tell you that you have the correct answer

// store the correct answer 

 




 //Math Random to choose question - 
 //https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
// const randomQuestion = (Object.keys(setQuestions)[Math.floor(Math.random()* Object.keys(setQuestions).length)]);
 //console.log(randomQuestion);
//  mainQuestion = document.getElementById("question").innerHTML = setQuestions[randomQuestion].question;
//  option1 = document.getElementById("option-1").innerHTML = setQuestions[randomQuestion].answers[0].text;
//  option2 = document.getElementById("option-2").innerHTML = setQuestions[randomQuestion].answers[1].text;
//  option3 = document.getElementById("option-3").innerHTML = setQuestions[randomQuestion].answers[2].text;
//  option4 = document.getElementById("option-4").innerHTML = setQuestions[randomQuestion].answers[3].text;





 //Display questions and an answer in gamearea, w3school- how to display JS object
//Use randomQuestion value to select question

//mainQuestion = document.getElementById("question").innerHTML = setQuestions[0].question;
// document.getElementById("option-1").innerHTML = setQuestions[randomQuestion].option1;
// document.getElementById("option-2").innerHTML= setQuestions[randomQuestion].option2;
// document.getElementById("option-3").innerHTML = setQuestions[randomQuestion].option3;
// document.getElementById("option-4").innerHTML = setQuestions[randomQuestion].option4;

//https://www.w3schools.com/jsref/prop_pushbutton_value.asp  I have changed from list itemn


//how to get the correct answer ? eventlistener 
// getElementsbyclassname returns an array ? 
//question
// let getCorrectAnswer = setQuestions[randomQuestion].correctAnswer;
// console.log(mainQuestion);
// console.log(getCorrectAnswer);


// document.querySelector(".btn").addEventListener("click", displayAnswer)

// function displayAnswer () {
//     document.getElementById("display-answer").innerHTML = getCorrectAnswer;
// }
 
        
//    displayAnswer();





// // click on button if the choice matches the getCorrectAnswer change color
// document.querySelector("button").addEventListener ('click',
// () => {
//     //if you click and the content of the button matches getCorrectAnswer 
//     // answer will be an array ? https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
//     let correctBtn = document.querySelectorAll('answer');
//     correctBtn === getCorrectAnswer;
//     //change color
//     correctBtn.style.display = 'none';

// },
// false

// )








/* ?? How to add the question from the object array, after the question has been answered
   how to confirm the correct answer?
   how to randomize the choices and? 

   create a function that setQuetion number [?] and the answers 
   addlistener event 
   Start game button 
   Use math random to select question? 
*/



// function getQuestion(setQuestions) {
//     const result = object.keys(setQuestions);
//     return result[Math.floor(math.random() * result.length)];

// }

// console.log(object.keys(setQuestions));
    










/*const game = document.getElementById('game');
const gamebtn = document.getElementById('btn');
const  category = [9, 10, 11];

// Creating my HTML elements for the quiz, to include a header, information and start button, timer and score.
function element() {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'I am a H1 Tag';
    h1.setAttribute('id', 'head');
    game.append(h1);

    const div = document.createElement('div');
    div.setAttribute('class', 'div1');
    div.innerText = 'I am text in a div';
    game.append(div);

    const button = document.createElement("BUTTON");
    button.setAttribute('id', "btn-btn");
    button.innerHTML = 'START'
    //document.body.appendChild(button);
    game.append(button);

}
element();

// Creating the game area, which will display the questions and answers. Question will come from opentbd.com API
// The player will select a category, and true or false question will be displayed in the game area.
// The true and false button will be displayed in the game area.
function gamearea() {
    const board = document.createElement('div');
    board.setAttribute('id', 'main-game')
    board.innerHTML= 'this is what to you see if you click the button';
    document.body.appendChild(board);

    const question = document.createElement('h3');
    question.setAttribute('class', 'question');

    // fetch function calling a question from the opentdb API
    category.forEach(category => {
        fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy&type=boolean`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                question.setAttribute('data-question', data.results[0].question)
                question.setAttribute('data-answer', data.results[0].correct_answer)
                
            })
            question.innerHTML = this.getAttribute('data-question'); 

            
    });
            
               
           
    board.append(question);


}

gamearea(); */
