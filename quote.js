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

	questions = [["El ejercicio de deporte y sus manifestaciones tienen como función:",
"Formar de manera integral a las personas",
"Preservar y desarrollar una mejor salud",
"Desarrollar sus potenciales físicos",
"Aprovechar el tiempo libre",
"Invertir en el desarrollo mental de las personas"],

["En su opinión, un verdadero líder es aquel que es capaz de:",
"Impulsar al equipo a utilizar sus habilidades y cumplir un propósito",
"Influir de cualquier modo sobre los demás, para que se haga lo que él quiere",
"Conocer las debilidades de su equipo y hacer énfasis para que las superen",
"Tomar las decisiones por el equipo, pues finalmente, es el líder",
"Asumir toda la responsabilidad en los momentos críticos"],

["Durante su receso escolar, es contratado como recreador en un campamento vacacional. Usted se da cuenta de que uno de los jóvenes, Pedro, no quiere participar en actividades que requieran esfuerzo. Se queja de calambres estomacales justo antes de los eventos atléticos. Al observarlo atentamente, se da cuenta de que Pedro es tan torpe cuando juega que sus compañeros se burlan de él mientras que otros lo evitan. Usted decide:",
"ignorar el hecho. Puede dar más disgustos que beneficios.",
"Involucrarlo dándole tareas como llevar la puntuación en juegos.",
"Evaluar con él la situación para establecer un plan de mejora",
"Sugerirle que lea libros sobre juegos y reglas para aprender",
"obligarlo a que participe, ya que él debe aprender como jugar"],

["Los factores que intervienen en una comunicación eficiente son:",
"Falta de interés en el tema",
"La estructura lógica de la secuencia del hablante",
"Los estímulos del ambiente",
"La atención humana",
"Los órganos sensoriales del hombre"],

["Un joven quiere ser voluntario en una cárcel del país, y así ayudar con la rehabilitación de los prisioneros. El joven será un buen candidato si",
"NO tiene miedo de una prisión",
"viene de un hogar moralista",
"se rehabilita paralelamente",
"ayuda sin intereses",
"NO tiene prejuicios"],

["Regularmente usted prefiere asistir a reuniones donde:",
"El plan de trabajo está definido previamente",
"Se conoce el orden del día",
"Todos aportan y buscan soluciones",
"Los integrantes tienen compromisos concretos",
"Se conocen los resultados que se esperan"],

["Para aumentar las ventas en una empresa, se debe trabajar sobre aspectos como:",
"La atención al cliente",
"La publicidad de los productos",
"La repotenciación de maquinaria",
"La automatización de procesos",
"El acceso por página web"],

["En orden de importancia tienen derecho a protección los niños que son:",
"Utilizados por grupos armados",
"Explotados sexualmente",
"Explotados económicamente por sus padres",
"Abandonados física, social y emocionalmente",
"Expuestos a sustancias psicoactivas"],

["Son deberes de todo ciudadano:",
"Respetar los derechos ajenos y no abusar de los propios",
"Respetar a las autoridades",
"Proteger los recursos naturales",
"Obrar según el principio de solidaridad",
"Propender por la paz"],

["Se presenta una dificultad en su empresa y es necesario que uno de los integrantes de su equipo ayude en la solución, es día viernes y todos han trabajado las mismas horas, usted cree que debe quedarse",
"El que más sabe del área",
"ninguno ya que todos cumplieron con la jornada",
"todos ya que podrían terminar más rápido",
"usted por ser el líder del equipo",
"Entre todos deciden quien se queda"],
];

} else if(asignado == 2){
	questions = [["Un león africano tiene como habitat la selva y como nicho un ecosistema de sabanas y pastizales secos, es carnívoro, vive en manadas o sólo y defiende su territorio. Por lo tanto, un ecosistema o nicho se define como el/la",
"casa donde se encuentran muchos microorganismos",
"lugar donde más le gusta estar a un microorganismo",
"papel que desempeña un organismo en un ámbito.",
"espacio donde come y vive un organismo",
"función de las plantas para producir alimentos"],

["Liliana tiene sobrepeso; su doctor le ha recomendado hacer dieta para evitar otros problemas de salud, pero ella insiste en comer dulces, postres y golosinas. Liliana debería",
"Evitar caminar cerca de las pastelerías o ir al supermercado",
"pedir al médico algún medicamento que inhiba su apetito",
"intentar llevar dietas menos estrictas, aunque menos efectivas",
"ignorar las recomendaciones médicas, es imposible seguirlas",
"reconocer su debilidad y pedirle ayuda a un experto en ese caso"],

["La contaminación ambiental en el planeta cada día se torna más preocupante porque afecta entre otras cosas, la biodiversidad de las especies. Esta situación es responsabilidad de:",
"Los seres humanos en general, porque a partir de acciones protectoras individuales, generan cambio",
"Las autoridades competentes, pues deben velar por la prevención de la contaminación en el planeta",
"Las organizaciones mundiales ambientales porque su finalidad es defender los ecosistemas.",
"Los profesores de la enseñanza básica porque desde la infancia hay que promover el cuidado del ambiente",
"El gobierno porque deben administrar óptimamente los recursos para proteger el ambiente"],

["Si un compañero le dice que vote por un amigo que quiere ser monitor, usted",
"Compara propuestas y toma su propia decisión",
"Acepta las sugerencias de su amigo porque lo aprecia",
"Responde que votará por el que le convence.",
"Sustenta con evidencias",
"Escucha sus comentarios pero no hace nada al respecto"],

["Cuando usted se encuentra inconforme con el resultado de un examen prefiere:",
"Pierde el examen sin decir nada",
"Esperar el momento para conversar con el profesor",
"Buscar apoyo en sus compañeros y reclamar abiertamente",
"Acudir al director del colegio y buscar una solución",
"Comparar los resultados con los de sus compañeros y manifestar la inconsistencia"],

["Cuando se adquiere la responsabilidad de tramitar solicitudes ante las directivas de cualquier establecimiento, la forma correcta de hacerlo es",
"enviarlas por correo directo a las cabezas visibles",
"entregar las cartas a la mayor cantidad de gente",
"pedirle a alguien que sepa redactar que lo haga",
"usar las tecnologías disponibles para esta tarea",
"entregar la información a las personas indicadas"],

["La entidad en la que usted se encuentra les informa que hay un virus que se está expandiendo por sus computadores, usted decide",
"no volver a encender su computador y trabajar desde la casa",
"confiar en que las vacunas van a prevenir que su equipo se infecte",
"tener en cuenta las medidas de seguridad, como no abrir correos extraños",
"evitar que algún compañero o extraño use esos computadores",
"no preocuparse porque para eso lo equipos tienen antivirus"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Diseñar programación de metas por área",
"Delimitar proyectos por departamentos",
"Indagar la satisfacción de los empleados",
"Evaluar la calidad del producto",
"Evaluar la calidad del recurso suministrado"],

["El orden para preparar una exposición es:",
"Leer y comprender la totalidad del tema",
"Planear un cronograma de entrega",
"Definir los componentes más importantes del tema",
"Investigar en diferentes fuentes de información el tema",
"Dividir el tema de trabajo entre el grupo"],

["Un estudiante responsable es aquel que atiende en primer lugar",
"Los trabajos y tareas del día siguiente",
"La entrega de trabajos según sea el nivel de exigencia del profesor",
"La planeación de actividades desarrolladas con antelación",
"Los compromisos y acuerdos asumidos previamente",
"Las responsabilidades académicas urgentes que no dan espera."],
];
} else if(asignado == 3){
	questions = [["Las juntas de acción comunal que se organizan en el Barrio tiene como objetivo solucionar las necesidades más sentidas, aprovechando los recursos disponibles para lograr el bienestar general de su comunidad, por lo anterior, usted considera que un miembro de esta junta debe caracterizarse principalmente por:",
"Saber escuchar las ideas de los demás",
"Conseguir recursos que beneficien a la comunidad",
"Establecer planes de trabajo para cumplir las metas",
"Manejar bien la información que recibe",
"Crear constantemente propuestas de mejora"],

["Usualmente se piensa que un equipo de alto rendimiento se caracteriza por:",
"Contar con las herramientas propicias de automatización de los miembros",
"Reconocer los obstáculos en los canales de comunicación dentro del equipo",
"Tener objetivos comunes y bien estructurados",
"Trabajar de forma colaborativa y sincrónicamente",
"Compensar y equilibrar los puntos débiles de cada integrante"],

["Marcos ha recibido tres propuestas laborales: A. Un trabajo bien remunerado ubicado en una zona con serios problemas de orden público; B. En su ciudad, con transporte y almuerzo a bajo costo; y C. Buena remuneración con retos interesantes, pero la empresa está a una hora se su ciudad. Para tomar la decisión Marcos debe",
"Elegir la de mayor remuneración, el dinero es lo más importante, sobre todo ahora que está empezando.",
"lanzar el tarot como le propone su tía Julia y a partir de allí, tomar la mejor decisión, la que ofrezcan las cartas",
"escoger la empresa que más cerca queda de su casa, la comodidad y la calidad de vida son lo primero",
"establecer un argumento para cada opción y definir la más oportuna actuando decididamente.",
"consultar con sus padres, ellos sabrán decirle qué hacer, tienen más experiencia, él es todavía muy joven"],

["Se dice que las primeras células simples se desarrollaron en sitios de actividad volcánica con unas características como la temperatura extrema, llamándose microorganismos termófilos. De lo anterior se concluye que estos crecen a una temperatura en grados centígrados de",
"45°C",
"30°C",
"15°C",
"20°C",
"5°C"],

["Su equipo preferido juega contra el rival de turno y al finalizar el primer tiempo va perdiendo. Si Usted pudiera hacer sugerencias propone que se",
"Reorientare las acciones para atacar al equipo rival",
"Hacer cambios estratégicos en la formación del equipo",
"Analizar las debilidades del otro equipo para mejorar el ataque",
"Reorganizar a los jugadores que tiene en la cancha",
"Presionar a los jugadores psicológicamente para que mejoren"],

["Sale de vacaciones con su familia y llevan dos vehículos, uno de los carros sufre un daño en el motor irreparable, la ciudad más cercana está a 4 horas; son las 7 p.m. y en el lugar no se tiene señal telefónica, el sitio es inhóspito. Lo mejor que se puede hacer sería:",
"Que todos se queden disfrutando el lugar, hasta el otro día",
"Salir y buscar el mecánico que está a 4 horas del lugar",
"Que todos intenten caber en un solo vehículo",
"Quedarse en el lugar hasta el día siguiente",
"El carro que funcione viaje a buscar ayuda, y regrese por los demás"],

["Los Wayuu, etnia propia de la Guajira, son una población que se caracteriza por la yonna, vestuario colorido, artesanías, lengua, etc., sin embargo, esto está siendo modificado por la influencia de la gente de las ciudades. Ante esta situación, y para evitar la aculturación de los Wayuu, usted considera que es necesario que el gobierno implemente",
"planes a través de los cuales se desarrollen talleres de arte",
"programas que impiden la producción de mercancías",
"programas que contengan eventos culturales propios",
"programas que motiven la conservación de sus costumbres",
"planes que fortalezcan el uso de la lengua Wayuunaki"],

["Al salir a la vida productiva, un estudiante tiene dos alternativas: buscar un trabajo que le brinde estabilidad laboral y económica o empezar a generar un proyecto que le permita crear empresa. Existen organizaciones que desarrollan las ideas de negocios con préstamos condonables, con el propósito de que usted",
"genere empleo para contribuir con el desarrollo del país",
"genere riqueza, para disfrutarla con la familia",
"busque un motivo para mantenerse ocupado",
"compita con las empresas que presten el mismo servicio",
"logre un paso necesario para progresar y ser autónomo"],

["Marcos sabe que para lograr los objetivos programados en su equipo de trabajo, debe comunicarse eficazmente y llegar a acuerdos con los integrantes, esto implicará que:",
"El número de integrantes participen en su totalidad",
"Confianza y respeto entre los integrantes del equipo",
"Promoción de comunicación clara evitando rumores",
"Las discusiones sean abiertas e interactivas para todos",
"Cada miembro entienda los roles de los demás"],

["Para crear un ambiente agradable y armónico para todos y cada uno de los habitantes de la Unidad Residencial considera importante:",
"Convocar a reuniones sociales",
"Reglamentar el ingreso de mascotas",
"Registrar el acceso de visitantes",
"Controlar la bitácora del sistema de seguridad",
"Prohibir que hablen en voz alta"],

];

} else if(asignado == 4){
	questions = [[`"La queja es una declaración relativa a las expectativas que no han sido satisfechas, pero además, es una oportunidad para que una organización pueda satisfacer a un cliente insatisfecho, bien para mejorar el servicio o rectificar el fallo de un producto". Es decir, la queja es:`,
"una oportunidad de hacer las cosas mejor",
"un protocolo más que se debe implementar",
"una mejor manera de hacer el trabajo",
"una insatisfacción más que se debe mejorar",
"un regalo que el cliente ofrece a la empresa"],

["Las juntas de acción comunal que se organizan en el Barrio tiene como objetivo solucionar las necesidades más sentidas, aprovechando los recursos disponibles para lograr el bienestar general de su comunidad, por lo anterior usted considera que un miembro de esta junta debe caracterizarse principalmente por:",
"Crear constantemente propuestas de mejora",
"Saber escuchar las ideas de los demás",
"Establecer planes de trabajo para cumplir las metas",
"Manejar bien la información que recibe",
"Conseguir recursos que beneficien a la comunidad"],

["La efectividad de un grupo de trabajo depende principalmente de la ",
"Toma de decisiones",
"Información que se defina",
"Solución de problemas",
"Confianza que genere el líder",
"Definición de las tareas"],

["Para lograr entregar vivienda gratis a los más pobres del país, es necesario que:",
"Se prepare con anterioridad el método de trabajo",
"Se estructure un plan nacional de trabajo",
"Exista un trabajo en red con varias empresas",
"Las empresas más importantes del país donen recursos",
"Todos los ciudadanos trabajen unidos"],

["Frente a su casa se ha evidenciado un hueco que está hundiendo su residencia, su reacción es:",
"Diseñar un plan de arreglo que comprometa a la comunidad",
"Indagar con las entidades el hecho y buscar solución",
"Hacer una cotización para arreglar el daño",
"Convocar a sus vecinos para buscar ayuda",
"Llamar a los bomberos y acueducto"],

["El goce de los derechos de un ciudadano se suspenden por",
"Ser ebrio por costumbre",
"Deudores fallidos",
"Naturalizarse en país extranjero",
"Enajenación mental",
"Deuda de plazo cumplido"],

["Usted es coordinador del campeonato de natación nacional y tiene como objetivo, lograr que su equipo sea considerado de alto rendimiento, para ello usted piensa que este debe:",
"Definir la responsabilidad de cada integrante",
"Delimitar los criterios de desempeño individual y grupal",
"Cooperar y colaborar con un alto grado de confianza",
"Estar orientado hacia los resultados",
"Tener una comprensión clara de los objetivos"],

["Un familiar cercano le dice que estudie lo mismo que él, pues esa profesión da dinero. Usted",
"se asesora con alguien con más conocimientos en el tema",
"la escoge porque sabe que después podrá adaptarse o aprender",
"identifica sus metas y analiza si se cumplen con esa carrera",
"toma esa carrera como proyecto de vida y se propone hacerla",
"decide estudiar lo que le gusta aunque sepa que no es tan lucrativo"],

["Para lograr que las personas respeten las filas en los paraderos del transporte público, se debe proponer",
"enviar circulares con ideas a las juntas de acción local",
"iniciar una campaña para sensibilizar a los pasajeros",
"Disponer de paraderos cómodos y agradables al usuario",
"señalizar tanto buses como paraderos con normas",
"tener vigías en los paraderos enseñando el civismo"],

["En una reunión de re-encuentro con los compañeros de promoción escuché los logros de muchos de ellos en el trabajo y vida familiar, como también algunos fracasos como el mío. El balance al final de la jornada de escuchar casos exitosos, es que en la vida es necesario...",
"acomodarse con la vida que a uno le tocó vivir para evitar sufrir viendo los logros de los demás",
"tener quien lo apoye y los recursos necesarios para costear las necesidades",
"conseguir con esfuerzo la forma de llegar a lo que uno siempre ha soñado, sin importar que hacer",
"reconocer las debilidades, potencialidades, condiciones del medio y aprovechándolas al máximo",
"tener una profesión para ser importante, con futuro y ganar mucho dinero"],

];

} else if(asignado == 5){

	questions = [[`Un dicho popular expresa que "la Escuela es el segundo hogar". De esta frase se infiere que la escuela es:`,
"El espacio educativo donde las personas aprendan lo que no alcanzan a aprender en la casa",
"Un hogar sustituto en el que muchas veces encuentran el apoyo moral y motivacional que no tiene en la casa",
"Un espacio en el que se fortalecen conocimientos, valores y vivencias humanas",
"Una segunda familia, en la que existen maestros y amigos que son como padres y hermanos",
"Un espacio esencial que perfecciona la formación humana que se recibe en la familia"],

["La factura de teléfono le ha llegado por un valor que no fue lo que se consumió, frente a esto usted:",
"Pide orientación a los vecinos más cercanos",
"Indaga en su barrio si hay más personas con esta situación",
"Presenta una queja ante la empresa de telefonía",
"Comunica de esta situación a su familia",
"Paga porque no pretende perder tiempo"],

["Una noche, usted ve a unos niños jugando en un sitio donde hay maquinaria de construcción sin vigilancia. Usted decide:",
"llamar a la policía, presentar cargos y culpar a los responsables",
"vigilarlos mientras están allí y asistirlos en caso de accidente",
"esperar a que los padres los recojan, pues NO son sus hijos",
"decirles que se alejen, pues es un lugar peligroso para jugar",
"buscar a los padres de estos niños y exigirles responsabilidad"],

["Usted hace parte de la organización de una fiesta para su grupo, pero se presenta un inconveniente con el salón reservado inicialmente. Su actitud consiste en",
"respetar lo que decida el resto y seguir con las responsabilidades asumidas inicialmente",
"actuar rápidamente y sugerir otra fecha para poder disfrutar del mismo escenario",
"dedicarse a buscar salones similares para llevar diferentes opciones al grupo",
"planear las acciones en conjunto con los otros y solucionarlo de manera colectiva",
"responsabilizar al encargado de dicha reserva y sugerir que respondan por el tema"],

["Alejandra desea invertir sus ahorros en algún negocio que le de mayor rentabilidad que la que le da su cuenta de ahorros, lo que Alejandra debe saber para tomar una decisión es:",
"evaluar costos de inversión y operativos de cada alternativa",
"observar los factores de riesgo y las oportunidades de cada alternativa",
"prever la ganancia neta que cada alternativa ofrece",
"consultar la normatividad vigente y las condiciones legales de cada alternativa",
"calcular la cantidad de dinero que cada estrategia le ofrece"],

["María, Jorge y Pedro son amigos, en una reunión Jorge y Pedro entran en una discusión, se agreden física y verbalmente. Como mediadora María debe",
"Manifestar que el diálogo es la mejor solución",
"Favorecer a Jorge porque según ella Pedro siempre está irritable y tosco",
"Evitar intervenir pues ellos pueden solucionar solos el inconveniente",
"Indagar punto medio entre las opiniones de los amigos",
"Buscar la intervención de un individuo con mayor autoridad para la solución del conflicto"],

["Su vecino ha decidido cortar los árboles que están frente a su casa, ante esto lo mejor es:",
"Ignora la situación pues no le compromete significativamente",
"Habla con sus vecinos de esta situación",
"Siembra más arboles",
"Realiza una campaña de siembra entre los vecinos",
"Le denuncia por violar la tala de los árboles"],

[`Si a un compañero lo describen como "persona con habilidades para las relaciones humanas", es probable que esta persona`,
"usualmente está feliz, tiene muchos amigos y NO tiene problemas",
"identifica las fortalezas en los demás y construye nuevas relaciones",
"ayuda a otras personas a descubrir sus antepasados y a liberarse",
"puede persuadir a los otros para que hagan las cosas a su manera",
"reconoce los problemas interpersonales y busca vías para resolverlos"],

["En una comunidad, se debe garantizar  que se cumplan las normas, esto se logra sí se",
"Desarrollan campañas de promoción",
"Planea y dirige una jornada pedagógica",
"Recogen los datos de los usuarios",
"Organiza un equipo interno de trabajo",
"Construye material audiovisual de difusión"],

["El estándar que describe los resultados que un trabajador debe lograr en su desempeño se denomina",
"desempeño laboral",
"norma de competencia laboral",
"idoneidad al cargo",
"cargo",
"puesto de trabajo"],

];
} else if(asignado == 6){
	questions = [[`"Si una persona se traza metas y las alcanza tendrá más confianza y por ende, desarrollará competencias de emprendedor". Según este enunciado, lo mejor es`,
"requerir de tiempo, es el mayor aliado para conseguir lo que se quiere",
"cumplir las metas ya que es la única posibilidad de alcanzar nuestros logros",
"reflexionar que las metas sean medibles y cuantificables en el tiempo",
"crear confianza en sí mismo para obtener lo anhelado",
"pensar que de las limitaciones se construyen ideas maravillosas"],

["Mario participa en un proceso de selección para un concurso de la alcaldía, al finalizar el proceso le comunican que no fue aceptado, frente a esta situación él debe:",
"Pelear hasta lograr lo que quiere",
"Restar importancia y esperar una próxima oportunidad",
"Buscar amigos influyentes para que le ayuden",
"Pelear con sus familiares por lo sucedido",
"Analizar su condición y evaluar más alternativas"],

["Un trabajador ha sido escogido como el empleado del mes por su eficacia en circunstancias específicas del trabajo. Esto demuestra que el empleado tiene que",
"ampliar su capacidad laboral para sostenerse como el mejor",
"competir y ganarle a sus compañeros como sea",
"tener las competencias que lo hacen ser una persona íntegra",
"saber el día que lo van a evaluar para portarse muy bien",
"ampliar sus esfuerzos de forma específica"],

["Los procesos interpersonales se refieren, principalmente, al tipo de relación que se establece entre los sujetos de un grupo que busca alcanzar metas. Para que César, vendedor de motos en una multinacional, se integre necesita",
"conocer bien la empresa, en especial, jefes y clientes",
"ver la competitividad como parte del trabajo en grupo",
"establecer metas personales, del grupo y la empresa",
"conocer las técnicas de publicidad y ventas de la empresa",
"tener claro cuánto debe vender y cómo serán los sueldos"],

["A un joven de color se le niega la entrada a un club donde usted se encuentra, su actuación es:",
"Dejar que se aclare la situación entre ellos",
"Llamar a la policía para no dejar que se violen sus derechos",
"Denunciar ante diferentes entes esta situación",
"Espera que él se defienda con argumentos sólidos",
"Argumentar que no es posible discriminar a ningún individuo por ley"],

["En su opinión: generalmente, la principal razón por la que un joven tiene prejuicios raciales es por:",
"Los programas de televisión que ve",
"El medio ambiente",
"Sus compañeros",
"Sus hermanos",
"Sus padres"],

["Juan necesita mejorar su rendimiento académico, para ello está buscando la mejor estrategia de trabajo, usted que evidencia muy buenos resultados académicos le sugeriría que:",
"Preparar los exámenes con anterioridad",
"Subraye las lecturas que realiza para cada clase",
"Dibuje un mapa mental por cada clase y material",
"Toma apuntes de cada sesión",
"Diseñe un cronograma de estudio para cada materia"],

["Durante una marcha pacífica en la que usted participa, se han presentado saqueos en algunos almacenes, la policía ha solicitado ayuda para identificar a los responsables de este hecho, usted:",
"Trata de persuadir a los que conoce para que se entreguen.",
"Se presenta a la policía e intenta ayudar",
"Busca a los responsables y los entrega",
"Ignora la solicitud de la policía",
"Pide recompensa por su ayuda"],

["La reproducción es un proceso que permite la creación de organismos, por ejemplo, los seres humanos con sus hijos y las plantas. Estos tipos de reproducción reciben el nombre de",
"sexual, asexual, mitosis",
"celular, mitosis",
"asexual, sexual",
"meiosis, asexual",
"mitosis, meiosis, sexual"],

["Los amigos de Sara afirman que ella de veintidós años está confundida porque ha iniciado tres carreras diferentes sin terminar, no dura en los puestos que consigue y ahora entró en crisis porque su novio le ha pedido conformar una familia. Sara debe",
"organizarse con su novio y conformar una familia, es lo mejor que puede hacer una mujer",
"tomarse su tiempo para reflexionar sobre lo que quiere y desarrollar su proyecto de vida",
"retomar la carrera que más le gustó de las que habia iniciado, el estudio garantiza el futuro",
"prestarle atención a lo que opinan sus amigos y seguir los consejos de ellos demostrando su madurez",
"hacer pruebas de orientación vocacional y encaminarse según los resultados que obtenga"],

];

} else if(asignado == 7){
	questions = [[`El concepto de libre desarrollo de la personalidad abarca`,
"Aprender a conocer a los integrantes",
"Aumentar la creatividad",
"Disminuir la productividad",
"Clarificar las ideas",
"Cambiar situaciones molestas"],

["Al conocer el caso de unos niños en situación de abandono por sus padres, usted debe informar a:",
"Junta de acción comunal",
"Otros familiares del niño",
"Policía Nacional",
"Bienestar familiar",
"Comunidad más cercana"],

["Usted está encargado de coordinar la logística de un evento para el cual no cuenta con los recursos necesarios. Frente a esto decide:",
"Llamar a los proveedores que puedan brindarle los materiales requeridos",
"Ubicar fuentes alternativas para conseguir los recursos no disponibles",
"Realizar el evento con los pocos recursos con los que se cuenta",
"Hace sólo lo que esté en sus manos",
"Solicitar la ayuda de personas idóneas para cumplir con esta labor"],

["Le interesa ser director del periódico escolar y para eso:",
"Busca ser elegido escribiendo un artículo sobre un tema que atraiga a la mayoría",
"Manifiesta sus ideas y puntos de vista de forma que los otros le comprendan.",
"Se hace amigo de los de grado once, quienes manejan todo el colegio",
"Defiende sus propuestas para el periódico enlodando la gestión anterior",
"Propone cambios que a los demás les convienen aunque sepa que no son realizables"],

["Usted va en representación de su colegio a unas olimpiadas. Estando allí, debe hacer grupos con estudiantes de otras instituciones, la mejor actitud es:",
"interactuar con ellos aunque no los conozca, y resolver la tarea",
"pedir a los organizadores que lo dejen hacer el trabajo individual",
"buscar algún conocido para no sentirse solo en el nuevo grupo",
"estrechar relaciones porque conocer más gente le puede ser útil",
"se integra con el nuevo grupo de compañeros y trata de caer bien"],

["Cristhian es un joven adolescente que tiene algunos problemas con su rendimiento académico, si usted fuera compañero de curso, le aconsejaría.",
"Hacer una lista de temas que no entiende para resolver",
"Hacer mapas mentales con colores para sus lecturas",
"Tomar apuntes de manera que sean útiles para él",
"Formular un plan de estudio que pueda cumplir",
"Organizar el tiempo con horarios fijos"],

["En su opinión, el problema más difícil para superar en un equipo de trabajo es:",
"Falta de reconocimiento de parte de los líderes",
"Clima inadecuado o falta de unidad",
"Desconocimiento de los objetivos y metas",
"Falta o falla en el liderazgo",
"Comunicación sobrevalorada"],

["Me gusta trabajar con personas que:",
"Valoren y recompensen el esfuerzo del grupo",
"Sean innovadores, progresistas y creativos",
"Persigan los máximos resultados en su labor",
"Se responsabilicen de sus decisiones y resultados",
"Asumen riesgo y retos"],

["Una persona con espíritu emprendedor se reconoce por",
"ser competente manejando el dinero",
"estar dispuesto a ayudar a los demás",
"buscar un bien común, NO el particular",
"su iniciativa y capacidad para liderar",
"ser persistente en el logro de metas"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Delimitar proyectos por departamentos",
"Evaluar la calidad del producto",
"Evaluar la calidad del recurso suministrado",
"Indagar la satisfacción de los empleados",
"Diseñar programación de metas por área"],

];

} else if(asignado==8){
	questions = [[`En su opinión, una buena estrategia para educar al público en general es:`,
"La publicación de medios electrónicos",
"Diseñar incentivos como medio de acompañamiento",
"La utilización de la comedia como medio de divulgación",
"La interacción directa con las personas",
"La entrega de ayudas cada vez más lúdicas"],

["Usted fue delegado como facilitador en una reunión importante para la empresa donde trabaja, su responsabilidad es:",
"Observar la reunión y las actitudes de los participantes",
"Proveer retroinformación al equipo sobre fortalezas y debilidades del proceso",
"Esperar que alguien solicite su intervención",
"Dar recomendaciones para mejorar la reunión",
"Intervenir en momento de desacuerdo"],

["Su vecino desde hace más de tres semanas está haciendo fiestas nocturnas en la casa, lo cual está afectando el sueño de toda su familia, frente a esta situación lo mejor es:",
"Llamar a la Policía",
"Comunicar a la junta de acción comunal",
"Esperar a que esta situación pase",
"Hablar con su vecino de esta situación",
"Buscar apoyo de sus vecinos para denunciar"],

["Para lograr que una maqueta se destaque en una exposición necesitaría principalmente",
"Realizar un diseño estructural vanguardista",
"Responder a las necesidades de la gente",
"Incluir movimientos electrónicos a las puertas",
"Cumplir con los parámetros requeridos",
"Utilizar materiales de calidad y elegancia"],

["Para disminuir los robos en un barrio, lo mejor es:",
"rotar la vigilancia cada semana por sector del barrio",
"solicitar al alcalde un sistema de monitoreo para el barrio",
"Formar equipos de control por cuadras con los habitantes",
"delegar este trabajo para el líder de la comunidad",
"tener un sistema de comunicación digital con la policía"],

["El banano es considerado un alimento energético ya que nos proporciona una dosis extra de vitalidad. De acuerdo con lo anterior el alimento energético",
"aporta felicidad",
"aporta las calorías",
"engorda",
"aporta bienestar",
"nutre"],

["Gonzalo es coordinador de un área. Ha notado distanciamiento entre él y las personas que son parte de su equipo por lo que se ha propuesto mejorar su relación interpersonal, sin bajar el rendimiento del equipo. Para lograr este objetivo, él debe",
"invitar a los trabajadores a hacer alguna actividad por fuera de la oficina",
"pegar afiches y enviar correos a los trabajadores sobre el trabajo en equipo",
"proponer una lluvia de ideas sobre actividades de integración para cada mes",
"mantener la distancia porque el jefe debe ser serio con los empleados",
"hablar con sus subalternos y decirles que lo vean como un amigo"],

["Como representante de un equipo deportivo, considera que una reunión efectiva debe caracterizarse por:",
"Identificar tanto el resultado ideal como el mínimo",
"Definir claramente el objetivo",
"Asignar tiempos para su desarrollo",
"Definir la agenda a cubrir",
"Identificar quien debe asistir"],

["Durante una discusión usted:",
"Busca soluciones eficaces",
"Propone actividades de reflexión",
"Determina las causas del conflicto",
"Observa la conducta de lo demás y toma nota",
"Analiza la problemática"],

["Una manera de exigir empleo digno para usted es",
"Conversar con las personas responsables del tema",
"Hacer una protesta simbólica que represente su necesidad",
"Buscar la intervención de otras entidades",
"Desarrollar una propuesta de inversión novedosa",
"Convocar a la comunidad a una marcha nacional"],

];

} else if(asignado==9){
	questions = [[`Marcos sabe que para lograr los objetivos programados de su equipo de trabajo, debe comunicarse eficazmente y llegar a acuerdos con los integrantes, esto implicará que:`,
"Cada miembro entienda los roles de los demás",
"Promoción de comunicación clara evitando rumores",
"Las discusiones sean abiertas e interactivas para todos",
"El número de integrantes participen en su totalidad",
"confianza y respeto entre los integrantes del equipo"],

["Los estudiantes exitosos son aquellos que diseñan estrategias que le permitan fortalecer sus debilidades para tener un excelente desempeño en el aula de clase. Ellos identifican sus debilidades a través de:",
"Autorregulación de su aprendizaje",
"Resultado de sus notas",
"Autoevaluación del desempeño",
"Monitoreo de las clases",
"Evaluación por parte del docente"],

["Usualmente se piensa que un equipo de alto rendimiento se caracteriza por",
"Compensar y equilibrar los puntos débiles de cada integrante",
"Tener objetivos comunes y bien estructurados",
"Trabajar de forma colaborativa y sincrónicamente",
"Reconocer los obstaculos en los canales de comunicación dentro del equipo",
"Contar con las herramientas propicias de automatización de los miembros"],

["Si fuera contratado para mejorar la eficiencia de una empresa, lo mejor es iniciar por:",
"Indagar la satisfacción de los empleados",
"Delimitar proyectos por departamentos",
"Evaluar la calidad del recurso suministrado",
"Evaluar la calidad del producto",
"Diseñar programación de metas por área"],

["Un tubo de agua se rompe y debe ser reparado aflojando una rosca que está muy apretada. La herramienta que se utiliza para realizar la tarea se llama:",
"boca fija",
"torque",
"abrazadera",
"alicates",
"hombre solo"],

["Frente a un conflicto familiar con sus padres usted cree que lo mejor es:",
"Describir la situación",
"Aclarar los temas",
"Tomar un tiempo para aclarar la situación",
"Esperar que las condiciones emocionales disminuyan",
"No permitir ataque personal"],

["Si observa que en una familia todos sus miembros consumen psicoactivos y esto incluye a un menor, usted:",
"Denuncia esta situación ante la policía",
"Informa a sus familiares más cercanos",
"Solicita asistencia de los vecinos",
"Notifica esta situación ante Bienestar Familiar",
"Espera que otros tomen la iniciativa"],

["En su barrio se están presentando inconvenientes con los vecinos a causa de las fiestas a altas horas de la noche. Usted:",
"Establece con los vecinos un plan de acción",
"Informa a la policía la situación",
"Interactúa con los propietarios así no los conozca con el fin de negociar horarios de reuniones permitidos",
"Respeta los acuerdos establecidos por otros",
"Planea y organiza acciones que beneficien a la mayoria"],

["En vacaciones, usted tiene la oportunidad de trabajar en un almacén de calzado para niños. La mejor manera de hacer ventas significativas es:",
"ofrecer los zapatos más baratos y así lograr volumen",
"atender los clientes rápidamente para alcanzar más ventas",
"identificar las necesidades y expectativas de los clientes",
"hablar con padres de familia para detectar preferencias",
"capacitarse sobre las marcas y modelos de temporada"],

["Usted es responsable de liderar una reunión de trabajo, considera que lo más importante es",
"Redactar un corto resumen de la evaluación de la reunión",
"Preparar el saludo de bienvenida",
"Verificar las identificaciones y los materiales de la reunión como la agenda entre otros",
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

		const divisor = `<div class="divisor"><br><br><p>De selección múltiple con única respuesta, en este tipo de pregunta encuentra un enunciado para el cual se debe seleccionar una (1) de las opciones propuestas</p></div></center>`;

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

	questionsSecondPart = [["El gráfico muestra ampliaciones de una misma fotografía. Si se continúa con el mismo proceso de ampliación, la altura de la cuarta fotografía es:<br> <img src='images/test1/pregunta11.png' alt=''>",
"&nbsp 12",
"&nbsp 8",
"&nbsp 20",
"&nbsp 16",
"&nbsp 24"],

["Identifique el anuncio mal escrito",
`&nbsp "¡Comprelo, ganelo y disfrutelo!"`,
`&nbsp "Porque tu pasión merece más"`,
`&nbsp "Primer y único tópico disponible"`,
`&nbsp "Verte feliz, nos hace felices"`,
`&nbsp ¡Compra y sácala del estadio!`],

["Los altos índices de embarazos en adolescentes han generado un problema de salud pública, por lo costos que implica el cuidado de estos menores. Piensa usted que se debe:",
"&nbsp Divulgar los métodos de planificación para las parejas jóvenes",
"&nbsp Regalar preservativos a los jóvenes en los colegios",
"&nbsp Educar más a los jóvenes para que no pierdan muchas oportunidades en su vida",
"&nbsp Analizar las implicaciones y responsabilidad de la sexualidad y la reproducción en el aula",
"&nbsp Responsabilizar a los jóvenes de la sexualidad temprana"],

["El perro ladra y el gato",
"&nbsp ruge",
"&nbsp grazna",
"&nbsp canta",
"&nbsp grita",
"&nbsp maúlla"],

[`La expresión "Plumas Insignes" la palabra insignes hace referencia a:`,
"&nbsp Inmortal",
"&nbsp Medicares",
"&nbsp Notable",
"&nbsp Irrelevante",
"&nbsp Avasallante"],

["En Colombia el conflicto armado trae como consecuencia el desplazamiento forzoso masivo de la población. Al analizar esto, según los Derechos Humanos le corresponde realizar el proceso de reparación a:",
"&nbsp el estado",
"&nbsp el causante del desplazamiento",
"&nbsp la sociedad",
"&nbsp ellos mismos",
"&nbsp sus familiares"],

["A un pabellón de la feria del libro ingresaron 56 personas en dos horas; si ingresaron 4 mujeres por cada 3 hombres, entonces, el número de mujeres que asistieron, corresponden a:",
"&nbsp 44",
"&nbsp 56",
"&nbsp 32",
"&nbsp 55",
"&nbsp 8"],

["Si se tiene la medida angular que es igual a 43 grados; el complemento de dicho ángulo es:",
"&nbsp 100",
"&nbsp 47",
"&nbsp 43",
"&nbsp 80",
"&nbsp 90"],

["José Luis tiene una bolsa con 39 pelotas de tres colores: amarillo, azul y rojo. Si las azules son la octava parte de las rojas y las amarillas son su mitad, entonces, la cantidad de pelotas amarillas son:",
"&nbsp 19",
"&nbsp 71",
"&nbsp 20",
"&nbsp 12",
"&nbsp 13"],

["Se tiene la siguiente suma de decimales: 0,1 + 0,3 + 0,16 + 0,24; si el resultado tiene que ser 10; el número que debe adicionarse es:",
"&nbsp 9,4",
"&nbsp 9,3",
"&nbsp 9,5",
"&nbsp 9,2",
"&nbsp 9,6"],
];

theway = [0,1,2,3,4,5,0,1,4,3,5,2,0,4,2,1,3,5,0,5,2,3,1,4,0,2,5,4,3,1,0,4,3,1,2,5,0,2,1,5,4,3,0,2,1,4,5,3,0,1,3,5,2,4,0,4,5,2,1,3,0,4,1,4,5,3,1,3,2,4,4,0];

} else if(asignado == 2){

	questionsSecondPart = [["Siguiendo las gráficas que no están marcadas con letras, debe identificar entre las 5 figuras que se designan con las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test2/pregunta11.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Siguiendo las gráficas que no están marcadas con letras, debe identificar entre las 5 figuras que se designan con las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test2/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["De las siguientes series de palabras, una carece de orden alfabético. Selecciónela",
"&nbsp Calzado, Campestre, Canónigo, Castrado",
"&nbsp Barato, licor, manso, costumbre",
"&nbsp Abatir, abanico, astronauta, avispa",
"&nbsp Aclamar, andar, enumerar, estorbar",
"&nbsp Lago, león, listo, luna, lupanar"],

["De las siguientes imágenes señale la que es diferente<br> <img src='images/test2/pregunta14.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

[`De las siguientes imágenes señale la que es diferente<br> <img src='images/test2/pregunta15.png' alt=''>`,
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Señale la palabra que no guarda relación con las demás, tanto por su semejanza etimológica como por su forma, o porque no pertenece a la misma categoría",
"&nbsp Unir",
"&nbsp Agregar",
"&nbsp Adjuntar",
"&nbsp Desligar",
"&nbsp Anexar"],

["Katherine es una profesional de Ingeniería Ambiental, egresada de la universidad de la Guajira. Actualmente, está realizando un estudio de impacto ambiental en una zona de explotación minera para el montaje de una empresa. Éste reflejó que el impacto es negativo y ante este suceso la alternativa que se propone es:",
"&nbsp Establecer un dialogo con los miembros de la comunidad para que ellos presionen",
"&nbsp la construcción del proyecto con los permisos, excepto la licencia ambiental",
"&nbsp anunciar que el proyecto no es viable porque el impacto es irreversible",
"&nbsp que el dueño del proyecto proporcione dinero a toda la comunidad",
"&nbsp un plan de mejoramiento ambiental antes de empezar el proyecto"],

["El índice de suicidios en niños y jóvenes en nuestro país ha aumentado alarmantemente, los padres de familia deberían:",
"&nbsp Dejar de dar regalos a sus hijos y preocuparse más por ellos",
"&nbsp Acompañar más a sus hijos y escucharlos para orientar sus problemas",
"&nbsp Controlar las amistades y relaciones que tienen sus hijos",
"&nbsp Trabajar menos y estar más pendientes de sus hijos",
"&nbsp Pedir ayuda a un profesional que pueda manejar la situación"],

[`En la frase "si identifica la idea central de cada párrafo cuando lee, ahorrará tiempo y esfuerzo", se puede concluir que:`,
"&nbsp Las ideas secundarias esclarecen la idea principal",
"&nbsp Hacer resúmenes facilita entender lo leído",
"&nbsp Las ideas principales explican la idea que se quiere expresar",
"&nbsp Los párrafos están formados por oraciones",
"&nbsp Es importante identificar el sujeto y mensaje de cada oración"],

["De las siguientes imágenes señale la que es diferente:<br> <img src='images/test2/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],
];

theway = [0,2,3,4,1,5,0,2,3,4,5,1,0,1,4,5,2,3,0,1,4,3,2,5,0,5,1,3,4,2,0,2,5,4,3,1,0,5,4,1,2,3,0,2,3,1,5,4,0,1,4,3,5,2,0,4,5,1,2,3,0,2,3,2,3,4,4,5,2,3,4,0];


} else if(asignado == 3){

	questionsSecondPart = [["A continuación se presenta un modelo o patrón que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test3/pregunta11.png' alt=''>",
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

["Este ejercicio muestra un bloque de ladrillos, en grupos de igual tamaño e igual forma. Uno de estos ladrillos está marcado con una X, usted debe elegir entre las alternativas, aquella que corresponda al número de ladrillos que toca con alguna de sus caras al ladrillo marcado con la X:<br> <img src='images/test3/pregunta15.png' alt=''>",
"&nbsp 8",
"&nbsp 3",
"&nbsp 7",
"&nbsp 9",
"&nbsp 6"],

[`A continuación, usted encontrará cinco pasos numerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opción que dé un orden lógico de los eventos.<br>
	<ol>
		\t<li>Se reduce significativamente una cosecha</li>
		\t<li>Son llamados los arqueólogos</li>
		\t<li>Un grajero ara su campo</li>
		\t<li>Se descubre una reliquia</li>
		\t<li>Un campo se declara histórico</li>
	</ol>
`,
"&nbsp 1-4-2-3-5",
"&nbsp 1-2-3-4-5",
"&nbsp 3-4-2-1-5",
"&nbsp 3-4-2-5-1",
"&nbsp 1-2-4-3-5"],

["A continuación encontrará Series de cuatro palabras enumeradas. Señale la Opción en la que aparecen Ordenadas de forma correcta. Tapar=1, tapón=2, tapiz=3, taponar=4",
"&nbsp 1 3 4 2",
"&nbsp 2 4 3 1",
"&nbsp 4 2 1 3",
"&nbsp 3 1 4 2",
"&nbsp 1 3 2 4"],

["Seleccione la opción que tiene; una T, una S, un 3 y un 8.",
"&nbsp 2 T 81 7 S A Z 3 D F 5",
"&nbsp 8, E, S, R, T, E, 5, 2, 6, L",
"&nbsp 9 8 6 7 C U R T 2 S 4 0",
"&nbsp 1 R 3 T 5 P 7 M O S 6 9",
"&nbsp S T A R 4 6 8 P U 9 N 2"],

["La contaminación del aire en ciudades como México, Santiago y Bogotá han deteriorado la salud de muchos de sus habitantes. En Bogotá se han impuesto medidas para contrarrestar dicho impacto. Está de acuerdo con:",
"&nbsp Reducción de emisión de gases",
"&nbsp Transporte hasta las 11 p.m. en transmilenio",
"&nbsp La medida del pico y placa",
"&nbsp Sanciones a las empresas que contaminen",
"&nbsp Comparendos a los infractores"],

["Lo contrario de soberbio es",
"&nbsp sumiso",
"&nbsp paciente",
"&nbsp humilde",
"&nbsp calmado",
"&nbsp tímido"],

];

theway = [0,3,1,2,5,4,0,5,4,1,2,3,0,3,5,2,1,4,0,1,2,4,3,5,0,2,3,1,4,5,0,3,5,2,4,1,0,4,5,2,1,3,0,1,4,5,3,2,0,5,2,3,1,4,0,1,4,2,3,5,0,2,3,1,1,1,3,5,1,4,3,0];

} else if(asignado == 4){

	questionsSecondPart = [["A continuación se presenta un modelo o patrón que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test4/pregunta11.png' alt=''>",
"&nbsp A <br> <img src='images/test4/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test4/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test4/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test4/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test4/pregunta11-5.png' alt=''>"],

["Siguiendo las gráficas que no están marcadas con letras, debe identificar entre las 5 figuras que se designan como las letras A, B, C, D y E. La figura que completa la serie:<br> <img src='images/test4/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp C`,
`&nbsp D`,
`&nbsp E`],

["A continuación, usted encontrará cinco pasos enumerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opción que dé un orden lógico de los eventos. 1. Un artista queda libre de cargos. 2. A un artista se le acusa de homicidio. 3. El artista tiene un cliente nuevo. 4. Finaliza la carrera del artista. 5. Muere un hombre",
"&nbsp 4-5-2-1-3",
"&nbsp 2-1-3-4-5",
"&nbsp 5-2-1-3-4",
"&nbsp 3-5-2-1-4",
"&nbsp 5-4-3-2-1"],

["Seleccione la opción que tiene dos E",
"&nbsp P, E, R, T, H, A, M, B, O, Y",
"&nbsp L, I, T, T, L, E, R, O, C, K",
"&nbsp P, U, E, R, T, O, R, I, C, O",
"&nbsp N, E, W, O, R, L, E, A, N, S",
"&nbsp E, S, T, A, M, B, U, L"],

["Identifique la respuesta que corresponde con la lógica del dominó:<br> <img src='images/test4/pregunta15.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Katherine es una profesional de ingeniería ambiental, egresada de la universidad de la Guajira. Actualmente, está realizando un estudio de impacto ambiental en una zona de explotación minera para el montaje de una empresa. Éste reflejó que el impacto es negativo y ante este suceso la alternativa que se propone es",
"&nbsp que el dueño del proyecto proporcione dinero a toda la comunidad",
"&nbsp establecer un dialogo con los miembros de la comunidad para que ellos presionen",
"&nbsp anunciar que el proyecto no es viable porque el impacto es irreversible",
"&nbsp la construcción del proyecto con los permisos, excepto la licencia ambiental",
"&nbsp un plan de mejoramiento ambiental antes de empezar el proyecto"],

["Enfadado es lo mismo que",
"&nbsp enojado",
"&nbsp aburrido",
"&nbsp ofendido",
"&nbsp irascible",
"&nbsp orgulloso"],

["La palabra que se debe utilizar en el espacio en blanco es: el 20 de julio se ---------------- la bandera nacional:",
"&nbsp Empuña",
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

["De las siguientes imágenes señale la que es diferente <br> <img src='images/test4/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

];

theway = [0,1,5,2,4,3,0,3,1,2,5,4,0,3,5,1,2,4,0,1,2,3,5,4,0,3,2,4,1,5,0,4,3,5,1,2,0,3,4,5,1,2,0,3,4,1,5,2,0,5,1,3,4,2,0,5,4,2,1,3,0,3,5,4,4,1,5,1,5,5,4,0];


} else if(asignado == 5){

	questionsSecondPart = [["Identifique el bloque idéntico a la figura base, que está colocado en distinta posición:<br> <img src='images/test5/pregunta11.png' alt=''>",
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

["A continuación encontrará Series de cuatro palabras numeradas. Señale la Opción en la que aparecen Ordenadas de forma correcta.  Oportunista=1, oposición=2, orificio=3, opositar=4",
"&nbsp 2 3 1 4",
"&nbsp 3 4 2 1",
"&nbsp 4 1 3 2",
"&nbsp 1 2 4 3",
"&nbsp 2 4 3 1"],

["Un estudiante considerado brillante, utiliza los procedimientos de manejo de información: búsqueda, selección y almacenamiento, para elaborar informes. Para que el estudiante cumpla totalmente con las exigencias para redactar informes, usted sugiere que",
"&nbsp utilice un lenguaje claro, conciso, preciso, concreto y objetivo.",
"&nbsp copie información indiscriminadamente de la web o de libros",
"&nbsp pida ayuda a su papa que es escritor y que tiene experiencia.",
"&nbsp escriba párrafos amplios, explicando y describiendo los hechos.",
"&nbsp incluya apreciaciones personales como creo o deseo."],

["Identifique la respuesta que corresponde con la lógica del dominó: <br> <img src='images/test5/pregunta15.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["Seleccione la opción que contiene al mismo tiempo dos números 2, una M y una N",
"&nbsp 3, 0, 2, Q, 7, J, R, A",
"&nbsp O, Q, 7, N, R, M, 2, 6",
"&nbsp 7, B, F, 9, C, H, 8, E",
"&nbsp 2, N, P, Q, 4, A, M, 2",
"&nbsp 4, 7, 9, M, 2, Q, H, 1"],

["Luis tiene 85 pesos en monedas de cinco y diez pesos, tiene 12 monedas en total. ¿Cuántas monedas son de cinco pesos?",
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

["De las siguientes imágenes señale la que es diferente <br> <img src='images/test5/pregunta19.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

["De las siguientes imágenes señale la que es diferente <br> <img src='images/test5/pregunta20.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp C",
"&nbsp D",
"&nbsp E"],

];

theway = [0,4,5,1,3,2,0,2,3,4,1,5,0,5,1,4,2,3,0,4,2,3,1,5,0,3,1,5,2,4,0,2,5,4,1,3,0,5,1,4,3,2,0,4,1,3,5,2,0,3,2,4,1,5,0,1,3,2,5,4,0,1,2,4,1,1,4,3,4,4,5,0];

} else if(asignado == 6){

	questionsSecondPart = [["¿En cuál circuito es más probable que el piloto caiga del avión?<br> <img src='images/test6/pregunta11.png' alt=''>",
"&nbsp A",
"&nbsp B",
"&nbsp si es igual",
"&nbsp ",
"&nbsp "],

["¿Cuál gancho sostiene menos peso?<br> <img src='images/test6/pregunta12.png' alt=''>",
`&nbsp A`,
`&nbsp B`,
`&nbsp si es igual`,
`&nbsp`,
`&nbsp`],

["Rueda o ruedas que giran en la misma dirección de la rueda que indica la flecha es (son):<br> <img src='images/test6/pregunta13.png' alt=''>",
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

["El crecimiento de la población ha causado efectos negativos en la sostenibilidad de los recursos naturales. Bajo este criterio se propone",
`&nbsp Controlar el consumo y compensar el daño`,
`&nbsp por un lapso de tiempo, prohibir los hijos`,
`&nbsp prohibir hijos fuera del matrimonio`,
`&nbsp que las parejas NO tengan hijos`,
`&nbsp limitar el número de hijos por familia`],

["Al llegar tarde a una reunión de trabajo, usted está propinando que",
`&nbsp su jefe le llame la atención`,
`&nbsp el trabajo de sus compañeros se retrase`,
`&nbsp su evaluación de desempeño se afecte`,
`&nbsp su horario de salida se extienda`,
`&nbsp sus compañeros le generen mal ambiente`],

["La palabra que se debe utilizar en el espacio en blanco: Con las ------------ de la página anterior construya sus oraciones.",
`&nbsp palabras`,
`&nbsp instrucciones`,
`&nbsp indicaciones`,
`&nbsp letras`,
`&nbsp afirmaciones`],

[`"La mitad de los habitantes de los Estados Unidos sufren periódicamente del insomnio, pues este mal tiene relación con las presiones y el ritmo acelerado de la vida moderna, todo el que sufre de insomnio tiene su solución o manía favorita (un buen trago, un libro aburrido, música suave, etc.) Pero la clave parece existir en la relación de tensiones y más que nada en no preocuparse por la falta de sueño". Del texto se puede deducir que la más grave preocupación para el que padece de insomnio es:`,
`&nbsp Demasiadas presiones.`,
`&nbsp La falta de sueño`,
`&nbsp Ritmo de vida acelerado`,
`&nbsp La mejor manera de dormir`,
`&nbsp Preocupaciones excesivas`],

["Señale el sinónimo de la Palabra: CALCULAR",
`&nbsp Averiguar`,
`&nbsp Creer`,
`&nbsp Comenzar`,
`&nbsp Computar`,
`&nbsp Sumar`],

];

theway = [0,5,1,3,2,4,0,3,2,4,5,1,0,1,5,3,4,2,0,4,2,1,3,5,0,4,3,2,5,1,0,5,4,3,2,1,0,5,3,4,1,2,0,2,1,3,4,5,0,2,5,1,3,4,0,5,1,3,4,2,0,1,1,3,2,5,1,2,1,2,4,0];

} else if(asignado == 7){

	questionsSecondPart = [[`A continuación de la lista usted encuentra cinco sucesiones posibles numeradas de 1 a 5, cada una de las opciones representa una ordenación secuencial diferente de los eventos dados. Escoja la opción de la sucesión que dé la ordenación más lógica de los eventos. <br>
<ol>
	\t<li>Un joven puede costearse la universidad</li>
	\t<li>Un hombre toma un avión para ir a otra ciudad</li>
	\t<li>Un hombre quiere proteger a su familia</li>
	\t<li>Se compra un seguro de vida</li>
	\t<li>Una mujer llora</li>
</ol>`,
"&nbsp 5-1-3-4-2",
"&nbsp 2-5-1-3-4",
"&nbsp 4-2-5-1-3",
"&nbsp 3-4-2-5-1",
"&nbsp 1-3-4-2-5"],

["En una carrera de 3 Km se llevan recorridos 150 m. ¿Cuál es el porcentaje que corresponde a este recorrido?",
`&nbsp 5%`,
`&nbsp 8%`,
`&nbsp 15%`,
`&nbsp 21%`,
`&nbsp 10%`],

[`En la frase "Un equipo de científicos de la universidad de Columbia, en Nueva York, acaba de presentar un dispositivo del tamaño de una tarjeta de crédito que me permite hacer pruebas sanguíneas en minutos", la palabra "dispositivo" puede ser reemplazada, sin cambiar el significado, por:`,
`&nbsp artefacto`,
`&nbsp máquina`,
`&nbsp mueble`,
`&nbsp factor`,
`&nbsp objeto`],

["Un automovilista sale a las 9 a.m. y se detiene a hacer reparaciones a las 9:20 a.m., si la distancia fue de 18 kilómetros. ¿Cuál fue la velocidad promedio, en kilómetros por hora de esa parte del viaje?",
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

["Las palabras que se deben utilizar en los espacios en blanco son:    El fútbol, noble deporte ---------- por lo británicos, tiene ---------- y arraigadas raíces en el pueblo latinoamericano.",
`&nbsp impulsado - poderosas`,
`&nbsp implantado - profundas`,
`&nbsp auspiciado - difundidas`,
`&nbsp impartido - hondas`,
`&nbsp brindado - diversas`],

["Un compresor tiene la capacidad de aspirar 4,587 metros cúbicos de refrigerante cada hora; si un metro cúbico es igual a 1000 litros, entonces, los litros aspirados por el compresor cada hora, corresponden a:",
`&nbsp 4587`,
`&nbsp 458,7`,
`&nbsp 0,004587`,
`&nbsp 4,587`,
`&nbsp 45,87`],

["El formato carta en una impresora viene de 21,59 centímetros por 27,94 centímetros, si el área de impresión anterior se reduce en un centímetro; entonces el área de impresión es:",
`&nbsp 554694,6`,
`&nbsp 55,46946`,
`&nbsp 55469,46`,
`&nbsp 554,6946`,
`&nbsp 5546,946`],

["Restar 23.180 pesos de 157.637 pesos con 25 centavos y así se obtiene el nuevo valor que es:",
`&nbsp 134737`,
`&nbsp 134637`,
`&nbsp 134447`,
`&nbsp 134357`,
`&nbsp 134457`],

["El promedio de la temperatura en el municipio de Chía Cundinamarca, según el Ideam fue de 42,5 grados Fahrenheit en la última semana ( 8 días ); por lo tanto, la temperatura expresada en grados Celsius es de",
`&nbsp 5,3`,
`&nbsp 17,7`,
`&nbsp 10,5`,
`&nbsp 25,7`,
`&nbsp 5,8`],

];

theway = [0,4,2,5,1,3,0,4,3,2,1,5,0,2,1,4,5,3,0,2,1,5,3,4,0,2,5,4,1,3,0,1,5,2,3,4,0,4,3,1,2,5,0,4,3,1,2,5,0,3,5,4,1,2,0,5,3,2,1,4,0,4,1,1,1,4,2,1,4,5,5,0];

} else if(asignado == 8){

	questionsSecondPart = [[`A continuación de la lista usted encuentre cinco sucesiones posibles numeradas de 1 a 5, cada una de las opciones representa una ordenación secuencial diferente de los eventos dados. Escoja la opción de la sucesión que dé la ordenación más lógica de los eventos <br> 
<ol>
	\t<li>Una oveja es trasquilada</li>
	\t<li>Una persona está acalorada</li>
	\t<li>Se teje hilaza</li>
	\t<li>Se viste un suéter</li>
	\t<li>Se tiñe lana</li>
</ol>`,
"&nbsp 1-3-5-4-2",
"&nbsp 1-5-3-4-2",
"&nbsp 2-4-3-5-1",
"&nbsp 3-4-5-2-1",
"&nbsp 4-2-5-3-1"],

["A continuación encontrará Series de cuatro palabras numeradas. Señale la Opción en la que aparecen Ordenadas de forma correcta.     <br>Encina=1,   pino=2,   roble=3,   avellano=4",
`&nbsp 2 3 4 1`,
`&nbsp 4 1 2 3`,
`&nbsp 3 4 1 2`,
`&nbsp 1 3 4 2`,
`&nbsp 1 3 2 4`],

["Sentido es a Olfato como Constitución es a:",
`&nbsp Ley`,
`&nbsp Deber`,
`&nbsp Estatuto`,
`&nbsp Derecho`,
`&nbsp País`],

["Molino es a viento como bombillo es a",
`&nbsp energía`,
`&nbsp apagado`,
`&nbsp luz`,
`&nbsp destello`,
`&nbsp encender`],

["Las cinco eses son una estrategia para hacer más eficiente el trabajo. Según esto usted:",
`&nbsp Manifiesta que clasificar y ordenar no son su fuerte y mejor que eso lo haga el personal de servicios`,
`&nbsp Utiliza esta herramienta para vendérsela a sus colaboradores y subalternos`,
`&nbsp Clasifica, ordena y almacena los recursos, de acuerdo con los parámetros establecidos`,
`&nbsp Reutiliza los materiales que todavía sirven en su puesto de trabajo`,
`&nbsp Comenta que no tiene tiempo sino para rendir informes y ese trabajo lo hace su secretaria`],

["Pedro tiene 76 canecas de pintura entre rojas y blancas, siendo las de color rojo las de mayor cantidad. Si la división del numero de canecas del color rojo entre las de color blanco es 3, entonces, la cantidad de canecas de color rojo corresponden a:",
`&nbsp 73`,
`&nbsp 76`,
`&nbsp 57`,
`&nbsp 79`,
`&nbsp 228`],

["El sueldo de Natalia es de $2,000,000, de estos el 30% son para el arriendo, 20% para alimentación, 20% para el transporte, 20% es gastado en servicios públicos y el resto lo distribuye para consumo diario de lunes a viernes durante cuatro semanas completas. Según la información anterior, el dinero en pesos que usa Natalia para gastar diariamente es:",
`&nbsp 20000`,
`&nbsp 13333`,
`&nbsp 200000`,
`&nbsp 100000`,
`&nbsp 16667`],

["Al sumar 45° con 27° 13' 12'' el resultado es:",
`&nbsp 1,6° 13' 12''`,
`&nbsp 1134°`,
`&nbsp 27° 13' 12''`,
`&nbsp 72° 13' 12''`,
`&nbsp 72°`],

["Una bolsa contiene bolas blancas (b) y negras (n). Si al extraer sucesivamente tres bolas se genera el siguiente espacio muestral: o {(b,b,b); (b,b,n); (b,n,b); (n,b,b); (b,n,n); (n,b,n); (n,n,b); (n,n,n)}, entonces, el suceso a {(b,b,b); (b,b,n); (b,n,b); (n,b,b); (b,n,n); (n,b,n); (n,n,b)} corresponde a sacar:",
`&nbsp Tres bolas del mismo color`,
`&nbsp Al menos una bola blanca`,
`&nbsp Dos bolas blancas`,
`&nbsp Una bola negra`,
`&nbsp Al menos dos bolas negras`],

["Un hexágono regular en uno de sus lados tiene un longitud de 8 centímetros; el perímetro en pies y notación fraccionaria es:",
`&nbsp 123/100`,
`&nbsp 37/25`,
`&nbsp 49/50`,
`&nbsp 37/50`,
`&nbsp 49/100`],

];

theway = [0,3,2,4,1,5,0,2,4,5,3,1,0,4,2,5,1,3,0,3,1,5,4,2,0,4,3,1,5,2,0,4,2,5,3,1,0,1,4,2,5,3,0,3,1,2,4,5,0,3,4,2,5,1,0,1,4,2,3,5,0,2,2,1,1,3,3,3,4,2,2,0];

} else if(asignado == 9){

	questionsSecondPart = [[`A continuación se presenta un modelo o patrón que se desarrolla en la superficie (figura en tres dimensiones), identifique entre las alternativas la que se ha formado doblando el modelo:<br> <img src='images/test9/pregunta11.png' alt=''>`,
"&nbsp A <br> <img src='images/test9/pregunta11-1.png' alt=''>",
"&nbsp B <br> <img src='images/test9/pregunta11-2.png' alt=''>",
"&nbsp C <br> <img src='images/test9/pregunta11-3.png' alt=''>",
"&nbsp D <br> <img src='images/test9/pregunta11-4.png' alt=''>",
"&nbsp E <br> <img src='images/test9/pregunta11-5.png' alt=''>"],

["Identifique el bloque idéntico a la figura base, que está colocado en distinta posición:<br> <img src='images/pregunta12.png' alt=''>",
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

[`A continuación, usted encontrará cinco pasos numerados de 1 a 5, cada uno con una secuencia diferente de los eventos dados. Escoja la opción que dé un orden lógico de los eventos.     
<ol>
	\t<li>Se cultiva algodón</li>
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

["Seleccione la opción que tiene dos E",
`&nbsp P, E, R, T, H, A, M, B, O, Y`,
`&nbsp L, I, T, T, L, E, R, O, C, K`,
`&nbsp N, E, W, O, R, L, E, A, N, S`,
`&nbsp E, S, T, A, M, B, U, L`,
`&nbsp P, U, E, R, T, O, R, I, C, O`],

["En un aula de ética la profesora trabajó con un grupo de personas profesionales y realizó una actividad lúdica. Al final, los alumnos se fueron y dejaron el salón lleno de papel y cáscara de frutas entre otros. El compromiso de mantener el aula ordenada y aseada es de",
`&nbsp Director`,
`&nbsp El personal de aseo`,
`&nbsp La profesora`,
`&nbsp El cordinador`,
`&nbsp Los alumnos`],

["El tratar de solucionar conflictos, abordándolos directamente con la persona con quien estamos en desacuerdo, puede requerir:",
`&nbsp Agravar la situación`,
`&nbsp Estar dispuesto a callar`,
`&nbsp Exponerse al ridículo o rechazo`,
`&nbsp Ser cuestionados por el otro`,
`&nbsp Contribuir a mejorar la situación`],

["Las palabras que se deben utilizar en el espacio en blanco son: El poder significa la -------------, real o en potencia, para --------------- en otros en el sentido deseado",
`&nbsp presión - encajar`,
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

