class Calculator {
  history() {
    console.log(
      "once the = key is pressed, it keeps the last value in memory in an array"
    );
  }

  equals() {
    let sum = calculatorScreen.innerHTML;
    const calNumbers = [];
    calNumbers.push(sum);
    let result = eval(calNumbers[0]);
    calculatorScreen.innerHTML = result;
  }

  clear() {
    console.log("clears the history");
  }
}
