let form = document.querySelector('[data-js="form"]');
let output = document.querySelector('[data-js="output"]');
let inputName = document.querySelector('data-js="name"');
let inputColor = document.querySelector('data-js="color"');
let inputHours = document.querySelector('data-js="hours"');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inputName.value;
  const upperToUpper = name.toUpperCase();
  const color = color.value;
  const hours = hours.value;

  output.textContent = "Story";
});
