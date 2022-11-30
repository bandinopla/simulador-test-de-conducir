import { Question } from "../providers/QuestionProvider";

const __formas_juridicas__ = [
    "actuar con descuido u omitir actuar en el cumplimiento de una obligación legal. ",
    "falta de precaución para evitar un riesgo o actuar en forma precipitada.",
    "falta de respuesta adecuada frente a las circunstancias de circulación en la vía, por falta de práctica en la conducción del vehículo."
]

export const source:Question[] = [

    {
        text:"Debido a la gran cantidad de muertes que se generan por siniestros viales en todo el mundo, la Organización Mundial de la Salud (OMS) categorizó a esta problemática como...",
        correctIndex:1,
        options: [
            "Un problema serio",
            "Una “pandemia”",
            "Una suceción de sucesos que suceden sucedidamente"
        ]
    },

    {
        text:"Qué ley rige en CABA de Código de Tránsito y Transporte?",
        correctIndex:0,
        options: [
            "La ley 2148",
            "La ley 2481",
            "La ley 4821"
        ]
    },

    {
        text:"Como usuarios de la vía pública estamos obligados a...",
        correctIndex:2,
        options: [
            "A) no entorpecer injustamente la circulación",
            "B) no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes",
            "Ambas: A. y B."
        ]
    },

    {
        text:"Según La Ley 3072 de la Ciudad Autónoma de Buenos Aires, cómo se define un hecho en el cual se produce daño a una persona o cosa en ocasión de la circulación en la vía pública?",
        correctIndex:1,
        options: [
            "un accidente",
            "un incidente",
            "un siniestro"
        ]
    },

    {
        text:"El riesgo en la vía pública surge como resultado de la interacción de estos 3 factores. Pero cuál es el principal?",
        correctIndex:2,
        options:[
            "Vehicular",
            "Ambiental",
            "Humano"
        ]
    },

    {
        text:"Las consecuancias de los incidentes de tránsito se limitan a las víctimas humanas",
        correctIndex:1,
        options: [
            "Verdadero",
            "Falso"
        ]
    },

    {
        text:"Qué programa creado en 1997 adoptó el principio ético de que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito?",
        correctIndex:0,
        options: [
            "El programa \"Visión Cero\"",
            "El programa \"ni uno menos\"",
            "El programa \"No más Siniestros\"",
            "El programa \"Luchemos por la vida\"",
        ]
    },

    {
        text:"En el contexto del sistema de transporte, a qué se le denomina \"sistema seguro.\"?",
        options: [
            "Una serie de premisas que apuntan a diseñar un sistema de tránsito orientado a reducir todo lo posible los índices de siniestralidad vial en la vía pública y minimizar sus consecuencias humanas y materiales.",
            "Una serie de medidas de precaución instaladas en los costados de las autopistas y vías de acceso a la misma",
            "Un sistema de monitoreo por cámaras con detección facial inteligente",
            "Un protocolo de comunicación de emergencia en caso de eventos de fuerza mayor"
        ],
        correctIndex: 0
    },

    {
        text:"En el marco de la seguridad vial: A mayor cantidad de vehículos motorizados mayor probabilidad de...",
        correctIndex: 0,
        options: [
            "siniestralidad",
            "tránsito",
            "Contaminación auditiva",
            "Road Rage",
            "Emisiones de CO2"
        ] 
    },

    {
        text:"¿Qué es la movilidad sustentable?",
        correctIndex:1,
        options: [
            "Es una forma de trasladarse de manera no contaminante utilizando vehiculos eléctricos",
            "Una forma de trasladarse de manera fluida, segura y ordenada haciendo hincapié en quienes van a pie y en bici, contribuyendo a una mejor calidad ambiental",
            "Una forma de trasladarse en la que se prioriza utilizar la innercia del vehiculo para ahorrar combustible y dejar que la gravedad de la tierra nos lleve a destino."
        ]
    },

    {
        text:"En la vía pública circulan autos, ciclistas, peatones, motos, colectivos y camiones. Ordenalos de más vulnerable a menos vulnerable:",
        options: [
            "peatones, ciclistas, motos, colectivos, autos y camiones",
            "ciclistas, peatones, motos, autos, camiones y colectivos",
            "motos, ciclistas, autos, camiones, colectivos y peatones",
            "colectivos, motos, camiones, ciclistas, autos y peatones"
        ],
        correctIndex: 0
    },

    {
        text:"Hay 4 fases en un impacto. En qué orden ocurren?",
        options: [
            "Contacto, Volteo, Proyección y Arrastre.",
            "Volteo, Contacto, Proyección y Arrastre.",
            "Volteo, Arrastre, Proyección y Contacto.",
            "Arrastre, Volteo, Contacto y Proyección",
        ],
        correctIndex: 0
    },

    {
        text:"El cruce de peatones debe realizarlo por la senda peatonal y, si no hubiese, ir por donde se le de la gana.",
        correctIndex: 1,
        options: [
            "Correcto, los vehículos percibirán mi presencia y le darán prioridad a mi vida.",
            "Incorrecto, solo debo curzar por donde los vehículos me puedan ver mejor y anticipen/esperen mi presencia."
        ]
    },

    {
        text:"Si un vehículo tiene luz verde y va a girar para ingresar a otra vía, quien conduce tiene la obligación de frenar y ceder el paso, en el caso de que haya peatones cruzando",
        options: [
            "Incorrecto. El vehículo al ser más grande y pesado debe ser respetado y los peatones deben hacer una reberencia y hacerse a un lado.",
            "Correcto. El peatón tiene prioridad!"
        ],
        correctIndex: 1
    },

    {
        text:"En calles sin semáforo se debe ceder siempre el paso a peatones siempre que deseen cruzar",
        options:[
            "Falso. Si ya voy en marcha no voy a frenar para dejar pasar porque pierdo tiempo.",
            "Correcto. El peatón tiene prioridad!"
        ],
        correctIndex: 1
    },

    {
        text:"Qué indican las sendas peatonales en rojo?",
        options: [
            "El inicio de una zona donde la velocidad máxima está limitada a 30km/h para disminuir la cantidad de siniestros.",
            "El inicio de una zona con ingreso prohibido / limitado",
            "La presencia de una edificación escolar"
        ],
        image:"/source6/zona30.jpg",
        correctIndex: 0
    },

    {
        text:"Qué significa la delimitación amarilla en esta imagen?",
        image:"/source6/cajones-amarillos.jpg",
        options: [
            "zona reservada para la detención de los vehículos de transporte colectivo de pasajeros/as",
            "zona reservada para la detención de vehículos de emergencia",
            "zona de carga y descarga de camiones"
        ],
        correctIndex: 0
    },

    {
        text:"Se puede estacionar o detenerse en esta zona amarilla?",
        image:"/source6/cajones-amarillos.jpg",
        options: [
            "Sí",
            "No"
        ],
        correctIndex: 1
    },

    {
        text:"Qué indica el rombo blanco en esta foto?",
        image:"/source6/carril-exclusivo.jpg",
        options: [
            "Es una señal para indicar la reducción de velocidad obligatoria",
            "Indica que es un carril de uso exclusivo para un tipo de vehículo específico",
            "Elemento decorativo para embellecer la calzada"
        ],
        correctIndex: 1
    },

    {
        text:"Los vehículos particulares que utilicen una cochera cuyo ingreso sea a través de un carril exclusivo deben portar un permiso de acceso.",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctIndex: 0
    },

    {
        text:"El ingreso de vehículos particulares con permiso de acceso a cocheras por parriles exclusivos...",
        options: [
            "... debe realizarse en la intersección inmediata anterior a la zona de acceso o de detención prevista.",
            "... puede realizarse por cualquier intersección y utilizar dicha vía hasta llegar a su cochera.", 
        ],
        correctIndex: 0
    },

    {
        text:"Qué indica la senda de color rojo en esta imagen?",
        options: [
            "indica una advertencia para reducir la velocidad y ceder el paso",
            "indica que allí hay un cruce de Metrobus",
            "indica que allí hay una bicisenda especial", 
        ],
        correctIndex: 1,
        image:"/source6/metrobus.jpg"
    },

    {
        text:"La conducción en la Ciudad Autónoma de Buenos Aires, al igual que todas las conductas al movilizarse en la vía pública, debe ajustarse a la norma establecida en la Ley...",
        options: [
            "1248",
            "2418",
            "2148" 
        ],
        correctIndex:2
    },

    {
        text:"En el marco de la responsabilidad legal, en qué consiste la \"Responsabilidad administrativa\"?",
        options: [
            "Es aquella en la que no hay daños ni lesiones. Se trata de multas o faltas de tránsito, que pueden ser leves o graves",
            "Se trata de una conducta antijurídica que es considerada como cuasidelito.",
            "Es la obligación, que recae sobre una persona, de reparar el daño ocasionado a otra por medio de un resarcimiento económico",
            "Es la consecuencia jurídica de la realización de un delito descripto en el código penal, que provocó lesiones o puso en peligro la integridad física de otras personas o daños de un bien material"
        ],
        correctIndex: 0
    },

    {
        text:"En el marco de la responsabilidad legal, en qué consiste la \"Responsabilidad civil\"?",
        options: [
            "Es aquella en la que no hay daños ni lesiones. Se trata de multas o faltas de tránsito, que pueden ser leves o graves",
            "Se trata de una conducta antijurídica que es considerada como cuasidelito.",
            "Es la obligación, que recae sobre una persona, de reparar el daño ocasionado a otra por medio de un resarcimiento económico",
            "Es la consecuencia jurídica de la realización de un delito descripto en el código penal, que provocó lesiones o puso en peligro la integridad física de otras personas o daños de un bien material"
        ],
        correctIndex: 2
    },

    {
        text:"En qué consiste la negligencia?",
        options: __formas_juridicas__,
        correctIndex: 0
    },

    {
        text:"En qué consiste la imprudencia?",
        options: __formas_juridicas__,
        correctIndex: 1
    },

    {
        text:"En qué consiste la impericia?",
        options: __formas_juridicas__,
        correctIndex: 2
    },

    {
        text:"Conductor/a principiante: Durante e los primeros 6 meses, no podrán circular por arterias donde se permitan velocidades superiores a:",
        options: [
            "70 km/h",
            "90 km/h",
            "120 km/h"
        ],
        correctIndex: 0,
        image:"/source6/P.jpg"
    },

    {
        text:"Conductor/a principiante: Durante los primeros 2 años, cuánto es el máximo permitido de alcohol por litro de sangre permitido para circular?",
        options: [
            "0,0 gramos",
            "0,1 gramos",
            "0,05 gramos"
        ],
        correctIndex: 0,
        image:"/source6/P.jpg"
    },

    {
        text:"La Cédula de identificación del vehículo...",
        options: [
            "A) Certifica que quien conduce sea el dueño/a del vehículo o tenga autorización para usarlo",
            "B) Certifica que el vehículo esté habilitado para circular",
            "C) Reemplaza la cédula verde, azul, marrón y rosa que antes emitía el DNRPA",
            "A y C",
            "B y C",
            "A, B y C"
        ],
        correctIndex: 3,
        image:"/source6/cedula-vehiculo.jpg"
    },

    {
        text:"Si un vehículo posee equipo de GNC, ¿debe llevar la cédula de identificación de dicho equipo?",
        options: [
            "Sí",
            "No hace falta"
        ],
        correctIndex: 0,
        image:"/source6/gnc.jpg"
    },

    {
        text: "Qué debe cubrir, como mínimo, la póliza de seguro de un vehículo?",
        options: [
            "daños causados a terceras personas, sean o no transportadas.",
            "daños causados a edificaciones y vehículos de terceros",
            "daños causados al propio vehículo por impericia del conductor"
        ],
        correctIndex: 0
    },

    {
        text:"Qué ley establece la obligatoriedad de la Verificación Técnica Vehicular?",
        options: [
            "la 2652",
            "la 2265", 
            "la 2562"
        ],
        correctIndex: 1
    },

    {
        text: "La primer VTV para automóviles de uso particular radicados en CABA, cuándo es obligatoria?",
        options: [
            "A) cuando el vehículo tiene más de 3 años de antiguedad",
            "B) cuando el vehículo tiene más de 60 mil kilómetros",
            "C) La VTV no es obligatoria",
            "D) la A y la B"
        ],
        correctIndex: 3
    },

    {
        text:"Según las siguientes patentes, en qué mes del año les corresponde realizar la VTV?",
        image:"/source6/patente-vtv.jpg",
        options: [
            "Octubre",
            "Enero",
            "Marzo",
            "Abril"
        ],
        correctIndex: 2
    },

    {
        text:"En el caso que el resultado de una VTV sea \"Condicional\" y se hubiesen encontrados defectos, con qué plazo contamos para arreglarlos?",
        options: [
            "30 días hábiles",
            "60 días hábiles",
            "90 días hábiles"
        ],
        correctIndex: 1
    },

    {
        text:"Según la Ley 3708, todo vehículo radicado en CABA está obligado a grabar sus autopartes en el plazo de cuántos días luego de su patentamiento?",
        options: [
            "30 días",
            "60 días",
            "90 días"
        ],
        correctIndex: 0,
        image:"/source6/autoparte.jpg"
    },

    {
        text:"Cómo proceder ante un siniestro vial? Qué pasos se deben seguir?",
        options: [
            "Alertar, Socorrer y Proteger",
            "Proteger, Alertar y Socorrer",
            "Socorrer, Proteger y Alertar"
        ],
        correctIndex: 1
    },

    {
        text:"Cuántos puntos asigna por primera vez el \"Sistema de Evaluación Permanente de Conductores\" o \"Scoring\" ?",
        options: [
            "10 puntos",
            "20 puntos",
            "30 puntos",
        ],
        correctIndex:1
    },

    {
        text:"Sí frente a inspecciones realizadas por agentes de tránsito en la vía pública, se llegara a comprobar que la persona alcanzó los 0 puntos de \"Scoring\", se le deberá retener la licencia y se le entregará en su lugar una Boleta de Citación, que la habilitará a conducir sólo por un plazo máximo de...",
        options: [
            "1 día",
            "3 días",
            "10 días",
            "30 días"
        ],
        correctIndex:1
    },

    {
        text:"Segpun la Ley 2148, si un semáforo está en verde pero una fila de conos nos impiden el paso, debemos avanzar?",
        options: [
            "Sí, el semáforo en verde nos lo permite. A pisar conos!",
            "No, las señales transitorias tienen prioridad por sobre el semáforo"
        ],
        correctIndex: 1
    },

    {
        text:"Qué está indicando la autoridad de control en esta imagen?",
        options: [
            "Que detengamos el vehículo",
            "Qué nos alejemos",
            "Que avancemos"
        ],
        correctIndex:2,
        image:"/source6/sign1.jpg"
    },

    {
        text:"Qué está indicando la autoridad de control en esta imagen?",
        options: [
            "Que avanzemos hacia él",
            "Que nos preparemos para acelerar a fondo",
            "Que nos detengamos",
            "Nos está saludando"
        ],
        correctIndex:2,
        image:"/source6/sign2.jpg"
    },

    {
        text:"Un vehículo en el carríl derecho en esta imagen podría pasar al carril izquierdo?",
        options: [
            "Sí",
            "No"
        ],
        correctIndex:1,
        image:"/source6/linea.jpg"
    },

    {
        text:"La siguiente señal es preventiva o reglamentaria?",
        options:[
            "Preventiva",
            "Reglamentaria"
        ],
        correctIndex: 0,
        image:"/source6/senal.jpg"
    },

    {
        text:"Qué significa si un vehículo en movimiento tiene las balizas encendidas, emplea la bocina en forma intermitente y el conductor o un pasajero agita un pañuelo?",
        options: [
            "Que argentina ganó el mundial",
            "Que se encuentra en una emergencia médica y está pidiendo prioridad de paso" 
        ],
        correctIndex: 1
    },

    {
        text:"Para darle paso a una ambulancia en emergencia, estando en una vía de doble sentido, cómo deben apartarse los vehículos?",
        options: [
            "Deben girar hacia sus respectivas derechas",
            "Debemos girar hacia sus respectivas izquierdas",
            "Deben girar hacia el carril en dirección opuesta al vehículo de emergencia"
        ],
        correctIndex: 0,
        image:"/source6/ambu1.jpg"
    },

    {
        text:"Para darle paso a una ambulancia que circula por una vía de dos carriles con un mismo sentido, cómo deben apartarse los vehículos?",
        options: [
            "Deben apartarse hacia el carril izquierdo",
            "Deben apartarse hacia el carril derecho",
            "Deben girar en la dirección a su banquina más próxima", 
        ],
        correctIndex: 2,
        image:"/source6/ambu2.jpg"
    },

    {
        text:"Para darle paso a una ambulancia que circula por una vía de 3 carriles con un mismo sentido, cómo deben apartarse los vehículos?",
        options: [
            "Deben apartarse hacia el carril izquierdo",
            "Deben apartarse hacia el carril derecho",
            "El del carril izquierdo debe apartarse a su izquierda y los demás a sus derechas", 
        ],
        correctIndex: 2,
        image:"/source6/ambu3.jpg"
    },

    {
        text:"En una intersección, si el semaforo está en amarillo y aún no iniciaste el cruce, qué debes hacer?",
        options: [
            "Detenerme",
            "Apurarme a cruzar" 
        ],
        correctIndex: 0
    },

    {
        text:"En una intersección no semaforizada donde el cruce es entre una avenida y una calle, quién tiene prioridad de paso si tu vehículo viene por la calle?",
        options: [ 
            "El vehículo que viene por la avenida, sea cual sea la mano del tránsito",
            "Mi vehículo, si estoy de la mano derecha del tránsito de la avenida",
            "Es indistinto"
        ],
        correctIndex: 0 
    },

    {
        text:"Es correcta esta trayectoría al circular por esta rotonda?",
        options: [
            "No",
            "Sí"
        ],
        correctIndex: 0,
        image:"/source6/rotonda.jpg"
    },

    {
        text:"Quién tiene prioridad de paso en esta imagen que muestra un vehículo descendiendo y otro por realizar un ascenso a una pendiente?",
        options: [
            "El vehículo que esta por realizar el ascenso",
            "El vehículo que está descendiendo"
        ],
        correctIndex: 0,
        image:"/source6/prioridad.jpg"
    },

    {
        text:"Qué vehículo tiene prioridad de paso en esta imagen?",
        options: [
            "El vehículo gris",
            "El vehículo rojo"
        ],
        correctIndex: 0,
        image:"/source6/prioridad2.jpg"
    },

    {
        text:"Se permite la modificación de la potencia o el tipo de luces del auto una vez adquirido?",
        options: [
            "Sí",
            "No"
        ],
        correctIndex: 1
    },

    {
        text:"Al estar próximos a una detención para estacionar el vehículo, qué luces debemos encender para indicar esta intención?",
        options: [
            "Las luces altas",
            "Las luces de posisionamiento",
            "Las luces bajas",
            "Las balizas"
        ],
        correctIndex: 3
    },

    {
        image:"/source6/car-lights.jpg",
        text:"Dónde están ubicadas las luces bajas?",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 2
    },

    {
        image:"/source6/car-lights.jpg",
        text:"Dónde están ubicadas las luces rompe niebla?",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 4
    },

    {
        image:"/source6/car-lights.jpg",
        text:"Dónde están ubicadas las luces de giro/balizas?",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 3
    },

    {
        image:"/source6/car-lights2.jpg",
        text:"Dónde están ubicadas las luces de giro/balizas?",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 0
    },

    {
        image:"/source6/car-lights2.jpg",
        text:"Dónde están ubicadas las luces de retroceso",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 1
    },

    {
        image:"/source6/car-lights2.jpg",
        text:"Dónde están ubicadas las luces de freno principales",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 4
    },

    {
        image:"/source6/car-lights2.jpg",
        text:"Dónde está ubicada la tercer luz de freno?",
        options: "12345".split("").map(n=>`En (${n})`),
        correctIndex: 3
    },

    {
        text:"Cuál es la velocidad mínima en autopistas?",
        options: [
            "60 km/h",
            "70 km/h",
            "80 km/h"
        ],
        correctIndex: 0
    },

    {
        text:"Cuántos metros, como mínimo, debemos circular por el carril más cercano al lado al que deseamos girar?",
        options: [
            "10 metros",
            "30 metros",
            "50 metros"
        ],
        correctIndex: 1
    },

    {
        text:"Si un vehículo sobrepasa a otro vehículo que circula en otro carril, cómo se llama la maniobra?",
        options: [
            "Adelantamiento",
            "Sobrepaso"
        ],
        correctIndex: 0
    },

    {
        text:"Si un vehículo sobrepasa a otro vehículo que tiene en frente utilizando otro carril, cómo se llama la maniobra?",
        options: [
            "Adelantamiento",
            "Sobrepaso"
        ],
        correctIndex: 1
    },

    {
        text:"Cómo se le denomina al carril resaltado en esta imagen?",
        options: [
            "Carril de aceleración",
            "Carril de desaceleración",
            "Carril de empalme",
            "Carril alterno"
        ],
        correctIndex: 1,
        image:"/source6/carril-salida.jpg"
    },

    {
        text:"Cuál es la velocidad máxima en la que debería adecuarse el vehículo en esta imagen dada la siguiente situación de niebla ?",
        image:"/source6/niebla.jpg",
        options: [
            "a la velocidad máxima que la vía permita",
            "a 60 km/h",
            "a 30 km/h"
        ],
        correctIndex: 1
    },

    {
        text:"Si un conductor detiene su vehículo al costado de la vía, se baja del mismo y se dirije hacia un departamento donde comienza una conversación que se extiende por más de 2 minutos con un vecino, el vehículo se encuentra en...",
        options: [
            "Detención",
            "Estacionado (y es motivo de infracción)" 
        ],
        correctIndex: 1
    },

    {
        text:"Qué distancia aproximada debe dejar un vehículo con respecto al cordón de la vereda al estacionarlo?",
        options: [
            "10 centímetros",
            "20 centímetros",
            "50 centímetros"
        ],
        correctIndex: 1
    },

    {
        text:"El siguiente vehículo se encuentra bien estacionado si está en frente de su casa?",
        options: [
            "Sí",
            "No"
        ],
        correctIndex: 1,
        image:"/source6/estacionado.jpg"
    },

    {
        text:"Si tuvieras que estacionar tu vehículo en una pendiente descendente, cómo deberías dejar posisionadas las ruedas del auto?",
        options: [
            "orientadas hacia el cordón de la vereda",
            "orientardas hacia el centro de la calzada",
            "Es indistinto, el freno de mano es suficiente"
        ],
        correctIndex:0
    },

    {
        text:"En CABA, a menos que una señal que indique lo contrario, en una calle de un solo sentido, dónde se puede estacionar generalmente?",
        options: [
            "Sobre la acera izquierda",
            "Sobre la acera derecha",
            "Ninguna"
        ],
        correctIndex: 1
    },

    {
        text:"Complete: Está prohibido conducir cualquier tipo de vehículo con más de ______ gramos de alcohol por litro de sangre.",
        options: [
            "0.2",
            "0.5",
            "1.0"
        ],
        correctIndex: 1
    },

    {
        text:"En un procedimiento de alcoholemia, cuál de las siguientes opciones resultaría en la retención de la licencia de conducir del conductor?",
        options: [
            "Poseer más de 0.5 g/l de alcohol en sangre",
            "Negarse a realizar una prueba de alcoholemia",
            "Todas las anteriores"
        ],
        correctIndex:2
    },

    //TODO... pag 96
    {
        text:"Dormir pocas horas tiene influencia en el rendimiento intelectual del conductor?",
        options: [
            "No, conozco un amigo que duerme 2 horas y maneja bien.",
            "Sí, también dificulta la concentración y la utilización de la memoria."
        ],
        correctIndex: 1
    },

    {
        text:"Si se reparte la atención entre la tarea principal (conducir) y otras secundarias se...",
        options: [
            "... ahorra tiempo para hacer más cosas.",
            "... muestra destreza al volante al requerir menos atención para conducir.",
            "... resta capacidad de respuesta frente a imprevistos." 
        ],
        correctIndex: 2
    },

    {
        text:"Cuál de las siguientes actitudes al volante NO es deseada?",
        options: [
            "Tolerante",
            "Solidario",
            "Exhibicionista",
            "Prudente"
        ],
        correctIndex:2
    },

    {
        text:"Cada vez que se deba hacer uso de un vehículo, qué componentes se deben verificar estén en correcto funcionamiento y nivel?",
        options: [
            "Nivel de aceite",
            "Nivel del líquido refrigerante",
            "Estado del limpiaparabrisas y líquido",
            "Luces",
            "Sistema de frenos (líquido y pastillas).",
            "Neumáticos (estado, dibujo, presión y vencimiento)",
            "Batería",
            "Todas las anteriores"
        ],
        correctIndex: 7
    },

    {
        text:"El Sistema de Frenos ABS es obligatorio?",
        options:[
            "Sí",
            "No"
        ],
        correctIndex: 1
    },

    {
        text:"Cuál de los siguientes factores podría incrementar de forma no deseada la distancia de frenado de un vehículo?",
        options: [
            "Baja presión de los neumáticos",
            "Amortiguadores en mal estado",
            "Neumáticos nuevos"
        ],
        correctIndex:1
    },

    {
        text:"Qué sistema del vehículo está encargado de garantizar la correcta maniobra del vehículo?",
        options:[
            "El Sistema de suspensión",
            "El sistema de dirección", 
        ],
        correctIndex:1
    },

    {
        text:"El siguiente neumático, se encuentra en condiciones para circular?",
        options: [
            "Sí",
            "No"
        ],
        correctIndex:1,
        image:"/source6/neumatico.jpg"
    },

    {
        text:"Qué neumático de los que se muestran en la imagen posee una presión excesiva?",
        options: [
            "A",
            "B",
            "C"
        ],
        correctIndex:1,
        image:"/source6/naumaticos.jpg" //lpm lo escribí mal...
    },

    {
        text:"El siguiente conductor se encuentra sentado de forma segura para conducir?",
        options: [
            "Sí",
            "No" 
        ],
        correctIndex:1,
        image:"/source6/apoyacabeza.jpg"
    },

    {
        text:"Según la Ley Nº 5294, es correcta la forma en la que la mujer en esta imagen lleva a su hijo?",
        options: [
            "Sí, ya que no hay nada más fuerte que el abrazo de una madre.",
            "No, el bebé debe viajar atrás y estar sujeto a algún sistema de retención infantil." 
        ],
        correctIndex:1,
        image:"/source6/baby.jpg"
    },

    {
        text:"Al viajar con mascotas, dónde se las debe ubicar?",
        options: [
            "En el asiento de adelante",
            "En el asiento de atrás",
            "Es indistinto"
        ],
        correctIndex:1
    },

    {
        text:"Es obligatorio llevar en el vehículo un chaleco reflectivo?",
        options: [
            "Sí",
            "No", 
        ],
        correctIndex:0,
        image:"/source6/chaleco.jpg"
    },

    {
        text:"En CABA, cuál es la velocidad máxima permitida en calles y colectoras de vía rápida?",
        options: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        correctIndex:2
    },

    {
        text:"En CABA, cuál es la velocidad máxima permitida la Av. Gral Paz?",
        options: [
            "60 km/h",
            "70 km/h",
            "80 km/h",
            "100 km/h",
            "120 km/h", 
        ],
        correctIndex:2
    },

    {
        text:"En CABA, cuál es la velocidad máxima permitida en la Av. Del Libertador?",
        options: [
            "45 km/h",
            "60 km/h",
            "70 km/h",
            "80 km/h",
            "100 km/h",
        ],
        correctIndex:2
    },

    {
        text:"En CABA, cuál es la velocidad máxima permitida en pasajes y calles de convivencia?",
        options: [
            "10 km/h",
            "20 km/h",
            "30 km/h",
            "40 km/h", 
        ],
        correctIndex:1
    },

    {
        text:"En CABA, cuál es la velocidad mínima en autopista?",
        options: [
            "30 km/h",
            "40 km/h",
            "60 km/h", 
            "80 km/h"
        ],
        correctIndex:2
    },

    {
        text:"En CABA, cuál es la velocidad mínima en semiautopistas y rutas?",
        options: [
            "30 km/h",
            "40 km/h",
            "60 km/h", 
            "80 km/h"
        ],
        correctIndex:1
    }
    

].map(q=>({ ...q, image:q.image? process.env.PUBLIC_URL+q.image : undefined}));