const snakeAndLadders = require('./snakes-and-ladders');

class SnakeAndLaddersGame {
    constructor() {
        this.game = snakeAndLadders("red", "blue");
        this.isGameOver = false;
    }

    printGameState(result, message) {
        console.log(message);
        if (result === 'win-red' || result === 'win-blue') {
            console.log(`Game Over! ${result.split('-')[1]} wins!`);
            this.isGameOver = true;
        }
    }

    play(player, move) {
        if (this.isGameOver) {
            console.log('Game is already over. Please start a new game.');
            return;
        }

        const [isMoveValid, message] = this.game(player, move);
        if (!isMoveValid) {
            console.log(message);
        } else {
            this.printGameState(message, ``);
        }
    }

    
    simulateGame() {
        const moves = [1, 2, 3, 4, 5, 6];
        
        let turnLimit = 400; // Maximum number of turns (100 rounds for each player) had to implement this because I got stuck in an infinite loop
        let currentTurn = 0;
    
        while (!this.isGameOver && currentTurn < turnLimit) {
            for (const player of ["red", "blue"]) {
                const move = moves[Math.floor(Math.random() * moves.length)];
                this.play(player, move);
                currentTurn++;
    
                if (this.isGameOver) {
                    break;
                }
            }
        }

        if (currentTurn >= turnLimit) {
            console.log('Game terminated after maximum turns without a winner.');
        }
    }
    
}

const game = new SnakeAndLaddersGame();
game.simulateGame();
