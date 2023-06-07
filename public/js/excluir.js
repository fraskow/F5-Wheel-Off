function excluirGanador() {
  let ganador = localStorage.getItem("winner");
  let participantes = document.getElementById("gamers").children;

  for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].textContent === ganador) {
      participantes[i].remove();
      break;
    }
  }
}

let excluirButton = document.getElementById("excluir-ganador");
excluirButton.addEventListener("click", excluirGanador);
