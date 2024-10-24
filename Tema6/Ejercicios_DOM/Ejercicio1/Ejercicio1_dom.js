const elemento=document.getElementById("opcion"); 
const cuadro=document.getElementById("cuadoTexto");

elemento.addEventListener("click", function(){

    const seleccion=elemento.value; 
    cuadro.value=seleccion; 
}); 
