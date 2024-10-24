const title=document.getElementById("titulo");
const nombre=document.getElementById("Nombre"); 
title.classList.add("main-title","Otro titulo"); 
console.log(title); 
title.classList.remove("otro-titulo");
console.log(title);
console.log(nombre);  

console.log(nombre.getAttribute("type")); 