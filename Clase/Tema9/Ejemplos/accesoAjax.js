const boton = document.getElementById("llamada");


boton.addEventListener("click", function (){
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.addEventListener("load", (data) => {
const lista = document.getElementById("usuarios");
const JSONinformation = JSON.parse(data.target.response);
for(let variable of JSONinformation){
const elemento = document.createElement("li");
elemento.textContent = `El id: ${variable.id} y el nombre es: ${variable.name}`
lista.appendChild(elemento);
}
});
xhr.send();
});