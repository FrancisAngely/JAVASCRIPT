document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let validar = true;

    const instituto = document.getElementById("instituto");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const comentarios = document.getElementById("comentarios");
    const genero = document.getElementById("genero");
    const lenguajes = document.querySelector("input[name=lenguaje]:checked");
    const sistema_operativo = document.querySelector(
      "input[name=sistema_operativo]:checked"
    );
    const ciclo = document.getElementById("ciclo");

    document.querySelectorAll(".error-mensaje").forEach((el) => el.remove());

    let verificar = /^[0-9]{0,10}$/;
    let verificarComen = /^.{1,10}$/;

    // Validar género
    if (genero.value === "") {
      mostrarError(genero, "Debes seleccionar un género.");
      validar = false;
    } else {
      marcarValido(genero);
    }
    // Validar lenguaje
    if (!lenguajes) {
      mostrarError(
        document.querySelector("input[name='lenguaje']"),
        "Debes seleccionar un lenguaje."
      );
      validar = false;
    } else {
      marcarValido(lenguajes);
    }

    // Validar comentarios
    if (!verificarComen.test(comentarios.value)) {
      mostrarError(comentarios, "Máximo 10 caracteres permitidos.");
      validar = false;
    } else {
      marcarValido(comentarios);
    }

    //validar instituto
    if (verificar.test(instituto.value)) {
      mostrarError(instituto, "El Instituto solo debe contener letras.");
      validar = false;
    } else {
      marcarValido(instituto);
    }

    //validar nombre
    if (verificar.test(nombre.value)) {
      mostrarError(nombre, "El nombre solo debe contener letras.");
      validar = false;
    } else {
      marcarValido(nombre);
    }

    //validar apellido
    if (verificar.test(apellidos.value)) {
      mostrarError(apellidos, "El Apellido solo debe contener letras.");
      validar = false;
    } else {
      marcarValido(apellidos);
    }

    //console.log(verificarEmail(email.value));
    //validar email
    if (!verificarEmail(email.value)) {
      mostrarError(email, "El formato de correo electronico no es correcto.");
      validar = false;
    } else {
      marcarValido(email);
    }

    // Validar SO
    if (!sistema_operativo) {
      mostrarError(
        document.querySelector("input[name='sistema_operativo']"),
        "Debes seleccionar un sistema operativo."
      );
      validar = false;
    } else {
      marcarValido(sistema_operativo);
    }

    // Validar ciclo
    if (ciclo.value === "") {
      mostrarError(ciclo, "Debes seleccionar un ciclo.");
      validar = false;
    } else {
      marcarValido(ciclo);
    }

    if (
      instituto.value.trim() === "" ||
      nombre.value.trim() === "" ||
      apellidos.value.trim() === "" ||
      email.value.trim() === "" ||
      comentarios.value.trim() === "" ||
      !genero ||
      !lenguajes ||
      !sistema_operativo ||
      !ciclo
    ) {
      alert("Los campos no puede estar vacio");
    }

    if (validar) {
      alert("El formulario se ha enviado correctamente.");
      this.reset();
    } else {
      alert("Debes completar el formulario.");
    }
  });

function mostrarError(campo, mensaje) {
  if (campo.value.trim() === "") {
    campo.classList.add("input-invalido");
    campo.classList.remove("input-valido");
  } else {
    const mensajeError = document.createElement("span");
    mensajeError.classList.add("error-mensaje");
    campo.parentElement.appendChild(mensajeError);
    campo.classList.add("input-invalido");
    campo.classList.remove("input-valido");
    mensajeError.textContent = mensaje;
  }
}

function marcarValido(campo) {
  campo.classList.add("input-valido");
  campo.classList.remove("input-invalido");
}

function verificarEmail(email) {
  let validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return validate.test(email);
}
