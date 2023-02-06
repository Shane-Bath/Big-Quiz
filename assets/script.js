/*Start the game 
start the game, https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
   https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
   https://www.w3schools.com/jsref/prop_style_display.asp
   */

document.getElementById("start").addEventListener(
    "click",
   () => {
    document.getElementById("game-area").style.display = "flex"
    //document.getElementById("game-area").style.display === "flex"
    document.getElementById("start").style.display = "none"
   },
   false
);

//Score board
let score = 0;

// An event to tell you that you have the correct answer

// store the correct answer 

 
// A set of questions for the game in a object -JS: Definitive guide CH6 Objects CH7 Arrays

    
    let setQuestions = [
        {
            question: "What is a group of crows called ?",
            option1: "Flock",
            option2: "Murder",
            option3: "Swarm",
            option4: "Firm",
        
            correctAnswer:"Murder",
         },
         {
            question: "How many dots appear on pair of dice?", 
            option1: "42",
            option2: "37",
            option3: "46",
            option4:  "40",
               
            correctAnswer:"42",
         },
         {
            question: "Which is the only body part that is fully grown from birth?",
            option1: "Nose",
            option2: "Ears",
            option3: "Eyes",
            option4: "Elbow",
            
            correctAnswer:"Eyes",
         },

    ]
  

//console.log(setQuestions)


 //Math Random to choose question - 
 //https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
 const randomQuestion = (Object.keys(setQuestions)[Math.floor(Math.random()* Object.keys(setQuestions).length)]);
 //console.log(randomQuestion);

//Display questions and an answer in gamearea, w3school- how to display JS objects
//Use randomQuestion value to select question

let mainQuestion = document.getElementById("question").innerHTML = setQuestions[randomQuestion].question;
document.getElementById("option-1").innerHTML = setQuestions[randomQuestion].option1;
document.getElementById("option-2").innerHTML= setQuestions[randomQuestion].option2;
document.getElementById("option-3").innerHTML = setQuestions[randomQuestion].option3;
document.getElementById("option-4").innerHTML = setQuestions[randomQuestion].option4;

//https://www.w3schools.com/jsref/prop_pushbutton_value.asp  I have changed from list itemn


//how to get the correct answer ? eventlistener 
// getElementsbyclassname returns an array ? 
//question
let getCorrectAnswer = setQuestions[randomQuestion].correctAnswer;
console.log(mainQuestion);
console.log(getCorrectAnswer);


document.querySelector(".btn").addEventListener("click", displayAnswer)

function displayAnswer () {
    document.getElementById("display-answer").innerHTML = getCorrectAnswer;
}
 
        
   displayAnswer();





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






