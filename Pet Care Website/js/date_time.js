
function displayTime() {
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	var weekday = date.toLocaleString('default',{weekday: 'long'});
	var day = date.getDate();
	var month = date.toLocaleString('default',{month: 'short'});
	var year = date.getFullYear();
	
	let SmallDay = "";
	if (day < 10) {
		SmallDay = "0";
	} else {
		SmallDay = "";
	}
	
	let SmallHours = "";
	if (hours < 10){
		SmallHours = "0";
	} else {
		SmallHours = "";
	}
	
	let SmallMinutes = "";
	if (minutes < 10) {
		SmallMinutes = "0";
	} else {
		SmallMinutes = "";
	}
	
	let SmallSeconds = "";
	if (seconds < 10){
		SmallSeconds = "0";
	} else {
		SmallSeconds = "";
	}
	
	var current_time1 = weekday + ", " + month + " " + SmallDay + day + ", " + year;	
	
	var current_time2 = SmallHours + hours + ":" + SmallMinutes + minutes + ":" + SmallSeconds + seconds;
	
	document.write(current_time1 + "<br />" + current_time2);
}