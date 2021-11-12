function playGame (playerInput) {
    clearMessages();

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
    
    printMessage (
        'Mój ruch to: ' + computerMove
    );
    
    //Player move
    console.log('Gracz wybrał:' + playerInput);
    
    let playerMove = getMoveName(playerInput);
    
    printMessage (
        'Twój ruch to: ' + playerMove
    );
    
    //Game result
    function displayResult (argComputerMove, argPlayerMove) {
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
        } else if (argComputerMove == "nożyczki" && argPlayerMove == "nożyczki"){
            printMessage('Remis!')
        } else if (argComputerMove == "nieznany ruch") {
            printMessage('Wpisz 1, 2 lub 3 !')
        }
    };
    
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
