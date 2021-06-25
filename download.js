let formularioTest = document.querySelector(".test");

formularioTest.addEventListener("submit", function(){

    let solucion = "CQ101 ";

	let i = 0;

	for(opcion of opcionesContestadas){

		if(i%6!=0 && i!=0){

			solucion += opcion + "\n";


		} else if(i==66){

            solucion += opcion + "\n";
			
		}

		i++;
		
	}
	
	document.getElementById("caja_valor").value = solucion;

	window.open("https://simulacrosenafase1.000webhostapp.com/index.html");
	
});