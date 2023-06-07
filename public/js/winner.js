
function mostrar() {
    let ganador = localStorage.getItem("winner");
    document.getElementById("winner").innerHTML = ganador;
    localStorage.removeItem("winner");
}
mostrar();