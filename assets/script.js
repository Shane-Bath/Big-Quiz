const game = document.getElementById('game');
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

gamearea();






