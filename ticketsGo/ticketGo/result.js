function result(){
	var form = document.forms[0];
	var output = "According to the test result, these cities are better choices:\n";
	
	var radios1 = document.getElementsByName('season');
	for (var i = 0, length = radios1.length;i<length;i++){
		if (radios1[i].checked){
			var season=radios1[i].value;
			break;
		}
	}
	
	var radios2 = document.getElementsByName('flavour');
	for (var i = 0, length = radios2.length;i<length;i++){
		if (radios2[i].checked){
			var flavour=radios2[i].value;
			break;
		}
	}
	
	var radios3 = document.getElementsByName('MoH');
	for (var i = 0, length = radios3.length;i<length;i++){
		if (radios3[i].checked){
			var MoH=radios3[i].value;
			break;
		}
	}
	
	var radios4 = document.getElementsByName('HoS');
	for (var i = 0, length = radios4.length;i<length;i++){
		if (radios4[i].checked){
			var HoS=radios4[i].value;
			break;
		}
	}
	
	var radios5 = document.getElementsByName('LoR');
	for (var i = 0, length = radios5.length;i<length;i++){
		if (radios5[i].checked){
			var LoR=radios5[i].value;
			break;
		}
	}
	
	var city = [season,flavour,MoH,HoS,LoR];
	var Shanghai = new Array("Summer","Winter","seafood","sweet","Modern","History","Humanity","learn","relax");
	var Beijing = new Array("Summer","Winter","special","spicy","Modern","History","Humanity","learn","relax");
	var Chengdu = new Array("Summer","spicy","Modern","History","Humanity","Scene","learn","relax");
	var Guilin = new Array("Summer", "spicy","History","Scene","relax");
	var Hainan = new Array("Winter","seafood","Modern","History","Scene","relax");
	var Hangzhou = new Array("Summer","Winter","special","sweet","Modern","History","Humanity","Scene","learn","relax");
	var Guangzhou = new Array("Winter","special","seafood","Modern","Humanity","learn","relax");
	var Xinjiang = new Array("Summer","special","Modern","History","Humanity","Scene","learn","relax");
	var Xizang = new Array("Winter","special","Modern","History","Humanity","Scene","learn","relax");
	var Xian = new Array("Summer","Winter","special","spicy","Modern","History","Humanity","Scene","relax","learn");
	
	function isContained(a,b){
		var aStr = a.toString();
		for (var i = 0 ;i < b.length;i++) {
			if(aStr.indexOf(b[i]) < 0) {
				return false;
			}
		}
		return true;
	}
	
	if(isContained(Shanghai,city)==true){
		output = output + "Shanghai\n";
	}
	
	if(isContained(Beijing,city)==true){
		output = output + "Beijing\n";
	}
	
	if(isContained(Chengdu,city)==true){
		output = output + "Chengdu\n";
	}
	
	if(isContained(Guilin,city)==true){
		output = output + "Guilin\n";
	}
	
	if(isContained(Hainan,city)==true){
		output = output + "Hainan\n";
	}
	
	if(isContained(Hangzhou,city)==true){
		output = output + "Hangzhou\n";
	}
	
	if(isContained(Guangzhou,city)==true){
		output = output + "Guangzhou\n";
	}
	
	if(isContained(Xinjiang,city)==true){
		output = output + "Xinjiang\n";
	}
	
	if(isContained(Xizang,city)==true){
		output = output + "Xizang\n";
	}
	
	if(isContained(Xian,city)==true){
		output = output + "Xian\n";
	};
	sessionStorage.setItem("rec",output);
	window.alert(output);
}

function rec(){
	if(sessionStorage.getItem("rec")==null){
		sessionStorage.setItem("rec","GO");
	}
	document.getElementById("message").innerHTML = sessionStorage.getItem("rec");
	sessionStorage.clean();
}




