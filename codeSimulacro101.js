let focus = 0;

let asignado = 0;

const botonAcceso = document.querySelector(".button-acceso");

botonAcceso.addEventListener("click", (e)=>{
    
    e.preventDefault();
	
	let consultado = document.getElementById("numero-de-telefono").value;

	fetch("aceptados.JSON")
    	.then(res => res.json())
    	.then(data => {
    		for(let aceptado in data.aceptados){
    			
    			if(data.aceptados[aceptado][0] == consultado){
    				focus = 100;
    				asignado = parseInt(data.aceptados[aceptado][1]);

    				fetch('aceptados.JSON',{
    					method: 'POST',
    					headers: {
    						'Content-Type': 'application/json',

    					},
    					body: JSON.stringify({
    						name: 'mario',
    						age: 28
    					})
    				})

    				document.querySelector(".contenedor-modal").setAttribute("hidden","hidden");
    				document.querySelector(".testContainer").removeAttribute("hidden");
    				document.getElementById("pruebasena").removeAttribute("hidden");
    				document.querySelector(".forCountdown").removeAttribute("hidden");

    				disparador();


    			}
		   	}

    		
    });
});

const disparador = () =>{

let justNow = new Date();

let justNowString = new String(justNow);

const toCountdown = new Date(justNowString);

const toBeFinish = ((toCountdown*2)/2) + 1502000;

const time = document.querySelector(".countdown");

const containerTime = document.querySelector(".forCountdown");

const timerUpdate = setInterval(()=>{

	let justNowFunction = new Date();

	let realTimeInMinutes = Math.ceil((toBeFinish - justNowFunction) / (1000 * 60))-1;

	let realTimeInSeconds = Math.round((toBeFinish - justNowFunction) / (1000));

	time.innerHTML = `${realTimeInMinutes} <p class="minutos">Minutos</p>`;
	
	const pruebasena = document.querySelector(".test");

	if(realTimeInMinutes > 27){
	    
	    let body = document.body;
		
		body.innerHTML = "";

 	}

	if(realTimeInMinutes < 0){
	
		todasLasPreguntas = document.querySelectorAll(".divisor-preguntas");
		
		mensajeAdvertencia = document.querySelector(".mensaje-advertencia");
		
		for(pregunta of todasLasPreguntas){
		    
		    pregunta.setAttribute("hidden","hidden");
		    
		    realTimeInMinutes = 0;
		    
		    setTimeout(()=>{
		        let body = document.body;
		        
		        body.innerHTML = "";
		        
		    },20000)
		   
		}
		
		mensajeAdvertencia.innerHTML = `Finalice su prueba para guardar todas sus respuestas<br>
		quedan 20 segundos para que la página se cierre`;
		
		mensajeAdvertencia.style.color = "red"; 

	}
	
	if(realTimeInMinutes <=5){

		containerTime.style.backgroundColor = "#d55";

		time.style.color = "#d55";
	}
	
}, 1000);

let theway = disparadorPreguntas();

let selectorContadorDePreguntas = document.querySelector(".question-number");

contadorDePreguntas = 0;

selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;


for(let i = 1; i <= 10; i++){

	addListener((i),`${i}-1`,`${i}-2`,`${i}-3`,`${i}-4`,`${i}-5`);

}

let opcionesContestadas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let backupOpciones = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const botonFinalizar = document.querySelector(".finish-test-buttom");

botonFinalizar.addEventListener("click", (e)=>{
	e.preventDefault();

	document.querySelector(".contenedor-modal").removeAttribute("hidden");
    document.querySelector(".testContainer").setAttribute("hidden","hidden");
    document.getElementById("pruebasena").setAttribute("hidden","hidden");
    document.querySelector(".forCountdown").setAttribute("hidden","hidden");
    document.getElementById("numero-de-telefono").setAttribute("hidden","hidden");
    document.querySelector(".button-acceso").setAttribute("hidden","hidden");

	let note = 0;

	let soloUnaVez = 0;

	let totalPreguntas = [];

	let resultado = 0;

	let resultadoPregunta = 0;

	for(let i = 1; i < 71 ; i++){
		if(i%6!=0){

			if(i < 60){

				if(opcionesContestadas[i] == theway[i]){

					note++;

				}
			} else if(i > 60){

				if(soloUnaVez==0){

					resultadoPregunta = note - resultado;

					totalPreguntas.push(resultadoPregunta);

					resultado = note;

					soloUnaVez++;
				}

				if(opcionesContestadas[i] == theway[i]){

					note+=5;

				}

				resultadoPregunta = note - resultado;

				totalPreguntas.push(resultadoPregunta);

				resultado = note;
			}

		} else if(i==66){

            if(opcionesContestadas[i] == theway[i]){

				note+=5;

			}

			resultadoPregunta = note - resultado;

			totalPreguntas.push(resultadoPregunta);

			resultado = note;
		
		} else if(i%6==0 && i<60){

			resultadoPregunta = note - resultado;

			totalPreguntas.push(resultadoPregunta);

			resultado = note;

		}

	}

	let conceptoFinal = "";

	if(note < 50){
		conceptoFinal="No Admitido";
	} else if(note < 56){
		conceptoFinal="En Lista de Espera";
	} else {
		conceptoFinal="Seleccionado";
	}

	let fragmento = document.createDocumentFragment();

	let textoTitulo = document.querySelector(".texto-modal");

	textoTitulo.style.width = "100%";
	
	textoTitulo.innerHTML = `Su nota general fue:<b> ${note}</b>, el concepto es: <b>${conceptoFinal}</b>`;
	
	textoTitulo.style.fontSize = "18px";

	for(let i=1; i<=20; i++){
		let notePregunta = document.createElement("DIV");
		notePregunta.innerHTML = `Pregunta ${i}:<b> ${totalPreguntas[i-1]}</b> puntos`;
		notePregunta.style.textAlign = "center";
		notePregunta.style.margin = "0px auto";
		notePregunta.style.padding = "0px auto";
		notePregunta.style.flexBasis = "33%";
		fragmento.appendChild(notePregunta);
	}

	const contenedorContenido = document.querySelector(".contenedor-contenido");

	contenedorContenido.style.flexDirection = "row";

	contenedorContenido.style.flexWrap = "wrap";

	contenedorContenido.appendChild(fragmento);	
});

function addListener (question, opc1, opc2, opc3, opc4, opc5){

	if(question < 10){

		let opcion1 = document.querySelector(`.opcion-${opc1}`);

		let opcion2 = document.querySelector(`.opcion-${opc2}`);

		let opcion3 = document.querySelector(`.opcion-${opc3}`);

		let opcion4 = document.querySelector(`.opcion-${opc4}`);

		let opcion5 = document.querySelector(`.opcion-${opc5}`);

		opcion1.addEventListener('change', function(e){

			let selectedOption1 = this.options[opcion1.selectedIndex];

			let z = opcion1.selectedIndex * 1;	

			let selectedQuestion = 10 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);
	
			let listaOpciones = document.querySelectorAll(`.option-${seleccionada[7]}`);

			let i = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;

			}

			}

					for(let k = 0; k <= 60; k++){

						if(backupOpciones[k] != opcionesContestadas[k]){

							let j = 0;

							for(opcion of listaOpciones){

								if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

								opcion.removeAttribute("hidden", "hidden");

								}
								j++;
							}}}


							backupOpciones.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

							aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

		opcion2.addEventListener('change', function(e){

			let selectedOption2 = this.options[opcion2.selectedIndex];

			let z = opcion2.selectedIndex * 1;

			let selectedQuestion = 20 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-${seleccionada[7]}`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;
	
			}

			}
			
				for(let k = 0; k <= 60; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

		opcion3.addEventListener('change', function(e){

			let selectedOption3 = this.options[opcion3.selectedIndex];

			let z = opcion3.selectedIndex * 1;
	
		let selectedQuestion = 30 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-${seleccionada[7]}`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){
	
				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;
	
			}

			}
	
		
				for(let k = 0; k <= 60; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);


		});

		opcion4.addEventListener('change', function(e){

			let selectedOption4 = this.options[opcion4.selectedIndex];
	
			let z = opcion4.selectedIndex * 1;
	
			let selectedQuestion = 40 + z;
	
			let seleccionada = e.target.getAttribute("class");
	
			let valor = e.target.value;

			opcionesContestadas.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-${seleccionada[7]}`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;

			}
	
			}


				for(let k = 0; k <= 60; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

			opcion5.addEventListener('change', function(e){

			let selectedOption5 = this.options[opcion5.selectedIndex];

			let z = opcion5.selectedIndex * 1;

			let selectedQuestion = 50 + z;
	
			let seleccionada = e.target.getAttribute("class");
	
			let valor = e.target.value;
	
			opcionesContestadas.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);
	
			let listaOpciones = document.querySelectorAll(`.option-${seleccionada[7]}`);
	
			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){
	
				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");
	
				}

				i++;

			}

			}

				for(let k = 0; k <= 60; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice(((((seleccionada[7]*1)-1)*6)+(seleccionada[9]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});



	} else if(question == 10){

		let opcion1 = document.querySelector(`.opcion-${opc1}`);

		let opcion2 = document.querySelector(`.opcion-${opc2}`);

		let opcion3 = document.querySelector(`.opcion-${opc3}`);

		let opcion4 = document.querySelector(`.opcion-${opc4}`);

		let opcion5 = document.querySelector(`.opcion-${opc5}`);

		opcion1.addEventListener('change', function(e){

			let selectedOption1 = this.options[opcion1.selectedIndex];

			let z = opcion1.selectedIndex * 1;	

			let selectedQuestion = 10 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice((9*6+(seleccionada[10]*1)),1,valor);
	
			let listaOpciones = document.querySelectorAll(`.option-10`);

			let i = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;

			}

			}

					for(let k = 0; k <= 70; k++){

						if(backupOpciones[k] != opcionesContestadas[k]){

							let j = 0;

							for(opcion of listaOpciones){

								if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

								opcion.removeAttribute("hidden", "hidden");

								}
								j++;
							}}}


							backupOpciones.splice((9*6+(seleccionada[10]*1)),1,valor);

							aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

		opcion2.addEventListener('change', function(e){

			let selectedOption2 = this.options[opcion2.selectedIndex];

			let z = opcion2.selectedIndex * 1;

			let selectedQuestion = 20 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice((9*6+(seleccionada[10]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-10`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;
	
			}

			}
			
				for(let k = 0; k <= 70; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice((9*6+(seleccionada[10]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

		opcion3.addEventListener('change', function(e){

			let selectedOption3 = this.options[opcion3.selectedIndex];

			let z = opcion3.selectedIndex * 1;
	
		let selectedQuestion = 30 + z;

			let seleccionada = e.target.getAttribute("class");

			let valor = e.target.value;

			opcionesContestadas.splice((9*6+(seleccionada[10]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-10`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){
	
				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;
	
			}

			}
	
		
				for(let k = 0; k <= 70; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice((9*6+(seleccionada[10]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);


		});

		opcion4.addEventListener('change', function(e){

			let selectedOption4 = this.options[opcion4.selectedIndex];
	
			let z = opcion4.selectedIndex * 1;
	
			let selectedQuestion = 40 + z;
	
			let seleccionada = e.target.getAttribute("class");
	
			let valor = e.target.value;

			opcionesContestadas.splice((9*6+(seleccionada[10]*1)),1,valor);

			let listaOpciones = document.querySelectorAll(`.option-10`);

			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){

				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");

				}

				i++;

			}
	
			}


				for(let k = 0; k <= 70; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice((9*6+(seleccionada[10]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

			opcion5.addEventListener('change', function(e){

			let selectedOption5 = this.options[opcion5.selectedIndex];

			let z = opcion5.selectedIndex * 1;

			let selectedQuestion = 50 + z;
	
			let seleccionada = e.target.getAttribute("class");
	
			let valor = e.target.value;
	
			opcionesContestadas.splice((9*6+(seleccionada[10]*1)),1,valor);
	
			let listaOpciones = document.querySelectorAll(`.option-10`);
	
			let i = 0;

			let contador = 0;

			if(z!=0){

				for(opcion of listaOpciones){
	
				if(i == z || i == (z+6) || i == (z+12) || i == (z+18) || i == (z+24)){

					opcion.setAttribute("hidden","hidden");
	
				}

				i++;

			}

			}

				for(let k = 0; k <= 70; k++){

					if(backupOpciones[k] != opcionesContestadas[k]){

						let j = 0;

						for(opcion of listaOpciones){

							if((j == backupOpciones[k] || j == (backupOpciones[k]*1+6) || j == (backupOpciones[k]*1+12) || j == (backupOpciones[k]*1+18) || j == (backupOpciones[k]*1+24))){

							opcion.removeAttribute("hidden", "hidden");



							}
							j++;
						}}}


						backupOpciones.splice((9*6+(seleccionada[10]*1)),1,valor);

						aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas);

		});

	}

}

function aumentoContador(selectorContadorDePreguntas, contadorDePreguntas, opcionesContestadas){

	if(opcionesContestadas[1]!=0 && opcionesContestadas[2]!=0 && opcionesContestadas[3]!=0 && opcionesContestadas[4]!=0 && opcionesContestadas[5]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[7]!=0 && opcionesContestadas[8]!=0 && opcionesContestadas[9]!=0 && opcionesContestadas[10]!=0 && opcionesContestadas[11]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[13]!=0 && opcionesContestadas[14]!=0 && opcionesContestadas[15]!=0 && opcionesContestadas[16]!=0 && opcionesContestadas[17]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[19]!=0 && opcionesContestadas[20]!=0 && opcionesContestadas[21]!=0 && opcionesContestadas[22]!=0 && opcionesContestadas[23]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[25]!=0 && opcionesContestadas[26]!=0 && opcionesContestadas[27]!=0 && opcionesContestadas[28]!=0 && opcionesContestadas[29]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[31]!=0 && opcionesContestadas[32]!=0 && opcionesContestadas[33]!=0 && opcionesContestadas[34]!=0 && opcionesContestadas[35]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[37]!=0 && opcionesContestadas[38]!=0 && opcionesContestadas[39]!=0 && opcionesContestadas[40]!=0 && opcionesContestadas[41]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[43]!=0 && opcionesContestadas[44]!=0 && opcionesContestadas[45]!=0 && opcionesContestadas[46]!=0 && opcionesContestadas[47]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[49]!=0 && opcionesContestadas[50]!=0 && opcionesContestadas[51]!=0 && opcionesContestadas[52]!=0 && opcionesContestadas[53]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	if(opcionesContestadas[55]!=0 && opcionesContestadas[56]!=0 && opcionesContestadas[57]!=0 && opcionesContestadas[58]!=0 && opcionesContestadas[59]!=0){

	contadorDePreguntas++;

	selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

	}

	let secureArray = [0,0,0,0,0,0,0,0,0,0]

	for(let i = 11; i <= 20; i++){

		let prueba = document.querySelectorAll(`.radio-${i}`);

		let iniciar = 0;

		for(let j = 0; j <= 4; j++){

			prueba[j].addEventListener("change", function(){

				if(prueba[j].checked){

					if(secureArray[i-11] == 0){

						secureArray.splice(i-11,1,1);

						contadorDePreguntas++;

						selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

					}

				}
			
			});

	}}

}

let secureArray = [0,0,0,0,0,0,0,0,0,0]

for(let i = 11; i <= 20; i++){

	let prueba = document.querySelectorAll(`.radio-${i}`);

	let iniciar = 0;

	for(let j = 0; j <= 4; j++){

		prueba[j].addEventListener("change", function(e){

			let obtencionPregunta = e.target.name;

			let preguntaObtenida = obtencionPregunta[6] + obtencionPregunta[7];

			let ubicacion = (preguntaObtenida*1)+50;

			opcionesContestadas.splice(ubicacion,1,e.target.value);

			if(prueba[j].checked){

				if(secureArray[i-11] == 0){

					secureArray.splice(i-11,1,1);

					contadorDePreguntas++;

					selectorContadorDePreguntas.innerHTML = `${contadorDePreguntas} / 20`;

				}

			}
			
		});

}}

}



