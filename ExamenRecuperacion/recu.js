const form = document.getElementById("formulario-categoria");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombreCategoria = document
    .getElementById("descripcion-categoria")
    .value.trim();
  const colorSeleccionado = document
    .getElementById("color-categoria")
    .value.trim();
  const errorDiv = document.getElementById("error-categoria");

  //Gestion A - B

  errorDiv.textContent = "";

  const regex = /^[a-zA-Z].{4,10}$/;
  if (!regex.test(nombreCategoria)) {
    errorDiv.textContent = "El nombre debe contener de 4 a 10 caracteres";
    return;
  }

  if (!colorSeleccionado) {
    errorDiv.textContent = "Debes seleccionar una opcion";
    return;
  }

  const categorias=["amarillo-categoria","verde-categoria","rojo-categoria","rosa-categoria","azul-categoria"]; 

  if (categorias[colorSeleccionado]) {
    errorDiv.textContent = "Color ya fue seleccionado";
    return; 
  } // Al crear la categoria se me actualiza y se me sobre escribe la tarea del mismo color cuando quiero comprobar el error. 
  console.log(categorias); 

  // gestion d 

  categorias[colorSeleccionado] = nombreCategoria;
  document.getElementById(colorSeleccionado).textContent = nombreCategoria;
  
  const selectorCategoria = document.getElementById("categoria-tarea");
  const opcion = document.createElement("option");
  opcion.value=nombreCategoria;
  opcion.textContent=nombreCategoria; 
  selectorCategoria.appendChild(opcion); 

  document.getElementById("descripcion-categoria").value = "";
  document.getElementById("color-categoria").value = "";

// 2da parte

document.getElementById('formulario-tarea').addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo-tarea').value.trim();
    const descripcion = document.getElementById('descripcion-tarea').value.trim();
    const prioridad = document.getElementById('prioridad-tarea').value;
    const categoria = document.getElementById('categoria-tarea').value;
    const errorDiv = document.getElementById('error-tarea');

    errorDiv.textContent = ''; 

    if (!titulo || !descripcion || !prioridad || !categoria) {
        errorDiv.textContent = 'Todos los campos son obligatorios.';
        return;
    }

    const tarea = document.createElement('div');
    tarea.className = `tarea ${prioridad.toLowerCase()}`;
    tarea.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <p><strong>Prioridad:</strong> ${prioridad}</p>
        <p><strong>Categoría:</strong> ${categoria}</p>
        <button class="completar">Completar</button>
        <button class="eliminar">Eliminar</button>
        <button class="bloquear">Bloquear</button>
    `;
    document.getElementById('lista-pendientes').appendChild(tarea);
    actualizarContadores();

    document.getElementById('formulario-tarea').reset();
});

document.querySelector('.contenedor-tareas').addEventListener('click', function (e) {
    const tarea = e.target.closest('.tarea');

    if (e.target.classList.contains('completar')) {
        document.getElementById('lista-completadas').appendChild(tarea);
        e.target.remove(); 
        actualizarContadores();
    } else if (e.target.classList.contains('eliminar')) {
        tarea.remove();
        actualizarContadores();
    } else if (e.target.classList.contains('bloquear')) {
        document.getElementById('lista-espera').appendChild(tarea);
        e.target.remove(); 
        actualizarContadores();
    }
});

});
