// Seleccionamos las cartas y las zonas de caída
const cards = document.querySelectorAll(".card");
const dropZones = document.querySelectorAll(".drop-zone");

// Añadimos los eventos de arrastre a las cartas
cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

// Añadimos los eventos de zona de caída
dropZones.forEach((zone) => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("dragleave", dragLeave);
  zone.addEventListener("drop", drop);
});

// Función para manejar el inicio del arrastre
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.style.display = "none";
  }, 0);
}

// Función para manejar el final del arrastre
function dragEnd(e) {
  e.target.style.display = "block";
}

// Función para permitir que la zona de caída acepte el elemento arrastrado
function dragOver(e) {
  e.preventDefault();
  this.classList.add("over");
}

// Función para manejar cuando el elemento sale de la zona de caída
function dragLeave() {
  this.classList.remove("over");
}

// Función para manejar el soltar el elemento en la zona de caída
function drop(e) {
  e.preventDefault();
  this.classList.remove("over");
  const cardId = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(cardId);
  this.appendChild(card);
}
