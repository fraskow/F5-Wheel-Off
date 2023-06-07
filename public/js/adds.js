
let add = document.getElementById("add-button");

add.onclick = function () {
  agregarParticipante();
};

function agregarParticipante() {
  let participante = document.getElementById("text-add").value;

  if (participante !== "") {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.setAttribute("class", "container");
    nuevoDiv.innerHTML = participante;
    document.getElementById("gamers").appendChild(nuevoDiv);
    document.getElementById("text-add").value = "";

    // Guardar la lista actualizada de participantes en el almacenamiento local
    let participantesDiv = document.getElementById("gamers");
    localStorage.setItem("participants", participantesDiv.innerHTML);
  } else {
    alert("Debes ingresar un nombre de participante");
  }
}

