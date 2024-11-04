const listaTareas = document.getElementById("listaTareas");
const anadir = document.getElementById("anadir");
const deleteCompletadas = document.getElementById("eliminarCompletadas");
const titulo = document.getElementById("titulo");


anadir.addEventListener("click", agregarTarea);
deleteCompletadas.addEventListener("click", eliminarCompletadas);

function ordenarPorPrioridad() {
  const tareas = Array.from(listaTareas.children);

  const ordenPrioridad = {
    alta: 1,
    media: 2,
    baja: 3,
  };

  tareas.sort((a, b) => {
    const prioridadA = ordenPrioridad[a.className.split(" ")[0]];
    const prioridadB = ordenPrioridad[b.className.split(" ")[0]];
    return prioridadA - prioridadB;
  });

  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => listaTareas.appendChild(tarea));
}

function agregarTarea() {
  const descripcion = document.getElementById("descripcion").value.trim();
  const prioridad = document.getElementById("prioridad").value;
  console.log(titulo);

  if (titulo.value === "") {
    alert("El título de la tarea no puede estar vacío.");
    return;
  }

  const tarea = crearElementoTarea(titulo.value, descripcion, prioridad);
  listaTareas.appendChild(tarea);
  ordenarPorPrioridad();

  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("prioridad").value = "baja";
}

function crearElementoTarea(titulo, descripcion, prioridad) {
  const tarea = document.createElement("li");
  tarea.className = prioridad;
  tarea.innerHTML = `
    <div class="titulo"><strong>${titulo}</strong> </div>
    <div class="descripcion">- ${descripcion}</div>
    <div class="botones">
      <button class="completar">Completar</button>
      <button class="editar">Editar</button>
    </div>
  `;

  tarea.querySelector(".completar").onclick = () => {
    tarea.classList.toggle("completada");
    actualizarOrdenTareas();
  };

  tarea.querySelector(".editar").onclick = () => editarTarea(tarea);

  return tarea;
}

function eliminarCompletadas() {
  const tareasCompletadas = listaTareas.querySelectorAll(".completada");
  tareasCompletadas.forEach((tarea) => tarea.remove());
}

function actualizarOrdenTareas() {
  const completadas = document.querySelectorAll(".completada");
  ordenarPorPrioridad();

  completadas.forEach((tarea) => listaTareas.appendChild(tarea));
}

function editarTarea(tarea) {
  const tituloElement = tarea.querySelector(".titulo strong");
  const descripcionElement = tarea.querySelector(".descripcion");

  titulo.value = tituloElement.textContent;
  descripcion.value=descripcionElement.textContent;
  

}

//Resolucion clase:

/*
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const prioridad = document.getElementById("prioridades");
const añadir = document.getElementById("añadir");
const eliminar = document.getElementById("eliminar");
const lista = document.getElementById("lista_tareas");


añadir.addEventListener("click", function(){
if(titulo.value !== ""){
console.log("Todo ok");
const elemento = document.createElement("li");
elemento.textContent = `${titulo.value} - ${descripcion.value}`;
elemento.value = `${titulo.value} - ${descripcion.value}`;

const completar = document.createElement("button");
completar.textContent = "Completar";
completar.value = "Completar";

elemento.appendChild(completar);

if(prioridad.value === "baja"){
elemento.classList.add("baja");
}else if(prioridad.value === "media"){
elemento.classList.add("media");
}else{
elemento.classList.add("alta");
}
lista.appendChild(elemento);

completar.addEventListener("click", function() {
elemento.classList.add("completada");

//1-forma
// if(elemento.classList.contains("completada")){
// elemento.remove();
// lista.appendChild(elemento);
// }

//2-forma
/*if(elemento.classList.contains("completada")){
elemento.remove();
lista.insertBefore(elemento,null);
} 

//3- forma
//lista.insertAdjacentElement("beforeend", elemento);

//4- forma
const clonar = elemento.cloneNode(true);
elemento.remove();
lista.appendChild(clonar);
});
}else{
alert("No has introducido el título");
}
})
*/
/*function editarTarea(tarea) {
  const tituloElement = tarea.querySelector(".titulo strong");
  const descripcionElement = tarea.querySelector(".descripcion");

  const nuevoTitulo = prompt(
    "Edita el título de la tarea:",
    tituloElement.textContent
  );

  if (nuevoTitulo && nuevoTitulo.trim()) {
    tituloElement.textContent = nuevoTitulo;
    descripcionElement.textContent = `- ${
      prompt(
        "Edita la descripción de la tarea:",
        descripcionElement.textContent.slice(2)
      ) || ""
    }`;
  } else {
    alert("El título de la tarea no puede estar vacío.");
  }
}*/
