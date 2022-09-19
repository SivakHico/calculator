const calculator = new Calculator();

const clear = document.querySelector("#calculator .clear");
const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");
equals.addEventListener("click", calculator.equals);
clear.addEventListener("click", calculator.clear);

function print(val) {
  calculatorScreen.innerHTML += val;
}

document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});
