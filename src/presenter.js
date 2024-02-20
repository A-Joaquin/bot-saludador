const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saludo='Hola';
  div.innerHTML = "<p><b>"+saludo +"</b></p>";
});
