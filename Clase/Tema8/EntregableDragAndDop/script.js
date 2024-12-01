const cards = document.querySelectorAll(".card");
const dropZones = document.querySelectorAll(".drop-zone");
const barra = document.getElementById("barra");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("dragleave", dragLeave);
  zone.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.style.display = "none";
  }, 0);
}

function dragEnd(e) {
  e.target.style.display = "block";
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function drop(e) {
  e.preventDefault();
  this.classList.remove("over");
  const cardId = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(cardId);

  if (this.id === "favorites") {
    this.appendChild(card);
  } else {
    document.getElementById("not-favorites").appendChild(card);
  }

  actualizarBarra();
}

function actualizarBarra() {
  const totalCards = document.querySelectorAll(".card").length;
  const favoriteCards = document.querySelectorAll("#favorites .card").length;

  let progreso = (favoriteCards / totalCards) * 100;

  barra.style.width = `${progreso}%`;
}
