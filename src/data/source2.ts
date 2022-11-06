//https://examendeconducir.com.ar/simulador-examen-de-manejo-preguntas-categoriaB-caba
export const quizJSON = {
	info: {
		name: "Categoria B",
		main: "<p>(Automóviles, camionetas y utilitarios)</p>",
		results: "",
		level1: "Aprobado/a !!, ya estas listo para rendir el examen teorico.",
		level2: "Desaprobado/a por muy poco, sigue practicando.",
		level3: "Desaprobado, sigue practicando.",
		level4: "Desaprobado, sigue practicando.",
		level5: "Desaprobado, sigue practicando.",
	},
	questions: [
		{
			q: "¿Qué es un carril de circulación vehicular?",
			i: "",
			a: [
				{ option: "Banquina de la izquierda.", correct: false },
				{ option: "Banquina de la derecha.", correct: false },
				{
					option:
						"Franja de la calzada por donde circulan los vehículos en una fila.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Franja de la calzada por donde circulan los vehículos en una fila.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/97.jpg" />',
			a: [
				{ option: "No avanzar.", correct: false },
				{ option: "Comienzo de doble mano.", correct: false },
				{
					option: "Sentido de circulación (comienzo de sentido único).",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sentido de circulación (comienzo de sentido único).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/88.jpg" />',
			a: [
				{ option: "Límite de velocidad mínima.", correct: false },
				{ option: "Velocidad controlada por radar.", correct: false },
				{ option: "Límite máximo de velocidad.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Límite máximo de velocidad.</p>",
		},
		{
			q: "En materia de responsabilidad Penal, ¿puede ésta transferirse de una persona (por ejemplo, el conductor del vehículo que provoca el accidente) a otra (por ejemplo, el dueño del vehículo)?",
			i: "",
			a: [
				{
					option: "No, porque la responsabilidad penal es intransferible.",
					correct: true,
				},
				{
					option:
						"Sí, y de éste último también puede transferirse a la Compañía de Seguros.",
					correct: false,
				},
				{
					option:
						"El Juez resolverá en función de la gravedad del accidente y sus consecuencias.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque la responsabilidad penal es intransferible.</p>",
		},
		{
			q: "En un automóvil ¿cuál es la profundidad mínima que debe tener el dibujo de las cubiertas?",
			i: "",
			a: [
				{ option: "0,5 mm.", correct: false },
				{ option: "1,0 mm.", correct: false },
				{ option: "1,6 mm.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 1,6 mm.</p>",
		},
		{
			q: "Según la Ley Nro 24.449, ¿qué indica un cordón pintado de color rojo?",
			i: "",
			a: [
				{
					option:
						"Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
					correct: false,
				},
				{
					option:
						"Que ese un espacio reservado al estacionamiento exclusivo de vehículos destinados a servicio de emergencia.",
					correct: false,
				},
				{
					option:
						"Que está prohibido estacionar o detenerse al costado de la acera.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que está prohibido estacionar o detenerse al costado de la acera.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/69.jpg" />',
			a: [
				{ option: "Cruce de peatones.", correct: true },
				{ option: "Peatones a la izquierda.", correct: false },
				{ option: "Prohibición de circular.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cruce de peatones.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/53.jpg" />',
			a: [
				{ option: "Rotonda.", correct: false },
				{ option: "Calzada dividida.", correct: true },
				{ option: "Inicio doble mano.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Calzada dividida.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/73.jpg" />',
			a: [
				{ option: "Vientos fuertes laterales.", correct: false },
				{ option: "Estrechamiento.", correct: false },
				{ option: "Atención.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Atención.</p>",
		},
		{
			q: "¿Cuál es la velocidad máxima permitida en avenidas, salvo señalización que indique lo contrario?",
			i: "",
			a: [
				{ option: "80 km/h.", correct: false },
				{ option: "60 km/h.", correct: true },
				{ option: "40 km/h.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 60 km/h.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/54.jpg" />',
			a: [
				{ option: "Estrechamiento (en una mano).", correct: false },
				{ option: "Calzada dividida.", correct: false },
				{ option: "Estrechamiento (en las dos manos).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Estrechamiento (en las dos manos).</p>",
		},
		{
			q: "Un triángulo pintado en la calzada, ¿qué significa?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/tri.jpg" />',
			a: [
				{ option: "Advierte de la proximidad de un peligro.", correct: false },
				{
					option: "La obligación de ceder el paso en el cruce.",
					correct: true,
				},
				{ option: "La prioridad de paso en el cruce.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La obligación de ceder el paso en el cruce.</p>",
		},
		{
			q: "En cualquier circunstancia o situación posible, durante la circulación, ¿a qué le prestaría atención Ud. a fin de aumentar su seguridad y la de otros?",
			i: "",
			a: [
				{
					option: "El estado del pavimento, del auto y el clima.",
					correct: false,
				},
				{
					option:
						"Las condiciones en que se encuentra el automóvil, las condiciones relativas a infraestructura vial, las condiciones climáticas y el estado del conductor.",
					correct: true,
				},
				{
					option:
						"Las condiciones en que se encuentra el conductor, caudal de tránsito y tipo de cubiertas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Las condiciones en que se encuentra el automóvil, las condiciones relativas a infraestructura vial, las condiciones climáticas y el estado del conductor.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/85.jpg" />',
			a: [
				{ option: "Cruce ferroviario.", correct: true },
				{ option: "Estación ferroviaria.", correct: false },
				{ option: "Circulación exclusiva (ferrocarril).", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cruce ferroviario.</p>",
		},
		{
			q: "¿Qué nos indica en un semáforo, el encendido solamente de la luz roja, de manera intermitente?",
			i: "",
			a: [
				{
					option:
						"Que el semáforo está funcionando parcialmente y que nos aproximamos a un cruce peligroso, debiendo detener la marcha y reiniciándola sólo cuando se observe que no hay riesgo para continuar.",
					correct: true,
				},
				{ option: "Que el semáforo funciona mal.", correct: false },
				{ option: "Que va a cambiar a verde.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que el semáforo está funcionando parcialmente y que nos aproximamos a un cruce peligroso, debiendo detener la marcha y reiniciándola sólo cuando se observe que no hay riesgo para continuar.</p>",
		},
		{
			q: "De acuerdo a lo que establece la Ley Nro 2148, ¿estaría permitido agregar al vehículo luces adicionales?",
			i: "",
			a: [
				{
					option:
						"Está prohibido el agregado de luces o faros adicionales que no sean los descritos en esa misma ley, excepto el agregado de dos faros rompenieblas y de hasta dos faros elevados con luces de freno.",
					correct: true,
				},
				{
					option:
						"No está prohibido agregar luces ya que cuanto más capacidad de iluminación tenga el automóvil, mejor visibilidad tiene el conductor.",
					correct: false,
				},
				{
					option:
						"No está permitido agregar ningún tipo de luz, solo eventualmente se podrá reponer las que traiga de fábrica en caso de destrucción.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Está prohibido el agregado de luces o faros adicionales que no sean los descritos en esa misma ley, excepto el agregado de dos faros rompenieblas y de hasta dos faros elevados con luces de freno.</p>",
		},
		{
			q: "¿Qué es una ciclovía?",
			i: "",
			a: [
				{
					option:
						"Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados.",
					correct: false,
				},
				{
					option:
						"Sector de la calzada señalizado especialmente con una separación que permita la circulación  exclusiva de ciclorodados.",
					correct: true,
				},
				{
					option:
						"Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sector de la calzada señalizado especialmente con una separación que permita la circulación  exclusiva de ciclorodados.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/101.jpg" />',
			a: [
				{ option: "Curva.", correct: false },
				{ option: "Giro obligatorio (izquierda).", correct: false },
				{ option: "Giro obligatorio (derecha).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Giro obligatorio (derecha).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/66.jpg" />',
			a: [
				{ option: "Proyección de piedras.", correct: false },
				{ option: "Zona de derrumbe.", correct: true },
				{ option: "Calzada resbaladiza.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Zona de derrumbe.</p>",
		},
		{
			q: "La Ley Nro 2148 establece como norma general que en las avenidas de doble sentido de circulación está prohibido estacionar vehículos:",
			i: "",
			a: [
				{
					option:
						"Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
					correct: true,
				},
				{
					option:
						"Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
					correct: false,
				},
				{
					option:
						"Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.</p>",
		},
		{
			q: "En caso de niebla ¿es mejor parar en la banquina?",
			i: "",
			a: [
				{ option: "Cuando la niebla es muy cerrada; sí.", correct: false },
				{
					option:
						"Nunca, si no hay otra posibilidad, debe alejarse lo más posible de la calzada y de la banquina.",
					correct: true,
				},
				{ option: "Cuando la niebla no es muy cerrada; sí.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Nunca, si no hay otra posibilidad, debe alejarse lo más posible de la calzada y de la banquina.</p>",
		},
		{
			q: "¿Qué debe hacer si observa que un vehículo está a punto de alcanzarlo y pasarlo?",
			i: "",
			a: [
				{
					option:
						"Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.",
					correct: true,
				},
				{ option: "Aumentar la velocidad.", correct: false },
				{
					option: "Es indiferente la velocidad de su vehículo.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.</p>",
		},
		{
			q: "Ante la presencia de bancos de niebla y a fin de reducir riesgos, ¿qué es lo que se recomienda?",
			i: "",
			a: [
				{
					option:
						"Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor.",
					correct: false,
				},
				{
					option:
						"Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehículos y utilizar las luces del vehículo correspondientes.",
					correct: true,
				},
				{
					option:
						"Detenerse en la banquina hasta que levante el banco de niebla.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehículos y utilizar las luces del vehículo correspondientes.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/85.jpg" />',
			a: [
				{ option: "Cruce ferroviario.", correct: true },
				{ option: "Estación ferroviaria.", correct: false },
				{ option: "Circulación exclusiva (ferrocarril).", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cruce ferroviario.</p>",
		},
		{
			q: "¿Cuál de la tres señales indica que la ruta es nacional?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/escudosreg.jpg" />',
			a: [
				{ option: "La señal A.", correct: false },
				{ option: "La señal B.", correct: true },
				{ option: "La señal C.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La señal B.</p>",
		},
		{
			q: "¿Qué distancia debe dejarse entre el cordón de la acera y el vehículo, al estacionar en forma paralela al mismo?",
			i: "",
			a: [
				{ option: "50 cm.", correct: false },
				{ option: "10 cm.", correct: false },
				{ option: "20 cm.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 20 cm.</p>",
		},
		{
			q: "Todos los cristales de un vehículo deben garantizar visibilidad:",
			i: "",
			a: [
				{
					option: "Solamente desde dentro del automóvil hacia fuera.",
					correct: false,
				},
				{
					option:
						"De adentro hacia fuera y de afuera hacia adentro (ambas direcciones).",
					correct: true,
				},
				{
					option:
						"El único cristal que debe garantizar plena y total visibilidad es el parabrisas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> De adentro hacia fuera y de afuera hacia adentro (ambas direcciones).</p>",
		},
		{
			q: "¿Cuál es el nivel máximo de alcoholemia admitido para conducir un automóvil particular?",
			i: "",
			a: [
				{ option: "0,8 gr. por litro de sangre.", correct: false },
				{ option: "0,5 gr. por litro de sangre.", correct: true },
				{ option: "1,5 gr. por litro de sangre.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 0,5 gr. por litro de sangre.</p>",
		},
		{
			q: " ¿Qué indica el cruce verde en las intersecciones?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/cruceverde.jpg" />',
			a: [
				{
					option:
						"Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía.",
					correct: false,
				},
				{
					option:
						"Advierte a los conductores sobre la existencia de un punto de cruce de bicisenda.",
					correct: false,
				},
				{ option: "Ambas son correctas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ambas son correctas.</p>",
		},
		{
			q: "Según el Manual del Conductor, cuando la luz naranja del semáforo peatonal se torna intermitente ¿Qué conducta debe tomar el peatón que espera para cruzar?",
			i: "",
			a: [
				{ option: "No comenzar a cruzar la calzada.", correct: false },
				{
					option: "Si está cruzando, finalizar el cruce con mucha precaución.",
					correct: false,
				},
				{ option: "Ambas respuestas (a y b) son correctas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ambas respuestas (a y b) son correctas.</p>",
		},
		{
			q: "¿Quién es el responsable civil por un accidente de tránsito producido por un menor de edad poseedor de una licencia de conductor?",
			i: "",
			a: [
				{ option: "El que lo acompaña.", correct: false },
				{
					option: "El que firmó la autorización para obtener la licencia.",
					correct: true,
				},
				{ option: "El que le autorizó el uso del vehículo.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El que firmó la autorización para obtener la licencia.</p>",
		},
		{
			q: "Si a los costados de la ruta observa una señal triangular como la que a continuación se presenta, ¿qué debe interpretarse?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/70.jpg" />',
			a: [
				{
					option:
						"Peligro por la proximidad de una zona de la vía en la que la calzada se estrecha por el lado de la derecha.",
					correct: false,
				},
				{
					option:
						"Peligro por la proximidad de una curva peligrosa hacia la derecha.",
					correct: true,
				},
				{
					option:
						"Peligro por la existencia de un tramo de vía con fuerte pendiente ascendente.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Peligro por la proximidad de una curva peligrosa hacia la derecha.</p>",
		},
		{
			q: "En la ciudad, ¿está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante que va a ser adelantado?",
			i: "",
			a: [
				{
					option:
						"Sí, siempre que sea a intervalos cortos y el sonido emitido no sea estridente.",
					correct: false,
				},
				{
					option:
						"Sí, salvo prohibición expresa mediante la correspondiente señal.",
					correct: false,
				},
				{
					option: "No, porque no es uno de los usos admitidos.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque no es uno de los usos admitidos.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/59.jpg" />',
			a: [
				{ option: "Curva (común).", correct: false },
				{ option: "Curva (en S).", correct: true },
				{ option: "Calzada dividida.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Curva (en S).</p>",
		},
		{
			q: "En zona rural, cuando un peatón transita por la banquina ¿por qué lado debe caminar?",
			i: "",
			a: [
				{
					option:
						"Caminar en sentido contrario al tránsito que viene hacia él.",
					correct: true,
				},
				{ option: "Transitar lo más próximo a la ruta.", correct: false },
				{
					option: "Caminar en el mismo sentido que el tránsito.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Caminar en sentido contrario al tránsito que viene hacia él.</p>",
		},
		{
			q: "Si el conductor de un vehículo toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué están indicando?",
			i: "",
			a: [
				{ option: "Que el vehículo tiene un desperfecto.", correct: false },
				{
					option: "Que transportan a una persona grave a un hospital.",
					correct: true,
				},
				{
					option: "Al exceso de velocidad y a la violación de luz roja.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que transportan a una persona grave a un hospital.</p>",
		},
		{
			q: "En un automóvil ¿cuál es la profundidad mínima que debe tener el dibujo de las cubiertas?",
			i: "",
			a: [
				{ option: "0,5 mm.", correct: false },
				{ option: "1,0 mm.", correct: false },
				{ option: "1,6 mm.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 1,6 mm.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/76.jpg" />',
			a: [
				{ option: "Prohibido adelantarse.", correct: false },
				{ option: "No ruidos molestos (bocina).", correct: true },
				{ option: "Prohibición de luz alta.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No ruidos molestos (bocina).</p>",
		},
		{
			q: "¿Por dónde tienen permitida la circulación los ciclistas?",
			i: "",
			a: [
				{
					option:
						"En los tramos de arterias con ciclocarriles o ciclovías deben circular exclusivamente por ellas.",
					correct: false,
				},
				{
					option:
						"Pueden circular por cualquier arteria de la Ciudad a excepción de autopistas y otras vías rápidas.",
					correct: false,
				},
				{ option: "Ambas son correctas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ambas son correctas.</p>",
		},
		{
			q: "¿Qué identifica la Cruz de San Andrés?",
			i: "",
			a: [
				{ option: "Cruce de caminos.", correct: false },
				{ option: "Cruce de vías férreas.", correct: true },
				{ option: "Cruce de peatones.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cruce de vías férreas.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/96.jpg" />',
			a: [
				{ option: "Curva (común)", correct: false },
				{ option: "Sentido de circulación (izquierda)", correct: true },
				{ option: "Encrucijada (cruce)", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sentido de circulación (izquierda)</p>",
		},
		{
			q: "En los vehículos que poseen cinturones de seguridad ¿es obligatorio usarlos?",
			i: "",
			a: [
				{ option: "Sí, todos sin excepción.", correct: true },
				{
					option:
						"Sólo los que ocupen el asiento delantero, siendo opcional para los demás.",
					correct: false,
				},
				{
					option: "Sí, pero únicamente cuando circulen en rutas o autopistas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, todos sin excepción.</p>",
		},
		{
			q: "¿Qué señales verticales (carteles) nos indican que no tenemos prioridad de paso en un cruce o bocacalle sin semáforo?",
			i: "",
			a: [
				{ option: "Señal de Pare o Ceda el Paso.", correct: true },
				{ option: "Señal de Prohibido Retomar.", correct: false },
				{
					option: "Señal de Contramano o Dirección Obligatoria.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Señal de Pare o Ceda el Paso.</p>",
		},
		{
			q: "A la vista de la señal circular que se observa en la fotografía, ¿qué vehículo tendrá preferencia de paso si, en este tramo de vía, por su estrechez, es imposible el cruce de ambos vehículos?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/103.jpg" />',
			a: [
				{ option: "El automóvil.", correct: false },
				{
					option: "El vehículo que tenga más facilidad de maniobrar.",
					correct: false,
				},
				{ option: "C. El camión.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> C. El camión.</p>",
		},
		{
			q: "La ubicación y posición de las placas de identificación del vehículo (chapas patente) pueden sufrir algún tipo de modificación o cambio:",
			i: "",
			a: [
				{
					option:
						"Sólo eventualmente pueden amplificarse para mejorar su visibilidad.",
					correct: false,
				},
				{
					option:
						"De ninguna manera, deben estar colocadas en posición y forma normal en los lugares reglamentarios.",
					correct: true,
				},
				{
					option:
						"Sólo está prohibido modificar la placa de identificación delantera, no así la posterior.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> De ninguna manera, deben estar colocadas en posición y forma normal en los lugares reglamentarios.</p>",
		},
		{
			q: "Durante la circulación, la prohibición del uso de telefonía celular afecta también al acompañante:",
			i: "",
			a: [
				{
					option:
						"en condiciones normales, no; pero sí cuando la circulación se realiza en condiciones de máximo peligro.",
					correct: false,
				},
				{
					option:
						"La prohibición del uso de telefonía celular afecta sólo al conductor del vehículo.",
					correct: true,
				},
				{ option: "Ambas respuestas (a y b) son correctas.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La prohibición del uso de telefonía celular afecta sólo al conductor del vehículo.</p>",
		},
		{
			q: "Ud. observa que una ambulancia se aproxima con las luces especiales encendidas ¿debe facilitarle el paso?",
			i: "",
			a: [
				{
					option:
						"No, porque sólo advierten de su presencia, pero no significa que estén realizando un servicio urgente.",
					correct: true,
				},
				{
					option:
						"Sí, porque debo entender que circula en servicio de urgencia.",
					correct: false,
				},
				{
					option: "Sí, sólo cuando se advierta que está trasladando pacientes.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque sólo advierten de su presencia, pero no significa que estén realizando un servicio urgente.</p>",
		},
		{
			q: "Adelantarse en una curva está permitido:",
			i: "",
			a: [
				{ option: "Solo si la curva no es muy cerrada.", correct: false },
				{
					option: "Solo si no viene un vehículo en sentido contrario.",
					correct: false,
				},
				{ option: "No, está prohibido.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, está prohibido.</p>",
		},
		{
			q: "Cuando no hay senda peatonal marcada en el piso ¿por dónde debemos cruzar las calles?",
			i: "",
			a: [
				{ option: "A mitad de cuadra.", correct: false },
				{
					option: "En coincidencia con las paradas de transporte.",
					correct: false,
				},
				{
					option:
						"En la esquina, por la prolongación de la vereda sobre la calle.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> En la esquina, por la prolongación de la vereda sobre la calle.</p>",
		},
		{
			q: "¿Está permitido en los vehículos agregar en los paragolpes aditamentos (defensas, etc.) de cualquier naturaleza, que puedan considerarse peligrosos para personas u otros vehículos?",
			i: "",
			a: [
				{
					option:
						"No está permitido modificar paragolpes originales de fábrica agregándoles elementos que puedan considerarse peligrosos o agresivos.",
					correct: true,
				},
				{
					option: "Pueden agregarse defensas en vehículos pequeños.",
					correct: false,
				},
				{ option: "Depende de la zona donde se circule.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No está permitido modificar paragolpes originales de fábrica agregándoles elementos que puedan considerarse peligrosos o agresivos.</p>",
		},
		{
			q: "¿Qué significa el término hidroplaneo (acuaplaning)?",
			i: "",
			a: [
				{
					option:
						"Que las cubiertas comienzan a desplazarse únicamente sobre una película de aceite.",
					correct: false,
				},
				{
					option:
						"Que las cubiertas comienzan a desplazarse únicamente sobre una película de agua.",
					correct: true,
				},
				{ option: "Es el plazo de vida útil del vehículo.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que las cubiertas comienzan a desplazarse únicamente sobre una película de agua.</p>",
		},
		{
			q: "Ud. conduce su vehículo por esta calzada. A la vista de la señalización que se observa en la fotografía ¿le está permitido adelantar al automóvil rojo?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/104.jpg" />',
			a: [
				{ option: "Sí.", correct: false },
				{
					option:
						"Únicamente cuando no venga ningún vehículo en sentido contrario.",
					correct: false,
				},
				{ option: "No.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
		{
			q: "Cuando un semáforo cambia de luz roja a verde, nos habilita a reiniciar la marcha, no obstante ello, ¿qué precauciones o limitaciones debemos adoptar?",
			i: "",
			a: [
				{
					option:
						"No iniciar el cruce si no hay espacio para acomodar el vehículo del otro lado sin obstruir la circulación transversal.",
					correct: false,
				},
				{ option: "No está permitido trasponerla.", correct: false },
				{
					option:
						"Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que lo está haciendo.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que lo está haciendo.</p>",
		},
		{
			q: "¿Cómo se debe dejar un vehículo durante el estacionamiento, en un terreno sin pendiente?",
			i: "",
			a: [
				{ option: "Con el motor detenido.", correct: false },
				{ option: "Con el motor detenido y sin cambio.", correct: true },
				{
					option:
						"Con el motor detenido y las ruedas delanteras transversales a la acera.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Con el motor detenido y sin cambio.</p>",
		},
		{
			q: "El vehículo que se observa en la fotografía lleva una señal de color naranja con reborde negro, compuesta por dos rectángulos y números en su interior ¿qué significa?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/65.jpg" />',
			a: [
				{
					option:
						"Que el vehículo transporta mercancía peligrosas determinadas por los números.",
					correct: true,
				},
				{
					option: "Que el vehículo excede en masas y dimensiones.",
					correct: false,
				},
				{
					option: "Que el vehículo lleva una patente extranjera.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que el vehículo transporta mercancía peligrosas determinadas por los números.</p>",
		},
		{
			q: "Ud. circula conduciendo su vehículo por una vía urbana. ¿Debe llevar abrochado el cinturón de seguridad?",
			i: "",
			a: [
				{ option: "Sí, en todos los casos.", correct: true },
				{
					option:
						"No, porque sólo se exige utilizar el cinturón en vías interurbanas.",
					correct: false,
				},
				{ option: "No, si voy a poca velocidad.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, en todos los casos.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/87.jpg" />',
			a: [
				{ option: "Inicio de doble mano.", correct: false },
				{ option: "Estrechamiento (en una sola mano).", correct: false },
				{ option: "Encrucijada (bifurcación).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Encrucijada (bifurcación).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/84.jpg" />',
			a: [
				{ option: "Inicio de doble mano.", correct: false },
				{ option: "Estrechamiento (en una sola mano).", correct: false },
				{ option: "Encrucijada (bifurcación).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Encrucijada (bifurcación).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/56.jpg" />',
			a: [
				{ option: "Encrucijada.", correct: false },
				{ option: "Camino lateral.", correct: false },
				{ option: "Incorporación de tránsito lateral.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Incorporación de tránsito lateral.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/75.jpg" />',
			a: [
				{ option: "Paso obligado (derecha).", correct: true },
				{ option: "Paso obligado (izquierda).", correct: false },
				{ option: "Encrucijada (cruce).", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Paso obligado (derecha).</p>",
		},
		{
			q: "¿Esta permitido estacionar el vehículo sobre la acera (vereda) para bajar a abrir o cerrar el acceso a un garaje?",
			i: "",
			a: [
				{ option: "No.", correct: true },
				{ option: "Solo por poco tiempo.", correct: false },
				{ option: "Solo si la acera es ancha", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
		{
			q: "Circula detrás de otros vehículos por una vía urbana. Si al llegar a una intersección prevé que va a quedar detenido en la misma obstruyendo la circulación transversal, ¿qué debe hacer?",
			i: "",
			a: [
				{ option: "Pasar si tengo preferencia de paso.", correct: false },
				{
					option:
						"Intentar atravesar la intersección en el caso de que la luz esté en verde.",
					correct: false,
				},
				{
					option:
						"No penetrar en la intersección hasta estar seguro de que voy a poder franquearla sin ser un obstáculo.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No penetrar en la intersección hasta estar seguro de que voy a poder franquearla sin ser un obstáculo.</p>",
		},
		{
			q: "En caso de barrera baja ¿a qué distancia de ella se debe detener el vehículo si no hay línea de pare que lo indique?",
			i: "",
			a: [
				{ option: "7 metros.", correct: false },
				{ option: "5 metros.", correct: true },
				{ option: "2 metros.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 5 metros.</p>",
		},
		{
			q: "¿Qué vehículo tiene prioridad para adelantarse, cuando varios circulan encolumnados?",
			i: "",
			a: [
				{ option: "El que lo intente primero.", correct: false },
				{ option: "El último de la fila.", correct: false },
				{
					option:
						"El que circula primero detrás del vehículo que se desea adelantar.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El que circula primero detrás del vehículo que se desea adelantar.</p>",
		},
		{
			q: "¿Qué requisito básico debe reunir una vía de circulación para ser considerada una autopista?",
			i: "",
			a: [
				{ option: "No tener cruces a nivel con otras vías.", correct: true },
				{ option: "Tener muchos carriles para circular.", correct: false },
				{ option: "Tener que pagar peaje para circular.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No tener cruces a nivel con otras vías.</p>",
		},
		{
			q: "¿Cuál es la velocidad máxima permitida en autopistas, según la Ley 24.449?",
			i: "",
			a: [
				{ option: "60 km./h.", correct: false },
				{ option: "80 km./h.", correct: false },
				{ option: "130 km./h.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 130 km./h.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/92.jpg" />',
			a: [
				{ option: "Puente móvil.", correct: true },
				{ option: "Puente angosto.", correct: false },
				{ option: "Pendiente (descendente)", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Puente móvil.</p>",
		},
		{
			q: "La Ley Nro 2148 establece como norma general que en las calles con sentido único de circulación está prohibido estacionar vehículos:",
			i: "",
			a: [
				{
					option:
						"Junto a la acera derecha los días hábiles durante las 24 horas.",
					correct: false,
				},
				{
					option:
						"Junto a la acera izquierda los días hábiles de 7 a 21 horas.",
					correct: false,
				},
				{
					option:
						"Junto a la acera izquierda todos los días durante las 24 horas.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Junto a la acera izquierda todos los días durante las 24 horas.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/57.jpg" />',
			a: [
				{ option: "Ceda el paso.", correct: true },
				{ option: "Atención.", correct: false },
				{ option: "Carril exclusivo de colectivos.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ceda el paso.</p>",
		},
		{
			q: "Las balizas portátiles que es obligatorio llevar en los vehículos ¿deben ser los conocidos triángulos reflectivos o pueden ser de otro tipo?",
			i: "",
			a: [
				{
					option: "Deben ser únicamente los triángulos reflectivos.",
					correct: false,
				},
				{
					option:
						"Pueden ser otras, incluso eléctricas, pero deben ser de igual o mayor eficacia que los triángulos.",
					correct: true,
				},
				{ option: "Depende de la zona donde se circule.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Pueden ser otras, incluso eléctricas, pero deben ser de igual o mayor eficacia que los triángulos.</p>",
		},
		{
			q: "Todo usuario de la vía pública debe, como premisa básica:",
			i: "",
			a: [
				{
					option: "asumir la obligación de no generar peligro innecesario.",
					correct: true,
				},
				{
					option:
						"acreditar experiencia de manejo en vehículos, que por su categoría de licencia le corresponda, no menor a un año.",
					correct: false,
				},
				{
					option:
						"concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> asumir la obligación de no generar peligro innecesario.</p>",
		},
		{
			q: "Si para adelantar debe invadir un carril exclusivo para colectivos y taxis ¿le está permitido realizar la maniobra?",
			i: "",
			a: [
				{
					option: "No, porque está prohibido utilizar dicho carril.",
					correct: true,
				},
				{
					option:
						"Sí, cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
					correct: false,
				},
				{
					option:
						"Sí, porque sólo se permite su utilización para realizar alguna maniobra.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque está prohibido utilizar dicho carril.</p>",
		},
		{
			q: "¿Qué significa el término 'culposo' en materia de accidentes de tránsito?",
			i: "",
			a: [
				{
					option:
						"Que es responsable por actuar con intención de provocar un daño.",
					correct: false,
				},
				{
					option: "Que no obró con intención de provocar un daño.",
					correct: true,
				},
				{ option: "Que no estaba habilitado para conducir.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que no obró con intención de provocar un daño.</p>",
		},
		{
			q: "El camión de la fotografía está detenido por un tiempo indeterminado en doble fila durante el reparto de la mercancía, ¿es correcta su posición en la calzada?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/64.jpg" />',
			a: [
				{ option: "Si.", correct: false },
				{ option: "No.", correct: true },
				{
					option:
						"Sí, siempre que lo haga en el horario permitido para carga y descarga.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
		{
			q: "Ud. ha adelantado a otro vehículo en una intersección. ¿Es correcto su comportamiento?",
			i: "",
			a: [
				{
					option:
						"Sí, porque en este caso tengo prioridad de paso en la intersección.",
					correct: false,
				},
				{
					option:
						"No, porque en las intersecciones siempre está prohibido adelantar.",
					correct: true,
				},
				{
					option:
						"No, porque sólo está permitido adelantar en las intersecciones con rotonda.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque en las intersecciones siempre está prohibido adelantar.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/72.jpg" />',
			a: [
				{ option: "Túnel.", correct: true },
				{ option: "Puente angosto.", correct: false },
				{ option: "Altura mínima.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Túnel.</p>",
		},
		{
			q: "La Ley C.A.B.A. 2148, establece la obligatoriedad de denunciar a la brevedad cualquier cambio de los datos consignados en la licencia de conducir. De no denunciarse dicho cambio, al cabo de cuánto tiempo caduca la misma?",
			i: "",
			a: [
				{ option: "60 días.", correct: false },
				{ option: "90 días.", correct: true },
				{ option: "120 días.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 90 días.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/70.jpg" />',
			a: [
				{ option: "Curva cerrada.", correct: true },
				{ option: "Curva (común).", correct: false },
				{ option: "Calzada resbaladiza.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Curva cerrada.</p>",
		},
		{
			q: "Si la luz verde del semáforo nos da paso en un cruce de calles y por la transversal aún avanza algún vehículo ¿qué debemos hacer?",
			i: "",
			a: [
				{
					option:
						"No iniciar el cruce, hasta que los demás vehículos hayan completado el suyo.",
					correct: true,
				},
				{
					option: "Avanzar, la prioridad es nuestra porque tenemos luz verde.",
					correct: false,
				},
				{ option: "Esperar hasta que se reinicie el verde.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No iniciar el cruce, hasta que los demás vehículos hayan completado el suyo.</p>",
		},
		{
			q: "¿Qué vehículo puede realizar el remolque de otro vehículo averiado en la vía pública?",
			i: "",
			a: [
				{
					option:
						"Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para asirlo firmemente sin riesgo alguno.",
					correct: false,
				},
				{
					option:
						"Cualquier vehículo que posea al menos algún tipo de elemento para asirlo firmemente sin riesgo.",
					correct: false,
				},
				{ option: "Sólo los vehículos destinados a ese fin.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sólo los vehículos destinados a ese fin.</p>",
		},
		{
			q: "¿Qué significa la doble línea continua amarilla?",
			i: "",
			a: [
				{
					option:
						"Es una señalización que se utiliza únicamente para dividir los sentidos de circulación.",
					correct: false,
				},
				{
					option:
						"Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
					correct: true,
				},
				{
					option: "Significa que solo pueden circular vehículos particulares.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/82.jpg" />',
			a: [
				{ option: "Limitación largo de vehículo.", correct: false },
				{
					option: "Circulación exclusiva (transporte público).",
					correct: true,
				},
				{ option: "Tránsito pesado a la derecha.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Circulación exclusiva (transporte público).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/55.jpg" />',
			a: [
				{ option: "Limitación de altura.", correct: true },
				{ option: "Limitación de ancho.", correct: false },
				{ option: "Limitación de peso.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Limitación de altura.</p>",
		},
		{
			q: "Según las Ley Nro 2148, un vehículo que no está destinado al servicio de emergencia, en caso de extrema necesidad ¿puede realizar un servicio similar al que efectúan estos últimos?",
			i: "",
			a: [
				{
					option:
						"Sí, debiendo advertirlo encendiendo las luces, empleando la bocina en forma intermitente y agitando un paño.",
					correct: true,
				},
				{
					option:
						"Sí, el conductor de dicho vehículo deberá sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vía la situación en la que se encuentra.",
					correct: false,
				},
				{
					option:
						"No, los servicios de emergencia sólo pueden ser efectuados por los vehículos habilitados para ese fin.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, debiendo advertirlo encendiendo las luces, empleando la bocina en forma intermitente y agitando un paño.</p>",
		},
		{
			q: "¿Cree Ud. que puede ser encandilado por las luces de otro vehículo que circula detrás del suyo?",
			i: "",
			a: [
				{
					option:
						"No, el deslumbramiento únicamente lo produce un vehículo en sentido contrario.",
					correct: false,
				},
				{
					option:
						"Sí, siempre que lleve encendida la luz de largo alcance o alta.",
					correct: false,
				},
				{
					option:
						"Sí, cuando el vehículo lleva encendidas las luces altas o, incluso, las luces bajas y por las características de la vía o porque las luces están desalineadas y circula próximo a mi vehículo existe la posibilidad de encandilamiento.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, cuando el vehículo lleva encendidas las luces altas o, incluso, las luces bajas y por las características de la vía o porque las luces están desalineadas y circula próximo a mi vehículo existe la posibilidad de encandilamiento.</p>",
		},
		{
			q: "¿Cómo norma general, cuál es la velocidad máxima permitida en autopistas, en el ámbito de la Ciudad Autónoma de Buenos Aires?",
			i: "",
			a: [
				{ option: "70 km/h.", correct: false },
				{ option: "100 km/h.", correct: true },
				{ option: "120 km/h.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 100 km/h.</p>",
		},
		{
			q: "Según la Ley Nro 2148, los vehículos destinados al servicio de emergencia, en cumplimiento de su función, tienen la prioridad de paso sobre todos los demás vehículos, además de esta ¿están exentos de cumplir otras normas?",
			i: "",
			a: [
				{
					option:
						"Sí, al ser vehículos destinados la servicio de emergencia la ley los exceptúa del cumplimiento de otras normas.",
					correct: false,
				},
				{
					option:
						"Sí, están exentos de cumplir otras normas excepto las indicaciones de los agentes de control de tránsito.",
					correct: true,
				},
				{
					option:
						"No, aun siendo vehículos destinados al servicio de emergencia, al circular por la vía pública están obligados a respetar las normas como el resto de los vehículos.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, están exentos de cumplir otras normas excepto las indicaciones de los agentes de control de tránsito.</p>",
		},
		{
			q: "En una autopista, ¿está permitido remolcar con su vehículo a otro que se encuentra descompuesto?",
			i: "",
			a: [
				{
					option:
						"Sí, pero sólo hasta el lugar más próximo donde pueda quedar inmovilizado.",
					correct: false,
				},
				{
					option:
						"Sí, pero sólo si soy titular de un permiso que autoriza a conducir vehículos con remolque.",
					correct: false,
				},
				{ option: "No, porque está prohibido.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque está prohibido.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/74.jpg" />',
			a: [
				{ option: "No estacionar.", correct: false },
				{ option: "Estacionamiento exclusivo.", correct: true },
				{ option: "No estacionar ni detenerse.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Estacionamiento exclusivo.</p>",
		},
		{
			q: "Ud. está llegando a un cruce de calles sin semáforos ni policía, una persona está cruzando por la senda peatonal, Ud. debe:",
			i: "",
			a: [
				{ option: "Disminuir la marcha y tener cuidado.", correct: false },
				{ option: "Parar y cederle el paso al peatón.", correct: true },
				{
					option: "Seguir y atravesar el cruce, porque tiene prioridad.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Parar y cederle el paso al peatón.</p>",
		},
		{
			q: "¿Qué utilidad tienen los cinturones de seguridad?",
			i: "",
			a: [
				{ option: "Son útiles sólo para altas velocidades.", correct: false },
				{ option: "Sirven para proteger a los menores.", correct: false },
				{
					option:
						"Evitan y/o disminuyen los daños físicos a las personas, en caso de accidentes.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Evitan y/o disminuyen los daños físicos a las personas, en caso de accidentes.</p>",
		},
		{
			q: "¿Cuál de las siguientes imágenes muestra una bicisenda?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/triplefinal.jpg" />',
			a: [
				{ option: "Opción 1", correct: false },
				{ option: "Opción 2", correct: true },
				{ option: "Opción 3", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Opción 2</p>",
		},
		{
			q: "¿Debe Ud. ceder el paso a una fila de escolares que circula por la calzada?",
			i: "",
			a: [
				{ option: "No.", correct: false },
				{ option: "Sí.", correct: true },
				{
					option: "Solo si advierto la existencia de un colegio cercano.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí.</p>",
		},
		{
			q: "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada o bocacalle?",
			i: "",
			a: [
				{ option: "Los vehículos de transporte de pasajero.", correct: false },
				{ option: "El vehículo de menor tamaño.", correct: false },
				{
					option: "El vehículo que se presenta por el lado derecho.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El vehículo que se presenta por el lado derecho.</p>",
		},
		{
			q: "Antes de iniciar un giro, ¿a qué distancia mínima del cruce debe estar ubicado el vehículo sobre el carril más próximo al cordón del lado que va a doblar?",
			i: "",
			a: [
				{ option: "10 metros.", correct: false },
				{ option: "20 metros.", correct: false },
				{ option: "30 metros.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 30 metros.</p>",
		},
		{
			q: "¿Qué es una arteria de doble mano?",
			i: "",
			a: [
				{ option: "Una vía ancha que se cruza con otra vía.", correct: false },
				{
					option: "Una vía donde se circula en ambos sentidos de tránsito.",
					correct: true,
				},
				{
					option: "Una vía reservada al uso de transporte público.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Una vía donde se circula en ambos sentidos de tránsito.</p>",
		},
		{
			q: "¿Cuál es la velocidad mínima permitida en calles?",
			i: "",
			a: [
				{ option: "30 km/h.", correct: false },
				{ option: "20 km/h.", correct: true },
				{ option: "25 km/h.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 20 km/h.</p>",
		},
		{
			q: "En la ciudad ¿está permitido circular marcha atrás?",
			i: "",
			a: [
				{
					option:
						"Sólo para estacionar, entrar o salir de un garaje (cuando no hay otra posibilidad) o salvar un obstáculo.",
					correct: true,
				},
				{ option: "Cuando es por pocos metros.", correct: false },
				{ option: "Solamente de día.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sólo para estacionar, entrar o salir de un garaje (cuando no hay otra posibilidad) o salvar un obstáculo.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/81.jpg" />',
			a: [
				{ option: "Animales sueltos.", correct: true },
				{ option: "Zona Rural.", correct: false },
				{ option: "Zoológico.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Animales sueltos.</p>",
		},
		{
			q: "Para advertir a otros conductores que va a realizar una maniobra con su vehículo, preferentemente lo hará con:",
			i: "",
			a: [
				{ option: "El brazo.", correct: false },
				{ option: "La señalización luminosa del vehículo.", correct: true },
				{ option: "La señalización acústica del vehículo.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La señalización luminosa del vehículo.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/pangosto.jpg" />',
			a: [
				{ option: "Estrechamiento en las dos manos.", correct: false },
				{ option: "Puente angosto.", correct: true },
				{ option: "Calzada dividida.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Puente angosto.</p>",
		},
		{
			q: "A la vista de las señales de la fotografía, Ud. debe:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/102.jpg" />',
			a: [
				{
					option:
						"Pasar por el lado que indica la flecha, porque hacia el lado izquierdo la entrada está prohibida.",
					correct: true,
				},
				{
					option:
						"Pasar por el lado que indica la flecha, porque hacia el lado izquierdo la circulación está prohibida en ambos sentidos de la marcha.",
					correct: false,
				},
				{
					option:
						"Pasar por el lado que indica la flecha, aunque podría pasar por el lado izquierdo si observo que no se aproxima ningún vehículo en sentido contrario.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Pasar por el lado que indica la flecha, porque hacia el lado izquierdo la entrada está prohibida.</p>",
		},
		{
			q: "El que conduce un vehículo ¿qué documentación personal debe llevar consigo?",
			i: "",
			a: [
				{ option: "La licencia de conductor es suficiente.", correct: false },
				{
					option: "La licencia de conductor y su documento de identidad.",
					correct: true,
				},
				{
					option:
						"La licencia de conductor, su documento de identidad y la cédula verde.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La licencia de conductor y su documento de identidad.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/77.jpg" />',
			a: [
				{ option: "Camino de cornisa.", correct: false },
				{ option: "Pendiente de ingreso.", correct: false },
				{ option: "Pendiente descendente.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Pendiente descendente.</p>",
		},
		{
			q: "Según la Ley Nro 24.449, ¿qué indica un cordón pintado de color amarillo?",
			i: "",
			a: [
				{
					option:
						"Indica que sólo está prohibido estacionar, pudiendo efectuarse detenciones para ascenso y descenso de carga y pasajeros.",
					correct: true,
				},
				{
					option:
						"Indica que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros.",
					correct: false,
				},
				{
					option:
						"Indica que está prohibido estacionar o detenerse al costado de la acera.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Indica que sólo está prohibido estacionar, pudiendo efectuarse detenciones para ascenso y descenso de carga y pasajeros.</p>",
		},
		{
			q: "Cuando usted llega a esta intersección. ¿De qué lado espera que aparezca un vehículo?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/intersec.jpg" />',
			a: [
				{ option: "Solo de la derecha.", correct: false },
				{ option: "Solo de la izquierda.", correct: false },
				{ option: "De ambos lados.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Opción 2</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/99.jpg" />',
			a: [
				{ option: "Permitido retomar.", correct: false },
				{ option: "Camino sinuoso.", correct: false },
				{ option: "No girar en U (no retomar).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No girar en U (no retomar).</p>",
		},
		{
			q: "Los vehículos de emergencia ¿Cuándo tienen prioridad de paso?",
			i: "",
			a: [
				{ option: "Siempre.", correct: false },
				{
					option: "Cuando están en una situación de emergencia.",
					correct: true,
				},
				{
					option:
						"Cuando están en situación de emergencia y circulan por una avenida.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cuando están en una situación de emergencia.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/contra.jpg" />',
			a: [
				{ option: "Contramano.", correct: true },
				{ option: "Rotonda.", correct: false },
				{ option: "Puesto de control.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Contramano.</p>",
		},
		{
			q: "¿Está permitido detener un vehículo sobre una senda peatonal?",
			i: "",
			a: [
				{ option: "No.", correct: true },
				{ option: "Si.", correct: false },
				{ option: "Según los casos.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/100.jpg" />',
			a: [
				{ option: "No girar en U.", correct: false },
				{ option: "Prohibido girar a la izquierda.", correct: true },
				{ option: "Giro a la izquierda.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Prohibido girar a la izquierda.</p>",
		},
		{
			q: "Por norma general, las luces traseras de los vehículos deben ser de color rojo (de posición y freno) y amarillas (giros) ¿por qué la luz de marcha atrás debe ser blanca?",
			i: "",
			a: [
				{
					option:
						"Porque así se las diferencia de las luces de freno, de posición y de las luces de giro.",
					correct: false,
				},
				{
					option:
						"Porque indica el sentido de circulación. La luz blanca significa que el vehículo circula en sentido contrario al nuestro.",
					correct: true,
				},
				{
					option:
						"Porque por su color blanco se obtiene mejor visión cuando la maniobra de retroceso se deba realizar de noche o en condiciones de poca visibilidad.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Porque indica el sentido de circulación. La luz blanca significa que el vehículo circula en sentido contrario al nuestro. </p>",
		},
		{
			q: "¿Qué debe entenderse por bocacalle?",
			i: "",
			a: [
				{
					option:
						"La zona de la calzada común a dos o más arterias, incluidas las sendas o pasos peatonales.",
					correct: true,
				},
				{
					option: "El lugar donde se cruzan una calle con una avenida.",
					correct: false,
				},
				{ option: "El lugar donde se cruzan dos autopistas.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La zona de la calzada común a dos o más arterias, incluidas las sendas o pasos peatonales.</p>",
		},
		{
			q: "Al efectuar un giro en una bocacalle estando encendida la luz verde del semáforo, entre el conductor y el peatón ¿Quién tiene prioridad de paso?",
			i: "",
			a: [
				{ option: "El peatón.", correct: true },
				{ option: "El conductor.", correct: false },
				{ option: "Es indistinto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El peatón.</p>",
		},
		{
			q: "Si circula con su vehículo en un día de niebla ¿qué precaución, entre otras, debe tomar?",
			i: "",
			a: [
				{
					option:
						"Adaptar la velocidad del vehículo a la visibilidad de la vía.",
					correct: true,
				},
				{
					option:
						"Dejar una distancia mínima de 50 metros respecto del vehículo que circula delante.",
					correct: false,
				},
				{ option: "No efectuar ninguna maniobra.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span><strong>Respuesta correcta:</strong> Adaptar la velocidad del vehículo a la visibilidad de la vía.</p>",
		},
		{
			q: "A las placas de identificación de dominio (chapas patente) ¿está permitido ubicarlas en la luneta trasera del vehículo u otro lugar que nosotros deseamos?",
			i: "",
			a: [
				{ option: "Si, siempre que sean bien visibles.", correct: false },
				{ option: "Sí, pero solo la placa trasera.", correct: false },
				{
					option:
						"No, las placas deben ubicarse en los lugares indicados para ello, sin excepción.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, las placas deben ubicarse en los lugares indicados para ello, sin excepción.</p>",
		},
		{
			q: "Cuando se debe cruzar la acera (vereda) para salir a la vía pública ¿de quién se presume que es la responsabilidad si se produce un accidente con un peatón u otro vehículo?",
			i: "",
			a: [
				{
					option:
						"Del peatón, por no tomar la precaución al llegar a una salida de vehículos.",
					correct: false,
				},
				{
					option: "Del conductor del otro vehículo, por no tener cuidado.",
					correct: false,
				},
				{
					option: "Del conductor del vehículo que sale a la vía pública.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta :</strong> Del conductor del vehículo que sale a la vía pública.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/95.jpg" />',
			a: [
				{ option: "No girar en U (no retomar).", correct: false },
				{ option: "No avanzar.", correct: true },
				{ option: "Puesto de control.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No avanzar.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/62.jpg" />',
			a: [
				{ option: "Estrechamiento (en dos manos).", correct: false },
				{ option: "Estrechamiento (en una mano).", correct: true },
				{ option: "Puente angosto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Estrechamiento (en una mano).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/60.jpg" />',
			a: [
				{ option: "Limitación de altura.", correct: false },
				{ option: "Limitación de peso.", correct: true },
				{ option: "Limitación de ancho.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Limitación de peso.</p>",
		},
		{
			q: "¿Cuál es la velocidad máxima permitida en un cruce a nivel ferroviario sin barreras ni semáforos?",
			i: "",
			a: [
				{ option: "10 km./h.", correct: false },
				{ option: "20 km./h.", correct: true },
				{ option: "30 km./h.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 20 km./h.</p>",
		},
		{
			q: "Entre los efectos que produce el alcohol en el conductor se encuentra la:",
			i: "",
			a: [
				{
					option: "Incorrecta apreciación de distancias y velocidades.",
					correct: true,
				},
				{ option: "Ampliación del campo visual.", correct: false },
				{ option: "Disminución de la distancia de frenado.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Incorrecta apreciación de distancias y velocidades.</p>",
		},
		{
			q: "Según la Ley Nro 2148, en una autopista está prohibido:",
			i: "",
			a: [
				{ option: "sobrepasar a otros vehículos.", correct: false },
				{ option: "detenerse por causas de fuerza mayor.", correct: false },
				{ option: "circular marcha atrás.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> circular marcha atrás.</p>",
		},
		{
			q: "Esta señal indica que ha finalizado:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/19.jpg" />',
			a: [
				{ option: "Una obligación anterior.", correct: false },
				{ option: "Una recomendación anterior.", correct: false },
				{ option: "Una prohibición anterior.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Una prohibición anterior. </p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/80.jpg" />',
			a: [
				{ option: "Velocidad máxima.", correct: false },
				{ option: "Velocidad mínima.", correct: true },
				{ option: "Velocidad controlada por radar.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Velocidad mínima.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/58.jpg" />',
			a: [
				{ option: "Contramano.", correct: false },
				{ option: "No avanzar.", correct: false },
				{ option: "Pare.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Pare.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/50.jpg" />',
			a: [
				{ option: "Prohibición de estacionar.", correct: false },
				{ option: "No estacionar ni detenerse.", correct: true },
				{ option: "Estacionamiento exclusivo.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No estacionar ni detenerse.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/83.jpg" />',
			a: [
				{ option: "Prohibición de circular (bicicletas).", correct: false },
				{ option: "Ciclistas.", correct: true },
				{ option: "Prohibición de circular (motos).", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ciclistas.</p>",
		},
		{
			q: "Al estacionar su vehículo observa que no deja espacio suficiente para el paso de otros vehículos, por lo que estaciona ocupando parte de la acera ¿es correcto su comportamiento?",
			i: "",
			a: [
				{ option: "No.", correct: true },
				{
					option:
						"Sí, siempre que no obstaculice el paso de los peatones por la acera.",
					correct: false,
				},
				{
					option:
						"Sí, pero únicamente por la noche, que es cuando menos tránsito de peatones hay.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
		{
			q: "Usted ha sufrido un desperfecto en su vehículo y lo ha dejado inmovilizado en la banquina. ¿Debe señalizarlo?",
			i: "",
			a: [
				{
					option: "No, porque el vehículo no está en la calzada.",
					correct: false,
				},
				{
					option: "Sí, con los triángulos de señalización de peligro.",
					correct: false,
				},
				{
					option:
						"Sí, con las balizas encendidas, los triángulos de señalización de peligro y con las luces de posición.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, con las balizas encendidas, los triángulos de señalización de peligro y con las luces de posición.</p>",
		},
		{
			q: "De acuerdo a lo que establece la Ley Nacional (24.449) y su reglamentación, con respecto al vehículo ¿qué documentación debe llevar?",
			i: "",
			a: [
				{ option: "Recibo de pago de patente y cédula verde.", correct: false },
				{
					option: "Recibo de pago de patente y comprobante de pago del seguro.",
					correct: false,
				},
				{
					option:
						"Recibo de pago de patente, comprobante de pago del seguro, cédula verde, y cuando correspondiera (taxi, remis, etc.) comprobante de verificación técnica del vehículo y habilitación.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Recibo de pago de patente, comprobante de pago del seguro, cédula verde, y cuando correspondiera (taxi, remis, etc.) comprobante de verificación técnica del vehículo y habilitación.</p>",
		},
		{
			q: "La instalación del airbag en un vehículo ¿sustituye la obligación de utilizar el cinturón de seguridad?",
			i: "",
			a: [
				{
					option:
						"Sí, porque evita el impacto del conductor y pasajeros contra los elementos del vehículo.",
					correct: false,
				},
				{
					option: "Sí, porque evita lesiones en el cabeza y cuello.",
					correct: false,
				},
				{
					option:
						"No, porque actúa complementando la protección que ofrece el cinturón de seguridad.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, porque actúa complementando la protección que ofrece el cinturón de seguridad.</p>",
		},
		{
			q: "Para indicar las velocidades máximas a desarrollar en zonas donde es habitual la formación de bancos de niebla, se utilizan señales horizontales en forma de letra V invertida ¿cómo se saben o reconocen esas velocidades máximas?",
			i: "",
			a: [
				{
					option:
						"Cuando un conductor alcanza a ver sólo una señal V invertida, la velocidad máxima no deberá superar los 40 km./h.",
					correct: false,
				},
				{
					option:
						"Si alcanza a ver dos señales V invertidas, la velocidad máxima no deberá superar los 60 km./h.",
					correct: false,
				},
				{ option: "Lo indicado en a y b.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Lo indicado en a y b.</p>",
		},
		{
			q: "¿Cuál es la velocidad máxima permitida en calles?",
			i: "",
			a: [
				{ option: "30 km/h.", correct: false },
				{ option: "40 km/h.", correct: true },
				{ option: "50 km/h.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 40 km/h.</p>",
		},
		{
			q: "En los casos de doble línea, compuesta una por un trazo continuo y otra por un trazo discontinuo ¿cuál es la conducta a seguir?",
			i: "",
			a: [
				{
					option:
						"Podemos cruzarlas o no, siempre que lo hagamos con precaución.",
					correct: false,
				},
				{ option: "No está permitido trasponerla.", correct: false },
				{
					option:
						"Debemos respetar lo que rige con respecto a la línea que está de nuestro lado (si es continua no cruzarla; si es discontinua está permitido cruzarla).",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Debemos respetar lo que rige con respecto a la línea que está de nuestro lado (si es continua no cruzarla; si es discontinua está permitido cruzarla).</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/68.jpg" />',
			a: [
				{ option: "Zona de derrumbe.", correct: false },
				{ option: "Calzada resbaladiza.", correct: false },
				{ option: "Proyección de piedras.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Proyección de piedras.</p>",
		},
		{
			q: "Ud. viene circulando por una avenida de doble mano, y al llegar a la bocacalle precisa efectuar un giro a su izquierda; de acuerdo a la Ley Nro 2148, ¿en qué condiciones puede efectuar esa maniobra?",
			i: "",
			a: [
				{
					option:
						"Sólo si hay semáforo de giro que me habilite o, en su defecto, si no hubiera ningún tipo de semáforo.",
					correct: true,
				},
				{
					option:
						"Si mi semáforo de circulación está en verde, tomando las debidas precauciones y mirando atentamente a ambos lados.",
					correct: false,
				},
				{
					option:
						"Es absolutamente indispensable que no venga ningún vehículo por la mano de circulación contraria a la de mi avance.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sólo si hay semáforo de giro que me habilite o, en su defecto, si no hubiera ningún tipo de semáforo.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/79.jpg" />',
			a: [
				{ option: "Girar a la izquierda.", correct: false },
				{ option: "Proximidad de obstáculo.", correct: false },
				{ option: "Rotonda.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Rotonda.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/67.jpg" />',
			a: [
				{ option: "Camino sinuoso.", correct: false },
				{ option: "Calzada resbaladiza.", correct: true },
				{ option: "Curva y contracurva.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Calzada resbaladiza.</p>",
		},
		{
			q: "Con carácter general, cuando nos encontramos con una señal de 'PROHIBIDO ESTACIONAR' ¿está permitido parar para subir o bajar pasajeros de un automóvil?",
			i: "",
			a: [
				{ option: "Si.", correct: true },
				{ option: "No.", correct: false },
				{ option: "Según la hora.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Si.</p>",
		},
		{
			q: "Si una calle de sentido único posee isletas, usted podrá circular por:",
			i: "",
			a: [
				{ option: "El centro.", correct: false },
				{ option: "La parte derecha de la calzada.", correct: false },
				{ option: "Cualquiera de los dos lados.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cualquiera de los dos lados.</p>",
		},
		{
			q: "El vehiculo que circule por el carril obligatorio para transito lento, ¿puede abandonarlo para adelantar a otro mas lento?",
			i: "",
			a: [
				{ option: "No, nunca.", correct: false },
				{
					option:
						"Si, siempre que se respete la velocidades establecidas en las señales.",
					correct: true,
				},
				{ option: "Es indistinto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Si, siempre que se respete la velocidades establecidas en las señales.</p>",
		},
		{
			q: "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante un accidente de cualquier índole?",
			i: "",
			a: [
				{ option: "211 y/o 109.", correct: false },
				{ option: "112 y/o 110.", correct: false },
				{ option: "911 y/o 107.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 911 y/o 107.</p>",
		},
		{
			q: "¿Qué significa la doble línea continua amarilla?",
			i: "",
			a: [
				{
					option:
						"Es una señalización que se utiliza únicamente para dividir los sentidos de circulación.",
					correct: false,
				},
				{
					option:
						"Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
					correct: true,
				},
				{
					option: "Significa que solo pueden circular vehículos particulares.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.</p>",
		},
		{
			q: "Con carácter general, cuando nos encontramos con una señal de PROHIBIDO ESTACIONAR ¿está permitido parar para subir o bajar pasajeros de un automóvil?",
			i: "",
			a: [
				{ option: "Si.", correct: true },
				{ option: "No.", correct: false },
				{ option: "Según la hora.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Si.</p>",
		},
		{
			q: "Con carácter general, ¿está prohibido en zona urbana el uso de bocina en los vehículos?",
			i: "",
			a: [
				{ option: "No, está permitido.", correct: false },
				{ option: "Si, está prohibido.", correct: false },
				{
					option: "Está prohibido el uso indebido de la bocina.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Está prohibido el uso indebido de la bocina.</p>",
		},
		{
			q: "¿Dónde deben llevarse las balizas portátiles?",
			i: "",
			a: [
				{ option: "En la guantera.", correct: false },
				{
					option: "En el interior del habitáculo, debidamente sujetas.",
					correct: false,
				},
				{ option: "En un lugar accesible.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> En un lugar accesible.</p>",
		},
		{
			q: "Una línea de trazo discontinuo demarcada sobre la calzada en forma paralela a su eje (a lo largo) ¿qué nos indica?",
			i: "",
			a: [
				{
					option:
						"Indica que la misma no puede ser traspasada, debiendo conservar su lugar el vehículo que circula contiguo a ella.",
					correct: false,
				},
				{
					option:
						"Indica que puede ser traspasada para adelantar a otro vehículo.",
					correct: true,
				},
				{
					option: "Que el asfalto se encuentra en mal estado de conservación.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Indica que puede ser traspasada para adelantar a otro vehículo.</p>",
		},
		{
			q: "Ud. está llegando a un cruce de calles sin semáforos ni policía, una persona está cruzando por la senda peatonal, Ud. debe:",
			i: "",
			a: [
				{ option: "Disminuir la marcha y tener cuidado.", correct: false },
				{ option: "Parar y cederle el paso al peatón.", correct: true },
				{
					option: "Seguir y atravesar el cruce, porque tiene prioridad.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Parar y cederle el paso al peatón.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/78.jpg" />',
			a: [
				{ option: "Prohibido adelantarse.", correct: true },
				{ option: "Prohibición de circular.", correct: false },
				{ option: "Circulación exclusiva de bicicletas.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Prohibido adelantarse.</p>",
		},
		{
			q: "¿En condiciones normales, a qué distancia mínima en tiempo debe circular en relación al vehículo que lo antecede?",
			i: "",
			a: [
				{
					option: "A una separación en tiempo de cinco segundos (5').",
					correct: false,
				},
				{
					option: "A una separación en tiempo de dos segundos (2').",
					correct: true,
				},
				{
					option: "A una separación en tiempo de tres segundos (3').",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> A una separación en tiempo de dos segundos (2').</p>",
		},
		{
			q: "¿Qué distancia debe dejarse libre cuando se va a estacionar frente a la entrada de hospitales, escuelas, templos u otros organismos públicos?",
			i: "",
			a: [
				{ option: "10 metros de cada lado de la entrada.", correct: true },
				{ option: "Todo el frente del edificio.", correct: false },
				{ option: "5 metros de cada lado de la entrada.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 10 metros de cada lado de la entrada.</p>",
		},
		{
			q: "¿Qué distancia debe dejarse entre el cordón de la acera y el vehículo, al estacionar en forma paralela al mismo?",
			i: "",
			a: [
				{ option: "50 cm.", correct: false },
				{ option: "10 cm.", correct: false },
				{ option: "20 cm.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 20 cm.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/71.jpg" />',
			a: [
				{ option: "Puesto de control.", correct: true },
				{ option: "Contramano.", correct: false },
				{ option: "No avanzar.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Puesto de control.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/89.jpg" />',
			a: [
				{ option: "Niños.", correct: false },
				{ option: "Escolares.", correct: true },
				{ option: "Cruce de peatones.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Escolares.</p>",
		},
		{
			q: "Ingerir alimentos antes de conducir puede afectar negativamente a la conducción. Por tanto, antes de iniciar un viaje y para evitar la aparición de sueño debe:",
			i: "",
			a: [
				{
					option: "Abstenerse de ingerir alimentos para viajar en ayunas.",
					correct: false,
				},
				{
					option:
						"Ingerir alimentos de alto contenido en grasas, que dan mayor vitalidad.",
					correct: false,
				},
				{
					option:
						"Ingerir alimentos ligeros, de bajo poder calórico, que son de fácil digestión.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ingerir alimentos ligeros, de bajo poder calórico, que son de fácil digestión.</p>",
		},
		{
			q: "¿Qué debe hacer el conductor que transita por una calle de doble sentido de circulación y encuentra ante él su mano obstruída en el momento que se aproxima otro vehículo por la mano contraria?",
			i: "",
			a: [
				{ option: "Debe ceder el paso al otro vehículo.", correct: true },
				{ option: "Tiene derecho a pasar primero.", correct: false },
				{ option: "No existe preferencia.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Debe ceder el paso al otro vehículo.</p>",
		},
		{
			q: "La Ley Nro 2148 establece como norma general la prohibición de detenerse:",
			i: "",
			a: [
				{
					option:
						"En doble fila, excepto como detención para el ascenso o descenso de pasajeros.",
					correct: false,
				},
				{
					option:
						"En doble fila, excepto como detención previa a la maniobra de estacionamiento.",
					correct: true,
				},
				{ option: "En doble fila, sin ninguna excepción.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> En doble fila, excepto como detención previa a la maniobra de estacionamiento.</p>",
		},
		{
			q: "¿Cuando se estaciona en proximidad de una esquina ¿qué línea no debe superarse?",
			i: "",
			a: [
				{ option: "La línea peatonal.", correct: false },
				{
					option: "La línea imaginaria de prolongación de ochava.",
					correct: true,
				},
				{ option: "La línea de edificación transversal.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> La línea imaginaria de prolongación de ochava.</p>",
		},
		{
			q: "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
			i: "",
			a: [
				{
					option: "Cuando se haya entrado en el carril de desaceleración.",
					correct: true,
				},
				{
					option: "A la entrada de la nueva vía de circulación.",
					correct: false,
				},
				{ option: "Poco antes de abandonar la misma.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Cuando se haya entrado en el carril de desaceleración.</p>",
		},
		{
			q: "Uso de auriculares y celulares: ¿Está permitido el uso de auriculares o celulares al conducir?",
			i: "",
			a: [
				{
					option: "Sí, pero sólo para los conductores de automotores.",
					correct: false,
				},
				{
					option: "Sí, pero sólo para los conductores de ciclorodados.",
					correct: false,
				},
				{
					option: "No, está prohibido para todos los conductores en general.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, está prohibido para todos los conductores en general.</p>",
		},
		{
			q: "Cuando vemos las luces rojas de un vehículo ¿qué significado tienen en cuanto al sentido de dirección de marcha del mismo?",
			i: "",
			a: [
				{
					option:
						"Que esta ubicado para circular en la misma dirección que nosotros.",
					correct: true,
				},
				{ option: "Que viene hacia nosotros.", correct: false },
				{ option: "Que esta descompuesto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que esta ubicado para circular en la misma dirección que nosotros.</p>",
		},
		{
			q: "En zona urbana, cuando es obligatorio llevar encendidas las luces de un vehículo ¿cuáles debemos utilizar?",
			i: "",
			a: [
				{ option: "Las luces de posición y las altas.", correct: false },
				{ option: "Las del interior del vehículo.", correct: false },
				{ option: "Las luces de posición y las bajas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Las luces de posición y las bajas.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/61.jpg" />',
			a: [
				{ option: "Limitación de ancho.", correct: true },
				{ option: "Limitación de altura.", correct: false },
				{ option: "Puente angosto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Limitación de ancho.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/vfuertes.jpg" />',
			a: [
				{ option: "Proximidad de bosques.", correct: false },
				{ option: "Zonas de palmeras.", correct: false },
				{ option: "Vientos fuertes laterales.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Vientos fuertes laterales.</p>",
		},
		{
			q: "¿Cuál es la velocidad mínima permitida en avenidas?",
			i: "",
			a: [
				{ option: "40 km/h.", correct: false },
				{ option: "20 km/h.", correct: false },
				{ option: "30 km/h.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> 30 km/h.</p>",
		},
		{
			q: "En algunas vías de tránsito podemos encontrar marcas en el piso o bien carteles con signos similares a una V invertida ¿qué significados tienen esos signos o marcas?",
			i: "",
			a: [
				{
					option: "Que estamos en una zona donde frecuentemente hay niebla.",
					correct: true,
				},
				{
					option: "Que estamos en una zona de velocidad controlada (radar).",
					correct: false,
				},
				{ option: "Que estamos en una zona que se inunda.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que estamos en una zona donde frecuentemente hay niebla.</p>",
		},
		{
			q: "Para realizar una maniobra de 'ingreso a.../egreso de...' un garage o estacionamiento, el conductor debe cruzar la acera; si al hacerlo se encuentra con un transeúnte (peatón), ¿qué conducta debe adoptar el conductor?",
			i: "",
			a: [
				{
					option: "Priorizar la marcha del peatón, indefectiblemente.",
					correct: true,
				},
				{
					option:
						"Realizar una guiñada para advertir su preferencia de avance.",
					correct: false,
				},
				{
					option:
						"Completar la maniobra como sea posible, para evitar su mayor exposición por encontrarse maniobrando en la vía de circulación.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Priorizar la marcha del peatón, indefectiblemente.</p>",
		},
		{
			q: "Durante la circulación, el uso de telefonía celular está prohibida para el conductor porque en tanto factor de riesgo:",
			i: "",
			a: [
				{
					option:
						"disminuye su capacidad atencional y limita el sentido de la audición, aumentando el tiempo de reacción.",
					correct: false,
				},
				{
					option:
						"Debido a que el conductor debe mantener ambas manos comprometidas en la acción de conducir, el equipo celular reduciría la capacidad para maniobrar.",
					correct: false,
				},
				{ option: "Ambas respuestas (a y b) son correctas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ambas respuestas (a y b) son correctas.</p>",
		},
		{
			q: "Se considera a la niebla un factor de riesgo porque:",
			i: "",
			a: [
				{
					option:
						"Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.",
					correct: true,
				},
				{
					option:
						"Aumenta la percepción de objetos pero se modifica la percepción de la distancia.",
					correct: false,
				},
				{
					option: "Ambas respuestas, la a y la b, son correctas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.</p>",
		},
		{
			q: "Según la Ley Nro 2148, en lo que respecta a las prioridades de paso, en encrucijadas sin semáforos ¿cuál es el orden jerárquico (de importancia) de las distintas arterias?",
			i: "",
			a: [
				{ option: "pasaje, calle, avenida.", correct: false },
				{ option: "calle, avenida, pasaje.", correct: false },
				{ option: "avenida, calle, pasaje.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> avenida, calle, pasaje.</p>",
		},
		{
			q: "¿Quién tiene prioridad de paso en una rotonda?",
			i: "",
			a: [
				{
					option:
						"El vehículo que circula por la rotonda sobre el que intenta ingresar; y el vehículo que egresa sobre el que intenta ingresar o continúa circulando.",
					correct: true,
				},
				{
					option:
						"El vehículo que quiere ingresar a la rotonda por sobre el que quiere egresar de la misma.",
					correct: false,
				},
				{
					option:
						"El vehículo que quiere ingresar a la rotonda sobre el que está circulando en la misma.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El vehículo que circula por la rotonda sobre el que intenta ingresar; y el vehículo que egresa sobre el que intenta ingresar o continúa circulando.</p>",
		},
		{
			q: "¿Cuándo se considera que un vehículo está detenido?",
			i: "",
			a: [
				{
					option:
						"Se considera detención a la permanencia en un sector de la vía pública de un vehículo por circunstancias de la circulación o por causas de fuerza mayor.",
					correct: false,
				},
				{
					option:
						"Se considera detención a la permanencia de un vehículo junto a la acera por un tiempo estrictamente necesario para casos de control de tránsito realizado por autoridad competente, ascenso o descenso de pasajeros o para carga y descarga.",
					correct: true,
				},
				{ option: "Lo indicado en a y b.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Se considera detención a la permanencia de un vehículo junto a la acera por un tiempo estrictamente necesario para casos de control de tránsito realizado por autoridad competente, ascenso o descenso de pasajeros o para carga y descarga.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/95.jpg" />',
			a: [
				{ option: "No girar en U (no retomar).", correct: false },
				{ option: "No avanzar.", correct: true },
				{ option: "Puesto de control.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No avanzar.</p>",
		},
		{
			q: "Una línea de trazo discontinuo demarcada sobre la calzada en forma paralela a su eje (a lo largo) ¿qué nos indica?",
			i: "",
			a: [
				{
					option:
						"Indica que la misma no puede ser traspasada, debiendo conservar su lugar el vehículo que circula contiguo a ella.",
					correct: false,
				},
				{
					option:
						"Indica que puede ser traspasada para adelantar a otro vehículo.",
					correct: true,
				},
				{
					option: "Que el asfalto se encuentra en mal estado de conservación.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Indica que puede ser traspasada para adelantar a otro vehículo.</p>",
		},
		{
			q: "Cuando un conductor realiza la maniobra de circulación en reversa (marcha atrás), ¿cuál es la distancia establecida que puede recorrer en la realización dicha maniobra?",
			i: "",
			a: [
				{ option: "Mínimamente 20 metros.", correct: false },
				{ option: "No más de 20 metros.", correct: false },
				{ option: "El recorrido mínimo e indispensable.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El recorrido mínimo e indispensable.</p>",
		},
		{
			q: "¿Está permitido el estacionamiento de vehículos en las ciclovías?",
			i: "",
			a: [
				{
					option: "Sí, únicamente si se trata del frente de mi domicilio.",
					correct: false,
				},
				{
					option:
						"No, está prohibido en carácter general estacionar sobre las sendas para ciclorodados.",
					correct: true,
				},
				{ option: "Sí, sólo con autorización especial.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, está prohibido en carácter general estacionar sobre las sendas para ciclorodados.</p>",
		},
		{
			q: "Cuando un vehículo circula por una arteria ubicada al costado de una vía férrea ¿es obligatorio ceder el paso a otro que sale del paso a nivel?",
			i: "",
			a: [
				{ option: "Sí, si viene desde la derecha.", correct: false },
				{ option: "No, si viene desde la izquierda.", correct: false },
				{
					option:
						"Debe cedérsele el paso, venga de la izquierda o de la derecha.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Debe cedérsele el paso, venga de la izquierda o de la derecha.</p>",
		},
		{
			q: "Si Ud. sale de un estacionamiento paralelo al cordón, previamente debe:",
			i: "",
			a: [
				{
					option: "Tocar bocina e incorporarse al tránsito pasante.",
					correct: false,
				},
				{
					option:
						"Salir con precaución cuando no haya tránsito pasante y colocar la luz de giro.",
					correct: true,
				},
				{
					option: "Salir lo más rápido posible porque tiene prioridad.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Salir con precaución cuando no haya tránsito pasante y colocar la luz de giro.</p>",
		},
		{
			q: "En materia de señalamiento horizontal o demarcación horizontal ¿qué se entiende por 'isleta'?",
			i: "",
			a: [
				{
					option:
						"Son las marcas canalizadoras y orientadoras de tránsito. No se puede traspasar o circular sobre ellas.",
					correct: true,
				},
				{
					option:
						"Son marcas en la calzada que indican lugares donde está permitido detenerse.",
					correct: false,
				},
				{
					option:
						"Son marcas en la calzada que indican lugares donde está permitido estacionarse y/o detenerse.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Son las marcas canalizadoras y orientadoras de tránsito. No se puede traspasar o circular sobre ellas.</p>",
		},
		{
			q: "¿Cuál es la forma correcta de adelantarse a otro vehículo?",
			i: "",
			a: [
				{ option: "Por la derecha.", correct: false },
				{ option: "Por la banquina.", correct: false },
				{
					option: "Por la izquierda, haciendo las señales respectivas.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Por la izquierda, haciendo las señales respectivas.</p>",
		},
		{
			q: "La niebla, como factor de riesgo produce modificaciones en:",
			i: "",
			a: [
				{
					option:
						"el campo visual del conductor y su percepción del entorno, la capacidad lumínica del vehículo como la adherencia de sus cubiertas y la respuesta del pavimento.",
					correct: true,
				},
				{
					option: "El campo visual del conductor y el estado del pavimento.",
					correct: false,
				},
				{
					option:
						"Sólo afecta la capacidad lumínica del vehículo y la respuesta de sus cubiertas en el avance.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> el campo visual del conductor y su percepción del entorno, la capacidad lumínica del vehículo como la adherencia de sus cubiertas y la respuesta del pavimento.</p>",
		},
		{
			q: "¿Cómo debe indicar a un vehículo que pretende sobrepasar al suyo que no debe hacerlo?",
			i: "",
			a: [
				{ option: "Encendiendo las luces llamadas balizas.", correct: false },
				{
					option: "Accionando la luz indicadora de giro a la izquierda.",
					correct: true,
				},
				{
					option: "Accionando la luz indicadora de giro a la derecha.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Accionando la luz indicadora de giro a la izquierda.</p>",
		},
		{
			q: "En esta intersección ¿qué vehículo pasa en primer lugar?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/cruze.jpg" />',
			a: [
				{ option: "El automóvil rojo.", correct: true },
				{ option: "El ciclomotor.", correct: false },
				{ option: "La furgoneta amarilla.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El automóvil rojo.</p>",
		},
		{
			q: "Con carácter general ¿qué vehículo tiene prioridad de paso en una pendiente?",
			i: "",
			a: [
				{
					option: "Los vehículos que ascienden por sobre los que descienden.",
					correct: true,
				},
				{
					option: "Los vehículos que descienden por sobre los que ascienden.",
					correct: false,
				},
				{
					option: "Depende lo que indique la señal correspondiente.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Los vehículos que ascienden por sobre los que descienden.</p>",
		},
		{
			q: "La Ley Nro 2148 establece como norma general que en las avenidas con sentido único de circulación está prohibido estacionar vehículos:",
			i: "",
			a: [
				{
					option:
						"Junto a la acera izquierda los días hábiles durante las 24 horas.",
					correct: false,
				},
				{
					option:
						"Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
					correct: true,
				},
				{
					option: "Junto a la acera derecha los días hábiles de 7 a 21 horas.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/91.jpg" />',
			a: [
				{ option: "Zona montañosa.", correct: false },
				{ option: "Perfil irregular.", correct: true },
				{ option: "Cruce ferroviario.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Perfil irregular.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/51.jpg" />',
			a: [
				{ option: "Inicio de doble circulación.", correct: true },
				{ option: "Calzada dividida.", correct: false },
				{ option: "Camino sinuoso.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Inicio de doble circulación.</p>",
		},
		{
			q: "¿Qué es un carril de aceleración?",
			i: "",
			a: [
				{ option: "Es el carril derecho de una autopista.", correct: false },
				{
					option: "Es el carril de incorporación a una autopista.",
					correct: true,
				},
				{ option: "Es el carril izquierdo de una autopista.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Es el carril de incorporación a una autopista.</p>",
		},
		{
			q: "Cuando Ud. se acerca a un paso a nivel la barrera comienza a bajar para atravesarse en la calzada ¿debe Ud. cruzar el paso a nivel?",
			i: "",
			a: [
				{
					option:
						"Sí, siempre que observe que no se aproxima ningún vehículo que circule sobre raíles.",
					correct: false,
				},
				{ option: "No, en ningún caso.", correct: true },
				{ option: "Tener que pagar peaje para circular.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, en ningún caso.</p>",
		},
		{
			q: "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué están indicando?",
			i: "",
			a: [
				{ option: "Que el vehículo tiene un desperfecto.", correct: false },
				{
					option: "Que transportan a una persona grave a un hospital.",
					correct: true,
				},
				{
					option: "Al exceso de velocidad y a la violación de luz roja.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que transportan a una persona grave a un hospital.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/90.jpg" />',
			a: [
				{ option: "Curva cerrada", correct: false },
				{ option: "Giro obligatorio (izquierda).", correct: true },
				{ option: "Curva.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Giro obligatorio (izquierda).</p>",
		},
		{
			q: "Usted circula con su vehículo por una calle con ciclovía en la cual transita un ciclista. Llegando ambos a la intersección sin semáforo, usted decide girar a la izquierda. ¿Quién tienen prioridad de paso?",
			i: "",
			a: [
				{ option: "Usted.", correct: false },
				{ option: "El que circule más rápido.", correct: false },
				{ option: "El ciclista.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El ciclista.</p>",
		},
		{
			q: "Según la Ley Nro 24.449, ¿qué indica un cordón pintado de color rojo?",
			i: "",
			a: [
				{
					option:
						"Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
					correct: false,
				},
				{
					option:
						"Que ese un espacio reservado al estacionamiento exclusivo de vehículos destinados a servicio de emergencia.",
					correct: false,
				},
				{
					option:
						"Que está prohibido estacionar o detenerse al costado de la acera.",
					correct: true,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que está prohibido estacionar o detenerse al costado de la acera.</p>",
		},
		{
			q: "Ante un eventual control de tránsito en vía pública, de constatar la Autoridad de Control algún tipo de falta por parte del conductor, el pago de la multa (sanción) podrá efectuarse:",
			i: "",
			a: [
				{
					option:
						"En ese mismo momento y ante la autoridad de control si ésta lo requiere.",
					correct: false,
				},
				{
					option:
						"Ante el Tribunal de Faltas que lo determina como sanción a aplicar.",
					correct: true,
				},
				{ option: "Ambas respuestas (a y b) son correctas.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Ante el Tribunal de Faltas que lo determina como sanción a aplicar.</p>",
		},
		{
			q: "Con carácter general, en los cruces sin semáforo, ¿Quién tiene la prioridad de paso?",
			i: "",
			a: [
				{ option: "El automotor.", correct: false },
				{ option: "El peatón.", correct: true },
				{ option: "El transporte público.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> El peatón.</p>",
		},
		{
			q: "La negativa a realizar una prueba de alcoholemia ¿constituye una falta?",
			i: "",
			a: [
				{
					option:
						"Sólo si se ha incurrido en una infracción o participado en un accidente.",
					correct: false,
				},
				{ option: "No.", correct: false },
				{ option: "Siempre.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Siempre.</p>",
		},
		{
			q: "En cuánto al grado de tono o color que pueden tener los cristales de un automóvil, qué establece la Ley Nro 2148, con respecto a su control en vía pública?",
			i: "",
			a: [
				{
					option:
						"Para medir el grado de tonalidad debe efectuarse una prueba colorimétrica mediante un dispositivo portátil reglamentado debidamente",
					correct: false,
				},
				{
					option:
						"Se deben distinguir los ocupantes del vehículo a corta distancia.",
					correct: true,
				},
				{
					option:
						"A 15 (quince) metros de distancia (medida de referencia) se debiera poder divisar las facciones del conductor.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Se deben distinguir los ocupantes del vehículo a corta distancia.</p>",
		},
		{
			q: "¿Qué indica la siguiente señal?",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/bici.jpg" />',
			a: [
				{
					option: "Sistema de Transporte Público en Bicicleta.",
					correct: false,
				},
				{ option: "Permitido estacionar bicicletas.", correct: false },
				{ option: "Circulación exclusiva para bicicletas.", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Circulación exclusiva para bicicletas.</p>",
		},
		{
			q: "Según la Ley Nro 2148, los vehículos afectados al control del tránsito ¿pueden detenerse en cualquier parte de la vía pública?",
			i: "",
			a: [
				{
					option:
						"No, sólo pueden hacerlo en los lugares en donde esté permitido detenerse.",
					correct: false,
				},
				{
					option:
						"Sí, cuando realicen tareas de control, siempre que no constituyan un obstáculo peligroso para otros vehículos.",
					correct: true,
				},
				{
					option:
						"Sí, porque al ser un servicio de emergencia las restricciones en cuanto a la detención en la vía pública no los abarcan.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sí, cuando realicen tareas de control, siempre que no constituyan un obstáculo peligroso para otros vehículos.</p>",
		},
		{
			q: "¿Qué debe hacer cuando el automóvil que está adelante suyo, está esperando para doblar a la izquierda?",
			i: "",
			a: [
				{
					option:
						"Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos.",
					correct: true,
				},
				{
					option: "Realizar el sobrepaso con cuidado por la izquierda.",
					correct: false,
				},
				{ option: "Tocar bocina para indicarle que siga.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/52.jpg" />',
			a: [
				{ option: "Altura limitada (máxima).", correct: true },
				{ option: "Ancho limitado.", correct: false },
				{ option: "Puente angosto.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Altura limitada (máxima).</p>",
		},
		{
			q: "¿Cuándo está permitido estacionar en ángulo con el cordón de la acera derecha y/o izquierda?",
			i: "",
			a: [
				{ option: "Sólo cuando la calle es ancha.", correct: false },
				{ option: "Sólo cuando el señalamiento lo indica.", correct: true },
				{ option: "Sólo cuando es de un lado solamente.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Sólo cuando el señalamiento lo indica.</p>",
		},
		{
			q: "Todo vehículo debe estar cubierto por un seguro ¿qué daños debe cubrir el mismo?",
			i: "",
			a: [
				{
					option:
						"Debe cubrir eventuales daños causados a terceros transportados o no.",
					correct: true,
				},
				{
					option:
						"Debe cubrir eventuales daños causados a terceros transportados únicamente.",
					correct: false,
				},
				{
					option: "Debe cubrir los daños causados a los vehículos únicamente.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Debe cubrir eventuales daños causados a terceros transportados o no.</p>",
		},
		{
			q: "¿Qué distintivo deben llevar colocado, en la parte interior del parabrisas y luneta del vehículo, los conductores principiantes?",
			i: "",
			a: [
				{
					option:
						"Están obligados a llevar, durante un período de seis (6) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					correct: true,
				},
				{
					option:
						"Están obligados a llevar, durante un período de tres (3) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					correct: false,
				},
				{
					option:
						"Están obligados a llevar, durante un período de doce (12) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Están obligados a llevar, durante un período de seis (6) meses, un distintivo con la letra P en color blanco sobre fondo verde.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/93.jpg" />',
			a: [
				{ option: "Curva.", correct: true },
				{ option: "Giro obligatorio.", correct: false },
				{ option: "Camino sinuoso.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Curva.</p>",
		},
		{
			q: "Según el Manual del Conductor, en un incidente de tránsito ¿qué significa que el conductor es considerado responsable por impericia?",
			i: "",
			a: [
				{
					option:
						"Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de conocimiento o práctica en la conducción.",
					correct: true,
				},
				{
					option:
						"Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
					correct: false,
				},
				{
					option:
						"Que ha tenido una conducta negligente al circular con un vehículo en mal estado.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de conocimiento o práctica en la conducción.</p>",
		},
		{
			q: "¿Qué requisitos debe reunir una vía de circulación (a diferencia de una autopista) para ser considerada una semiautopista (autovia) ?",
			i: "",
			a: [
				{ option: "Tener cruces a nivel.", correct: true },
				{ option: "Tener semáforos y peaje.", correct: false },
				{ option: "Ser elevadas y con dos carriles por mano.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Tener cruces a nivel.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/98.jpg" />',
			a: [
				{ option: "Prohibición de adelantarse.", correct: false },
				{ option: "Circulación exclusiva (motos).", correct: false },
				{ option: "Prohibición de circular (autos).", correct: true },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Prohibición de circular (autos).</p>",
		},
		{
			q: "Si al aproximarse a una bocacalle sin semáforo, Ud. advierte que un peatón pretende efectuar el cruce desde su izquierda hacia su derecha, ¿qué deberá hacer?",
			i: "",
			a: [
				{
					option: "cederle el paso, pues el peatón tiene prioridad.",
					correct: true,
				},
				{
					option:
						"avanzar a velocidad precautoria, pues sólo tiene prioridad aquel que viene por la derecha.",
					correct: false,
				},
				{
					option:
						"la prioridad de paso es del vehículo ya que su marcha es más difícil de controlar.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> cederle el paso, pues el peatón tiene prioridad.</p>",
		},
		{
			q: "En materia de responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
			i: "",
			a: [
				{ option: "la intención de la conducta dañosa;", correct: false },
				{
					option:
						"la existencia de un daño real que afecte a algún particular, provocado como consecuencia del accidente.",
					correct: true,
				},
				{
					option: "la edad de la persona que provoca el daño.",
					correct: false,
				},
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> la existencia de un daño real que afecte a algún particular, provocado como consecuencia del accidente.</p>",
		},
		{
			q: "El alcohol produce en el conductor:",
			i: "",
			a: [
				{ option: "Un aumento del campo visual.", correct: false },
				{
					option: "Un estado de euforia y de falsa seguridad en sí mismo.",
					correct: true,
				},
				{ option: "Una reducción del tiempo de reacción.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> Un estado de euforia y de falsa seguridad en sí mismo.</p>",
		},
		{
			q: "Determine qué indica la señal que a continuación se presenta:",
			i: '<img src="https://examendeconducir.com.ar/images/simulador/caba/categoriaB/94.jpg" />',
			a: [
				{ option: "Carril de emergencia.", correct: false },
				{ option: "No estacionar.", correct: true },
				{ option: "Carril exclusivo.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No estacionar.</p>",
		},
		{
			q: "En el vehículo que Ud. conduce va a viajar como pasajero su hijo de ocho años ¿está permitido que lo haga en el asiento delantero del mismo?",
			i: "",
			a: [
				{ option: "No, en ningún caso.", correct: true },
				{
					option:
						"No, salvo que utilice asientos de seguridad o dispositivos debidamente homologados para este fin.",
					correct: false,
				},
				{ option: "Sí, en todos los casos.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No, en ningún caso.</p>",
		},
		{
			q: "Al atravesar túneles o puentes en una ruta ¿está permitido adelantarse a otro vehículo?",
			i: "",
			a: [
				{ option: "Sí.", correct: false },
				{ option: "No.", correct: true },
				{ option: "Según los días y horas.", correct: false },
			],
			correct: "<p><span>CORRECTO</span></p>",
			incorrect:
				"<p><span>INCORRECTO</span> <strong>Respuesta correcta:</strong> No.</p>",
		},
	],
};
