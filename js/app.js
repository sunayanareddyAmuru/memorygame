// for strict values
'use strict';
//getting elements from deck
var pack = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
var lables = document.querySelectorAll(".card");
var lableList = [...lables];
console.log(lables);
// declarations for timer
let timeLimit = 0;
var time;
var timer = document.getElementById("time");
// declarations for moves
var moves = 0;
var moved = document.getElementById("moves")
var lableStore = [];
// declarations for stars
var countStars = 3;
var sectionStar = [...document.getElementsByClassName("fa-star")];
// declarations for onTimer section
var s, m, h;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//
pack.onload = startGame();

function startGame() {
  var modifiedlables = shuffle(lableList);
  // for (var i = 0; i < modifiedlables.length; i++)
  //   // [].forEach.call(lables, function(item) {
  //     pack.appendChild(modifiedlables[i]);
  // }
  modifiedlables.forEach((item) => {
    pack.append(item);
  })

}
// activating on click
for (var i = 0; i < lableList.length; i++) {
  lableList[i].addEventListener("click", appearCard);
}
// displaying cards
function appearCard() {
  if (timeLimit == 0) {
    onTimer();
    timeLimit = timeLimit + 1;
  }
  // logic for matching cards
  this.classList.add("card", "open");
  this.classList.add("show", "disable");
  lableStore.push(this);
  if (lableStore.length == 2) {
    moves = moves + 1;
    moved.innerHTML = moves;
    starRating();
    if (lableStore[0].children[0].classList.item(1) == lableStore[1].children[0].classList.item(1)) {
      console.log("matched");
      lableStore[0].classList.add("match");
      lableStore[1].classList.add("match");
      if (cardmatches.length == 16) {
        clearInterval(time);
        Swal.fire({
          title: 'excellent',
          html: 'awesome!! you got <strong style="color:#ff9f33; text-shadow: 3px 3px 3pxc #000">' + countStars + '<i class="fa fa-star"> </i> </strong> <br> And You have done it in <br>' + h + 'hours : ' + m + 'minutes : ' + s + 'seconds' + '<br> Moves count:' + moves,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i>  play-again',
        }).then(() => {
          document.location.reload();
        });
      }
      lableStore = [];
    } else {
      lableStore[0].classList.add("notmatch");
      lableStore[1].classList.add("notmatch");
      lableStore.map((card) => {
        setTimeout(() => {
          card.classList.remove("notmatch", "open", "show", "disable");
        }, 200);
      })
      lableStore = [];
    }
  }
}
var cardmatches = document.getElementsByClassName("match");
// display timer
function onTimer() {
  s = 0;
  m = 0;
  h = 0;
  time = setInterval(() => {
    s = s + 1;
    if (s == 59) {
      s = 0;
      m = m + 1;
    }
    if (m == 60) {
      m = 0;
      h = h + 1;
    }
    timer.innerHTML = h + "::" + m + "::" + s;
  }, 1000)
  if (cardmatches.length == 16) {
    clearInterval(time);
  }
}
// for retaining
function retain() {
  document.location.reload();
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// for rating
function starRating() {
  if (moves > 9) {
    countStars = 2;
    sectionStar[2].style.display = "none";
  }
  if (moves > 16) {
    countStars = 1;
    sectionStar[1].style.display = "none";
  }
}
