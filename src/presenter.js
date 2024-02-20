const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const nombre=document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreS=String(nombre.value);
  obtenerSaludoPorGenero(nombreS);

});



// Función para obtener el saludo por género
async function obtenerSaludoPorGenero(nombre) {
  try {
      const response = await fetch(`https://api.genderize.io?name=${nombre}`);
      const data = await response.json();

      if (data.gender) {
        let saludo;
        if (data.gender === 'female') {
            saludo = 'Sra.';
        } else {
            saludo = 'Sr.';
        }
          div.innerHTML = "<p> Hola "+saludo +"<b> " + nombre + "</b></p>";
      } else {
          console.log(`No se pudo determinar el género para ${nombre}`);
      }
  } catch (error) {
      console.error('Error al obtener información del género:', error);
  }
}

