document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const genero = document.getElementById("genero");
    const lenguaje = document.querySelector('input[name="lenguajes"]:checked');
    const texto = document.getElementById("texto");
    const instituto = document.getElementById("insti");
    const nombres = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const so = document.querySelectorAll("input[name=so]:checked");
    const grado = document.getElementById("grado").selectedOptions;

    let message = [];

    if (genero.value == "") {
      genero.classList.add("error");
      message.push("No ha seleccionado un genero");
    }
    if (lenguaje == null || lenguaje.value == "") {
      message.push("No ha seleccionado lenguaje");
      mensaje_error(
        "No ha selecionado ningún lenguaje",
        "radio_buttons",
        "lenguaje"
      );
    }
    if (texto.value == "") {
      texto.classList.add("error");
      message.push("No hay texto");
      mensaje_error("No hay texto", "text_area", "texto");
    }
    if (instituto.value == "") {
      instituto.classList.add("error");
      message.push("Escriba el nombre del instituto");
    }
    if (nombres.value == "") {
      nombres.classList.add("error");
      message.push("Escriba su nombre");
    }
    if (apellidos.value == "") {
      apellidos.classList.add("error");
      message.push("Escriba sus apellido");
    }

    if (email.value == "" && !validate_email(email.value)) {
      email.classList.add("error");
      message.push("Escriba un correo electronico valido");
    }
    if (so.length == 0) {
      mensaje_error(
        "No ha seleccionado ningun sistema operativo",
        "checkbox_so",
        "so"
      );
      message.push("No ha seleccionado ningun sistema operativo");
    }

    if (grado.length == 0) {
      mensaje_error("No ha seleccionado ningun grado", "grado_select", "grado");
      message.push("No ha seleccionado ningun grado");
    }

    if (message.length == 0) {
      form.submit();
    } else {
      let texto = "";
      for (var i = 0; i < message.length; i++) {
        texto += message[i] + " \n";
      }
      alert(texto);
    }
  });
  // control genero
  genero = document.getElementById("genero");
  genero.addEventListener("click", function () {
    genero.addEventListener("change", function () {
      //disable error message
      genero.classList.remove("error");
      remove_mensajes_error("error_lenguaje");
      // enabled radio lenguajes
      if (genero.value != "") {
        lenguejes = document.querySelectorAll("[name=lenguajes]");
        for (var i = 0; i < lenguejes.length; i++) {
          document.getElementById(lenguejes[i].id).disabled = false;
        }
      } else {
        lenguejes = document.querySelectorAll("[name=lenguajes]");
        for (var i = 0; i < lenguejes.length; i++) {
          document.getElementById(lenguejes[i].id).disabled = true;
        }
      }
    });
  });

  //Text area
  texto = document.getElementById("texto");
  texto.addEventListener("input", function (event) {
    //remove_mensajes_error("error_texto");
    texto.classList.remove("error_texto");
    let value_length = event.target.value.length;
    const MAX_CHARS = 10;
    let maximo = max_length(value_length, MAX_CHARS);
    if (!maximo) {
      alert("Has alcanzado el número maximo de caracteres");
      texto.value = texto.value.slice(0, 10);
    }
  });

  // control nombre y apellido
  nombre = document.getElementById("nombre");
  nombre.addEventListener("input", function (event) {
    nombre.classList.remove("error");
    let validoName = validate_charSpecial(nombre.value);
    //console.log(valido);
    if (!validoName) {
      alert("Datos invalidos");
    }
    let value_length = event.target.value.length;
    const MAX_CHARS = 10;
    let maximo = max_length(value_length, MAX_CHARS);
    if (!maximo) {
      alert("Has alcanzado el número maximo de caracteres");
      nombre.value = nombre.value.slice(0, 10);
    }
  });

  apellidos = document.getElementById("apellidos");
  apellidos.addEventListener("input", function (event) {
    apellidos.classList.remove("error");
    let validoApellido = validate_charSpecial1(apellidos.value);
    //console.log(validoApellido);
    if (!validoApellido) {
      alert("Datos invalidos");
    }

    let value_length = event.target.value.length;
    const MAX_CHARS = 10;
    let maximo = max_length(value_length, MAX_CHARS);
    if (!maximo) {
      alert("Has alcanzado el número maximo de caracteres");
      apellidos.value = apellidos.value.slice(0, 10);
    }
  });

  instituto = document.getElementById("insti");
  instituto.addEventListener("input", function (event) {
    instituto.classList.remove("error");
    let validoInsti = validate(instituto.value);
    console.log(validoInsti);
    if (!validoInsti) {
      alert("Datos invalidos");
    }
    let value_length = event.target.value.length;
    const MAX_CHARS = 10;
    let maximo = max_length(value_length, MAX_CHARS);
    if (!maximo) {
      alert("Has alcanzado el número maximo de caracteres");
      instituto.value = instituto.value.slice(0, 10);
    }
  });

  email = document.getElementById("email");
  email.addEventListener("focusout", function (event) {
    email = event.target.value;
    let valido = validate_email(email);
    if (!valido) {
      alert("Email invalido");
    }
  });
  email.addEventListener("input", function (event) {
    // email.classList.remove("error");
  });

  //Opciones Sistemas operativos
  checkbox_so = document.querySelectorAll("[name=so]");
  checkbox_so.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      remove_mensajes_error("error_so");

      if (alguno_selecionado()) {
        grado = document.getElementById("grado").disabled = false;
        remove_mensajes_error("error_grado");
      } else {
        grado = document.getElementById("grado").disabled = true;
        deseleccionar_opciones();
      }
    });
  });

  //funciones
  function validate_email(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  function validate_charSpecial(nombre) {
    return nombre.match(/^[a-zA-Z]*$/);
  }

  function validate_charSpecial1(apellidos) {
    return apellidos.match(/^[a-zA-Z]*$/);
  }
  function validate(instituto) {
    return instituto.match(/^[a-zA-Z\-]*$/);
  }

  function max_length(value_length, max_length) {
    if (value_length < max_length) {
      return true;
    }
    return false;
  }
  function alguno_selecionado() {
    checkbox_so = document.querySelectorAll("[name=so]");
    let cont = 0;
    checkbox_so.forEach((checkbox) => {
      if (checkbox.checked) {
        cont++;
      }
      0;
    });
    if (cont > 0) {
      return true;
    } else {
      return false;
    }
  }
  function deseleccionar_opciones() {
    select_opciones = document.getElementById("grado");
    for (var i = 0; i < select_opciones.options.length; i++) {
      select_opciones.options[i].selected = false;
    }
  }

  function entre_min_max(value_length, min, max) {
    if (value_length <= max && value_length >= min) {
      return true;
    } else {
      return false;
    }
  }

  function mensaje_error(texto, elemento, id) {
    var element = document.getElementById("error_" + id);
    console.log(element);
    if (typeof element === "undefined" || element === null) {
      let error = document.createElement("div");
      error.innerHTML =
        "<span id='error_" +
        id +
        "' class='error_message'>" +
        texto +
        "</span>";
      document.getElementById(elemento).appendChild(error);
    }
  }

  function remove_mensajes_error(id) {
    var element = document.getElementById(id);
    if (typeof element != "undefined" && element != null) {
      element.remove();
    }
  }
});
