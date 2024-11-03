const listaTareas = document.getElementById("listaTareas");
const anadir = document.getElementById("anadir");
const deleteCompletadas = document.getElementById("eliminarCompletadas");

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
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const prioridad = document.getElementById("prioridad").value;

  if (!titulo) {
    alert("El título de la tarea no puede estar vacío.");
    return;
  }

  const tarea = crearElementoTarea(titulo, descripcion, prioridad);
  listaTareas.appendChild(tarea);
  ordenarPorPrioridad(); // Añade esta línea

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

function editarTarea(tarea) {
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
