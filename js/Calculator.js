class Calculator {
  histor() {
    return 1;
  }

  equals() {
    let sum = calculatorScreen.innerHTML;
    const calNumbers = [];
    calNumbers.push(sum);
    let result = eval(calNumbers[0]);
    calculatorScreen.innerHTML = result;
  }

  clear() {
    calculatorScreen.innerHTML = "";
    console.log(this.history());
  }
}
