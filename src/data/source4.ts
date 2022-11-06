/*
//https://test-conducir.yurkap.com/test-de-conducir/respuestas-correctas

//----------------------------
// DATA EXTRACTOR
//----------------------------

var questions = [];

$(".article").each( (i,_art)=>{

    const art = $(_art);
    const text = art.find(".text-question").text().trim();
    const img = art.find("img.img-thumbnail")[0]?.src;
    const options = [];
    const type = art.find("label").first().text().trim();

    if( type=="Preguntas Categoría B" || type=="Preguntas del examen teórico para todas las categorías" )
    {
        art.children(".form-group").each( (j, _option)=>{
            if( j<2 ) return;

            const option = $(_option)
            options.push({
                text        : option.text().trim(),
                correct     : option.find("img").toArray().findIndex( elem=>elem.src.indexOf("true.png")>0 )>-1
            })
        });

        questions.push({
            text, img, options 
        }) 
    } 

} );

console.log( JSON.stringify(questions) );
*/

export const Source4 = [
	{
		text: "Según la Organización Mundial de la Salud, la siguiente problemática es categorizada como “pandemia” ya que constituye la décima causa de muerte en todo el mundo.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_1_pregunta.jpg",
		options: [
			{ text: "A) Verdadero", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?",
		options: [
			{ text: "A) Niños menores de 15 años.", correct: false },
			{ text: "B) Jóvenes y adultos de 15 a 34 años.", correct: true },
			{ text: "C)  Adultos mayores de 35 años.", correct: false },
		],
	},
	{
		text: "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_3_pregunta.jpg",
		options: [
			{ text: "A)  Opción A.", correct: false },
			{ text: "B) Opción B.", correct: true },
			{ text: "C) Opción C.", correct: false },
		],
	},
	{
		text: "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
		options: [
			{ text: "A)  Vehicular y Ambiental.", correct: false },
			{ text: "B) Humano y Vehicular.", correct: false },
			{ text: "C) Humano, Vehicular y Ambiental.", correct: true },
		],
	},
	{
		text: "¿A qué factor se deben la mayoría de los siniestros viales?",
		options: [
			{ text: "A)  Al humano.", correct: true },
			{ text: "B) Al vehicular.", correct: false },
			{ text: "C) Al ambiental.", correct: false },
		],
	},
	{
		text: "A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
		options: [
			{
				text: "A) Al estado del pavimento y al clima, en especial.",
				correct: false,
			},
			{
				text: "B) A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
				correct: true,
			},
			{ text: "C) Ninguna de las anteriores.", correct: false },
		],
	},
	{
		text: "El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿A qué se denomina incidente de tránsito o incidente vial?",
		options: [
			{
				text: "A) Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
				correct: true,
			},
			{
				text: "B) Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
				correct: false,
			},
			{
				text: "C) Hecho, evitable o no, que involucra daños a terceros.",
				correct: false,
			},
		],
	},
	{
		text: "¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?",
		options: [
			{
				text: "A) Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito.",
				correct: false,
			},
			{
				text: "B) Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.",
				correct: true,
			},
			{
				text: "C) Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía.",
				correct: false,
			},
		],
	},
	{
		text: "“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
		options: [
			{
				text: "A) No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.",
				correct: false,
			},
			{
				text: "B) No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.",
				correct: false,
			},
			{
				text: "C) Sí, porque se está obligado a no causar peligro ni entorpecer la circulación.",
				correct: true,
			},
		],
	},
	{
		text: "“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
		options: [
			{
				text: "A) Sí, independientemente del tipo de movilidad elegido.",
				correct: true,
			},
			{
				text: "B) No, los peatones son usuarios de la vía pública y no están obligados.",
				correct: false,
			},
			{
				text: "C) Sí pero sólo si estamos conduciendo un vehículo.",
				correct: false,
			},
		],
	},
	{
		text: "Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
		options: [
			{
				text: "A) Daños materiales, costos sanitarios y administrativos.",
				correct: true,
			},
			{ text: "B) Daños materiales y costos sanitarios.", correct: false },
			{ text: "C) Sólo daños materiales.", correct: false },
		],
	},
	{
		text: "Todo usuario de la vía pública debe, como premisa básica…",
		options: [
			{
				text: "A) Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.",
				correct: true,
			},
			{
				text: "B) Acreditar experiencia de manejo en vehículos por más de un año.",
				correct: false,
			},
			{
				text: "C) Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses.",
				correct: false,
			},
		],
	},
	{
		text: "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "¿Qué Ley rige al momento de circular por la Ciudad de Buenos Aires?",
		options: [
			{ text: "A) La Ley Nacional N°24.449.", correct: false },
			{ text: "B) La Ley de la Ciudad N°2.148.", correct: false },
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿A qué se denomina Movilidad Sustentable?",
		options: [
			{
				text: "A) Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular.",
				correct: false,
			},
			{
				text: "B) Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.",
				correct: false,
			},
			{
				text: "C) Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
		options: [
			{ text: "A) Velocidad y confort.", correct: false },
			{ text: "B) Fluidez y seguridad.", correct: true },
			{ text: "C) Comodidad y Agilidad.", correct: false },
		],
	},
	{
		text: "Indique cuál es la premisa correcta:",
		options: [
			{
				text: "A) Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.",
				correct: false,
			},
			{
				text: "B) Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.",
				correct: false,
			},
			{
				text: "C) A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad.",
				correct: true,
			},
		],
	},
	{
		text: "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_20_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: false },
			{ text: "B) Opción B.", correct: true },
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: false },
		],
	},
	{
		text: "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_21_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: true },
			{ text: "B) Opción B.", correct: false },
			{ text: "C) Es indistinto.", correct: false },
		],
	},
	{
		text: "Indique cuál es la premisa correcta:",
		options: [
			{
				text: "A) A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
				correct: false,
			},
			{
				text: "B) A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
				correct: false,
			},
			{
				text: "C) A menor cantidad de vehículos, menor probabilidad de siniestralidad.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
		options: [
			{
				text: "A) Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
				correct: false,
			},
			{
				text: "B) Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
				correct: true,
			},
			{
				text: "C) Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión.",
				correct: false,
			},
		],
	},
	{
		text: "¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_24_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: true },
			{ text: "B) Opción B.", correct: false },
			{ text: "C) Opción C.", correct: false },
		],
	},
	{
		text: "¿Es aconsejable circular en bicicleta de esta manera?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_25_pregunta.jpg",
		options: [
			{ text: "A) Sí, porque está conduciendo correctamente.", correct: false },
			{
				text: "B) No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.",
				correct: true,
			},
			{
				text: "C) Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje.",
				correct: false,
			},
		],
	},
	{
		text: "En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_26_pregunta.jpg",
		options: [
			{
				text: "A) La opción A, ya que al tener ropa clara es más visible.",
				correct: true,
			},
			{
				text: "B) Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
				correct: false,
			},
			{
				text: "C) Ambas opciones presentan el mismo riesgo por igual.",
				correct: false,
			},
		],
	},
	{
		text: "¿Se puede circular en bicicleta por esta vía?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_27_pregunta.jpg",
		options: [
			{
				text: "A) Sí, siempre que se mantenga en el carril derecho.",
				correct: false,
			},
			{ text: "B) No, está prohibido.", correct: true },
			{
				text: "C) Sí, mientras se respete la velocidad mínima de la arteria.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué se debe evitar al circular en bicicleta?",
		options: [
			{
				text: "A) Usar auriculares y dispositivos electrónicos, que afecten la concentración.",
				correct: false,
			},
			{ text: "B) Usar ropa oscura y suelta.", correct: false },
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "¿Está permitido llevar carga en una bicicleta?",
		options: [
			{
				text: "A) Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.",
				correct: false,
			},
			{
				text: "B) No, está prohibido ya que puede desestabilizar la bicicleta.",
				correct: false,
			},
			{
				text: "C) Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.",
				correct: true,
			},
		],
	},
	{
		text: "El ciclista, ¿tiene permitido llevar un pasajero?",
		options: [
			{
				text: "A) Sí, únicamente si no compromete la visibilidad",
				correct: false,
			},
			{
				text: "B) Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.",
				correct: true,
			},
			{ text: "C) Ambas respuestas, A y B, son incorrectas.", correct: false },
		],
	},
	{
		text: "¿Está permitido estacionar una bicicleta en este lugar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_31_pregunta.jpg",
		options: [
			{
				text: "A) No, los estacionamientos son exclusivos para usuarios de autos y motos.",
				correct: false,
			},
			{
				text: "B) Sólo en algunos estacionamientos está permitido.",
				correct: false,
			},
			{
				text: "C) Sí, los estacionamientos están obligados a destinar un espacio para bicicletas.",
				correct: true,
			},
		],
	},
	{
		text: "Un menor de 12 años puede circular en bicicleta por...",
		options: [
			{
				text: "A) La calle, acompañado de un adulto mayor de 18 años.",
				correct: false,
			},
			{
				text: "B) Por la vereda, a la menor velocidad posible.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?",
		options: [
			{
				text: "A) La velocidad máxima permitida en la vía donde se encuentra la ciclovía.",
				correct: false,
			},
			{ text: "B) 25 km/h.", correct: true },
			{ text: "C) 30 km/h.", correct: false },
		],
	},
	{
		text: "¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_34_pregunta.jpg",
		options: [
			{ text: "A) Al menos, un metro y medio.", correct: true },
			{ text: "B) Al menos, medio metro.", correct: false },
			{ text: "C) Lo suficiente para no tocarlo.", correct: false },
		],
	},
	{
		text: "¿Por dónde deben circular los ciclistas en esta calle?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_35_pregunta.jpg",
		options: [
			{
				text: "A) No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.",
				correct: false,
			},
			{ text: "B) Cerca del borde derecho de la calzada.", correct: true },
			{ text: "C) Cerca del borde izquierdo de la calzada.", correct: false },
		],
	},
	{
		text: "¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?",
		options: [
			{ text: "A) Cerca del borde derecho de la calzada.", correct: true },
			{ text: "B) Cerca del borde izquierdo de la calzada.", correct: false },
			{
				text: "C) No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda.",
				correct: false,
			},
		],
	},
	{
		text: "¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?",
		options: [
			{
				text: "A) Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.",
				correct: false,
			},
			{
				text: "B) En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué indica esta seña?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_38_pregunta.jpg",
		options: [
			{ text: "A) Giro a la izquierda.", correct: true },
			{ text: "B) Adelantamiento por la izquierda.", correct: false },
			{ text: "C) Detenerse.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta seña?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_39_pregunta.jpg",
		options: [
			{ text: "A) Adelantamiento por la derecha.", correct: false },
			{ text: "B) Giro a la derecha.", correct: true },
			{ text: "C) Detenerse.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta seña?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_40_pregunta.jpg",
		options: [
			{ text: "A) Giro a la izquierda.", correct: false },
			{ text: "B) Adelantamiento por la izquierda.", correct: false },
			{ text: "C) Detenerse.", correct: true },
		],
	},
	{
		text: "Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_42_pregunta.jpg",
		options: [
			{ text: "A) Hacia la derecha.", correct: false },
			{ text: "B) Hacia la izquierda.", correct: false },
			{ text: "C) Hacia ambos lados.", correct: true },
		],
	},
	{
		text: "¿Este ciclo rodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_43_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.",
				correct: false,
			},
			{
				text: "B) Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.",
				correct: true,
			},
			{
				text: "C) No, sólo pueden circular por vías donde no haya ciclovías.",
				correct: false,
			},
		],
	},
	{
		text: "En esta situación, ¿es correcto que el vehículo avance?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_45_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque por allí no circulan peatones y no hay peligro.",
				correct: false,
			},
			{
				text: "B) No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
				correct: true,
			},
			{
				text: "C) Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_46_pregunta.jpg",
		options: [
			{
				text: "A) Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
				correct: true,
			},
			{
				text: "B) Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle.",
				correct: false,
			},
		],
	},
	{
		text: "Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_47_pregunta.jpg",
		options: [
			{
				text: "A) Esquivar a la peatona y tocarle bocina para que no se distraiga.",
				correct: false,
			},
			{
				text: "B) Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular.",
				correct: true,
			},
		],
	},
	{
		text: "Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_48_pregunta.jpg",
		options: [
			{
				text: "A) No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
				correct: false,
			},
			{ text: "B) Sí, siempre.", correct: true },
		],
	},
	{
		text: "Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_49_pregunta.jpg",
		options: [
			{
				text: "A) Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
				correct: true,
			},
			{
				text: "B) Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son incorrectas.",
				correct: false,
			},
		],
	},
	{
		text: "Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_50_pregunta.jpg",
		options: [
			{
				text: "A) Priorizar la circulación del peatón, indefectiblemente.",
				correct: true,
			},
			{
				text: "B) Realizar una guiñada para advertir su preferencia de avance.",
				correct: false,
			},
			{
				text: "C) Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda.",
				correct: false,
			},
		],
	},
	{
		text: "En esta intersección, ¿quién tiene prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_51_pregunta.jpg",
		options: [
			{ text: "A) El peatón.", correct: true },
			{ text: "B) El conductor.", correct: false },
			{ text: "C) Es indistinto.", correct: false },
		],
	},
	{
		text: "Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
		options: [
			{
				text: "A) Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
				correct: false,
			},
			{
				text: "B) En coincidencia con las paradas de transporte.",
				correct: false,
			},
			{
				text: "C) Por la esquina, por la prolongación longitudinal de la vereda sobre la calle.",
				correct: true,
			},
		],
	},
	{
		text: "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_53_pregunta.jpg",
		options: [
			{ text: "A) Que no comience a cruzar la calzada.", correct: false },
			{
				text: "B) Si inició el cruce, que lo finalice con mucha precaución.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué vehículos pueden circular por el carril señalizado en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_54_pregunta.jpg",
		options: [
			{ text: "A) Todos los transportes de pasajeros.", correct: false },
			{ text: "B) Sólo colectivos entre las 07 h y las 21 h.", correct: false },
			{
				text: "C) Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones.",
				correct: true,
			},
		],
	},
	{
		text: "Además de colectivos, ¿quiénes pueden circular por este carril?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_56_pregunta.jpg",
		options: [
			{ text: "A) Taxis con pasajeros.", correct: false },
			{ text: "B) Motos.", correct: false },
			{
				text: "C) Ambas respuestas, la A y la B, son incorrectas.",
				correct: true,
			},
		],
	},
	{
		text: "¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_58_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que constituye una falta de tránsito que amerita esa sanción.",
				correct: true,
			},
			{
				text: "B) Sólo si perjudica la circulación de los colectivos.",
				correct: false,
			},
			{
				text: "C) Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_59_pregunta.jpg",
		options: [
			{ text: "A) Cruce de Metrobús.", correct: true },
			{
				text: "B) Cruce exclusivo de vehículos de emergencia.",
				correct: false,
			},
			{ text: "C) Cruce de bicicletas.", correct: false },
		],
	},
	{
		text: "¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_60_pregunta.jpg",
		options: [
			{ text: "A) Carril exclusivo de colectivo de pasajeros.", correct: true },
			{
				text: "B) Cruce exclusivo de vehículos de emergencia.",
				correct: false,
			},
			{ text: "C) Ceda el paso.", correct: false },
		],
	},
	{
		text: "¿Qué son los carriles exclusivos?",
		options: [
			{ text: "A) Vías con un único sentido de circulación.", correct: false },
			{
				text: "B) Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
				correct: true,
			},
			{
				text: "C) Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones.",
				correct: false,
			},
		],
	},
	{
		text: "El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_63_pregunta.jpg",
		options: [
			{
				text: "A) Sí, siempre que señalice la maniobra con anticipación.",
				correct: false,
			},
			{
				text: "B) No, ya que para realizarlo debería invadir los carriles exclusivos.",
				correct: false,
			},
			{
				text: "C)  Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué significa la demarcación horizontal que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_64_pregunta.jpg",
		options: [
			{
				text: "A) Cruce peligroso por tener poca iluminación.",
				correct: false,
			},
			{ text: "B) Senda peatonal próxima a centros de salud.", correct: false },
			{ text: "C) Senda peatonal próxima a zona escolar.", correct: true },
		],
	},
	{
		text: "¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_65_pregunta.jpg",
		options: [
			{ text: "A) Estacionamiento para micros escolares.", correct: false },
			{
				text: "B) Carril de detención para el ascenso y descenso de escolares.",
				correct: true,
			},
			{
				text: "C) Zona de ascenso y descenso de pasajeros de transporte público.",
				correct: false,
			},
		],
	},
	{
		text: "La siguiente imagen corresponde a:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_66_pregunta.jpg",
		options: [
			{ text: "A) Calle Prioridad Peatón.", correct: true },
			{ text: "B) Calle con Intervención Peatonal.", correct: false },
			{ text: "C) Calle con Bicisenda.", correct: false },
		],
	},
	{
		text: "Las intervenciones horizontales señaladas, sirven para...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_67_pregunta.jpg",
		options: [
			{ text: "A) Incrementar la seguridad de los peatones.", correct: true },
			{ text: "B) Promover la movilidad vehicular.", correct: false },
			{ text: "C) Colaborar con la rapidez en la movilidad.", correct: false },
		],
	},
	{
		text: "¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_68_pregunta.jpg",
		options: [
			{ text: "A) Intervención Peatonal.", correct: true },
			{ text: "B) Intervención Vehicular.", correct: false },
			{ text: "C) Intervención de la Calzada.", correct: false },
		],
	},
	{
		text: "¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_69_pregunta.jpg",
		options: [
			{
				text: "A) Ampliar la zona permitida de estacionamiento para motos.",
				correct: false,
			},
			{
				text: "B) Reducir la velocidad y radio de giro de los vehículos.",
				correct: true,
			},
			{
				text: "C) Ampliar la zona permitida de estacionamiento para vehículos de emergencia.",
				correct: false,
			},
		],
	},
	{
		text: "La señal que está presente en la imagen corresponde a las informativas que orientan al peatón.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_70_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "En la imagen se muestra un cruce exclusivo para ciclistas.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_71_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "¿Qué indica el siguiente cruce verde en las intersecciones?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_72_pregunta.jpg",
		options: [
			{
				text: "A) Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.",
				correct: true,
			},
			{
				text: "B) Advierte a los conductores sobre la existencia de un establecimiento escolar cercano.",
				correct: false,
			},
			{
				text: "C) Advierte a los conductores sobre un cruce peligroso por tener poca iluminación.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta demarcación horizontal verde?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_73_pregunta.jpg",
		options: [
			{
				text: "A) Que en esa intersección hay una ciclovía o bicisenda.",
				correct: true,
			},
			{ text: "B) Que se aproxima a un cruce ferroviario.", correct: false },
			{ text: "C) Que es un cruce exclusivo de peatones.", correct: false },
		],
	},
	{
		text: "¿Cuál de las siguientes imágenes muestra una bicisenda?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_74_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: false },
			{ text: "B) Opción B.", correct: true },
			{ text: "C) Opción C.", correct: false },
		],
	},
	{
		text: "¿Cuál de las siguientes imágenes muestra una ciclovía?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_75_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: true },
			{ text: "B) Opción B.", correct: false },
			{ text: "C) Opción C.", correct: false },
		],
	},
	{
		text: "¿Cuál es la principal diferencia entre bicisendas y ciclovías?",
		options: [
			{
				text: "A) La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial.",
				correct: false,
			},
			{
				text: "B) La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda.",
				correct: false,
			},
			{
				text: "C) La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué es una ciclovía?",
		options: [
			{
				text: "A) Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
				correct: false,
			},
			{
				text: "B) Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
				correct: true,
			},
			{
				text: "C) Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
				correct: false,
			},
		],
	},
	{
		text: "En caso de siniestro, el orden de actuación recomendado es...",
		options: [
			{ text: "A) Alertar - Socorrer - Proteger.", correct: false },
			{ text: "B) Proteger - Alertar - Socorrer.", correct: true },
			{ text: "C) Socorrer - Proteger - Alertar.", correct: false },
		],
	},
	{
		text: "¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
		options: [
			{
				text: "A) Reducir la contaminación y mejorar la calidad del medio ambiente.",
				correct: false,
			},
			{
				text: "B) Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
		options: [
			{ text: "A) 24 horas.", correct: false },
			{ text: "B) 48 horas.", correct: false },
			{ text: "C) 72 horas.", correct: true },
		],
	},
	{
		text: "En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
		options: [
			{
				text: "A) Detenerse inmediatamente y permanecer en el lugar del hecho.",
				correct: true,
			},
			{ text: "B) Conducir hasta la comisaría más cercana.", correct: false },
			{ text: "C) Llamar al 911 y continuar el viaje.", correct: false },
		],
	},
	{
		text: "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?",
		options: [
			{ text: "A) 911 y 109.", correct: false },
			{ text: "B) 103 y 107.", correct: false },
			{ text: "C) 107 y 911.", correct: true },
		],
	},
	{
		text: "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:",
		options: [
			{
				text: "A) Lugar del hecho, características del incidente, cantidad y estado de las víctimas.",
				correct: true,
			},
			{
				text: "B) Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas.",
				correct: false,
			},
			{
				text: "C) Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
		options: [
			{
				text: "A) Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación.",
				correct: false,
			},
			{
				text: "B) Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
		options: [
			{ text: "A) La intención de la conducta dañosa.", correct: false },
			{
				text: "B) La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.",
				correct: true,
			},
			{
				text: "C) Los antecedentes de la persona que provoca el daño.",
				correct: false,
			},
		],
	},
	{
		text: "Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño de este?",
		options: [
			{
				text: "A) No, porque la responsabilidad penal es intransferible.",
				correct: true,
			},
			{
				text: "B) Sí. Además, del dueño también puede transferirse a la Compañía de Seguros.",
				correct: false,
			},
			{
				text: "C) Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias.",
				correct: false,
			},
		],
	},
	{
		text: "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
		options: [
			{
				text: "A) Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
				correct: false,
			},
			{
				text: "B) Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
				correct: false,
			},
			{
				text: "C) Que ha actuado no conforme a las exigencias de la Ley.",
				correct: true,
			},
		],
	},
	{
		text: "Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción?",
		options: [
			{
				text: "A) En ese mismo momento y ante la Autoridad de Control si ésta lo requiere.",
				correct: false,
			},
			{
				text: "B) Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.",
				correct: true,
			},
			{ text: "C) Ambas respuestas, la A y B, son correctas.", correct: false },
		],
	},
	{
		text: "Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
		options: [
			{ text: "A) 30 días corridos desde su vencimiento.", correct: false },
			{ text: "B) Hasta las 00 horas del día de cumpleaños.", correct: false },
			{
				text: "C) No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente.",
				correct: true,
			},
		],
	},
	{
		text: "En caso de comprobar una falta, ¿puede una gente de tránsito retener la licencia de conducir?",
		options: [
			{ text: "A) No, porque es un documento personal.", correct: false },
			{
				text: "B) Sólo en los casos que la normativa vigente así lo indique.",
				correct: true,
			},
			{
				text: "C) Sólo en casos de incidentes que involucren a terceros.",
				correct: false,
			},
		],
	},
	{
		text: "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
		options: [
			{ text: "A) 30 días corridos desde su vencimiento.", correct: false },
			{
				text: "B) Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva.",
				correct: false,
			},
			{
				text: "C) No debe superar el año desde su vencimiento.",
				correct: true,
			},
		],
	},
	{
		text: "El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE cuando se conduce por vías interurbanas.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
		options: [
			{
				text: "A) Se la puede solicitar en cualquier establecimiento comercial que la realice.",
				correct: false,
			},
			{
				text: "B) Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
				correct: true,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: false,
			},
		],
	},
	{
		text: "La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?",
		options: [
			{
				text: "A) Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad.",
				correct: false,
			},
			{
				text: "B) No, deben estar colocadas en el lugar y deforma reglamentaria.",
				correct: true,
			},
			{
				text: "C) Sólo está prohibido modificar la placa de dominio trasera, no así la delantera.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_111_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: false },
			{ text: "B) Opción B.", correct: true },
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: false },
		],
	},
	{
		text: "¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?",
		options: [
			{
				text: "A) En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.",
				correct: true,
			},
			{
				text: "B) La obligación de los conductores a realizar un curso vial anual.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son incorrectas.",
				correct: false,
			},
		],
	},
	{
		text: "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
		options: [
			{
				text: "A) Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
				correct: true,
			},
			{ text: "B) Sólo las drogas ilegales.", correct: false },
			{
				text: "C) Todo tipo de drogas (las legales e ilegales).",
				correct: false,
			},
		],
	},
	{
		text: "La persona que conduce bajo los efectos de estupefacientes...",
		options: [
			{
				text: "A) Se pone en grave riesgo a sí mismo y a todos los que lo rodean.",
				correct: true,
			},
			{ text: "B) Sólo pone en riesgo su propia vida.", correct: false },
			{ text: "C) Al estar desinhibido, asume menos riesgos.", correct: false },
		],
	},
	{
		text: "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
		options: [
			{
				text: "A) Todos los medicamentos, de venta libre, que no necesitan receta.",
				correct: false,
			},
			{
				text: "B) Todos los medicamentos con efectos sedantes.",
				correct: true,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: false,
			},
		],
	},
	{
		text: "El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
		options: [
			{ text: "A) Siempre.", correct: false },
			{ text: "B) Nunca.", correct: false },
			{ text: "C) Depende del tipo de medicamento.", correct: true },
		],
	},
	{
		text: "Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad de conducir.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
		options: [
			{ text: "A) Sí.", correct: true },
			{
				text: "B) No, solamente afecta a la capacidad motora.",
				correct: false,
			},
			{
				text: "C) Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre.",
				correct: false,
			},
		],
	},
	{
		text: "Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
		options: [
			{ text: "A) Comienza a disminuir de forma inmediata.", correct: false },
			{
				text: "B) Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
				correct: true,
			},
			{
				text: "C) Se mantiene en el mismo valor durante 1 hora y luego comienza a descender.",
				correct: false,
			},
		],
	},
	{
		text: "Consumir cerveza influye en la conducción de un vehículo, haciendo que el conductor reduzca su capacidad de reacción y aumentando el tiempo necesario para responder ante un estímulo.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
		options: [
			{
				text: "A) Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo.",
				correct: false,
			},
			{
				text: "B) Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
		options: [
			{
				text: "A) Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
				correct: false,
			},
			{
				text: "B) No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones.",
				correct: false,
			},
			{
				text: "C) Sí, puede afectar la coordinación, la atención y el tiempo de reacción.",
				correct: true,
			},
		],
	},
	{
		text: "¿Es peligroso conducir con resaca?",
		options: [
			{
				text: "A) Sí, es peligroso porque tiene efectos en el organismo.",
				correct: true,
			},
			{
				text: "B) No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta.",
				correct: false,
			},
			{
				text: "C) No, ya que los efectos de la resaca no intervienen en la conducción.",
				correct: false,
			},
		],
	},
	{
		text: "Si un conductor de un automóvil particular obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_128_pregunta.jpg",
		options: [
			{
				text: "A) Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.",
				correct: true,
			},
			{
				text: "B) Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica.",
				correct: false,
			},
			{
				text: "C) Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo.",
				correct: false,
			},
		],
	},
	{
		text: "Si el conductor de un vehículo se niega a realizar este test, ¿constituye esto una falta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_129_pregunta.jpg",
		options: [
			{
				text: "A) Sólo si se ha participado de un siniestro vial.",
				correct: false,
			},
			{
				text: "B) No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
				correct: false,
			},
			{
				text: "C) Sí, la misma se toma como una presunción de alcoholemia positiva.",
				correct: true,
			},
		],
	},
	{
		text: "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
		options: [
			{
				text: "A) Sí, ya que se presume el estado de alcoholemia positiva.",
				correct: false,
			},
			{
				text: "B) Sí, deberá ordenar la remoción del vehículo.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
		options: [
			{ text: "A) Aproximadamente 8 horas.", correct: true },
			{ text: "B) Al menos 4 horas.", correct: false },
			{
				text: "C) Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso.",
				correct: false,
			},
		],
	},
	{
		text: "¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?",
		options: [
			{
				text: "A) Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
				correct: true,
			},
			{
				text: "B) No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
				correct: false,
			},
			{
				text: "C) No, el descanso no tiene nada que ver con el consumo de alcohol.",
				correct: false,
			},
		],
	},
	{
		text: "El cansancio puede verse inducido por ingerir:",
		options: [
			{ text: "A) Bebidas alcohólicas.", correct: false },
			{ text: "B) Comidas abundantes.", correct: false },
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
		options: [
			{ text: "A) La sensación de euforia.", correct: false },
			{
				text: "B) La visión borrosa y el aumento del número y duración de parpadeos.",
				correct: true,
			},
			{
				text: "C) No realizar movimientos en el asiento, ni cambios de postura.",
				correct: false,
			},
		],
	},
	{
		text: "¿Por qué es peligroso conducir cansado?",
		options: [
			{
				text: "A) Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
				correct: true,
			},
			{ text: "B) Porque se circula más rápido.", correct: false },
			{ text: "C) Porque el viaje dura más.", correct: false },
		],
	},
	{
		text: "¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?",
		options: [
			{
				text: "A) Reduce la capacidad de reacción y el estado de alerta.",
				correct: false,
			},
			{
				text: "B) Predispone a tomar malas decisiones, poniendo en riesgo la vida.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
		options: [
			{ text: "A) Escuche música a alto volúmen.", correct: false },
			{
				text: "B) Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
				correct: false,
			},
			{
				text: "C) Mantenga bien ventilado el interior del vehículo.",
				correct: true,
			},
		],
	},
	{
		text: "¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?",
		options: [
			{
				text: "A) Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia.",
				correct: false,
			},
			{
				text: "B) Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
				correct: true,
			},
			{
				text: "C) No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir.",
				correct: false,
			},
		],
	},
	{
		text: "Bajo los efectos del estrés, la conducción se vuelve:",
		options: [
			{ text: "A) Más temeraria.", correct: false },
			{ text: "B) Menos segura.", correct: false },
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro hasta que acciona el freno?",
		options: [
			{ text: "A) Aproximadamente 1 segundo.", correct: true },
			{ text: "B) Entre 2 y 3 segundos.", correct: false },
			{
				text: "C) Es inmediato, no transcurre tiempo entre estas acciones.",
				correct: false,
			},
		],
	},
	{
		text: "Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_146_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que no hay otros vehículos junto a él.",
				correct: false,
			},
			{
				text: "B) Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.",
				correct: true,
			},
			{
				text: "C) No, ya que el vehículo no está en movimiento.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál de estos sistemas de comunicación telefónica no es considerado riesgoso al momento de conducir un vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_146_pregunta.jpg",
		options: [
			{
				text: "A) Opción A. Ya que al utilizar un sólo auricular la audición no se encuentra afectada.",
				correct: false,
			},
			{
				text: "B) Opción B. Ya que al activar el manos libres las manos quedan disponibles para la conducción.",
				correct: false,
			},
			{ text: "C) Ambos sistemas son riesgosos.", correct: true },
		],
	},
	{
		text: "La siguiente acción del conductor, ¿es considerada un factor de riesgo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_147_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica.",
				correct: false,
			},
			{
				text: "B) Sí, sólo cuando circula a altas velocidades.",
				correct: false,
			},
			{
				text: "C) Sí, porque interfiere en su atención al contexto.",
				correct: true,
			},
		],
	},
	{
		text: "La siguiente acción del conductor es riesgosa porque:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_148_pregunta.jpg",
		options: [
			{
				text: "A) Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
				correct: false,
			},
			{
				text: "B) El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?",
		options: [
			{
				text: "A) Colocar balizas y detenerse en un lugar donde esté permitido.",
				correct: true,
			},
			{
				text: "B) Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
				correct: false,
			},
			{
				text: "C) Al tratarse de una llamada de urgencia, no importa donde se realice.",
				correct: false,
			},
		],
	},
	{
		text: "La presente conducta, ¿es riesgosa al momento de conducir?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_150_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque es considerado un factor de distracción.",
				correct: true,
			},
			{
				text: "B) Únicamente si se circula a altas velocidades.",
				correct: false,
			},
			{
				text: "C) Al contrario, ayuda a mantener la atención en la conducción.",
				correct: false,
			},
		],
	},
	{
		text: "La acción que se presenta en la imagen es considerada riesgosa para la conducción de un vehículo.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_151_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):",
		options: [
			{
				text: "A) Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente",
				correct: false,
			},
			{
				text: "B) Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.",
				correct: true,
			},
			{
				text: "C) Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente.",
				correct: false,
			},
		],
	},
	{
		text: "Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_153_pregunta.jpg",
		options: [
			{ text: "A) La opción A.", correct: false },
			{ text: "B) La opción B.", correct: false },
			{ text: "C) La opción C.", correct: true },
		],
	},
	{
		text: "Como conductor, ¿qué debe realizar frente a la siguiente situación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_154_pregunta.jpg",
		options: [
			{
				text: "A) Avanzar porque la luz verde del semáforo lo habilita.",
				correct: false,
			},
			{
				text: "B) Detenerse y esperar a la indicación del agente de tránsito para avanzar.",
				correct: true,
			},
			{
				text: "C) Avanzar sólo si no pasan vehículos en la intersección.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_155_pregunta.jpg",
		options: [
			{ text: "A) Que circule con precaución.", correct: false },
			{ text: "B) Que detenga el vehículo.", correct: true },
			{ text: "C) Que continúe avanzando.", correct: false },
		],
	},
	{
		text: "Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la presencia de personal policial.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "La señalización transitoria se encuentra como prioridad normativa sobre los semáforos, si es que modifica el régimen normal de uso de la vía.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_157_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.",
				correct: true,
			},
			{
				text: "B) Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación.",
				correct: false,
			},
			{
				text: "C) No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito.",
				correct: false,
			},
		],
	},
	{
		text: "Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_158_pregunta.jpg",
		options: [
			{
				text: "A) Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
				correct: true,
			},
			{
				text: "B) Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación.",
				correct: false,
			},
			{
				text: "C) Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_159_pregunta.jpg",
		options: [
			{
				text: "A) Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
				correct: false,
			},
			{
				text: "B) Nada, no son señales de circulación y es ilegal su colocación.",
				correct: false,
			},
			{
				text: "C) La prohibición de sobrepasar la línea imaginaria que las une.",
				correct: true,
			},
		],
	},
	{
		text: "Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento en la vía, o en zonas próximas a las mismas:",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Qué tipo de señal es la siguiente imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_162_pregunta.jpg",
		options: [
			{ text: "A) Reglamentaria.", correct: false },
			{ text: "B) Transitoria.", correct: true },
			{ text: "C) Informativa.", correct: false },
		],
	},
	{
		text: "Una indicación puede estar expresada con una señal vertical o con una demarcación horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_163_pregunta.jpg",
		options: [
			{
				text: "A) Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla.",
				correct: false,
			},
			{
				text: "B) Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
				correct: false,
			},
			{ text: "C) Efectuar el cruce con máxima precaución.", correct: true },
		],
	},
	{
		text: "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_164_pregunta.jpg",
		options: [
			{
				text: "A) Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
				correct: true,
			},
			{
				text: "B) Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
				correct: false,
			},
			{
				text: "C) Extremar precauciones al cruzar sin la necesidad de detenerme.",
				correct: false,
			},
		],
	},
	{
		text: "Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_165_pregunta.jpg",
		options: [
			{
				text: "A) Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde.",
				correct: false,
			},
			{
				text: "B) No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
				correct: true,
			},
			{
				text: "C) Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección.",
				correct: false,
			},
		],
	},
	{
		text: "Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?",
		options: [
			{
				text: "A) No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal.",
				correct: false,
			},
			{
				text: "B) Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
		options: [
			{ text: "A) Son las rotondas.", correct: false },
			{
				text: "B) Son los espacios reservados para estacionamiento exclusivo de motovehículos.",
				correct: false,
			},
			{
				text: "C) Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué indica esta demarcación amarilla en la calzada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_168_pregunta.jpg",
		options: [
			{
				text: "A) Que es un sector destinado a la detención y al estacionamiento de vehículos.",
				correct: false,
			},
			{
				text: "B) Que se debe circular lentamente por su sector central.",
				correct: false,
			},
			{ text: "C) Que no se debe circular sobre ella.", correct: true },
		],
	},
	{
		text: "¿Qué significa esta demarcación amarilla en la calzada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_170_pregunta.jpg",
		options: [
			{
				text: "A) Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
				correct: false,
			},
			{
				text: "B) Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
				correct: true,
			},
			{
				text: "C) Significa que sólo pueden circular vehículos particulares.",
				correct: false,
			},
		],
	},
	{
		text: "En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_171_pregunta.jpg",
		options: [
			{ text: "A) Que se pueden traspasar.", correct: true },
			{ text: "B) Que está prohibido traspasarlas.", correct: false },
			{ text: "C) Que es una zona de máximo peligro.", correct: false },
		],
	},
	{
		text: "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_174_pregunta.jpg",
		options: [
			{
				text: "A) Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
				correct: false,
			},
			{
				text: "B) Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia.",
				correct: false,
			},
			{
				text: "C) Que está prohibido estacionar o detenerse paralelo al cordón.",
				correct: true,
			},
		],
	},
	{
		text: "Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_175_pregunta.jpg",
		options: [
			{
				text: "A) Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.",
				correct: true,
			},
			{
				text: "B) Lugar reservado para ascenso y descenso de pasajeros.",
				correct: false,
			},
			{
				text: "C) Zona exclusiva para carga y descarga de mercaderías.",
				correct: false,
			},
		],
	},
	{
		text: "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_176_pregunta.jpg",
		options: [
			{
				text: "A) Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.",
				correct: true,
			},
			{
				text: "B) Que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros.",
				correct: false,
			},
			{
				text: "C) Que está prohibido estacionar o detenerse al costado de la vereda.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál es la importancia del color de las señales viales?",
		options: [
			{
				text: "A) El color es para llamar la atención al conductor de categoría particular.",
				correct: false,
			},
			{
				text: "B) El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
				correct: false,
			},
			{
				text: "C) El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuáles son las señales preventivas?",
		options: [
			{
				text: "A) Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
				correct: true,
			},
			{
				text: "B) Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
				correct: false,
			},
			{
				text: "C) Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indican las señales reglamentarias?",
		options: [
			{
				text: "A) Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
				correct: false,
			},
			{
				text: "B) Identifican, orientan y hacen referencia a servicios, lugares, etc.",
				correct: false,
			},
			{
				text: "C) Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuál de estas señales comunica “Prevención”?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_180_pregunta.jpg",
		options: [
			{ text: "A) La señal A", correct: false },
			{ text: "B) La señal B.", correct: true },
			{ text: "C) La señal C.", correct: false },
		],
	},
	{
		text: "¿De qué color es la cartelería de Permitido Estacionar?",
		options: [
			{ text: "A) Azul.", correct: true },
			{ text: "B) Blanco.", correct: false },
			{ text: "C) Rojo.", correct: false },
		],
	},
	{
		text: "¿Cuál de estas señales es Reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_182_pregunta.jpg",
		options: [
			{ text: "A) La señal A.", correct: false },
			{ text: "B) La señal B.", correct: true },
			{ text: "C) La señal C.", correct: false },
		],
	},
	{
		text: "¿Cuál de estas señales es una señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_183_pregunta.jpg",
		options: [
			{ text: "A) La señal A.", correct: false },
			{ text: "B) La señal B.", correct: false },
			{ text: "C) La señal C.", correct: true },
		],
	},
	{
		text: "¿Cuál de estas señales es Informativa?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_184_pregunta.jpg",
		options: [
			{ text: "A) La señal A.", correct: true },
			{ text: "B) La señal B.", correct: false },
			{ text: "C) La señal C.", correct: false },
		],
	},
	{
		text: "Indique qué tipo de señal es la que a continuación se muestra:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_185_pregunta.jpg",
		options: [
			{ text: "A) Preventiva.", correct: false },
			{ text: "B) Reglamentaria.", correct: false },
			{ text: "C) Informativa.", correct: true },
		],
	},
	{
		text: "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_186_pregunta.jpg",
		options: [
			{ text: "A) Figura A.", correct: false },
			{ text: "B) Figura B.", correct: false },
			{ text: "C) Figura C.", correct: true },
		],
	},
	{
		text: "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_187_pregunta.jpg",
		options: [
			{ text: "A) Figura A.", correct: false },
			{ text: "B) Figura B.", correct: true },
			{ text: "C) Figura C.", correct: false },
		],
	},
	{
		text: "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_188_pregunta.jpg",
		options: [
			{
				text: "A) Aumentar la velocidad para no ser un obstáculo a este vehículo.",
				correct: false,
			},
			{
				text: "B) Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
				correct: false,
			},
			{
				text: "C) Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
				correct: true,
			},
		],
	},
	{
		text: "El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se aproxima un vehículo en emergencia.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_189_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_190_pregunta.jpg",
		options: [
			{ text: "A) Ambos hacia su derecha.", correct: false },
			{
				text: "B) El único que debería apartarse es el auto 2 hacia su derecha.",
				correct: false,
			},
			{
				text: "C) El auto 1 hacia su izquierda y el 2 hacia su derecha.",
				correct: true,
			},
		],
	},
	{
		text: "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_191_pregunta.jpg",
		options: [
			{
				text: "A) El único que debería apartarse es el auto 2 hacia su derecha.",
				correct: false,
			},
			{ text: "B) Todos hacia su derecha.", correct: false },
			{
				text: "C) El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha.",
				correct: true,
			},
		],
	},
	{
		text: "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_192_pregunta.jpg",
		options: [
			{
				text: "A) Aumentar la velocidad para no ser un obstáculo a este vehículo.",
				correct: false,
			},
			{
				text: "B) Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
				correct: false,
			},
			{
				text: "C) Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
				correct: true,
			},
		],
	},
	{
		text: "Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_193_pregunta.jpg",
		options: [
			{
				text: "A) Cederle el paso, ya que está indicando que se encuentra en emergencia.",
				correct: true,
			},
			{
				text: "B) Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico.",
				correct: false,
			},
			{
				text: "C) Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo.",
				correct: false,
			},
		],
	},
	{
		text: "En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_194_pregunta.jpg",
		options: [
			{
				text: "A) El automóvil, porque circula por la mano derecha.",
				correct: false,
			},
			{
				text: "B) El ciclista, porque el automóvil pierde la prioridad al querer girar.",
				correct: true,
			},
			{
				text: "C) El ciclista, porque al circular por la ciclovía siempre tiene prioridad.",
				correct: false,
			},
		],
	},
	{
		text: "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_195_pregunta.jpg",
		options: [
			{
				text: "A) El vehículo A, ya que está circulando por la derecha",
				correct: false,
			},
			{
				text: "B) Los vehículos B, ya que son varios los que circulan por esa calle.",
				correct: false,
			},
			{
				text: "C) El vehículo A, ya que está saliendo del paso a nivel ferroviario.",
				correct: true,
			},
		],
	},
	{
		text: "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_196_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: true },
		],
	},
	{
		text: "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_197_pregunta.jpg",
		options: [
			{ text: "A) Los vehículos que circulan por la calle A.", correct: true },
			{ text: "B) Los vehículos que circulan por la calle B.", correct: false },
		],
	},
	{
		text: "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_198_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: true },
		],
	},
	{
		text: "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_199_pregunta.jpg",
		options: [
			{
				text: "A) El vehículo A porque circula por una avenida.",
				correct: true,
			},
			{
				text: "B) El vehículo B porque circula por la derecha.",
				correct: false,
			},
			{
				text: "C) Es indistinto ya que es una esquina sin semáforo.",
				correct: false,
			},
		],
	},
	{
		text: "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_200_pregunta.jpg",
		options: [
			{
				text: "A) Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
				correct: false,
			},
			{
				text: "B) Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
				correct: true,
			},
			{ text: "C) Avanzar.", correct: false },
		],
	},
	{
		text: "Estas señales son las únicas que indican que se pierde la prioridad de paso en una bocacalle sin semáforo.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_202_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_201_pregunta.jpg",
		options: [
			{
				text: "A) Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
				correct: false,
			},
			{
				text: "B) Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
				correct: true,
			},
			{ text: "C) Avanzar.", correct: false },
		],
	},
	{
		text: "De acuerdo con la Ley N°2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?",
		options: [
			{ text: "A) 1°Pasaje-2°Calle-3°Avenida.", correct: false },
			{ text: "B) 1°Avenida-2°Calle-3°Pasaje.", correct: true },
			{
				text: "C) Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad.",
				correct: false,
			},
		],
	},
	{
		text: "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?",
		options: [
			{ text: "A) Los vehículos de transporte de pasajero.", correct: false },
			{ text: "B) El vehículo de menor tamaño.", correct: false },
			{
				text: "C) El vehículo que se presenta por el lado derecho.",
				correct: true,
			},
		],
	},
	{
		text: "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_205_pregunta.jpg",
		options: [
			{ text: "A) Al automóvil.", correct: false },
			{ text: "B) Al colectivo.", correct: true },
			{ text: "C) Es indistinto.", correct: false },
		],
	},
	{
		text: "¿Quién tiene prioridad de paso en una rotonda?",
		options: [
			{ text: "A) El vehículo que circule por la derecha.", correct: false },
			{
				text: "B) El vehículo que pretende acceder a la rotonda.",
				correct: false,
			},
			{
				text: "C) El vehículo que se encuentra dentro de la calzada circular.",
				correct: true,
			},
		],
	},
	{
		text: "Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo señalado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_206_pregunta.jpg",
		options: [
			{
				text: "A) Debe ceder el paso al vehículo que circula en el sentido contrario.",
				correct: true,
			},
			{
				text: "B) Tiene prioridad de paso sobre el otro vehículo.",
				correct: false,
			},
			{
				text: "C) La normativa no establece prioridad de paso ante esta situación.",
				correct: false,
			},
		],
	},
	{
		text: "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_207_pregunta.jpg",
		options: [
			{
				text: "A) Al vehículo A, ya que circula por la derecha.",
				correct: false,
			},
			{
				text: "B) Al vehículo B, ya que circula por una avenida.",
				correct: true,
			},
			{ text: "C) Es indistinto.", correct: false },
		],
	},
	{
		text: "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_209_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: true },
			{ text: "C) Es indistinto.", correct: false },
		],
	},
	{
		text: "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?",
		options: [
			{ text: "A) El vehículo que desciende.", correct: false },
			{ text: "B) El vehículo que asciende.", correct: true },
			{ text: "C) No hay prioridad, cualquiera de ellos.", correct: false },
		],
	},
	{
		text: "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_211_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: true },
		],
	},
	{
		text: "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?",
		options: [
			{
				text: "A) Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
				correct: false,
			},
			{
				text: "B) Cuando el tránsito se encuentra interrumpido por cualquier razón.",
				correct: true,
			},
			{
				text: "C) Nunca, independientemente de cómo se encuentre el tránsito vehicular.",
				correct: false,
			},
		],
	},
	{
		text: "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_213_pregunta.jpg",
		options: [
			{
				text: "A) No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
				correct: true,
			},
			{ text: "B) Sí, porque se encuentra a la derecha.", correct: false },
			{ text: "C) Sí, porque señalizó su maniobra.", correct: false },
		],
	},
	{
		text: "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están detenidos en la arteria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_214_pregunta.jpg",
		options: [
			{
				text: "A) No. La prioridad es de los otros vehículos, independientemente si están detenidos o circulando.",
				correct: false,
			},
			{
				text: "B) Sí, porque se encuentra el tránsito detenido y deben cederle el paso.",
				correct: true,
			},
			{
				text: "C) No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en intersecciones no semaforizadas.",
				correct: false,
			},
		],
	},
	{
		text: "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_216_pregunta.jpg",
		options: [
			{
				text: "A) Sí, salvo que se acerque un vehículo en el sentido contrario.",
				correct: false,
			},
			{
				text: "B) No, ya que está prohibido por la demarcación horizontal.",
				correct: true,
			},
			{
				text: "C) Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_217_pregunta.jpg",
		options: [
			{ text: "A) Los vehículos A y B.", correct: false },
			{ text: "B) Los vehículos A y C.", correct: false },
			{ text: "C) Los vehículos B y C.", correct: true },
		],
	},
	{
		text: "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_218_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: true },
		],
	},
	{
		text: "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_219_pregunta.jpg",
		options: [
			{
				text: "A) El vehículo que circula por el carril que se pretende ocupar.",
				correct: true,
			},
			{
				text: "B) El vehículo que realiza el cambio de carril.",
				correct: false,
			},
			{ text: "C) El vehículo del carril más lento.", correct: false },
		],
	},
	{
		text: "Es obligatorio al finalizar un adelantamiento...",
		options: [
			{
				text: "A) Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
				correct: false,
			},
			{
				text: "B) Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.",
				correct: true,
			},
			{
				text: "C) Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál de estos carriles es el llamado “carril de sobrepaso”?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_221_pregunta.jpg",
		options: [
			{ text: "A) Cualquiera de ellos.", correct: false },
			{ text: "B) Sólo el carril señalado como A.", correct: true },
			{ text: "C) Sólo el carril señalado como F.", correct: false },
		],
	},
	{
		text: "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para sobrepasar a otro vehículo que transita más lento.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él una situación de peligro, ¿qué debe hacer el conductor del vehículo B?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_223_pregunta.jpg",
		options: [
			{
				text: "A) Aumentar la velocidad para que realice la maniobra detrás suyo.",
				correct: false,
			},
			{
				text: "B) Reducir la velocidad para facilitarle el retorno al carril.",
				correct: true,
			},
			{
				text: "C) Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra.",
				correct: false,
			},
		],
	},
	{
		text: "En este tramo de la vía no se puede realizar un sobrepaso",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_224_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
		options: [
			{ text: "A) Circular por la banquina.", correct: false },
			{
				text: "B) Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.",
				correct: true,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: false },
		],
	},
	{
		text: "¿Está permitido sobrepasar a otro vehículo en este lugar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_226_pregunta.jpg",
		options: [
			{
				text: "A) Sí, salvo que haya una señal que indique lo contrario.",
				correct: false,
			},
			{ text: "B) No, está prohibido por normativa.", correct: true },
			{
				text: "C) Sólo en el caso de que no perjudique la circulación de otros vehículos.",
				correct: false,
			},
		],
	},
	{
		text: "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?",
		options: [
			{ text: "A) El que lo intente primero.", correct: false },
			{ text: "B) El último de la fila.", correct: false },
			{
				text: "C) El que circula más próximo al vehículo que se desea sobrepasar.",
				correct: true,
			},
		],
	},
	{
		text: "Según la Ley N°2148, ¿qué significa el término sobrepaso?",
		options: [
			{
				text: "A) Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril.",
				correct: false,
			},
			{
				text: "B) Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.",
				correct: true,
			},
			{ text: "C) Exceder el límite de velocidad máxima.", correct: false },
		],
	},
	{
		text: "¿Qué peligro debe preverse al sobrepasar un colectivo detenido?",
		options: [
			{
				text: "A) Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.",
				correct: true,
			},
			{
				text: "B) Que los pasajeros bajen por la parte izquierda del colectivo detenido.",
				correct: false,
			},
			{
				text: "C) Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley.",
				correct: false,
			},
		],
	},
	{
		text: "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_230_pregunta.jpg",
		options: [
			{ text: "A) El vehículo A.", correct: false },
			{ text: "B) El vehículo B.", correct: false },
			{ text: "C) El vehículo C.", correct: true },
		],
	},
	{
		text: "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?",
		options: [
			{
				text: "A) Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.",
				correct: true,
			},
			{
				text: "B) Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores.",
				correct: false,
			},
			{
				text: "C) Tocarle bocina para indicarle que debe seguir.",
				correct: false,
			},
		],
	},
	{
		text: "¿Se puede traspasar la siguiente señal horizontal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_232_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.",
				correct: true,
			},
			{
				text: "B) Sólo cuando la vía tiene dos carriles por sentido de circulación.",
				correct: false,
			},
			{
				text: "C) No, porque indica prohibición de sobrepaso.",
				correct: false,
			},
		],
	},
	{
		text: "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
		options: [
			{
				text: "A) Donde la delimitación de carriles es de trazo continuo.",
				correct: false,
			},
			{
				text: "B) En curvas, encrucijadas, pasos a nivel o puentes.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
		options: [
			{ text: "A) Sí, cuando no haya señal que lo prohíba.", correct: false },
			{ text: "B) No, ya que está prohibido por normativa.", correct: true },
			{ text: "C) Sí, si hay suficiente visibilidad.", correct: false },
		],
	},
	{
		text: "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?",
		options: [
			{
				text: "A) Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
				correct: false,
			},
			{
				text: "B) Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_236_pregunta.jpg",
		options: [
			{
				text: "A) Sí, salvo que haya una señal que indique lo contrario.",
				correct: false,
			},
			{ text: "B) No, está prohibido por normativa.", correct: true },
			{
				text: "C) Sólo si no se perjudica la circulación de otros vehículos.",
				correct: false,
			},
		],
	},
	{
		text: "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_237_pregunta.jpg",
		options: [
			{
				text: "A) Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.",
				correct: true,
			},
			{
				text: "B) Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.",
				correct: false,
			},
			{ text: "C) No debe traspasarse ninguna de ellas.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta demarcación amarilla en la calzada?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_238_pregunta.jpg",
		options: [
			{ text: "A) Indica que se puede traspasar.", correct: false },
			{
				text: "B) Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
				correct: true,
			},
			{
				text: "C) Que es una zona que se puede circular sobre ella.",
				correct: false,
			},
		],
	},
	{
		text: "El carril de sobrepaso en una autopista sirve para...",
		options: [
			{
				text: "A) Circular por él cuando a la derecha existe otro carril disponible.",
				correct: false,
			},
			{
				text: "B) Circular por él siempre que se conduzca a la mayor velocidad permitida.",
				correct: false,
			},
			{ text: "C) Realizar maniobras de sobrepaso.", correct: true },
		],
	},
	{
		text: "¿A qué se denomina “carril de aceleración”?",
		options: [
			{
				text: "A) Es el carril de incorporación a una autopista.",
				correct: true,
			},
			{ text: "B) Es el carril derecho de una autopista.", correct: false },
			{ text: "C) Es el carril izquierdo de una autopista.", correct: false },
		],
	},
	{
		text: "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene semáforo.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_243_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo con la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?",
		options: [
			{
				text: "A) Si hay un semáforo de giro que me habilite (en verde).",
				correct: false,
			},
			{
				text: "B) Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "En un cruce sin semáforos, un vehículo que se encuentra circulando por una avenida doble mano, tiene permitido girar a su izquierda para tomar una calle de único sentido.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "De acuerdo con la Ley N° 2148, ¿está permitido realizar el siguiente giro?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_246_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita.",
				correct: false,
			},
			{
				text: "B) Sí, ya que es una intersección no semaforizada.",
				correct: true,
			},
			{
				text: "C) No, ya que es una vía de doble sentido de circulación.",
				correct: false,
			},
		],
	},
	{
		text: "De acuerdo con la Ley N° 2148, ¿está permitido realizar este giro?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_247_pregunta.jpg",
		options: [
			{
				text: "A)  No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.",
				correct: true,
			},
			{ text: "B) Sí, ya que el semáforo está en verde.", correct: false },
			{
				text: "C) No, ya que es una vía de doble sentido de circulación.",
				correct: false,
			},
		],
	},
	{
		text: "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_248_pregunta.jpg",
		options: [
			{
				text: "A) Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro.",
				correct: false,
			},
			{
				text: "B) Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son incorrectas.", correct: true },
		],
	},
	{
		text: "Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_249_pregunta.jpg",
		options: [
			{ text: "A) 60 km/h.", correct: false },
			{ text: "B) 40 km/h.", correct: true },
			{ text: "C) 70 km/h.", correct: false },
		],
	},
	{
		text: "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_249_pregunta.jpg",
		options: [
			{ text: "A) 30 km/h.", correct: false },
			{ text: "B) 40 km/h.", correct: false },
			{ text: "C) 20 km/h.", correct: true },
		],
	},
	{
		text: "Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?",
		options: [
			{ text: "A) 60 km/h.", correct: true },
			{ text: "B) 80 km/h.", correct: false },
			{ text: "C) 90 km/h.", correct: false },
		],
	},
	{
		text: "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla en el momento del sobrepaso.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_259_pregunta.jpg",
		options: [
			{ text: "A) 40 km/h.", correct: false },
			{ text: "B) 20 km/h.", correct: true },
			{ text: "C) 30 km/h.", correct: false },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_260_pregunta.jpg",
		options: [
			{ text: "A) 20 km/h.", correct: true },
			{ text: "B) 40 km/h.", correct: false },
			{ text: "C) 30 km/h.", correct: false },
		],
	},
	{
		text: "¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_284_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que el límite de la señal de tránsito rige independientemente del día y horario.",
				correct: true,
			},
			{
				text: "B) Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar.",
				correct: false,
			},
		],
	},
	{
		text: "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
		options: [
			{ text: "A) Poco antes de abandonar la misma.", correct: false },
			{
				text: "B) Cuando se haya entrado en el carril de desaceleración.",
				correct: true,
			},
			{
				text: "C) Cuando se ingresa a la nueva vía de circulación.",
				correct: false,
			},
		],
	},
	{
		text: "Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para automóviles particulares en semiautopistas?",
		options: [
			{ text: "A) 130 km/h.", correct: false },
			{ text: "B) 120 km/h.", correct: true },
			{ text: "C) 110 km/h.", correct: false },
		],
	},
	{
		text: "Según la Ley Nacional Nº24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?",
		options: [
			{ text: "A) 40 km/h.", correct: true },
			{ text: "B) 50 km/h.", correct: false },
			{ text: "C) 60 km/h.", correct: false },
		],
	},
	{
		text: "¿Qué se conoce como velocidad precautoria?",
		options: [
			{
				text: "A) A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.",
				correct: true,
			},
			{
				text: "B) La circulación a la velocidad mínima establecida para una vía.",
				correct: false,
			},
			{
				text: "C) La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas.",
				correct: false,
			},
		],
	},
	{
		text: "En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_267_pregunta.jpg",
		options: [
			{ text: "A) 20 kilómetros por hora.", correct: false },
			{ text: "B) 40 kilómetros por hora.", correct: false },
			{ text: "C) 30 kilómetros por hora.", correct: true },
		],
	},
	{
		text: "Según la Ley N°2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?",
		options: [
			{ text: "A) Es de 20 km/h para todas las arterias.", correct: false },
			{
				text: "B) No más de 30 km/h en calles y de 45 km/h en avenidas.",
				correct: false,
			},
			{
				text: "C) Es igual a la mínima establecida para el tipo de arteria correspondiente.",
				correct: true,
			},
		],
	},
	{
		text: "Según la Ley N°2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?",
		options: [
			{ text: "A) 20 kilómetros por hora.", correct: true },
			{ text: "B) 40 kilómetros por hora.", correct: false },
			{ text: "C) 30 kilómetros por hora.", correct: false },
		],
	},
	{
		text: "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_270_pregunta.jpg",
		options: [
			{ text: "A) 20 kilómetros por hora.", correct: false },
			{ text: "B) 40 kilómetros por hora.", correct: true },
			{ text: "C) 30 kilómetros por hora.", correct: false },
		],
	},
	{
		text: "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿A qué se denomina “distancia de seguridad”?",
		options: [
			{
				text: "A) A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.",
				correct: true,
			},
			{
				text: "B) A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro.",
				correct: false,
			},
			{
				text: "C) A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno.",
				correct: false,
			},
		],
	},
	{
		text: "¿A qué se denomina “tiempo de reacción”?",
		options: [
			{
				text: "A) Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
				correct: false,
			},
			{
				text: "B) Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
				correct: false,
			},
			{
				text: "C) Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión.",
				correct: true,
			},
		],
	},
	{
		text: "¿A qué se denomina “distancia de reacción”?",
		options: [
			{
				text: "A) A la distancia que recorre un vehículo hasta su detención.",
				correct: false,
			},
			{
				text: "B) A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar",
				correct: false,
			},
			{
				text: "C) A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué relación existe entre la velocidad y el campo visual del conductor?",
		options: [
			{ text: "A) A mayor velocidad, menor campo visual.", correct: true },
			{ text: "B) A menor velocidad, menor campo visual.", correct: false },
			{ text: "C) A mayor velocidad, mayor campo visual.", correct: false },
		],
	},
	{
		text: "Los excesos de velocidad...",
		options: [
			{
				text: "A) En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos.",
				correct: false,
			},
			{
				text: "B) Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
				correct: false,
			},
			{
				text: "C) Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación.",
				correct: true,
			},
		],
	},
	{
		text: "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de minimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de combustible en un vehículo.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Circular a mayor velocidad de la precautoria implica que aumenten las posibilidades de que un siniestro vial sea más grave.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?",
		options: [
			{ text: "A) La línea peatonal.", correct: false },
			{
				text: "B) La línea imaginaria de prolongación de ochava.",
				correct: true,
			},
			{ text: "C) La línea de edificación transversal.", correct: false },
		],
	},
	{
		text: "¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_280_pregunta.jpg",
		options: [
			{
				text: "A) Aumentar la velocidad gradualmente antes de ingresar en la curva.",
				correct: false,
			},
			{ text: "B) Desacelerar antes de ingresar a la curva.", correct: true },
			{
				text: "C) Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella.",
				correct: false,
			},
		],
	},
	{
		text: "Si ve esta señal mientras conduce, usted debe...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_281_pregunta.jpg",
		options: [
			{ text: "A) Reducir la velocidad del vehículo", correct: true },
			{ text: "B) Incrementar la velocidad del vehículo", correct: false },
			{
				text: "C) Dar vuelta a la izquierda y después a la derecha",
				correct: false,
			},
		],
	},
	{
		text: "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_282_pregunta.jpg",
		options: [
			{
				text: "A) Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
				correct: true,
			},
			{
				text: "B) Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
				correct: false,
			},
			{
				text: "C) Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas.",
				correct: false,
			},
		],
	},
	{
		text: "En el siguiente espacio, se encuentra permitido detenerse pero no estacionar.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_295_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_296_pregunta.jpg",
		options: [
			{
				text: "A) Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.",
				correct: true,
			},
			{
				text: "B) Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón.",
				correct: false,
			},
			{ text: "C) Dentro de la intersección.", correct: false },
		],
	},
	{
		text: "Según la Ley Nº24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_297_pregunta.jpg",
		options: [
			{ text: "A) 5 metros respecto de los rieles.", correct: true },
			{ text: "B) 2 metros respecto de los rieles.", correct: false },
			{ text: "C) No existe una distancia mínima.", correct: false },
		],
	},
	{
		text: "¿Se está habilitado a detener un vehículo en este lugar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_298_pregunta.jpg",
		options: [
			{
				text: "A) Sí, siempre y cuando no entorpezca la circulación.",
				correct: false,
			},
			{
				text: "B) No, está prohibido estacionar y detenerse por normativa.",
				correct: true,
			},
			{
				text: "C) Si, a menos que haya una señal que lo prohíba expresamente.",
				correct: false,
			},
		],
	},
	{
		text: "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_299_pregunta.jpg",
		options: [
			{ text: "A) Que el vehículo circula lentamente.", correct: false },
			{
				text: "B) Que el vehículo próximamente ingresará a un garage o se detendrá.",
				correct: true,
			},
			{
				text: "C) Que el vehículo realizará un giro en la próxima intersección.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica el uso de este tipo de luces?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_300_pregunta.jpg",
		options: [
			{
				text: "A) Cuando se utilizan por separado sirven para preanunciar maniobras.",
				correct: false,
			},
			{
				text: "B) Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra, utilizando las luces correctas.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_299_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Si el vehículo de la imagen se dispone a ingresar a un garaje ubicado a su derecha, está anticipando su maniobra utilizando las luces correctas.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_302_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
		options: [
			{
				text: "A) Con la luz de giro hacia el lado donde se irá a ingresar.",
				correct: false,
			},
			{
				text: "B) Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
				correct: false,
			},
			{ text: "C) Con las luces intermitentes (balizas).", correct: true },
		],
	},
	{
		text: "¿Son válidas este tipo de señas?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_306_pregunta.jpg",
		options: [
			{
				text: "A) Como acompañamiento al uso de balizas y/o en caso de emergencia.",
				correct: true,
			},
			{ text: "B) Nunca.", correct: false },
			{ text: "C) Sólo cuando se utilicen en calles.", correct: false },
		],
	},
	{
		text: "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...",
		options: [
			{ text: "A) 20 metros antes de realizar la maniobra.", correct: false },
			{ text: "B) 10 metros antes de realizar la maniobra.", correct: false },
			{ text: "C) 30 metros antes de realizar la maniobra.", correct: true },
		],
	},
	{
		text: "Para realizar correctamente un giro en una intersección se debe indicar...",
		options: [
			{ text: "A) Tocando bocina.", correct: false },
			{
				text: "B) Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
				correct: true,
			},
			{
				text: "C) Utilizando ambos giros, metros antes de llegar a la intersección.",
				correct: false,
			},
		],
	},
	{
		text: "Circular con la luz alta encendida está prohibido en zonas urbanas.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "El sistema de luces que posee un vehículo, además de iluminar, brinda información que permite la comunicación entre vehículos y también peatones.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_310_pregunta.jpg",
		options: [
			{ text: "A) Que está circulando en mí mismo sentido.", correct: true },
			{
				text: "B) Que está circulando en el sentido contrario al mío.",
				correct: false,
			},
			{
				text: "C) No indican sentido de circulación sino que está descompuesto.",
				correct: false,
			},
		],
	},
	{
		text: "¿Para qué sirven estas luces intermitentes?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_299_pregunta.jpg",
		options: [
			{
				text: "A) Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad.",
				correct: false,
			},
			{
				text: "B) Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.",
				correct: true,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: false },
		],
	},
	{
		text: "¿A qué se denomina “aquaplaning”?",
		options: [
			{
				text: "A) Cuando la cantidad de agua caída en una lluvia es abundante.",
				correct: false,
			},
			{
				text: "B) A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.",
				correct: true,
			},
			{
				text: "C) Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna.",
				correct: false,
			},
		],
	},
	{
		text: "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_316_pregunta.jpg",
		options: [
			{
				text: "A) Debería circular a la mitad de la velocidad máxima establecida por Ley.",
				correct: false,
			},
			{
				text: "B) Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.",
				correct: true,
			},
			{
				text: "C) Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_317_pregunta.jpg",
		options: [
			{ text: "A) Aquaplaning.", correct: true },
			{ text: "B) Off tracking.", correct: false },
		],
	},
	{
		text: "Cuando hay agua en el camino, debe reducir su velocidad para evitar...",
		options: [
			{ text: "A) Desgastar las llantas.", correct: false },
			{ text: "B) Sobrecalentar las llantas.", correct: false },
			{ text: "C) El aquaplaning.", correct: true },
		],
	},
	{
		text: "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
		options: [
			{
				text: "A) No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
				correct: false,
			},
			{
				text: "B) Sí, porque al mojarse pueden no funcionar eficazmente.",
				correct: true,
			},
			{
				text: "C) No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza.",
				correct: false,
			},
		],
	},
	{
		text: "Frente a esta condición climática, ¿se deben encender las luces bajas?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_320_pregunta.jpg",
		options: [
			{
				text: "A)  Sí, siempre que está disminuida la visibilidad.",
				correct: true,
			},
			{
				text: "B) No, porque las luces sólo deben utilizarse por la noche.",
				correct: false,
			},
			{ text: "C) Sí, pero sólo en rutas.", correct: false },
		],
	},
	{
		text: "Al conducir por un largo lapso de tiempo y en esta condición climática...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_320_pregunta.jpg",
		options: [
			{
				text: "A) Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
				correct: false,
			},
			{
				text: "B) Es necesario descansar con más frecuencia, para evitar la fatiga.",
				correct: true,
			},
			{
				text: "C) No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente.",
				correct: false,
			},
		],
	},
	{
		text: "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_320_pregunta.jpg",
		options: [
			{
				text: "A) No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
				correct: false,
			},
			{ text: "B) Sí, con lluvia la adherencia es menor.", correct: true },
			{
				text: "C) No. La distancia de seguridad debe ser siempre la misma.",
				correct: false,
			},
		],
	},
	{
		text: "Conducir de noche aumenta el riesgo de sufrir un incidente.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2 segundos en la distancia de seguridad?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_326_pregunta.jpg",
		options: [
			{ text: "A) A 4 segundos.", correct: true },
			{ text: "B) A 3 segundos.", correct: false },
			{ text: "C) A 5 segundos.", correct: false },
		],
	},
	{
		text: "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_327_pregunta.jpg",
		options: [
			{
				text: "A) Igual que cuando la calzada se encuentra seca.",
				correct: false,
			},
			{
				text: "B) Menor que cuando la calzada se encuentra seca.",
				correct: false,
			},
			{
				text: "C) Mayor que cuando la calzada se encuentra seca.",
				correct: true,
			},
		],
	},
	{
		text: "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_328_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
				correct: true,
			},
			{
				text: "B) No, porque este efecto se produce sólo por el uso de la luz alta.",
				correct: false,
			},
			{
				text: "C) No, porque este efecto se produce en rutas con poca iluminación.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál es el límite de velocidad máxima en esta situación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_329_pregunta.jpg",
		options: [
			{ text: "A) 60 km/h.", correct: true },
			{ text: "B) 80 km/h.", correct: false },
			{ text: "C) 40 km/h.", correct: false },
		],
	},
	{
		text: "Ante la siguiente situación, ¿qué es lo que se recomienda hacer?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_348_pregunta.jpg",
		options: [
			{
				text: "A) Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor.",
				correct: false,
			},
			{
				text: "B) Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehículos y utilizar las luces correspondientes del vehículo.",
				correct: true,
			},
			{
				text: "C) Detenerse en la banquina hasta que levante el banco de niebla.",
				correct: false,
			},
		],
	},
	{
		text: "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_330_pregunta.jpg",
		options: [
			{
				text: "A) Las luces altas, durante todo el recorrido mientras continúe la niebla.",
				correct: false,
			},
			{
				text: "B) Las luces bajas y las rompeniebla (en el caso de tenerlas).",
				correct: true,
			},
			{
				text: "C) Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas.",
				correct: false,
			},
		],
	},
	{
		text: "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_330_pregunta.jpg",
		options: [
			{
				text: "A) Sí, cuando el banco de niebla es muy denso.",
				correct: false,
			},
			{
				text: "B) Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
				correct: false,
			},
			{
				text: "C) No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina.",
				correct: true,
			},
		],
	},
	{
		text: "La niebla, como factor de riesgo, produce modificaciones en...",
		options: [
			{
				text: "A) El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.",
				correct: true,
			},
			{
				text: "B) El campo visual del conductor y la capacidad lumínica del vehículo.",
				correct: false,
			},
			{
				text: "C) Sólo afecta la capacidad lumínica del vehículo.",
				correct: false,
			},
		],
	},
	{
		text: "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión con una diferencia de velocidad no demasiado elevada.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Si ud. circula por la ruta y observa esta situación, debe...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_338_pregunta.jpg",
		options: [
			{
				text: "A) Aumentar la velocidad para sobrepasar al animal rápidamente.",
				correct: false,
			},
			{
				text: "B) Usar la bocina para ahuyentar al animal y mantener su velocidad.",
				correct: false,
			},
			{
				text: "C) Reducir la velocidad y si es necesario detenerse.",
				correct: true,
			},
		],
	},
	{
		text: "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
		options: [
			{ text: "A) Que el vehículo tiene un desperfecto.", correct: false },
			{
				text: "B) Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
				correct: true,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: false,
			},
		],
	},
	{
		text: "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
		options: [
			{
				text: "A) Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos.",
				correct: false,
			},
			{
				text: "B) Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.",
				correct: true,
			},
			{
				text: "C) Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera.",
				correct: false,
			},
		],
	},
	{
		text: "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar de conocer la normativa y la concientización gubernamental.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Qué vehículo puede realizar el acarreo de otro en esta vía?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_341_pregunta.jpg",
		options: [
			{
				text: "A) Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente.",
				correct: false,
			},
			{
				text: "B) Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo.",
				correct: false,
			},
			{ text: "C) Sólo los vehículos destinados a ese fin.", correct: true },
		],
	},
	{
		text: "En este tipo de vía, ¿está permitido remolcar con su automóvil particular a otro que se encuentra descompuesto?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_342_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado.",
				correct: false,
			},
			{
				text: "B) Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
				correct: false,
			},
			{
				text: "C) No, sólo pueden hacerlo los vehículos autorizados a tal fin.",
				correct: true,
			},
		],
	},
	{
		text: "¿A qué se denomina conducción preventiva?",
		options: [
			{
				text: "A) A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos.",
				correct: false,
			},
			{
				text: "B) A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.",
				correct: true,
			},
			{ text: "C) A realizar cursos viales cada seis meses.", correct: false },
		],
	},
	{
		text: "¿A qué se denomina conducción eficiente?",
		options: [
			{
				text: "A) A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.",
				correct: true,
			},
			{
				text: "B) A una conducción que logre llegar a destino en el menor tiempo posible.",
				correct: false,
			},
			{
				text: "C) A una conducción que mantenga durante todo el trayecto la misma velocidad.",
				correct: false,
			},
		],
	},
	{
		text: "De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?",
		options: [
			{ text: "A) La resistencia aerodinámica.", correct: false },
			{ text: "B) La velocidad.", correct: false },
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "Es importante realizar un correcto mantenimiento vehicular porque...",
		options: [
			{
				text: "A) Evita desperfectos del motor y ayuda a reducir el consumo de combustible.",
				correct: false,
			},
			{
				text: "B) Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "De acuerdo con la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_348_pregunta.jpg",
		options: [
			{ text: "A) Ubicarse cerca del surtidor.", correct: false },
			{ text: "B) Dejar el motor y las luces encendidas.", correct: true },
			{ text: "C) Sólo dejar el motor encendido.", correct: false },
		],
	},
	{
		text: "¿Para qué sirve esta varilla metálica?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_349_pregunta.jpg",
		options: [
			{ text: "A) Para comprobar la temperatura del aceite.", correct: false },
			{ text: "B) Para comprobar el nivel del aceite.", correct: true },
			{
				text: "C) Para comprobar la presión del aceite y del líquido de frenos.",
				correct: false,
			},
		],
	},
	{
		text: "¿Con qué se lubrica un motor?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_351_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: false },
			{ text: "B) Opción B.", correct: false },
			{ text: "C) Opción C.", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_454_pregunta.jpg",
		options: [
			{ text: "A) Senda peatonal.", correct: false },
			{ text: "B) Personas trabajando.", correct: true },
			{ text: "C) Cruce peatonal de máximo peligro.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_455_pregunta.jpg",
		options: [
			{
				text: "A) Prohibido estacionar por la existencia de un aeropuerto cercano.",
				correct: false,
			},
			{
				text: "B) Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.",
				correct: true,
			},
			{
				text: "C) Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano.",
				correct: false,
			},
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_456_pregunta.jpg",
		options: [
			{ text: "A) Proximidad de bosques.", correct: false },
			{ text: "B) Zonas de palmeras.", correct: false },
			{ text: "C) Vientos fuertes laterales.", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_457_pregunta.jpg",
		options: [
			{ text: "A) Cruce de jinetes.", correct: true },
			{ text: "B) Prohibición de circular con animales.", correct: false },
			{
				text: "C) Camino peligroso por presencia de animales sueltos.",
				correct: false,
			},
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_458_pregunta.jpg",
		options: [
			{ text: "A) Camino resbaladizo.", correct: false },
			{ text: "B) Camino sinuoso.", correct: true },
			{ text: "C) Camino cuesta arriba.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_459_pregunta.jpg",
		options: [
			{
				text: "A) Aproximación a un puente levadizo, rotatorio o flotante.",
				correct: true,
			},
			{
				text: "B) Presencia de un puente de menor ancho que el resto de la vía.",
				correct: false,
			},
			{ text: "C) Proximidad de un paso a nivel.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_460_pregunta.jpg",
		options: [
			{ text: "A) Inicio de doble mano.", correct: false },
			{ text: "B) Estrechamiento (en una sola mano).", correct: false },
			{ text: "C) Encrucijada (bifurcación).", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_462_pregunta.jpg",
		options: [
			{ text: "A) Túnel.", correct: true },
			{ text: "B) Puente angosto.", correct: false },
			{ text: "C) Altura mínima.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_463_pregunta.jpg",
		options: [
			{ text: "A) Encrucijada.", correct: false },
			{ text: "B) Cruce de caminos.", correct: false },
			{ text: "C) Incorporación de tránsito lateral.", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_465_pregunta.jpg",
		options: [
			{ text: "A) Rotonda.", correct: true },
			{ text: "B) Peligro extremo de rotonda.", correct: false },
			{ text: "C) Preferencia de avance.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal preventiva?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_466_pregunta.jpg",
		options: [
			{
				text: "A) Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.",
				correct: true,
			},
			{
				text: "B) Indica que circulamos por una zona selvática.",
				correct: false,
			},
			{
				text: "C) Indica que por la vía en la que se circula, la calzada presenta irregularidades.",
				correct: false,
			},
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_468_pregunta.jpg",
		options: [
			{ text: "A) Estrechamiento (en las dos manos).", correct: false },
			{ text: "B) Calzada dividida.", correct: true },
			{ text: "C) Inicio doble mano.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_469_pregunta.jpg",
		options: [
			{ text: "A) Estrechamiento (en una mano).", correct: false },
			{ text: "B) Calzada dividida.", correct: false },
			{ text: "C) Estrechamiento (en las dos manos).", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal vertical que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_470_pregunta.jpg",
		options: [
			{ text: "A) Cruce de peatones (Peligro máximo).", correct: true },
			{ text: "B) Peatones a la izquierda.", correct: false },
			{
				text: "C) Prohibición de circular. Zona exclusiva peatonal.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_471_pregunta.jpg",
		options: [
			{ text: "A) La señal A.", correct: true },
			{ text: "B) La señal B.", correct: false },
			{ text: "C) La señal C.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_472_pregunta.jpg",
		options: [
			{ text: "A) Cruce ferroviario.", correct: true },
			{ text: "B) Estación ferroviaria.", correct: false },
			{ text: "C) Circulación exclusiva (ferrocarril).", correct: false },
		],
	},
	{
		text: "Al visualizar esta señal de prevención, usted sabe que:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_473_pregunta.jpg",
		options: [
			{
				text: "A) Se advierte la aproximación de una curva con pendiente ascendente.",
				correct: false,
			},
			{ text: "B) Se aproxima una curva cerrada.", correct: true },
			{ text: "C) Se aproxima un camino sinuoso.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_474_pregunta.jpg",
		options: [
			{ text: "A) Cruce Ferroviario (Más de dos vías).", correct: true },
			{ text: "B) Estación Ferroviaria.", correct: false },
			{ text: "C) Atención a Ferrocarril.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_475_pregunta.jpg",
		options: [
			{ text: "A) Paneles de prevención.", correct: true },
			{ text: "B) Prohibición de circular.", correct: false },
			{ text: "C) Reducción de velocidad.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_476_pregunta.jpg",
		options: [
			{ text: "A) Panel de Prevención (Objeto Rígido).", correct: true },
			{ text: "B) Calzada Reducida.", correct: false },
			{ text: "C) Contramano.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_477_pregunta.jpg",
		options: [
			{ text: "A) Cruce Ferroviario (por la derecha).", correct: false },
			{ text: "B) Prohibición de Girar.", correct: false },
			{ text: "C) Panel de Prevención (Curva).", correct: true },
		],
	},
	{
		text: "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_478_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_479_pregunta.jpg",
		options: [
			{ text: "A) Se tiene la prioridad de avance.", correct: false },
			{ text: "B) Se pierde la prioridad de avance.", correct: true },
			{
				text: "C) Esta señal no es indicativa de prioridad de avance.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué significa esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_480_pregunta.jpg",
		options: [
			{
				text: "A) Indica la prohibición de estacionamiento en el frente de entidades bancarias.",
				correct: false,
			},
			{
				text: "B) Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.",
				correct: true,
			},
			{
				text: "C) Indica la prohibición de circulación de vehículos sin permiso de ingreso.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_481_pregunta.jpg",
		options: [
			{
				text: "A) Que existe la opción de doblar hacia la derecha.",
				correct: false,
			},
			{
				text: "B) Que hay un giro obligatorio hacia la derecha.",
				correct: true,
			},
			{
				text: "C) Que se aproxima una curva peligrosa con inclinación hacia la derecha.",
				correct: false,
			},
		],
	},
	{
		text: "La señal representada precede a una intersección con la OBLIGACIÓN de girar a la derecha.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_481_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_483_pregunta.jpg",
		options: [
			{ text: "A) No avanzar.", correct: false },
			{ text: "B) Comienzo de doble mano.", correct: false },
			{ text: "C) Comienzo de sentido único.", correct: true },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_484_pregunta.jpg",
		options: [
			{ text: "A) Sobrepasos por la derecha.", correct: false },
			{ text: "B) Circulación exclusiva (camión).", correct: false },
			{ text: "C) Tránsito pesado a la derecha.", correct: true },
		],
	},
	{
		text: "Esta señal vertical reglamentaria indica...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_485_pregunta.jpg",
		options: [
			{
				text: "A) Que es un carril preferencial para ciclistas.",
				correct: false,
			},
			{
				text: "B) Que es un carril de uso exclusivo para ciclistas.",
				correct: true,
			},
			{
				text: "C) Que los ciclistas no pueden circular por este carril.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_486_pregunta.jpg",
		options: [
			{
				text: "A) Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal.",
				correct: false,
			},
			{
				text: "B) Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.",
				correct: true,
			},
			{ text: "C) Que comienza una ciclovía.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_487_pregunta.jpg",
		options: [
			{
				text: "A) Que el vehículo no puede continuar su marcha sin detenerse.",
				correct: true,
			},
			{ text: "B) Presencia de reductor de velocidad.", correct: false },
			{
				text: "C) Comienzo de sentido opuesto de circulación.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_488_pregunta.jpg",
		options: [
			{ text: "A) Inicio de calle de convivencia.", correct: false },
			{
				text: "B) Los peatones no deben circular por esa zona.",
				correct: false,
			},
			{
				text: "C) Los peatones deben circular obligatoriamente por la derecha.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué indica esta señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_489_pregunta.jpg",
		options: [
			{
				text: "A) Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores.",
				correct: false,
			},
			{
				text: "B) Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.",
				correct: true,
			},
			{
				text: "C) Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta señal reglamentaria?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_490_pregunta.jpg",
		options: [
			{
				text: "A) Que no se puede circular a una velocidad inferior a 35 km/h en esa vía.",
				correct: true,
			},
			{
				text: "B) Que la velocidad máxima es de 35 km/h en esa vía.",
				correct: false,
			},
			{
				text: "C) Que la velocidad precautoria es de 35 km/h en esa vía.",
				correct: false,
			},
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_491_pregunta.jpg",
		options: [
			{ text: "A) Prohibición de Girar a la Derecha.", correct: false },
			{ text: "B) Prohibición de Cambiar de Carril.", correct: true },
			{ text: "C) Prohibición de Adelantar.", correct: false },
		],
	},
	{
		text: "La señal que se muestra indica un camino sin salida:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_492_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Indique qué representa la siguiente señal:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_493_pregunta.jpg",
		options: [
			{ text: "A) Dirección obligatoria en ambos sentidos.", correct: false },
			{ text: "B) Dirección permitida en ambos sentidos.", correct: true },
			{ text: "C) Giros permitidos.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_494_pregunta.jpg",
		options: [
			{
				text: "A) Desvío por cambio de sentido de circulación.",
				correct: true,
			},
			{ text: "B) Calzada dividida.", correct: false },
			{ text: "C) Cruce Peligroso.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_495_pregunta.jpg",
		options: [
			{ text: "A) Comienzo de autopista.", correct: true },
			{ text: "B) Comienzo de ruta.", correct: false },
			{ text: "C) Comienzo de semiautopista.", correct: false },
		],
	},
	{
		text: "Determine qué indica la señal que a continuación se presenta:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_496_pregunta.jpg",
		options: [
			{ text: "A) Fin de semiautopista.", correct: false },
			{ text: "B) Fin de ruta.", correct: false },
			{ text: "C) Fin de autopista.", correct: true },
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_497_pregunta.jpg",
		options: [
			{ text: "A) Permitido girar hacia la izquierda.", correct: false },
			{ text: "B) Dirección obligatoria hacia la izquierda.", correct: false },
			{ text: "C) Dirección permitida hacia la izquierda.", correct: true },
		],
	},
	{
		text: "Esta señal advierte que en el lugar ocurrió un siniestro vial que produjo una víctima fatal.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_498_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal vertical de información?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_499_pregunta.jpg",
		options: [
			{ text: "A) Una encrucijada peligrosa.", correct: false },
			{
				text: "B) La existencia de un puesto sanitario o de socorro.",
				correct: true,
			},
			{ text: "C) La existencia de un templo religioso.", correct: false },
		],
	},
	{
		text: "¿A qué punto de referencia hace alusión la señal que a continuación se presenta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_500_pregunta.jpg",
		options: [
			{ text: "A) Servicio mecánico.", correct: false },
			{ text: "B) Gomería.", correct: true },
			{ text: "C) Estación de servicio.", correct: false },
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_501_pregunta.jpg",
		options: [
			{
				text: "A) Existencia de un teatro, en las inmediaciones.",
				correct: true,
			},
			{
				text: "B) Prohibición de estacionar en la puerta de un teatro.",
				correct: false,
			},
			{
				text: "C) Prohibición de detenerse en la puerta de un teatro.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué significa esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_502_pregunta.jpg",
		options: [
			{
				text: "A) Prohibición de estacionar en la entrada de terminal de ómnibus.",
				correct: false,
			},
			{
				text: "B) Existencia de terminal de ómnibus, en las inmediaciones.",
				correct: true,
			},
			{
				text: "C) Prohibición de detenerse en la entrada de terminal de ómnibus.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_503_pregunta.jpg",
		options: [
			{
				text: "A) Prohibición de detenerse en las inmediaciones a la plaza.",
				correct: false,
			},
			{
				text: "B) Prohibición de estacionar en las inmediaciones a la plaza.",
				correct: false,
			},
			{
				text: "C) Existencia de una plaza, en las inmediaciones.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué indica esta señal?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_504_pregunta.jpg",
		options: [
			{
				text: "A) Se encuentra permitido detenerse en esa vía.",
				correct: false,
			},
			{
				text: "B) Existencia de un estacionamiento vehicular, en las inmediaciones.",
				correct: true,
			},
			{
				text: "C) Se encuentra permitido estacionar en esa vía.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál de las tres señales indica que la ruta es provincial?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_505_pregunta.jpg",
		options: [
			{ text: "A) La señal A.", correct: false },
			{ text: "B) La señal B.", correct: false },
			{ text: "C) La señal C.", correct: true },
		],
	},
	{
		text: "Indique qué significa esta señal:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_506_pregunta.jpg",
		options: [
			{ text: "A) Ruta Nacional N°5.", correct: false },
			{ text: "B) Ruta Provincial N°5.", correct: true },
			{ text: "C) Ruta Panamericana N°5.", correct: false },
		],
	},
	{
		text: "Indique qué significa esta señal:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_507_pregunta.jpg",
		options: [
			{ text: "A) Ruta Nacional N°3.", correct: true },
			{ text: "B) Ruta Provincial N°3.", correct: false },
			{ text: "C) Ruta Panamericana N°3.", correct: false },
		],
	},
	{
		text: "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que se produzcan puntos ciegos cuando observe por los mismos.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Cómo se pueden reducir los puntos ciegos al conducir un vehículo?",
		options: [
			{
				text: "A)  Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea necesario.",
				correct: false,
			},
			{
				text: "B) Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son correctas.", correct: true },
		],
	},
	{
		text: "¿A qué se llama “Punto Ciego”?",
		options: [
			{
				text: "A) Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
				correct: true,
			},
			{
				text: "B) Sólo al área de visión que no es cubierta por los espejos retrovisores.",
				correct: false,
			},
			{
				text: "C) Al punto imaginario ubicado en el horizonte de una ruta.",
				correct: false,
			},
		],
	},
	{
		text: "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?",
		options: [
			{ text: "A) Antes de iniciar la marcha.", correct: true },
			{
				text: "B) Durante la conducción, para poder hacer una prueba real.",
				correct: false,
			},
			{
				text: "C) Con el vehículo inmovilizado y el conductor fuera del mismo.",
				correct: false,
			},
		],
	},
	{
		text: "Indique cuál de estas imágenes muestra la manera correcta de colocar el espejo retrovisor:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_370_pregunta.jpg",
		options: [
			{ text: "A) Imagen A.", correct: true },
			{ text: "B) Imagen B.", correct: false },
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: false,
			},
		],
	},
	{
		text: "Todos los cristales de un vehículo deben garantizar visibilidad...",
		options: [
			{
				text: "A) Solamente de adentro del automóvil hacia afuera.",
				correct: false,
			},
			{
				text: "B) Desde adentro hacia fuera y de afuera hacia adentro del vehículo.",
				correct: true,
			},
			{
				text: "C) El único cristal que debe garantizar plena y total visibilidad es el parabrisas.",
				correct: false,
			},
		],
	},
	{
		text: "En cuanto al grado o tono de color que pueden tener los cristales de un automóvil, ¿qué establece la ley 2148, con respecto a su control en la vía pública?",
		options: [
			{
				text: "A) Para medir el grado de tonalidad debe efectuarse una prueba colorimétrica mediante un dispositivo portátil reglamentado debidamente.",
				correct: false,
			},
			{
				text: "B) Se deben distinguir los ocupantes del vehículo a corta distancia.",
				correct: true,
			},
			{
				text: "C) Se debería poder observar las facciones del conductor a una distancia mínima de 15 metros.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué se entiende por habitáculo?",
		options: [
			{
				text: "A) Al espacio a ser ocupado por el conductor y los pasajeros.",
				correct: true,
			},
			{
				text: "B) Al lugar en el cual se transporta el equipaje (Baúl).",
				correct: false,
			},
			{ text: "C) Comprende a todo el vehículo en general.", correct: false },
		],
	},
	{
		text: "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
		options: [
			{ text: "A) Fríos.", correct: true },
			{ text: "B) Calientes.", correct: false },
			{
				text: "C) Es indistinto, al ser de caucho se mantienen aislados de la temperatura.",
				correct: false,
			},
		],
	},
	{
		text: "¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_375_pregunta.jpg",
		options: [
			{ text: "A) 1,6 mm.", correct: true },
			{ text: "B) 2 mm.", correct: false },
			{ text: "C) 3 mm.", correct: false },
		],
	},
	{
		text: "¿Cuál es la correcta presión de los neumáticos de un automóvil particular?",
		options: [
			{ text: "A) 28 lbs.", correct: false },
			{
				text: "B) La que indique el manual del usuario de ese automóvil.",
				correct: true,
			},
			{ text: "C) 30 lbs.", correct: false },
		],
	},
	{
		text: "Si al circular se presenta la siguiente situación, ¿cuál es la acción que se recomienda realizar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_377_pregunta.jpg",
		options: [
			{ text: "A) Frenar inmediatamente.", correct: false },
			{ text: "B) Desacelerar rápidamente y frenar.", correct: false },
			{
				text: "C) Desacelerar lentamente y sujetar el volante.",
				correct: true,
			},
		],
	},
	{
		text: "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?",
		options: [
			{
				text: "A) No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción.",
				correct: false,
			},
			{
				text: "B) Sí, puede afectar al correcto control del vehículo.",
				correct: true,
			},
			{
				text: "C) No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada.",
				correct: false,
			},
		],
	},
	{
		text: "Según las Leyes N° 2.148 y 24.449, ¿qué ítem enumera los elementos de seguridad obligatorios que se deben llevar en un vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_379_pregunta.jpg",
		options: [
			{ text: "A) Los elementos A, B y D.", correct: false },
			{ text: "B) Los elementos B, C y D.", correct: true },
			{ text: "C) Los elementos A, D y E.", correct: false },
		],
	},
	{
		text: "El siguiente elemento de seguridad, está correctamente ubicado.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_380_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "El siguiente elemento de seguridad, está correctamente ubicado.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_381_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿En qué ocasiones se permite el uso de la bocina?",
		options: [
			{
				text: "A) Sólo para advertir una situación potencialmente de peligro.",
				correct: true,
			},
			{ text: "B) Sólo para advertir de un sobrepaso.", correct: false },
			{
				text: "C) Ambas respuestas, la A y la B, son incorrectas.",
				correct: false,
			},
		],
	},
	{
		text: "Los objetos sueltos como lentes, celular, llaves o similares resultan muy peligrosos en caso de incidentes o maniobras bruscas, porque pueden ocasionar una lesión grave producto de la energía cinética que poseen.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Al transportar cualquier elemento, éste debe ubicarse de modo que no perturbe la visibilidad, afecte peligrosamente las condiciones aerodinámicas del vehículo, oculte luces o sobresalga de los límites permitidos.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿En qué parte del vehículo es conveniente poner el equipaje?",
		options: [
			{
				text: "A) Lo más pesado en el fondo del baúl, cerca del centro del auto. Eso ayuda a la estabilidad direccional y al comportamiento en las curvas.",
				correct: true,
			},
			{
				text: "B) Lo más pesado en el techo del vehículo, sujeto con sogas. Eso ayuda al centro de gravedad.",
				correct: false,
			},
			{
				text: "C) Lo más pesado en los asientos traseros (si es que se viaja sin ocupantes en esa zona). Eso ayuda a la estabilidad direccional.",
				correct: false,
			},
		],
	},
	{
		text: "Según la Ley N° 2148, ¿es obligatorio llevar un chaleco de material reflectivo?",
		options: [
			{
				text: "A) No es obligatorio pero es recomendable llevarlo por sí se necesita utilizarlo frente a algún desperfecto mecánico.",
				correct: false,
			},
			{
				text: "B) Sí, es obligatorio y puede ser llevado en cualquier parte del vehículo.",
				correct: false,
			},
			{
				text: "C) Sí, es obligatorio y debe ser llevado dentro del habitáculo para poder utilizarlo en caso de necesitar descender a la calzada, frente a alguna causa de fuerza mayor.",
				correct: true,
			},
		],
	},
	{
		text: "¿Quién es el responsable frente a la autoridad de control, si uno de los pasajeros del automóvil no lleva puesto el cinturón de seguridad?",
		options: [
			{ text: "A) El tomador del seguro.", correct: false },
			{ text: "B) El pasajero, si es mayor de edad.", correct: false },
			{ text: "C) El conductor.", correct: true },
		],
	},
	{
		text: "Este elemento de seguridad pasiva sirve para reducir el daño producido a los ocupantes de un vehículo al momento de un siniestro.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_388_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Este elemento de seguridad...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_388_pregunta.jpg",
		options: [
			{
				text: "A) Permite prescindir del uso del cinturón de seguridad.",
				correct: false,
			},
			{
				text: "B) Complementa el uso del cinturón de seguridad.",
				correct: true,
			},
			{
				text: "C) Es incompatible con el uso del cinturón de seguridad.",
				correct: false,
			},
		],
	},
	{
		text: "Durante un siniestro, si el conductor del vehículo no lleva puesto el cinturón de seguridad, el airbag...",
		options: [
			{
				text: "A) Le salvará la vida ya que puede sustituir al cinturón de seguridad.",
				correct: false,
			},
			{
				text: "B) Evitará que sufra lesiones, siempre y cuando el siniestro se produzca a menos de 80 km/h.",
				correct: false,
			},
			{ text: "C) Puede provocar lesiones graves.", correct: true },
		],
	},
	{
		text: "Según la Ley Nº 2148, ¿es correcto que un niño de 11 años utilice un Sistema de Retención Infantil, en este asiento central?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_391_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que por su edad debe utilizarlo y las características del cinturón de seguridad (3 puntos) permite ajustarlo correctamente.",
				correct: true,
			},
			{
				text: "B) No, sólo puede utilizar el sistema de Retención Infantil en asientos laterales.",
				correct: false,
			},
			{
				text: "C) Es indistinto, ya que al tener más de 10 años no es obligatorio que utilice el Sistema de Retención Infantil.",
				correct: false,
			},
		],
	},
	{
		text: "Según Ley N° 2148, ¿cuál es la edad mínima permitida para viajar en el asiento delantero de acompañante en un auto?",
		options: [
			{ text: "A) 10 años.", correct: false },
			{ text: "B) 11 años.", correct: false },
			{ text: "C) 12 años.", correct: true },
		],
	},
	{
		text: "¿Es correcta la colocación del dispositivo de retención infantil en este vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_393_pregunta.jpg",
		options: [
			{ text: "A) Sí, salvo en rutas nacionales.", correct: false },
			{
				text: "B) Sí, siempre y cuando esté debidamente ajustado.",
				correct: false,
			},
			{
				text: "C) No, ya que estos dispositivos deben ir colocados en los asientos traseros.",
				correct: true,
			},
		],
	},
	{
		text: "En la siguiente imagen, ¿es correcta la colocación del dispositivo de retención infantil para un niño de 7 años?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_394_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que se encuentra bien ajustado y en el asiento trasero.",
				correct: false,
			},
			{
				text: "B) No, ya que la orientación “a contra marcha” de los SRI es sólo para los grupos 0 y 0+ y 1 de SRI según indique su fabricante y este niño supera la edad para esos grupos.",
				correct: true,
			},
			{
				text: "C) Sí, ya que la orientación “a contra marcha” reduce el efecto “latigazo” en caso de un siniestro.",
				correct: false,
			},
		],
	},
	{
		text: "¿Es correcta la manera en que utiliza el Sistema de Retención Infantil (SRI) esta niña?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_395_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que se encuentra sentada en un SRI, en el asiento trasero.",
				correct: false,
			},
			{
				text: "B) No, ya que la niña debería ubicarse “a contra marcha” para reducir el efecto “latigazo”.",
				correct: false,
			},
			{
				text: "C) No, ya que la niña no utiliza el cinturón de seguridad del SRI.",
				correct: true,
			},
		],
	},
	{
		text: "El apoyacabeza está correctamente ubicado en función del conductor.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_396_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Es obligatoria la utilización de este elemento en todos los asientos del automóvil?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_397_pregunta.jpg",
		options: [
			{
				text: "A) Sí. Lo establece la normativa para evitar lesiones graves en la zona cervical.",
				correct: true,
			},
			{
				text: "B) No en todos, para los asientos traseros no cumplen ninguna función.",
				correct: false,
			},
			{
				text: "C) No, ya que no forma parte de la seguridad activa ni pasiva de los vehículos.",
				correct: false,
			},
		],
	},
	{
		text: "Frente a un siniestro, ¿qué puede evitar este elemento si está correctamente ubicado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_398_pregunta.jpg",
		options: [
			{
				text: "A) Nada en especial, dado que sólo es un elemento de confort.",
				correct: false,
			},
			{ text: "B) Lesiones en la zona cervical.", correct: true },
			{ text: "C) Lesiones en el tórax.", correct: false },
		],
	},
	{
		text: "¿Todos los ocupantes del vehículo viajan de manera correcta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_399_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo al conductor.",
				correct: false,
			},
			{
				text: "B) Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo a las personas que se trasladen en los asientos delanteros.",
				correct: false,
			},
			{
				text: "C) No, porque la obligación del uso del cinturón de seguridad es para todas las personas transportadas.",
				correct: true,
			},
		],
	},
	{
		text: "Luego de un largo viaje en ruta, realizó una parada y le faltan muy pocos kilómetros para llegar a destino, ¿es necesario que todos los ocupantes vuelvan a ponerse el cinturón de seguridad?",
		options: [
			{
				text: "A) No, sólo es obligatorio para los que se ubiquen en los asientos delanteros.",
				correct: false,
			},
			{ text: "B) No, porque se está por llegar a destino.", correct: false },
			{
				text: "C) Sí, porque su uso es obligatorio para todos los ocupantes.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuál de estas imágenes muestra el uso adecuado del cinturón de seguridad durante el embarazo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_401_pregunta.jpg",
		options: [
			{ text: "A) Imagen A.", correct: false },
			{ text: "B) Imagen B.", correct: true },
		],
	},
	{
		text: "Según Ley N° 2148, ¿en qué plazas deben viajar los mayores de 12 años y con altura igual o superior a 1.50 mts.?",
		options: [
			{
				text: "A) En cualquier asiento pero siempre con el cinturón de seguridad debidamente sujeto.",
				correct: true,
			},
			{
				text: "B) Sólo en las plazas traseras con cinturón de seguridad debidamente sujeto.",
				correct: false,
			},
			{
				text: "C) Sólo en dispositivo de retención infantil correspondiente a peso y talla, debidamente homologado.",
				correct: false,
			},
		],
	},
	{
		text: "¿Esta persona tiene el cinturón correctamente colocado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_403_pregunta.jpg",
		options: [
			{
				text: "A) No, porque pasa por el abdomen y debería hacerlo por los huesos de la cadera.",
				correct: true,
			},
			{
				text: "B) No, porque pasa por el abdomen y debería hacerlo por los muslos.",
				correct: false,
			},
			{
				text: "C) Sí, porque pasa por la clavícula y el abdomen.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuál es la correcta posición del uso de la banda inferior del cinturón de seguridad de tres puntas?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_404_pregunta.jpg",
		options: [
			{ text: "A) Opción A.", correct: true },
			{ text: "B) Opción B.", correct: false },
			{ text: "C) Ambas opciones, A y B, son correctas.", correct: false },
		],
	},
	{
		text: "Los ocupantes de este vehículo ¿viajan de manera segura?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_405_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que las personas se encuentran con cinturón de seguridad.",
				correct: false,
			},
			{
				text: "B) No, ya que por normativa no está permitido trasladar mascotas en un automóvil particular.",
				correct: false,
			},
			{
				text: "C) No, ya que las mascotas deben ser transportadas en los asientos traseros sujetos con arnés o sistema de retención correspondiente.",
				correct: true,
			},
		],
	},
	{
		text: "La circulación de un vehículo de dos ruedas suele ser más riesgosa porque...",
		options: [
			{
				text: "A) Puede circular a más velocidad que los automóviles.",
				correct: false,
			},
			{
				text: "B) La posición del conductor es más elevada que en un automóvil.",
				correct: false,
			},
			{ text: "C) Por su tamaño, es menos visible.", correct: true },
		],
	},
	{
		text: "Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?",
		options: [
			{
				text: "A) No, porque está prohibido circular de manera permanente o transitoria por dicho carril.",
				correct: true,
			},
			{
				text: "B) Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
				correct: false,
			},
			{
				text: "C) Sí, porque sólo se permite su utilización para realizar alguna maniobra.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué debe hacer usted si su vehículo queda inmovilizado en un túnel?",
		options: [
			{
				text: "A) Dejar el vehículo cerrado y salir del túnel cuanto antes.",
				correct: false,
			},
			{
				text: "B) Apagar todas las luces si el túnel está iluminado y solicitar auxilio a través del teléfono móvil.",
				correct: false,
			},
			{
				text: "C) Apagar el motor, colocar las balizas portátiles, mantener encendidas las luces de posición e intermitentes y llamar al número de asistencia.",
				correct: true,
			},
		],
	},
	{
		text: "En caso de participar de un siniestro vial en una avenida, es recomendable señalizar la zona para que no se produzcan más incidentes viales.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "En caso de un siniestro vial en este tipo de calle, ¿cómo es recomendable señalizar la zona del vehículo inmovilizado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_78_pregunta.jpg",
		options: [
			{
				text: "A) Se deben encender las luces bajas y, en lo posible, colocar balizas portátiles delante y detrás del mismo.",
				correct: false,
			},
			{
				text: "B) Se deben encender las luces altas y, en lo posible, colocar balizas portátiles detrás del mismo.",
				correct: false,
			},
			{
				text: "C) Se deben encender las balizas y, en lo posible, colocar balizas portátiles del lado de donde provienen los vehículos a una distancia adecuada del vehículo.",
				correct: true,
			},
		],
	},
	{
		text: "En el caso de que un vehículo quede inmovilizado por un siniestro vial o desperfecto mecánico en los carriles marcados de esta vía, ¿qué es recomendable hacer?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_79_pregunta.jpg",
		options: [
			{
				text: "A) Colocar las balizas portátiles, ponerse a resguardo detrás de una defensa si las hubiere y llamar al número de emergencia de la Autopista.",
				correct: false,
			},
			{
				text: "B) Descender del vehículo usando un chaleco reflectante para hacer señas al resto de los vehículos y llamar al número de emergencia de la Autopista.",
				correct: false,
			},
			{
				text: "C) Permanecer dentro del vehículo con el cinturón de seguridad abrochado, encender las balizas y llamar al número de emergencia de la Autopista.",
				correct: true,
			},
		],
	},
	{
		text: "En caso de un siniestro vial o desperfecto mecánico, ¿qué es recomendable hacer cuando el vehículo queda inmovilizado en el sector señalado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_80_pregunta.jpg",
		options: [
			{
				text: "A) Encender las luces intermitentes, colocar las balizas portátiles y llamar al número de emergencia de la Autopista.",
				correct: false,
			},
			{
				text: "B) Descender del vehículo usando un chaleco reflectante y ponerse a resguardo detrás de una defensa si las hubiere.",
				correct: false,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: true,
			},
		],
	},
	{
		text: "¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
		options: [
			{
				text: "A) El que firmó la autorización para obtener la licencia.",
				correct: true,
			},
			{ text: "B) El que lo acompaña.", correct: false },
			{ text: "C) El que le autorizó el uso del vehículo.", correct: false },
		],
	},
	{
		text: "¿Cuánto dura en su totalidad la condición de principiante?",
		options: [
			{
				text: "A) 2 años, sólo en el caso de los menores de 21 años de edad.",
				correct: false,
			},
			{
				text: "B) 6 meses, sólo para quien la tramita por primera vez.",
				correct: false,
			},
			{ text: "C) 2 años, independientemente a la edad.", correct: true },
		],
	},
	{
		text: "Con esta documentación, ¿quién está autorizado a conducir el vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_98_pregunta.jpg",
		options: [
			{
				text: "A) Nadie, porque está vencida y debe renovarse.",
				correct: false,
			},
			{ text: "B) Sólo el titular.", correct: true },
			{
				text: "C) El titular y sus familiares directos, por tener el mismo apellido.",
				correct: false,
			},
		],
	},
	{
		text: "¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
		options: [
			{ text: "A) Sólo una.", correct: false },
			{
				text: "B) La cantidad que solicite el titular del vehículo.",
				correct: true,
			},
			{ text: "C) Hasta cinco.", correct: false },
		],
	},
	{
		text: "¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
		options: [
			{ text: "A) Siempre y cuando se encuentre vigente.", correct: false },
			{
				text: "B) Sólo si es un familiar directo o tiene una relación laboral.",
				correct: false,
			},
			{ text: "C) En ningún caso.", correct: true },
		],
	},
	{
		text: "Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
		options: [
			{
				text: "A) Eventuales daños causados a terceros transportados únicamente.",
				correct: false,
			},
			{
				text: "B) Eventuales daños causados a terceros transportados o no.",
				correct: true,
			},
			{ text: "C) Daños causados a los vehículos únicamente.", correct: false },
		],
	},
	{
		text: "¿Está permitido circular con la placa de dominio de este modo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_103_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que exhibe una documentación provisoria.",
				correct: false,
			},
			{
				text: "B) No, ya que para poder cumplir su función como provisoria debe ampliarse.",
				correct: false,
			},
			{
				text: "C) No, ya que debe estar colocada en el lugar y de forma reglamentaria.",
				correct: true,
			},
		],
	},
	{
		text: "Según Ley N°2265, ¿Cuándo debe realizar la primer VTV un automóvil 0km radicado en CABA?",
		options: [
			{
				text: "A) Pasados los 3 años de antigüedad, en el mes que le corresponda, o superados los 60.000 km.",
				correct: true,
			},
			{ text: "B) Inmediatamente al retirarlo de la agencia.", correct: false },
			{
				text: "C) En el mes que le corresponda, inmediatamente seguido al año transcurrido.",
				correct: false,
			},
		],
	},
	{
		text: "En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?",
		options: [
			{
				text: "A) No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día.",
				correct: false,
			},
			{
				text: "B) Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación.",
				correct: false,
			},
			{
				text: "C) Si se realiza dentro de los 60 días hábiles de efectuada la verificación.",
				correct: true,
			},
		],
	},
	{
		text: "¿Cuál dígito de la siguiente placa de dominio indica el mes en que se debe realizar la Verificación Técnica Vehicular?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_110_pregunta.jpg",
		options: [
			{ text: "A) El número 1.", correct: false },
			{ text: "B) La letra D.", correct: false },
			{ text: "C) El número 3.", correct: true },
		],
	},
	{
		text: "¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_110_pregunta.jpg",
		options: [
			{ text: "A) Enero.", correct: false },
			{ text: "B)  Febrero.", correct: false },
			{ text: "C) Marzo.", correct: true },
		],
	},
	{
		text: "¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_112_pregunta.jpg",
		options: [
			{ text: "A) Enero.", correct: false },
			{ text: "B) Julio.", correct: true },
			{ text: "C) Diciembre.", correct: false },
		],
	},
	{
		text: "Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?",
		options: [
			{ text: "A) 10 puntos.", correct: false },
			{ text: "B) 20 puntos.", correct: true },
			{ text: "C) 5 puntos.", correct: false },
		],
	},
	{
		text: "De acuerdo con el siguiente símbolo, ¿por cuánto tiempo tiene prohibido conducir con más de 0,0 gramos de alcohol por litro de sangre el conductor de este vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_129_pregunta.jpg",
		options: [
			{ text: "A) 2 años.", correct: true },
			{ text: "B) 1 año.", correct: false },
			{ text: "C) 6 meses.", correct: false },
		],
	},
	{
		text: "De acuerdo con el símbolo que exhibe, ¿cuál es el nivel máximo de alcoholemia admitido para el conductor de este vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_130_pregunta.jpg",
		options: [
			{ text: "A) 0,5 gramos de alcohol por litro de sangre.", correct: false },
			{ text: "B) 0,0 gramos de alcohol por litro de sangre.", correct: true },
			{ text: "C) 0,2 gramos de alcohol por litro de sangre.", correct: false },
		],
	},
	{
		text: "¿Cuál es el nivel máximo de alcoholemia admitido para el conductor del vehículo que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_131_pregunta.jpg",
		options: [
			{ text: "A) 0,5 gramos de alcohol por litro de sangre.", correct: true },
			{ text: "B) 0,0 gramos de alcohol por litro de sangre.", correct: false },
			{ text: "C) 0,2 gramos de alcohol por litro de sangre.", correct: false },
		],
	},
	{
		text: "¿Cada cuánto tiempo es recomendable parar si se realiza un viaje largo?",
		options: [
			{ text: "A) Cada 2 horas aproximadamente.", correct: true },
			{ text: "B) Cada 4 horas aproximadamente.", correct: false },
			{ text: "C) Cada 1 hora aproximadamente.", correct: false },
		],
	},
	{
		text: "Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
		options: [
			{
				text: "A) Sí, por la falta de experiencia en la conducción.",
				correct: true,
			},
			{
				text: "B) No, porque todos somos iguales ante la Ley.",
				correct: false,
			},
			{
				text: "C) Únicamente cuando se trata de una persona que padece de fatiga crónica.",
				correct: false,
			},
		],
	},
	{
		text: "¿Se encuentra prohibida la acción de la persona señalada con el círculo rojo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_149_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque se encuentra en el asiento delantero.",
				correct: false,
			},
			{
				text: "B) No, porque la prohibición del uso de telefonía celular alcanza sólo al conductor del vehículo.",
				correct: true,
			},
			{
				text: "C) Sí, su uso se encuentra prohibido para todos los ocupantes del vehículo.",
				correct: false,
			},
		],
	},
	{
		text: "La acción que realiza el conductor en la imagen es riesgosa para la conducción.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_153_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Cuáles de las siguientes acciones son consideradas factores de distracción cuando se conduce un vehículo?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_154_pregunta.jpg",
		options: [
			{ text: "A) Las opciones A, B y C.", correct: true },
			{ text: "B) Las opciones A y C.", correct: false },
			{ text: "C) Las opciones B y C.", correct: false },
		],
	},
	{
		text: "El vehículo señalado con un círculo rojo, ¿circula correctamente?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_241_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque en esta vía las luces deben estar encendidas.",
				correct: false,
			},
			{
				text: "B) Sí, ya que mantiene una distancia prudencial respecto del resto de los vehículos.",
				correct: false,
			},
			{
				text: "C) No, dado que está circulando por la banquina.",
				correct: true,
			},
		],
	},
	{
		text: "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo cuando el flujo vehicular esté absolutamente congestionado.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_242_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Según las normas generales, ¿cuál es la velocidad máxima permitida para un automóvil particular en esta avenida?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_251_pregunta.jpg",
		options: [
			{ text: "A) 40 km/h.", correct: false },
			{ text: "B) 70 km/h.", correct: false },
			{ text: "C) 60 km/h.", correct: true },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para un automóvil particular en este tramo de la avenida?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_252_pregunta.jpg",
		options: [
			{ text: "A) 60 km/h.", correct: false },
			{ text: "B) 50 km/h.", correct: false },
			{ text: "C) 40 km/h.", correct: true },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para automóviles particulares en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_253_pregunta.jpg",
		options: [
			{ text: "A) 60 km/h.", correct: false },
			{ text: "B) 70 km/h.", correct: true },
			{ text: "C) 50 km/h.", correct: false },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Costanera Rafael Obligado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_254_pregunta.jpg",
		options: [
			{ text: "A) 60 km/h.", correct: true },
			{ text: "B) 70 km/h.", correct: false },
			{ text: "C) 40 km/h.", correct: false },
		],
	},
	{
		text: "Según la Ley 2148, los límites de velocidad para un automóvil particular que circula por esta arteria son de 30 km/h (mínima) y 60 km/h (máxima).",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_255_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "Según las normas generales, ¿cuál es la velocidad máxima permitida para automóviles particulares en esta zona de la ruta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_256_pregunta.jpg",
		options: [
			{ text: "A) 110 km/h.", correct: true },
			{ text: "B) 130 km/h.", correct: false },
			{ text: "C) 80 km/h.", correct: false },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_261_pregunta.jpg",
		options: [
			{ text: "A) 30 km/h.", correct: true },
			{ text: "B) 40 km/h.", correct: false },
			{ text: "C) 60 km/h.", correct: false },
		],
	},
	{
		text: "Según Ley N°2148, ¿cuál es la velocidad máxima permitida para automóviles particulares en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?",
		options: [
			{ text: "A) 60 km/h.", correct: false },
			{ text: "B) 80 km/h.", correct: true },
			{ text: "C) 100 km/h.", correct: false },
		],
	},
	{
		text: "¿Cuál es la velocidad máxima permitida para un automóvil particular en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?",
		options: [
			{ text: "A) 60 km/h.", correct: false },
			{ text: "B) 110 km/h.", correct: false },
			{ text: "C) 100 km/h.", correct: true },
		],
	},
	{
		text: "¿Cuál es la “distancia mínima de seguridad” a la que debe circular el vehículo A con respecto al B?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_274_pregunta.jpg",
		options: [
			{ text: "A) A una diferencia de dos segundos.", correct: true },
			{ text: "B) A una distancia de 2 metros.", correct: false },
			{
				text: "C) No existe una determinada. Sólo está prohibido circular inmediatamente detrás, sin dejar distancia.",
				correct: false,
			},
		],
	},
	{
		text: "Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:",
		options: [
			{ text: "A) Usar el freno de mano.", correct: false },
			{ text: "B) Desacelerar (no frenar).", correct: true },
			{ text: "C) Accionar fuertemente el pedal de freno.", correct: false },
		],
	},
	{
		text: "¿El vehículo de la imagen se encuentra en infracción?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_286_pregunta.jpg",
		options: [
			{
				text: "A) Sí, salvo que el propietario del vehículo sea el mismo que el de la vivienda.",
				correct: false,
			},
			{
				text: "B) No, ya que hay espacio suficiente para el paso del peatón.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, A y B, son incorrectas.", correct: true },
		],
	},
	{
		text: "¿Es correcto estacionar el vehículo de esta manera?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_287_pregunta.jpg",
		options: [
			{
				text: "A) No, excepto que se encuentre junto al cordón del garaje del propietario del vehículo.",
				correct: false,
			},
			{
				text: "B) Sí, siempre que se estacione paralelo al cordón los días no hábiles.",
				correct: false,
			},
			{
				text: "C) No. Está prohibido ya que pone en riesgo a los ciclistas.",
				correct: true,
			},
		],
	},
	{
		text: "El vehículo con la oblea universal de discapacidad que se muestra en esta imagen, ¿se encuentra en infracción?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_288_pregunta.jpg",
		options: [
			{
				text: "A) No, ya que al portar la oblea universal de discapacidad tiene libre estacionamiento y por ello puede estacionar en este lugar.",
				correct: false,
			},
			{
				text: "B) Sí. Todo vehículo tiene prohibido estacionar en este sector ya que pone en riesgo a pasajeros y peatones.",
				correct: true,
			},
		],
	},
	{
		text: "Un vehículo con emblema internacional para personas con discapacidad puede ser remitido en algunos casos.",
		options: [
			{ text: "A) Verdadero.", correct: true },
			{ text: "B) Falso.", correct: false },
		],
	},
	{
		text: "¿Es correcta la detención del vehículo en este sector?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_290_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que se encuentra con balizas encendidas.",
				correct: false,
			},
			{
				text: "B) Sí, porque sólo está prohibido el estacionamiento.",
				correct: false,
			},
			{
				text: "C) No, ya que tanto la detención como el estacionamiento en este sector se encuentra prohibido.",
				correct: true,
			},
		],
	},
	{
		text: "Como norma general, frente a esta señal, ¿está permitido detenerse para el ascenso o descenso de pasajeros?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_294_pregunta.jpg",
		options: [
			{ text: "A) No. Está prohibido estacionar y detenerse.", correct: false },
			{
				text: "B) Sí. Sólo está prohibido estacionar pero no detenerse.",
				correct: true,
			},
			{
				text: "C) Según la hora en que quiera realizarse la detención.",
				correct: false,
			},
		],
	},
	{
		text: "Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_289_pregunta.jpg",
		options: [
			{ text: "A) Todo el frente del edificio.", correct: false },
			{ text: "B) 10 metros de cada lado de la entrada.", correct: true },
			{ text: "C) 5 metros de cada lado de la entrada.", correct: false },
		],
	},
	{
		text: "Para poder estacionar en esta zona, se deben dejar libre al menos de 5 metros para cada lado de la entrada.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_290_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "En estas zonas, está permitido estacionar a partir de los 20 metros para cada lado.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_291_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "La Ley Nº2148 establece como norma general que, en avenidas de este tipo, está prohibido estacionar vehículos...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_292_pregunta.jpg",
		options: [
			{
				text: "A) Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
				correct: true,
			},
			{
				text: "B) Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
				correct: false,
			},
			{
				text: "C) Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
				correct: false,
			},
		],
	},
	{
		text: "La Ley Nº2148 establece como norma general que, en avenidas de este tipo, está prohibido estacionar vehículos…",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_293_pregunta.jpg",
		options: [
			{
				text: "A) Junto a la acera izquierda los días hábiles durante las 24 horas.",
				correct: false,
			},
			{
				text: "B) Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
				correct: true,
			},
			{
				text: "C) Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
				correct: false,
			},
		],
	},
	{
		text: "La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_294_pregunta.jpg",
		options: [
			{
				text: "A) Junto a la acera derecha los días hábiles durante las 24 horas.",
				correct: false,
			},
			{
				text: "B) Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
				correct: false,
			},
			{
				text: "C) Junto a la acera izquierda todos los días durante las 24 horas.",
				correct: true,
			},
		],
	},
	{
		text: "En la presente situación, el vehículo señalado no se encuentra en infracción si...",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_300_pregunta.jpg",
		options: [
			{ text: "A) Permanece de ese modo, de 2 a 5 minutos.", correct: false },
			{
				text: "B) Permanece de ese modo alrededor de 2 minutos, no abandona el vehículo y además, indica su detención con las balizas.",
				correct: false,
			},
			{
				text: "C) Es una detención previa a la maniobra de estacionamiento.",
				correct: true,
			},
		],
	},
	{
		text: "Encender las balizas permite detenerse en doble fila por un lapso de tiempo, entre 2 y 5 minutos.",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "La Ley N° 2148 establece como norma general la prohibición de detenerse de la siguiente forma, excepto:",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_302_pregunta.jpg",
		options: [
			{
				text: "A) Que se trate de una detención para el ascenso o descenso de pasajeros.",
				correct: false,
			},
			{
				text: "B) Que se trate de una detención previa a la maniobra de estacionamiento.",
				correct: true,
			},
			{
				text: "C) Ambas respuestas, la A y la B, son correctas.",
				correct: false,
			},
		],
	},
	{
		text: "¿Está permitida la acción que se presenta en la siguiente imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_303_pregunta.jpg",
		options: [
			{
				text: "A) Sí, porque tiene las balizas encendidas y no necesita permanecer más de 5 minutos para que descienda un pasajero.",
				correct: false,
			},
			{
				text: "B) Sí, porque la doble fila está permitida cuando se trata de ascenso y descenso de pasajeros.",
				correct: false,
			},
			{
				text: "C) No, ya que la doble fila está permitida sólo como detención previa a la maniobra de estacionamiento.",
				correct: true,
			},
		],
	},
	{
		text: "¿Este vehículo se encuentra bien estacionado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_306_pregunta.jpg",
		options: [
			{
				text: "A) Sí. Al no estar el cordón pintado de amarillo, está habilitado a estacionarse y detenerse.",
				correct: false,
			},
			{
				text: "B) Sí. Al no estar el cordón pintado de rojo, está habilitado a estacionarse pero no a detenerse.",
				correct: false,
			},
			{
				text: "C) No, porque debería estar más alejado del cordón (a 20 cm de él).",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_307_pregunta.jpg",
		options: [
			{
				text: "A) Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática.",
				correct: false,
			},
			{
				text: "B) Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática.",
				correct: true,
			},
			{
				text: "C) Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática.",
				correct: false,
			},
		],
	},
	{
		text: "Cuando un conductor realiza marcha atrás, ¿qué distancia puede recorrer?",
		options: [
			{ text: "A) No debe superar la mitad de una cuadra.", correct: false },
			{ text: "B) No más de 20 metros.", correct: false },
			{
				text: "C) El recorrido mínimo e indispensable, siempre que se trate de una maniobra de estacionamiento.",
				correct: true,
			},
		],
	},
	{
		text: "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_308_pregunta.jpg",
		options: [
			{
				text: "A) Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática.",
				correct: true,
			},
			{
				text: "B) Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática.",
				correct: false,
			},
			{
				text: "C) Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática.",
				correct: false,
			},
		],
	},
	{
		text: "¿Está permitido circular marcha atrás en la Ciudad de Buenos Aires?",
		options: [
			{
				text: "A) No, salvo que se realice para estacionar, entrar o salir de un garaje (cuando no exista otra posibilidad) o salvar algún obstáculo.",
				correct: true,
			},
			{
				text: "B) Sí, se puede realizar en cualquier ocasión pero el trayecto para circular debe ser de pocos metros.",
				correct: false,
			},
			{
				text: "C) Sí, siempre que se realice antes de llegar a la mitad de la cuadra y asegurándose de no poner en riesgo al resto de los vehículos.",
				correct: false,
			},
		],
	},
	{
		text: "El vehículo, señalado con un círculo rojo, circula utilizando las luces correctas.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_321_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "Para circular de noche por una calle de la Ciudad de Buenos Aires, ¿qué luces deben utilizarse?",
		options: [
			{ text: "A) Las bajas.", correct: true },
			{ text: "B) Las altas.", correct: false },
			{ text: "C) Las de posición solamente.", correct: false },
		],
	},
	{
		text: "Es obligatoria la circulación con luces bajas encendidas las 24 horas en...",
		options: [
			{ text: "A) Todas las autopistas.", correct: false },
			{
				text: "B) Avenida Gral. Paz, Lugones e Intendente Cantilo.",
				correct: false,
			},
			{ text: "C) Ambas respuestas, la A y B, son correctas.", correct: true },
		],
	},
	{
		text: "Si al circular por la siguiente arteria, se ve obligado a detener en la banquina, ¿qué luces debe colocar?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_a_256_pregunta.jpg",
		options: [
			{ text: "A) Luces altas y giro.", correct: false },
			{ text: "B) Luces reglamentarias y balizas.", correct: true },
			{ text: "C) Luces antinieblas.", correct: false },
		],
	},
	{
		text: "Según la Ley Nº 2148, ¿está permitido colocar a un automóvil particular luces adicionales?",
		options: [
			{
				text: "A) Está permitido el agregado de dos faros rompeniebla y de hasta dos faros elevados con luces de freno.",
				correct: true,
			},
			{
				text: "B)  Sí. Se puede agregar las luces que se deseen ya que cuanto más capacidad de iluminación tenga el vehículo, mejor visibilidad tendrá el conductor.",
				correct: false,
			},
			{
				text: "C) No, está prohibido agregar cualquier tipo de luz adicional. Sólo se podrá reponer las que traiga de fábrica, en caso de destrucción.",
				correct: false,
			},
		],
	},
	{
		text: "¿Qué significado tiene el color de las luces encendidas que se indican en la imagen?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_328_pregunta.jpg",
		options: [
			{
				text: "A) Al estar ubicada en la parte posterior del vehículo, el color blanco es para diferenciarla de las luces de freno, posición y giro.",
				correct: false,
			},
			{
				text: "B) Al ser de color blanco se obtiene mejor visión cuando la maniobra de retroceso se debe realizar de noche o en condiciones de poca visibilidad.",
				correct: false,
			},
			{
				text: "C) Indica el sentido de circulación. La luz blanca significa que el vehículo circula en sentido contrario al del vehículo rojo que está detrás de él.",
				correct: true,
			},
		],
	},
	{
		text: "¿En qué caso deberán utilizarse estas luces?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_345_pregunta.jpg",
		options: [
			{
				text: "A) Únicamente de noche y por una vía sin asfaltar.",
				correct: false,
			},
			{ text: "B) Sólo por vías sin banquina.", correct: false },
			{
				text: "C) En vías afectadas por niebla, en cualquier horario.",
				correct: true,
			},
		],
	},
	{
		text: "Se deben utilizar balizas mientras se conduce bajo estas condiciones climáticas.",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_348_pregunta.jpg",
		options: [
			{ text: "A) Verdadero.", correct: false },
			{ text: "B) Falso.", correct: true },
		],
	},
	{
		text: "¿Es seguro conducir con este tipo de calzado?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_351_pregunta.jpg",
		options: [
			{ text: "A) Es indistinto mientras que no resbalen.", correct: false },
			{
				text: "B) Sólo puede verse afectada la conducción en viajes largos.",
				correct: false,
			},
			{
				text: "C) No, sólo un calzado sujeto al pie brinda seguridad en la conducción.",
				correct: true,
			},
		],
	},
	{
		text: "Según la Ley N° 2148, un vehículo que no está destinado al servicio de emergencia, en caso de extrema necesidad, ¿puede realizar un servicio similar al que efectúan éstos?",
		options: [
			{
				text: "A) Sí, debiendo advertirlo encendiendo las balizas, empleando la bocina en forma intermitente y agitando un paño.",
				correct: true,
			},
			{
				text: "B) Sí. El conductor de dicho vehículo deberá sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vía la situación en la que se encuentra.",
				correct: false,
			},
			{
				text: "C) No, los servicios de emergencia sólo pueden ser efectuados por los vehículos habilitados para este fin.",
				correct: false,
			},
		],
	},
	{
		text: "Según la Ley 2148, ¿este vehículo está cargando combustible de manera correcta?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_362_pregunta.jpg",
		options: [
			{
				text: "A) Sí, ya que no se observa al conductor utilizar el celular que es la única prohibición al respecto.",
				correct: false,
			},
			{
				text: "B) No, ya que por normativa no debe cargarse combustible con luces y motor encendido.",
				correct: true,
			},
			{ text: "C) La Ley no se expresa sobre esta situación.", correct: false },
		],
	},
	{
		text: "Con respecto al consumo de combustible, ¿qué consecuencias trae circular de la siguiente forma?",
		img: "https://test-conducir.yurkap.com/img/drawable-mdpi/ic_b_365_pregunta.jpg",
		options: [
			{
				text: "A) Aumenta el consumo de combustible porque el vehículo se vuelve más ligero.",
				correct: false,
			},
			{
				text: "B) Incrementa la resistencia del viento y con ello, aumenta el consumo de combustible.",
				correct: true,
			},
			{
				text: "C) Es indistinto donde se ubique la carga, no afecta al consumo de combustible.",
				correct: false,
			},
		],
	},
];
