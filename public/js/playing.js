
let start = document.getElementById("start");

start.onclick=function sortearGanador() {
	let divParticipantes = document.getElementById("gamer");
	if (divParticipantes.childElementCount > 0) {
		var ganadorIndex = Math.floor(Math.random() * divParticipantes.childElementCount);
		var ganadorDiv = divParticipantes.children[ganadorIndex];
		divParticipantes.removeChild(ganadorDiv);
	}else{
		window.location.href = "no-winner.html";
	}
}