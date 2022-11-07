//http://www.driverschool.com.ar/manuales/iesvi/evaluaciones/#/capitulo/8
//http://www.driverschool.com.ar/manuales/iesvi/evaluaciones/#/capitulo/9
//http://www.driverschool.com.ar/manuales/iesvi/evaluaciones/#/capitulo/10
//http://www.driverschool.com.ar/manuales/iesvi/evaluaciones/#/capitulo/11
//http://www.driverschool.com.ar/manuales/iesvi/evaluaciones/#/capitulo/12

export default {
	quiz: { Id: 8, name: "Categoria B Autos y Camionetas hasta 3.500kg: Test 1" },
	questions: [
		{
			Id: 1,
			Name: "Determine que indica la se\u00f1al que a continuacion se presenta:",
			Image: "b-t1-1.jpg",
			Options: [
				{
					Id: 1,
					Name: "Proximidad de bosques.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 2, Name: "Zonas de palmeras.", IsAnswer: false },
				{ Id: 3, Name: "Vientos fuertes laterales", IsAnswer: true },
			],
		},
		{
			Id: 2,
			Name: "Cuando se debe cruzar la acera (vereda) para salir a la via publica \u00bfde quien se presume que es la responsabilidad si se produce un accidente con un peaton u otro vehiculo?",
			Options: [
				{
					Id: 3,
					Name: "Del peaton, por no tomar la precaucion al llegar a una salida de vehiculos.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 4,
					Name: "Del conductor del otro vehi\u0301culo, por no tener cuidado",
					IsAnswer: false,
				},
				{
					Id: 5,
					Name: "Del conductor del vehi\u0301culo que sale a la vi\u0301a pu\u0301blica.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 3,
			Name: "En algunas vi\u0301as de tra\u0301nsito podemos encontrar marcas en el piso o bien carteles con signos similares a una V invertida \u00bfque\u0301 significados tienen esos signos o marcas?",
			Options: [
				{
					Id: 6,
					Name: "Que estamos en una zona donde frecuentemente hay niebla",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 7,
					Name: "Que estamos en una zona de velocidad controlada (radar)",
					IsAnswer: false,
				},
				{
					Id: 8,
					Name: "Que estamos en una zona que se inunda",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 4,
			Name: "\u00bfQuie\u0301n es el responsable civil por un accidente de tra\u0301nsito producido por un menor de edad poseedor de una licencia de conductor?",
			Options: [
				{
					Id: 9,
					Name: "El que lo acompan\u0303a",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 10,
					Name: "El que firmo\u0301 la autorizacio\u0301n para obtener la licencia",
					IsAnswer: true,
				},
				{
					Id: 11,
					Name: "El que le autorizo\u0301 el uso del vehi\u0301culo",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 5,
			Name: "Cuando se estaciona en proximidad de una esquina \u00bfque\u0301 li\u0301nea no debe superarse?",
			Options: [
				{
					Id: 12,
					Name: "La li\u0301nea peatonal",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 13,
					Name: "La li\u0301nea imaginaria de prolongacio\u0301n de ochava",
					IsAnswer: true,
				},
				{
					Id: 14,
					Name: "La li\u0301nea de edificacio\u0301n transversal",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 6,
			Name: 'En materia de sen\u0303alamiento horizontal o demarcacio\u0301n horizontal \u00bfque\u0301 se entiende por "isleta"?',
			Options: [
				{
					Id: 15,
					Name: "Son las marcas canalizadoras y orientadoras de tra\u0301nsito. No se puede traspasar o circular sobre ellas.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 16,
					Name: "Son marcas en la calzada que indican lugares donde esta\u0301 permitido detenerse.",
					IsAnswer: false,
				},
				{
					Id: 17,
					Name: "Son marcas en la calzada que indican lugares donde esta\u0301 permitido estacionarse y/o detenerse.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 7,
			Name: 'Con cara\u0301cter general, cuando nos encontramos con una sen\u0303al de "PROHIBIDO ESTACIONAR" \u00bfesta\u0301 permitido parar para subir o bajar pasajeros de un automo\u0301vil?"',
			Options: [
				{ Id: 18, Name: "Si", IsAnswer: true, Selected: true },
				{ Id: 19, Name: "No", IsAnswer: false },
				{ Id: 20, Name: "Segun la hora", IsAnswer: false },
			],
		},
		{
			Id: 8,
			Name: "En esta interseccio\u0301n \u00bfque\u0301 vehi\u0301culo pasa en primer lugar?",
			Image: "b-t1-8.jpg",
			Options: [
				{
					Id: 21,
					Name: "El automo\u0301vil rojo.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 22, Name: "El ciclomotor", IsAnswer: false },
				{ Id: 23, Name: "La furgoneta amarilla.", IsAnswer: false },
			],
		},
		{
			Id: 9,
			Name: "\u00bfQue\u0301 significa el te\u0301rmino \u201cculposo\u201d en materia de accidentes de tra\u0301nsito?",
			Options: [
				{
					Id: 24,
					Name: "Que es responsable por actuar con intencio\u0301n de provocar un da\u00f1o",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 25,
					Name: "Que no obro\u0301 con intencio\u0301n de provocar un dan\u0303o.",
					IsAnswer: true,
				},
				{
					Id: 26,
					Name: "Que no estaba habilitado para conducir",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 10,
			Name: "\u00bfCo\u0301mo debe indicar a un vehi\u0301culo que pretende sobrepasar al suyo que no debe hacerlo?",
			Options: [
				{
					Id: 27,
					Name: "Encendiendo las luces llamadas balizas.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 28,
					Name: "Accionando la luz indicadora de giro a la izquierda.",
					IsAnswer: true,
				},
				{
					Id: 29,
					Name: "Accionando la luz indicadora de giro a la derecha",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 11,
			Name: "En la ciudad \u00bfesta\u0301 permitido circular marcha atra\u0301s?",
			Options: [
				{
					Id: 30,
					Name: "So\u0301lo para estacionar, entrar o salir de un garaje (cuando no hay otra posibilidad) o salvar un obsta\u0301culo.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 31, Name: "Cuando es por pocos metros", IsAnswer: false },
				{ Id: 32, Name: "Solamente de di\u0301a.", IsAnswer: false },
			],
		},
		{
			Id: 12,
			Name: "\u00bfQue\u0301 distancia debe dejarse libre cuando se va a estacionar frente a la entrada de hospitales, escuelas, templos u otros organismos pu\u0301blicos?",
			Options: [
				{
					Id: 33,
					Name: "10 metros de cada lado de la entrada",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 34, Name: "Todo el frente del edificio", IsAnswer: false },
				{
					Id: 35,
					Name: "5 metros de cada lado de la entrada.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 13,
			Name: "Si circula con su vehi\u0301culo en un di\u0301a de niebla \u00bfque\u0301 precaucio\u0301n, entre otras, debe tomar?",
			Options: [
				{
					Id: 36,
					Name: "Adaptar la velocidad del vehi\u0301culo a la visibilidad de la vi\u0301a",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 37,
					Name: "Dejar una distancia mi\u0301nima de 50 metros respecto del vehi\u0301culo que circula delante",
					IsAnswer: false,
				},
				{ Id: 38, Name: "No efectuar ninguna maniobra.", IsAnswer: false },
			],
		},
		{
			Id: 14,
			Name: "Si para adelantar debe invadir un carril exclusivo para colectivos y taxis \u00bfle esta\u0301 permitido realizar la maniobra?",
			Options: [
				{
					Id: 39,
					Name: "No, porque esta\u0301 prohibido utilizar dicho carril",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 40,
					Name: "Si\u0301, cuando la li\u0301nea longitudinal del lado exterior de este carril sea discontinua",
					IsAnswer: false,
				},
				{
					Id: 41,
					Name: "Si\u0301, porque so\u0301lo se permite su utilizacio\u0301n para realizar alguna maniobra",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 15,
			Name: "En una autopista, \u00bfesta\u0301 permitido remolcar con su vehi\u0301culo a otro que se encuentra descompuesto?",
			Options: [
				{
					Id: 42,
					Name: "Si\u0301, pero so\u0301lo hasta el lugar ma\u0301s pro\u0301ximo donde pueda quedar inmovilizado",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 43,
					Name: "Si\u0301, pero so\u0301lo si soy titular de un permiso que autoriza a conducir vehi\u0301culos con remolque.",
					IsAnswer: false,
				},
				{ Id: 44, Name: "No, porque esta\u0301 prohibido", IsAnswer: true },
			],
		},
		{
			Id: 16,
			Name: "Ud. ha adelantado a otro vehi\u0301culo en una interseccio\u0301n. \u00bfEs correcto su comportamiento?",
			Options: [
				{
					Id: 45,
					Name: "Si\u0301, porque en este caso tengo prioridad de paso en la interseccio\u0301n.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 46,
					Name: "No, porque en las intersecciones siempre esta\u0301 prohibido adelantar",
					IsAnswer: true,
				},
				{
					Id: 47,
					Name: "No, porque so\u0301lo esta\u0301 permitido adelantar en las intersecciones con rotonda",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 17,
			Name: "\u00bfCua\u0301l de la tres sen\u0303ales indica que la ruta es nacional?",
			Image: "b-t1-17.jpg",
			Options: [
				{ Id: 48, Name: "La se\u00f1al A", IsAnswer: false, Selected: true },
				{ Id: 49, Name: "La se\u00f1al B", IsAnswer: true },
				{ Id: 50, Name: "La se\u00f1al C", IsAnswer: false },
			],
		},
		{
			Id: 18,
			Name: "Todo vehi\u0301culo debe estar cubierto por un seguro \u00bfque\u0301 dan\u0303os debe cubrir el mismo?",
			Options: [
				{
					Id: 51,
					Name: "Debe cubrir eventuales dan\u0303os causados a terceros transportados o no",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 52,
					Name: "Debe cubrir eventuales dan\u0303os causados a terceros transportados u\u0301nicamente",
					IsAnswer: false,
				},
				{
					Id: 53,
					Name: "Debe cubrir los dan\u0303os causados a los vehi\u0301culos u\u0301nicamente",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 19,
			Name: "Esta sen\u0303al indica que ha finalizado:",
			Image: "b-t1-19.jpg",
			Options: [
				{
					Id: 51,
					Name: "Una obligacio\u0301n anterior.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 52, Name: "Una recomendacion anterior.", IsAnswer: false },
				{ Id: 53, Name: "Una prohibicio\u0301n anterior", IsAnswer: true },
			],
		},
		{
			Id: 20,
			Name: "Por norma general, las luces traseras de los vehi\u0301culos deben ser de color rojo (de posicio\u0301n y freno) y amarillas (giros) \u00bfpor que\u0301 la luz de marcha atra\u0301s debe ser blanca?",
			Options: [
				{
					Id: 54,
					Name: "Porque asi\u0301 se las diferencia de las luces de freno, de posicio\u0301n y de las luces de giro.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 55,
					Name: "Porque indica el sentido de circulacio\u0301n. La luz blanca significa que el vehi\u0301culo circula en sentido contrario al nuestro",
					IsAnswer: true,
				},
				{
					Id: 56,
					Name: "Porque por su color blanco se obtiene mejor visio\u0301n cuando la maniobra de retroceso se deba realizar de noche o en condiciones de poca visibilidad.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 21,
			Name: "El que conduce un vehi\u0301culo \u00bfque\u0301 documentacio\u0301n personal debe llevar consigo?",
			Options: [
				{
					Id: 57,
					Name: "La licencia de conductor es suficiente.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 58,
					Name: "La licencia de conductor y su documento de identidad.",
					IsAnswer: true,
				},
				{
					Id: 59,
					Name: "La licencia de conductor, su documento de identidad y la ce\u0301dula verde.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 22,
			Name: "\u00bfEsta\u0301 permitido en los vehi\u0301culos agregar en los paragolpes aditamentos (defensas, etc.) de cualquier naturaleza, que puedan considerarse peligrosos para personas u otros vehi\u0301culos?",
			Options: [
				{
					Id: 60,
					Name: "No esta\u0301 permitido modificar paragolpes originales de fa\u0301brica agrega\u0301ndoles elementos que puedan considerarse peligrosos o agresivos.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 61,
					Name: "Pueden agregarse defensas en vehi\u0301culos pequen\u0303os",
					IsAnswer: false,
				},
				{
					Id: 62,
					Name: "Depende de la zona donde se circule.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 23,
			Name: "Las balizas porta\u0301tiles que es obligatorio llevar en los vehi\u0301culos \u00bfdeben ser los conocidos tria\u0301ngulos reflectivos o pueden ser de otro tipo?",
			Options: [
				{
					Id: 63,
					Name: "Deben ser u\u0301nicamente los tria\u0301ngulos reflectivos.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 64,
					Name: "Pueden ser otras, incluso ele\u0301ctricas, pero deben ser de igual o mayor eficacia que los tria\u0301ngulos.",
					IsAnswer: true,
				},
				{ Id: 65, Name: "Depende del vehi\u0301culo", IsAnswer: false },
			],
		},
		{
			Id: 24,
			Name: "\u00bfCua\u0301ndo esta\u0301 permitido estacionar en a\u0301ngulo con el cordo\u0301n de la acera derecha y/o izquierda?",
			Options: [
				{
					Id: 66,
					Name: "So\u0301lo cuando la calle es ancha.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 67,
					Name: "So\u0301lo cuando el sen\u0303alamiento lo indica",
					IsAnswer: true,
				},
				{
					Id: 68,
					Name: "So\u0301lo cuando es de un lado solamente",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 25,
			Name: "\u00bfQue\u0301 identifica la Cruz de San Andre\u0301s?",
			Options: [
				{ Id: 69, Name: "Cruce de caminos.", IsAnswer: false, Selected: true },
				{ Id: 70, Name: "Cruce de vi\u0301as fe\u0301rreas.", IsAnswer: true },
				{ Id: 71, Name: "Cruce de peatones.", IsAnswer: false },
			],
		},
		{
			Id: 26,
			Name: "Si Ud. sale de un estacionamiento paralelo al cordo\u0301n, previamente debe:",
			Options: [
				{
					Id: 72,
					Name: "Tocar bocina e incorporarse al tra\u0301nsito pasante.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 73,
					Name: "Salir con precaucio\u0301n cuando no haya tra\u0301nsito pasante y colocar la luz de giro",
					IsAnswer: true,
				},
				{
					Id: 74,
					Name: "Salir lo ma\u0301s ra\u0301pido posible porque tiene prioridad.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 27,
			Name: "\u00bfQue\u0301 debe hacer si observa que un vehi\u0301culo esta\u0301 a punto de alcanzarlo y pasarlo?",
			Options: [
				{
					Id: 75,
					Name: "Cen\u0303irse bien a la derecha, y si es necesario, bajar la velocidad.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 76, Name: "Aumentar la velocidad.", IsAnswer: false },
				{
					Id: 77,
					Name: "Es indiferente la velocidad de su vehi\u0301culo.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 28,
			Name: "En zona rural, cuando un peato\u0301n transita por la banquina \u00bfpor que\u0301 lado debe caminar?",
			Options: [
				{
					Id: 78,
					Name: "Caminar en sentido contrario al tra\u0301nsito que viene hacia e\u0301l.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 79,
					Name: "Transitar lo ma\u0301s pro\u0301ximo a la ruta.",
					IsAnswer: false,
				},
				{
					Id: 80,
					Name: "Caminar en el mismo sentido que el tra\u0301nsito.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 29,
			Name: "\u00bfQue\u0301 es un carril de circulacio\u0301n vehicular?",
			Options: [
				{
					Id: 81,
					Name: "Banquina de la izquierda.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 82, Name: "Banquina de la derecha.", IsAnswer: false },
				{
					Id: 83,
					Name: "Franja de la calzada por donde circulan los vehi\u0301culos en una fila.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 30,
			Name: "\u00bfCua\u0301l es la forma correcta de adelantarse a otro vehi\u0301culo?",
			Options: [
				{ Id: 84, Name: "Por la derecha.", IsAnswer: false, Selected: true },
				{ Id: 85, Name: "Por la banquina.", IsAnswer: false },
				{
					Id: 86,
					Name: "Por la izquierda, haciendo las sen\u0303ales respectivas",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 31,
			Name: "\u00bfQue\u0301 debe entenderse por bocacalle?",
			Options: [
				{
					Id: 87,
					Name: "La zona de la calzada comu\u0301n a dos o ma\u0301s arterias, incluidas las sendas o pasos peatonales.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 88,
					Name: "El lugar donde se cruzan una calle con una avenida",
					IsAnswer: false,
				},
				{
					Id: 89,
					Name: "El lugar donde se cruzan dos autopistas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 32,
			Name: "\u00bfCua\u0301l es la velocidad ma\u0301xima permitida en avenidas, salvo sen\u0303alizacio\u0301n que indique lo contrario?",
			Options: [
				{ Id: 90, Name: "80 km/h.", IsAnswer: false, Selected: true },
				{ Id: 91, Name: "60 km/h.", IsAnswer: true },
				{ Id: 92, Name: "40 km/h.", IsAnswer: false },
			],
		},
		{
			Id: 33,
			Name: "\u00bfCua\u0301l es la velocidad ma\u0301xima permitida en calles?",
			Options: [
				{ Id: 93, Name: "30 km/h", IsAnswer: false, Selected: true },
				{ Id: 94, Name: "40 km/h", IsAnswer: true },
				{ Id: 95, Name: "50 km/h", IsAnswer: false },
			],
		},
		{
			Id: 34,
			Name: "Cuando un vehi\u0301culo circula por una arteria ubicada al costado de una vi\u0301a fe\u0301rrea \u00bfes obligatorio ceder el paso a otro que sale del paso a nivel?",
			Options: [
				{
					Id: 96,
					Name: "Si\u0301, si viene desde la derecha.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 97, Name: "No, si viene desde la izquierda.", IsAnswer: false },
				{
					Id: 98,
					Name: "Debe cede\u0301rsele el paso, venga de la izquierda o de la derecha.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 35,
			Name: "\u00bfCo\u0301mo norma general, cua\u0301l es la velocidad ma\u0301xima permitida en autopistas, en el a\u0301mbito de la Ciudad Auto\u0301noma de Buenos Aires?",
			Options: [
				{ Id: 99, Name: "70 km/h", IsAnswer: false, Selected: true },
				{ Id: 100, Name: "100 km/h", IsAnswer: true },
				{ Id: 101, Name: "120 km/h", IsAnswer: false },
			],
		},
		{
			Id: 36,
			Name: "Entre los efectos que produce el alcohol en el conductor se encuentra la:",
			Options: [
				{
					Id: 102,
					Name: "Incorrecta apreciacio\u0301n de distancias y velocidades.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 103,
					Name: "Ampliacio\u0301n del campo visual.",
					IsAnswer: false,
				},
				{
					Id: 104,
					Name: "Disminucio\u0301n de la distancia de frenado.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 37,
			Name: "La instalacio\u0301n del airbag en un vehi\u0301culo \u00bfsustituye la obligacio\u0301n de utilizar el cinturo\u0301n de seguridad?",
			Options: [
				{
					Id: 105,
					Name: "Si\u0301, porque evita el impacto del conductor y pasajeros contra los elementos del vehi\u0301culo.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 106,
					Name: "Si\u0301, porque evita lesiones en el cabeza y cuello",
					IsAnswer: false,
				},
				{
					Id: 107,
					Name: "No, porque actu\u0301a complementando la proteccio\u0301n que ofrece el cinturo\u0301n de seguridad",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 38,
			Name: "Usted ha sufrido un desperfecto en su vehi\u0301culo y lo ha dejado inmovilizado en la banquina. \u00bfDebe sen\u0303alizarlo?",
			Options: [
				{
					Id: 108,
					Name: "No, porque el vehi\u0301culo no esta\u0301 en la calzada.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 109,
					Name: "Si\u0301, con los tria\u0301ngulos de sen\u0303alizacio\u0301n de peligro.",
					IsAnswer: false,
				},
				{
					Id: 110,
					Name: "Si\u0301, con las balizas encendidas, los tria\u0301ngulos de sen\u0303alizacio\u0301n de peligro y con las luces de posicio\u0301n.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 39,
			Name: "Un tria\u0301ngulo pintado en la calzada, \u00bfque\u0301 significa?",
			Image: "b-t1-39.jpg",
			Options: [
				{
					Id: 111,
					Name: "Advierte de la proximidad de un peligro.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 112,
					Name: "La obligacio\u0301n de ceder el paso en el cruce.",
					IsAnswer: true,
				},
				{ Id: 113, Name: "La prioridad de paso en el cruce.", IsAnswer: false },
			],
		},
		{
			Id: 40,
			Name: "En zona urbana, cuando es obligatorio llevar encendidas las luces de un vehi\u0301culo \u00bfcua\u0301les debemos utilizar?",
			Options: [
				{
					Id: 114,
					Name: "Las luces de posicio\u0301n y las altas",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 115,
					Name: "Las del interior del vehi\u0301culo.",
					IsAnswer: false,
				},
				{
					Id: 116,
					Name: "Las luces de posicio\u0301n y las bajas.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 41,
			Name: "Con cara\u0301cter general \u00bfque\u0301 vehi\u0301culo tiene prioridad de paso en una pendiente?",
			Options: [
				{
					Id: 117,
					Name: "Los vehi\u0301culos que ascienden por sobre los que descienden.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 118,
					Name: "Los vehi\u0301culos que descienden por sobre los que ascienden.",
					IsAnswer: false,
				},
				{
					Id: 118,
					Name: "Depende lo que indique la sen\u0303al correspondiente.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 42,
			Name: "\u00bfQue\u0301 es un carril de aceleracio\u0301n?",
			Options: [
				{
					Id: 119,
					Name: "Es el carril derecho de una autopista.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 120,
					Name: "Es el carril de incorporacio\u0301n a una autopista.",
					IsAnswer: true,
				},
				{
					Id: 121,
					Name: "Es el carril izquierdo de una autopista",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 43,
			Name: "Si el conductor de un vehi\u0301culo circula con las balizas encendidas, toca repetidamente la bocina y el acompan\u0303ante saca el brazo agitando un pan\u0303uelo. \u00bfQue\u0301 esta\u0301n indicando?",
			Options: [
				{
					Id: 122,
					Name: "Que el vehi\u0301culo tiene un desperfecto.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 123,
					Name: "Que transportan a una persona grave a un hospital.",
					IsAnswer: true,
				},
				{
					Id: 124,
					Name: "Al exceso de velocidad y a la violacio\u0301n de luz roja.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 44,
			Name: "\u00bfCua\u0301l es la velocidad ma\u0301xima permitida en autopistas, segu\u0301n la Ley 24.449?",
			Options: [
				{ Id: 125, Name: "60 km./h.", IsAnswer: false, Selected: true },
				{ Id: 126, Name: "80 km./h.", IsAnswer: false },
				{ Id: 127, Name: "130 km./h.", IsAnswer: true },
			],
		},
		{
			Id: 45,
			Name: "\u00bfQuie\u0301n tiene prioridad de paso en una rotonda?",
			Options: [
				{
					Id: 128,
					Name: "El vehi\u0301culo que circula por la rotonda sobre el que intenta ingresar; y el vehi\u0301culo que egresa sobre el que intenta ingresar o continu\u0301a circulando.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 129,
					Name: "El vehi\u0301culo que quiere ingresar a la rotonda por sobre el que quiere egresar de la misma.",
					IsAnswer: false,
				},
				{
					Id: 130,
					Name: "El vehi\u0301culo que quiere ingresar a la rotonda sobre el que esta\u0301 circulando en la misma.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 46,
			Name: "En caso de niebla \u00bfes mejor parar en la banquina?",
			Options: [
				{
					Id: 131,
					Name: "Cuando la niebla es muy cerrada; si\u0301.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 132,
					Name: "Nunca, si no hay otra posibilidad, debe alejarse lo ma\u0301s posible de la calzada y de la banquina.",
					IsAnswer: true,
				},
				{
					Id: 133,
					Name: "Cuando la niebla no es muy cerrada; si\u0301.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 47,
			Name: "Antes de iniciar un giro, \u00bfa que\u0301 distancia mi\u0301nima del cruce debe estar ubicado el vehi\u0301culo sobre el carril ma\u0301s pro\u0301ximo al cordo\u0301n del lado que va a doblar?",
			Options: [
				{ Id: 134, Name: "10 metros", IsAnswer: false, Selected: true },
				{ Id: 135, Name: "20 metros", IsAnswer: false },
				{ Id: 136, Name: "30 metros", IsAnswer: true },
			],
		},
		{
			Id: 48,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t1-48.jpg",
			Options: [
				{ Id: 137, Name: "Contramano", IsAnswer: true, Selected: true },
				{ Id: 138, Name: "Rotonda", IsAnswer: false },
				{ Id: 139, Name: "Puesto de Control", IsAnswer: false },
			],
		},
		{
			Id: 49,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t1-49.jpg",
			Options: [
				{
					Id: 140,
					Name: "Estrechamiento en las dos manos.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 141, Name: "Puente angosto.", IsAnswer: true },
				{ Id: 142, Name: "Calzada dividida.", IsAnswer: false },
			],
		},
		{
			Id: 50,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t1-50.jpg",
			Options: [
				{
					Id: 143,
					Name: "Prohibicio\u0301n de estacionar.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 144, Name: "No estacionar ni detenerse.", IsAnswer: true },
				{ Id: 145, Name: "Estacionamiento exclusivo.", IsAnswer: false },
			],
		},
		{
			Id: 51,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t1-51.jpg",
			Options: [
				{
					Id: 146,
					Name: "Inicio de doble circulacio\u0301n.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 147, Name: "Calzada dividida.", IsAnswer: false },
				{ Id: 148, Name: "Camino sinuoso.", IsAnswer: false },
			],
		},
		{
			Id: 1,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-1.jpg",
			Options: [
				{
					Id: 1,
					Name: "Altura limitada (ma\u0301xima).",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 2, Name: "Ancho limitado.", IsAnswer: false },
				{ Id: 3, Name: "Puente angosto.", IsAnswer: false },
			],
		},
		{
			Id: 2,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-2.jpg",
			Options: [
				{ Id: 4, Name: "Rotonda.", IsAnswer: false, Selected: true },
				{ Id: 5, Name: "Calzada dividida.", IsAnswer: true },
				{ Id: 6, Name: "Inicio doble mano.", IsAnswer: false },
			],
		},
		{
			Id: 3,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-3.jpg",
			Options: [
				{
					Id: 7,
					Name: "Estrechamiento (en una mano).",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 8, Name: "Calzada dividida.", IsAnswer: false },
				{ Id: 9, Name: "Estrechamiento (en las dos manos).", IsAnswer: true },
			],
		},
		{
			Id: 4,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-4.jpg",
			Options: [
				{
					Id: 10,
					Name: "Limitacio\u0301n de altura.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 11, Name: "Limitacio\u0301n de ancho.", IsAnswer: false },
				{ Id: 12, Name: "Limitacio\u0301n de peso.", IsAnswer: false },
			],
		},
		{
			Id: 5,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-5.jpg",
			Options: [
				{ Id: 13, Name: "Encrucijada", IsAnswer: false, Selected: true },
				{ Id: 14, Name: "Camino lateral", IsAnswer: false },
				{
					Id: 15,
					Name: "Incorporacio\u0301n de tra\u0301nsito lateral",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 6,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-6.jpg",
			Options: [
				{ Id: 16, Name: "Ceda el paso.", IsAnswer: true, Selected: true },
				{ Id: 17, Name: "Atencio\u0301n.", IsAnswer: false },
				{ Id: 18, Name: "Carril exclusivo de colectivos.", IsAnswer: false },
			],
		},
		{
			Id: 7,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-7.jpg",
			Options: [
				{ Id: 19, Name: "Contramano", IsAnswer: false, Selected: true },
				{ Id: 20, Name: "No avanzar", IsAnswer: false },
				{ Id: 21, Name: "Pare", IsAnswer: true },
			],
		},
		{
			Id: 8,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-8.jpg",
			Options: [
				{
					Id: 22,
					Name: "Curva (comu\u0301n)",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 23, Name: "Curva (en S)", IsAnswer: true },
				{ Id: 24, Name: "Calzada dividida", IsAnswer: false },
			],
		},
		{
			Id: 9,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-9.jpg",
			Options: [
				{
					Id: 25,
					Name: "Limitacio\u0301n de altura.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 26, Name: "Limitacio\u0301n de peso.", IsAnswer: true },
				{ Id: 27, Name: "Limitacio\u0301n de ancho.", IsAnswer: false },
			],
		},
		{
			Id: 10,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-10.jpg",
			Options: [
				{
					Id: 28,
					Name: "Limitacio\u0301n de ancho.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 29, Name: "Limitacio\u0301n de altura.", IsAnswer: false },
				{ Id: 30, Name: "Puente angosto.", IsAnswer: false },
			],
		},
		{
			Id: 11,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-11.jpg",
			Options: [
				{
					Id: 31,
					Name: "Estrechamiento (en dos manos).",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 32, Name: "Estrechamiento (en una mano).", IsAnswer: true },
				{ Id: 33, Name: "Puente angosto.", IsAnswer: false },
			],
		},
		{
			Id: 12,
			Name: "Ingerir alimentos antes de conducir puede afectar negativamente a la conduccio\u0301n. Por tanto, antes de iniciar un viaje y para evitar la aparicio\u0301n de suen\u0303o debe:",
			Options: [
				{
					Id: 34,
					Name: "Abstenerse de ingerir alimentos para viajar en ayunas",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 35,
					Name: "Ingerir alimentos de alto contenido en grasas, que dan mayor vitalidad",
					IsAnswer: false,
				},
				{
					Id: 36,
					Name: "Ingerir alimentos ligeros, de bajo poder calo\u0301rico, que son de fa\u0301cil digestio\u0301n.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 13,
			Name: "El camio\u0301n de la fotografi\u0301a esta\u0301 detenido por un tiempo indeterminado en doble fila durante el reparto de la mercanci\u0301a, \u00bfes correcta su posicio\u0301n en la calzada?",
			Image: "b-t2-13.jpg",
			Options: [
				{ Id: 37, Name: "Si\u0301", IsAnswer: false, Selected: true },
				{ Id: 38, Name: "No.", IsAnswer: true },
				{
					Id: 39,
					Name: "Si\u0301, siempre que lo haga en el horario permitido para carga y descarga",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 14,
			Name: "El vehi\u0301culo que se observa en la fotografi\u0301a lleva una sen\u0303al de color naranja con reborde negro, compuesta por dos recta\u0301ngulos y nu\u0301meros en su interior \u00bfque\u0301 significa?",
			Image: "b-t2-14.jpg",
			Options: [
				{
					Id: 40,
					Name: "Que el vehi\u0301culo transporta mercanci\u0301a peligrosas determinadas por los nu\u0301meros.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 41,
					Name: "Que el vehi\u0301culo excede en masas y dimensiones.",
					IsAnswer: false,
				},
				{
					Id: 42,
					Name: "Que el vehi\u0301culo lleva una patente extranjera",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 15,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-15.jpg",
			Options: [
				{
					Id: 43,
					Name: "Proyeccio\u0301n de piedras.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 44, Name: "Zona de derrumbe.", IsAnswer: true },
				{ Id: 45, Name: "Calzada resbaladiza", IsAnswer: false },
			],
		},
		{
			Id: 16,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-16.jpg",
			Options: [
				{ Id: 46, Name: "Camino sinuoso", IsAnswer: false, Selected: true },
				{ Id: 47, Name: "Calzada resbaladiza.", IsAnswer: true },
				{ Id: 48, Name: "Curva y contracurva", IsAnswer: false },
			],
		},
		{
			Id: 17,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-17.jpg",
			Options: [
				{ Id: 49, Name: "Zona de derrumbe.", IsAnswer: false, Selected: true },
				{ Id: 50, Name: "Calzada resbaladiza.", IsAnswer: false },
				{ Id: 51, Name: "Proyeccio\u0301n de piedras", IsAnswer: true },
			],
		},
		{
			Id: 18,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-18.jpg",
			Options: [
				{ Id: 52, Name: "Cruce de peatones", IsAnswer: true, Selected: true },
				{ Id: 53, Name: "Peatones a la izquierda.", IsAnswer: false },
				{ Id: 54, Name: "Prohibicio\u0301n de circular.", IsAnswer: false },
			],
		},
		{
			Id: 19,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-19.jpg",
			Options: [
				{ Id: 55, Name: "Curva cerrada.", IsAnswer: true, Selected: true },
				{ Id: 56, Name: "Curva (comu\u0301n).", IsAnswer: false },
				{ Id: 57, Name: "Calzada resbaladiza.", IsAnswer: false },
			],
		},
		{
			Id: 20,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-20.jpg",
			Options: [
				{ Id: 58, Name: "Puesto de control.", IsAnswer: true, Selected: true },
				{ Id: 59, Name: "Contramano", IsAnswer: false },
				{ Id: 60, Name: "No avanzar", IsAnswer: false },
			],
		},
		{
			Id: 21,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-21.jpg",
			Options: [
				{ Id: 61, Name: "Tu\u0301nel", IsAnswer: true, Selected: true },
				{ Id: 62, Name: "Puente angosto", IsAnswer: false },
				{ Id: 63, Name: "Altura mi\u0301nima", IsAnswer: false },
			],
		},
		{
			Id: 22,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-22.jpg",
			Options: [
				{
					Id: 64,
					Name: "Vientos fuertes laterales.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 65, Name: "Estrechamiento", IsAnswer: false },
				{ Id: 66, Name: "Atencio\u0301n", IsAnswer: true },
			],
		},
		{
			Id: 23,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-23.jpg",
			Options: [
				{ Id: 67, Name: "No estacionar", IsAnswer: false, Selected: true },
				{ Id: 68, Name: "Estacionamiento exclusivo", IsAnswer: true },
				{ Id: 69, Name: "No estacionar ni detenerse", IsAnswer: false },
			],
		},
		{
			Id: 24,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-24.jpg",
			Options: [
				{
					Id: 70,
					Name: "Paso obligado (derecha).",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 71, Name: "Paso obligado (izquierda)", IsAnswer: false },
				{ Id: 72, Name: "Encrucijada (cruce).", IsAnswer: false },
			],
		},
		{
			Id: 25,
			Name: "A las placas de identificacio\u0301n de dominio (chapas patente) \u00bfesta\u0301 permitido ubicarlas en la luneta trasera del vehi\u0301culo u otro lugar que nosotros deseamos?",
			Options: [
				{
					Id: 73,
					Name: "Si, siempre que sean bien visibles.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 74,
					Name: "Si\u0301, pero solo la placa trasera.",
					IsAnswer: false,
				},
				{
					Id: 75,
					Name: "No, las placas deben ubicarse en los lugares indicados para ello, sin excepcio\u0301n.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 26,
			Name: "Si la luz verde del sema\u0301foro nos da paso en un cruce de calles y por la transversal au\u0301n avanza algu\u0301n vehi\u0301culo \u00bfque\u0301 debemos hacer?",
			Options: [
				{
					Id: 76,
					Name: "No iniciar el cruce, hasta que los dema\u0301s vehi\u0301culos hayan completado el suyo.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 77,
					Name: "Avanzar, la prioridad es nuestra porque tenemos luz verde.",
					IsAnswer: false,
				},
				{
					Id: 78,
					Name: "Esperar hasta que se reinicie el verde.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 27,
			Name: "Con cara\u0301cter general, \u00bfesta\u0301 prohibido en zona urbana el uso de bocina en los vehi\u0301culos?",
			Options: [
				{
					Id: 79,
					Name: "No, esta\u0301 permitido.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 80, Name: "Si, esta\u0301 prohibido.", IsAnswer: false },
				{
					Id: 81,
					Name: "Esta\u0301 prohibido el uso indebido de la bocina.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 28,
			Name: "\u00bfCua\u0301l es el nivel ma\u0301ximo de alcoholemia admitido para conducir un automo\u0301vil particular?",
			Options: [
				{
					Id: 82,
					Name: "0,8 gr. por litro de sangre.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 83, Name: "0,5 gr. por litro de sangre.", IsAnswer: true },
				{ Id: 84, Name: "1,5 gr. por litro de sangre.", IsAnswer: false },
			],
		},
		{
			Id: 29,
			Name: "Cuando no hay senda peatonal marcada en el piso \u00bfpor do\u0301nde debemos cruzar las calles?",
			Options: [
				{ Id: 85, Name: "A mitad de cuadra.", IsAnswer: false, Selected: true },
				{
					Id: 86,
					Name: "En coincidencia con las paradas de transporte.",
					IsAnswer: false,
				},
				{
					Id: 87,
					Name: "En la esquina, por la prolongacio\u0301n de la vereda sobre la calle",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 30,
			Name: "Ud. esta\u0301 llegando a un cruce de calles sin sema\u0301foros ni polici\u0301a, una persona esta\u0301 cruzando por la senda peatonal, Ud debe:",
			Options: [
				{
					Id: 88,
					Name: "Disminuir la marcha y tener cuidado",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 89,
					Name: "Parar y cederle el paso al peato\u0301n.",
					IsAnswer: true,
				},
				{
					Id: 90,
					Name: "Seguir y atravesar el cruce, porque tiene prioridad.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 31,
			Name: "Al atravesar tu\u0301neles o puentes en una ruta \u00bfesta\u0301 permitido adelantarse a otro vehi\u0301culo?",
			Options: [
				{ Id: 91, Name: "Si.", IsAnswer: false, Selected: true },
				{ Id: 92, Name: "No", IsAnswer: true },
				{ Id: 93, Name: "Segu\u0301n los di\u0301as y horas", IsAnswer: false },
			],
		},
		{
			Id: 32,
			Name: "\u00bfEsta\u0301 permitido detener un vehi\u0301culo sobre una senda peatonal?",
			Options: [
				{ Id: 94, Name: "No", IsAnswer: true, Selected: true },
				{ Id: 95, Name: "Si", IsAnswer: false },
				{ Id: 96, Name: "Segu\u0301n los casos", IsAnswer: false },
			],
		},
		{
			Id: 33,
			Name: "\u00bfQue\u0301 distancia debe dejarse entre el cordo\u0301n de la acera y el vehi\u0301culo, al estacionar en forma paralela al mismo?",
			Options: [
				{ Id: 97, Name: "50 cm.", IsAnswer: false, Selected: true },
				{ Id: 98, Name: "10 cm.", IsAnswer: false },
				{ Id: 99, Name: "20 cm.", IsAnswer: true },
			],
		},
		{
			Id: 34,
			Name: "En un automo\u0301vil \u00bfcua\u0301l es la profundidad mi\u0301nima que debe tener el dibujo de las cubiertas?",
			Options: [
				{ Id: 100, Name: "0,5 mm", IsAnswer: false, Selected: true },
				{ Id: 101, Name: "1,0 mm", IsAnswer: false },
				{ Id: 102, Name: "1,6 mm", IsAnswer: true },
			],
		},
		{
			Id: 35,
			Name: "\u00bfQue\u0301 utilidad tienen los cinturones de seguridad?",
			Options: [
				{
					Id: 103,
					Name: "Son u\u0301tiles so\u0301lo para altas velocidades.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 104,
					Name: "Sirven para proteger a los menores.",
					IsAnswer: false,
				},
				{
					Id: 105,
					Name: "Evitan y/o disminuyen los dan\u0303os fi\u0301sicos a las personas, en caso de accidentes.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 36,
			Name: "Como norma de cara\u0301cter general, \u00bfquie\u0301n tiene prioridad de paso en una encrucijada o bocacalle?",
			Options: [
				{
					Id: 106,
					Name: "Los vehi\u0301culos de transporte de pasajero.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 107,
					Name: "El vehi\u0301culo de menor taman\u0303o.",
					IsAnswer: false,
				},
				{
					Id: 108,
					Name: "El vehi\u0301culo que se presenta por el lado derecho.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 37,
			Name: "En los vehi\u0301culos que poseen cinturones de seguridad \u00bfes obligatorio usarlos?",
			Options: [
				{
					Id: 109,
					Name: "Si\u0301, todos sin excepcio\u0301n.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 110,
					Name: "So\u0301lo los que ocupen el asiento delantero, siendo opcional para los dema\u0301s.",
					IsAnswer: false,
				},
				{
					Id: 111,
					Name: "Si\u0301, pero u\u0301nicamente cuando circulen en rutas o autopistas",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 38,
			Name: "Al estacionar su vehi\u0301culo observa que no deja espacio suficiente para el paso de otros vehi\u0301culos, por lo que estaciona ocupando parte de la acera \u00bfes correcto su comportamiento?",
			Options: [
				{ Id: 112, Name: "No", IsAnswer: true, Selected: true },
				{
					Id: 113,
					Name: "Si\u0301, siempre que no obstaculice el paso de los peatones por la acera.",
					IsAnswer: false,
				},
				{
					Id: 114,
					Name: "Si\u0301, pero u\u0301nicamente por la noche, que es cuando menos tra\u0301nsito de peatones hay.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 39,
			Name: "Ud. observa que una ambulancia se aproxima con las luces especiales encendidas \u00bfdebe facilitarle el paso?",
			Options: [
				{
					Id: 115,
					Name: "No, porque so\u0301lo advierten de su presencia, pero no significa que este\u0301n realizando un servicio urgente.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 116,
					Name: "Si\u0301, porque debo entender que circula en servicio de urgencia.",
					IsAnswer: false,
				},
				{
					Id: 117,
					Name: "Si\u0301, so\u0301lo cuando se advierta que esta\u0301 trasladando pacientes.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 40,
			Name: "Para advertir a otros conductores que va a realizar una maniobra con su vehi\u0301culo, preferentemente lo hara\u0301 con:",
			Options: [
				{ Id: 118, Name: "El brazo.", IsAnswer: false, Selected: true },
				{
					Id: 119,
					Name: "La sen\u0303alizacio\u0301n luminosa del vehi\u0301culo.",
					IsAnswer: true,
				},
				{
					Id: 120,
					Name: "La sen\u0303alizacio\u0301n acu\u0301stica del vehi\u0301culo.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 41,
			Name: "Circula detra\u0301s de otros vehi\u0301culos por una vi\u0301a urbana. Si al llegar a una interseccio\u0301n preve\u0301 que va a quedar detenido en la misma obstruyendo la circulacio\u0301n transversal, \u00bfque\u0301 debe hacer?",
			Options: [
				{
					Id: 121,
					Name: "Pasar si tengo preferencia de paso.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 122,
					Name: "Intentar atravesar la interseccio\u0301n en el caso de que la luz este\u0301 en verde.",
					IsAnswer: false,
				},
				{
					Id: 123,
					Name: "No penetrar en la interseccio\u0301n hasta estar seguro de que voy a poder franquearla sin ser un obsta\u0301culo.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 42,
			Name: "Los vehi\u0301culos de emergencia \u00bfCua\u0301ndo tienen prioridad de paso?",
			Options: [
				{ Id: 124, Name: "Siempre", IsAnswer: false, Selected: true },
				{
					Id: 125,
					Name: "Cuando esta\u0301n en una situacio\u0301n de emergencia",
					IsAnswer: true,
				},
				{
					Id: 126,
					Name: "Cuando esta\u0301n en situacio\u0301n de emergencia y circulan por una avenida",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 43,
			Name: "\u00bfEn condiciones normales, a que\u0301 distancia mi\u0301nima en tiempo debe circular en relacio\u0301n al vehi\u0301culo que lo antecede?",
			Options: [
				{
					Id: 127,
					Name: 'A una separacio\u0301n en tiempo de cinco segundos (5").',
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 128,
					Name: 'A una separacio\u0301n en tiempo de dos segundos (2").',
					IsAnswer: true,
				},
				{
					Id: 129,
					Name: 'A una separacio\u0301n en tiempo de tres segundos (3").',
					IsAnswer: false,
				},
			],
		},
		{
			Id: 44,
			Name: "\u00bfQue\u0301 significa el te\u0301rmino hidroplaneo (acuaplaning)?",
			Options: [
				{
					Id: 130,
					Name: "Que las cubiertas comienzan a desplazarse u\u0301nicamente sobre una peli\u0301cula de aceite.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 131,
					Name: "Que las cubiertas comienzan a desplazarse u\u0301nicamente sobre una peli\u0301cula de agua.",
					IsAnswer: true,
				},
				{
					Id: 132,
					Name: "Es el plazo de vida u\u0301til del vehi\u0301culo.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 45,
			Name: "Una li\u0301nea de trazo discontinuo demarcada sobre la calzada en forma paralela a su eje (a lo largo) \u00bfque\u0301 nos indica?",
			Options: [
				{
					Id: 133,
					Name: "Indica que la misma no puede ser traspasada, debiendo conservar su lugar el vehi\u0301culo que circula contiguo a ella.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 134,
					Name: "Indica que puede ser traspasada para adelantar a otro vehi\u0301culo.",
					IsAnswer: true,
				},
				{
					Id: 135,
					Name: "Que el asfalto se encuentra en mal estado de conservacio\u0301n.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 46,
			Name: "\u00bfQue\u0301 significa la doble li\u0301nea continua amarilla?",
			Options: [
				{
					Id: 136,
					Name: "Es una sen\u0303alizacio\u0301n que se utiliza u\u0301nicamente para dividir los sentidos de circulacio\u0301n.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 137,
					Name: "Indica, para ambos sentidos de circulacio\u0301n, que no debe ser traspasada ni se puede circular sobre ella.",
					IsAnswer: true,
				},
				{
					Id: 138,
					Name: "Significa que solo pueden circular vehi\u0301culos particulares.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 47,
			Name: "\u00bfQue\u0301 es una arteria de doble mano?",
			Options: [
				{
					Id: 139,
					Name: "Una vi\u0301a ancha que se cruza con otra vi\u0301a.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 140,
					Name: "Una vi\u0301a donde se circula en ambos sentidos de tra\u0301nsito.",
					IsAnswer: true,
				},
				{
					Id: 141,
					Name: "Una vi\u0301a reservada al uso de transporte pu\u0301blico.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 48,
			Name: "Adelantarse en una curva esta\u0301 permitido:",
			Options: [
				{
					Id: 142,
					Name: "Solo si la curva no es muy cerrada.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 143,
					Name: "Solo si no viene un vehi\u0301culo en sentido contrario.",
					IsAnswer: false,
				},
				{ Id: 144, Name: "No, esta\u0301 prohibido.", IsAnswer: true },
			],
		},
		{
			Id: 49,
			Name: "Determine que indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-49.jpg",
			Options: [
				{
					Id: 145,
					Name: "Prohibido adelantarse.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 146, Name: "No ruidos molestos (bocina).", IsAnswer: true },
				{ Id: 147, Name: "Prohibicio\u0301n de luz alta.", IsAnswer: false },
			],
		},
		{
			Id: 50,
			Name: "Determine que indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-50.jpg",
			Options: [
				{
					Id: 148,
					Name: "Camino de cornisa.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 149, Name: "Pendiente de ingreso.", IsAnswer: false },
				{ Id: 150, Name: "Pendiente descendente.", IsAnswer: true },
			],
		},
		{
			Id: 51,
			Name: "Determine que indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t2-51.jpg",
			Options: [
				{
					Id: 151,
					Name: "Prohibido adelantarse.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 152, Name: "Prohibicio\u0301n de circular.", IsAnswer: false },
				{
					Id: 153,
					Name: "Circulacio\u0301n exclusiva de bicicletas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 1,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-1.jpg",
			Options: [
				{
					Id: 1,
					Name: "Girar a la izquierda.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 2, Name: "Proximidad de obsta\u0301culo.", IsAnswer: false },
				{ Id: 3, Name: "Rotonda.", IsAnswer: true },
			],
		},
		{
			Id: 2,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-2.jpg",
			Options: [
				{
					Id: 4,
					Name: "Velocidad ma\u0301xima.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 5, Name: "Velocidad mi\u0301nima", IsAnswer: true },
				{ Id: 6, Name: "Velocidad controlada por radar", IsAnswer: false },
			],
		},
		{
			Id: 3,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-3.jpg",
			Options: [
				{ Id: 7, Name: "Animales sueltos", IsAnswer: true, Selected: true },
				{ Id: 8, Name: "Zona Rural", IsAnswer: false },
				{ Id: 9, Name: "Zoolo\u0301gico", IsAnswer: false },
			],
		},
		{
			Id: 4,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-4.jpg",
			Options: [
				{
					Id: 10,
					Name: "Limitacio\u0301n largo de vehi\u0301culo",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 11,
					Name: "Circulacio\u0301n exclusiva (transporte pu\u0301blico).",
					IsAnswer: true,
				},
				{ Id: 12, Name: "Tra\u0301nsito pesado a la derecha", IsAnswer: false },
			],
		},
		{
			Id: 5,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-5.jpg",
			Options: [
				{
					Id: 13,
					Name: "Prohibicio\u0301n de circular (bicicletas)",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 14, Name: "Ciclistas", IsAnswer: true },
				{
					Id: 15,
					Name: "Prohibicio\u0301n de circular (motos).",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 6,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-6.jpg",
			Options: [
				{
					Id: 16,
					Name: "Inicio de doble mano.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 17, Name: "Estrechamiento (en una sola mano).", IsAnswer: false },
				{ Id: 18, Name: "Encrucijada (bifurcacio\u0301n).", IsAnswer: true },
			],
		},
		{
			Id: 7,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-7.jpg",
			Options: [
				{ Id: 19, Name: "Cruce ferroviario.", IsAnswer: true, Selected: true },
				{ Id: 20, Name: "Estacio\u0301n ferroviaria.", IsAnswer: false },
				{
					Id: 21,
					Name: "Circulacio\u0301n exclusiva (ferrocarril).",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 8,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-8.jpg",
			Options: [
				{
					Id: 22,
					Name: "Inicio de doble mano.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 23, Name: "Estrechamiento (en una sola mano).", IsAnswer: false },
				{ Id: 24, Name: "Encrucijada (bifurcacio\u0301n)", IsAnswer: true },
			],
		},
		{
			Id: 9,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-9.jpg",
			Options: [
				{
					Id: 25,
					Name: "Li\u0301mite de velocidad mi\u0301nima",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 26, Name: "Velocidad controlada por radar.", IsAnswer: false },
				{
					Id: 27,
					Name: "Li\u0301mite ma\u0301ximo de velocidad.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 10,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-10.jpg",
			Options: [
				{ Id: 28, Name: "Nin\u0303os", IsAnswer: false, Selected: true },
				{ Id: 29, Name: "Escolares", IsAnswer: true },
				{ Id: 30, Name: "Cruce de peatones", IsAnswer: false },
			],
		},
		{
			Id: 11,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-11.jpg",
			Options: [
				{ Id: 31, Name: "Curva cerrada.", IsAnswer: false, Selected: true },
				{ Id: 32, Name: "Giro obligatorio (izquierda).", IsAnswer: true },
				{ Id: 33, Name: "Curva", IsAnswer: false },
			],
		},
		{
			Id: 12,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-12.jpg",
			Options: [
				{
					Id: 34,
					Name: "Zona montan\u0303osa",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 35, Name: "Perfil irregular", IsAnswer: true },
				{ Id: 36, Name: "Cruce ferroviario", IsAnswer: false },
			],
		},
		{
			Id: 13,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-13.jpg",
			Options: [
				{ Id: 37, Name: "Puente mo\u0301vil.", IsAnswer: true, Selected: true },
				{ Id: 38, Name: "Puente angosto.", IsAnswer: false },
				{ Id: 39, Name: "Pendiente (descendente)", IsAnswer: false },
			],
		},
		{
			Id: 14,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-14.jpg",
			Options: [
				{ Id: 40, Name: "Curva", IsAnswer: true, Selected: true },
				{ Id: 41, Name: "Giro obligatorio", IsAnswer: false },
				{ Id: 42, Name: "Camino sinuoso", IsAnswer: false },
			],
		},
		{
			Id: 15,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-15.jpg",
			Options: [
				{
					Id: 43,
					Name: "Carril de emergencia.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 44, Name: "No estacionar.", IsAnswer: true },
				{ Id: 45, Name: "Carril exclusivo", IsAnswer: false },
			],
		},
		{
			Id: 16,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-16.jpg",
			Options: [
				{
					Id: 46,
					Name: "No girar en U (no retomar)",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 47, Name: "No avanzar.", IsAnswer: true },
				{ Id: 48, Name: "Puesto de control.", IsAnswer: false },
			],
		},
		{
			Id: 17,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-17.jpg",
			Options: [
				{
					Id: 49,
					Name: "Curva (comu\u0301n)",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 50,
					Name: "Sentido de circulacio\u0301n (izquierda)",
					IsAnswer: true,
				},
				{ Id: 51, Name: "Encrucijada (cruce)", IsAnswer: false },
			],
		},
		{
			Id: 18,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-18.jpg",
			Options: [
				{ Id: 52, Name: "No avanzar.", IsAnswer: false, Selected: true },
				{ Id: 53, Name: "Comienzo de doble mano.", IsAnswer: false },
				{
					Id: 54,
					Name: "Sentido de circulacio\u0301n (comienzo de sentido u\u0301nico).",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 19,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-19.jpg",
			Options: [
				{
					Id: 55,
					Name: "Prohibicio\u0301n de adelantarse.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 56,
					Name: "Circulacio\u0301n exclusiva (motos).",
					IsAnswer: false,
				},
				{
					Id: 57,
					Name: "Prohibicio\u0301n de circular (autos).",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 20,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-20.jpg",
			Options: [
				{ Id: 58, Name: "Permitido retomar.", IsAnswer: false, Selected: true },
				{ Id: 59, Name: "Camino sinuoso.", IsAnswer: false },
				{ Id: 60, Name: "No girar en U (no retomar).", IsAnswer: true },
			],
		},
		{
			Id: 21,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-21.jpg",
			Options: [
				{ Id: 61, Name: "No girar en U.", IsAnswer: false, Selected: true },
				{ Id: 62, Name: "Prohibido girar a la izquierda.", IsAnswer: true },
				{ Id: 63, Name: "Giro a la izquierda", IsAnswer: false },
			],
		},
		{
			Id: 22,
			Name: "Determine que\u0301 indica la sen\u0303al que a continuacio\u0301n se presenta:",
			Image: "b-t3-22.jpg",
			Options: [
				{ Id: 64, Name: "Curva", IsAnswer: false, Selected: true },
				{ Id: 65, Name: "Giro obligatorio (izquierda).", IsAnswer: false },
				{ Id: 66, Name: "Giro obligatorio (derecha).", IsAnswer: true },
			],
		},
		{
			Id: 23,
			Name: "A la vista de las sen\u0303ales de la fotografi\u0301a, Ud. debe:",
			Image: "b-t3-23.jpg",
			Options: [
				{
					Id: 67,
					Name: "Pasar por el lado que indica la flecha, porque hacia el lado izquierdo la entrada esta\u0301 prohibida",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 68,
					Name: "Pasar por el lado que indica la flecha, porque hacia el lado izquierdo la circulacio\u0301n esta\u0301 prohibida en ambos sentidos de la marcha.",
					IsAnswer: false,
				},
				{
					Id: 69,
					Name: "Pasar por el lado que indica la flecha, aunque podri\u0301a pasar por el lado izquierdo si observo que no se aproxima ningu\u0301n vehi\u0301culo en sentido contrario.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 24,
			Name: "A la vista de la sen\u0303al circular que se observa en la fotografi\u0301a, \u00bfque\u0301 vehi\u0301culo tendra\u0301 preferencia de paso si, en este tramo de vi\u0301a, por su estrechez, es imposible el cruce de ambos vehi\u0301culos?",
			Image: "b-t3-24.jpg",
			Options: [
				{
					Id: 70,
					Name: "El automo\u0301vil.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 71,
					Name: "El vehi\u0301culo que tenga ma\u0301s facilidad de maniobrar.",
					IsAnswer: false,
				},
				{ Id: 72, Name: "El camio\u0301n.", IsAnswer: true },
			],
		},
		{
			Id: 25,
			Name: "Ud. conduce su vehi\u0301culo por esta calzada. A la vista de la sen\u0303alizacio\u0301n que se observa en la fotografi\u0301a \u00bfle esta\u0301 permitido adelantar al automo\u0301vil rojo?",
			Image: "b-t3-25.jpg",
			Options: [
				{ Id: 73, Name: "Si", IsAnswer: false, Selected: true },
				{
					Id: 74,
					Name: "U\u0301nicamente cuando no venga ningu\u0301n vehi\u0301culo en sentido contrario.",
					IsAnswer: false,
				},
				{ Id: 75, Name: "No.", IsAnswer: true },
			],
		},
		{
			Id: 26,
			Name: "En la ciudad, \u00bfesta\u0301 permitido usar la bocina de su vehi\u0301culo para advertir al conductor del vehi\u0301culo que circula delante que va a ser adelantado?",
			Options: [
				{
					Id: 76,
					Name: "Si\u0301, siempre que sea a intervalos cortos y el sonido emitido no sea estridente.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 77,
					Name: "Si\u0301, salvo prohibicio\u0301n expresa mediante la correspondiente sen\u0303al.",
					IsAnswer: false,
				},
				{
					Id: 78,
					Name: "No, porque no es uno de los usos admitidos.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 27,
			Name: "Ud. circula conduciendo su vehi\u0301culo por una vi\u0301a urbana. \u00bfDebe llevar abrochado el cinturo\u0301n de seguridad?",
			Options: [
				{
					Id: 79,
					Name: "Si\u0301, en todos los casos.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 80,
					Name: "No, porque so\u0301lo se exige utilizar el cinturo\u0301n en vi\u0301as interurbanas.",
					IsAnswer: false,
				},
				{ Id: 81, Name: "No, si voy a poca velocidad.", IsAnswer: false },
			],
		},
		{
			Id: 28,
			Name: "En el vehi\u0301culo que Ud. conduce va a viajar como pasajero su hijo de ocho an\u0303os \u00bfesta\u0301 permitido que lo haga en el asiento delantero del mismo?",
			Options: [
				{
					Id: 82,
					Name: "No, en ningu\u0301n caso.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 83,
					Name: "No, salvo que utilice asientos de seguridad o dispositivos debidamente homologados para este fin.",
					IsAnswer: false,
				},
				{ Id: 84, Name: "Si\u0301, en todos los casos.", IsAnswer: false },
			],
		},
		{
			Id: 29,
			Name: "\u00bfDo\u0301nde deben llevarse las balizas porta\u0301tiles?",
			Options: [
				{ Id: 85, Name: "En la guantera.", IsAnswer: false, Selected: true },
				{
					Id: 86,
					Name: "En el interior del habita\u0301culo, debidamente sujetas.",
					IsAnswer: false,
				},
				{ Id: 87, Name: "En un lugar accesible.", IsAnswer: true },
			],
		},
		{
			Id: 30,
			Name: "\u00bfCree Ud. que puede ser encandilado por las luces de otro vehi\u0301culo que circula detra\u0301s del suyo?",
			Options: [
				{
					Id: 88,
					Name: "No, el deslumbramiento u\u0301nicamente lo produce un vehi\u0301culo en sentido contrario.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 89,
					Name: "Si\u0301, siempre que lleve encendida la luz de largo alcance o alta",
					IsAnswer: false,
				},
				{
					Id: 90,
					Name: "Si\u0301, cuando el vehi\u0301culo lleva encendidas las luces altas o, incluso, las luces bajas y por las caracteri\u0301sticas de la vi\u0301a o porque las luces esta\u0301n desalineadas y circula pro\u0301ximo a mi vehi\u0301culo existe la posibilidad de encandilamiento.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 31,
			Name: "En los casos de doble li\u0301nea, compuesta una por un trazo continuo y otra por un trazo discontinuo \u00bfcua\u0301l es la conducta a seguir?",
			Options: [
				{
					Id: 91,
					Name: "Podemos cruzarlas o no, siempre que lo hagamos con precaucio\u0301n.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 92,
					Name: "No esta\u0301 permitido trasponerla.",
					IsAnswer: false,
				},
				{
					Id: 93,
					Name: "Debemos respetar lo que rige con respecto a la li\u0301nea que esta\u0301 de nuestro lado (si es continua no cruzarla; si es discontinua esta\u0301 permitido cruzarla).",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 32,
			Name: "Cuando un sema\u0301foro cambia de luz roja a verde, nos habilita a reiniciar la marcha, no obstante ello, \u00bfque\u0301 precauciones o limitaciones debemos adoptar?",
			Options: [
				{
					Id: 94,
					Name: "No iniciar el cruce si no hay espacio para acomodar el vehi\u0301culo del otro lado sin obstruir la circulacio\u0301n transversal.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 95,
					Name: "Permitir, antes de avanzar, que complete el cruce otro vehi\u0301culo o peato\u0301n que lo esta\u0301 haciendo.",
					IsAnswer: false,
				},
				{ Id: 96, Name: "Por lo menos, lo indicado en a y b.", IsAnswer: true },
			],
		},
		{
			Id: 33,
			Name: "Si a los costados de la ruta observa una sen\u0303al triangular como la que a continuacio\u0301n se presenta, \u00bfque\u0301 debe interpretarse?",
			Image: "b-t3-33.jpg",
			Options: [
				{
					Id: 97,
					Name: "Peligro por la proximidad de una zona de la vi\u0301a en la que la calzada se estrecha por el lado de la derecha.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 98,
					Name: "Peligro por la proximidad de una curva peligrosa hacia la derecha.",
					IsAnswer: true,
				},
				{
					Id: 99,
					Name: "Peligro por la existencia de un tramo de vi\u0301a con fuerte pendiente ascendente.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 34,
			Name: "Segu\u0301n la Ley N\u00b0 2148, en una autopista esta\u0301 prohibido:",
			Options: [
				{
					Id: 100,
					Name: "sobrepasar a otros vehi\u0301culos.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 101,
					Name: "detenerse por causas de fuerza mayor.",
					IsAnswer: false,
				},
				{ Id: 102, Name: "circular marcha atra\u0301s.", IsAnswer: true },
			],
		},
		{
			Id: 35,
			Name: "Segu\u0301n el Manual del Conductor, cuando la luz naranja del sema\u0301foro peatonal se torna intermitente \u00bfQue\u0301 conducta debe tomar el peato\u0301n que espera para cruzar?",
			Options: [
				{
					Id: 103,
					Name: "No comenzar a cruzar la calzada.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 104,
					Name: "Si esta\u0301 cruzando, finalizar el cruce con mucha precaucio\u0301n.",
					IsAnswer: false,
				},
				{
					Id: 105,
					Name: "Ambas respuestas (a y b) son correctas.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 36,
			Name: "Segu\u0301n el Manual del Conductor, en un incidente de tra\u0301nsito \u00bfque\u0301 significa que el conductor es considerado responsable por impericia?",
			Options: [
				{
					Id: 106,
					Name: "Que no ha respondido adecuadamente a una circunstancia del transito por falta de conocimiento o practica en la conduccion.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 107,
					Name: "Que ha realizado un acto con su vehi\u0301culo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
					IsAnswer: false,
				},
				{
					Id: 108,
					Name: "Que ha tenido una conducta negligente al circular con un vehi\u0301culo en mal estado.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 37,
			Name: "Segu\u0301n la Ley No 24.449, \u00bfque\u0301 indica un cordo\u0301n pintado de color rojo?",
			Options: [
				{
					Id: 109,
					Name: "Que esta\u0301 prohibido estacionar, pudiendo efectuarse la detencio\u0301n para ascenso y descenso de pasajeros",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 110,
					Name: "Que ese un espacio reservado al estacionamiento exclusivo de vehi\u0301culos destinados a servicio de emergencia",
					IsAnswer: false,
				},
				{
					Id: 111,
					Name: "Que esta\u0301 prohibido estacionar o detenerse al costado de la acera.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 38,
			Name: "Segu\u0301n la Ley No 24.449, \u00bfque\u0301 indica un cordo\u0301n pintado de color amarillo?",
			Options: [
				{
					Id: 112,
					Name: "Indica que so\u0301lo esta\u0301 prohibido estacionar, pudiendo efectuarse detenciones para ascenso y descenso de carga y pasajeros.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 113,
					Name: "Indica que es un lugar reservado para el estacionamiento exclusivo de vehi\u0301culos destinados al transporte de pasajeros.",
					IsAnswer: false,
				},
				{
					Id: 114,
					Name: "Indica que esta\u0301 prohibido estacionar o detenerse al costado de la acera.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 39,
			Name: "Segu\u0301n la Ley N\u00b0 2148, los vehi\u0301culos destinados al servicio de emergencia, en cumplimiento de su funcio\u0301n, tienen la prioridad de paso sobre todos los dema\u0301s vehi\u0301culos, adema\u0301s de esta \u00bfesta\u0301n exentos de cumplir otras normas?",
			Options: [
				{
					Id: 115,
					Name: "Si\u0301, al ser vehi\u0301culos destinados la servicio de emergencia la ley los exceptu\u0301a del cumplimiento de otras normas.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 116,
					Name: "Si\u0301, esta\u0301n exentos de cumplir otras normas excepto las indicaciones de los agentes de control de tra\u0301nsito.",
					IsAnswer: true,
				},
				{
					Id: 117,
					Name: "No, aun siendo vehi\u0301culos destinados al servicio de emergencia, al circular por la vi\u0301a pu\u0301blica esta\u0301n obligados a respetar las normas como el resto de los vehi\u0301culos.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 40,
			Name: "Segu\u0301n las Ley N\u00b0 2148, un vehi\u0301culo que no esta\u0301 destinado al servicio de emergencia, en caso de extrema necesidad \u00bfpuede realizar un servicio similar al que efectu\u0301an estos u\u0301ltimos?",
			Options: [
				{
					Id: 118,
					Name: "Si\u0301, debiendo advertirlo encendiendo las luces, empleando la bocina en forma intermitente y agitando un pan\u0303o.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 119,
					Name: "Si\u0301, el conductor de dicho vehi\u0301culo debera\u0301 sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vi\u0301a la situacio\u0301n en la que se encuentra.",
					IsAnswer: false,
				},
				{
					Id: 120,
					Name: "No, los servicios de emergencia so\u0301lo pueden ser efectuados por los vehi\u0301culos habilitados para ese fin.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 41,
			Name: "Segu\u0301n la Ley N\u00b0 2148, los vehi\u0301culos afectados al control del tra\u0301nsito \u00bfpueden detenerse en cualquier parte de la vi\u0301a pu\u0301blica?",
			Options: [
				{
					Id: 121,
					Name: "No, so\u0301lo pueden hacerlo en los lugares en donde este\u0301 permitido detenerse.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 122,
					Name: "Si\u0301, cuando realicen tareas de control, siempre que no constituyan un obsta\u0301culo peligroso para otros vehi\u0301culos.",
					IsAnswer: true,
				},
				{
					Id: 123,
					Name: "Si\u0301, porque al ser un servicio de emergencia las restricciones en cuanto a la detencio\u0301n en la vi\u0301a pu\u0301blica no los abarcan",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 42,
			Name: "Segu\u0301n la Ley N\u00b0 2148, en lo que respecta a las prioridades de paso, en encrucijadas sin sema\u0301foros \u00bfcua\u0301l es el orden jera\u0301rquico (de importancia) de las distintas arterias?",
			Options: [
				{
					Id: 124,
					Name: "pasaje, calle, avenida.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 125, Name: "calle, avenida, pasaje.", IsAnswer: false },
				{ Id: 126, Name: "avenida, calle, pasaje.", IsAnswer: true },
			],
		},
		{
			Id: 43,
			Name: "La Ley N\u00b0 2148 establece como norma general que en las avenidas de doble sentido de circulacio\u0301n esta\u0301 prohibido estacionar vehi\u0301culos:",
			Options: [
				{
					Id: 127,
					Name: "Junto a ambas aceras los di\u0301as ha\u0301biles entre las 7 y las 21 horas.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 128,
					Name: "Junto a la acera derecha los di\u0301as ha\u0301biles entre las 7 y las 21 horas.",
					IsAnswer: false,
				},
				{
					Id: 129,
					Name: "Junto a la acera izquierda los di\u0301as ha\u0301biles entre las 7 y las 21 horas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 44,
			Name: "La Ley N\u00b0 2148 establece como norma general que en las calles con sentido u\u0301nico de circulacio\u0301n esta\u0301 prohibido estacionar vehi\u0301culos:",
			Options: [
				{
					Id: 130,
					Name: "Junto a la acera derecha los di\u0301as ha\u0301biles durante las 24 horas.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 131,
					Name: "Junto a la acera izquierda los di\u0301as ha\u0301biles de 7 a 21 horas.",
					IsAnswer: false,
				},
				{
					Id: 132,
					Name: "Junto a la acera izquierda todos los di\u0301as durante las 24 horas.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 45,
			Name: "La Ley N\u00b0 2148 establece como norma general la prohibicio\u0301n de detenerse:",
			Options: [
				{
					Id: 133,
					Name: "En doble fila, excepto como detencio\u0301n para el ascenso o descenso de pasajeros.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 134,
					Name: "En doble fila, excepto como detencio\u0301n previa a la maniobra de estacionamiento.",
					IsAnswer: true,
				},
				{
					Id: 135,
					Name: "En doble fila, sin ninguna excepcio\u0301n.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 46,
			Name: "\u00bfCua\u0301ndo se considera que un vehi\u0301culo esta\u0301 detenido?",
			Options: [
				{
					Id: 136,
					Name: "Se considera detencio\u0301n a la permanencia en un sector de la vi\u0301a pu\u0301blica de un vehi\u0301culo por circunstancias de la circulacio\u0301n o por causas de fuerza mayor.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 137,
					Name: "Se considera detencio\u0301n a la permanencia de un vehi\u0301culo junto a la acera por un tiempo estrictamente necesario para casos de control de tra\u0301nsito realizado por autoridad competente, ascenso o descenso de pasajeros o para carga y descarga.",
					IsAnswer: true,
				},
				{ Id: 138, Name: "Lo indicado en a y b.", IsAnswer: false },
			],
		},
		{
			Id: 47,
			Name: "De acuerdo a lo que establece la Ley Nacional (24.449) y su reglamentacio\u0301n, con respecto al vehi\u0301culo \u00bfque\u0301 documentacio\u0301n debe llevar?",
			Options: [
				{
					Id: 139,
					Name: "Recibo de pago de patente y ce\u0301dula verde",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 140,
					Name: "Recibo de pago de patente y comprobante de pago del seguro.",
					IsAnswer: false,
				},
				{
					Id: 141,
					Name: "Recibo de pago de patente, comprobante de pago del seguro, ce\u0301dula verde, y cuando correspondiera (taxi, remis, etc.) comprobante de verificacio\u0301n te\u0301cnica del vehi\u0301culo y habilitacio\u0301n",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 48,
			Name: "El alcohol produce en el conductor:",
			Options: [
				{
					Id: 142,
					Name: "Un aumento del campo visual",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 143,
					Name: "Un estado de euforia y de falsa seguridad en si\u0301 mismo.",
					IsAnswer: true,
				},
				{
					Id: 144,
					Name: "Una reduccio\u0301n del tiempo de reaccio\u0301n.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 49,
			Name: "Se considera a la niebla un factor de riesgo porque:",
			Options: [
				{
					Id: 145,
					Name: "Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 146,
					Name: "Aumenta la percepcio\u0301n de objetos pero se modifica la percepcio\u0301n de la distancia",
					IsAnswer: false,
				},
				{
					Id: 147,
					Name: "Ambas respuestas, la a y la b, son correctas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 50,
			Name: "Para indicar las velocidades ma\u0301ximas a desarrollar en zonas donde es habitual la formacio\u0301n de bancos de niebla, se utilizan sen\u0303ales horizontales en forma de letra V invertida \u00bfco\u0301mo se saben o reconocen esas velocidades ma\u0301ximas?",
			Options: [
				{
					Id: 148,
					Name: "Cuando un conductor alcanza a ver so\u0301lo una sen\u0303al V invertida, la velocidad ma\u0301xima no debera\u0301 superar los 40 km./h.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 149,
					Name: "Si alcanza a ver dos sen\u0303ales V invertidas, la velocidad ma\u0301xima no debera\u0301 superar los 60 km./h.",
					IsAnswer: false,
				},
				{ Id: 150, Name: "Lo indicado en a y b.", IsAnswer: true },
			],
		},
		{
			Id: 1,
			Name: "Si al aproximarse a una bocacalle sin sema\u0301foro, Ud. advierte que un peato\u0301n pretende efectuar el cruce desde su izquierda hacia su derecha, \u00bfque\u0301 debera\u0301 hacer?",
			Options: [
				{
					Id: 1,
					Name: "cederle el paso, pues el peato\u0301n tiene prioridad.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 2,
					Name: "avanzar a velocidad precautoria, pues so\u0301lo tiene prioridad aquel que viene por la derecha.",
					IsAnswer: false,
				},
				{
					Id: 3,
					Name: "la prioridad de paso es del vehi\u0301culo ya que su marcha es ma\u0301s difi\u0301cil de controlar.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 2,
			Name: "La Ley C.A.B.A. 2148, establece la obligatoriedad de denunciar a la brevedad cualquier cambio de los datos consignados en la licencia de conducir. De no denunciarse dicho cambio, al cabo de cua\u0301nto tiempo caduca la misma?",
			Options: [
				{ Id: 4, Name: "60 di\u0301as.", IsAnswer: false, Selected: true },
				{ Id: 5, Name: "90 di\u0301as.", IsAnswer: true },
				{ Id: 6, Name: "120 di\u0301as.", IsAnswer: false },
			],
		},
		{
			Id: 3,
			Name: "Todo usuario de la vi\u0301a pu\u0301blica debe, como premisa ba\u0301sica:",
			Options: [
				{
					Id: 7,
					Name: "asumir la obligacio\u0301n de no generar peligro innecesario",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 8,
					Name: "acreditar experiencia de manejo en vehi\u0301culos, que por su categori\u0301a de licencia le corresponda, no menor a un an\u0303o",
					IsAnswer: false,
				},
				{
					Id: 9,
					Name: "concurrir a cursos de actualizacio\u0301n en tema\u0301tica vial, con una frecuencia no mayor a seis meses.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 4,
			Name: "En materia de responsabilidad Civil, \u00bfque\u0301 es lo que se considera como factor determinante para dar inicio a una demanda?",
			Options: [
				{
					Id: 10,
					Name: "la intencio\u0301n de la conducta dan\u0303osa;",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 11,
					Name: "la existencia de un dan\u0303o real que afecte a algu\u0301n particular, provocado como consecuencia del accidente",
					IsAnswer: true,
				},
				{
					Id: 12,
					Name: "la edad de la persona que provoca el dan\u0303o.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 5,
			Name: "En materia de responsabilidad Penal, \u00bfpuede e\u0301sta transferirse de una persona (por ejemplo, el conductor del vehi\u0301culo que provoca el accidente) a otra (por ejemplo, el duen\u0303o del vehi\u0301culo)?",
			Options: [
				{
					Id: 13,
					Name: "No, porque la responsabilidad penal es intransferible.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 14,
					Name: "Si\u0301, y de e\u0301ste u\u0301ltimo tambie\u0301n puede transferirse a la Compan\u0303i\u0301a de Seguros.",
					IsAnswer: false,
				},
				{
					Id: 15,
					Name: "El Juez resolvera\u0301 en funcio\u0301n de la gravedad del accidente y sus consecuencias.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 6,
			Name: "En cualquier circunstancia o situacio\u0301n posible, durante la circulacio\u0301n, \u00bfa que\u0301 le prestari\u0301a atencio\u0301n Ud. a fin de aumentar su seguridad y la de otros?",
			Options: [
				{
					Id: 16,
					Name: "El estado del pavimento, del auto y el clima",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 17,
					Name: "Las condiciones en que se encuentra el automo\u0301vil, las condiciones relativas a infraestructura vial, las condiciones clima\u0301ticas y el estado del conductor",
					IsAnswer: true,
				},
				{
					Id: 18,
					Name: "Las condiciones en que se encuentra el conductor, caudal de tra\u0301nsito y tipo de cubiertas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 7,
			Name: "\u00bfCua\u0301les son los nu\u0301meros de emergencia que todo usuario de la vi\u0301a pu\u0301blica debe conocer con el objetivo de poder llamar y pedir ayuda ante un accidente de cualquier i\u0301ndole?",
			Options: [
				{ Id: 19, Name: "211 y/o 109.", IsAnswer: false, Selected: true },
				{ Id: 20, Name: "112 y/o 110.", IsAnswer: false },
				{ Id: 21, Name: "911 y/o 107.", IsAnswer: true },
			],
		},
		{
			Id: 8,
			Name: "La niebla, como factor de riesgo produce modificaciones en:",
			Options: [
				{
					Id: 22,
					Name: "el campo visual del conductor y su percepcio\u0301n del entorno, la capacidad lumi\u0301nica del vehi\u0301culo como la adherencia de sus cubiertas y la respuesta del pavimento.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 23,
					Name: "El campo visual del conductor y el estado del pavimento.",
					IsAnswer: false,
				},
				{
					Id: 24,
					Name: "So\u0301lo afecta la capacidad lumi\u0301nica del vehi\u0301culo y la respuesta de sus cubiertas en el avance.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 9,
			Name: "Ante la presencia de bancos de niebla y a fin de reducir riesgos, \u00bfque\u0301 es lo que se recomienda?",
			Options: [
				{
					Id: 25,
					Name: "Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 26,
					Name: "Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehi\u0301culos y utilizar las luces del vehi\u0301culo correspondientes.",
					IsAnswer: true,
				},
				{
					Id: 27,
					Name: "Detenerse en la banquina hasta que levante el banco de niebla.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 10,
			Name: "Durante la circulacio\u0301n, el uso de telefoni\u0301a celular esta\u0301 prohibida para el conductor porque en tanto factor de riesgo:",
			Options: [
				{
					Id: 28,
					Name: "disminuye su capacidad atencional y limita el sentido de la audicio\u0301n, aumentando el tiempo de reaccio\u0301n.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 29,
					Name: "Debido a que el conductor debe mantener ambas manos comprometidas en la accio\u0301n de conducir, el equipo celular reduciri\u0301a la capacidad para maniobrar.",
					IsAnswer: false,
				},
				{
					Id: 30,
					Name: "Ambas respuestas (a y b) son correctas",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 11,
			Name: "Durante la circulacio\u0301n, la prohibicio\u0301n del uso de telefoni\u0301a celular afecta tambie\u0301n al acompan\u0303ante:",
			Options: [
				{
					Id: 31,
					Name: "en condiciones normales, no; pero si\u0301 cuando la circulacio\u0301n se realiza en condiciones de ma\u0301ximo peligro.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 32,
					Name: "La prohibicio\u0301n del uso de telefoni\u0301a celular afecta so\u0301lo al conductor del vehi\u0301culo.",
					IsAnswer: true,
				},
				{
					Id: 33,
					Name: "Ambas respuestas (a y b) son correctas",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 12,
			Name: "Ante un eventual control de tra\u0301nsito en vi\u0301a pu\u0301blica, de constatar la Autoridad de Control algu\u0301n tipo de falta por parte del conductor, el pago de la multa (sancio\u0301n) podra\u0301 efectuarse:",
			Options: [
				{
					Id: 34,
					Name: "En ese mismo momento y ante la autoridad de control si e\u0301sta lo requiere.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 35,
					Name: "Ante el Tribunal de Faltas que lo determina como sancio\u0301n a aplicar.",
					IsAnswer: true,
				},
				{
					Id: 36,
					Name: "Ambas respuestas (a y b) son correctas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 13,
			Name: 'Para realizar una maniobra de "ingreso a.../egreso de..." un garage o estacionamiento, el conductor debe cruzar la acera; si al hacerlo se encuentra con un transeu\u0301nte (peato\u0301n), \u00bfque\u0301 conducta debe adoptar el conductor?',
			Options: [
				{
					Id: 37,
					Name: "Priorizar la marcha del peato\u0301n, indefectiblemente.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 38,
					Name: "Realizar una guin\u0303ada para advertir su preferencia de avance.",
					IsAnswer: false,
				},
				{
					Id: 39,
					Name: "Completar la maniobra como sea posible, para evitar su mayor exposicio\u0301n por encontrarse maniobrando en la vi\u0301a de circulacio\u0301n.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 14,
			Name: "Todos los cristales de un vehi\u0301culo deben garantizar visibilidad:",
			Options: [
				{
					Id: 40,
					Name: "Solamente desde dentro del automo\u0301vil hacia fuera.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 41,
					Name: "De adentro hacia fuera y de afuera hacia adentro (ambas direcciones).",
					IsAnswer: true,
				},
				{
					Id: 42,
					Name: "El u\u0301nico cristal que debe garantizar plena y total visibilidad es el parabrisas.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 15,
			Name: "Ud. viene circulando por una avenida de doble mano, y al llegar a la bocacalle precisa efectuar un giro a su izquierda; de acuerdo a la Ley No 2148, \u00bfen que\u0301 condiciones puede efectuar esa maniobra?",
			Options: [
				{
					Id: 43,
					Name: "So\u0301lo si hay sema\u0301foro de giro que me habilite o, en su defecto, si no hubiera ningu\u0301n tipo de sema\u0301foro.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 44,
					Name: "Si mi sema\u0301foro de circulacio\u0301n esta\u0301 en verde, toamdno las debidas precauciones y mirando atentamente a ambos lados.",
					IsAnswer: false,
				},
				{
					Id: 45,
					Name: "Es absolutamente indispensable que no venga ningu\u0301n vehi\u0301culo por la mano de circulacio\u0301n contraria a la de mi avance.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 16,
			Name: "\u00bfQue\u0301 vehi\u0301culo puede realizar el remolque de otro vehi\u0301culo averiado en la vi\u0301a pu\u0301blica?",
			Options: [
				{
					Id: 46,
					Name: "Cualquier vehi\u0301culo que posea potencia suficiente para remolcar a otro vehi\u0301culo y un elemento para asirlo firmemente sin riesgo alguno.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 47,
					Name: "Cualquier vehi\u0301culo que posea al menos algu\u0301n tipo de elemento para asirlo firmemente sin riesgo.",
					IsAnswer: false,
				},
				{
					Id: 48,
					Name: "So\u0301lo los vehi\u0301culos destinados a ese fin.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 17,
			Name: "De acuerdo a lo que establece la Ley No 2148, \u00bfestari\u0301a permitido agregar al vehi\u0301culo luces adicionales?",
			Options: [
				{
					Id: 49,
					Name: "Esta\u0301 prohibido el agregado de luces o faros adicionales que no sean los descritos en esa misma ley, excepto el agregado de dos faros rompenieblas y de hasta dos faros elevados con luces de freno.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 50,
					Name: "No esta\u0301 prohibido agregar luces ya que cuanto ma\u0301s capacidad de iluminacio\u0301n tenga el automo\u0301vil, mejor visibilidad tiene el conductor.",
					IsAnswer: false,
				},
				{
					Id: 51,
					Name: "No esta\u0301 permitido agregar ningu\u0301n tipo de luz, solo eventualmente se podra\u0301 reponer las que traiga de fa\u0301brica en caso de destruccio\u0301n.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 18,
			Name: "Cuando un conductor realiza la maniobra de circulacio\u0301n en reversa (marcha atra\u0301s), \u00bfcua\u0301l es la distancia establecida que puede recorrer en la realizacio\u0301n dicha maniobra?",
			Options: [
				{
					Id: 52,
					Name: "Mi\u0301nimamente 20 metros",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 53, Name: "No ma\u0301s de 20 metros", IsAnswer: false },
				{
					Id: 54,
					Name: "El recorrido mi\u0301nimo e indispensable.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 19,
			Name: "En cua\u0301nto al grado de tono o color que pueden tener los cristales de un automo\u0301vil, que\u0301 establece la Ley No 2148, con respecto a su control en vi\u0301a pu\u0301blica?",
			Options: [
				{
					Id: 55,
					Name: "Para medir el grado de tonalidad debe efectuarse una prueba colorime\u0301trica mediante un dispositivo porta\u0301til reglamentado debidamente",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 56,
					Name: "Se deben distinguir los ocupantes del vehi\u0301culo a corta distancia.",
					IsAnswer: true,
				},
				{
					Id: 57,
					Name: "A 15 (quince) metros de distancia (medida de referencia) se debiera poder divisar las facciones del conductor.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 20,
			Name: "La ubicacio\u0301n y posicio\u0301n de las placas de identificacio\u0301n del vehi\u0301culo (chapas patente) pueden sufrir algu\u0301n tipo de modificacio\u0301n o cambio:",
			Options: [
				{
					Id: 58,
					Name: "So\u0301lo eventualmente pueden amplificarse para mejorar su visibilidad.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 59,
					Name: "De ninguna manera, deben estar colocadas en posicio\u0301n y forma normal en los lugares reglamentarios.",
					IsAnswer: true,
				},
				{
					Id: 60,
					Name: "So\u0301lo esta\u0301 prohibido modificar la placa de identificacio\u0301n delantera, no asi\u0301 la posterior.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 21,
			Name: "La negativa a realizar una prueba de alcoholemia \u00bfconstituye una falta?",
			Options: [
				{
					Id: 61,
					Name: "So\u0301lo si se ha incurrido en una infraccio\u0301n o participado en un accidente.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 62, Name: "No", IsAnswer: false },
				{ Id: 63, Name: "Siempre", IsAnswer: true },
			],
		},
		{
			Id: 22,
			Name: "\u00bfCo\u0301mo se debe dejar un vehi\u0301culo durante el estacionamiento, en un terreno sin pendiente?",
			Options: [
				{
					Id: 64,
					Name: "Con el motor detenido.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 65, Name: "Con el motor detenido y sin cambio.", IsAnswer: true },
				{
					Id: 66,
					Name: "Con el motor detenido y las ruedas delanteras transversales a la acera.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 23,
			Name: "\u00bfQue\u0301 debe hacer cuando el automo\u0301vil que esta\u0301 adelante suyo, esta\u0301 esperando para doblar a la izquierda?",
			Options: [
				{
					Id: 67,
					Name: "Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 68,
					Name: "Realizar el sobrepaso con cuidado por la izquierda.",
					IsAnswer: false,
				},
				{
					Id: 69,
					Name: "Tocar bocina para indicarle que siga.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 24,
			Name: "\u00bfQue\u0301 vehi\u0301culo tiene prioridad para adelantarse, cuando varios circulan encolumnados?",
			Options: [
				{
					Id: 70,
					Name: "El que lo intente primero.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 71, Name: "El u\u0301ltimo de la fila.", IsAnswer: false },
				{
					Id: 72,
					Name: "El que circula primero detra\u0301s del vehi\u0301culo que se desea adelantar.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 25,
			Name: "\u00bfEsta permitido estacionar el vehi\u0301culo sobre la acera (vereda) para bajar a abrir o cerrar el acceso a un garaje?",
			Options: [
				{ Id: 73, Name: "No", IsAnswer: true, Selected: true },
				{ Id: 74, Name: "Solo por poco tiempo.", IsAnswer: false },
				{ Id: 75, Name: "Solo si la acera es ancha.", IsAnswer: false },
			],
		},
		{
			Id: 26,
			Name: "Cuando vemos las luces rojas de un vehi\u0301culo \u00bfque\u0301 significado tienen en cuanto al sentido de direccio\u0301n de marcha del mismo?",
			Options: [
				{
					Id: 76,
					Name: "Que esta ubicado para circular en la misma direccio\u0301n que nosotros.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 77, Name: "Que viene hacia nosotros.", IsAnswer: false },
				{ Id: 78, Name: "Que esta descompuesto.", IsAnswer: false },
			],
		},
		{
			Id: 27,
			Name: "\u00bfQue\u0301 sen\u0303ales verticales (carteles) nos indican que no tenemos prioridad de paso en un cruce o bocacalle sin sema\u0301foro?",
			Options: [
				{
					Id: 79,
					Name: "Sen\u0303al de Pare o Ceda el Paso.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 80, Name: "Sen\u0303al de Prohibido Retomar.", IsAnswer: false },
				{
					Id: 81,
					Name: "Sen\u0303al de Contramano o Direccio\u0301n Obligatoria.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 28,
			Name: "\u00bfQue\u0301 debe hacer el conductor que transita por una calle de doble sentido de circulacio\u0301n y encuentra ante e\u0301l su mano obstrui\u0301da en el momento que se aproxima otro vehi\u0301culo por la mano contraria?",
			Options: [
				{
					Id: 82,
					Name: "Debe ceder el paso al otro vehi\u0301culo.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 83, Name: "Tiene derecho a pasar primero.", IsAnswer: false },
				{ Id: 84, Name: "No existe preferencia.", IsAnswer: false },
			],
		},
		{
			Id: 29,
			Name: "Al efectuar un giro en una bocacalle estando encendida la luz verde del sema\u0301foro, entre el conductor y el peato\u0301n \u00bfQuie\u0301n tiene prioridad de paso?",
			Options: [
				{ Id: 85, Name: "El peato\u0301n.", IsAnswer: true, Selected: true },
				{ Id: 86, Name: "El conductor.", IsAnswer: false },
				{ Id: 87, Name: "Es indistinto", IsAnswer: false },
			],
		},
		{
			Id: 30,
			Name: "El vehiculo que circule por el carril obligatorio para transito lento, \u00bfpuede abandonarlo para adelantar a otro mas lento?",
			Options: [
				{ Id: 88, Name: "No, nunca.", IsAnswer: false, Selected: true },
				{
					Id: 89,
					Name: "Si, siempre que se respete la velocidades establecidas en las sen\u0303ales.",
					IsAnswer: true,
				},
				{ Id: 90, Name: "Es indistinto.", IsAnswer: false },
			],
		},
		{
			Id: 31,
			Name: "Si una calle de sentido u\u0301nico posee isletas, usted podra\u0301 circular por:",
			Options: [
				{ Id: 91, Name: "El centro.", IsAnswer: false, Selected: true },
				{ Id: 92, Name: "La parte derecha de la calzada.", IsAnswer: false },
				{ Id: 93, Name: "Cualquiera de los dos lados.", IsAnswer: true },
			],
		},
		{
			Id: 32,
			Name: "Al pretender abandonar una autopista o semiautopista, \u00bfCua\u0301ndo se debe reducir la velocidad?",
			Options: [
				{
					Id: 94,
					Name: "Cuando se haya entrado en el carril de desaceleraci\u00f3n.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 95,
					Name: "A la entrada de la nueva vi\u0301a de circulacio\u0301n.",
					IsAnswer: false,
				},
				{ Id: 96, Name: "Poco antes de abandonar la misma.", IsAnswer: false },
			],
		},
		{
			Id: 33,
			Name: "\u00bfQue\u0301 distintivo deben llevar colocado, en la parte interior del parabrisas y luneta del vehi\u0301culo, los conductores principiantes?",
			Options: [
				{
					Id: 97,
					Name: "Esta\u0301n obligados a llevar, durante un peri\u0301odo de seis (6) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 98,
					Name: "Esta\u0301n obligados a llevar, durante un peri\u0301odo de tres (3) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					IsAnswer: false,
				},
				{
					Id: 99,
					Name: "Esta\u0301n obligados a llevar, durante un peri\u0301odo de tres (3) meses, un distintivo con la letra P en color blanco sobre fondo verde.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 34,
			Name: "Si el conductor de un vehi\u0301culo toca repetidamente la bocina y el acompan\u0303ante saca el brazo agitando un pan\u0303uelo. \u00bfQue\u0301 esta\u0301n indicando?",
			Options: [
				{
					Id: 100,
					Name: "Que el vehi\u0301culo tiene un desperfecto.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 101,
					Name: "Que transportan a una persona grave a un hospital.",
					IsAnswer: true,
				},
				{
					Id: 102,
					Name: "Al exceso de velocidad y a la violacio\u0301n de luz roja.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 35,
			Name: "Ud. esta\u0301 llegando a un cruce de calles sin sema\u0301foros ni polici\u0301a, una persona esta\u0301 cruzando por la senda peatonal, Ud. debe:",
			Options: [
				{
					Id: 103,
					Name: "Disminuir la marcha y tener cuidado.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 104,
					Name: "Parar y cederle el paso al peato\u0301n.",
					IsAnswer: true,
				},
				{
					Id: 105,
					Name: "Seguir y atravesar el cruce, porque tiene prioridad.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 36,
			Name: "\u00bfQue\u0301 distancia debe dejarse entre el cordo\u0301n de la acera y el vehi\u0301culo, al estacionar en forma paralela al mismo?",
			Options: [
				{ Id: 106, Name: "50 cm.", IsAnswer: false, Selected: true },
				{ Id: 107, Name: "10 cm.", IsAnswer: false },
				{ Id: 108, Name: "20 cm.", IsAnswer: true },
			],
		},
		{
			Id: 37,
			Name: "En un automo\u0301vil \u00bfcua\u0301l es la profundidad mi\u0301nima que debe tener el dibujo de las cubiertas?",
			Options: [
				{ Id: 109, Name: "0,5 mm.", IsAnswer: false, Selected: true },
				{ Id: 110, Name: "1,0 mm.", IsAnswer: false },
				{ Id: 111, Name: "1,6 mm.", IsAnswer: true },
			],
		},
		{
			Id: 38,
			Name: "\u00bfDebe Ud. ceder el paso a una fila de escolares que circula por la calzada?",
			Options: [
				{ Id: 112, Name: "No", IsAnswer: false, Selected: true },
				{ Id: 113, Name: "Si", IsAnswer: true },
				{
					Id: 114,
					Name: "Solo si advierto la existencia de un colegio cercano.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 39,
			Name: "\u00bfCua\u0301l es la velocidad mi\u0301nima permitida en calles?",
			Options: [
				{ Id: 115, Name: "30 km/h.", IsAnswer: false, Selected: true },
				{ Id: 116, Name: "20 km/h.", IsAnswer: true },
				{ Id: 117, Name: "25 km/h.", IsAnswer: false },
			],
		},
		{
			Id: 40,
			Name: "\u00bfQue\u0301 nos indica en un sema\u0301foro, el encendido solamente de la luz roja, de manera intermitente?",
			Options: [
				{
					Id: 118,
					Name: "Que el sema\u0301foro esta\u0301 funcionando parcialmente y que nos aproximamos a un cruce peligroso, debiendo detener la marcha y reinicia\u0301ndola so\u0301lo cuando se observe que no hay riesgo para continuar.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 119,
					Name: "Que el sema\u0301foro funciona mal.",
					IsAnswer: false,
				},
				{
					Id: 120,
					Name: "Que el sema\u0301foro funciona mal.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 41,
			Name: "\u00bfCua\u0301l es la velocidad ma\u0301xima permitida en un cruce a nivel ferroviario sin barreras ni sema\u0301foros?",
			Options: [
				{ Id: 121, Name: "10 km./h.", IsAnswer: false, Selected: true },
				{ Id: 122, Name: "20 km./h.", IsAnswer: true },
				{ Id: 123, Name: "30 km./h.", IsAnswer: false },
			],
		},
		{
			Id: 42,
			Name: "\u00bfCua\u0301l es la velocidad mi\u0301nima permitida en avenidas?",
			Options: [
				{ Id: 124, Name: "40 km/h.", IsAnswer: false, Selected: true },
				{ Id: 125, Name: "20 km/h.", IsAnswer: false },
				{ Id: 126, Name: "30 km/h.", IsAnswer: true },
			],
		},
		{
			Id: 43,
			Name: "\u00bfQue\u0301 requisitos debe reunir una vi\u0301a de circulacio\u0301n (a diferencia de una autopista) para ser considerada una semiautopista (autovia) ?",
			Options: [
				{
					Id: 127,
					Name: "Tener cruces a nivel.",
					IsAnswer: true,
					Selected: true,
				},
				{ Id: 128, Name: "Tener sema\u0301foros y peaje.", IsAnswer: false },
				{ Id: 129, Name: "Tener sema\u0301foros y peaje.", IsAnswer: false },
			],
		},
		{
			Id: 44,
			Name: "En caso de barrera baja \u00bfa que\u0301 distancia de ella se debe detener el vehi\u0301culo si no hay li\u0301nea de pare que lo indique?",
			Options: [
				{ Id: 130, Name: "7 metros", IsAnswer: false, Selected: true },
				{ Id: 131, Name: "5 metros", IsAnswer: true },
				{ Id: 132, Name: "2 metros", IsAnswer: false },
			],
		},
		{
			Id: 45,
			Name: 'Con cara\u0301cter general, cuando nos encontramos con una sen\u0303al de PROHIBIDO ESTACIONAR \u00bfesta\u0301 permitido parar para subir o bajar pasajeros de un automo\u0301vil?"',
			Options: [
				{ Id: 133, Name: "Si", IsAnswer: true, Selected: true },
				{ Id: 134, Name: "No", IsAnswer: false },
				{ Id: 135, Name: "Segun la hora", IsAnswer: false },
			],
		},
		{
			Id: 46,
			Name: '\u00bfQue\u0301 requisito ba\u0301sico debe reunir una vi\u0301a de circulacio\u0301n para ser considerada una autopista?"',
			Options: [
				{
					Id: 136,
					Name: "No tener cruces a nivel con otras vi\u0301as.",
					IsAnswer: true,
					Selected: true,
				},
				{
					Id: 137,
					Name: "Tener muchos carriles para circular.",
					IsAnswer: false,
				},
				{
					Id: 138,
					Name: "Tener que pagar peaje para circular",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 47,
			Name: "Cuando Ud. se acerca a un paso a nivel la barrera comienza a bajar para atravesarse en la calzada \u00bfdebe Ud. cruzar el paso a nivel?",
			Options: [
				{
					Id: 139,
					Name: "Si\u0301, siempre que observe que no se aproxima ningu\u0301n vehi\u0301culo que circule sobre rai\u0301les.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 140, Name: "No, en ningu\u0301n caso.", IsAnswer: true },
				{
					Id: 141,
					Name: "Si\u0301, teniendo la precaucio\u0301n de cruzar antes de que este\u0301 la barrera completamente bajada.",
					IsAnswer: false,
				},
			],
		},

        {
			Id: 1,
			Name: "\u00bfEsta\u0301 permitido el estacionamiento de vehi\u0301culos en las ciclovi\u0301as?",
			Options: [
				{
					Id: 1,
					Name: "Si\u0301, u\u0301nicamente si se trata del frente de mi domicilio.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 2,
					Name: "No, esta\u0301 prohibido en cara\u0301cter general estacionar sobre las sendas para ciclorrodados.",
					IsAnswer: true,
				},
				{
					Id: 3,
					Name: "Si\u0301, so\u0301lo con autorizacio\u0301n especial.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 2,
			Name: "Con cara\u0301cter general, en los cruces sin sema\u0301foro, \u00bfQuie\u0301n tiene la prioridad de paso?",
			Options: [
				{ Id: 4, Name: "El automotor.", IsAnswer: false, Selected: true },
				{ Id: 5, Name: "El peato\u0301n.", IsAnswer: true },
				{ Id: 6, Name: "El transporte pu\u0301blico.", IsAnswer: false },
			],
		},
		{
			Id: 3,
			Name: "Usted circula con su vehi\u0301culo por una calle con ciclovi\u0301a en la cual transita un ciclista. Llegando ambos a la interseccio\u0301n sin sema\u0301foro, usted decide girar a la izquierda. \u00bfQuie\u0301n tienen prioridad de paso?",
			Options: [
				{ Id: 7, Name: "Usted.", IsAnswer: false, Selected: true },
				{
					Id: 8,
					Name: "El que circule ma\u0301s ra\u0301pido.",
					IsAnswer: false,
				},
				{ Id: 9, Name: "El ciclista.", IsAnswer: true },
			],
		},
		{
			Id: 4,
			Name: "\u00bfPor do\u0301nde tienen permitida la circulacio\u0301n los ciclistas?",
			Options: [
				{
					Id: 10,
					Name: "En los tramos de arterias con ciclocarriles o ciclovi\u0301as deben circular exclusivamente por ellas.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 11,
					Name: "Pueden circular por cualquier arteria de la Ciudad a excepcio\u0301n de autopistas y otras vi\u0301as ra\u0301pidas.",
					IsAnswer: false,
				},
				{ Id: 12, Name: "Ambas son correctas.", IsAnswer: true },
			],
		},
		{
			Id: 5,
			Name: "Uso de auriculares y celulares: \u00bfEsta\u0301 permitido el uso de auriculares o celulares al conducir?",
			Options: [
				{
					Id: 16,
					Name: "Si\u0301, pero so\u0301lo para los conductores de automotores.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 17,
					Name: "Si\u0301, pero so\u0301lo para los conductores de ciclorrodados.",
					IsAnswer: false,
				},
				{
					Id: 18,
					Name: "No, esta\u0301 prohibido para todos los conductores en general.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 6,
			Name: "\u00bfQue\u0301 es una ciclovi\u0301a?",
			Options: [
				{
					Id: 19,
					Name: "Sector sen\u0303alizado especialmente en la calzada para la circulacio\u0301n con cara\u0301cter preferente de ciclorodados.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 20,
					Name: "Sector de la calzada sen\u0303alizado especialmente con una separacio\u0301n que permita la circulacio\u0301n exclusiva de ciclorodados.",
					IsAnswer: true,
				},
				{
					Id: 21,
					Name: "Sector sen\u0303alizado y especialmente acondicionado en aceras y espacios verdes para la circulacio\u0301n de ciclorodados.",
					IsAnswer: false,
				},
			],
		},
		{
			Id: 7,
			Name: "\u00bfQue\u0301 indica el cruce verde en las intersecciones?",
			Image: "b-t5-7.jpg",
			Options: [
				{
					Id: 22,
					Name: "Advierte a los conductores sobre la existencia de un punto de cruce de ciclovi\u0301a.",
					IsAnswer: false,
					Selected: true,
				},
				{
					Id: 23,
					Name: "Advierte a los conductores sobre la existencia de un punto de cruce de bicisenda.",
					IsAnswer: false,
				},
				{ Id: 24, Name: "Ambas son correctas.", IsAnswer: true },
			],
		},
		{
			Id: 8,
			Name: "\u00bfQue\u0301 indica la siguiente sen\u0303al?",
			Image: "b-t5-8.jpg",
			Options: [
				{
					Id: 25,
					Name: "Sistema de Transporte Pu\u0301blico en Bicicleta.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 26, Name: "Permitido estacionar bicicletas", IsAnswer: false },
				{
					Id: 27,
					Name: "Circulacio\u0301n exclusiva para bicicletas.",
					IsAnswer: true,
				},
			],
		},
		{
			Id: 9,
			Name: "\u00bfCua\u0301l de las siguientes ima\u0301genes muestra una bicisenda?",
			Image: "b-t5-9.jpg",
			Options: [
				{ Id: 28, Name: "Opcion 1.", IsAnswer: false, Selected: true },
				{ Id: 29, Name: "Opcion 2.", IsAnswer: true },
				{ Id: 30, Name: "Opcion 3.", IsAnswer: false },
			],
		},
		{
			Id: 10,
			Name: "Cuando usted llega a esta interseccio\u0301n. \u00bfDe que\u0301 lado espera que aparezca un vehi\u0301culo? (ver imagen)",
			Image: "b-t5-10.jpg",
			Options: [
				{
					Id: 31,
					Name: "Solo de la derecha.",
					IsAnswer: false,
					Selected: true,
				},
				{ Id: 32, Name: "Solo de la izquierda.", IsAnswer: false },
				{ Id: 33, Name: "De ambos lados.", IsAnswer: true },
			],
		},
	],
};
 