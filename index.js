const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let value = "";
let newValue = "";

function calculator(e) {

  const key = e.target.textContent;
  switch (key) {
    case "=":
      display.textContent = eval(value.replace("x", "*"));
      value = eval(value.replace("x", "*"));
      break;
    case "AC":
      display.textContent = "0";
      value = "";
      break;
    case "%":
      let values = [];
      newValue = value.replace(/[^\d?]/g, " ");
      const operador = value.replace(/[\d?]/g, " ").trim();
      values = newValue.split(" ");
      let porcentaje = (values[0] * values[1]) / 100;
      value = `${values[0]}${operador}${porcentaje}`;
      display.textContent = value;
      break;
    case "+":
    case "-":
    case "x":
    case "/":
    default:
      value += key;
      display.textContent = value;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculator);
}
