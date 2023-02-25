const h3 = document.querySelector("#screen-h3");
const form = document.querySelector("form");
const btnDiv = document.querySelector("#btn-div");
let values = [];

function calculate() {
  let arr = h3.textContent;
  let sum = eval(arr);
  console.log(sum);
  if (sum % 1 != 0) {
    h3.textContent = sum.toFixed(2);
  } else {
    h3.textContent = sum;
  }
}

function btnClicked(e) {
  e.preventDefault();
  let btn = e.target;
  btn = btn.dataset.num;
  if (btn === undefined) {
    return;
  } else if (h3.textContent == 0) {
    h3.textContent = "";
  } else if (btn == "") {
    return (h3.textContent = "0");
  }
  if (btn !== "=") {
    if (btn == "+" || btn == "-" || btn == "*" || btn == "/") {
      h3.textContent += " " + btn + " ";
    } else {
      h3.textContent += btn;
    }
  } else if (btn == "=") {
    calculate();
  }
}

btnDiv.addEventListener("click", btnClicked);
