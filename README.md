Dice Game

A simple dice game implemented in JavaScript.
Game Rules

    The game is played by two players.
    Players take turns rolling a dice and accumulating points.
    Each turn, a player rolls the dice and adds the rolled value to their current score.
    If a player rolls a 1, their current score is reset to zero, and it becomes the other player's turn.
    Players have the option to "Hold" their current score, which adds it to their total score.
    The first player to reach or exceed 100 points wins the game.

Getting Started

To run the game, follow these steps:

    Clone the repository or download the JavaScript file.

    Open the HTML file in a web browser.

    The game will be displayed on the screen, and the first player will be active.

    Click the "Roll" button to roll the dice. The dice image will show the rolled value.

    If the rolled value is 1, the current player's turn ends, and their current score is reset to zero. Otherwise, the rolled value is added to the current score.

    Click the "Hold" button to store the current score in the player's total score.

    If a player's total score reaches or exceeds 100, an alert will appear, declaring them the winner.

    To start a new game, click the "New Game" button. This will reset all scores and make the first player active again.

Customization

You can customize the game by modifying the following elements in the HTML file:

    Change player names: Locate the elements with the class "name" and update the text content to the desired player names.

    Change winning score: In the JavaScript code, locate the line if (players[currentPlayer].currentScore < 100). Modify the value of 100 to the desired winning score.

Technologies Used

    JavaScript
    HTML
    CSS

License

This project is licensed under the MIT License.

Feel free to use and modify the code according to your needs.
Acknowledgements

This game was created as an example project by Alex Xirouchakis using the Udemy course Javascript from Begginer to Expert starting files.
