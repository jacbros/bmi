function identificerInsekt() {
	var antalBen = parseInt(document.getElementById("ben").value);
	var vinger = document.getElementById("vinger").value;
	var vingetypefelt = document.getElementById("vingetypefelt");
	var insekt = "";

	if(antalBen === 6){
		if(vinger === "ja"){
			if(vingetypefelt === "glasklare") {
				insekt = "Honningbi";
			}else{
				insekt = "Sommerfugl";
			}
		}else{
			insekt = "Rød skovmyre";
		}
	}else{
		insekt = "Det er ikke et insekt";
	}

	document.getElementById("resultat").value = insekt;
}

function skiftVingefelt() {
	var vinger = document.getElementById("vinger").value;

	if(vinger === "ja") {
		document.getElementById("vingetype").style.display="block";
	}else{
		document.getElementById("vingetype").style.display="none";
	}

}

// Hovedprogramdel

document.getElementById("vinger").addEventListener("change", skiftVingefelt);
document.getElementById("identificer").addEventListener("click", identificerInsekt);
