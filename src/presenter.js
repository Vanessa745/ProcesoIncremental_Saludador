import sumar from "./sumador";
import saludar from "./saludo";

const nom = document.querySelector("#primer-nombre");
const generoMasculino = document.querySelector("#genero-masculino");
const generoFemenino = document.querySelector("#genero-femenino");
const ed=document.querySelector("#c-edad");
const idiomaEspanol = document.querySelector("#idioma-es");
const idiomaIngles = document.querySelector("#idioma-en");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value;
  let actual = new Date();
  let genero;
  let idioma;
  const edad = ed.value;

  if (generoMasculino.checked) {
    genero = "masculino";
  } else if (generoFemenino.checked) {
    genero = "femenino";
  }

  if (idiomaEspanol.checked) { 
    idioma = "espanol";               
  } else if (idiomaIngles.checked) {
    idioma = "ingles";  
  }

  div.innerHTML = "<p>" + saludar(nombre, actual.getHours(), genero, edad, idioma) + "</p>";
});
