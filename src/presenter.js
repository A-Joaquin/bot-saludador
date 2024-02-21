selectIdioma.addEventListener("change", function() {
    cambiarIdioma(this.value);
});

function cambiarIdioma(idioma) {
    const textSeleccionarIdioma = document.querySelector("#textSeleccionarIdioma");
    const textIngreseNombre = document.querySelector("#textIngreseNombre");
    const textIngreseEdad = document.querySelector("#textIngreseEdad");

    const español = document.querySelector("#español");
    const ingles = document.querySelector("#ingles");

    const Tituto = document.querySelector("#Tituto");
    const boton = document.querySelector("#abrir-chat");
    if (idioma == "en") {
        textSeleccionarIdioma.textContent = "Select language:";
        textIngreseNombre.textContent = "Enter your name:";
        textIngreseEdad.textContent = "Enter your age:";
        español.textContent = "Spanish";
        ingles.textContent = "English";

        Tituto.textContent="GREETER BOT";
        boton.value="enter chat"
    }
    else{
        textSeleccionarIdioma.textContent = "Selecciona idioma:";
        textIngreseNombre.textContent = "Ingresa tu nombre:";
        textIngreseEdad.textContent = "Ingresa tu edad:";
        español.textContent = "Español";
        ingles.textContent = "Ingles";

        Tituto.textContent="BOT SALUDADOR";
        boton.value="Ingresar al chat"
    }
}

// Resto del código...


const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const nombreHtml = document.querySelector("#nombre");
const edadHtml = document.querySelector("#edad");
const idioma=document.querySelector("#selectIdioma");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nombreS = String(nombreHtml.value);
  const edadS = Number.parseInt(edadHtml.value);
  const Saludo = await obtenerSaludoPorEdad(nombreS,edadS,idioma.value);
  let saludoHora = obtenerSaludoPorHora(idioma.value);

  div.innerHTML = "<p>"+ saludoHora+ " " + Saludo + "<b>" + nombreS+ "</b></p>";
  

});



async function obtenerSaludoPorEdad(nombre, edad,idioma) {
  try {
      const response = await fetch(`https://api.genderize.io?name=${nombre}`);
      const data = await response.json();

      if (data.gender) {
          let saludo;
          if (edad > 30) {
            if (data.gender === 'female') {
                if(idioma=="es")
                {
                  saludo='Sra.';
                }
                else{
                  saludo='Mrs.'
                }

              } 
            else {
                if(idioma=="es")
                {
                  saludo='Sr.';
                }
                else{
                  saludo='Mr.'
                }
            }              
          } 
          else {
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


function obtenerSaludoPorHora(idioma) {
  const horaActual = new Date().getHours();
  let saludo;
  if (horaActual >= 5 && horaActual < 12) {
    if(idioma=="es")
    {
      saludo='Buenos dias';
    }
    else{
      saludo='Good morning'
    }
  } else if (horaActual >= 12 && horaActual < 18) {
    if(idioma=="es")
    {
      saludo='Buenas tardes';
    }
    else{
      saludo='good afternoon'
    }
  } else {
    if(idioma=="es")
    {
      saludo='Buenas noches';
    }
    else{
      saludo='Good night'
    }
  }
  return saludo;
}


  
