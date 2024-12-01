document.getElementById("addButton").addEventListener("click", function () {
  const val1 = document.getElementById("input1").value;
  const val2 = document.getElementById("input2").value;

  if (val1.trim() === "" || val2.trim() === "") {
    alert("Por favor, completa ambos campos.");
    return;
  }

  const nuevaFila = document.createElement("tr");
  const celda1 = document.createElement("td");
  const celda2 = document.createElement("td");

  celda1.textContent = val1;
  celda2.textContent = val2;

  nuevaFila.appendChild(celda1);
  nuevaFila.appendChild(celda2);

  document.querySelector("#infoTable tbody").appendChild(nuevaFila);

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
});
