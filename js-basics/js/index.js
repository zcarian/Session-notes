const mainElement = document.querySelector('[data-js="main"]');
// console.log(mainElement);

// const loggy = document.querySelector('[data-js="console-log"]');
// console.log(loggy);

// loggy.addEventListener("click", function () {
//   console.log("Hello from button");
// });
const darkButton = document.querySelector('[data-js="add-dark"]');

darkButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});

const lightButton = document.querySelector('[data-js="remove-dark"]');

lightButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});
