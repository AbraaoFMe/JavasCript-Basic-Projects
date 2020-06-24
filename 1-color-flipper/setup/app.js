const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener('DOMContentLoaded', () => {
  setColor();
} );

btn.addEventListener("click", function () {
  setColor();
});

function getRandomColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }

  return hexColor;
}

function setColor() {
  let newColor = getRandomColor();

  color.textContent = newColor;
  document.body.style.backgroundColor = newColor;

}