const game = document.getElementById('game');
const gamebtn = document.getElementById('btn');
const  category = [9, 10, 11];


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

function gamearea() {
    const board = document.createElement('div');
    board.setAttribute('id', 'main-game')
    board.innerHTML= 'this is what to you see if you click the button';
    document.body.appendChild(board);

    const question = document.createElement('h3')
    question.setAttribute('class', 'question');
    question.data();
    board.append(question);
    
    category.forEach(category => {
        fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy&type=boolean`)
            .then(response => response.json())
            .then(data => console.log(data))
    });
}

gamearea();


