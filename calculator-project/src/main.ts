import "./main.scss"
console.log("its running")

const inputDisplay = document.querySelector<HTMLInputElement>(".calculator__input--userInput")
const inputDisplayTotal = document.querySelector<HTMLInputElement>(".calculator__input--total")
const number = document.querySelectorAll<HTMLButtonElement>('.calculator__btnNum')// number buttons
const operator = document.querySelectorAll<HTMLButtonElement>('.operator')// number buttons
const btnClear = document.querySelector<HTMLButtonElement>("#btnClear")
const btnDecimal = document.querySelector<HTMLButtonElement>("#btnDecimal")
const btnCalculate = document.querySelector<HTMLButtonElement>("#btnCalculate")

if ( !inputDisplay ||!inputDisplayTotal || !number ||!btnClear || !operator ||
     !btnDecimal ||!btnCalculate ) {
    throw new Error("There is a problem with the selector");
}
let num1input = "";
let num2input = "";
let operators = "";
let total = 0;

//inputDisplay

operator.forEach(button => {
    button.addEventListener('click', () => {
        operators = button.innerText;
        inputDisplay.value += operators;
    });
});

number.forEach(button => {
    button.addEventListener("click", () => {
        if (operators === "") {
            if(button.innerText === "." && num1input.includes(".")){
                return
            }
                if(button.innerText === "." && num2input.includes(".")){
                    return
                }
            num1input += button.innerText
            inputDisplay.value = num1input;
        } else {
            num2input += button.innerText
            inputDisplay.value = num2input;
        };
        console.log(num1input);
        console.log(operators);
        console.log(num2input);
    });
})

//clear btn
const clearDisplayInputs = () => {
    inputDisplay.value = ""
    inputDisplayTotal.value = "";
    num1input = '';
    num2input = '';
    operators = '';
}

btnClear.addEventListener('click', clearDisplayInputs);

///Calculator operations

const handleCalculate = () => {
    let num1 = parseFloat(num1input);
    let num2 = parseFloat(num2input);
    if (operators === "+") {
        total = num1 + num2
        total.toString()
    } else if (operators === "-") {
        total = num1 - num2
        total.toString()
    } else if (operators === "X") {
        total = num1 * num2
        total.toString()
    } else if (operators === "/") {
        total = num1 / num2
        total.toString()
    } else if (operators === "%") {
        let percentage = (num1 * 100) / num2;
        total = percentage
        total.toString()
    };
    inputDisplayTotal.value = total.toString();
    inputDisplay.value = ""
    num1input = " ";
    num2input = " ";
    operators = " ";
    console.log(total)
  };
  
btnCalculate.addEventListener("click", handleCalculate);

  //limit my btn decimal to only One "."

// const oneDigitDecimal = () => {
//     alert ("Please press '.' once :)")
// }
// btnDecimal.addEventListener("click", oneDigitDecimal) 
