# tic-tac-toe

## Tech Used

-   HTML
-   CSS
-   Javascript

Planning

-Here's the planning
![Screenshot](tictactoe.png)

**1. Create index.html for main contents:**

    - Include score board for x and o.
    - Include time limit input box.
    - Include web audio and API sounds.
    - Include message updates for players.

**2. Add style to the contents by adding style.css**

    - Use CSS grid to create class item-a to item-f to make the game webpage responsive.
    - Place grid content into each class.

**3. Make the logic to let the game become responsive by adding Javascript main.js**

    - Add event listeners to all buttons on click.
    - X starts or O starts first? Set up a button which will shuffle x and o when it is clicked and returns either x or o when to determine who starts the game.
    - If an x or o has already been clicked, the same box should not respond to or update when another click at the same position occurs.
    - Set a final score 'keep track of it' for one of the players to win the game.
    - The highest score should be 10. Whoever reaches the highest score wins the game.
    - Display a winning message when a player wins the single game each time and the entire game.
    - Restart button will clear the game board but keep the score.
    - Reset button will reload the game and clear the score board.
    - Timer buton will start the timer countdown.
