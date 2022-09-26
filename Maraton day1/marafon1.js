"use strict";
const slides = document.querySelectorAll(".slide");

function removeClass() {
  for (let slide of slides) {
    slide.classList.remove("active");
    document.body.style.background = "lightblue";
  }
}

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeClass();

    slide.classList.add("active");
  });
});
