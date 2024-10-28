const colores = document.getElementById("colores");
const txt = document.getElementById("txt");
const boton_añadir = document.getElementById("añadir");
const boton_eliminar = document.getElementById("eliminar");


function comprobarItem(valor) {
for (let color of colores.options) {
if (color.textContent === valor) {
alert("No se puede añadir ese valor, valor duplicado");
return false;
}
}
return true;
}
boton_añadir.addEventListener("click", function () {
const valor = txt.value;
console.log(valor);

if (comprobarItem(valor) && valor !== "") {
const option = document.createElement("option");
option.textContent = valor;
option.value = valor;
colores.appendChild(option);

}
txt.value = "";
});

boton_eliminar.addEventListener("click", function () {
//colores.remove(colores.options.length - 1);
colores.removeChild(colores.options[colores.length - 1]);
}); 