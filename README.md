# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## i successfully developed this game by following these steps.

-   "Udacity" provided github link in rubic structure and I downloaded the skeleton project  regarding to this game.
-   I downloaded the zip file and extracted all files from it .
-   I choose ATOM application and modified the skeleton project to  achieve the game as per Instructions.
-   while modifying I came to know that, mostly the modifications are done in `app.js`.
-   To shuffle cards there is a `shuffle` function and it was provided by `stackoverflow` in `app.js`. By observing that i created `lableList` for listing all cards in an array.
-   `([...])`is a spread operator used to convert HTML collection into array.
-   `click` is used for eventlistener.so that when the card the click the some changes takes place.
-   `appearCards` is used to open and show label when event listener `click` is done on cards.
-   `disable` is used when two cards are not matched then the two cards will close. `notmatch` is created to find mismatched cards
-   `timer` is used to know the time we completed the game.
-   `starRating` will rate the game according to player performance. The stars will reduce when moves crosses the limit.
-   I created `sweet alert` when game complete it shows the rating and time of player's performance.
-   finally, I applied styles to memory game in `app.css`.
