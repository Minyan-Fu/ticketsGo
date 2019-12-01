function validation(){
var form = document.forms[0];
var error = "";

if(form.passager.value == ""){
	error = error + "Name is empty\n";
}

if (form.departure.value == ""){
	error = error + "Depature city is empty\n";
}

var first = form.date1.value;
var second = form.date2.value;
if(second<=first){
	error = error + "the ending date should later than the beginning date\n";
}

if(error != ""){
	var errorText = "There are errors:\n";
	errorText = errorText + error;
	window.alert(errorText);
	return false;
}
	var isrc='';
	var form = document.forms[0];
	var departure=form.departure.value;
	var radios = document.getElementsByName('city');
	for (var i = 0, length = radios.length;i<length;i++){
		if (radios[i].checked){
			var terminal=radios[i].value;
			var isrc=terminal+".jpg";
			break;
		}
	}
	var passager=form.passager.value;
	var depDate=form.date1.value;
	var bacDate=form.date2.value;
	sessionStorage.setItem("departure",departure);
	sessionStorage.setItem("terminal",terminal);
	sessionStorage.setItem("passager",passager);
	sessionStorage.setItem("depDate",depDate);
	sessionStorage.setItem("bacDate",bacDate);
	sessionStorage.setItem("isrc",isrc);

	return true;
}

function printout2(){
	var tDate = new Date();
	document.getElementById("time").innerHTML = tDate.toLocaleString();
	document.getElementById("passager").innerHTML = sessionStorage.getItem("passager");
	document.getElementById("departure").innerHTML = sessionStorage.getItem("departure");
	document.getElementById("terminal").innerHTML = sessionStorage.getItem("terminal");
	document.getElementById("depDate").innerHTML = sessionStorage.getItem("depDate");
	document.getElementById("bacDate").innerHTML = sessionStorage.getItem("bacDate");
	document.getElementById("picture").src = sessionStorage.getItem("isrc"); 
	sessionStorage.clean();
}
