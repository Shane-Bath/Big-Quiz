/*Start the game 
start the game, https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
   https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
   https://www.w3schools.com/jsref/prop_style_display.asp
   */

document.getElementById("start").addEventListener(
    "click",
   () => {
    document.getElementById("game-area").style.display = "flex"
    document.getElementById("game-area").style.display === "flex"
    document.getElementById("start").style.display = "none"
   },
   false
);



 
// A set of questions for the game in a object -JS: Definitive guide CH6 Objects CH7 Arrays

    
    let setQuestions = [
        {
            question: "What is a group of crows called ?",
            answers: {
                1: "Flock",
                2: "Murder",
                3: "Swarm",
                4: "Firm",
            },
            correctAnswer:"2",
         },
         {
            question: "How many dots appear on pair of dice?",
            answers: {
                1: "42",
                2: "37",
                3: "46",
                4: "40",
            },
            correctAnswer:"1",
         },
         {
            question: "Which is the only body part that is fully grown from birth?",
            answers: {
                1: "Nose",
                2: "Ears",
                3: "Eyes",
                4: "Elbow",
            },
            correctAnswer:"2",
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
document.getElementById("option-1").innerHTML = setQuestions[randomQuestion].answers[1];
document.getElementById("option-2").innerHTML = setQuestions[randomQuestion].answers[2];
document.getElementById("option-3").innerHTML = setQuestions[randomQuestion].answers[3];
document.getElementById("option-4").innerHTML = setQuestions[randomQuestion].answers[4];

//how to get the correct answer ? eventlistener 

document.getElementsByClassName('answer').addEventListener (
    "click",

    () => {
        const correct = onclick === setQuestions.correctAnswer;
        

        })

    

console.log(correct);


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






