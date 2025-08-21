import sumar from "./sumador";
import saludar from "./saludo";

const nom = document.querySelector("#primer-nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value;
  let actual = new Date();

  div.innerHTML = "<p>" + saludar(nombre, actual.getHours()) + "</p>";
});
