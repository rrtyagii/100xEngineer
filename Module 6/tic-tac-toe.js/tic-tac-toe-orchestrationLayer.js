const ticTacToe = require('./tic-tac-toe'); // The path should be relative to the file you're writing this in.

const play = ticTacToe("Messi", "Ronaldo"); 

let result, board; 

const printBoard = (board) =>{
    console.log('==========='); 
    for(let i=0; i<3; i++){
        for(let j=1; j<=3; j++){
            process.stdout.write(`${board[3*i+j] || " ."}`)
        }
        process.stdout.write("\n"); 
    }
    console.log('==========='); 
}

[result, board] = play("X", 1); 
printBoard(board); 