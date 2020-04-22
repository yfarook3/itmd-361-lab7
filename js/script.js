function init(){

	document.getElementById("entrybutton").addEventListener("click", myAlert);
	
	fucntion myAlert(){
				var input = document.getElementById("entryinput").value
				alert("Yaqub Farook: " + input); 
	
	
	}
	
};
 
	






window.addEventListener('load', init);