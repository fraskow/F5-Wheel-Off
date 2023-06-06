
let add = document.getElementById("add-button");

add.onclick = function agregarParticipante() {

	let participante = document.getElementById("text-add").value;
	let nuevoDiv = document.createElement("div");
	nuevoDiv.setAttribute('id', 'gamer');
	nuevoDiv.setAttribute('class', 'container')
	nuevoDiv.innerHTML = participante;
	document.getElementById("gamers").appendChild(nuevoDiv);
	document.getElementById("text-add").value = "";
}
