const snakeAndLadders = (player_Red, player_Blue) => {

  const red = player_Red;
  const blue = player_Blue

  let currentPlayer = "red";

  const nextPlayer = {
    "red": "blue",
    "blue": "red"
  };

  const ladders = { 4: 56, 12: 50, 14: 55, 22: 58, 41: 79, 54: 88 };

  const snakes = {
    28: 10,
    37: 3,
    48: 16,
    75: 32,
    94: 71,
    96: 42
  };

  const board = ['onGoing', '', '', '', '🪜', '', '', '', '', '', '', '', '🪜', '', '🪜', '', '', '', '', '', '', '', '🪜', '', '', '', '', '', '🐍', '', '', '', '', '', '', '', '', '🐍', '', '', '', '🪜', '', '', '', '', '', '', '🐍', '', '', '', '', '', '🪜', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '🐍', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '🐍', '', '🐍', '', '', '', ''];


  // const board = new Map();
  
  // for (let i = 0; i < boardString.length; i++) {
  //     board.set(i, [boardString[i]]);
  // }

  let playerPositionState = {
    red : 1, 
    blue : 1, 
  }
  
  const isValidMove = (move) => {
    /**
     * What is a valid move in real life Snakes and Ladder? 
     * 
     * Well, the numerical value lies with 1 and 6 ; two players can infact sit on one spot ; so I am assuming currentPosition + move does not go beyond the board i.e 100th spot. 
     * 
     */
    let playerCurrentPosition = playerPositionState[currentPlayer];
    return (1 <= move && move <= 6) && (playerCurrentPosition + move <= 100);
  }


  const computePlay = (move) => {
    // returns ongoing, win-red, win-blue, draw; 
    let result = onGoing;

      // how is a winner determined? 
      //   Whoever goes to the spot 100 0r index 100 first; 

    if(playerNewPosition === 100){
      result = `win-${currentPlayer}`;
      board[0] = result; 
      return board; 
    }

      // how does a player moves? 
      //   * the player enters a legal move, then move along the board.
      //     - this means that we add the legal move to the players' current position

      //   * if the player lands on the index where there is a ladder, 
      //     - we add the ladder's value to the players' current position.
        
      //   * if the player lands on the index where there is a snake, 
      //     - we subtract the snake's value

      //   * Two players can sit on the same spot.

      const currentPlayerPosition = playerPositionState[currentPlayer]; 
      const playerPositionAfterMove = currentPlayerPosition + move; 

      switch(board[playerPositionAfterMove]){
        case "":
          playerPositionState[currentPlayer] = playerPositionAfterMove; 
          console.log(`Player ${currentPlayer} moved from ${currentPlayerPosition} to ${playerPositionAfterMove}`); 
          break; 
        
        case "🪜": 
          let ladderPosition = ladders[playerPositionAfterMove]; 
      }

  }

  return (player, move) => {
    if (player !== currentPlayer) {
      return [false, `Not your Turn, current Player is ${currentPlayer}`]
    }

    if (!isValidMove(move)) {
      return [false, `Invalid move by player ${player}`];
    }
  }
}

module.exports = snakeAndLadders; 
