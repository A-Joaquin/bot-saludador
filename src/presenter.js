const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const nombre=document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreS=String(nombre.value);
  const saludo='Hola';
  div.innerHTML = "<p>"+saludo +"<b> " + nombreS + "</b></p>";
});
