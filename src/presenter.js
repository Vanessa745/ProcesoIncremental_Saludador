import sumar from "./sumador";

const nom = document.querySelector("#primer-nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value;

  div.innerHTML = "<p>Hola " + nombre + "</p>";
});
