const game = document.getElementById('game')
const gamebtn = document.getElementById('btn')


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
    button.innerHTML = ' Press Here'
    //document.body.appendChild(button);
    game.append(button);

}
element();

function gamearea() {
    const board = document.createElement('div');
    board.setAttribute('id', 'main-game')
    if (board.style.display === 'none'){
        board.style.display = 'block';
    } else {
    board.innerHTML= 'this is what to you see if you click the button';
    document.body.appendChild(board)
    }
}

gamearea();
