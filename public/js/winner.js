function mostrar() {
    let ganador = localStorage.getItem("winner");
    let participantesAnteriores = localStorage.getItem("participants");
  
    document.getElementById("winner").innerHTML = ganador;
  
    if (participantesAnteriores) {
      localStorage.setItem("participants", participantesAnteriores);
    }
    
    localStorage.removeItem("winner");
  }
  
  mostrar();
  