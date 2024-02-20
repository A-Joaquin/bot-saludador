const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const nombreHtml = document.querySelector("#nombre");
const edadHtml = document.querySelector("#edad");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nombreS = String(nombreHtml.value);
  const edadS = Number.parseInt(edadHtml.value);
  const Saludo = await obtenerSaludoPorEdad(nombreS,edadS);

  div.innerHTML = "<p> Hola " + Saludo + "<b>" + nombreS+ "</b></p>";


});

async function obtenerSaludoPorEdad(nombre, edad) {
  try {
      const response = await fetch(`https://api.genderize.io?name=${nombre}`);
      const data = await response.json();

      if (data.gender) {
          let saludo;
          if (edad > 30) {
              saludo = (data.gender === 'female') ? 'Sra.' : 'Sr.';
          } else {
              saludo = '';
          }

          return saludo;
      } else {
          console.log(`No se pudo determinar el género para ${nombre}`);
      }
  } catch (error) {
      console.error('Error al obtener información del género:', error);
  }
}