// sumar.js
document.getElementById("btn-sumar").addEventListener("click", function () {
  operacion.valorA = parseFloat(document.getElementById("num1").value);
  operacion.valorB = parseFloat(document.getElementById("num2").value);
  operacion.tipo = "suma";
  operacion.total = operacion.valorA + operacion.valorB;

  document.getElementById("resultado").textContent =
    "Resultado: " + JSON.stringify(operacion);

  historial.push(operacion.total);
});