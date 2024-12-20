/*function consola(txt) {
  var con = document.getElementById("consola");
  con.innerHTML += txt + "<hr>";
}*/

function mostrarLista() {
  var tabla = document.querySelectorAll("table tr td");
  var lista = [];

  for (var i = 0; i < tabla.length; i++) {
    lista.push(tabla[i].innerHTML);
  }

  let listaOrdenada = "<ol>";
  for (var j = lista.length - 1; j >= 0; j--) {
    listaOrdenada += "<li>" + lista[j] + "</li>";
  }

  listaOrdenada += "</ol>";
  document.getElementById("consola").innerHTML = listaOrdenada;
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    mostrarLista();
  }
});
