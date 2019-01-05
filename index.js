// Created by bhavyaagg on 01/01/19
let gameArray = []
let tdElements = []
init()

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "ArrowDown":
      console.log("Down")
      handleDown()
      break
    case "ArrowUp":
      console.log("Up")
      handleUp()
      break
    case "ArrowLeft":
      console.log("Left")
      handleLeft()
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
  moveToNextTurn()
}

function handleUp() {
  for (let col = 0; col < 4; col++) {
    let currRow = 0;

    while (currRow < 3) {
      if (gameArray[currRow * 4 + col] !== 0) {
        let nextRow = currRow + 1;
        while (nextRow <= 3) {
          if (gameArray[nextRow * 4 + col] === 0) {
            nextRow++;
          } else if (gameArray[currRow * 4 + col] !== gameArray[nextRow * 4 + col]) {
            break;
          } else if (gameArray[currRow * 4 + col] === gameArray[nextRow * 4 + col]) {
            gameArray[currRow * 4 + col] += gameArray[currRow * 4 + col]
            gameArray[nextRow * 4 + col] = 0;
            break;
          }
        }
      }
      currRow++;
    }

  }
  for (let col = 0; col < 4; col++) {
    let currRow = 1;
    while (currRow <= 3) {
      if (gameArray[currRow * 4 + col] !== 0) {
        let nextRow = currRow - 1;
        while (nextRow >= 0 && gameArray[nextRow * 4 + col] === 0) {
          nextRow--;
        }
        nextRow++;
        if (nextRow >= 0 && gameArray[nextRow * 4 + col] === 0) {
          gameArray[nextRow * 4 + col] = gameArray[currRow * 4 + col];
          gameArray[currRow * 4 + col] = 0;
        }
      }
      currRow++;
    }
  }

  moveToNextTurn()
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

  moveToNextTurn()
}

function handleLeft() {
  for (let row = 0; row < 4; row++) {
    let currCol = 0;

    while (currCol < 3) {
      if (gameArray[row * 4 + currCol] !== 0) {
        let nextCol = currCol + 1;
        while (nextCol <= 3) {
          if (gameArray[row * 4 + nextCol] === 0) {
            nextCol++;
          } else if (gameArray[row * 4 + currCol] !== gameArray[row * 4 + nextCol]) {
            break;
          } else if (gameArray[row * 4 + currCol] === gameArray[row * 4 + nextCol]) {
            gameArray[row * 4 + currCol] += gameArray[row * 4 + currCol]
            gameArray[row * 4 + nextCol] = 0;
            break;
          }
        }
      }
      currCol++;
    }

  }
  for (let row = 0; row < 4; row++) {
    let currCol = 1;
    while (currCol <= 3) {
      if (gameArray[row * 4 + currCol] !== 0) {
        let nextCol = currCol - 1;
        while (nextCol >= 0 && gameArray[row * 4 + nextCol] === 0) {
          nextCol--;
        }
        nextCol++;
        if (nextCol >= 0 && gameArray[row * 4 + nextCol] === 0) {
          gameArray[row * 4 + nextCol] = gameArray[row * 4 + currCol];
          gameArray[row * 4 + currCol] = 0;
        }
      }
      currCol++;
    }
  }

  moveToNextTurn()
}


function moveToNextTurn() {
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