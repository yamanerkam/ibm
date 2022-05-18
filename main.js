var weight=document.forms["formm"]["a"];
var height=document.forms["formm"]["b"];
var measure = document.getElementById("results");
var error="error";


function calculate(){
    var w =parseInt(weight.value);
    var h =parseInt(height.value);
    h/=100;

    var bmi=(w/(h*h)).toFixed(1);
    

    if (bmi <= 18.4) {
		measure.innerText = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure.innerText = "Your BMI is " + bmi + " which means " + "You are Normal";

	} else if (bmi >= 25 && bmi <= 29.9) {
		measure.innerText = "Your BMI is " + bmi + " which means " + "You are Overweight";

	} else if (bmi >= 30) {
		measure.innerText = "Your BMI is " + bmi + " which means " + "You are Obese";

	}


    if (w === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (h === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure.innerText;
	}
	if (w < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
    
}