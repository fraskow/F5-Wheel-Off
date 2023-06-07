function mostrar() {
    let ganador = localStorage.getItem("winner");
    let participantesAnteriores = localStorage.getItem("participants");
  
    if (ganador) {
      document.getElementById("winner").innerHTML = ganador;
      localStorage.removeItem("winner");
    }
  
    if (participantesAnteriores) {
      let participantesDiv = document.getElementById("gamers");
      participantesDiv.innerHTML = participantesAnteriores;
    }
  }
  
  mostrar();