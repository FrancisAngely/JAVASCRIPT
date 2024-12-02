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
const nombre = document.getElementById("estudiante-nombre");
const apellido = document.getElementById("estudiante-apellido");
const edad = document.getElementById("estudiante-edad");
const curso = document.getElementById("estudiante-curso");
const listaEstudiante = document.getElementById("estudiante-lista");

function mostrarError(campo, mensaje) {
  if (campo.value.trim() === "") {
    campo.classList.add("input-invalido");
    campo.classList.remove("input-valido");
  } else {
    const mensajeError = document.createElement("span");
    mensajeError.classList.add("input-invalido");
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

class Asignatura {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
  }
  mostrarDatos() {
    return `El nombre de la asignatura es: ${this.nombre}, y curso elegido: ${this.curso}`;
  }
}

/*
class Estudiante {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
  }

  mostrarDatos() {
    return `El nombre y apellido es : ${this.nombre} ${this.apellido}, edad: ${this.edad} y curso: ${this.curso}`;
  }
}

class Asignatura {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
  }

  mostrarDatos() {
    return `El nombre de la asignatura es : ${this.nombre} y el ciclo: ${this.curso}`;
  }
}

class Docente {
  constructor(nombre, apellido, asignatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.asignatura = asignatura;
  }

  mostrarDatos() {
    return `El nombre y apellido del docente es : ${this.nombre} ${this.apellido}, y asignatura: ${this.asignatura}`;
  }
}


//elementos de estudiante
const añadir_e = document.getElementById("estudiante-añadir");
const nombre_estudiante = document.getElementById("estudiante-nombre");
const apellido_estudiante = document.getElementById("estudiante-apellido");
const edad_estudiante = document.getElementById("estudiante-edad");
const curso_estudiante = document.getElementById("estudiante-curso");
const lista_estudiantes = document.getElementById("estudiante-lista");

//elementos de asignatura

const añadir_a = document.getElementById("asignatura-añadir");
const nombre_asignatura = document.getElementById("asignatura-nombre");
const curso_asignatura = document.getElementById("asignatura-curso");
const lista_asignaturas = document.getElementById("asignatura-lista");

//elementos de docente
const añadir_d = document.getElementById("docente-añadir");
const nombre_docente = document.getElementById("docente-nombre");
const apellido_docente = document.getElementById("docente-apellido");
const asignatura_docente = document.getElementById("docente-asignatura");
const lista_docentes = document.getElementById("docente-lista");

//elementos matricula
const añadir_m = document.getElementById("matricula-añadir");
const selectasig_matricula = document.getElementById("matricula-asignatura");
const selectest_matricula = document.getElementById("matricula-estudiante");
const lista_matricula = document.getElementById("matricula-lista");


function comprobarCampos(elemento) {
  if (elemento.value === "") {
    elemento.classList.add("input-invalido");
    elemento.classList.remove("input-valido");
    return false;
  } else {
    elemento.classList.add("input-valido");
    elemento.classList.remove("input-invalido");
    return true;
  }

}

añadir_e.addEventListener("click", function(){
  const inputNombre = nombre_estudiante.value;
  const inputApellido = apellido_estudiante.value;
  const inputEdad = edad_estudiante.value;
  const inputCurso = curso_estudiante.value;
  
  const nombreOk = comprobarCampos(nombre_estudiante);
  const apellidoOk = comprobarCampos(apellido_estudiante);
  const edadOk = comprobarCampos(edad_estudiante);
  const cicloOk = comprobarCampos(curso_estudiante);
  
  
  if(nombreOk && apellidoOk && edadOk && cicloOk){
  alert("Formulario enviado correctamente");
  const estudiante = new Estudiante(inputNombre, inputApellido, inputEdad,inputCurso);
  console.log(estudiante.mostrarDatos());
  const elemento = document.createElement("li");
  elemento.textContent = estudiante.mostrarDatos();
  elemento.value = estudiante.apellido;
  lista_estudiantes.appendChild(elemento);
  
  nombre_estudiante.classList.remove("input-valido", "input-invalido");
  apellido_estudiante.classList.remove("input-valido", "input-invalido");
  edad_estudiante.classList.remove("input-valido", "input-invalido");
  curso_estudiante.classList.remove("input-valido", "input-invalido");
  
  const boton_e = document.createElement("button");
  boton_e.textContent = "Eliminar";
  boton_e.value = "Eliminar";
  elemento.appendChild(boton_e);
  
  const option = document.createElement("option");
  option.value = `${estudiante.apellido}`;
  option.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
  selectest_matricula.appendChild(option);
  
  boton_e.addEventListener("click", function(){
  lista_estudiantes.removeChild(elemento);
  selectest_matricula.removeChild(option);
  
  })
  }else{
  alert("Debes completar todos los datos del formulario");
  }
  });

añadir_a.addEventListener("click", function () {
  const inputNombre = nombre_asignatura.value;
  const inputCurso = curso_asignatura.value;

  const nombreOk = comprobarCampos(nombre_asignatura);
  const cicloOk = comprobarCampos(curso_asignatura);


  if (nombreOk && cicloOk) {
    alert("Formulario enviado correctamente");
    const asignatura = new Asignatura(inputNombre, inputCurso);
    console.log(asignatura.mostrarDatos());

    const elemento = document.createElement("li");
    elemento.textContent = asignatura.mostrarDatos();
    elemento.value = asignatura.nombre;
    lista_asignaturas.appendChild(elemento);

    nombre_asignatura.classList.remove("input-valido", "input-invalido");
    curso_asignatura.classList.remove("input-valido", "input-invalido");

    const boton_e = document.createElement("button");
    boton_e.textContent = "Eliminar";
    boton_e.value = "Eliminar";
    elemento.appendChild(boton_e);


    const option = document.createElement("option");
    option.value = asignatura.nombre;
    option.textContent = asignatura.nombre;
    asignatura_docente.appendChild(option);
    console.log(asignatura_docente.options)

    const option2 = document.createElement("option");
    option2.value = asignatura.nombre;
    option2.textContent = asignatura.nombre;
    selectasig_matricula.appendChild(option2);

    boton_e.addEventListener("click", function () {
      lista_asignaturas.removeChild(elemento);
      asignatura_docente.removeChild(option);
      selectasig_matricula.remove(option2);
      /* for(let i = 0; i<asignatura_docente.options.length; i++){
      if(asignatura_docente.options[i].value === option.value){
      lista_asignaturas.remove(i);
      break;
      }
      }
          });


  } else {
    alert("Debes completar todos los datos del formulario - asignatura");
  }
});

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

añadir_m.addEventListener("click", function () {
  const estudiante_matricula = selectest_matricula.value;
  const asignatura_matricula = selectasig_matricula.value;

  const estudianteOk = comprobarCampos(selectest_matricula);
  const asignaturaOk = comprobarCampos(selectasig_matricula);

  if (estudianteOk && asignaturaOk) {
    const elemento = document.createElement("li");
    elemento.textContent = `El estudiante es: ${estudiante_matricula} y la asignatura es: ${asignatura_matricula}`;
    elemento.value = `${estudiante_matricula}${asignatura_matricula}`;
    lista_matricula.appendChild(elemento);
    alert("todo correcto");
  } else {
    alert("selecciona los campos")
  }
}); 



*/
