const snakeAndLadders = (player_Red, player_Blue) => {
  const red = player_Red;
  const blue = player_Blue;
  let currentPlayer = "red";
  const nextPlayer = { "red": "blue", "blue": "red" };

  const ladders = { 4: 56, 12: 50, 14: 55, 22: 58, 41: 79, 54: 88 };
  const snakes = { 28: 10, 37: 3, 48: 16, 75: 32, 94: 71, 96: 42 };
  const board = ['onGoing', ...Array(99).fill('')];

  for (let ladderStart in ladders) {
    board[ladderStart] = '🪜';
  }
  for (let snakeStart in snakes) {
    board[snakeStart] = '🐍';
  }

  let playerPositionState = { red: 1, blue: 1 };

  /**
   * Determines if the provided move is valid.
   * @param {Number} move - The move to check.
   * @returns {Boolean} True if valid, false otherwise.
   */
  const isValidMove = (move) => {
    let playerCurrentPosition = playerPositionState[currentPlayer];
    return (1 <= move && move <= 6) && (playerCurrentPosition + move <= 100);
  };

  /**
   * Computes the result of a player's move.
   * @param {Number} move - The move to compute.
   * @returns {String} The result of the move: 'onGoing', 'win-red', or 'win-blue'.
   */

  const computePlay = (move) => {
    let result = 'onGoing';
    const currentPlayerPosition = playerPositionState[currentPlayer];
    const playerPositionAfterMove = currentPlayerPosition + move;

    console.log(`${currentPlayer} rolled a ${move}`);
    if (playerPositionAfterMove === 100) {
        console.log(`Player ${currentPlayer} has reached the 100th spot and won!`);
        return `win-${currentPlayer}`;
    }

    switch (board[playerPositionAfterMove]) { 
        case "":
            playerPositionState[currentPlayer] = playerPositionAfterMove;
            console.log(`${currentPlayer} moves to square ${playerPositionAfterMove}.`);
            break;

        case "🪜":
            let ladderPosition = ladders[playerPositionAfterMove];
            playerPositionState[currentPlayer] = ladderPosition;
            console.log(`${currentPlayer} climbs a ladder from square ${currentPlayerPosition} to square ${ladderPosition}.`);
            break;

        case "🐍":
            let snakePosition = snakes[playerPositionAfterMove];
            playerPositionState[currentPlayer] = snakePosition;
            console.log(`${currentPlayer} was bitten by a snake at square ${currentPlayerPosition} and slid back to square ${snakePosition}.`);
            break;

        default:
            console.log("Default case for switch");
            break;
    }
    console.log(`It's ${nextPlayer[currentPlayer]}'s turn now\n`);
    return result;
  };

  return (player, move) => {
    if (player !== currentPlayer) {
      return [false, `Not your Turn, current Player is ${currentPlayer}`];
    }
  
    if (!isValidMove(move)) {
      return [false, `Invalid move by player ${player}`];
    }
  
    const result = computePlay(move);
    currentPlayer = nextPlayer[currentPlayer];
    return [true, result];
  };
};

module.exports = snakeAndLadders;
