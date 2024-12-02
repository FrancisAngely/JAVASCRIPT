class Estudiante {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
  }
  mostrarDatos() {
    return `El nombre y apellido es: ${this.nombre} ${this.apellido}, edad es: ${this.edad} y curso elegido: ${this.curso}`;
  }
}

const añadirEstudiante = document.getElementById("estudiante-añadir");
const nombreE = document.getElementById("estudiante-nombre");
const apellidoE = document.getElementById("estudiante-apellido");
const edadE = document.getElementById("estudiante-edad");
const cursoE = document.getElementById("estudiante-curso");
const listaEstudiante = document.getElementById("estudiante-lista");

function mostrarError(campo) {
  if (campo.value.trim() === "") {
    campo.classList.add("input-invalido");
    campo.classList.remove("input-valido");
    return false;
  } else {
    campo.classList.add("input-valido");
    campo.classList.remove("input-invalido");
    return true;
  }
}

añadirEstudiante.addEventListener("click", function () {

  const inputNombre = nombreE.value;
  const inputApellido = apellidoE.value;
  const inputEdad = edadE.value;
  const inputCurso = cursoE.value;

  const validadNombre = mostrarError(nombreE);
  const validadApellido = mostrarError(apellidoE);
  const validadEdad = mostrarError(edadE);
  const validadCurso = mostrarError(cursoE);


  if (validadNombre && validadApellido && validadEdad && validadCurso) {
    alert("Formulario enviado correctamente");
    const estudiante = new Estudiante(inputNombre, inputApellido, inputEdad, inputCurso);
    console.log(estudiante.mostrarDatos());
    const campo = document.createElement("li");
    campo.textContent = estudiante.mostrarDatos();
    campo.value = estudiante.apellido;
    listaEstudiante.appendChild(campo);

    nombreE.classList.remove("input-invalido", "input-valido");
    apellidoE.classList.remove("input-invalido", "input-valido");
    edadE.classList.remove("input-invalido", "input-valido");
    cursoE.classList.remove("input-invalido", "input-valido");

    const botonE = document.createElement("button");
    botonE.textContent = "Eliminar";
    //botonE.value="Eliminar";
    campo.appendChild(botonE);

    const option = document.createElement("option");
    option.value = `${estudiante.apellido}`;
    option.textContent = `${estudiante.nombre},${estudiante.apellido} `;
    selectestMatricula.appendChild(option);
    listaEstudiante.appendChild(campo);

    botonE.addEventListener("click", function () {

      listaEstudiante.removeChild(campo);
      selectestMatricula.removeChild(option);
    })
  } else {
    alert("Formulario esta incompleto por favor rellenar correctamente");
  }

});


//elementos de asignatura

class Asignatura {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
  }
  mostrarDatos() {
    return `El nombre de la asignatura es: ${this.nombre}, y curso elegido: ${this.curso}`;
  }
}

const añadirA = document.getElementById("asignatura-añadir");
const asignaturaNombre = document.getElementById("asignatura-nombre");
const asignaturaCurso = document.getElementById("asignatura-curso");
const listaAsignatura = document.getElementById("asignatura-lista");

añadirA.addEventListener("click", function () {

  const inputNombreAsignatura = asignaturaNombre.value;
  const inputAsignaturaCurso = asignaturaCurso.value;

  const validadAsignaturaNombre = mostrarError(asignaturaNombre);
  const validadAsignaturaCurso = mostrarError(asignaturaCurso);


  if (validadAsignaturaNombre && validadAsignaturaCurso) {
    alert("Formulario enviado correctamente");
    const asignatura = new Asignatura(inputNombreAsignatura, inputAsignaturaCurso);
    console.log(asignatura.mostrarDatos());

    const campo = document.createElement("li");
    campo.textContent = asignatura.mostrarDatos();
    campo.value = asignatura.nombre;
    listaAsignatura.appendChild(campo);

    asignaturaNombre.classList.remove("input-invalido", "input-valido");
    asignaturaCurso.classList.remove("input-invalido", "input-valido");


    const botonE = document.createElement("button");
    botonE.textContent = "Eliminar";
    campo.appendChild(botonE);

    const option = document.createElement("option");
    option.value = asignatura.nombre;
    option.textContent = asignatura.nombre;;
    asignaturaDocente.appendChild(option);
    console.log(asignaturaDocente.options);

    const option2 = document.createElement("option");
    option2.value = asignatura.nombre;
    option2.textContent = asignatura.nombre;
    selectestMatricula.appendChild(option2);

    botonE.addEventListener("click", function () {

      listaAsignatura.removeChild(campo);
      asignaturaDocente.removeChild(option);
      selectestMatricula.removeChild(option2);
    })
  } else {
    alert("Formulario esta incompleto por favor rellenar correctamente");
  }

});

//elementos de docente
const añadir_d = document.getElementById("docente-añadir");
const nombre_docente = document.getElementById("docente-nombre");
const apellido_docente = document.getElementById("docente-apellido");
const asignatura_docente = document.getElementById("docente-asignatura");
const lista_docentes = document.getElementById("docente-lista");


añadir_d.addEventListener("click", function () {
  const inputNombre = nombre_docente.value;
  const inputApellido = apellido_docente.value;
  const selectAsignatura = asignatura_docente.value;

  const nombreOk = comprobarCampos(nombre_docente);
  const apellidoOk = comprobarCampos(apellido_docente);
  const docenteOk = comprobarCampos(asignatura_docente);


  if (nombreOk && apellidoOk && docenteOk) {
    alert("Formulario enviado correctamente");
    const docente = new Docente(inputNombre, inputApellido, selectAsignatura);
    console.log(docente.mostrarDatos());

    const elemento = document.createElement("li");
    elemento.textContent = docente.mostrarDatos();
    elemento.value = docente.apellido;
    lista_docentes.appendChild(elemento);

    nombre_docente.classList.remove("input-valido", "input-invalido");
    apellido_docente.classList.remove("input-valido", "input-invalido");
    asignatura_docente.classList.remove("input-valido", "input-invalido");

    const boton_e = document.createElement("button");
    boton_e.textContent = "Eliminar";
    boton_e.value = "Eliminar";
    elemento.appendChild(boton_e);

    boton_e.addEventListener("click", function () {
      lista_docentes.removeChild(elemento);
    })
  } else {
    alert("Debes completar todos los datos del formulario - docente");
  }
});



//elementos matricula

const añadir_m = document.getElementById("matricula-añadir");
const selectasigMatricula = document.getElementById("matricula-asignatura");
const selectestMatricula = document.getElementById("matricula-estudiante");
const lista_matricula = document.getElementById("matricula-lista");



añadir_m.addEventListener("click", function () {
  const estudiante_matricula = selectestMatricula.value;
  const asignatura_matricula = selectasigMatricula.value;

  const estudianteOk = comprobarCampos(selectestMatricula);
  const asignaturaOk = comprobarCampos(selectasigMatricula);

  if (estudianteOk && asignaturaOk) {
    const elemento = document.createElement("li");
    elemento.textContent = `El estudiante es: ${selectestMatricula} y la asignatura es: ${asignatura_matricula}`;
    elemento.value = `${selectestMatricula}${selectasigMatricula}`;
    lista_matricula.appendChild(elemento);
    alert("todo correcto");
  } else {
    alert("selecciona los campos")
  }
});

//elementos de docente
const añadirD = document.getElementById("docente-añadir");
const nombreDocente = document.getElementById("docente-nombre");
const apellidoDocente = document.getElementById("docente-apellido");
const asignaturaDocente = document.getElementById("docente-asignatura");
const listaDocente = document.getElementById("docente-lista");
