import { getRandomInt } from "./utils";

let squares;
let message: HTMLElement;

export function runApp() {
    const promise = fetch('http://localhost:3000/game');
    //console.log('making your request');
    let secretSquareId: number;
    promise.then((response) => {
        response.json().then(x => {
            secretSquareId = x.secret;
            setUp();
        })
    })

    function setUp() {
        squares = document.querySelectorAll('.square');
        message = document.getElementById('message');
        message.innerText = 'Play the Game!';

        squares.forEach((square, index) => {
            const that = square as HTMLElement;
            that.classList.remove('winner', 'loser');
            that.removeAttribute("data-secret");
            if (index + 1 === secretSquareId) {
                that.dataset.secret = 'true';
            }

            square.addEventListener('click', handleClick)
        })
    }
}


function handleClick(evt) {
    //console.log({ evt, this: this });
    const squareClickedOn = this as HTMLElement;
    if (squareClickedOn.dataset.secret === 'true') {
        squareClickedOn.classList.add('winner');

        message.innerText = 'You win! (click here to play again!)';
        message.addEventListener('click', runApp);
        squares.forEach(square => {
            if (!square.classList.contains('winner')) {
                square.classList.remove('loser');
                square.classList.add('loser');
            }
            square.removeEventListener('click', handleClick);
        })
    } else {
        squareClickedOn.classList.add('loser');
        squareClickedOn.removeEventListener('click', handleClick);
    }
}