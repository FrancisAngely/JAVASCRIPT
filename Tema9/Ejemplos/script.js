const acceso = document.getElementById("acceso");

acceso.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  console.log(xhr);
  xhr.addEventListener("load", (data) => {
    const JSONinformation = JSON.parse(data.target.response);

    for (let variable of JSONinformation) {
      const photos = document.getElementById("photos");

      const elementos = document.createElement("li");

      elementos.innerHTML = `
      <br>
      <b>Album Id:</b> ${variable.albumId} <br>
      <b>Id:</b> ${variable.id}<br>
      <b>Titulo:</b> ${variable.title}<br>
      <b>URL:</b> ${variable.url}<br>
      <b>Thumbnail Url:</b> ${variable.thumbnailUrl}
        `;
      photos.appendChild(elementos);
      console.log(elementos);
    }
  });
  xhr.send();
});
