const titleInput =document.getElementById("titulo"); 
const descriptionInput =document.getElementById("descripcion"); 
const prioritySelect =document.getElementById("prioridad");
const addTaskButton =document.getElementById("anadir");  
const taskList =document.getElementById("eliminar"); 

let tareas=[]; 

function agregarTareas(){
    let titulo = titulo.value; 
    let descripcion = descripcion.value; 
    let prioridad = prioridad.value;
 

    if (titulo.trim() === "" || descripcion.trim() === "" || prioridad.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
      }
    
    
}
console.log(agregarTareas); 