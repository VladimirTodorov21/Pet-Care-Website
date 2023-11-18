
function PetGiveAwayValidation(){
	var type = document.myForm.PetType.value;
	var breed = document.myForm.PetBreed.value;
	var age = document.myForm.PetAge.value;
	var gender = document.myForm.PetGender.value;
	var fullname = document.forms["myForm"]["FullName"].value;
	var email = document.forms["myForm"]["Email"].value;
	
	var str = "";
	
	if (type == "N/A"){
		str += "Invalid pet type.\n\n";
	}
	if (breed == "N/A"){
		str += "Invalid pet breed.\n\n";
	}
	if (age == "N/A"){
		str += "Invalid pet age.\n\n";
	}
	if (gender == "N/A"){
		str += "Invalid pet gender.\n\n"
	}
	if (fullname == ""){
		str += "Please insert your name.\n\n"
	}
	if (email == "" || !email.includes("@")){
		str += "Please insert a valid email.\n\n"
	}
	
	if(str !== "") {
		alert(str);
	}
	return false;
}