function beregn_kalorier() {
	var vaegt = document.getElementById("vaegt").value;
	var distance = document.getElementById("distance").value;
	var fejl = "Der har opstået en fejl";

	var forbraending = distance * (vaegt * 0.476);

	document.getElementById("resultat").value = forbraending.toFixed(2);


}

// Hovedprogramdel


document.getElementById("beregn").addEventListener("click", beregn_kalorier);