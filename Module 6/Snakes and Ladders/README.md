# Snakes and Ladders in Javascript

## SEQUENCE OF EVENTS

- Turn based game.

- 2 players to play the game.
    - Lets call them `Red` and `Blue`. 

### The board looks like this: 

`game-status = {OnGoing, win-Red, win-Blue}`
```
[

    'game-status',
   
    '1',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '10',

    '11',  '🪜',  '',  '🪜',  '',  '',  '',  '',  '',  '20',

    '21',  '🪜',  '',  '',  '',  '',  '',  '🐍',  '',  '30',

    '31',  '',  '',  '',  '',  '',  '🐍',,  '',  '',  '40',

    '🪜',  '',  '',  '',  '',  '',  '',  '🐍',  '',  '50',

    '51',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '60',

    '61',  '',  '',  '',  '',  '',  '',  '',  '',  '70',

    '71',  '',  '',  '',  '🐍',  '',  '',  '',  '',  '80',

    '81',  '',  '',  '',  '',  '',  '',  '',  '',  '90',

    '91',  '',  '',  '🐍',  '',  '🐍',  '',  '',  '', '100'
    

]
```

- Each player throw a die.  [rule]
    - Die can result in `[1, 2, 3, 4, 5, 6]`.

- Let say `Red` goes first. 

    ```
    die-roll = 3
    ```

    ```
    [

        'OnGoing',
    
        '1',  '',  'R',  '🪜',  '',  '',  '',  '',  '',  '10',

        '11',  '🪜',  '',  '🪜',  '',  '',  '',  '',  '',  '20',

        '21',  '🪜',  '',  '',  '',  '',  '',  '🐍',  '',  '30',

        '31',  '',  '',  '',  '',  '',  '🐍',,  '',  '',  '40',

        '🪜',  '',  '',  '',  '',  '',  '',  '🐍',  '',  '50',

        '51',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '60',

        '61',  '',  '',  '',  '',  '',  '',  '',  '',  '70',

        '71',  '',  '',  '',  '🐍',  '',  '',  '',  '',  '80',

        '81',  '',  '',  '',  '',  '',  '',  '',  '',  '90',

        '91',  '',  '',  '🐍',  '',  '🐍',  '',  '',  '',  '100'

    ]
    ```

- Now it is `Blue`'s turn. 

    ```
    die-roll = 6
    ```

    ```
    [

        'OnGoing',
    
        '1',  '',  'R',  '🪜',  '',  'B',  '',  '',  '',  '10',

        '11',  '🪜',  '',  '🪜',  '',  '',  '',  '',  '',  '20',

        '21',  '🪜',  '',  '',  '',  '',  '',  '🐍',  '',  '30',

        '31',  '',  '',  '',  '',  '',  '🐍',,  '',  '',  '40',

        '🪜',  '',  '',  '',  '',  '',  '',  '🐍',  '',  '50',

        '51',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '60',

        '61',  '',  '',  '',  '',  '',  '',  '',  '',  '70',

        '71',  '',  '',  '',  '🐍',  '',  '',  '',  '',  '80',

        '81',  '',  '',  '',  '',  '',  '',  '',  '',  '90',

        '91',  '',  '',  '🐍',  '',  '🐍',  '',  '',  '',  '100'

    ]
    ```

