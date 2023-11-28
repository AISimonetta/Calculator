import "./main.scss"
console.log("its running")

const display = document.querySelector<HTMLInputElement>(".calculator__input--userInput")
const displayTotal = document.querySelector<HTMLInputElement>(".calculator__input--total")
const buttons = document.querySelectorAll<HTMLButtonElement>(".calculator__btn")
const number = document.querySelectorAll<HTMLButtonElement>('.calculator__btnNum')// number buttons
const operator = document.querySelectorAll<HTMLButtonElement>('.operator')// number buttons
const btnClear = document.querySelector<HTMLButtonElement>("#btnClear")
const btnDecimal = document.querySelector<HTMLButtonElement>("#btnDecimal")
const btnCalculate = document.querySelector<HTMLButtonElement>("#btnCalculate")


if (!buttons || !display ||!displayTotal || !number ||!btnClear ||!operator || !btnDecimal ||!btnCalculate ) {
    throw new Error("There is a prblem with the selector");
}
let num1 = '';
let num2 = '';
let operators = '';
let total = 0;

//display input
const addNumOne = (number : number) => {
    num1 += number;
    display.value = num1;
}

const addNumTwo = (number : number) => {
    num2 += number;
    display.value = num2;
}

const addOperator = (number : number) => {
    operators += number;
    display.value = operators;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        addNumOne(button.innerText);
    })
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        addNumTwo(button.innerText);
    })
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        addOperator(button.innerText);
    })
})
///clear btn
const clearDisplayInputs = () => {
    console.log("I am here")
    console.log(display)
    console.log(displayTotal)
    display.value = ""
    displayTotal.value = "";
    num1 = '';
    operators = '';
}

btnClear.addEventListener('click', clearDisplayInputs);

///operator calculation

const operationsCalculator =  () => {
    let num1 = number
    let num2 = number

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert('Cannot divide by zero');
          return;
        }
        break;
      default:
        alert('Invalid operation');
        return;
    }

    document.getElementById('result').innerText = result;
  }

  operationsCalculator;