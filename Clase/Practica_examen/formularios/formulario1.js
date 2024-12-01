document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const genero = document.getElementById("genero");
    const lenguaje = document.querySelector('input [name="lenguaje"]:chexked');
    const texto = document.getElementById("texto");
    const instituto = document.getElementById("insti");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const so = document.querySelectorAll('input [name="so"]:checked');
    const ciclos = document.getElementById("ciclos").selectedOptions;

    //let mensaje = [];
    genero = document.getElementById("genero");
    genero.addEventListener("click", function () {
      genero.addEventListener("change", function () {
        //disable error message
        genero.classList.remove("error");
        remove_mensajes_error("error_lenguaje");
        // enabled radio lenguajes
        if (genero.value != "") {
          lenguaje = document.querySelectorAll("[name=lenguaje]");
          for (var i = 0; i < lenguaje.length; i++) {
            document.getElementById(lenguaje[i].id).disabled = false;
          }
        } else {
          lenguaje = document.querySelectorAll("[name=lenguaje]");
          for (var i = 0; i < lenguaje.length; i++) {
            document.getElementById(lenguaje[i].id).disabled = true;
          }
        }
      });
    });
  });
});
