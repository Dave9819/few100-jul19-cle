//import './styles.css';
//import { add, PI } from './utils';
//console.log('Ready to Party');

//console.log(add(10, 18));

//console.log(PI);

const nameInput = document.getElementById('name') as HTMLInputElement;
const doitButton = document.getElementById('doit') as HTMLInputElement;
const messageOutput = document.getElementById('message');

doitButton.addEventListener('click', function () {
    const enteredName = nameInput.value;
    messageOutput.innerText = enteredName.toUpperCase();
});