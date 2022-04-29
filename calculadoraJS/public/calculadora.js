const botonNumeros = document.getElementsByName("data-number");
const botonOperacion = document.getElementsByName("data-operacion");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonBorrar = document.getElementsByName("data-borrar")[0];
var result = document.getElementById("result");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

//captura de eventos

botonNumeros.forEach(function (boton) {
  boton.addEventListener("click", function () {
    agregarNumero(boton.innerText);
  });
});

botonOperacion.forEach(function (boton) {
  boton.addEventListener("click", function () {
    selectOperacion(boton.innerText);
  });
});

botonIgual.addEventListener("click", function () {
  calcular();
  actualizarDisplay();
});

botonBorrar.addEventListener("click", function () {
  clear();
  actualizarDisplay();
});

//Lógica en si

function selectOperacion(op) {
  if (opeActual === "") return;
  if (opeAnterior === "") {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = "";
}

function calcular() {
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "X":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";
}

function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
}

function actualizarDisplay() {
  result.value = opeActual;
}

clear();
