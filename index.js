const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let value = "";
let newValue = "";

function calcular(e) {
  const tecla = e.target.textContent;
  switch (tecla) {
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
      //cuando presiono el porcentaje
      //calcula el porcentaje del valor que puse
      // se queda con la operacion
      newValue = value.replace(/[^\d?]/g, " ");
      const oeprador = value.replace(/[\d?]/g, " ").trim();
      values = newValue.split(" ");
      let porcentaje = (values[0] * values[1]) / 100;
      value = `${values[0]}${oeprador}${porcentaje}`;
      display.textContent = value;
      break;
    case "+":
    case "-":
    case "x":
    case "/":
    default:
      value += tecla;
      display.textContent = value;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calcular);
}