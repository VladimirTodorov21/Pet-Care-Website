
function FindPetValidation() {
	var type = document.myForm.PetType.value;
	var breed = document.myForm.PetBreed.value;
	var age = document.myForm.PetAge.value;
	var gender = document.myForm.PetGender.value;
	
	var str = "";
	
	if (type == "N/A"){
		str += "Invalid pet type.\n";
	}
	if (breed == "N/A"){
		str += "Invalid pet breed.\n";
	}
	if (age == "N/A"){
		str += "Invalid pet age.\n";
	}
	if (gender == "N/A"){
		str += "Invalid pet gender.\n"
	}
	
	if(str !== "") {
		alert(str + "Please insert valid options.");
	}
	return false;
}