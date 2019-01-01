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


function updateTable() {
  for (let i = 0; i < 16; i++) {
    tdElements[i].innerText = gameArray[i] === 0 ? "" : gameArray[i];
  }
}