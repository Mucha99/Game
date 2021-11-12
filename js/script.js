function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyczki';
    }
  
    printMessage('Nie znam ruchu o id: ' + argMoveId + '.');
    return 'nieznany ruch';
}

//Computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// if (randomNumber == 1) {
//     computerMove = 'kamień';
// } else if (randomNumber == 2) {
//     computerMove = 'papier'
// } else if (randomNumber == 3) {
//     computerMove = 'nożyczki'
// }

printMessage (
    'Mój ruch to: ' + computerMove
);

//Player move
let playerInput = prompt('Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyczki');
console.log('Gracz wybrał:' + playerInput);

let playerMove = getMoveName(playerInput);

// if(playerInput == 1) {
//     playerMove = 'kamień';
// } else if (playerInput == 2) {
//     playerMove = 'papier';
// } else if (playerMove == 3) {
//     playerMove = 'nożyczki';
// }

printMessage (
    'Twój ruch to: ' + playerMove
);

//Game result
function displayResult (argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == "papier" && argPlayerMove == 'nożyczki') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == "nożyczki" && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrał!')
    } else if (argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrał!')
    } else if (argComputerMove == 'kamień' && argPlayerMove == "nożyczki") {
        printMessage('Komputer wygrał!')
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage('Remis!')
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage('Remis!')
    } else if (argComputerMove == "nożyczki" && argPlayerMove == "nożyczki") {
        printMessage('Remis!')
    } else if (argComputerMove == "nieznany ruch") {
        printMessage('Wpisz 1, 2 lub 3 !')
    }
};

displayResult(computerMove, playerMove);