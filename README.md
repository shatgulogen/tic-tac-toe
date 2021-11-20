# tic-tac-toe

## Tech Used

-   HTML
-   CSS
-   Javascript

Planning

-Here's the planning
![image](https://user-images.githubusercontent.com/54475694/142716272-c80d9cc5-2e05-4e22-ad36-e689670b2196.png)
![image](https://user-images.githubusercontent.com/54475694/142716365-375928ba-bbb8-4f5f-ba9d-8ecc8baf4c7e.png)

**1. Create index.html for main contents:**

    - Include score board for x and o.
    - Include time limit input box.
    - Include web audio and API sounds 'when time allows'.
    - Include winning message for players.

**2. Add style to the contents**

    - Start with removing the border of the main grid component to set up the tic-tac board.

**3. Make the logic to let the game become responsive by adding Javascript main.js**

    - Set up 2 buttons for player1 and player 2 and add event listeners to player x and player o buttons on click.
    - x starts or o starts first? Set up a button which will shuffle x and o when it is clicked and returns either x or o when clicked the second time to determine who starts the game.
    - If an x or o has already been clicked, the same box should not respond to or update when another click at the same position occurs.
    - Set a final score 'keep track of it' for one of the players to win the game.
    - Display a winning message when a player wins the game and also display restart button at the same time.
    - When the restart button is clicked, the page returns to the shuffling page to start all over again.
