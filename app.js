// selecting all the needed elements from html file
let calcBtn = document.querySelector(".calculator-button");
let resultScreen = document.querySelector(".result");
let firstOperand;
let secondOperand;
let operator;
let summary = document.querySelector(".summary");

// add an event handler
calcBtn.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    let key = e.target;
    let keyValue = key.value;
    let display = resultScreen.textContent;
    let action = key.dataset.action;

    // the control structure part
    if (!action) {
      if (display !== "0") {
        display = display + keyValue;
      } else {
        display = keyValue;
      }
      resultScreen.textContent = display;
    } else {
      if (action == "add") {
        summary.textContent = display + keyValue;
        firstOperand = display;
        resultScreen.textContent = "";
        operator = "+";
      }

      if (action == "subtract") {
        summary.textContent = display + keyValue;
        firstOperand = display;
        resultScreen.textContent = "";
        operator = "-";
      }

      if (action == "multiply") {
        summary.textContent = display + keyValue;
        firstOperand = display;
        resultScreen.textContent = "";
        operator = "*";
      }

      if (action == "divide") {
        summary.textContent = display + keyValue;
        firstOperand = display;
        resultScreen.textContent = "";
        operator = "/";
      }

      // clearing every thing on the screen.
      if (action == "clear") {
        resultScreen.textContent = "0";
        summary.textContent = "";
      }
      // calculate the operation.
      if (action == "calculate") {
        if (operator == "+") {
          secondOperand = resultScreen.textContent;
          summary.textContent = summary.textContent + secondOperand;
          resultScreen.textContent =
            Number(firstOperand) + Number(secondOperand);
        }

        if (operator == "-") {
          secondOperand = resultScreen.textContent;
          summary.textContent = summary.textContent + secondOperand;
          resultScreen.textContent =
            Number(firstOperand) - Number(secondOperand);
        }

        if (operator == "*") {
          secondOperand = resultScreen.textContent;
          summary.textContent = summary.textContent + secondOperand;
          resultScreen.textContent =
            Number(firstOperand) * Number(secondOperand);
        }

        if (operator == "/") {
          secondOperand = resultScreen.textContent;
          summary.textContent = summary.textContent + secondOperand;
          resultScreen.textContent =
            Number(firstOperand) / Number(secondOperand);
        }
      }
    }
  }
});
