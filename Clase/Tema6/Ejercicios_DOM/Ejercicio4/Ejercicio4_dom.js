const colores = document.getElementById("colores");
const txt = document.getElementById("txt");
const boton_anadir = document.getElementById("anadir");
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

boton_anadir.addEventListener("click", function () {
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
    if (colores.length > 0) { // Asegúrate de que hay opciones para eliminar
        colores.removeChild(colores.options[colores.length - 1]);
    } else {
        alert("No hay opciones para eliminar");
    }
});
