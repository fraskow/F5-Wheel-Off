
let start = document.getElementById("start");
let reset = document.getElementById("reset");

start.onclick=function sortearGanador() {
	let divParticipantes = document.getElementById("gamers");
	if (divParticipantes.childElementCount > 0) {
		let ganadorIndex = Math.floor(Math.random() * divParticipantes.childElementCount);
		let ganadorDiv = divParticipantes.children[ganadorIndex];
		divParticipantes.removeChild(ganadorDiv);
		document.getElementById("winners").appendChild(ganadorDiv);
		window.location.href = "winner.html"
	}else{
		window.location.href = "no-possible.html";
	}
}

reset.onclick=function reset(){
	let divParticipantes = document.getElementById("gamers");
	let divWinners = document.getElementById("winners");
	while (divParticipantes.firstChild) {
        divParticipantes.removeChild(divParticipantes.firstChild);
	}
	while(divWinners.firstChild){
		divWinners.removeChild(divWinners.firstChild);
	}

}