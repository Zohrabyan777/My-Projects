"use strict";
const board = document.querySelector("#board");
const SQUERS_NUMBER = 460;
for (let i = 0; i < SQUERS_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  board.append(square);
  square.addEventListener("mouseleave", (e) => {
    e.target.style.background = "#1d1d1d";
    e.target.style.boxShadow = ` 0 0 2px #1d1d1d`;
  });
}
function setColor(element) {
  const arr = [
    "red",
    "blue",
    "green",
    "yellow",
    "lightblue",
    "purpule",
    "pink",
    "white",
    "brown",
  ];
  let color = arr[Math.floor(Math.random() * arr.length - 1)];
  element.style.background = color;
  element.style.boxShadow = ` 0 0 2px ${color}`;
}
