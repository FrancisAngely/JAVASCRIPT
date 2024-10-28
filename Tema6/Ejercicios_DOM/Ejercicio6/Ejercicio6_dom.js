function consola(txt) {
    let con = document.getElementById("consola");
    con.innerHTML += txt + "<hr>";
}

function mostrarLista() {
    let tabla = document.querySelectorAll("table tr td");
    let lista = [];

    for (let i = 0; i < tabla.length; i++) {
        lista.push(tabla[i].innerHTML);
    }

    let listaOrdenada = "<ol>";
    for (let j = lista.length - 1; j >= 0; j--) {
        listaOrdenada += "<li>" + lista[j] + "</li>";
    }

    listaOrdenada += "<ol>";

    console.log(listaOrdenada);

}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        mostrarLista();
    }
});

