function eliminarParticipante(event) {
  let participante = event.target.parentNode;

  participante.remove();
}

function agregarParticipante() {
  let participanteInput = document.getElementById("text-add");
  let participanteNombre = participanteInput.value.trim();

  if (participanteNombre !== "") {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "container";

    let closeIcon = document.createElement("span");
    closeIcon.className = "close-icon";
    closeIcon.innerHTML = "x";

    closeIcon.addEventListener("click", eliminarParticipante);

    nuevoDiv.textContent = participanteNombre;
    nuevoDiv.insertBefore(closeIcon, nuevoDiv.firstChild);

    let divParticipantes = document.getElementById("gamers");
    divParticipantes.appendChild(nuevoDiv);

    participanteInput.value = "";
  } else {
    alert("Debes ingresar un nombre de participante");
  }
}

let participantes = document.querySelectorAll("#gamers > .container");

participantes.forEach(function (participante) {
  let closeIcon = document.createElement("span");
  closeIcon.className = "close-icon";
  closeIcon.innerHTML = "x";

  closeIcon.addEventListener("click", eliminarParticipante);

  participante.insertBefore(closeIcon, participante.firstChild);
});