- 2 players can sit / access one spot. 
    - For example: `Red` throws the die, get 2 and moves to spot 2. 

        ```
        [

            'OnGoing',
        
            '1',  'R',  '',  '🪜',  '',  '',  '',  '',  '',  '10',

            '11',  '🪜',  '',  '🪜',  '',  '',  '',  '',  '',  '20',

            '21',  '🪜',  '',  '',  '',  '',  '',  '🐍',  '',  '30',

            '31',  '',  '',  '',  '',  '',  '🐍',,  '',  '',  '40',

            '🪜',  '',  '',  '',  '',  '',  '',  '🐍',  '',  '50',

            '51',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '60',

            '61',  '',  '',  '',  '',  '',  '',  '',  '',  '70',

            '71',  '',  '',  '',  '🐍',  '',  '',  '',  '',  '80',

            '81',  '',  '',  '',  '',  '',  '',  '',  '',  '90',

            '91',  '',  '',  '🐍',  '',  '🐍',  '',  '',  '',  '100'

        ]
        ```

    - `Blue`f throws the die, get 2 and moves to spot 2 along with `Red`.

        ```
        [

            'OnGoing',
        
            '1',  'R B',  '',  '🪜',  '',  '',  '',  '',  '',  '10',

            '11',  '🪜',  '',  '🪜',  '',  '',  '',  '',  '',  '20',

            '21',  '🪜',  '',  '',  '',  '',  '',  '🐍',  '',  '30',

            '31',  '',  '',  '',  '',  '',  '🐍',,  '',  '',  '40',

            '🪜',  '',  '',  '',  '',  '',  '',  '🐍',  '',  '50',

            '51',  '',  '',  '🪜',  '',  '',  '',  '',  '',  '60',

            '61',  '',  '',  '',  '',  '',  '',  '',  '',  '70',

            '71',  '',  '',  '',  '🐍',  '',  '',  '',  '',  '80',

            '81',  '',  '',  '',  '',  '',  '',  '',  '',  '90',

            '91',  '',  '',  '🐍',  '',  '🐍',  '',  '',  '',  '100'

        ]
        ```

- If a player encounter a ladder, they climb the ladder, and jump to the point where the ladder ends

    ```
    🪜 = {
        4 : 56, 
        12 : 50,
        14 : 55,
        22 : 58,
        41 : 79,
        54 : 88
    }
    ```

- If a player encounter snake, they spiral down to the point where the snake tail ends. 
    ```
    🐍 = {
        28 : 10, 
        37 : 3,
        48 : 16,
        75 : 32,
        94 : 71,
        96 : 42
    }
    ```

- The winner is whoever reaches the end of the board or spot 100 (or index 100) first. 

- Game continues until there's a winner

### How is a player movings? 

First of all legal moves range from [1,6] (value of the dies). 
    
- This means a player can move at minimum 1 place or 6 places from their currentPosition


## REQUIREMENTS

* Store players names
* Roll a die
* Current player ; next player ; cycle through these player
* Store the board
* Store the position of ladders
* Store the position of each player
* Game Status
* Assignment operations
    1. moving along the board
    2. reaching a ladder and going up
    3. reaching a snake and going down
    4. winning the game

## How I implemented this? 

I took the approach that we took in the tic-tac-toe program design. I represented `snakes-and-ladder` board as a string. I represented the `ladders` and `snakes` as `objects` where `[key,value] = [starting index, ending index]`. I also used an `object` to keep the player's position state in `playerPositionState`. 

I tried to use a `Map` for the board but I got confused with the state management and felt I was complicating it for myself. 

When I tried to use a map, the way I was thinking of representing a particular spot such as: 

`[key,value] = [ 0, ['', Player1,  Player2] ]`
`[key,value] = [ 4, ['🪜', Player1,  Player2] ]`
`[key,value] = [ 28, ['🐍', Player1,  Player2] ]`

The key was an index or spot on the number whereas the value was an array that included whether the spot was empty or it had a ladder or a snake on it. I decided to discard it after I wasn't making much progress. 


* Current implementation of the required Assignment operations
    1. moving along the board
        - Adding the move to the current position. The move is restricted to [1,2,3,4,5,6] and making sure that the sum of the present position of a player and the move doesn't exceed 100 i.e the winning square. 

    2. reaching a ladder and going up
        - If a players enters the board where a '🪜' is present, I check in the ladder object for the ladders connection and update the `playerPositionState` object. I log a console message stating a player climbed a ladder. 

    3. reaching a snake and going down
        - If a players enters the board where a '🐍' is present, I check in the ladder object for the snakes and update the `playerPositionState` object. I log a console message stating a player is bitten by a snake and slid down some positions. 

    4. winning the game
        - I implemented it such that only one player can win the game, either red or blue. Whoever reaches the square 100 first wins. 