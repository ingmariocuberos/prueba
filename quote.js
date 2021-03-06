const disparadorPreguntas = () =>{

function questionFirstPartCreator (index, question, answer1, answer2, answer3, answer4, answer5) {

	let fullQuestion = [`<div class="divisor-preguntas"><br><h3>${index} de 20</h3>`,`<br><p>${question}</p>`, `<br><div class="divTextoOpcion1">
		<div class="answer-first-part"><p class="textoOpcion">${answer1}</p></div><br>
		<div class="options-first-part"><select class="opcion-${index}-1 posibility-option" name="opcion-${index}-1"></div>
		<option class="option-${index}" selected value="0"> Seleccionar </option>
   		<option class="option-${index}" value="1">1</option>
   		<option class="option-${index}" value="2">2</option> 
   		<option class="option-${index}" value="3">3</option>
   		<option class="option-${index}" value="4">4</option> 
   		<option class="option-${index}" value="5">5</option> 
	</select></div></div>`,`<div class="divTextoOpcion1">
		<div class="answer-first-part"><p class="textoOpcion">${answer2}</p></div><br>
		<div class="options-first-part"><select class="opcion-${index}-2 posibility-option" name="opcion-${index}-2">
		<option class="option-${index}" selected value="0"> Seleccionar </option>
   		<option class="option-${index}" value="1">1</option> 
   		<option class="option-${index}" value="2">2</option> 
   		<option class="option-${index}" value="3">3</option>
   		<option class="option-${index}" value="4">4</option> 
   		<option class="option-${index}" value="5">5</option> 
	</select></div></div>`,`<div class="divTextoOpcion1">
		<div class="answer-first-part"><p class="textoOpcion">${answer3}</p></div><br>
		<div class="options-first-part"><select class="opcion-${index}-3 posibility-option" name="opcion-${index}-3">
		<option class="option-${index}" selected value="0"> Seleccionar </option>
   		<option class="option-${index}" value="1">1</option> 
   		<option class="option-${index}" value="2">2</option> 
   		<option class="option-${index}" value="3">3</option>
   		<option class="option-${index}" value="4">4</option> 
   		<option class="option-${index}" value="5">5</option> 
	</select></div></div>`, `<div class="divTextoOpcion1">
		<div class="answer-first-part"><p class="textoOpcion">${answer4}</p></div><br>
		<div class="options-first-part"><select class="opcion-${index}-4 posibility-option" name="opcion-${index}-4">
		<option class="option-${index}" selected value="0"> Seleccionar </option>
   		<option class="option-${index}" value="1">1</option> 
   		<option class="option-${index}" value="2">2</option> 
   		<option class="option-${index}" value="3">3</option>
   		<option class="option-${index}" value="4">4</option> 
   		<option class="option-${index}" value="5">5</option> 
	</select></div></div>`, `<div class="divTextoOpcion1">
		<div class="answer-first-part"><p class="textoOpcion">${answer5}</p></div><br>
		<div class="options-first-part"><select class="opcion-${index}-5 posibility-option" name="opcion-${index}-5">
		<option class="option-${index}" selected value="0"> Seleccionar </option>
   		<option class="option-${index}" value="1">1</option> 
   		<option class="option-${index}" value="2">2</option> 
   		<option class="option-${index}" value="3">3</option>
   		<option class="option-${index}" value="4">4</option> 
   		<option class="option-${index}" value="5">5</option> 
	</select></div></div>`];

	return fullQuestion;

}

function questionSecondPartCreator (index, question, answer1, answer2, answer3, answer4, answer5) {

	let fullQuestion = [`<div class="divisor-preguntas pregunta${index}"><h3>${index} de 20</h3>`,`<br><p>${question}</p>`, `<br><div class="divTextoOpcion"><br>
		<input type="radio" id="radio-${index}-1" name="radio-${index}" class="radio-${index} radio-${index}-1" value="1">${answer1}</p><br>`,
		`<input type="radio" id="radio-${index}-2" name="radio-${index}" class="radio-${index} radio-${index}-2" value="2">${answer2}</p><br>`,
		`<input type="radio" id="radio-${index}-3" name="radio-${index}" class="radio-${index} radio-${index}-3" value="3">${answer3}</p><br>`,
		`<input type="radio" id="radio-${index}-4" name="radio-${index}" class="radio-${index} radio-${index}-4" value="4">${answer4}</p><br>`,
		`<input type="radio" id="radio-${index}-5" name="radio-${index}" class="radio-${index} radio-${index}-5" value="5">${answer5}</p><br></div></div>
	
		`];

	return fullQuestion;

}

const test = document.querySelector(".test");

const fragmento = document.createDocumentFragment();

let questions = [];

if(asignado == 1){

	questions = [["El ejercicio de deporte y sus manifestaciones tienen como funci??n:",
"Formar de manera integral a las personas",
"Preservar y desarrollar una mejor salud",
"Desarrollar sus potenciales f??sicos",
"Aprovechar el tiempo libre",
"Invertir en el desarrollo mental de las personas"],

["En su opini??n, un verdadero l??der es aquel que es capaz de:",
"Impulsar al equipo a utilizar sus habilidades y cumplir un prop??sito",
"Influir de cualquier modo sobre los dem??s, para que se haga lo que ??l quiere",
"Conocer las debilidades de su equipo y hacer ??nfasis para que las superen",
"Tomar las decisiones por el equipo, pues finalmente, es el l??der",
"Asumir toda la responsabilidad en los momentos cr??ticos"],

["Durante su receso escolar, es contratado como recreador en un campamento vacacional. Usted se da cuenta de que uno de los j??venes, Pedro, no quiere participar en actividades que requieran esfuerzo. Se queja de calambres estomacales justo antes de los eventos atl??ticos. Al observarlo atentamente, se da cuenta de que Pedro es tan torpe cuando juega que sus compa??eros se burlan de ??l mientras que otros lo evitan. Usted decide:",
"ignorar el hecho. Puede dar m??s disgustos que beneficios.",
"Involucrarlo d??ndole tareas como llevar la puntuaci??n en juegos.",
"Evaluar con ??l la situaci??n para establecer un plan de mejora",
"Sugerirle que lea libros sobre juegos y reglas para aprender",
"obligarlo a que participe, ya que ??l debe aprender como jugar"],

["Los factores que intervienen en una comunicaci??n eficiente son:",
"Falta de inter??s en el tema",
"La estructura l??gica de la secuencia del hablante",
"Los est??mulos del ambiente",
"La atenci??n humana",
"Los ??rganos sensoriales del hombre"],

["Un joven quiere ser voluntario en una c??rcel del pa??s, y as?? ayudar con la rehabilitaci??n de los prisioneros. El joven ser?? un buen candidato si",
"NO tiene miedo de una prisi??n",
"viene de un hogar moralista",
"se rehabilita paralelamente",
"ayuda sin intereses",
"NO tiene prejuicios"],

["Regularmente usted prefiere asistir a reuniones donde:",
"El plan de trabajo est?? definido previamente",
"Se conoce el orden del d??a",
"Todos aportan y buscan soluciones",
"Los integrantes tienen compromisos concretos",
"Se conocen los resultados que se esperan"],

["Para aumentar las ventas en una empresa, se debe trabajar sobre aspectos como:",
"La atenci??n al cliente",
"La publicidad de los productos",
"La repotenciaci??n de maquinaria",
"La automatizaci??n de procesos",
"El acceso por p??gina web"],

["En orden de importancia tienen derecho a protecci??n los ni??os que son:",
"Utilizados por grupos armados",
"Explotados sexualmente",
"Explotados econ??micamente por sus padres",
"Abandonados f??sica, social y emocionalmente",
"Expuestos a sustancias psicoactivas"],

["Son deberes de todo ciudadano:",
"Respetar los derechos ajenos y no abusar de los propios",
"Respetar a las autoridades",
"Proteger los recursos naturales",
"Obrar seg??n el principio de solidaridad",
"Propender por la paz"],

["Se presenta una dificultad en su empresa y es necesario que uno de los integrantes de su equipo ayude en la soluci??n, es d??a viernes y todos han trabajado las mismas horas, usted cree que debe quedarse",
"El que m??s sabe del ??rea",
"ninguno ya que todos cumplieron con la jornada",
"todos ya que podr??an terminar m??s r??pido",
"usted por ser el l??der del equipo",
"Entre todos deciden quien se queda"],
];

} else if(asignado == 2){
	questions = [["Un le??n africano tiene como habitat la selva y como nicho un ecosistema de sabanas y pastizales secos, es carn??voro, vive en manadas o s??lo y defiende su territorio. Por lo tanto, un ecosistema o nicho se define como el/la",
"casa donde se encuentran muchos microorganismos",
"lugar donde m??s le gusta estar a un microorganismo",
"papel que desempe??a un organismo en un ??mbito.",
"espacio donde come y vive un organismo",
"funci??n de las plantas para producir alimentos"],

["Liliana tiene sobrepeso; su doctor le ha recomendado hacer dieta para evitar otros problemas de salud, pero ella insiste en comer dulces, postres y golosinas. Liliana deber??a",
"Evitar caminar cerca de las pasteler??as o ir al supermercado",
"pedir al m??dico alg??n medicamento que inhiba su apetito",
"intentar llevar dietas menos estrictas, aunque menos efectivas",
"ignorar las recomendaciones m??dicas, es imposible seguirlas",
"reconocer su debilidad y pedirle ayuda a un experto en ese caso"],

["La contaminaci??n ambiental en el planeta cada d??a se torna m??s preocupante porque afecta entre otras cosas, la biodiversidad de las especies. Esta situaci??n es responsabilidad de:",
"Los seres humanos en general, porque a partir de acciones protectoras individuales, generan cambio",
"Las autoridades competentes, pues deben velar por la prevenci??n de la contaminaci??n en el planeta",
"Las organizaciones mundiales ambientales porque su finalidad es defender los ecosistemas.",
"Los profesores de la ense??anza b??sica porque desde la infancia hay que promover el cuidado del ambiente",
"El gobierno porque deben administrar ??ptimamente los recursos para proteger el ambiente"],

["Si un compa??ero le dice que vote por un amigo que quiere ser monitor, usted",
"Compara propuestas y toma su propia decisi??n",
"Acepta las sugerencias de su amigo porque lo aprecia",
"Responde que votar?? por el que le convence.",
"Sustenta con evidencias",
"Escucha sus comentarios pero no hace nada al respecto"],

["Cuando usted se encuentra inconforme con el resultado de un examen prefiere:",
"Pierde el examen sin decir nada",
"Esperar el momento para conversar con el profesor",
"Buscar apoyo en sus compa??eros y reclamar abiertamente",
"Acudir al director del colegio y buscar una soluci??n",
"Comparar los resultados con los de sus compa??eros y manifestar la inconsistencia"],

["Cuando se adquiere la responsabilidad de tramitar solicitudes ante las directivas de cualquier establecimiento, la forma correcta de hacerlo es",
"enviarlas por correo directo a las cabezas visibles",
"entregar las cartas a la mayor cantidad de gente",
"pedirle a alguien que sepa redactar que lo haga",
"usar las tecnolog??as disponibles para esta tarea",
"entregar la informaci??n a las personas indicadas"],

["La entidad en la que usted se encuentra les informa que hay un virus que se est?? expandiendo por sus computadores, usted decide",
"no volver a encender su computador y trabajar desde la casa",
"confiar en que las vacunas van a prevenir que su equipo se infecte",
"tener en cuenta las medidas de seguridad, como no abrir correos extra??os",
"evitar que alg??n compa??ero o extra??o use esos computadores",
"no preocuparse porque para eso lo equipos tienen antivirus"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Dise??ar programaci??n de metas por ??rea",
"Delimitar proyectos por departamentos",
"Indagar la satisfacci??n de los empleados",
"Evaluar la calidad del producto",
"Evaluar la calidad del recurso suministrado"],

["El orden para preparar una exposici??n es:",
"Leer y comprender la totalidad del tema",
"Planear un cronograma de entrega",
"Definir los componentes m??s importantes del tema",
"Investigar en diferentes fuentes de informaci??n el tema",
"Dividir el tema de trabajo entre el grupo"],

["Un estudiante responsable es aquel que atiende en primer lugar",
"Los trabajos y tareas del d??a siguiente",
"La entrega de trabajos seg??n sea el nivel de exigencia del profesor",
"La planeaci??n de actividades desarrolladas con antelaci??n",
"Los compromisos y acuerdos asumidos previamente",
"Las responsabilidades acad??micas urgentes que no dan espera."],
];
} else if(asignado == 3){
	questions = [["Las juntas de acci??n comunal que se organizan en el Barrio tiene como objetivo solucionar las necesidades m??s sentidas, aprovechando los recursos disponibles para lograr el bienestar general de su comunidad, por lo anterior, usted considera que un miembro de esta junta debe caracterizarse principalmente por:",
"Saber escuchar las ideas de los dem??s",
"Conseguir recursos que beneficien a la comunidad",
"Establecer planes de trabajo para cumplir las metas",
"Manejar bien la informaci??n que recibe",
"Crear constantemente propuestas de mejora"],

["Usualmente se piensa que un equipo de alto rendimiento se caracteriza por:",
"Contar con las herramientas propicias de automatizaci??n de los miembros",
"Reconocer los obst??culos en los canales de comunicaci??n dentro del equipo",
"Tener objetivos comunes y bien estructurados",
"Trabajar de forma colaborativa y sincr??nicamente",
"Compensar y equilibrar los puntos d??biles de cada integrante"],

["Marcos ha recibido tres propuestas laborales: A. Un trabajo bien remunerado ubicado en una zona con serios problemas de orden p??blico; B. En su ciudad, con transporte y almuerzo a bajo costo; y C. Buena remuneraci??n con retos interesantes, pero la empresa est?? a una hora se su ciudad. Para tomar la decisi??n Marcos debe",
"Elegir la de mayor remuneraci??n, el dinero es lo m??s importante, sobre todo ahora que est?? empezando.",
"lanzar el tarot como le propone su t??a Julia y a partir de all??, tomar la mejor decisi??n, la que ofrezcan las cartas",
"escoger la empresa que m??s cerca queda de su casa, la comodidad y la calidad de vida son lo primero",
"establecer un argumento para cada opci??n y definir la m??s oportuna actuando decididamente.",
"consultar con sus padres, ellos sabr??n decirle qu?? hacer, tienen m??s experiencia, ??l es todav??a muy joven"],

["Se dice que las primeras c??lulas simples se desarrollaron en sitios de actividad volc??nica con unas caracter??sticas como la temperatura extrema, llam??ndose microorganismos term??filos. De lo anterior se concluye que estos crecen a una temperatura en grados cent??grados de",
"45??C",
"30??C",
"15??C",
"20??C",
"5??C"],

["Su equipo preferido juega contra el rival de turno y al finalizar el primer tiempo va perdiendo. Si Usted pudiera hacer sugerencias propone que se",
"Reorientare las acciones para atacar al equipo rival",
"Hacer cambios estrat??gicos en la formaci??n del equipo",
"Analizar las debilidades del otro equipo para mejorar el ataque",
"Reorganizar a los jugadores que tiene en la cancha",
"Presionar a los jugadores psicol??gicamente para que mejoren"],

["Sale de vacaciones con su familia y llevan dos veh??culos, uno de los carros sufre un da??o en el motor irreparable, la ciudad m??s cercana est?? a 4 horas; son las 7 p.m. y en el lugar no se tiene se??al telef??nica, el sitio es inh??spito. Lo mejor que se puede hacer ser??a:",
"Que todos se queden disfrutando el lugar, hasta el otro d??a",
"Salir y buscar el mec??nico que est?? a 4 horas del lugar",
"Que todos intenten caber en un solo veh??culo",
"Quedarse en el lugar hasta el d??a siguiente",
"El carro que funcione viaje a buscar ayuda, y regrese por los dem??s"],

["Los Wayuu, etnia propia de la Guajira, son una poblaci??n que se caracteriza por la yonna, vestuario colorido, artesan??as, lengua, etc., sin embargo, esto est?? siendo modificado por la influencia de la gente de las ciudades. Ante esta situaci??n, y para evitar la aculturaci??n de los Wayuu, usted considera que es necesario que el gobierno implemente",
"planes a trav??s de los cuales se desarrollen talleres de arte",
"programas que impiden la producci??n de mercanc??as",
"programas que contengan eventos culturales propios",
"programas que motiven la conservaci??n de sus costumbres",
"planes que fortalezcan el uso de la lengua Wayuunaki"],

["Al salir a la vida productiva, un estudiante tiene dos alternativas: buscar un trabajo que le brinde estabilidad laboral y econ??mica o empezar a generar un proyecto que le permita crear empresa. Existen organizaciones que desarrollan las ideas de negocios con pr??stamos condonables, con el prop??sito de que usted",
"genere empleo para contribuir con el desarrollo del pa??s",
"genere riqueza, para disfrutarla con la familia",
"busque un motivo para mantenerse ocupado",
"compita con las empresas que presten el mismo servicio",
"logre un paso necesario para progresar y ser aut??nomo"],

["Marcos sabe que para lograr los objetivos programados en su equipo de trabajo, debe comunicarse eficazmente y llegar a acuerdos con los integrantes, esto implicar?? que:",
"El n??mero de integrantes participen en su totalidad",
"Confianza y respeto entre los integrantes del equipo",
"Promoci??n de comunicaci??n clara evitando rumores",
"Las discusiones sean abiertas e interactivas para todos",
"Cada miembro entienda los roles de los dem??s"],

["Para crear un ambiente agradable y arm??nico para todos y cada uno de los habitantes de la Unidad Residencial considera importante:",
"Convocar a reuniones sociales",
"Reglamentar el ingreso de mascotas",
"Registrar el acceso de visitantes",
"Controlar la bit??cora del sistema de seguridad",
"Prohibir que hablen en voz alta"],

];

} else if(asignado == 4){
	questions = [[`"La queja es una declaraci??n relativa a las expectativas que no han sido satisfechas, pero adem??s, es una oportunidad para que una organizaci??n pueda satisfacer a un cliente insatisfecho, bien para mejorar el servicio o rectificar el fallo de un producto". Es decir, la queja es:`,
"una oportunidad de hacer las cosas mejor",
"un protocolo m??s que se debe implementar",
"una mejor manera de hacer el trabajo",
"una insatisfacci??n m??s que se debe mejorar",
"un regalo que el cliente ofrece a la empresa"],

["Las juntas de acci??n comunal que se organizan en el Barrio tiene como objetivo solucionar las necesidades m??s sentidas, aprovechando los recursos disponibles para lograr el bienestar general de su comunidad, por lo anterior usted considera que un miembro de esta junta debe caracterizarse principalmente por:",
"Crear constantemente propuestas de mejora",
"Saber escuchar las ideas de los dem??s",
"Establecer planes de trabajo para cumplir las metas",
"Manejar bien la informaci??n que recibe",
"Conseguir recursos que beneficien a la comunidad"],

["La efectividad de un grupo de trabajo depende principalmente de la ",
"Toma de decisiones",
"Informaci??n que se defina",
"Soluci??n de problemas",
"Confianza que genere el l??der",
"Definici??n de las tareas"],

["Para lograr entregar vivienda gratis a los m??s pobres del pa??s, es necesario que:",
"Se prepare con anterioridad el m??todo de trabajo",
"Se estructure un plan nacional de trabajo",
"Exista un trabajo en red con varias empresas",
"Las empresas m??s importantes del pa??s donen recursos",
"Todos los ciudadanos trabajen unidos"],

["Frente a su casa se ha evidenciado un hueco que est?? hundiendo su residencia, su reacci??n es:",
"Dise??ar un plan de arreglo que comprometa a la comunidad",
"Indagar con las entidades el hecho y buscar soluci??n",
"Hacer una cotizaci??n para arreglar el da??o",
"Convocar a sus vecinos para buscar ayuda",
"Llamar a los bomberos y acueducto"],

["El goce de los derechos de un ciudadano se suspenden por",
"Ser ebrio por costumbre",
"Deudores fallidos",
"Naturalizarse en pa??s extranjero",
"Enajenaci??n mental",
"Deuda de plazo cumplido"],

["Usted es coordinador del campeonato de nataci??n nacional y tiene como objetivo, lograr que su equipo sea considerado de alto rendimiento, para ello usted piensa que este debe:",
"Definir la responsabilidad de cada integrante",
"Delimitar los criterios de desempe??o individual y grupal",
"Cooperar y colaborar con un alto grado de confianza",
"Estar orientado hacia los resultados",
"Tener una comprensi??n clara de los objetivos"],

["Un familiar cercano le dice que estudie lo mismo que ??l, pues esa profesi??n da dinero. Usted",
"se asesora con alguien con m??s conocimientos en el tema",
"la escoge porque sabe que despu??s podr?? adaptarse o aprender",
"identifica sus metas y analiza si se cumplen con esa carrera",
"toma esa carrera como proyecto de vida y se propone hacerla",
"decide estudiar lo que le gusta aunque sepa que no es tan lucrativo"],

["Para lograr que las personas respeten las filas en los paraderos del transporte p??blico, se debe proponer",
"enviar circulares con ideas a las juntas de acci??n local",
"iniciar una campa??a para sensibilizar a los pasajeros",
"Disponer de paraderos c??modos y agradables al usuario",
"se??alizar tanto buses como paraderos con normas",
"tener vig??as en los paraderos ense??ando el civismo"],

["En una reuni??n de re-encuentro con los compa??eros de promoci??n escuch?? los logros de muchos de ellos en el trabajo y vida familiar, como tambi??n algunos fracasos como el m??o. El balance al final de la jornada de escuchar casos exitosos, es que en la vida es necesario...",
"acomodarse con la vida que a uno le toc?? vivir para evitar sufrir viendo los logros de los dem??s",
"tener quien lo apoye y los recursos necesarios para costear las necesidades",
"conseguir con esfuerzo la forma de llegar a lo que uno siempre ha so??ado, sin importar que hacer",
"reconocer las debilidades, potencialidades, condiciones del medio y aprovech??ndolas al m??ximo",
"tener una profesi??n para ser importante, con futuro y ganar mucho dinero"],

];

} else if(asignado == 5){

	questions = [[`Un dicho popular expresa que "la Escuela es el segundo hogar". De esta frase se infiere que la escuela es:`,
"El espacio educativo donde las personas aprendan lo que no alcanzan a aprender en la casa",
"Un hogar sustituto en el que muchas veces encuentran el apoyo moral y motivacional que no tiene en la casa",
"Un espacio en el que se fortalecen conocimientos, valores y vivencias humanas",
"Una segunda familia, en la que existen maestros y amigos que son como padres y hermanos",
"Un espacio esencial que perfecciona la formaci??n humana que se recibe en la familia"],

["La factura de tel??fono le ha llegado por un valor que no fue lo que se consumi??, frente a esto usted:",
"Pide orientaci??n a los vecinos m??s cercanos",
"Indaga en su barrio si hay m??s personas con esta situaci??n",
"Presenta una queja ante la empresa de telefon??a",
"Comunica de esta situaci??n a su familia",
"Paga porque no pretende perder tiempo"],

["Una noche, usted ve a unos ni??os jugando en un sitio donde hay maquinaria de construcci??n sin vigilancia. Usted decide:",
"llamar a la polic??a, presentar cargos y culpar a los responsables",
"vigilarlos mientras est??n all?? y asistirlos en caso de accidente",
"esperar a que los padres los recojan, pues NO son sus hijos",
"decirles que se alejen, pues es un lugar peligroso para jugar",
"buscar a los padres de estos ni??os y exigirles responsabilidad"],

["Usted hace parte de la organizaci??n de una fiesta para su grupo, pero se presenta un inconveniente con el sal??n reservado inicialmente. Su actitud consiste en",
"respetar lo que decida el resto y seguir con las responsabilidades asumidas inicialmente",
"actuar r??pidamente y sugerir otra fecha para poder disfrutar del mismo escenario",
"dedicarse a buscar salones similares para llevar diferentes opciones al grupo",
"planear las acciones en conjunto con los otros y solucionarlo de manera colectiva",
"responsabilizar al encargado de dicha reserva y sugerir que respondan por el tema"],

["Alejandra desea invertir sus ahorros en alg??n negocio que le de mayor rentabilidad que la que le da su cuenta de ahorros, lo que Alejandra debe saber para tomar una decisi??n es:",
"evaluar costos de inversi??n y operativos de cada alternativa",
"observar los factores de riesgo y las oportunidades de cada alternativa",
"prever la ganancia neta que cada alternativa ofrece",
"consultar la normatividad vigente y las condiciones legales de cada alternativa",
"calcular la cantidad de dinero que cada estrategia le ofrece"],

["Mar??a, Jorge y Pedro son amigos, en una reuni??n Jorge y Pedro entran en una discusi??n, se agreden f??sica y verbalmente. Como mediadora Mar??a debe",
"Manifestar que el di??logo es la mejor soluci??n",
"Favorecer a Jorge porque seg??n ella Pedro siempre est?? irritable y tosco",
"Evitar intervenir pues ellos pueden solucionar solos el inconveniente",
"Indagar punto medio entre las opiniones de los amigos",
"Buscar la intervenci??n de un individuo con mayor autoridad para la soluci??n del conflicto"],

["Su vecino ha decidido cortar los ??rboles que est??n frente a su casa, ante esto lo mejor es:",
"Ignora la situaci??n pues no le compromete significativamente",
"Habla con sus vecinos de esta situaci??n",
"Siembra m??s arboles",
"Realiza una campa??a de siembra entre los vecinos",
"Le denuncia por violar la tala de los ??rboles"],

[`Si a un compa??ero lo describen como "persona con habilidades para las relaciones humanas", es probable que esta persona`,
"usualmente est?? feliz, tiene muchos amigos y NO tiene problemas",
"identifica las fortalezas en los dem??s y construye nuevas relaciones",
"ayuda a otras personas a descubrir sus antepasados y a liberarse",
"puede persuadir a los otros para que hagan las cosas a su manera",
"reconoce los problemas interpersonales y busca v??as para resolverlos"],

["En una comunidad, se debe garantizar  que se cumplan las normas, esto se logra s?? se",
"Desarrollan campa??as de promoci??n",
"Planea y dirige una jornada pedag??gica",
"Recogen los datos de los usuarios",
"Organiza un equipo interno de trabajo",
"Construye material audiovisual de difusi??n"],

["El est??ndar que describe los resultados que un trabajador debe lograr en su desempe??o se denomina",
"desempe??o laboral",
"norma de competencia laboral",
"idoneidad al cargo",
"cargo",
"puesto de trabajo"],

];
} else if(asignado == 6){
	questions = [[`"Si una persona se traza metas y las alcanza tendr?? m??s confianza y por ende, desarrollar?? competencias de emprendedor". Seg??n este enunciado, lo mejor es`,
"requerir de tiempo, es el mayor aliado para conseguir lo que se quiere",
"cumplir las metas ya que es la ??nica posibilidad de alcanzar nuestros logros",
"reflexionar que las metas sean medibles y cuantificables en el tiempo",
"crear confianza en s?? mismo para obtener lo anhelado",
"pensar que de las limitaciones se construyen ideas maravillosas"],

["Mario participa en un proceso de selecci??n para un concurso de la alcald??a, al finalizar el proceso le comunican que no fue aceptado, frente a esta situaci??n ??l debe:",
"Pelear hasta lograr lo que quiere",
"Restar importancia y esperar una pr??xima oportunidad",
"Buscar amigos influyentes para que le ayuden",
"Pelear con sus familiares por lo sucedido",
"Analizar su condici??n y evaluar m??s alternativas"],

["Un trabajador ha sido escogido como el empleado del mes por su eficacia en circunstancias espec??ficas del trabajo. Esto demuestra que el empleado tiene que",
"ampliar su capacidad laboral para sostenerse como el mejor",
"competir y ganarle a sus compa??eros como sea",
"tener las competencias que lo hacen ser una persona ??ntegra",
"saber el d??a que lo van a evaluar para portarse muy bien",
"ampliar sus esfuerzos de forma espec??fica"],

["Los procesos interpersonales se refieren, principalmente, al tipo de relaci??n que se establece entre los sujetos de un grupo que busca alcanzar metas. Para que C??sar, vendedor de motos en una multinacional, se integre necesita",
"conocer bien la empresa, en especial, jefes y clientes",
"ver la competitividad como parte del trabajo en grupo",
"establecer metas personales, del grupo y la empresa",
"conocer las t??cnicas de publicidad y ventas de la empresa",
"tener claro cu??nto debe vender y c??mo ser??n los sueldos"],

["A un joven de color se le niega la entrada a un club donde usted se encuentra, su actuaci??n es:",
"Dejar que se aclare la situaci??n entre ellos",
"Llamar a la polic??a para no dejar que se violen sus derechos",
"Denunciar ante diferentes entes esta situaci??n",
"Espera que ??l se defienda con argumentos s??lidos",
"Argumentar que no es posible discriminar a ning??n individuo por ley"],

["En su opini??n: generalmente, la principal raz??n por la que un joven tiene prejuicios raciales es por:",
"Los programas de televisi??n que ve",
"El medio ambiente",
"Sus compa??eros",
"Sus hermanos",
"Sus padres"],

["Juan necesita mejorar su rendimiento acad??mico, para ello est?? buscando la mejor estrategia de trabajo, usted que evidencia muy buenos resultados acad??micos le sugerir??a que:",
"Preparar los ex??menes con anterioridad",
"Subraye las lecturas que realiza para cada clase",
"Dibuje un mapa mental por cada clase y material",
"Toma apuntes de cada sesi??n",
"Dise??e un cronograma de estudio para cada materia"],

["Durante una marcha pac??fica en la que usted participa, se han presentado saqueos en algunos almacenes, la polic??a ha solicitado ayuda para identificar a los responsables de este hecho, usted:",
"Trata de persuadir a los que conoce para que se entreguen.",
"Se presenta a la polic??a e intenta ayudar",
"Busca a los responsables y los entrega",
"Ignora la solicitud de la polic??a",
"Pide recompensa por su ayuda"],

["La reproducci??n es un proceso que permite la creaci??n de organismos, por ejemplo, los seres humanos con sus hijos y las plantas. Estos tipos de reproducci??n reciben el nombre de",
"sexual, asexual, mitosis",
"celular, mitosis",
"asexual, sexual",
"meiosis, asexual",
"mitosis, meiosis, sexual"],

["Los amigos de Sara afirman que ella de veintid??s a??os est?? confundida porque ha iniciado tres carreras diferentes sin terminar, no dura en los puestos que consigue y ahora entr?? en crisis porque su novio le ha pedido conformar una familia. Sara debe",
"organizarse con su novio y conformar una familia, es lo mejor que puede hacer una mujer",
"tomarse su tiempo para reflexionar sobre lo que quiere y desarrollar su proyecto de vida",
"retomar la carrera que m??s le gust?? de las que habia iniciado, el estudio garantiza el futuro",
"prestarle atenci??n a lo que opinan sus amigos y seguir los consejos de ellos demostrando su madurez",
"hacer pruebas de orientaci??n vocacional y encaminarse seg??n los resultados que obtenga"],

];

} else if(asignado == 7){
	questions = [[`El concepto de libre desarrollo de la personalidad abarca`,
"Aprender a conocer a los integrantes",
"Aumentar la creatividad",
"Disminuir la productividad",
"Clarificar las ideas",
"Cambiar situaciones molestas"],

["Al conocer el caso de unos ni??os en situaci??n de abandono por sus padres, usted debe informar a:",
"Junta de acci??n comunal",
"Otros familiares del ni??o",
"Polic??a Nacional",
"Bienestar familiar",
"Comunidad m??s cercana"],

["Usted est?? encargado de coordinar la log??stica de un evento para el cual no cuenta con los recursos necesarios. Frente a esto decide:",
"Llamar a los proveedores que puedan brindarle los materiales requeridos",
"Ubicar fuentes alternativas para conseguir los recursos no disponibles",
"Realizar el evento con los pocos recursos con los que se cuenta",
"Hace s??lo lo que est?? en sus manos",
"Solicitar la ayuda de personas id??neas para cumplir con esta labor"],

["Le interesa ser director del peri??dico escolar y para eso:",
"Busca ser elegido escribiendo un art??culo sobre un tema que atraiga a la mayor??a",
"Manifiesta sus ideas y puntos de vista de forma que los otros le comprendan.",
"Se hace amigo de los de grado once, quienes manejan todo el colegio",
"Defiende sus propuestas para el peri??dico enlodando la gesti??n anterior",
"Propone cambios que a los dem??s les convienen aunque sepa que no son realizables"],

["Usted va en representaci??n de su colegio a unas olimpiadas. Estando all??, debe hacer grupos con estudiantes de otras instituciones, la mejor actitud es:",
"interactuar con ellos aunque no los conozca, y resolver la tarea",
"pedir a los organizadores que lo dejen hacer el trabajo individual",
"buscar alg??n conocido para no sentirse solo en el nuevo grupo",
"estrechar relaciones porque conocer m??s gente le puede ser ??til",
"se integra con el nuevo grupo de compa??eros y trata de caer bien"],

["Cristhian es un joven adolescente que tiene algunos problemas con su rendimiento acad??mico, si usted fuera compa??ero de curso, le aconsejar??a.",
"Hacer una lista de temas que no entiende para resolver",
"Hacer mapas mentales con colores para sus lecturas",
"Tomar apuntes de manera que sean ??tiles para ??l",
"Formular un plan de estudio que pueda cumplir",
"Organizar el tiempo con horarios fijos"],

["En su opini??n, el problema m??s dif??cil para superar en un equipo de trabajo es:",
"Falta de reconocimiento de parte de los l??deres",
"Clima inadecuado o falta de unidad",
"Desconocimiento de los objetivos y metas",
"Falta o falla en el liderazgo",
"Comunicaci??n sobrevalorada"],

["Me gusta trabajar con personas que:",
"Valoren y recompensen el esfuerzo del grupo",
"Sean innovadores, progresistas y creativos",
"Persigan los m??ximos resultados en su labor",
"Se responsabilicen de sus decisiones y resultados",
"Asumen riesgo y retos"],

["Una persona con esp??ritu emprendedor se reconoce por",
"ser competente manejando el dinero",
"estar dispuesto a ayudar a los dem??s",
"buscar un bien com??n, NO el particular",
"su iniciativa y capacidad para liderar",
"ser persistente en el logro de metas"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Delimitar proyectos por departamentos",
"Evaluar la calidad del producto",
"Evaluar la calidad del recurso suministrado",
"Indagar la satisfacci??n de los empleados",
"Dise??ar programaci??n de metas por ??rea"],

];

} else if(asignado==8){
	questions = [[`En su opini??n, una buena estrategia para educar al p??blico en general es:`,
"La publicaci??n de medios electr??nicos",
"Dise??ar incentivos como medio de acompa??amiento",
"La utilizaci??n de la comedia como medio de divulgaci??n",
"La interacci??n directa con las personas",
"La entrega de ayudas cada vez m??s l??dicas"],

["Usted fue delegado como facilitador en una reuni??n importante para la empresa donde trabaja, su responsabilidad es:",
"Observar la reuni??n y las actitudes de los participantes",
"Proveer retroinformaci??n al equipo sobre fortalezas y debilidades del proceso",
"Esperar que alguien solicite su intervenci??n",
"Dar recomendaciones para mejorar la reuni??n",
"Intervenir en momento de desacuerdo"],

["Su vecino desde hace m??s de tres semanas est?? haciendo fiestas nocturnas en la casa, lo cual est?? afectando el sue??o de toda su familia, frente a esta situaci??n lo mejor es:",
"Llamar a la Polic??a",
"Comunicar a la junta de acci??n comunal",
"Esperar a que esta situaci??n pase",
"Hablar con su vecino de esta situaci??n",
"Buscar apoyo de sus vecinos para denunciar"],

["Para lograr que una maqueta se destaque en una exposici??n necesitar??a principalmente",
"Realizar un dise??o estructural vanguardista",
"Responder a las necesidades de la gente",
"Incluir movimientos electr??nicos a las puertas",
"Cumplir con los par??metros requeridos",
"Utilizar materiales de calidad y elegancia"],

["Para disminuir los robos en un barrio, lo mejor es:",
"rotar la vigilancia cada semana por sector del barrio",
"solicitar al alcalde un sistema de monitoreo para el barrio",
"Formar equipos de control por cuadras con los habitantes",
"delegar este trabajo para el l??der de la comunidad",
"tener un sistema de comunicaci??n digital con la polic??a"],

["El banano es considerado un alimento energ??tico ya que nos proporciona una dosis extra de vitalidad. De acuerdo con lo anterior el alimento energ??tico",
"aporta felicidad",
"aporta las calor??as",
"engorda",
"aporta bienestar",
"nutre"],

["Gonzalo es coordinador de un ??rea. Ha notado distanciamiento entre ??l y las personas que son parte de su equipo por lo que se ha propuesto mejorar su relaci??n interpersonal, sin bajar el rendimiento del equipo. Para lograr este objetivo, ??l debe",
"invitar a los trabajadores a hacer alguna actividad por fuera de la oficina",
"pegar afiches y enviar correos a los trabajadores sobre el trabajo en equipo",
"proponer una lluvia de ideas sobre actividades de integraci??n para cada mes",
"mantener la distancia porque el jefe debe ser serio con los empleados",
"hablar con sus subalternos y decirles que lo vean como un amigo"],

["Como representante de un equipo deportivo, considera que una reuni??n efectiva debe caracterizarse por:",
"Identificar tanto el resultado ideal como el m??nimo",
"Definir claramente el objetivo",
"Asignar tiempos para su desarrollo",
"Definir la agenda a cubrir",
"Identificar quien debe asistir"],

["Durante una discusi??n usted:",
"Busca soluciones eficaces",
"Propone actividades de reflexi??n",
"Determina las causas del conflicto",
"Observa la conducta de lo dem??s y toma nota",
"Analiza la problem??tica"],

["Una manera de exigir empleo digno para usted es",
"Conversar con las personas responsables del tema",
"Hacer una protesta simb??lica que represente su necesidad",
"Buscar la intervenci??n de otras entidades",
"Desarrollar una propuesta de inversi??n novedosa",
"Convocar a la comunidad a una marcha nacional"],

];

} else if(asignado==9){
	questions = [[`Marcos sabe que para lograr los objetivos programados de su equipo de trabajo, debe comunicarse eficazmente y llegar a acuerdos con los integrantes, esto implicar?? que:`,
"Cada miembro entienda los roles de los dem??s",
"Promoci??n de comunicaci??n clara evitando rumores",
"Las discusiones sean abiertas e interactivas para todos",
"El n??mero de integrantes participen en su totalidad",
"confianza y respeto entre los integrantes del equipo"],

["Los estudiantes exitosos son aquellos que dise??an estrategias que le permitan fortalecer sus debilidades para tener un excelente desempe??o en el aula de clase. Ellos identifican sus debilidades a trav??s de:",
"Autorregulaci??n de su aprendizaje",
"Resultado de sus notas",
"Autoevaluaci??n del desempe??o",
"Monitoreo de las clases",
"Evaluaci??n por parte del docente"],

["Usualmente se piensa que un equipo de alto rendimiento se caracteriza por",
"Compensar y equilibrar los puntos d??biles de cada integrante",
"Tener objetivos comunes y bien estructurados",
"Trabajar de forma colaborativa y sincr??nicamente",
"Reconocer los obstaculos en los canales de comunicaci??n dentro del equipo",
"Contar con las herramientas propicias de automatizaci??n de los miembros"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Indagar la satisfacci??n de los empleados",
"Delimitar proyectos por departamentos",
"Evaluar la calidad del recurso suministrado",
"Evaluar la calidad del producto",
"Dise??ar programaci??n de metas por ??rea"],

["Un tubo de agua se rompe y debe ser reparado aflojando una rosca que est?? muy apretada. La herramienta que se utiliza para realizar la tarea se llama:",
"boca fija",
"torque",
"abrazadera",
"alicates",
"hombre solo"],

["Frente a un conflicto familiar con sus padres usted cree que lo mejor es:",
"Describir la situaci??n",
"Aclarar los temas",
"Tomar un tiempo para aclarar la situaci??n",
"Esperar que las condiciones emocionales disminuyan",
"No permitir ataque personal"],

["Si observa que en una familia todos sus miembros consumen psicoactivos y esto incluye a un menor, usted:",
"Denuncia esta situaci??n ante la polic??a",
"Informa a sus familiares m??s cercanos",
"Solicita asistencia de los vecinos",
"Notifica esta situaci??n ante Bienestar Familiar",
"Espera que otros tomen la iniciativa"],

["En su barrio se est??n presentando inconvenientes con los vecinos a causa de las fiestas a altas horas de la noche. Usted:",
"Establece con los vecinos un plan de acci??n",
"Informa a la polic??a la situaci??n",
"Interact??a con los propietarios as?? no los conozca con el fin de negociar horarios de reuniones permitidos",
"Respeta los acuerdos establecidos por otros",
"Planea y organiza acciones que beneficien a la mayoria"],

["En vacaciones, usted tiene la oportunidad de trabajar en un almac??n de calzado para ni??os. La mejor manera de hacer ventas significativas es:",
"ofrecer los zapatos m??s baratos y as?? lograr volumen",
"atender los clientes r??pidamente para alcanzar m??s ventas",
"identificar las necesidades y expectativas de los clientes",
"hablar con padres de familia para detectar preferencias",
"capacitarse sobre las marcas y modelos de temporada"],

["Usted es responsable de liderar una reuni??n de trabajo, considera que lo m??s importante es",
"Redactar un corto resumen de la evaluaci??n de la reuni??n",
"Preparar el saludo de bienvenida",
"Verificar las identificaciones y los materiales de la reuni??n como la agenda entre otros",
"Estar presente ante cualquier necesidad o solicitud de los participantes",
"Llegar temprano para verificar los detalles"],

];
} else {
	questions = [[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

[`Ha ocurrido un error (Contacte al administrador)`,
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)",
"Ha ocurrido un error (Contacte al administrador)"],

];
}

let k = 0

for(question of questions){

	const preguntaItem = document.createElement("DIV");

	let pregunta = questionFirstPartCreator(k+1, question[0], question[1], question[2], question[3], question[4], question[5]);

	if(k==9){

		const divisor = `<div class="divisor"><br><br><p>De selecci??n m??ltiple con ??nica respuesta, en este tipo de pregunta encuentra un enunciado para el cual se debe seleccionar una (1) de las opciones propuestas</p></div></center>`;

		preguntaItem.innerHTML = pregunta[0] + pregunta[1] + pregunta[2] + pregunta[3] + pregunta[4] + pregunta[5] + pregunta[6] + divisor;

	} else{

		preguntaItem.innerHTML = pregunta[0] + pregunta[1] + pregunta[2] + pregunta[3] + pregunta[4] + pregunta[5] + pregunta[6];

	}

	fragmento.appendChild(preguntaItem);

	k++;

}

test.appendChild(fragmento);



const fragmento2 = document.createDocumentFragment();

let questionsSecondPart = [];

let theway = [];

if(asignado == 1){

	questionsSecondPart = [["El gr??fico muestra ampliaciones de una misma fotograf??a. Si se contin??a con el mismo proceso de ampliaci??n, la altura de la cuarta fotograf??a es:<br> <img src='images/test1/pregunta11.png' alt=''>",
"&nbsp 12",
"&nbsp 8",
"&nbsp 20",
"&nbsp 16",
"&nbsp 24"],

["Identifique el anuncio mal escrito",
`&nbsp "??Comprelo, ganelo y disfrutelo!"`,
`&nbsp "Porque tu pasi??n merece m??s"`,
`&nbsp "Primer y ??nico t??pico disponible"`,
`&nbsp "Verte feliz, nos hace felices"`,
`&nbsp ??Compra y s??cala del estadio!`],

["Los altos ??ndices de embarazos en adolescentes han generado un problema de salud p??blica, por lo costos que implica el cuidado de estos menores. Piensa usted que se debe:",
"&nbsp Divulgar los m??todos de planificaci??n para las parejas j??venes",
"&nbsp Regalar preservativos a los j??venes en los colegios",
"&nbsp Educar m??s a los j??venes para que no pierdan muchas oportunidades en su vida",
"&nbsp Analizar las implicaciones y responsabilidad de la sexualidad y la reproducci??n en el aula",
"&nbsp Responsabilizar a los j??venes de la sexualidad temprana"],

["El perro ladra y el gato",
"&nbsp ruge",
"&nbsp grazna",
"&nbsp canta",
"&nbsp grita",
"&nbsp ma??lla"],

[`La expresi??n "Plumas Insignes" la palabra insignes hace referencia a:`,
"&nbsp Inmortal",
"&nbsp Medicares",
"&nbsp Notable",
"&nbsp Irrelevante",
"&nbsp Avasallante"],

["En Colombia el conflicto armado trae como consecuencia el desplazamiento forzoso masivo de la poblaci??n. Al analizar esto, seg??n los Derechos Humanos le corresponde realizar el proceso de reparaci??n a:",
"&nbsp el estado",
"&nbsp el causante del desplazamiento",
"&nbsp la sociedad",
"&nbsp ellos mismos",
"&nbsp sus familiares"],

["A un pabell??n de la feria del libro ingresaron 56 personas en dos horas; si ingresaron 4 mujeres por cada 3 hombres, entonces, el n??mero de mujeres que asistieron, corresponden a:",
"&nbsp 44",
"&nbsp 56",
"&nbsp 32",
"&nbsp 55",
"&nbsp 8"],

["Si se tiene la medida angular que es igual a 43 grados; el complemento de dicho ??ngulo es:",
"&nbsp 100",
"&nbsp 47",
"&nbsp 43",
"&nbsp 80",
"&nbsp 90"],

["Jos?? Luis tiene una bolsa con 39 pelotas de tres colores: amarillo, azul y rojo. Si las azules son la octava parte de las rojas y las amarillas son su mitad, entonces, la cantidad de pelotas amarillas son:",
"&nbsp 19",
"&nbsp 71",
"&nbsp 20",
"&nbsp 12",
"&nbsp 13"],

["Se tiene la siguiente suma de decimales: 0,1 + 0,3 + 0,16 + 0,24; si el resultado tiene que ser 10; el n??mero que debe adicionarse es:",
"&nbsp 9,4",
"&nbsp 9,3",
"&nbsp 9,5",
"&nbsp 9,2",
"&nbsp 9,6"],
];

theway = [0,1,2,3,4,5,0,1,4,3,5,2,0,4,2,1,3,5,0,5,2,3,1,4,0,2,5,4,3,1,0,4,3,1,2,5,0,2,1,5,4,3,0,2,1,4,5,3,0,1,3,5,2,4,0,4,5,2,1,3,0,4,1,4,5,3,1,3,2,4,4,0];

} else if(asignado == 2){

	questionsSecondPart = [["Siguiendo las gr??ficas que no est??n marcadas con letras, debe identificar entre las 5 figuras que se designan con las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test2/pregunta11.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Siguiendo las gr??ficas que no est??n marcadas con letras, debe identificar entre las 5 figuras que se designan con las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test2/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["De las siguientes series de palabras, una carece de orden alfab??tico. Selecci??nela",
"&nbsp Calzado, Campestre, Can??nigo, Castrado",
"&nbsp Barato, licor, manso, costumbre",
"&nbsp Abatir, abanico, astronauta, avispa",
"&nbsp Aclamar, andar, enumerar, estorbar",
"&nbsp Lago, le??n, listo, luna, lupanar"],

["De las siguientes im??genes se??ale la que es diferente<br> <img src='images/test2/pregunta14.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

[`De las siguientes im??genes se??ale la que es diferente<br> <img src='images/test2/pregunta15.png' alt=''>`,
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Se??ale la palabra que no guarda relaci??n con las dem??s, tanto por su semejanza etimol??gica como por su forma, o porque no pertenece a la misma categor??a",
"&nbsp Unir",
"&nbsp Agregar",
"&nbsp Adjuntar",
"&nbsp Desligar",
"&nbsp Anexar"],

["Katherine es una profesional de Ingenier??a Ambiental, egresada de la universidad de la Guajira. Actualmente, est?? realizando un estudio de impacto ambiental en una zona de explotaci??n minera para el montaje de una empresa. ??ste reflej?? que el impacto es negativo y ante este suceso la alternativa que se propone es:",
"&nbsp Establecer un dialogo con los miembros de la comunidad para que ellos presionen",
"&nbsp la construcci??n del proyecto con los permisos, excepto la licencia ambiental",
"&nbsp anunciar que el proyecto no es viable porque el impacto es irreversible",
"&nbsp que el due??o del proyecto proporcione dinero a toda la comunidad",
"&nbsp un plan de mejoramiento ambiental antes de empezar el proyecto"],

["El ??ndice de suicidios en ni??os y j??venes en nuestro pa??s ha aumentado alarmantemente, los padres de familia deber??an:",
"&nbsp Dejar de dar regalos a sus hijos y preocuparse m??s por ellos",
"&nbsp Acompa??ar m??s a sus hijos y escucharlos para orientar sus problemas",
"&nbsp Controlar las amistades y relaciones que tienen sus hijos",
"&nbsp Trabajar menos y estar m??s pendientes de sus hijos",
"&nbsp Pedir ayuda a un profesional que pueda manejar la situaci??n"],

[`En la frase "si identifica la idea central de cada p??rrafo cuando lee, ahorrar?? tiempo y esfuerzo", se puede concluir que:`,
"&nbsp Las ideas secundarias esclarecen la idea principal",
"&nbsp Hacer res??menes facilita entender lo le??do",
"&nbsp Las ideas principales explican la idea que se quiere expresar",
"&nbsp Los p??rrafos est??n formados por oraciones",
"&nbsp Es importante identificar el sujeto y mensaje de cada oraci??n"],

["De las siguientes im??genes se??ale la que es diferente:<br> <img src='images/test2/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],
];

theway = [0,2,3,4,1,5,0,2,3,4,5,1,0,1,4,5,2,3,0,1,4,3,2,5,0,5,1,3,4,2,0,2,5,4,3,1,0,5,4,1,2,3,0,2,3,1,5,4,0,1,4,3,5,2,0,4,5,1,2,3,0,2,3,2,3,4,4,5,2,3,4,0];


} else if(asignado == 3){

	questionsSecondPart = [["A continuaci??n se presenta un modelo o patr??n que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test3/pregunta11.png' alt=''>",
"&nbsp A <br> <img src='images/test3/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test3/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test3/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test3/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test3/pregunta11-5.png' alt=''>"],

["La figura que completa la secuencia de la primera fila y ocupe el espacio del interrogante es:<br> <img src='images/test3/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp Ninguna`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test3/pregunta13.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test3/pregunta14.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Este ejercicio muestra un bloque de ladrillos, en grupos de igual tama??o e igual forma. Uno de estos ladrillos est?? marcado con una X, usted debe elegir entre las alternativas, aquella que corresponda al n??mero de ladrillos que toca con alguna de sus caras al ladrillo marcado con la X:<br> <img src='images/test3/pregunta15.png' alt=''>",
"&nbsp 8",
"&nbsp 3",
"&nbsp 7",
"&nbsp 9",
"&nbsp 6"],

[`A continuaci??n, usted encontrar?? cinco pasos numerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opci??n que d?? un orden l??gico de los eventos.<br>
	<ol>
		\t<li>Se reduce significativamente una cosecha</li>
		\t<li>Son llamados los arque??logos</li>
		\t<li>Un grajero ara su campo</li>
		\t<li>Se descubre una reliquia</li>
		\t<li>Un campo se declara hist??rico</li>
	</ol>
`,
"&nbsp 1-4-2-3-5",
"&nbsp 1-2-3-4-5",
"&nbsp 3-4-2-1-5",
"&nbsp 3-4-2-5-1",
"&nbsp 1-2-4-3-5"],

["A continuaci??n encontrar?? Series de cuatro palabras enumeradas. Se??ale la Opci??n en la que aparecen Ordenadas de forma correcta. Tapar=1, tap??n=2, tapiz=3, taponar=4",
"&nbsp 1 3 4 2",
"&nbsp 2 4 3 1",
"&nbsp 4 2 1 3",
"&nbsp 3 1 4 2",
"&nbsp 1 3 2 4"],

["Seleccione la opci??n que tiene; una T, una S, un 3 y un 8.",
"&nbsp 2 T 81 7 S A Z 3 D F 5",
"&nbsp 8, E, S, R, T, E, 5, 2, 6, L",
"&nbsp 9 8 6 7 C U R T 2 S 4 0",
"&nbsp 1 R 3 T 5 P 7 M O S 6 9",
"&nbsp S T A R 4 6 8 P U 9 N 2"],

["La contaminaci??n del aire en ciudades como M??xico, Santiago y Bogot?? han deteriorado la salud de muchos de sus habitantes. En Bogot?? se han impuesto medidas para contrarrestar dicho impacto. Est?? de acuerdo con:",
"&nbsp Reducci??n de emisi??n de gases",
"&nbsp Transporte hasta las 11 p.m. en transmilenio",
"&nbsp La medida del pico y placa",
"&nbsp Sanciones a las empresas que contaminen",
"&nbsp Comparendos a los infractores"],

["Lo contrario de soberbio es",
"&nbsp sumiso",
"&nbsp paciente",
"&nbsp humilde",
"&nbsp calmado",
"&nbsp t??mido"],

];

theway = [0,3,1,2,5,4,0,5,4,1,2,3,0,3,5,2,1,4,0,1,2,4,3,5,0,2,3,1,4,5,0,3,5,2,4,1,0,4,5,2,1,3,0,1,4,5,3,2,0,5,2,3,1,4,0,1,4,2,3,5,0,2,3,1,1,1,3,5,1,4,3,0];

} else if(asignado == 4){

	questionsSecondPart = [["A continuaci??n se presenta un modelo o patr??n que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test4/pregunta11.png' alt=''>",
"&nbsp A <br> <img src='images/test4/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test4/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test4/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test4/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test4/pregunta11-5.png' alt=''>"],

["Siguiendo las gr??ficas que no est??n marcadas con letras, debe identificar entre las 5 figuras que se designan como las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test4/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["A continuaci??n, usted encontrar?? cinco pasos enumerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opci??n que d?? un orden l??gico de los eventos. 1. Un artista queda libre de cargos. 2. A un artista se le acusa de homicidio. 3. El artista tiene un cliente nuevo. 4. Finaliza la carrera del artista. 5. Muere un hombre",
"&nbsp 4-5-2-1-3",
"&nbsp 2-1-3-4-5",
"&nbsp 5-2-1-3-4",
"&nbsp 3-5-2-1-4",
"&nbsp 5-4-3-2-1"],

["Seleccione la opci??n que tiene dos E",
"&nbsp P, E, R, T, H, A, M, B, O, Y",
"&nbsp L, I, T, T, L, E, R, O, C, K",
"&nbsp P, U, E, R, T, O, R, I, C, O",
"&nbsp N, E, W, O, R, L, E, A, N, S",
"&nbsp E, S, T, A, M, B, U, L"],

["Identifique la respuesta que corresponde con la l??gica del domin??:<br> <img src='images/test4/pregunta15.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Katherine es una profesional de ingenier??a ambiental, egresada de la universidad de la Guajira. Actualmente, est?? realizando un estudio de impacto ambiental en una zona de explotaci??n minera para el montaje de una empresa. ??ste reflej?? que el impacto es negativo y ante este suceso la alternativa que se propone es",
"&nbsp que el due??o del proyecto proporcione dinero a toda la comunidad",
"&nbsp establecer un dialogo con los miembros de la comunidad para que ellos presionen",
"&nbsp anunciar que el proyecto no es viable porque el impacto es irreversible",
"&nbsp la construcci??n del proyecto con los permisos, excepto la licencia ambiental",
"&nbsp un plan de mejoramiento ambiental antes de empezar el proyecto"],

["Enfadado es lo mismo que",
"&nbsp enojado",
"&nbsp aburrido",
"&nbsp ofendido",
"&nbsp irascible",
"&nbsp orgulloso"],

["La palabra que se debe utilizar en el espacio en blanco es: el 20 de julio se ---------------- la bandera nacional:",
"&nbsp Empu??a",
"&nbsp Resalta",
"&nbsp Promociona",
"&nbsp Ostenta",
"&nbsp Honra"],

["La figura que es igual al modelo:<br> <img src='images/test4/pregunta19.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["De las siguientes im??genes se??ale la que es diferente <br> <img src='images/test4/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

];

theway = [0,1,5,2,4,3,0,3,1,2,5,4,0,3,5,1,2,4,0,1,2,3,5,4,0,3,2,4,1,5,0,4,3,5,1,2,0,3,4,5,1,2,0,3,4,1,5,2,0,5,1,3,4,2,0,5,4,2,1,3,0,3,5,4,4,1,5,1,5,5,4,0];


} else if(asignado == 5){

	questionsSecondPart = [["Identifique el bloque id??ntico a la figura base, que est?? colocado en distinta posici??n:<br> <img src='images/test5/pregunta11.png' alt=''>",
"&nbsp A <br> <img src='images/test5/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test5/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test5/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test5/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test5/pregunta11-5.png' alt=''>"],

["Identifique entre las cuatro alternativas designadas con la letra A, B, C y D. La figura que completa la serie que aparece en la parte superior:<br> <img src='images/test5/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp Ninguna`],

["A continuaci??n encontrar?? Series de cuatro palabras numeradas. Se??ale la Opci??n en la que aparecen Ordenadas de forma correcta.  Oportunista=1, oposici??n=2, orificio=3, opositar=4",
"&nbsp 2 3 1 4",
"&nbsp 3 4 2 1",
"&nbsp 4 1 3 2",
"&nbsp 1 2 4 3",
"&nbsp 2 4 3 1"],

["Un estudiante considerado brillante, utiliza los procedimientos de manejo de informaci??n: b??squeda, selecci??n y almacenamiento, para elaborar informes. Para que el estudiante cumpla totalmente con las exigencias para redactar informes, usted sugiere que",
"&nbsp utilice un lenguaje claro, conciso, preciso, concreto y objetivo.",
"&nbsp copie informaci??n indiscriminadamente de la web o de libros",
"&nbsp pida ayuda a su papa que es escritor y que tiene experiencia.",
"&nbsp escriba p??rrafos amplios, explicando y describiendo los hechos.",
"&nbsp incluya apreciaciones personales como creo o deseo."],

["Identifique la respuesta que corresponde con la l??gica del domin??: <br> <img src='images/test5/pregunta15.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Seleccione la opci??n que contiene al mismo tiempo dos n??meros 2, una M y una N",
"&nbsp 3, 0, 2, Q, 7, J, R, A",
"&nbsp O, Q, 7, N, R, M, 2, 6",
"&nbsp 7, B, F, 9, C, H, 8, E",
"&nbsp 2, N, P, Q, 4, A, M, 2",
"&nbsp 4, 7, 9, M, 2, Q, H, 1"],

["Luis tiene 85 pesos en monedas de cinco y diez pesos, tiene 12 monedas en total. ??Cu??ntas monedas son de cinco pesos?",
"&nbsp 45",
"&nbsp 6",
"&nbsp 7",
"&nbsp 4",
"&nbsp 5"],

["Enfadado es lo mismo que",
"&nbsp orgulloso",
"&nbsp irascible",
"&nbsp aburrido",
"&nbsp enojado",
"&nbsp ofendido"],

["De las siguientes im??genes se??ale la que es diferente <br> <img src='images/test5/pregunta19.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["De las siguientes im??genes se??ale la que es diferente <br> <img src='images/test5/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

];

theway = [0,4,5,1,3,2,0,2,3,4,1,5,0,5,1,4,2,3,0,4,2,3,1,5,0,3,1,5,2,4,0,2,5,4,1,3,0,5,1,4,3,2,0,4,1,3,5,2,0,3,2,4,1,5,0,1,3,2,5,4,0,1,2,4,1,1,4,3,4,4,5,0];

} else if(asignado == 6){

	questionsSecondPart = [["??En cu??l circuito es m??s probable que el piloto caiga del avi??n?<br> <img src='images/test6/pregunta11.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp si es igual",
"&nbsp ",
"&nbsp "],

["??Cu??l gancho sostiene menos peso?<br> <img src='images/test6/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp si es igual`,
`&nbsp`,
`&nbsp`],

["Rueda o ruedas que giran en la misma direcci??n de la rueda que indica la flecha es (son):<br> <img src='images/test6/pregunta13.png' alt=''>",
`&nbsp I`,
`&nbsp II, IV`,
`&nbsp I, III`,
`&nbsp III, IV`,
`&nbsp II, III`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test6/pregunta14.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test6/pregunta15.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["El crecimiento de la poblaci??n ha causado efectos negativos en la sostenibilidad de los recursos naturales. Bajo este criterio se propone",
`&nbsp Controlar el consumo y compensar el da??o`,
`&nbsp por un lapso de tiempo, prohibir los hijos`,
`&nbsp prohibir hijos fuera del matrimonio`,
`&nbsp que las parejas NO tengan hijos`,
`&nbsp limitar el n??mero de hijos por familia`],

["Al llegar tarde a una reuni??n de trabajo, usted est?? propinando que",
`&nbsp su jefe le llame la atenci??n`,
`&nbsp el trabajo de sus compa??eros se retrase`,
`&nbsp su evaluaci??n de desempe??o se afecte`,
`&nbsp su horario de salida se extienda`,
`&nbsp sus compa??eros le generen mal ambiente`],

["La palabra que se debe utilizar en el espacio en blanco: Con las ------------ de la p??gina anterior construya sus oraciones.",
`&nbsp palabras`,
`&nbsp instrucciones`,
`&nbsp indicaciones`,
`&nbsp letras`,
`&nbsp afirmaciones`],

[`"La mitad de los habitantes de los Estados Unidos sufren peri??dicamente del insomnio, pues este mal tiene relaci??n con las presiones y el ritmo acelerado de la vida moderna, todo el que sufre de insomnio tiene su soluci??n o man??a favorita (un buen trago, un libro aburrido, m??sica suave, etc.) Pero la clave parece existir en la relaci??n de tensiones y m??s que nada en no preocuparse por la falta de sue??o". Del texto se puede deducir que la m??s grave preocupaci??n para el que padece de insomnio es:`,
`&nbsp Demasiadas presiones.`,
`&nbsp La falta de sue??o`,
`&nbsp Ritmo de vida acelerado`,
`&nbsp La mejor manera de dormir`,
`&nbsp Preocupaciones excesivas`],

["Se??ale el sin??nimo de la Palabra: CALCULAR",
`&nbsp Averiguar`,
`&nbsp Creer`,
`&nbsp Comenzar`,
`&nbsp Computar`,
`&nbsp Sumar`],

];

theway = [0,5,1,3,2,4,0,3,2,4,5,1,0,1,5,3,4,2,0,4,2,1,3,5,0,4,3,2,5,1,0,5,4,3,2,1,0,5,3,4,1,2,0,2,1,3,4,5,0,2,5,1,3,4,0,5,1,3,4,2,0,1,1,3,2,5,1,2,1,2,4,0];

} else if(asignado == 7){

	questionsSecondPart = [[`A continuaci??n de la lista usted encuentra cinco sucesiones posibles numeradas de 1 a 5, cada una de las opciones representa una ordenaci??n secuencial diferente de los eventos dados. Escoja la opci??n de la sucesi??n que d?? la ordenaci??n m??s l??gica de los eventos. <br>
<ol>
	\t<li>Un joven puede costearse la universidad</li>
	\t<li>Un hombre toma un avi??n para ir a otra ciudad</li>
	\t<li>Un hombre quiere proteger a su familia</li>
	\t<li>Se compra un seguro de vida</li>
	\t<li>Una mujer llora</li>
</ol>`,
"&nbsp 5-1-3-4-2",
"&nbsp 2-5-1-3-4",
"&nbsp 4-2-5-1-3",
"&nbsp 3-4-2-5-1",
"&nbsp 1-3-4-2-5"],

["En una carrera de 3 Km se llevan recorridos 150 m. ??Cu??l es el porcentaje que corresponde a este recorrido?",
`&nbsp 5%`,
`&nbsp 8%`,
`&nbsp 15%`,
`&nbsp 21%`,
`&nbsp 10%`],

[`En la frase "Un equipo de cient??ficos de la universidad de Columbia, en Nueva York, acaba de presentar un dispositivo del tama??o de una tarjeta de cr??dito que me permite hacer pruebas sangu??neas en minutos", la palabra "dispositivo" puede ser reemplazada, sin cambiar el significado, por:`,
`&nbsp artefacto`,
`&nbsp m??quina`,
`&nbsp mueble`,
`&nbsp factor`,
`&nbsp objeto`],

["Un automovilista sale a las 9 a.m. y se detiene a hacer reparaciones a las 9:20 a.m., si la distancia fue de 18 kil??metros. ??Cu??l fue la velocidad promedio, en kil??metros por hora de esa parte del viaje?",
`&nbsp 54`,
`&nbsp 41`,
`&nbsp 50`,
`&nbsp 56`,
`&nbsp 60`],

["La suma del 50% del 20% de 1/8 de 40 es:",
`&nbsp 3.8`,
`&nbsp 25`,
`&nbsp 15`,
`&nbsp 33`,
`&nbsp 1.5`],

["Las palabras que se deben utilizar en los espacios en blanco son:    El f??tbol, noble deporte ---------- por lo brit??nicos, tiene ---------- y arraigadas ra??ces en el pueblo latinoamericano.",
`&nbsp impulsado - poderosas`,
`&nbsp implantado - profundas`,
`&nbsp auspiciado - difundidas`,
`&nbsp impartido - hondas`,
`&nbsp brindado - diversas`],

["Un compresor tiene la capacidad de aspirar 4,587 metros c??bicos de refrigerante cada hora; si un metro c??bico es igual a 1000 litros, entonces, los litros aspirados por el compresor cada hora, corresponden a:",
`&nbsp 4587`,
`&nbsp 458,7`,
`&nbsp 0,004587`,
`&nbsp 4,587`,
`&nbsp 45,87`],

["El formato carta en una impresora viene de 21,59 cent??metros por 27,94 cent??metros, si el ??rea de impresi??n anterior se reduce en un cent??metro; entonces el ??rea de impresi??n es:",
`&nbsp 554694,6`,
`&nbsp 55,46946`,
`&nbsp 55469,46`,
`&nbsp 554,6946`,
`&nbsp 5546,946`],

["Restar 23.180 pesos de 157.637 pesos con 25 centavos y as?? se obtiene el nuevo valor que es:",
`&nbsp 134737`,
`&nbsp 134637`,
`&nbsp 134447`,
`&nbsp 134357`,
`&nbsp 134457`],

["El promedio de la temperatura en el municipio de Ch??a Cundinamarca, seg??n el Ideam fue de 42,5 grados Fahrenheit en la ??ltima semana ( 8 d??as ); por lo tanto, la temperatura expresada en grados Celsius es de",
`&nbsp 5,3`,
`&nbsp 17,7`,
`&nbsp 10,5`,
`&nbsp 25,7`,
`&nbsp 5,8`],

];

theway = [0,4,2,5,1,3,0,4,3,2,1,5,0,2,1,4,5,3,0,2,1,5,3,4,0,2,5,4,1,3,0,1,5,2,3,4,0,4,3,1,2,5,0,4,3,1,2,5,0,3,5,4,1,2,0,5,3,2,1,4,0,4,1,1,1,4,2,1,4,5,5,0];

} else if(asignado == 8){

	questionsSecondPart = [[`A continuaci??n de la lista usted encuentre cinco sucesiones posibles numeradas de 1 a 5, cada una de las opciones representa una ordenaci??n secuencial diferente de los eventos dados. Escoja la opci??n de la sucesi??n que d?? la ordenaci??n m??s l??gica de los eventos <br> 
<ol>
	\t<li>Una oveja es trasquilada</li>
	\t<li>Una persona est?? acalorada</li>
	\t<li>Se teje hilaza</li>
	\t<li>Se viste un su??ter</li>
	\t<li>Se ti??e lana</li>
</ol>`,
"&nbsp 1-3-5-4-2",
"&nbsp 1-5-3-4-2",
"&nbsp 2-4-3-5-1",
"&nbsp 3-4-5-2-1",
"&nbsp 4-2-5-3-1"],

["A continuaci??n encontrar?? Series de cuatro palabras numeradas. Se??ale la Opci??n en la que aparecen Ordenadas de forma correcta.     <br>Encina=1,   pino=2,   roble=3,   avellano=4",
`&nbsp 2 3 4 1`,
`&nbsp 4 1 2 3`,
`&nbsp 3 4 1 2`,
`&nbsp 1 3 4 2`,
`&nbsp 1 3 2 4`],

["Sentido es a Olfato como Constituci??n es a:",
`&nbsp Ley`,
`&nbsp Deber`,
`&nbsp Estatuto`,
`&nbsp Derecho`,
`&nbsp Pa??s`],

["Molino es a viento como bombillo es a",
`&nbsp energ??a`,
`&nbsp apagado`,
`&nbsp luz`,
`&nbsp destello`,
`&nbsp encender`],

["Las cinco eses son una estrategia para hacer m??s eficiente el trabajo. Seg??n esto usted:",
`&nbsp Manifiesta que clasificar y ordenar no son su fuerte y mejor que eso lo haga el personal de servicios`,
`&nbsp Utiliza esta herramienta para vend??rsela a sus colaboradores y subalternos`,
`&nbsp Clasifica, ordena y almacena los recursos, de acuerdo con los par??metros establecidos`,
`&nbsp Reutiliza los materiales que todav??a sirven en su puesto de trabajo`,
`&nbsp Comenta que no tiene tiempo sino para rendir informes y ese trabajo lo hace su secretaria`],

["Pedro tiene 76 canecas de pintura entre rojas y blancas, siendo las de color rojo las de mayor cantidad. Si la divisi??n del numero de canecas del color rojo entre las de color blanco es 3, entonces, la cantidad de canecas de color rojo corresponden a:",
`&nbsp 73`,
`&nbsp 76`,
`&nbsp 57`,
`&nbsp 79`,
`&nbsp 228`],

["El sueldo de Natalia es de $2,000,000, de estos el 30% son para el arriendo, 20% para alimentaci??n, 20% para el transporte, 20% es gastado en servicios p??blicos y el resto lo distribuye para consumo diario de lunes a viernes durante cuatro semanas completas. Seg??n la informaci??n anterior, el dinero en pesos que usa Natalia para gastar diariamente es:",
`&nbsp 20000`,
`&nbsp 13333`,
`&nbsp 200000`,
`&nbsp 100000`,
`&nbsp 16667`],

["Al sumar 45?? con 27?? 13' 12'' el resultado es:",
`&nbsp 1,6?? 13' 12''`,
`&nbsp 1134??`,
`&nbsp 27?? 13' 12''`,
`&nbsp 72?? 13' 12''`,
`&nbsp 72??`],

["Una bolsa contiene bolas blancas (b) y negras (n). Si al extraer sucesivamente tres bolas se genera el siguiente espacio muestral: o {(b,b,b); (b,b,n); (b,n,b); (n,b,b); (b,n,n); (n,b,n); (n,n,b); (n,n,n)}, entonces, el suceso a {(b,b,b); (b,b,n); (b,n,b); (n,b,b); (b,n,n); (n,b,n); (n,n,b)} corresponde a sacar:",
`&nbsp Tres bolas del mismo color`,
`&nbsp Al menos una bola blanca`,
`&nbsp Dos bolas blancas`,
`&nbsp Una bola negra`,
`&nbsp Al menos dos bolas negras`],

["Un hex??gono regular en uno de sus lados tiene un longitud de 8 cent??metros; el per??metro en pies y notaci??n fraccionaria es:",
`&nbsp 123/100`,
`&nbsp 37/25`,
`&nbsp 49/50`,
`&nbsp 37/50`,
`&nbsp 49/100`],

];

theway = [0,3,2,4,1,5,0,2,4,5,3,1,0,4,2,5,1,3,0,3,1,5,4,2,0,4,3,1,5,2,0,4,2,5,3,1,0,1,4,2,5,3,0,3,1,2,4,5,0,3,4,2,5,1,0,1,4,2,3,5,0,2,2,1,1,3,3,3,4,2,2,0];

} else if(asignado == 9){

	questionsSecondPart = [[`A continuaci??n se presenta un modelo o patr??n que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test9/pregunta11.png' alt=''>`,
"&nbsp A <br> <img src='images/test9/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test9/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test9/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test9/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test9/pregunta11-5.png' alt=''>"],

["Identifique el bloque id??ntico a la figura base, que est?? colocado en distinta posici??n:<br> <img src='images/pregunta12.png' alt=''>",
`&nbsp A <br> <img src='images/test9/pregunta12-1.png' alt=''>`,
`&nbsp B <br> <img src='images/test9/pregunta12-2.png' alt=''>`,
`&nbsp C <br> <img src='images/test9/pregunta12-3.png' alt=''>`,
`&nbsp D <br> <img src='images/test9/pregunta12-4.png' alt=''>`,
`&nbsp E <br> <img src='images/test9/pregunta12-5.png' alt=''>`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test9/pregunta13.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test9/pregunta14.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["La figura que completa la secuencia y ocupa el espacio del interrogante es:<br> <img src='images/test9/pregunta15.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

[`A continuaci??n, usted encontrar?? cinco pasos numerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opci??n que d?? un orden l??gico de los eventos.     
<ol>
	\t<li>Se cultiva algod??n</li>
	\t<li>Se compra una camiseta</li>
	\t<li>Para limpiar el polvo se utiliza una prenda vieja</li>
	\t<li>El vestido se desintegra</li>
	\t<li>Se desecha un trapo</li>
</ol>`,
`&nbsp 1-2-3-4-5`,
`&nbsp 4-5-3-2-1`,
`&nbsp 2-3-1-5-4`,
`&nbsp 3-4-5-1-2`,
`&nbsp 4-5-1-2-3`],

["Seleccione la opci??n que tiene dos E",
`&nbsp P, E, R, T, H, A, M, B, O, Y`,
`&nbsp L, I, T, T, L, E, R, O, C, K`,
`&nbsp N, E, W, O, R, L, E, A, N, S`,
`&nbsp E, S, T, A, M, B, U, L`,
`&nbsp P, U, E, R, T, O, R, I, C, O`],

["En un aula de ??tica la profesora trabaj?? con un grupo de personas profesionales y realiz?? una actividad l??dica. Al final, los alumnos se fueron y dejaron el sal??n lleno de papel y c??scara de frutas entre otros. El compromiso de mantener el aula ordenada y aseada es de",
`&nbsp Director`,
`&nbsp El personal de aseo`,
`&nbsp La profesora`,
`&nbsp El cordinador`,
`&nbsp Los alumnos`],

["El tratar de solucionar conflictos, abord??ndolos directamente con la persona con quien estamos en desacuerdo, puede requerir:",
`&nbsp Agravar la situaci??n`,
`&nbsp Estar dispuesto a callar`,
`&nbsp Exponerse al rid??culo o rechazo`,
`&nbsp Ser cuestionados por el otro`,
`&nbsp Contribuir a mejorar la situaci??n`],

["Las palabras que se deben utilizar en el espacio en blanco son: El poder significa la -------------, real o en potencia, para --------------- en otros en el sentido deseado",
`&nbsp presi??n - encajar`,
`&nbsp competencia - presionar`,
`&nbsp capacidad - influir`,
`&nbsp autoridad - inducir`,
`&nbsp posibilidad - persuadir`],

];

theway = [0,5,3,1,4,2,0,2,5,1,3,4,0,4,2,1,3,5,0,1,3,4,5,2,0,3,4,5,2,1,0,5,4,3,1,2,0,2,4,3,1,5,0,3,2,1,4,5,0,5,4,1,2,3,0,4,5,3,2,1,0,2,3,5,2,5,1,3,5,5,3,0];

} else {

	questionsSecondPart = [["Ha ocurrido un error (Contacte al administrador)",
"&nbsp Ha ocurrido un error (Contacte al administrador)",
"&nbsp Ha ocurrido un error (Contacte al administrador)",
"&nbsp Ha ocurrido un error (Contacte al administrador)",
"&nbsp Ha ocurrido un error (Contacte al administrador)",
"&nbsp Ha ocurrido un error (Contacte al administrador)"],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],

["Ha ocurrido un error (Contacte al administrador)",
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`,
`&nbsp Ha ocurrido un error (Contacte al administrador)`],
];
		
}


let p = 10;

for(question of questionsSecondPart){

	const preguntaItem2 = document.createElement("DIV");

	let pregunta2 = questionSecondPartCreator(p+1, question[0], question[1], question[2], question[3], question[4], question[5]);

	if(p==19){

		const botonFinalizar = `<center><input type="submit" class="finish-test-buttom" name="submit" value="Finalizar la prueba"><br></center><center><h3 class="mensaje-advertencia"><h3></center>`;

		preguntaItem2.innerHTML = pregunta2[0] + pregunta2[1] + pregunta2[2] + pregunta2[3] + pregunta2[4] + pregunta2[5] + pregunta2[6] + botonFinalizar;

	} else{

		preguntaItem2.innerHTML = pregunta2[0] + pregunta2[1] + pregunta2[2] + pregunta2[3] + pregunta2[4] + pregunta2[5] + pregunta2[6];

	}

	fragmento2.appendChild(preguntaItem2);

	p++;

}

test.appendChild(fragmento2);

return theway;


}

