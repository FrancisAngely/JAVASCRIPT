const anadir = document.getElementById("anadir");
const titulo = document.getElementById("titulo");
const listaTareas = document.getElementById("listaTareas");
const delCompletadas = document.getElementById("eliminarCompletadas");

anadir.addEventListener("click", agregarTareas);
delCompletadas.addEventListener("click", eliminarCompletadas);

function ordenarPrioridad() {
  const tareas = Array.from(listaTareas.children);

  const prioridad = {
    alta: 1,
    media: 2,
    baja: 3,
  };

  tareas.sort((a, b) => {
    const prioridadA = prioridad[a.className.split(" ")[0]];
    const prioridadB = prioridad[b.className.split(" ")[0]];
    return prioridadA - prioridadB;
  });

  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => listaTareas.appendChild(tarea));
}

function agregarTareas() {
  const descripcion = document.getElementById("descripcion").value;
  const prioridad = document.getElementById("prioridad").value;
  if (titulo.value === "") {
    alert("El titulo de la tarea no puede estar vacio");
    return;
  }

  const tarea = crearElementoTarea(titulo.value, descripcion, prioridad);
  listaTareas.appendChild(tarea);
  ordenarPrioridad();
}

function crearElementoTarea(titulo, descripcion, prioridad) {
  const tarea = document.createElement("li");
  tarea.className = prioridad;
  tarea.innerHTML = `
    <div class="titulo"><strong>${titulo}</strong></div>
    <div class="descripcion"><strong>${descripcion}</strong></div>
    <div class="botones">
      <button class="tareaCompletada">completar</button>
      <button class="editar">editar</button>
    </div>
  `;

  tarea.querySelector(".tareaCompletada").onclick = () => {
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
  ordenarPrioridad();
  completadas.forEach((tarea) => listaTareas.appendChild(tarea));
}

function editarTarea(tarea) {
  const tituloElement = tarea.querySelector(".titulo strong");
  const descripcionElement = tarea.querySelector(".descripcion strong");

  titulo.value = tituloElement.textContent;
  descripcion.value = descripcionElement.textContent;
}
