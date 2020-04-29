

function init(){

	document.getElementById("entrybutton").addEventListener("click", myAlert);
	
	function myAlert(){
				var input = document.getElementById("entryinput").value
				document.getElementById("textoutput")["innerHTML"]=input;
				alert("Yaqub Farook: " + input); 
	
	
	}
	
};
 
	






window.addEventListener('load', init);