/*//Se crea la constante de los id
const contenedorPiezas = document.getElementById("contenedor-piezas");
const contenedorPuzzle = document.getElementById("contenedor-puzzle");
const mensaje = document.getElementById("mensaje-final");
const barra = document.getElementById("barra-progreso");

//Se crea un array con las imagenes
const pieza = [
  { id: 1, src: "imagen-0.jpg" },
  { id: 2, src: "imagen-1.jpg" },
  { id: 3, src: "imagen-2.jpg" },
  { id: 4, src: "imagen-3.jpg" },
  { id: 5, src: "imagen-4.jpg" },
  { id: 6, src: "imagen-5.jpg" },
  { id: 7, src: "imagen-6.jpg" },
  { id: 8, src: "imagen-7.jpg" },
  { id: 9, src: "imagen-8.jpg" },
];

const piezasDesordenadas = pieza.sort(() => Math.random() - 0.5);
piezasDesordenadas.forEach((pieza) => {
  const img = document.createElement("img");
  img.src = pieza.src;
  img.id = `pieza-${pieza.id}`;
  img.classList.add("imagen");
  img.draggable = true;

  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", pieza.id);
  });

  contenedorPiezas.appendChild(img);
});

document.querySelectorAll(".celda").forEach((celda) => {
  celda.addEventListener("dragover", (e) => {
    e.preventDefault(); //se activa el arrastre
  });

  celda.addEventListener("drop", (e) => {
    e.preventDefault();
    const idPieza = e.dataTransfer.getData("id");
    const pieza = document.getElementById(`pieza-${idPieza}`);
    if (celda.children.length === 0) {
      if (celda.dataset.id === idPieza) {
        celda.classList.add("Correcta");
        celda.appendChild(pieza);
      } else {
        celda.classList.add("Error");
        setTimeout(() => celda.classList.remove("error"), 1000);
      }
    }
    comprobarPuzzle();
  });
  
});

function comprobarPuzzle() {
  let acabado = true;

  celdas.forEach((celda) => {
    if (celda.children.length === 0 || !celda.classList.contains("correcto")) {
      acabado = false;
    }
  });

  if (acabado) {
    mensaje.style.display = "block";
  }
}
*/

const contenedorPiezas = document.getElementById("contenedor-piezas");
const contenedorPuzzle = document.getElementById("contenedor-puzzle");
const mensaje = document.getElementById("mensaje-final");
const barra = document.getElementById("barra-progreso");
const celdas = document.querySelectorAll(".celda");


//creo un array con objetos de las img
const piezas = [
    { id: 1, src: "imagen-0.jpg" },
    { id: 2, src: "imagen-1.jpg" },
    { id: 3, src: "imagen-2.jpg" },
    { id: 4, src: "imagen-3.jpg" },
    { id: 5, src: "imagen-4.jpg" },
    { id: 6, src: "imagen-5.jpg" },
    { id: 7, src: "imagen-6.jpg" },
    { id: 8, src: "imagen-7.jpg" },
    { id: 9, src: "imagen-8.jpg" },
];

let piezasDesordenadas = piezas.sort(() => Math.random() - 0.5);

piezasDesordenadas.forEach((pieza) => {
    const img = document.createElement("img");
    img.src = pieza.src;
    img.id = `pieza-${pieza.id}`;
    img.classList.add("imagen");
    img.draggable = true;

    img.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("id", pieza.id);
    });

    contenedorPiezas.appendChild(img);
});


document.querySelectorAll(".celda").forEach((celda) => {
    celda.addEventListener("dragover", (e) => {
        e.preventDefault(); //activado el arrastre
    })

    celda.addEventListener("drop", (e) => {
        e.preventDefault();
        const idPieza = e.dataTransfer.getData("id");
        const pieza = document.getElementById(`pieza-${idPieza}`);

        if (celda.children.length === 0) {
            if (celda.dataset.id === idPieza) {
                celda.classList.add("correcta");
                celda.appendChild(pieza);
                actualizarBarra();
            } else {
                celda.classList.add("error");
                setTimeout(() => celda.classList.remove("error"), 1000); //quito el rojo tras 1seg
            }
        }
        comprobarPuzzle();
    })
});

function comprobarPuzzle() {
    const celdas = document.querySelectorAll(".celda");
    let acabado = true;

    celdas.forEach((celda) => {
        if (celda.children.length === 0 || !celda.classList.contains("correcta")) {
            acabado = false;
        }
    });
    if (acabado) {
        mensaje.style.display = "block";
    }
}

function actualizarBarra() {
    let celdasCorrectas = document.querySelectorAll(".celda.correcta").length;
    let celdasNum = document.querySelectorAll(".celda").length;
    let progreso = (celdasCorrectas / celdasNum) * 100;
    barra.style.width = `${progreso}%`;
}