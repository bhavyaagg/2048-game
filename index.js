// Created by bhavyaagg on 01/01/19
let gameArray = []
let tdElements = []

for (let i = 0; i < 16; i++) {
  gameArray[i] = 0;
  tdElements[i] = document.getElementById(`td${i}`)
}

let randomIndex = Math.floor(Math.random() * 16)
gameArray[randomIndex] = 2;

updateTable()


document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowDown":
      console.log("Down")
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

function updateTable() {
  for (let i = 0; i < 16; i++) {
    tdElements[i].innerText = gameArray[i] === 0 ? "" : gameArray[i];
  }
}