function beregn_bmi() {
	var vaegt = document.getElementById("vaegt").value;
	var hoejde = document.getElementById("hoejde").value;
	var fejl = "Der har opstået en fejl";
	var vaegtklasse = "";

	var alder = document.getElementById("alder").value;

	if(alder < 18){
		document.getElementById("resultat").value = fejl; 
	}else{
		var bmi = vaegt / (hoejde * hoejde);
		document.getElementById("resultat").value = bmi.toFixed(2);
			if(bmi < 18.5){
				vaegtklasse = "Du er undervaegtig";
			}else if(bmi >= 18.5 && bmi < 25){
				vaegtklasse = "Du er normalvaegtig";
			}else if(bmi >= 25 && bmi < 30){
				vaegtklasse = "Du er overvaegtig";
			}else if(bmi >= 30 && bmi < 35){
				vaegtklasse = "Du er i fedmeklasse I";
			}else if(bmi >= 35 && bmi < 40){
				vaegtklasse = "Du er i fedmeklasse II";
			}else if(bmi >= 40){
				vaegtklasse = "Du er i fedmeklasse III";
			}
			document.getElementById("vaegtklasse").value = vaegtklasse;
	}


}

// Hovedprogramdel


document.getElementById("beregn").addEventListener("click", beregn_bmi);