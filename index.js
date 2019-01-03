// Created by bhavyaagg on 01/01/19
let gameArray = []
let tdElements = []
init()

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "ArrowDown":
      handleDown()
      break
    case "ArrowUp":
      console.log("Up")
      break
    case "ArrowLeft":
      console.log("Left")
      break
    case "ArrowRight":
      console.log("Right")
      break
  }
})

function init() {
  for (let i = 0; i < 16; i++) {
    gameArray[i] = 0;
    tdElements[i] = document.getElementById(`td${i}`)
  }
  if (checkIfBoardPlaceIsEmpty()) {
    addRandomNumber()
    updateTable()
  }
}

function handleDown() {

  for (let col = 0; col < 4; col++) {
    let currRow = 3;

    while (currRow > 0) {
      if (gameArray[currRow * 4 + col] !== 0) {
        let nextRow = currRow - 1;
        while (nextRow >= 0) {
          if (gameArray[nextRow * 4 + col] === 0) {
            nextRow--;
          } else if (gameArray[currRow * 4 + col] !== gameArray[nextRow * 4 + col]) {
            break;
          } else if (gameArray[currRow * 4 + col] === gameArray[nextRow * 4 + col]) {
            gameArray[currRow * 4 + col] += gameArray[currRow * 4 + col]
            gameArray[nextRow * 4 + col] = 0;
            break;
          }
        }
      }
      currRow--;
    }

  }
  for (let col = 0; col < 4; col++) {
    let currRow = 2;
    while (currRow >= 0) {
      if (gameArray[currRow * 4 + col] !== 0) {
        let nextRow = currRow + 1;
        while (nextRow <= 3 && gameArray[nextRow * 4 + col] === 0) {
          nextRow++;
        }
        nextRow--;
        if (nextRow <= 3 && gameArray[nextRow * 4 + col] === 0) {
          gameArray[nextRow * 4 + col] = gameArray[currRow * 4 + col];
          gameArray[currRow * 4 + col] = 0;
        }
      }
      currRow--;
    }
  }

  if (checkIfBoardPlaceIsEmpty()) {
    addRandomNumber()
    updateTable()
  }


}

function updateTable() {
  for (let i = 0; i < 16; i++) {
    tdElements[i].innerText = gameArray[i] === 0 ? "" : gameArray[i];
  }
}

function addRandomNumber() {

  let randomIndex = Math.floor(Math.random() * 16)
  while (gameArray[randomIndex] !== 0) {
    randomIndex = Math.floor(Math.random() * 16)
  }
  gameArray[randomIndex] = 2;
}

function checkIfBoardPlaceIsEmpty() {
  let i;
  for (i = 0; i < 16; i++) {
    if (gameArray[i] === 0) {
      return true;
    }
  }
  return false;
}