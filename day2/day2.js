"use strict";
const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
console.log(placeholders);
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart(event) {
  event.target.classList.add("hold");

  setTimeout(() => event.target.classList.add("hide"), 0);
}
function dragend(event) {
  event.target.classList.remove("hold", "hide");
}
for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}
function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add("hoverd");
}
function dragleave(e) {
  e.target.classList.remove("hoverd");
}
function dragdrop(e) {
  e.target.append(item);
  e.target.classList.remove("hoverd");
}
