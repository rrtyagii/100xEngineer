const ticTacToe = (xName, Oname) => {
    const X = xName;
    const O = Oname;
  
    // const players = {
    //   "X": "X",
    //   "O": "O",
    // }
  
    //concept: LOOKUP TABLE
    const nextPlayer = {
      "X": "O",
      "O": "X",
    }
  
    //nextPlayer[currentPlayer] = if X is current player, then O is the next player
  
    let currentPlayer = 'X';
  
    const board = [
      "onGoing", //onGoing, win-x, win-0, draw
      "", "", "",
      "", "", "",
      "", "", ""
    ];
  
    const isValidMove = (move) => {
      //move should bet the right index and not already take
      return (1 <= move && move <= 9) && board[move] === "";
    };
  
    const computeStatus = () => {
      //will return "onGoing", "win-X", "win-O", "draw"
      //compute win X
      // compute win o
      //compute draw
      //continue the game
      let result = "onGoing";
      const winningCombos = [
        //rows
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
  
        //cols
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
  
        //diagonals
        [1, 5, 9],
        [3, 5, 7],
      ];
  
      winningCombos.forEach(([i1, i2, i3]) => {
        if (board[i1] === board[i2] && board[i2] === board[i3] && board[i3] === currentPlayer) {
          result = `win-${currentPlayer}`;
        }
      });
  
      let areAllCellsTake = false; 
      for (let i = 1; i <= 9; i++) {
       if(board[i] !== ""){
         areAllCellsTake = true; 
       } 
      }
      return result; 
    }
    
  
    return (player, move) => {
      //validate the right player: return <error> if not
      if (player !== currentPlayer) {
        return [false, `Not your turn. Current Player is ${currentPlayer}`];
      }
      //validate the right move: return <error> if not
      if (!isValidMove(move)) {
        return [false, "Invalid Move!"];
      }
  
      board[move] = currentPlayer;
      board[0] = computeStatus();
      currentPlayer = nextPlayer[currentPlayer];
      //advance the game; 
      // 1. update the board
      // 2. compute the game status
      // 3. next player turn
      // result
      return [true, board]; 
    }
}; 

module.exports = ticTacToe; 
