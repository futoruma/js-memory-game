function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const board = [
  1, 7, 9, 1, 5, 6, 5, 3, 6, 12, 11, 12, 4, 2, 8, 4, 7, 9, 2, 8, 3, 10, 11, 10,
];

shuffleArray(board);

let curFirstCard = null;
let curSecondCard = null;
let openedCount = 0;
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let isFirstPlayer = true;

boardDiv = document.querySelector("#board");

for (let i = 0; i < 24; i++) {
  let newCard = document.createElement("img");
  boardDiv.append(newCard);
  newCard.src = "images/0.png";
  newCard.id = `${i}`;
  newCard.addEventListener("click", () => {
    newCard.src = `images/${board[Number(newCard.id)]}.png`;
    if (openedCount === 0) {
      curFirstCard = newCard.id;
    } else {
      curSecondCard = newCard.id;
    }
    openedCount++;
    if (openedCount == 2) {
      let firstCard = document.getElementById(curFirstCard);
      let secondCard = document.getElementById(curSecondCard);
      if (
        board[curFirstCard] == board[curSecondCard] &&
        curFirstCard != curSecondCard
      ) {
        if (isFirstPlayer == true) {
          firstPlayerScore++;
          let firstPlayerScoreDiv = document.querySelector("#player1score");
          firstPlayerScoreDiv.innerText = `Blue: ${firstPlayerScore}`;
        } else {
          secondPlayerScore++;
          let secondPlayerScoreDiv = document.querySelector("#player2score");
          secondPlayerScoreDiv.innerText = `Red: ${secondPlayerScore}`;
        }
        setTimeout(() => {
          firstCard.classList.add("hidden");
          secondCard.classList.add("hidden");
          isFirstPlayer = !isFirstPlayer;
          if (isFirstPlayer == true) {
            let firstPlayerScoreDiv = document.querySelector("#player1score");
            firstPlayerScoreDiv.classList.add("underlined");
            let secondPlayerScoreDiv = document.querySelector("#player2score");
            secondPlayerScoreDiv.classList.remove("underlined");
          } else {
            let firstPlayerScoreDiv = document.querySelector("#player1score");
            firstPlayerScoreDiv.classList.remove("underlined");
            let secondPlayerScoreDiv = document.querySelector("#player2score");
            secondPlayerScoreDiv.classList.add("underlined");
          }
        }, 500);
      } else {
        setTimeout(() => {
          firstCard.src = "images/0.png";
          secondCard.src = "images/0.png";
          isFirstPlayer = !isFirstPlayer;
          if (isFirstPlayer == true) {
            let firstPlayerScoreDiv = document.querySelector("#player1score");
            firstPlayerScoreDiv.classList.add("underlined");
            let secondPlayerScoreDiv = document.querySelector("#player2score");
            secondPlayerScoreDiv.classList.remove("underlined");
          } else {
            let firstPlayerScoreDiv = document.querySelector("#player1score");
            firstPlayerScoreDiv.classList.remove("underlined");
            let secondPlayerScoreDiv = document.querySelector("#player2score");
            secondPlayerScoreDiv.classList.add("underlined");
          }
        }, 1000);
      }
      openedCount = 0;
      curFirstCard = null;
      curSecondCard = null;
    }
  });
}
