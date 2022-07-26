"use strict";

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const rateBtns = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
const overlay = document.querySelector(".overlay");
const number = document.querySelector(".number");
const cont = document.querySelector(".container-2.active");
console.log(overlay);

// SUBMIT BUTTON FUNCTIONALITY
function submitRate() {
  container1.classList.toggle("active");
  container2.classList.toggle("active");
}

submitBtn.addEventListener("click", submitRate);

overlay.addEventListener("click", () => {
  if (container1.classList.contains("active")) {
    submitRate();
  }
}); // () => {
//   container1.classList.remove("active");
//   container2.classList.remove("active");
// });

// FUNCTIONALITY OF RATE BUTTONS
for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", () => {
    number.textContent = rateBtns[i].textContent;
  });
}
