const elemento=document.getElementById("opcion"); 
const cuadro=document.getElementById("cuadoTexto");

elemento.addEventListener("change", function(){
    const valor=elemento.options[elemento.selectedIndex]; 

    console.log(valor.textContent);
    cuadro.value=valor.textContent; 
    //const seleccion=elemento.value; 
}); 

/*
const colores = document.getElementById("colores");
const txt = document.getElementById("txt");

colores.addEventListener("change", function (){

const valor = colores.options[colores.selectedIndex];
console.log(valor.textContent);
txt.value = valor.textContent;
})

*/