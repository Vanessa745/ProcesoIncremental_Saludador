import sumar from "./sumador";
import saludar from "./saludo";

const nom = document.querySelector("#primer-nombre");
const generoMasculino = document.querySelector("#genero-masculino");
const generoFemenino = document.querySelector("#genero-femenino");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value;
  let actual = new Date();
  let genero;

  if (generoMasculino.checked) {
    genero = "masculino";
  } else if (generoFemenino.checked) {
    genero = "femenino";
  }


  div.innerHTML = "<p>" + saludar(nombre, actual.getHours(), genero) + "</p>";
});
