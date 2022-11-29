import { Question } from "../providers/QuestionProvider";

 

export const source:Question[] = [

    {
        text:"La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
        options:[
            "Vehicular y Ambiental",
            " Humano y Vehicular",
            "Humano, Vehicular y Ambiental"
        ],
        correctIndex:2 
    },

    {
        text:"¿A qué factor se deben la mayoría de los siniestros viales?",
        options:[
            "Al humano","Al vehicular","Al ambiental"
        ],
        correctIndex:0 
    },
    {
        text:"A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
        options:[
            "Al estado del pavimento y al clima, en especial.",
            "A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
            "Ninguna de las anteriores."
        ],
        correctIndex:1 
    },
    {
        text:"El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino",
        options:["Verdadero","Falso"],
        correctIndex:1 
    },
    {
        text:"Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil",
        options:["Verdadero","Falso"],
        correctIndex:0, 
    },
    {
        text:"¿A qué se denomina incidente de tránsito o incidente vial? ",
        options:[
            "Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
            " Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
            "Hecho, evitable o no, que involucra daños a terceros"
        ],
        correctIndex:0  
    },
    {
        text:"“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
        options:[
            "No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo",
            "No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir",
            " Sí, porque se está obligado a no causar peligro ni entorpecer la circulación."
        ],
        correctIndex:2 
    },
    {
        text:"“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
        options:[
            " Sí, independientemente del tipo de movilidad elegido.",
            "No, los peatones son usuarios de la vía pública y no están obligados.",
            "Sí pero sólo si estamos conduciendo un vehículo."
        ],
        correctIndex:0 
    },
    {
        text:"Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
        options:[
            "Daños materiales, costos sanitarios y administrativos",
            "Daños materiales y costos sanitarios.",
            "Sólo daños materiales."
        ],
        correctIndex:0 
    },

    {
        text:"Todo usuario de la vía pública debe, como premisa básica…",
        options:[
            "Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes",
            "Acreditar experiencia de manejo en vehículos por más de un año.",
            "Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses."
        ],
        correctIndex: 0 
    },
    {
        text:"¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
        options:[
            "Velocidad y confort.",
            "Fluidez y seguridad",
            "Comodidad y agilidad."
        ],
        correctIndex: 1, 
    },
    {
        text:"Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
        options:[
            "Opción A",
            "Opción B",
            " Ambas respuestas, A y B, son correctas"
        ],
        correctIndex: 1,
        image:"aob.jpg"
    },
    {
        text:"Indique cuál es la premisa correcta:",
        options:[
            "A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
            "A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
            "A menor cantidad de vehículos, menor probabilidad de siniestralidad."
        ],
        correctIndex: 2 
    },
    {
        text:"¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
        options:[
            "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
            " Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
            " Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión"
        ],
        correctIndex: 1, 
    },
    {
        text:"En esta situación, ¿es correcto que el vehículo avance?",
        options:[
            "Sí, porque por allí no circulan peatones y no hay peligro. ",
            "No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
            "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar."
        ],
        correctIndex: 1,
        image:"taxi.jpg"
    },
    {
        text:"¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
        options:[
            "Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
            "Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle."
        ],
        correctIndex: 0,
        image:"taxi.jpg"
    },
    {
        text:"Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
        options:[
            "Esquivar a la peatona y tocarle bocina para que no se distraiga.",
            "Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular."
        ],
        correctIndex: 1,
        image:"peatona.jpg"
    },
    {
        text:"Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
        options:[
            "No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
            "Sí, siempre."
        ],
        correctIndex: 1,
        image:"prioridad.jpg"
    },
    {
        text:"Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor? ",
        options:[
            "A) Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
            "B) Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
            "Ambas respuestas, la A y la B, son incorrectas."
        ],
        correctIndex: 0,
        image:"prioridad2.jpg"
    },
    {
        text:"Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
        options:[
            " Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
            "En coincidencia con las paradas de transporte.",
            "Por la esquina, por la prolongación longitudinal de la vereda sobre la calle."
        ],
        correctIndex: 2, 
    },
    {
        text:"Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
        options:[
            "Que no comience a cruzar la calzada.",
            "Si inició el cruce, que lo finalice con mucha precaución.",
            "Ambas respuestas, la A y la B son correctas."
        ],
        correctIndex: 2,
        image:"semaforo.jpg"
    },
    {
        text:"¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
        options:[
            "Carril exclusivo de colectivo de pasajeros.",
            " Cruce exclusivo de vehículos de emergencia.",
            " Ceda el paso."
        ],
        correctIndex: 0,
        image:"rombo.jpg"
    },
    {
        text:"¿Qué son los carriles exclusivos?",
        options:[
            "Vías con un único sentido de circulación.",
            "Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
            "Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones."
        ],
        correctIndex: 1 
    },
    {
        text:"¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
        options:[
            "Estacionamiento para micros escolares.",
            " Carril de detención para el ascenso y descenso de escolares.",
            " Zona de ascenso y descenso de pasajeros de transporte público."
        ],
        correctIndex: 1,
        image:"calzada.jpg"
    },
    {
        text:"La siguiente imagen corresponde a:",
        options:[
            " Calle Prioridad Peatón.",
            "Calle con Intervención Peatonal.",
            "Calle con Bicisenda."
        ],
        correctIndex: 0,
        image:"prioridad3.jpg"
    },
    {
        text:"¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
        options:[
            "Ampliar la zona permitida de estacionamiento para motos.",
            "Reducir la velocidad y radio de giro de los vehículos.",
            "Ampliar la zona permitida de estacionamiento para vehículos de emergencia."
        ],
        correctIndex: 1,
        image:"calle.jpg"
    },
    {
        text:"La señal que está presente en la imagen corresponde a las informativas que orientan al peatón",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image:"sign.jpg"
    },
    {
        text:"¿Qué debe hacer usted si su vehículo queda inmovilizado en un túnel?",
        options:[
            "Dejar el vehículo cerrado y salir del túnel cuanto antes.",
            "Apagar todas las luces si el túnel está iluminado y solicitar auxilio a través del teléfono móvil.",
            "Apagar el motor, colocar las balizas portátiles, mantener encendidas las luces de posición e intermitentes y llamar al número de asistencia."
        ],
        correctIndex: 2, 
    },
    {
        text:"En caso de participar de un siniestro vial en una avenida, es recomendable señalizar la zona para que no se produzcan más incidentes viales.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0 
    },
    {
        text:"En caso de un siniestro vial en este tipo de calle, ¿cómo es recomendable señalizar la zona del vehículo inmovilizado?",
        options:[
            " Se deben encender las luces bajas y, en lo posible, colocar balizas portátiles delante y detrás del mismo.",
            "Se deben encender las luces altas y, en lo posible, colocar balizas portátiles detrás del mismo.",
            " Se deben encender las balizas y, en lo posible, colocar balizas portátiles del lado de donde provienen los vehículos a una distancia adecuada del vehículo."
        ],
        correctIndex: 2,
        image:"zona.jpg"
    },
    {
        text:"En el caso de que un vehículo quede inmovilizado por un siniestro vial o desperfecto mecánico en los carriles marcados de esta vía, ¿qué es recomendable hacer?",
        options:[
            "Colocar las balizas portátiles, ponerse a resguardo detrás de una defensa si las hubiere y llamar al número de emergencia de la Autopista.",
            "Descender del vehículo usando un chaleco reflectante para hacer señas al resto de los vehículos y llamar al número de emergencia de la Autopista",
            "Permanecer dentro del vehículo con el cinturón de seguridad abrochado, encender las balizas y llamar al número de emergencia de la Autopista."
        ],
        correctIndex: 2,
        image:"vias.jpg"
    },
    {
        text:"En caso de un siniestro vial o desperfecto mecánico, ¿qué es recomendable hacer cuando el vehículo queda inmovilizado en el sector señalado?",
        options:[
            "A) Encender las luces intermitentes, colocar las balizas portátiles y llamar al número de emergencia de la Autopista.",
            "B) Descender del vehículo usando un chaleco reflectante y ponerse a resguardo detrás de una defensa si las hubiere.",
            "Ambas respuestas, la A y la B, son correctas"
        ],
        correctIndex: 2,
        image:"zona2.jpg"
    },
    {
        text:"En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente. ",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 1, 
    },
    {
        text:"La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0, 
    },
    {
        text:"En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
        options:[
            "24 horas.",
            "48 horas",
            "72 horas"
        ],
        correctIndex: 2, 
    },
    {
        text:"En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal \
        policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los \
        medios para que los servicios de emergencia atiendan a los heridos y resguardando los \
        vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0, 
    },
    {
        text:"En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
        options:[
            "Detenerse inmediatamente y permanecer en el lugar del hecho.",
            "Conducir hasta la comisaría más cercana.",
            "Llamar al 911 y continuar el viaje."
        ],
        correctIndex: 0,
    },


    {
        text:"En caso de siniestro, el orden de actuación recomendado es…",
        options:[
            "Alertar - Socorrer - Proteger.",
            "Proteger - Alertar - Socorrer.",
            "Socorrer - Proteger - Alertar."
        ],
        correctIndex:1 
    },
    {
        text:"¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
        options:[
            "A) Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y \
            brindar su colaboración para evitar mayores daños para la circulación.",
            "B) Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro \
            obligatorio a los demás siniestrados y a la autoridad interviniente",
            "Ambas respuestas, A y B, son correctas."
        ],
        correctIndex:2, 
    },
    {
        text:"¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad \
        poseedor de una licencia de conducir?",
        options:[
            "El que firmó la autorización para obtener la licencia.",
            "El que lo acompaña.",
            "El que le autorizó el uso del vehículo."
        ],
        correctIndex:0, 
    },
    {
        text:"En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante \
        para dar inicio a una demanda?",
        options:[
            " La intención de la conducta dañosa.",
            "La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente",
            "Los antecedentes de la persona que provoca el daño"
        ],
        correctIndex:1, 
    },
    {
        text:"Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del \
        conductor de un vehículo al dueño del mismo?",
        options:[
            "No, porque la responsabilidad penal es intransferible",
            "Sí. Además, del dueño también puede transferirse a la Compañía de Seguros",
            "Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias."
        ],
        correctIndex:0, 
    },
    {
        text:"En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable \
        por negligencia?",
        options:[
            "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
            "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o \
            sea, que ha actuado peligrosamente.",
            "Que ha actuado no conforme a las exigencias de la Ley. "
        ],
        correctIndex:2, 
    },

    //2) Preguntas para todas las clases: Documentación

    {
        text:"Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
        options:[
            "30 días corridos desde su vencimiento",
            "Hasta las 00 horas del día de cumpleaños",
            " No está permitido conducir con la licencia vencida"
        ],
        correctIndex:2, 
    },
    {
        text:"En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
        options:[
            "No, porque es un documento personal.",
            "Sólo en los casos que la normativa vigente así lo indique.",
            "Sólo en casos de incidentes que involucren a terceros."
        ],
        correctIndex:1, 
    },
    {
        text:"Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su \
        renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
        options:[
            "30 días corridos desde su vencimiento.",
            "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez \
            vencida se la debe tramitar como licencia nueva.",
            "90 días corridos desde su vencimiento."
        ],
        correctIndex:2, 
    },
    {
        text:"¿Cuánto dura en su totalidad la condición de principiante?",
        options:[
            "2 años, sólo en el caso de los menores de 21 años de edad.",
            "6 meses, sólo para quien la tramita por primera vez",
            "1 año, independientemente de la edad"
        ],
        correctIndex:1, 
    },
    {
        text:"Con esta documentación, ¿quién está autorizado a conducir el vehículo?",
        options:[
            "Nadie, porque está vencida y debe renovarse.",
            "Sólo el titular.",
            "El titular y sus familiares directos, por tener el mismo apellido."
        ],
        correctIndex:0,
        image:"cedula-verde.jpg"
    },
    {
        text:"¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
        options:[
            "Sólo una.",
            " La cantidad que solicite el titular del vehículo.",
            " Hasta cinco."
        ],
        correctIndex:1, 
    },
    {
        text:"¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
        options:[
            "Siempre y cuando se encuentre vigente.",
            "Sólo si es un familiar directo o tiene una relación laboral.",
            "En ningún caso."
        ],
        correctIndex:2, 
    },
    {
        text:"El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE \
        cuando se conduce por vías interurbanas.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex:1, 
    },
    {
        text:"Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
        options:[
            "Eventuales daños causados a terceros transportados únicamente.",
            "Eventuales daños causados a terceros transportados o no.",
            "Daños causados a los vehículos únicamente"
        ],
        correctIndex:1, 
    },
    {
        text:"¿Está permitido circular con la placa de dominio de este modo?",
        options:[
            "Sí, ya que exhibe una documentación provisoria.",
            "No, ya que para poder cumplir su función como provisoria debe ampliarse.",
            "No, ya que debe estar colocada en el lugar y de forma reglamentaria."
        ],
        correctIndex:2,
        image:"placa.jpg"
    },
    {
        text:"Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
        options:[
            "A) Se la puede solicitar en cualquier establecimiento comercial que la realice.",
            "B) Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
            " Ambas respuestas, la A y la B, son correctas"
        ],
        correctIndex:1, 
    },
    {
        text:"La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?",
        options:[
            "Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad.",
            "No, deben estar colocadas en el lugar y de forma reglamentaria.",
            "Sólo está prohibido modificar la placa de dominio trasera, no así la delantera."
        ],
        correctIndex:1, 
    },
    {
        text:" ¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
        options:[
            "A) Reducir la contaminación y mejorar la calidad del medio ambiente.",
            "B) Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
            "Ambas respuestas, la A y la B, son correctas"
        ],
        correctIndex:2 
    },
    {
        text:"El titular de una licencia de conducir debe informar todo cambio de datos consignados en \
        la misma, en especial si realiza cambio de domicilio, tiene un plazo máximo de:",
        options:[
            "90 días de producido el cambio",
            "30 días de producido el cambio",
            "60 días de producido el cambio"
        ],
        correctIndex:0, 
    },
    {
        text:"Marque la documentación obligatoria que debe portar el conductor de un vehículo",
        options:[
            "Título de propiedad del vehículo, D.N.I, comprobante de verificación técnica.",
            "Carnet de manejar, botiquín de primeros auxilios, comprobante de patentes pagas.",
            "Póliza de seguro vigente, tarjeta verde, licencia de conducir habilitante, DNI, Grabado de autopartes y vtv."
        ],
        correctIndex:2, 
    },
    {
        text:"Si los datos de la licencia de conducir no coinciden con los datos del DNI…",
        options:[
            "No ocurre absolutamente nada.",
            "La licencia está vigente de todos modos.",
            "La licencia se encuentra caduca. Salvo que no aun este vigente el plazo de gracias de los 90 dias."
        ],
        correctIndex:2, 
    },

    //Preguntas para todas las clases: intoxicación y otros factores de riesgo en la conducción

    {
        text:"¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
        options:[
            " Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
            " Sólo las drogas ilegales",
            "Todo tipo de drogas (las legales e ilegales)"
        ],
        correctIndex:0, 
    },
    {
        text:"La persona que conduce bajo los efectos de estupefacientes…",
        options:[
            "Se pone en grave riesgo a sí mismo y a todos los que lo rodean",
            "Sólo pone en riesgo su propia vida.",
            "Al estar desinhibido, asume menos riesgos"
        ],
        correctIndex:0, 
    },
    {
        text:"¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
        options:[
            "A) Todos los medicamentos, de venta libre, que no necesitan receta.",
            "B) Todos los medicamentos con efectos sedantes",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        correctIndex:1, 
    },
    {
        text:"El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
        options:[
            "Siempre.",
            "Nunca.",
            "Depende del tipo de medicamento."
        ],
        correctIndex:2, 
    },
    {
        text:"Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento \
        de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad \
        de conducir.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex:1, 
    },
    {
        text:"Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
        options:[
            "Sí.",
            "No, solamente afecta a la capacidad motora.",
            "Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre."
        ],
        correctIndex:0, 
    },
    {
        text:"Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
        options:[
            "Comienza a disminuir de forma inmediata.",
            "Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
            "Se mantiene en el mismo valor durante 1 hora y luego comienza a descender."
        ],
        correctIndex:1, 
    },
    {
        text:"Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
        options:[
            " Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo \
            eliminado del organismo.",
            "Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
            "Ambas respuestas, la A y la B, son correctas"
        ],
        correctIndex:2, 
    },
    {
        text:"¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
        options:[
            "Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
            "No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca \
            no altera las percepciones.",
            "Sí, puede afectar la coordinación, la atención y el tiempo de reacción."
        ],
        correctIndex:2, 
    },
    {
        text:"Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
        options:[
            "Sólo si se ha participado de un siniestro vial.",
            "No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
            "Sí, la misma se toma como una presunción de alcoholemia positiva."
        ],
        correctIndex:2,
        image:"test.jpg"
    },
    {
        text:"Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el \
        agente de control podrá prohibirle continuar conduciendo?",
        options:[
            "A) Sí, ya que se presume el estado de alcoholemia positiva.",
            "B) Sí, deberá ordenar la remoción del vehículo.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        correctIndex:2, 
    },
    {
        text:"¿cuál es el nivel máximo de alcoholemia admitido para un conductor profesional?",
        options:[
            "0,5 gramos de alcohol por litro de sangre.",
            "0,0 gramos de alcohol por litro de sangre.",
            "0,2 gramos de alcohol por litro de sangre."
        ],
        correctIndex:1, 
    },

    {
        text:"¿Cada cuánto tiempo es recomendable parar si se realiza un viaje largo?",
        options:[
            "Cada 2 horas aproximadamente.",
            "Cada 4 horas aproximadamente.",
            "Cada 1 hora aproximadamente"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
        options:[
            " Aproximadamente 8 horas.",
            "Al menos 4 horas.",
            " Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con \
        un nivel de alcohol en sangre mayor al permitido por Ley?",
        options:[
            " Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
            "No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
            " No, el descanso no tiene nada que ver con el consumo de alcohol."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"El cansancio puede verse inducido por ingerir:",
        options:[
            "A) Bebidas alcohólicas",
            "B) Comidas abundantes.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
        options:[
            "La sensación de euforia.",
            "La visión borrosa y el aumento del número y duración de parpadeos.",
            "No realizar movimientos en el asiento, ni cambios de postura."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
        options:[
            "Sí, por la falta de experiencia en la conducción.",
            " No, porque todos somos iguales ante la Ley",
            "Únicamente cuando se trata de una persona que padece de fatiga crónica."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
        options:[
            "Escuche música a alto volúmen.",
            " Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
            "Mantenga bien ventilado el interior del vehículo."
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión \
        con el conductor o con otra persona de la vía pública?",
        options:[
            "Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya \
            que la tensión evita la somnolencia.",
            "Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
            "No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Bajo los efectos del estrés, la conducción se vuelve:",
        options:[
            "Más temeraria.",
            "Menos segura.",
            "Ambas respuestas, A y B, son correctas."
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro \
        hasta que acciona el freno?",
        options:[
            "Aproximadamente 1 segundo.",
            "Entre 2 y 3 segundos.",
            "Es inmediato, no transcurre tiempo entre estas acciones"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
        options:[
            "No, ya que no hay otros vehículos junto a él.",
            "Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está \
            dirigida al contexto.",
            "No, ya que el vehículo no está en movimiento."
        ],
        correctIndex: 1,
        image: "atencion.jpg"
    },
    {
        text:"¿Cuál de estos sistemas de comunicación telefónica no es considerado riesgoso al momento \
        de conducir un vehículo?",
        options:[
            " Opción A. Ya que al utilizar un sólo auricular la audición no se encuentra afectada.",
            "Opción B. Ya que al activar el manos libres las manos quedan disponibles para la conducción.",
            "Ambos sistemas son riesgosos."
        ],
        correctIndex: 2,
        image: "com.jpg"
    },
    {
        text:"La siguiente acción del conductor es riesgosa porque:",
        options:[
            "Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad \
            de reacción y aumenta el tiempo necesario para responder ante un estímulo",
            "El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
            "Ambas respuestas, la A y la B, son correctas"
        ],
        correctIndex: 2,
        image: "celu.jpg"
    },
    {
        text:"Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué \
        debe hacer para no generar una situación de riesgo en la vía pública?",
        options:[
            "Colocar balizas y detenerse en un lugar donde esté permitido.",
            "Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
            "Al tratarse de una llamada de urgencia, no importa donde se realice."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Cuáles de las siguientes acciones son consideradas factores de distracción cuando se conduce \
        un vehículo?",
        options:[
            "Las opciones A, B y C.",
            " Las opciones A y C.",
            "Las opciones B y C."
        ],
        correctIndex: 0,
        image: "abc.jpg"
    },

    //Preguntas para todas las Clases: varias 

    {
        text:" La Verificación Técnica vehicular es obligatoria para...",
        options:[
            "... todos los vehículos",
            "... solamente para los destinados a transporte",
            "... para todos los vehículos, excepto las motos, triciclos y cuatriciclos"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿ Que funcion cumplen las señales de prevencion?",
        options:[
            " Indican lo que se puede hacer o lo que esta prohibido hacer durante la circulacion.",
            "Avisan sobre riesgos eventuales al circular por la calle. ",
            "Informan sobre destinos y servicios."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿A que grupo de señales pertenecen las que son (en su mayoria) de forma redonda, de colores rojas y blancas y figura negra?",
        options:[
            " De informacion.",
            "De reglamentacion.",
            "De prevencion."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Si desea girar a la izquierda desde una calle de sentido único, ¿qué maniobra debe realizar?  ",
        options:[
            "Debo acercar el automóvil al centro de la calle y luego girar",
            "Debo acercarme al cordón de la misma mano para luego girar. ",
            "Debo acercar el automóvil a la derecha y luego girar. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Menores de edad:",
        options:[
            "Los menores de hasta DIEZ (10) años deben viajar sujetos al asiento trasero con el correaje correspondiente.",
            "Los menores de hasta OCHO (8) años deben viajar sujetos al asiento trasero con el correaje correspondiente.",
            "Los menores de hasta SEIS (6) años deben viajar sujetos al asiento trasero con el correaje correspondiente. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Exceso de velocidad:",
        options:[
            "Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros u otros vehículos. ",
            "Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros u otros vehículos o animales.",
            "Se encuentra prohibido conducir con exceso de velocidad compitiendo con otros vehículos preparados para carrera."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" Retención del vehiculo:",
        options:[
            "El vehículo será secuestrado y retenido por 10 días si el infractor fuere el propietario. ",
            "El vehículo será secuestrado y retenido por 30 días si el infractor fuere el propietario.",
            "No es posible secuestrar el vehículo porque está prohibido legalmente."
        ],
        correctIndex: 1,
        image: undefined
    },

    {
        text:"¿Cual es la edad minima para adquirir cualquier tipo de licencia según lo establecido en la Ley?",
        options:[
            "La edad mínima para adquirir cualquier tipo de licencia es 16 años. ",
            " La edad mínima para adquirir cualquier tipo de licencia es 18 años. ",
            " La edad mínima para adquirir determinada categoría de licencias es 16 años. "
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:" ¿Está permitido conducir en la vía pública con auriculares puestos? ",
        options:[
            " Si, ya que no genera impedimento visual ni físico",
            " No, está expresamente prohibido por la ley. ",
            "Depende la edad del conductor. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" ¿Cómo debe actuar el conductor ante la señal de “PARE”?",
        options:[
            "Debe detener por completo la marcha, reanudarla una vez que sea seguro.",
            "Debe aminorar la marcha y continuar sólo si es seguro. ",
            "Debe detener la marcha sólo si cruzan peatones"
        ],
        correctIndex: 0,
        image: "pare.jpg"
    },
    {
        text:"Vencido el plazo para hacer la VTV se está en infracción pero podemos seguir circulando.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Qué es el punto ciego? ",
        options:[
            " Son las áreas de visión no cubiertas por los tres espejos retrovisores. ",
            "Son las áreas de visión cubiertas por los tres espejos retrovisores y no por la vista del conductor. ",
            "Son las áreas de visión no cubiertas por el parabrisas. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Qué conductor tiene prioridad de paso en las encrucijadas?:",
        options:[
            "El que cruza desde su derecha. ",
            " El que cruza desde su izquierda. ",
            "Cualquiera de los dos. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"En las vías con más de dos carriles por mano, el tránsito debe ajustarse a lo siguiente:",
        options:[
            " Se debe circular permaneciendo en un mismo carril y por el centro de éste. ",
            "Se debe circular siempre por el carril de la izquierda. ",
            "Se debe circular por cualquier carril lo más a la derecha posible",
            "Se debe circular por el carril de la derecha, por el centro de éste y utilizar el de la izquierda sólo para realizar adelantamientos."
        ],
        correctIndex: 3,
        image: undefined
    },
    {
        text:"En una subida estrecha, ¿quién tiene prioridad de paso? ",
        options:[
            "Quien asciende por la misma.",
            "Quien desciende por la misma. ",
            "Quien desciende salvo que éste lleve acoplado y el que asciende no"
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"Zona de camino: todo espacio afectado a la vía de circulación y sus instalaciones \
        paralelas, comprendido entre las propiedades contiguas;",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"PEATONES Y DICAPACITADOS. Los peatones transitarán: En zona urbana: Únicamente \
        por la acera u otros espacios habilitados a ese fin.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Luces bajas: mientras el vehículo transite por rutas nacionales, las luces bajas \
        permanecerán encendidas de noche, independientemente del grado de luz natural, o de \
        las condiciones de visibilidad que se registren, excepto cuando corresponda la alta y en \
        cruces ferroviales;",
        options:[
            "Verdadero.",
            "Falso"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"En zona rural se estacionará lo más lejos posible de la calzada y banquina, en las zonas \
        adyacentes y siempre que no se afecte la visibilidad.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Se presume responsable de un accidente al que carecía de prioridad de paso o cometió \
        una infracción relacionada con la causa del mismo, sin perjuicio de la responsabilidad \
        que pueda corresponderles a los que, aun respetando las disposiciones, pudiendo haberlo \
        evitado voluntariamente, no lo hicieron.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Cuáles son los factores que pueden afectar al campo visual? ",
        options:[
            "Condiciones climáticas. ",
            "Tamaño del vehículo. ",
            " Iluminación propia del vehículo. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Cuando se procede la retencion de la licencia?",
        options:[
            "Procede cuando estén en estado de intoxicación alcohólica",
            "Procede cuando estén en estado de intoxicación por estupefacientes",
            "Procede cuando estén en estado de intoxicación alcohólica y/o por estupefacientes. "
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"Al conducir...",
        options:[
            "... los automotores serán conducidos con ambas manos sobre el volante de dirección.",
            "... los automotores serán conducidos con ambas manos sobre el volante de dirección, excepto cuando sea necesario accionar otros comandos.",
            "... los automotores serán conducidos con al menos una mano sobre el volante de dirección."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Que es una Amonestacion?",
        options:[
            "Consiste en una advertencia, reprimenda, llamado de atención, con miras a evitar que se procure su repetición.",
            "Es la pérdida del privilegio de conducir",
            "Consiste en una sanción pecuniaria."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:" ¿Que es la multa?",
        options:[
            "Es la sanción que se aplica con mayor asiduidad en materia de de infracciones, pero \
            presenta el inconveniente de no resultar igualitaria. ",
            "Es la pérdida del privilegio de conducir",
            "Consiste en una advertencia, reprimenda, llamado de atención, con miras a evitar que \
            se procure su repetición."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Cuando se otorga la licencia de conducir reemplazada?",
        options:[
            "Se otorga en caso de vencimiento del plazo de vigencia de la licencia habilitante. ",
            "Corresponde al cambio de jurisdicción de un conductor. ",
            "Será otorgada en caso de pérdida, destrucción, o deterioro que haga imposible la identificación del titular."
        ],
        correctIndex: 1,
        image: undefined
    },

    {
        text:" Licencia de conducir duplicada ¿cuando sera otorgada?",
        options:[
            "Será otorgada en caso de pérdida, destrucción, o deterioro que haga imposible la identificación del titular. ",
            "Se otorga en caso de vencimiento del plazo de vigencia de la licencia habilitante. ",
            "Corresponde al cambio de jurisdicción de un conductor. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Licencia de conducir renovada ¿cuando sera otorgada?",
        options:[
            "Corresponde al cambio de jurisdicción de un conductor.",
            "Se otorga en caso de vencimiento del plazo de vigencia de la licencia habilitante. ",
            "Será otorgada en caso de pérdida, destrucción, o deterioro que haga imposible la identificación del titular. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Cuando no existiera senda peatonal habilitada exclusivamente para personas con \
        discapacidad se considera tal a la franja imaginaria sobre la calzada, inmediata al cordón, \
        que comunica la rampa con la senda peatonal",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"En las vías reguladas por semáforos los vehículos deben: con luz intermitente roja, que \
        advierte la presencia de cruce peligroso, detener la marcha y sólo reiniciarla cuando se \
        observe que no existe riesgo alguno.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Excepcionalmente se puede adelantar por la derecha cuando: El anterior ha indicado \
        su intención de girar o de detenerse a su derecha.",
        options:[
            "Verdadero.",
            "Falso"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" Excepcionalmente se puede adelantar por la derecha cuando: En un embotellamiento \
        la fila de la izquierda no avanza o es más lenta.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:" Queda prohibido conducir con impedimentos físicos o psíquicos, sin la licencia especial correspondiente. ",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Queda prohibido circular marcha atrás, excepto para estacionar, egresar de un garage \
        o de una calle sin salida.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Queda prohibido: La detención irregular sobre la calzada, el estacionamiento sobre la \
        banquina y la detención en ella sin ocurrir emergencia",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Queda prohibido: Circular con cubiertas con fallas o sin la profundidad legal de los \
        canales en su banda de rodamiento, salvo que no sean conductores profesionales.",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Queda prohibido conducir utilizando auriculares y sistemas de comunicación de operación manual continua. ",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"En caso de retención de la licencia de conducir por la autoridad competente ante una \
        falta de tránsito grave, la licencia será reemplazada por la boleta de citación del inculpado, \
        que lo habilitará para conducir por un plazo de 30 días.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Es recomendable frenar sobre zona resbaladiza",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"El estacionamiento debe realizarse en no más de tres maniobras y sin tocar otros vehículos",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex: 0,
        image: undefined
    },

    {
        text:"En caso de siniestro en el que usted esté involucrado debe:",
        options:[
            "continuar la marcha. ",
            "detenerse en forma inmediata. ",
            "detenerse despacio de forma gradual inmediata. "
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"La negativa a realizar test de alcoholemia constituye infracción grave y se sanciona como tal",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Sólo se admitirán en los vidrios los aditamentos que tengan fines de identificación (oficiales o privados)",
        options:[
            "Verdadero","Falso"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Que es la responsabilidad?",
        options:[
            "Es la aptitud legal que tenemos para hacernos cargo por la violación de una regla de  convivencia. ",
            "Es el monto de una multa de transito.",
            "Es la aptitud psico-física para conducir."
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:" ¿Que es la responsabilidad penal?",
        options:[
            " Es la responsabilidad legal que tenemos para hacernos cargo por la violación de una regla de convivencia. ",
            "Es la capacidad que nos da la ley para asumir la pena que nos cabe por un delito. ",
            "Es la obligación de reparar el daño que hayamos causado en circunstancias de la circulación"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Inhabilitados. Cumplida la pena:",
        options:[
            "No podrán acceder a una licencia de cualquier categoría, aquellos conductores que hayan sido inhabilitados o que tengan o hayan sido condenados por causas referidas a accidentes de tránsito ",
            "No podrán acceder a una licencia con categoría profesional aquellos conductores que \
            hayan sido inhabilitados o que tengan o hayan sido condenados por causas referidas a \
            accidentes de tránsito, y no hayan trancurrido diez (10) años desde la fecha de vencimiento de la pena impuesta",
            "No podrán acceder a una licencia aquellos conductores que hayan sido condenados por \
            causas referidas a accidentes de tránsito."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" ¿Qué significa el término “culposo” en materia de accidentes de tránsito?",
        options:[
            "Que es responsable por actuar con intención de provocar un daño. ",
            " Que no obró con intención de provocar un daño. ",
            "Que no estaba habilitado para conducir."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Qué vehículo tiene prioridad de paso en una intersección de calles de igual jerarquía?:",
        options:[
            "El que llega primero a la intersección. ",
            "El vehículo de porte mayor. ",
            "El que circula desde la derecha."
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"¿Quién tiene prioridad de paso en cuestas estrechas, si se cruzan un automóvil y un \
        vehículo con acoplado o remolque, que marchan en sentido opuesto?:",
        options:[
            "El automóvil, sólo si está ascendiendo. ",
            "El vehículo con acoplado, esté ascendiendo o descendiendo. ",
            "El vehículo con acoplado, únicamente si asciende. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Cuando se ingresa a una rotonda, ¿qué vehículo tiene prioridad de paso?:",
        options:[
            "El que circula desde la derecha",
            "El que circula por la rotonda. ",
            "Depende del porte del vehículo"
        ],
        correctIndex: 1,
        image: undefined
    }, 

    //Preguntas para todas las clases: Semáforo

    {
        text:"En vía semaforizada, avanzando con luz verde a su frente, si el vehículo realiza un giro \
        para circular por la calle transversal, ¿debe ceder el paso al peatón?",
        options:[
            "A) Tener en cuenta el semáforo opuesto",
            "B) Debe respetar la prioridad de paso de los peatones",
            "C) No está obligado a detenerse porque lo habilita la luz verde. ",
            "La A y la C",
            "La B y la C"
        ],
        correctIndex: 3,
        image: undefined
    },
    {
        text:"¿Cómo deberá el conductor señalizar a los vehículos posteriores la intención de adelantarse? ",
        options:[
            "Se deberán utilizar las balizas",
            "Se deberá utilizar la luz de giro derecha. ",
            " Se deberá utilizar la luz de giro izquierda. "
        ],
        correctIndex: 2,
        image: undefined
    },

    //pag 52
    {
        text:"¿Qué vehículos tienen siempre prioridad de paso?:",
        options:[
            "Ambulancias, policía y bomberos, estén o no en servicio",
            "Ambulancias, policía, bomberos y transporte de personas",
            "Ambulancias, policía y bomberos, con las señales de advertencia reglamentarias activadas"
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"Los conductores principiantes deben conducir con su respectiva identificación...",
        options:[
            "... durante los primeros 3 meses",
            "... durante los primeros 6 meses",
            "... durante los primeros 12 meses",
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"La demarcación horizontal que se encuentra sobre el asfalto...",
        options:[
            "No se debe detener el vehículo sobre ellas en ningún caso",
            "Se puede detener el vehículo sobre ellas sin problema",
            "Depende el tipo de demarcación que se trate, se puede detener el vehículo. ",
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"¿Cómo debe comportarse con luz amarilla a su frente?:",
        options:[
            "Avanzar, como si se tratara de luz verde.",
            "Avanzar sólo si estima que cruzará la encrucijada antes de encenderse la roja.",
            "Sólo si la derecha le otorga prioridad de paso. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Qué indica la luz roja intermitente a su frente?:",
        options:[
            "Que ha habido un accidente en el lugar",
            "La presencia de un cruce peligroso. ",
            "Entrada y salida de vehículos"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Que indica la luz roja del semáfaro?",
        options:[
            "Que debe detenerse. ",
            " Que puede avanzar si no circula otro vehículo transversalmente.",
            "Que puede avanzar si no cruzan peatones."
        ],
        correctIndex: 0,
        image: undefined
    },

    //  Peguntas para todas las clases: Velocidades

    {
        text:" ¿Cuál es la velocidad máxima permitida en calles urbanas?: ",
        options: [
            "40 km. ",
            "60 km.",
            "80 km. "
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Cuál es la velocidad máxima permitida en avenidas urbanas?:",
        options: [
            "60 km",
            "80 km. ",
            "90 km. "
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:" ¿Cuál es la distancia aproximada recorrida circulando a 80km/h?:",
        options: [
            "10 metros por segundo. ",
            "22 metros por segundo. ",
            "30 metros por segundo. ",
            
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:" ¿Cual es la velocidad mínima y máxima para circular por calles en zona urbana?",
        options: [
            "La mínima 15 km/h y la máxima 60 km/h",
            " La mínima 20 km/h y la máxima 40 km/h. ",
            "La minima 30 km/h y la máxima 40 Km/h."
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:"¿A qué velocidad precautoria se debe cruzar una bocacalle sin semáforo?:",
        options: [
            "A la misma velocidad que la de la vía por la que circula. ",
            "A no más de 30 km/h. ",
            "A no más de 10 km/h. "
        ],
        correctIndex:2,
        image: undefined
    },
    {
        text:"Qué sistemas de comunicación, operación manual continua pueden utilizarse durante \
        la conducción?",
        options: [
            "Todos, mientras no se circule en el ejido urbano",
            " Sólo los del tipo “manos libres”. ",
            "  Ninguno. ",
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:" La línea blanca discontinua de trazos demarcada en el centro de calzadas y rutas indica:",
        options: [
            "que puede ser traspasada. ",
            "que no debe ser traspasada.",
            "que no se puede circular sobre ellas."
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:" El uso de luces durante la noche es optativo",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:"La doble línea amarilla pintada en el centro de la calzada indica: ",
        options: [
            "prohibición de adelantarse en ambos sentidos",
            "solo división de manos",
            "Puente angosto. "
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Las órdenes de los agentes de tránsito pueden modificar y aún contradecir la \
        señalización, en casos de conflicto, conveniencia o emergencia",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Para poder circular es obligatorio portar la Cédula de Identificación del Automotor",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"En oportunidad de realizarse la VTV la autoridad de aplicación puede constatar que el \
        vehículo cuente con el seguro obligatorio correspondiente",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Todo automotor destinado a circular, debe contar con placa identificatoria de dominio \
        en el lugar indicado para ello, salvo excepción",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:1,
        image: undefined
    },

    // //56
    {
        text:"La autoridad municipal podrá disponer con carácter general, para áreas metropolitanas, \
        la prohibición de estacionar a la izquierda en las vías de circulación urbanas",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:" El estacionamiento se debe realizar maniobrando sin empujar a los otros vehículos y \
        sin acceder a la acera.",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Cuando no exista cordón se estacionará lo más alejado posible del centro de la calzada, \
        pero sin obstaculizar la circulación de peatones",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"El vehículo, o cualquier otro objeto, dejado en la vía pública por mayor lapso del \
        establecido por la autoridad jurisdiccional, se considera abandonado, debiendo ser \
        removido por la autoridad local.",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Durante la circulación deben mantenerse limpios los elementos externos de \
        iluminación del vehículo, excepto en rutas.",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:"La prohibición de ceder o permitir la conducción a personas sin habilitación para \
        ello, comprende a los dependientes y familiares del propietario o tenedor del vehículo, no \
        pudiendo éste invocar desconocimiento del uso indebido como eximente",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Cualquier maniobra de retroceso, en los casos permitidos, debe efectuarse a velocidad reducida",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:" Los correajes de seguridad que posean los vehículos determinarán el número de \
        ocupantes que pueden ser transportados en el mismo",
        options: [
            "Verdadero","Falso"
        ],
        correctIndex:0,
        image: undefined
    },

    //58
    {
        text:"¿Cuando hay que usar el cinturon de seguridad?",
        options: [
            "Hay que circular con el mismo abrochado en todos los casos. ",
            " Sólo si se circula a gran velocidad.",
            "Solo en zonas rurales."
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"Quienes deben utilizar el cinturón de seguridad?",
        options: [
            "El conductor",
            " Aquellos que van en la parte delantera del vehículo",
            "Todos los ocupantes"
        ],
        correctIndex:2,
        image: undefined
    },
    {
        text:" En una interseccion, entre una semi autopista y una avenida ¿quien tiene la prioridad de paso?",
        options: [
            " Quien circula por la avenida. ",
            "  Quien circula por una semi autopista. ",
            "El vehiculo de mayor porte. "
        ],
        correctIndex:1,
        image: undefined
    },

    //Preguntas para todas las clases. : Adelantamiento

    {
        text:" ¿Por donde se debe realizar el adelantamiento?",
        options: [
            "Debe hacerse siempre por la izquierda.",
            "Debe hacerse por izquierda, y por la derecha, cuando el vehículo de adelante indique \
            que va a girar o detenerse sobre el lado izquierdo.",
            " Debe hacerse siempre por la derecha."
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:" ¿Se puede realizar una maniobra de adelantamiento al atravesar un túnel o puente en la ruta?",
        options: [
            " Si.",
            "No.",
            " Depende de las circunstancias. "
        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:" ¿Cuando puede producirse el adelantamiento?",
        options: [
            "No puede comenzarse el adelantamiento de un vehículo que previamente ha indicado su \
            intención de hacer lo mismo mediante la señal pertinente. ",
            "Puede hacerse si el vehículo viene a menor velocidad. ",
            "Puede hacerse si el vehículo viene a mayor velocidad."
        ],
        correctIndex:0,
        image: undefined
    },
    {
        text:"¿Quien tiene prioridad de adelantamiento?",
        options: [
            "Cuando varios vehículos marchen encolumnados, la prioridad para adelantarse \
            corresponde al que circula inmediatamente detrás del primero. ",
            "La prioridad le corresponde al último vehículo.",
            "La prioridad le corresponde al primer vehículo que coloque la luz de giro. "
        ],
        correctIndex:0,
        image: undefined
    },
    
    {
        text:"En caso de adelantamiento, ¿cómo se debe advertir al que precede la intención de sobrepasarlo?",
        options:[
            " Por medio de destellos de las luces frontales o la bocina en zona rural. ",
            " En todos los casos, debe utilizar el indicador de giro izquierdo hasta concluir su desplazamiento lateral. ",
            "Accionando la bocina",

        ],
        correctIndex:1,
        image: undefined
    },
    {
        text:" Indique en cuales de las siguientes zonas esta prohibida la maniobra de adelantamiento",
        options:[
            "En puentes",
            " En curvas",
            " En encrucijadas",
            "Todas las respuestas son correctas"
        ],
        correctIndex: 3,
        image: undefined
    },

    //Preguntas para todas las clases: Autopistas

    {
        text:" En una autopista ¿para que debe ser utilizado el carril extremo izquierdo?",
        options:[
            "Para realizar la maniobra de adelantamiento y que circulen los vehiculos de carril",
            "Para circular a la maxima velocidad permitida y realizar la maniobra de adelantamiento",
            "No debe utilizarse, debe estar libre para que circulen los vehiculos de emergencia."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Para atravesar un cruce de vías de circulación el conductor debe",
        options:[
            "Estar preparado para frenar o eventualmente detener su vehículo. ",
            "No detenerse bajo ninguna circunstancia. ",
            "Aumentar la velocidad a los fines de cruzar rápidamente sin obstruir el tránsito. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"Indique en cuales de las siguientes situaciones pierde la prioridad de paso quien cruza por la derecha",
        options:[
            "Se desemboca de una via de tierra a una pavimentada",
            " La señalizacion especifica que indique lo contrario.",
            " Cuando por la via transversal circule un vehiculo de mayor porte. ",
            "Ante vehiculos de emergencia en cumplimiento de su funcion.",
            "Todas las respuestas son correctas. "
        ],
        correctIndex: 4,
        image: undefined
    },
    {
        text:"La mejor garantía de seguridad para conducir en el horario nocturno en ruta es",
        options:[
            "Conducir manteniendo la derecha",
            " Circular respetando la velocidad mínima permitida.",
            "Mantener una velocidad regular. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"En días de Lluvia y conduciendo por la ciudad, debemos...",
        options:[
            " Reducir la velocidad",
            "Mantener la velocidad con la que se estaba conduciendo",
            " Estacionar paralelo al cordón a la espera de que la lluvia cese a efectos de conducir con mayor visibilidad."
        ],
        correctIndex: 0,
        image: undefined
    },

    //Preguntas para todas las clases: Estacionamiento
    {
        text:" Estacionamiento en zona urbana ¿de que lado debe realizarse?",
        options:[
            "Siempre debe realizarse a la derecha de la vía, paralelo a la acera",
            "Puede realizarse en ambos lados",
            "Siempre debe realizarse a la derecha de la vía, paralelo a la acera, salvo señalización en contrario.",
            "Siempre debe realizarse a la izquierda de la vía. "
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"En zona urbana y en estacionamiento paralelo al cordón de la vereda, ¿qué distancia debe haber entre los vehículos?",
        options:[
            "30 cm.",
            "50 cm.",
            "20 cm"
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:" ¿Cuándo puede detenerse y/o estacionar sobre la banquina?",
        options:[
            "Cuando tenga necesidad y por cualquier causa.",
            "Siempre, mientras esté colocada la señalización reglamentaria (balizas)",
            "Sólo cuando ocurra una emergencia colocando la debida señalización"
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:" Estacionar en doble fila está permitido únicamente...",
        options:[
            "En días de lluvia, frente a establecimientos escolares",
            "En días de lluvia, frente a hospitales.",
            "No está permitido el estacionamiento en doble fila. "
        ],
        correctIndex: 2,
        image: undefined
    },
    {
        text:"¿Cómo se debe estacionar en una calle de mano única?: ",
        options:[
            "En el mismo sentido que la circulación del tránsito.",
            "No interesa el sentido si guarda las distancias",
            "No interesa el sentido si lo hace sobre la derecha y guardando las distancias reglamentarias por Ley"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"¿Cuándo está permitido el estacionamiento en rotondas?:",
        options:[
            "Cuando se estaciona sobre el lado izquierdo paralelo al cordón y en el sentido de circulación",
            " Cuando se estaciona sobre el lado derecho. ",
            "No está permitido estacionar en rotondas"
        ],
        correctIndex: 2,
        image: undefined
    },

    //Preguntas para todas las clases: Luces
    {
        text:"Si durante la circulación entra en un “banco de niebla”, Ud. debe...",
        options:[
            "Encender las luces altas. ",
            "Asegurarse que las luces bajas estén encendidas. ",
            "Accionar balizas. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Si durante la circulación entra en un “banco de humo” originado por quema de pastizales o proveniente de fábricas, usted debe:",
        options:[
            "Mantener las luces bajas del vehículo. ",
            "Accionar las balizas y disminuir la velocidad.",
            " Accionar faros antinieblas y encender luces altas para ser mejor divisado"
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:" En una ruta nacional ¿que juego de luces es obligatorio llevar?",
        options:[
            " Luces altas.",
            "Luces bajas.",
            "Luces de posicion"
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" Si decide detenerse por intensa niebla, debe hacerlo...",
        options:[
            "En la banquina, correctamente señalizado.",
            "Alejado de la calzada o banquina lo más lejos posible del camino dejando las luces y balizas encendidas. ",
            "En la banquina, pero con luces delanteras y traseras encendidas. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"¿Cuando deben utilizarse las luces interiores?",
        options:[
            "Siempre pueden utilizarse.",
            "Sólo podrán utilizarse las luces interiores cuando no incidan directamente en la visión del conductor",
            "Podrán utilizarse las luces interiores en pleno viaje y cuando no incidan directamente en la visión del conductor."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"El cambio de luz de alta por baja, ¿a que distancia se debe realizar?",
        options:[
            "El cambio de luz alta por baja debe realizarse a una distancia suficiente a fin de evitar el efecto de encandilamiento.",
            "Puede realizarse en cualquier momento. ",
            "No puede realizarse nunca con un vehículo de frente. "
        ],
        correctIndex: 0,
        image: undefined
    },
    {
        text:"El destello de luces sólo debe usarse...",
        options:[
            "... para advertir una emergencia en la vía pública. ",
            "... en los cruces de vías y para advertir los sobrepasos.",
            "... únicamente en los cruces de vías."
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Las luces intermitentes de emergencias deben usarse para indicar:",
        options:[
            "Detención temporaria en “doble fila”",
            "Detención en peajes, zonas peligrosas o maniobras riesgosas.",
            "Solamente cuando la detención sea para entrar o salir de estacionamientos."
        ],
        correctIndex: 2,
        image: undefined
    },

    // 68
    {
        text:"El uso de luces bajas o alcance medio es obligatorio en zona rural, ruta, carretera autopista o semiautopista",
        options:[
            "Desde el crepúsculo hasta el alba. ",
            " Durante las 24 horas del día sin importar las condiciones climáticas. ",
            " Durante las 24 horas del día sólo si la visibilidad es escasa. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:" El destello de luces sólo debe usarse:",
        options:[
            "Para advertir una emergencia en la vía pública. ",
            "En los cruces de vías y para advertir los sobrepasos",
            " Únicamente en los cruces de vías. "
        ],
        correctIndex: 1,
        image: undefined
    },
    {
        text:"Las luces intermitentes de emergencias deben usarse para indicar:",
        options:[
            "Detención temporaria en “doble fila”. ",
            "Detención en peajes, zonas peligrosas o maniobras riesgosas. ",
            "Solamente cuando la detención sea para entrar o salir de estacionamientos. "
        ],
        correctIndex: 2,
        image: undefined
    },

    {
        text:" Las luces de giro deben encenderse, conforme a sus fines:",
        options:[
            "Aunque la luz natural sea suficiente. ",
            "Sólo en horas nocturnas. ",
            "Sólo en zona urbana sin importar la luz reinante. "
        ],
        correctIndex:0,
        image:undefined
    },

    //Preguntas para todas las clases: Giros y rotondas:
    
    {
        text:"Para realizar un giro o circular en rotondas se debe:",
        options:[
            "Dar prioridad de paso al que circula desde la derecha.",
            "Respetar la señalización.",
            "Dar prioridad de paso al vehículo de mayor porte. "
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿En las vías mano simple se puede girar a la izquierda?",
        options:[
            " No, no se puede girar de ningún modo. ",
            "No, no está permitido salvo señalización que así lo permite. ",
            "Si, se puede realizar ese giro. "
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:" La maniobra de giro puede ser causante de un siniestro si no se efectúa tomando los \
        recaudos necesarios. Para realizar un giro debe respetarse la señalización, y circular: ",
        options:[
            " Lo más próximo posible al vehículo que está por delante disminuyendo la velocidad.",
            "Desde 30 metros antes por el costado más próximo al giro a efectuar.",
            "Desde 50 metros antes por el costado más próximo al giro a efectuar."
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"¿Cómo debe advertir la maniobra de giro?:",
        options:[
            "Mediante la señal luminosa correspondiente y con debida anticipación. ",
            "Sacando el brazo por la ventanilla, con la señal luminosa correspondiente y con la debida anticipación",
            "No es necesario advertir la maniobra"
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿Puede detenerse durante la circulación en rotonda?:",
        options:[
            "Únicamente sobre la derecha con la debida señalización. ",
            "Únicamente sobre la izquierda con la debida señalización. ",
            "No está permitido detenerse. "
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:"Si desea girar a la derecha desde una calle de sentido único, ¿qué maniobra se debe realizar? ",
        options:[
            "Debo acercar el automóvil al centro de la calle y luego girar. ",
            " Debo acercar el automóvil a la derecha y luego girar. ",
            " Debo acercar el automóvil a la izquierda y luego girar"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"En rotonda, ¿tiene prioridad de paso el que circula por ella o el que intenta ingresar?:",
        options:[
            "El que circula por ella. ",
            "El que circula desde la derecha. ",
            "El que intenta ingresar. "
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"Vías multicarriles:",
        options:[
            "La advertencia sobre cambio de carril, mediante la luz de giro, se realizará con una \
            antelación mínima de DIEZ SEGUNDOS (10”).",
            "La advertencia sobre cambio de carril, mediante la luz de giro, se realizará con una \
            antelación mínima de CINCO SEGUNDOS (5”).",
            "La advertencia sobre cambio de carril, mediante la luz de giro, se realizará con una \
            antelación mínima de QUINCE SGUNDOS (15”)."
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:" En el ingreso a una autopista ¿ a quien se debe ceder el paso?",
        options:[
            "En el ingreso a una autopista debe cederse el paso a quienes circulan por ella.",
            " En el ingreso a una autopista debe cederse el paso a quienes circulan por la derecha",
            "En el ingreso a una autopista debe cederse el paso a quienes circulan con mayor velocidad."
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:" En una autopista ¿para que debe ser utilizado el carril extremo izquierdo?",
        options:[
            " Para realizar la maniobra de adelantamiento y que circulen los vehiculos de carril.",
            " Para circular a la maxima velocidad permitida y realizar la maniobra de adelantamiento. ",
            "No debe utilizarse debe estar libre para que circulen los vehiculos de emergencia. "
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Los menores de edad ¿pueden obtener licencia de conducir?",
        options:[
            " Los menores de edad no pueden obtener licencias de conducir",
            " Los menores de edad deberán contar para la obtención de la licencia con una autorización \
            expresa de padre y madre y/o tutor. ",
            " Los menores de edad pueden conducir con autorización expresa de padre o madre. "
        ],
        correctIndex:1,
        image:undefined
    },

    // Preguntas para todas las clases: Señales de Tránsito e indicaciones
    // PAG 71
    {
        text:"Ante una señal de \"pare\" Ud debe:",
        options:[
            "Disminuir la velocidad",
            "Detener por completo el vehículo",
            "Avanzar"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Que indica un semáforo con luz intermitente roja?",
        options:[
            "Que es un cruce riesgoso y efectuar el mismo con precaución.",
            "Que es un cruce riesgoso y detener la marcha",
            "Que se debe girar a la izquierda"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Indique el orden correcto de prioridad normativa",
        options:[
            "Ley vigente, Señales de tránsito, ordenanza",
            "Agente de tránsito, señales de tránsito, ley vigente.",
            "Conductor, Señales de tránsito, Ordenanza"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"La demarcación horizontal, tiene alcance reglamentario?",
        options:[
            " Solo si va acompañada a la señalización vertical.",
            " Si, aunque no exista señal vertical"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Que indica el señalamiento vertical de color azul",
        options:[
            "Restricción",
            "Información ",
            " Prevención"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Que indica el señalamiento vertical con una orla roja",
        options:[
            "Restricción",
            "Información ",
            "Prevención"
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Que indica el señalamiento vertical de color amarillo",
        options:[
            "Restricción",
            "Información ",
            "Prevención"
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:"¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
        options:[
            " Que circule con precaución.",
            "Que detenga el vehículo.",
            "Que continúe avanzando."
        ],
        correctIndex:1,
        image:"agente.jpg"
    },
    {
        text:"Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la \
        presencia de personal policial.",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex:1,
        image:undefined
    },
    {
        text:"Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?",
        options:[
            "Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando",
            "Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad \
            legal para realizar dicha indicación.",
            " No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito."
        ],
        correctIndex:0,
        image:"obrero.jpg"
    },

    {
        text:"Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
        options:[
            "Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
            "Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no \
            tiene la autoridad legal para realizar dicha indicación.",
            "Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea \
            realizada por un agente de tránsito ya que es la única autoridad competente. "
        ],
        correctIndex:0,
        image:"vias2.jpg"
    },
    {
        text:"¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
        options:[
            "Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
            "Nada, no son señales de circulación y es ilegal su colocación",
            " La prohibición de sobrepasar la línea imaginaria que las une."
        ],
        correctIndex:2,
        image:"conos.jpg"
    },
    {
        text:"Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento \
        en la vía, o en zonas próximas a las mismas:",
        options:[
            "Verdadero.",
            "Falso"
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"La señalización transitoria se encuentra como prioridad normativa sobre los semáforos, si \
        es que modifica el régimen normal de uso de la vía. ",
        options:[
            "Verdadero.",
            "Falso."
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿Qué tipo de señal es la siguiente imagen?",
        options:[
            "Reglamentaria.",
            "Transitoria.",
            "Informativa."
        ],
        correctIndex:1,
        image:"sign2.jpg"
    },
    {
        text:"Si al conducir un vehículo se encuentra en una intersección con esta señalización \
        intermitente, ¿qué actitud debe tomar?",
        options:[
            "Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por \
            la arteria que cruza, puedo reiniciarla",
            " Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
            " Efectuar el cruce con máxima precaución."
        ],
        correctIndex:2,
        image:"yellow.jpg"
    },
    {
        text:"Si al conducir un vehículo se encuentra en una intersección con esta señalización \
        intermitente, ¿qué actitud debe tomar?",
        options:[
            "Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
            "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
            "Extremar precauciones al cruzar sin la necesidad de detenerme."
        ],
        correctIndex:0,
        image:"red.jpg"
    },
    {
        text:"Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
        options:[
            "Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso \
            está dada por la luz verde.",
            "No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
            "Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa \
            manera se deja libre la intersección."
        ],
        correctIndex:1,
        image:"ojo.jpg"
    },
    {
        text:"Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no \
        obstante ello, ¿qué precauciones se deben adoptar?",
        options:[
            " No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la \
            circulación transversal.",
            "Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya \
            iniciado.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:"Una indicación puede estar expresada con una señal vertical o con una demarcación \
        horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
        options:[
            "Verdadero",
            "Falso"
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿Qué indica esta demarcación amarilla en la calzada?",
        options:[
            "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
            "Que se debe circular lentamente por su sector central.",
            "Que no se debe circular sobre ella."
        ],
        correctIndex:2,
        image:"isleta.jpg"
    },
    {
        text:"En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
        options:[
            "Son las rotondas",
            "Son los espacios reservados para estacionamiento exclusivo de motovehículos",
            "Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas"
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:"¿Qué significa esta demarcación amarilla en la calzada?",
        options:[
            "Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
            "Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede \
            circular sobre ella.",
            "Significa que sólo pueden circular vehículos particulares."
        ],
        correctIndex:1,
        image:"doubleline.jpg"
    },
    {
        text:"En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
        options:[
            "Que se pueden traspasar.",
            "Que está prohibido traspasarlas",
            "Que es una zona de máximo peligro"
        ],
        correctIndex:0,
        image:"dotted.jpg"
    },
    {
        text:"¿Cuál es la importancia del color de las señales viales?",
        options:[
            "El color es para llamar la atención al conductor de categoría particular. ",
            "El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
            "El color, además de su forma, brinda información al conductor sobre el trayecto de la vía \
            por la cual circula."
        ],
        correctIndex:2,
        image:undefined
    },
    {
        text:"¿Cuáles son las señales preventivas?",
        options:[
            "Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad \
            de la vía que puede resultar sorpresiva o peligrosa a la circulación",
            "Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la \
            vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
            "Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar \
            para el cual están destinadas."
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿Cuál de estas señales comunica “Prevención”?",
        options:[
            "A","B","C"
        ],
        correctIndex:1,
        image:"signs.jpg"
    },
    {
        text:"¿De qué color es la cartelería de Permitido Estacionar?",
        options:[
            "Azul","Blanco","Rojo"
        ],
        correctIndex:0,
        image:undefined
    },
    {
        text:"¿Cuál de estas señales es “Reglamentaria“?",
        options:[
            "A","B","C"
        ],
        correctIndex:2,
        image:"signs.jpg"
    },
    {
        text:"¿Cuál de estas señales es una señal reglamentaria?",
        options:[
            "A","B","C"
        ],
        correctIndex:2,
        image:"signs2.jpg"
    },
    {
        text:"¿Cuál de estas señales es Informativa?",
        options:[
            "A","B","C"
        ],
        correctIndex:0,
        image:"signs3.jpg"
    },
    {
        text:"Indique qué tipo de señal es la que a continuación se muestra:",
        options:[
            "Preventiva.","Reglamentaria.","Informativa."
        ],
        correctIndex:2,
        image:"sign3.jpg"
    },
    {
        text:"¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de \
        una rotonda o pendiente pronunciada?",
        options:[
            "A","B","C"
        ],
        correctIndex:2,
        image:"shapes.jpg"
    },
    {
        text:"¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de \
        estar próximo a una zona afectada por obras?",
        options:[
            "A","B","C"
        ],
        correctIndex:1,
        image:"shapes2.jpg"
    },
    {
        text:"Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que \
        circulen en su proximidad?",
        options:[
            "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
            "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
            "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
        ],
        correctIndex:2,
        image:"ambu.jpg"
    },
    {
        text:"El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se \
        aproxima un vehículo en emergencia.",
        options:[
            "Verdadero.","Falso."
        ],
        correctIndex:0,
        image:"e2.jpg"
    },
    {
        text:"Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se \
        aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
        options:[
            "Ambos hacia su derecha",
            "El único que debería apartarse es el auto 2 hacia su derecha.",
            "El auto 1 hacia su izquierda y el 2 hacia su derecha."
        ],
        correctIndex:2,
        image:"emergencia.jpg"
    },
    {
        text:"Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se \
        aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
        options:[
            "El único que debería apartarse es el auto 2 hacia su derecha.",
            "Todos hacia su derecha.",
            " El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha."
        ],
        correctIndex:2,
        image:"emergencia2.jpg"
    },
    {
        text:"Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que \
        circulen en su proximidad? ",
        options:[
            "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
            "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
            "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
        ],
        correctIndex:2,
        image:"emergencia3.jpg"
    },
    {
        text:"Indique cual es la correcta:",
        options:[
            "Puesto sanitario",
            "Emergencias",
            "Policía"
        ],
        correctIndex:0,
        image:"sign4.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Detención transporte público.",
            "Terminal ómnibus",
            "Punto panorámico"
        ],
        correctIndex:1,
        image:"sign5.jpg"
    },
    {
        text:" La siguiente señal indica:",
        options:[
            "Hotel ",
            "Hospital",
            "Zona de descanso"
        ],
        correctIndex:0,
        image:"sign6.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Maquinaria especial",
            "Hombres trabajando",
            "Equipo pesado en la vía "
        ],
        correctIndex:2,
        image:"sign7.jpg"
    },
    {
        text:" La siguiente señal indica:",
        options:[
            "Permitido girar derecha",
            "Dirección permitida derecha",
            "Circulación obligatoria"
        ],
        correctIndex:0,
        image:"sign8.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "No avanzar",
            "Contramano",
            "Prohibido adelantar"
        ],
        correctIndex:0,
        image:"sign9.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Incorporación de tránsito lateral",
            "Inicio doble mano",
            "Ascenso y descenso."
        ],
        correctIndex:1,
        image:"sign10.jpg"
    },
    {
        text:"La siguiente señal indica",
        options:[
            "No estacionar",
            "No estacionar ni detenerse ",
            "Prohibición de circular autos."
        ],
        correctIndex:1,
        image:"sign11.jpg"
    },

    //pag 90

    {
        text:"La siguiente señal indica:",
        options:[
            "Puente angosto",
            "Estrechamiento (en sus dos manos)",
            "Estrechamiento (en una sola mano)"
        ],
        correctIndex:0,
        image:"sign12.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Incorporación de tránsito lateral",
            "Inicio doble mano",
            "Ascenso y descenso."
        ],
        correctIndex:1,
        image:"sign10.jpg"
    },
    {
        text:"La siguiente señal indica: ",
        options:[
            "Paneles de prevención",
            "Cruce ferroviario",
            "Curva cerrada"
        ],
        correctIndex:0,
        image:"sign13.jpg"
    },
    {
        text:" La siguiente señal indica:",
        options:[
            "camino sinuoso  ",
            "Camino en ascenso",
            "Curva en “S”"
        ],
        correctIndex:0,
        image:"sign14.jpg"
    },
    {
        text:" La siguiente señal indica:",
        options:[
            "Paso obligatorio",
            "Giro obligatorio derecha",
            "Sentido circulación (derecha) "
        ],
        correctIndex:2,
        image:"sign15.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Vientos fuertes laterales",
            "Derrumbes",
            "Proyección de piedras"
        ],
        correctIndex:2,
        image:"sign16.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Puente móvil",
            "Inicio de calzada dividida",
            "Túnel"
        ],
        correctIndex:1,
        image:"sign17.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "incorporación de tránsito lateral",
            "encrucijada ",
            "Doble camino "
        ],
        correctIndex:1,
        image:"sign18.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "Puesto sanitario",
            "Bomberos",
            "Policia "
        ],
        correctIndex:2,
        image:"sign19.jpg"
    },
    {
        text:"La siguiente señal indica:",
        options:[
            "curva cerrada",
            "camino sinuoso",
            " permitido girar a la izquierda"
        ],
        correctIndex:2,
        image:"sign20.jpg"
    }, 

    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "camino sinuoso ",
            "curva común",
            "Curva en “S” \n"
        ],
        "image": "sign21.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "No estacionar.",
            "No estacionar ni detenerse.",
            "Prohibición de circular autos. \n"
        ],
        "image": "sign22.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Incorporación de tránsito lateral.",
            "Inicio doble mano",
            "encrucijada\n"
        ],
        "image": "sign23.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Hotel. ",
            "Campamento. ",
            "Punto panorámico.\n"
        ],
        "image": "sign24.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Estacionamiento de casas rodantes",
            "Campamento",
            "Punto panorámico. \n"
        ],
        "image": "sign25.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Límite de velocidad mínima",
            "Límite de velocidad máxima",
            "Limitación largo vehículo\n"
        ],
        "image": "sign26.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Límite de velocidad mínima",
            "Límite de velocidad máxima",
            "Limitación largo vehículo\n"
        ],
        "image": "sign27.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Límite de velocidad mínima",
            "Límite de velocidad máxima",
            "Limitación largo vehículo \n"
        ],
        "image": "sign28.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Escolares",
            "Niños",
            "Zona de deportes\n"
        ],
        "image": "sign29.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Prohibición de circular camión",
            "Prohibición de circular carro de mano",
            "Prohibición de circular acoplado \n"
        ],
        "image": "sign30.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Prohibición de circular camión",
            "Prohibición de circular carro de mano",
            "Prohibición de circular acoplado\n"
        ],
        "image": "sign31.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Prohibición de circular camión",
            "Prohibición de circular carro de mano",
            "Prohibición de circular acoplado\n"
        ],
        "image": "sign32.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Escolares",
            "Niños",
            "Hombres trabajando\n"
        ],
        "image": "sign33.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Zona de montaña",
            "Niños",
            "Hombres trabajando\n"
        ],
        "image": "sign34.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Vallas tipo dos",
            "Desvío",
            "Delineadores\n"
        ],
        "image": "sign35.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Vallas",
            "Tambores",
            "Delineadores\n"
        ],
        "image": "sign36.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Vallas",
            "Tambores",
            "Delineadores\n"
        ],
        "image": "sign37.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 0,
        "options": [
            "Ruta panamericana",
            "Ruta nacional",
            "Ruta provincial\n"
        ],
        "image": "sign38.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Ruta panamericana",
            "Ruta nacional",
            "Ruta provincial\n"
        ],
        "image": "sign39.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 2,
        "options": [
            "Ruta panamericana",
            "Ruta nacional",
            "Ruta provincial\n"
        ],
        "image": "sign40.jpg"
    },
    {
        "text": "La siguiente señal indica:",
        "correctIndex": 1,
        "options": [
            "Estación de servicio",
            "Gomería",
            "Policía\n"
        ],
        "image": "sign41.jpg"
    },
    {
        "text": "La siguiente señal indica",
        "correctIndex": 0,
        "options": [
            "Limitación de altura",
            "Limitación de ancho",
            "Limitación de largo de vehículo\n"
        ],
        "image": "sign42.jpg"
    },
    {
        "text": "La siguiente señal indica",
        "correctIndex": 0,
        "options": [
            "Limitación de peso",
            "Limitación de peso por eje",
            "Limitación de altura\n"
        ],
        "image": "sign43.jpg"
    },
    {
        "text": "La siguiente señal indica",
        "correctIndex": 1,
        "options": [
            "Limitación de peso",
            "Limitación de peso por eje",
            "Limitación de altura\n"
        ],
        "image": "sign44.jpg"
    },
    {
        "text": "Las señales reglamentarias son redondas, blancas y con bordes rojos",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Si nos encontramos ante un cuadrado o rectángulo azul o verde se trata de:",
        "correctIndex": 2,
        "options": [
            "una señal reglamentaria",
            "una señal preventiva",
            "una señal de información y orientación\n"
        ]
    },
    {
        "text": "Las señales redondas, blancas y con bordes rojos son señales de prevención.",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Violar o hacer caso omiso a una señal de prevención implica una sanción por parte de\nla autoridad competente.",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Violar o hacer caso omiso a una señal de información no conlleva a cometer una\ninfracción.",
        "correctIndex": 0,
        "options": [
            "V",
            "F\n"
        ]
    },
    {
        "text": "Las señales reglamentarias son normas de cumplimiento obligatorio",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Las señales informativas nos alertan o advierten una cuestión determinada",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Todas las señales (salvo luces) deben ser retroreflectivas",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Las señales reglamentarias son cuadradas con diagonal vertical y amarillas",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
        "correctIndex": 2,
        "options": [
            "El vehículo A, ya que está circulando por la derecha",
            "Los vehículos B, ya que son varios los que circulan por esa calle.",
            "El vehículo A, ya que está saliendo del paso a nivel ferroviario.\n"
        ],
        "image": "prioridad4.jpg"
    },
    {
        "text": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad\nde paso?",
        "correctIndex": 1,
        "options": [
            "El vehículo A.",
            "El vehículo B.\n"
        ],
        "image": "prioridad5.jpg"
    },
    {
        "text": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
        "correctIndex": 0,
        "options": [
            "Los vehículos que circulan por la calle A.",
            "Los vehículos que circulan por la calle B.\n"
        ],
        "image": "prioridad6.jpg"
    },
    {
        "text": "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
        "correctIndex": 0,
        "options": [
            "El vehículo A porque circula por una avenida.",
            "El vehículo B porque circula por la derecha.",
            "Es indistinto ya que es una esquina sin semáforo.\n"
        ],
        "image": "prioridad7.jpg"
    },
    {
        "text": "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta\nseñal?",
        "correctIndex": 1,
        "options": [
            "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que\nse va a incorporar.",
            "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
            "Avanzar\n"
        ],
        "image": "pare2.jpg"
    },
    {
        "text": "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
        "correctIndex": 1,
        "options": [
            "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que\nse va a incorporar.",
            "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
            "Avanzar.\n"
        ],
        "image": "pare3.jpg"
    },
    {
        "text": "Estas señales son las únicas que indican que se pierde la prioridad de paso en una\nbocacalle sin semáforo.",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "False\n"
        ],
        "image": "paso.jpg"
    },
    {
        "text": "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin\nsemáforos?",
        "correctIndex": 2,
        "options": [
            "Los vehículos de transporte de pasajero.",
            "El vehículo de menor tamaño.",
            "El vehículo que se presenta por el lado derecho.\n\n"
        ]
    },
    {
        "text": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
        "correctIndex": 1,
        "options": [
            "Al automóvil.",
            "Al colectivo.",
            "Es indistinto\n"
        ],
        "image": "prioridad8.jpg"
    },
    {
        "text": "Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo\nseñalado?",
        "correctIndex": 0,
        "options": [
            "Debe ceder el paso al vehículo que circula en el sentido contrario.",
            "Tiene prioridad de paso sobre el otro vehículo.",
            "La normativa no establece prioridad de paso ante esta situación.\n"
        ],
        "image": "bloqueo.jpg"
    },
    {
        "text": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
        "correctIndex": 1,
        "options": [
            "Al vehículo A, ya que circula por la derecha.",
            "Al vehículo B, ya que circula por una avenida.",
            "Es indistinto.\n"
        ],
        "image": "paso2.jpg"
    },
    {
        "text": "¿Quién tiene prioridad de paso en una rotonda?",
        "correctIndex": 2,
        "options": [
            "El vehículo que circule por la derecha.",
            "El vehículo que pretende acceder a la rotonda.",
            "El vehículo que se encuentra dentro de la calzada circular.\n"
        ]
    },
    {
        "text": "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
        "correctIndex": 1,
        "options": [
            "El vehículo A.",
            "El vehículo B.",
            "Es indistinto.\n"
        ],
        "image": "paso3.jpg"
    },
    {
        "text": "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y\ncon un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la\nprioridad de paso?",
        "correctIndex": 1,
        "options": [
            "El vehículo que desciende.",
            "El vehículo que asciende.",
            "No hay prioridad, cualquiera de ellos\n"
        ]
    },
    {
        "text": "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
        "correctIndex": 1,
        "options": [
            "El vehículo A.",
            "El vehículo B.\n"
        ],
        "image": "paso4.jpg"
    },
    {
        "text": "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde\nel lugar donde estaban estacionados o desde un garaje?",
        "correctIndex": 1,
        "options": [
            "Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
            "Cuando el tránsito se encuentra interrumpido por cualquier razón.",
            "Nunca, independientemente de cómo se encuentre el tránsito vehicular.\n"
        ]
    },
    {
        "text": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los\notros vehículos que están circulando por esta arteria?",
        "correctIndex": 0,
        "options": [
            "No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
            "Sí, porque se encuentra a la derecha.",
            "Sí, porque señalizó su maniobra.\n"
        ],
        "image": "paso5.jpg"
    },
    {
        "text": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los\notros vehículos que están detenidos en la arteria?",
        "correctIndex": 1,
        "options": [
            "No. La prioridad es de los otros vehículos, independientemente si están detenidos o\ncirculando.",
            "Sí, porque se encuentra el tránsito detenido y deben cederle el paso.",
            "No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en\nintersecciones no semaforizadas.\n"
        ],
        "image": "paso6.jpg"
    },
    {
        "text": "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
        "correctIndex": 1,
        "options": [
            "Sí, salvo que se acerque un vehículo en el sentido contrario.",
            "No, ya que está prohibido por la demarcación horizontal.",
            "Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido\ncontrario está lejos\n"
        ],
        "image": "sobrepaso.jpg"
    },
    {
        "text": "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
        "correctIndex": 2,
        "options": [
            "Los vehículos A y B.",
            "Los vehículos A y C.",
            "Los vehículos B y C.\n"
        ],
        "image": "infraccion.jpg"
    },
    {
        "text": "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene\nprioridad?",
        "correctIndex": 1,
        "options": [
            "El vehículo A.",
            "El vehículo B.\n"
        ],
        "image": "cambio.jpg"
    },
    {
        "text": "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de\ncarril?",
        "correctIndex": 0,
        "options": [
            "El vehículo que circula por el carril que se pretende ocupar.",
            "El vehículo que realiza el cambio de carril.",
            "El vehículo del carril más lento.\n"
        ],
        "image": "cambio2.jpg"
    },
    {
        "text": "Es obligatorio al finalizar un adelantamiento...",
        "correctIndex": 1,
        "options": [
            "Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
            "Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin\nobstaculizar la fluidez de tránsito.",
            "Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar\nsu velocidad.\n"
        ]
    },
    {
        "text": "¿Cuál de estos carriles es el llamado “”carril de sobrepaso””?",
        "correctIndex": 1,
        "options": [
            "Cualquiera de ellos.",
            "Sólo el carril señalado como A.",
            "Sólo el carril señalado como F.\n"
        ],
        "image": "carril.jpg"
    },
    {
        "text": "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para\nsobrepasar a otro vehículo que transita más lento.",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él\nuna situación de peligro, ¿qué debe hacer el conductor del vehículo B?",
        "correctIndex": 1,
        "options": [
            "Aumentar la velocidad para que realice la maniobra detrás suyo.",
            "Reducir la velocidad para facilitarle el retorno al carril.",
            "Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra\n"
        ],
        "image":"b116.jpg"
    },
    {
        "text": "En este tramo de la vía no se puede realizar un sobrepaso",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "Falso\n"
        ],
        "image": "sobrepaso2.jpg"
    },
    {
        "text": "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
        "correctIndex": 1,
        "options": [
            "A) Circular por la banquina.",
            "B) Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir\nla velocidad.",
            "Ambas respuestas, A y B, son correctas.\n"
        ]
    },
    {
        "text": "¿Está permitido sobrepasar a otro vehículo en este lugar?",
        "correctIndex": 1,
        "options": [
            "Sí, salvo que haya una señal que indique lo contrario.",
            "No, está prohibido por normativa.",
            "Sólo en el caso de que no perjudique la circulación de otros vehículos."
        ],
        "image": "tunel.jpg"
    },
    {
        "text": "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar\nel sobrepaso?",
        "correctIndex": 2,
        "options": [
            "El que lo intente primero.",
            "El último de la fila.",
            "El que circula más próximo al vehículo que se desea sobrepasar.\n"
        ]
    },
    {
        "text": "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
        "correctIndex": 2,
        "options": [
            "El vehículo A.",
            "El vehículo B.",
            "El vehículo C.\n"
        ],
        "image": "prioridad9.jpg"
    },
    {
        "text": "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante\nsuyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea\ncontinuar en línea recta?",
        "correctIndex": 0,
        "options": [
            "Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por\nlos espejos retrovisores.",
            "Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos\nretrovisores.",
            "Tocarle bocina para indicarle que debe seguir\n"
        ]
    },
    {
        "text": "¿Se puede traspasar la siguiente señal horizontal?",
        "correctIndex": 0,
        "options": [
            "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro\nvehículo.",
            "Sólo cuando la vía tiene dos carriles por sentido de circulación.",
            "No, porque indica prohibición de sobrepaso.\n"
        ],
        "image": "linea.jpg"
    },
    {
        "text": "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
        "correctIndex": 2,
        "options": [
            "A. Donde la delimitación de carriles es de trazo continuo.",
            "B. En curvas, encrucijadas, pasos a nivel o puentes.",
            "C. Ambas respuestas, A y B, son correctas.\n"
        ]
    },
    {
        "text": "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
        "correctIndex": 1,
        "options": [
            "A. Sí, cuando no haya señal que lo prohíba.",
            "B. No, ya que está prohibido por normativa.",
            "C. Sí, si hay suficiente visibilidad.\n"
        ]
    },
    {
        "text": "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un\nsobrepaso?",
        "correctIndex": 0,
        "options": [
            "A. Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún\nvehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
            "B. Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
            "C. Ambas respuestas, A y B, son correctas\n"
        ]
    },
    {
        "text": "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
        "correctIndex": 1,
        "options": [
            "A. Sí, salvo que haya una señal que indique lo contrario.",
            "B. No, está prohibido por normativa.",
            "C. Sólo si no se perjudica la circulación de otros vehículos.\n"
        ],
        "image": "puente.jpg"
    },
    {
        "text": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
        "correctIndex": 0,
        "options": [
            "A. Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no \ntraspasarla y si es discontinua está permitido hacerlo.",
            "B. Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no\ntraspasarla y si es continua está permitido hacerlo.",
            "C. No debe traspasarse ninguna de ellas.\n"
        ],
        "image": "via.jpg"
    },
    {
        "text": "¿Qué indica esta demarcación amarilla en la calzada?",
        "correctIndex": 1,
        "options": [
            "A. Indica que se puede traspasar.",
            "B. Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
            "C. Que es una zona que se puede circular sobre ella\n"
        ],
        "image": "via2.jpg"
    },
    {
        "text": "El carril de sobrepaso en una autopista sirve para...",
        "correctIndex": 2,
        "options": [
            "A. Circular por él cuando a la derecha existe otro carril disponible.",
            "B. Circular por él siempre que se conduzca a la mayor velocidad permitida.",
            "C. Realizar maniobras de sobrepaso.\n"
        ]
    },
    {
        "text": "¿A qué se denomina “carril de aceleración”?",
        "correctIndex": 0,
        "options": [
            "A. Es el carril de incorporación a una autopista.",
            "B. Es el carril derecho de una autopista.",
            "C. Es el carril izquierdo de una autopista.\n"
        ]
    },
    {
        "text": "El vehículo señalado con un círculo rojo, ¿circula correctamente?",
        "correctIndex": 2,
        "options": [
            "A. Sí, porque en esta vía las luces deben estar encendidas.",
            "B. Sí, ya que mantiene una distancia prudencial respecto del resto de los vehículos.",
            "C. No, dado que está circulando por la banquina.\n"
        ],
        "image": "via3.jpg"
    },
    {
        "text": "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo\ncuando el flujo vehicular esté absolutamente congestionado.",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "via4.jpg"
    },
    {
        "text": "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene\nsemáforo.",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "wtf.jpg"
    },
    {
        "text": "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en\nlínea recta, de modo que:",
        "correctIndex": 2,
        "options": [
            "A. Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y\nefectuar el giro.",
            "B. Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
            "C. Ambas respuestas, A y B, son incorrectas.\n"
        ],
        "image": "oops.jpg"
    },
    {
        "text": "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
        "correctIndex": 2,
        "options": [
            "A. 30 km/h.",
            "B. 40 km/h.",
            "C. 20 km/h.\n"
        ],
        "image": "calle2.jpg"
    },
    {
        "text": "Según las normas generales, ¿cuál es la velocidad máxima permitida para un automóvil\nparticular en esta avenida?",
        "correctIndex": 2,
        "options": [
            "A. 40 km/h.",
            "B. 70 km/h.",
            "C. 60 km/h.\n"
        ],
        "image": "av.jpg"
    },
    {
        "text": "¿Cuál es la velocidad máxima permitida para un automóvil particular en este tramo de la\navenida?",
        "correctIndex": 2,
        "options": [
            "A. 60 km/h.",
            "B. 50 km/h.",
            "C. 40 km/h.\n"
        ],
        "image": "av2.jpg"
    },
    {
        "text": "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla\nen el momento del sobrepaso.",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
        "correctIndex": 1,
        "options": [
            "A. 40 km/h.",
            "B. 20 km/h.",
            "C. 30 km/h.\n"
        ],
        "image": "slow.jpg"
    },
    {
        "text": "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la\nvelocidad?",
        "correctIndex": 1,
        "options": [
            "A. Poco antes de abandonar la misma.",
            "B. Cuando se haya entrado en el carril de desaceleración.",
            "C. Cuando se ingresa a la nueva vía de circulación.\n"
        ]
    },
    {
        "text": "Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima\npermitida en las semiautopistas?",
        "correctIndex": 0,
        "options": [
            "A. 40 km/h.",
            "B. 50 km/h.",
            "C. 60 km/h.\n"
        ]
    },
    {
        "text": "¿Qué se conoce como velocidad precautoria?",
        "correctIndex": 0,
        "options": [
            "A. A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que\npermite mantener el total dominio del vehículo sin generar riesgo.",
            "B. La circulación a la velocidad mínima establecida para una vía.",
            "C. La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas.\n"
        ]
    },
    {
        "text": "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos,\n¿cuál es el límite superior de velocidad precautoria que deben respetar?",
        "correctIndex": 1,
        "options": [
            "A. 20 kilómetros por hora.",
            "B. 40 kilómetros por hora.",
            "C. 30 kilómetros por hora.\n"
        ],
        "image": "slow3.jpg"
    },
    {
        "text": "¿A qué se denomina “distancia de seguridad”?",
        "correctIndex": 0,
        "options": [
            "A. A la distancia mínima que se debe mantener con el vehículo que circula adelante para\ntener un mayor margen de reacción y en caso de frenada repentina no se colisione con\nél.",
            "B. A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para\nrealizar un sobrepaso seguro.",
            "C. A la distancia que recorre el vehículo desde que el conductor percibe una situación de\npeligro hasta que acciona el freno.\n"
        ]
    },
    {
        "text": "¿Cuál es la “distancia mínima de seguridad” a la que debe circular el vehículo A con\nrespecto al B?",
        "correctIndex": 0,
        "options": [
            "A. A una diferencia de dos segundos.",
            "B. A una distancia de 2 metros.",
            "C. No existe una determinada. Sólo está prohibido circular inmediatamente detrás, sin\ndejar distancia.\n"
        ],
        "image": "slow4.jpg"
    },
    {
        "text": "¿A qué se denomina “tiempo de reacción”?",
        "correctIndex": 2,
        "options": [
            "A. Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
            "B. Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
            "C. Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una\ndecisión.\n"
        ]
    },
    {
        "text": "¿A qué se denomina “distancia de reacción”?",
        "correctIndex": 2,
        "options": [
            "A. A la distancia que recorre un vehículo hasta su detención.",
            "B. A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar.",
            "C. A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta\nque toma una decisión.\n"
        ]
    },
    {
        "text": "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿Qué relación existe entre la velocidad y el campo visual del conductor?",
        "correctIndex": 0,
        "options": [
            "A. A mayor velocidad, menor campo visual.",
            "B. A menor velocidad, menor campo visual.",
            "C. A mayor velocidad, mayor campo visual.\n"
        ]
    },
    {
        "text": "Los excesos de velocidad...",
        "correctIndex": 2,
        "options": [
            "A. En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los\nvehículos.",
            "B. Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
            "C. Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de\ncirculación.\n"
        ]
    },
    {
        "text": "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de\nminimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de\ncombustible en un vehículo.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "Circular a mayor velocidad de la precautoria implica que aumenten las posibilidades de\nque un siniestro vial sea más grave.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?",
        "correctIndex": 1,
        "options": [
            "A. Aumentar la velocidad gradualmente antes de ingresar en la curva.",
            "B. Desacelerar antes de ingresar a la curva.",
            "C. Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella.\n"
        ],
        "image": "via5.jpg"
    },
    {
        "text": "Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:",
        "correctIndex": 1,
        "options": [
            "A. Usar el freno de mano.",
            "B. Desacelerar (no frenar).",
            "C. Accionar fuertemente el pedal de freno.\n"
        ]
    },
    {
        "text": "Si ve esta señal mientras conduce, usted debe…",
        "correctIndex": 0,
        "options": [
            "A. Reducir la velocidad del vehículo",
            "B. Incrementar la velocidad del vehículo",
            "C. Dar vuelta a la izquierda y después a la derecha\n"
        ],
        "image": "sign45.jpg"
    },
    {
        "text": "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
        "correctIndex": 0,
        "options": [
            "A. Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
            "B. Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
            "C. Se indica al resto de los conductores, la precaución sobre la aproximación de trenes,\ncolocando balizas.\n"
        ],
        "image": "sign46.jpg"
    },
    {
        "text": "¿El vehículo de la imagen se encuentra en infracción?",
        "correctIndex": 2,
        "options": [
            "A. Sí, salvo que el propietario del vehículo sea el mismo que el de la vivienda.",
            "B. No, ya que hay espacio suficiente para el paso del peatón.",
            "C. Ambas respuestas, A y B, son incorrectas.\n"
        ],
        "image": "obstaculo.jpg"
    },
    {
        "text": "El vehículo con la oblea universal de discapacidad que se muestra en esta imagen, ¿se\nencuentra en infracción?",
        "correctIndex": 1,
        "options": [
            "A. No, ya que al portar la oblea universal de discapacidad tiene libre estacionamiento y por\nello puede estacionar en este lugar.",
            "B. Sí. Todo vehículo tiene prohibido estacionar en este sector ya que pone en riesgo a\npasajeros y peatones.\n"
        ],
        "image": "parked.jpg"
    },
    {
        "text": "¿Es correcta la detención del vehículo en este sector?",
        "correctIndex": 2,
        "options": [
            "A. Sí, ya que se encuentra con balizas encendidas.",
            "B. Sí, porque sólo está prohibido el estacionamiento.",
            "C. No, ya que tanto la detención como el estacionamiento en este sector se encuentra\nprohibido.\n"
        ],
        "image": "parked2.jpg"
    },
    {
        "text": "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de\nuna esquina?",
        "correctIndex": 1,
        "options": [
            "A. La línea peatonal.",
            "B. La línea imaginaria de prolongación de ochava.",
            "C. La línea de edificación transversal.\n"
        ]
    },
    {
        "text": "Como norma general, frente a esta señal, ¿está permitido detenerse para el ascenso o\ndescenso de pasajeros?",
        "correctIndex": 1,
        "options": [
            "A. No. Está prohibido estacionar y detenerse.",
            "B. Sí. Sólo está prohibido estacionar pero no detenerse.",
            "C. Según la hora en que quiera realizarse la detención.\n"
        ],
        "image": "e.jpg"
    },
    {
        "text": "Encender las balizas permite detenerse en doble fila por un lapso de tiempo, entre 2 y 5\nminutos",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿Está permitida la acción que se presenta en la siguiente imagen?",
        "correctIndex": 2,
        "options": [
            "A. Sí, porque tiene las balizas encendidas y no necesita permanecer más de 5 minutos para \nque descienda un pasajero.",
            "B. Sí, porque la doble fila está permitida cuando se trata de ascenso y descenso de\npasajeros.",
            "C. No, ya que la doble fila está permitida sólo como detención previa a la maniobra de\nestacionamiento.\n"
        ],
        "image": "lazy.jpg"
    },
    {
        "text": "¿Este vehículo se encuentra bien estacionado?",
        "correctIndex": 2,
        "options": [
            "A. Sí. Al no estar el cordón pintado de amarillo, está habilitado a estacionarse y detenerse.",
            "B. Sí. Al no estar el cordón pintado de rojo, está habilitado a estacionarse pero no a\ndetenerse.",
            "C. No, porque debería estar más alejado del cordón (a 20 cm de él).\n"
        ],
        "image": "parked3.jpg"
    },
    {
        "text": "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
        "correctIndex": 1,
        "options": [
            "A. Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en\nposición de estacionamiento en el caso de tener caja automática.",
            "B. Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en\nposición de estacionamiento en el caso de tener caja automática.",
            "C. Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento\nen el caso de tener caja automática.\n"
        ],
        "image": "parked4.jpg"
    },
    {
        "text": "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
        "correctIndex": 0,
        "options": [
            "A. Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en\nposición de estacionamiento en el caso de tener caja automática.",
            "B. Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática.",
            "C. Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento\nen el caso de tener caja automática.\n"
        ],
        "image": "parked5.jpg"
    },
    {
        "text": "¿Está permitido circular marcha atrás en Provincia de Buenos Aires?",
        "correctIndex": 0,
        "options": [
            "A. No, salvo que se realice para estacionar, entrar o salir de un garaje (cuando no exista\notra posibilidad) o salvar algún obstáculo.",
            "B. Sí, se puede realizar en cualquier ocasión pero el trayecto para circular debe ser de\npocos metros. C. Sí, siempre que se realice antes de llegar a la mitad de la cuadra y\nasegurándose de no poner en riesgo al resto de los vehículos\n"
        ]
    },
    {
        "text": "Cuando un conductor realiza marcha atrás, ¿qué distancia puede recorrer?",
        "correctIndex": 2,
        "options": [
            "A. No debe superar la mitad de una cuadra.",
            "B. No más de 20 metros.",
            "C. El recorrido mínimo e indispensable, siempre que se trate de una maniobra de\nestacionamiento.\n"
        ]
    },
    {
        "text": "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría\nestar indicando el conductor?",
        "correctIndex": 1,
        "options": [
            "A. Que el vehículo circula lentamente.",
            "B. Que el vehículo próximamente ingresará a un garage o se detendrá.",
            "C. Que el vehículo realizará un giro en la próxima intersección.\n"
        ],
        "image": "abouttopark.jpg"
    },
    {
        "text": "¿Qué indica el uso de este tipo de luces?",
        "correctIndex": 2,
        "options": [
            "A. Cuando se utilizan por separado sirven para preanunciar maniobras.",
            "B. Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se\nestá por detener.",
            "C. Ambas respuestas, la A y la B, son correctas.\n"
        ],
        "image": "abouttopark.jpg"
    },
    {
        "text": "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra,\nutilizando las luces correctas.",
        "correctIndex": 0,
        "options": [
            "Sí",
            "No\n"
        ],
        "image": "abouttopark.jpg"
    },
    {
        "text": "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
        "correctIndex": 2,
        "options": [
            "A. Con la luz de giro hacia el lado donde se irá a ingresar.",
            "B. Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
            "C. Con las luces intermitentes (balizas).\n"
        ]
    },
    {
        "text": "¿Son válidas este tipo de señas?",
        "correctIndex": 0,
        "options": [
            "A. Como acompañamiento al uso de balizas y/o en caso de emergencia.",
            "B. Nunca.",
            "C. Sólo cuando se utilicen en calles.\n"
        ],
        "image": "handsign.jpg"
    },
    {
        "text": "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su\nmaniobra utilizando la luz de giro correspondiente por lo menos...",
        "correctIndex": 2,
        "options": [
            "A. 20 metros antes de realizar la maniobra.",
            "B. 10 metros antes de realizar la maniobra.",
            "C. 30 metros antes de realizar la maniobra.\n"
        ]
    },
    {
        "text": "Para realizar correctamente un giro en una intersección se debe indicar...",
        "correctIndex": 1,
        "options": [
            "A. Tocando bocina.",
            "B. Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
            "C. Utilizando ambos giros, metros antes de llegar a la intersección.\n"
        ]
    },
    {
        "text": "Circular con la luz alta encendida está prohibido en zonas urbanas.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "El vehículo, señalado con un círculo rojo, circula utilizando las luces correctas",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "dark.jpg"
    },
    {
        "text": "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de\ncirculación?",
        "correctIndex": 0,
        "options": [
            "A. Que está circulando en mí mismo sentido.",
            "B. Que está circulando en el sentido contrario al mío.",
            "C. No indican sentido de circulación sino que está descompuesto.\n"
        ],
        "image": "sentido.jpg"
    },
    {
        "text": "¿Para qué sirven estas luces intermitentes?",
        "correctIndex": 1,
        "options": [
            "A. Para advertir a los demás conductores, frente a malas condiciones climáticas, que el\nvehículo circula a baja velocidad.",
            "B. Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido\no próximo a una maniobra de detención, estacionamiento o emergencia.",
            "C. Ambas respuestas, A y B, son correctas.\n"
        ],
        "image": "abouttopark.jpg"
    },
    {
        "text": "Si al circular por la siguiente arteria, se ve obligado a detener en la banquina, ¿qué luces\ndebe colocar?",
        "correctIndex": 1,
        "options": [
            "A. Luces altas y giro.",
            "B. Luces reglamentarias y balizas.",
            "C. Luces antinieblas\n"
        ],
        "image": "detener.jpg"
    },
    {
        "text": "¿está permitido colocar a un automóvil particular luces adicionales?",
        "correctIndex": 0,
        "options": [
            "A. Está permitido el agregado de dos faros rompeniebla y de hasta dos faros elevados con\nluces de freno.",
            "B. Sí. Se puede agregar las luces que se deseen ya que cuanto más capacidad de iluminación\ntenga el vehículo, mejor visibilidad tendrá el conductor.",
            "C. No, está prohibido agregar cualquier tipo de luz adicional. Sólo se podrá reponer las que\ntraiga de fábrica, en caso de destrucción.\n"
        ]
    },
    {
        "text": "El sistema de luces que posee un vehículo, además de iluminar, brinda información que\npermite la comunicación entre vehículos y también peatones.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿A qué se denomina “aquaplaning”?",
        "correctIndex": 1,
        "options": [
            "A. Cuando la cantidad de agua caída en una lluvia es abundante.",
            "B. A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada\nen el pavimento, que es mayor a la cantidad que se puede expulsar a través de los\ndibujos de los neumáticos.",
            "C. Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna.\n"
        ]
    },
    {
        "text": "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
        "correctIndex": 1,
        "options": [
            "A. Debería circular a la mitad de la velocidad máxima establecida por Ley.",
            "B. Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de\ncirculación.",
            "C. Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que\ncircula.\n"
        ],
        "image": "rain.jpg"
    },
    {
        "text": "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
        "correctIndex": 0,
        "options": [
            "Aquaplaning.",
            "Off tracking.\n"
        ],
        "image": "rain.jpg"
    },
    {
        "text": "Cuando hay agua en el camino, debe reducir su velocidad para evitar…",
        "correctIndex": 2,
        "options": [
            "A. Desgastar las llantas.",
            "B. Sobrecalentar las llantas.",
            "C. El aquaplaning.\n"
        ]
    },
    {
        "text": "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
        "correctIndex": 1,
        "options": [
            "A. No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
            "B. Sí, porque al mojarse pueden no funcionar eficazmente.",
            "C. No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada\nresbaladiza.\n"
        ]
    },
    {
        "text": "Frente a esta condición climática, ¿se deben encender las luces bajas?",
        "correctIndex": 0,
        "options": [
            "A. Sí, siempre que está disminuida la visibilidad.",
            "B. No, porque las luces sólo deben utilizarse por la noche.",
            "C. Sí, pero sólo en rutas.\n"
        ],
        "image": "fog.jpg"
    },
    {
        "text": "Al conducir por un largo lapso de tiempo y en esta condición climática…",
        "correctIndex": 1,
        "options": [
            "A. Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
            "B. Es necesario descansar con más frecuencia, para evitar la fatiga.",
            "C. No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente.\n"
        ],
        "image": "fog.jpg"
    },
    {
        "text": "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y\nreducir la velocidad?",
        "correctIndex": 1,
        "options": [
            "A. No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
            "B. Sí, con lluvia la adherencia es menor.",
            "C. No. La distancia de seguridad debe ser siempre la misma\n"
        ],
        "image": "fog.jpg"
    },
    {
        "text": "Conducir de noche aumenta el riesgo de sufrir un incidente.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2\nsegundos en la distancia de seguridad?",
        "correctIndex": 0,
        "options": [
            "A. A 4 segundos.",
            "B. A 3 segundos.",
            "C. A 5 segundos.\n"
        ],
        "image": "rain2.jpg"
    },
    {
        "text": "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
        "correctIndex": 2,
        "options": [
            "A. Igual que cuando la calzada se encuentra seca.",
            "B. Menor que cuando la calzada se encuentra seca.",
            "C. Mayor que cuando la calzada se encuentra seca.\n"
        ],
        "image": "rain2.jpg"
    },
    {
        "text": "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede\nproducir encandilamiento?",
        "correctIndex": 0,
        "options": [
            "A. Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
            "B. No, porque este efecto se produce sólo por el uso de la luz alta.",
            "C. No, porque este efecto se produce en rutas con poca iluminación.\n"
        ],
        "image": "dark2.jpg"
    },
    {
        "text": "¿Cuál es el límite de velocidad máxima en esta situación",
        "correctIndex": 0,
        "options": [
            "A. 60 km/h.",
            "B. 80 km/h.",
            "C. 40 km/h.\n"
        ],
        "image": "fog2.jpg"
    },
    {
        "text": "Ante la siguiente situación, ¿qué es lo que se recomienda hacer?",
        "correctIndex": 1,
        "options": [
            "A. Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad\ndel conductor.",
            "B. Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia\nentre vehículos y utilizar las luces correspondientes del vehículo.",
            "C. Detenerse en la banquina hasta que levante el banco de niebla.\n\n"
        ],
        "image": "fog2.jpg"
    },
    {
        "text": "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
        "correctIndex": 1,
        "options": [
            "A. Las luces altas, durante todo el recorrido mientras continúe la niebla.",
            "B. Las luces bajas y las rompeniebla (en el caso de tenerlas).",
            "C. Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas\n\n"
        ],
        "image": "fog2.jpg"
    },
    {
        "text": "¿En qué caso deberán utilizarse estas luces?",
        "correctIndex": 2,
        "options": [
            "A. Únicamente de noche y por una vía sin asfaltar.",
            "B. Sólo por vías sin banquina.",
            "C. En vías afectadas por niebla, en cualquier horario\n"
        ],
        "image": "luces.jpg"
    },
    {
        "text": "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es\ndetenerse en la banquina?",
        "correctIndex": 2,
        "options": [
            "A. Sí, cuando el banco de niebla es muy denso.",
            "B. Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
            "C. No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la\nbanquina.\n"
        ],
        "image": "fog2.jpg"
    },
    {
        "text": "La niebla, como factor de riesgo, produce modificaciones en…",
        "correctIndex": 0,
        "options": [
            "A. El campo visual del conductor, su percepción del entorno, la capacidad lumínica del\nvehículo y la adherencia de las cubiertas.",
            "B. El campo visual del conductor y la capacidad lumínica del vehículo.",
            "C. Sólo afecta la capacidad lumínica del vehículo.\n"
        ]
    },
    {
        "text": "Se deben utilizar balizas mientras se conduce bajo estas condiciones climáticas.",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "fog2.jpg"
    },
    {
        "text": "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión\ncon una diferencia de velocidad no demasiado elevada.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "Si ud. circula por la ruta y observa esta situación, debe…",
        "correctIndex": 2,
        "options": [
            "A. Aumentar la velocidad para sobrepasar al animal rápidamente",
            "B. Usar la bocina para ahuyentar al animal y mantener su velocidad.",
            "C. Reducir la velocidad y si es necesario detenerse.\n"
        ],
        "image": "animales.jpg"
    },
    {
        "text": "¿Es seguro conducir con este tipo de calzado?",
        "correctIndex": 2,
        "options": [
            "A. Es indistinto mientras que no resbalen.",
            "B. Sólo puede verse afectada la conducción en viajes largos.",
            "C. No, sólo un calzado sujeto al pie brinda seguridad en la conducción.\n"
        ],
        "image": "pie.jpg"
    },
    {
        "text": "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la\nbocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
        "correctIndex": 1,
        "options": [
            "A. Que el vehículo tiene un desperfecto.",
            "B. Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
            "C. Ambas respuestas, la A y la B, son correctas\n"
        ]
    },
    {
        "text": "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a\npesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
        "correctIndex": 1,
        "options": [
            "A. Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los\nvehículos lentos.",
            "B. Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar\nal auxilio del vehículo.",
            "C. Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál\nfuera.\n"
        ]
    },
    {
        "text": "En este tipo de vía, ¿está permitido remolcar con su automóvil particular a otro que se\nencuentra descompuesto?",
        "correctIndex": 2,
        "options": [
            "A. Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más\npróximo donde pueda quedar inmovilizado.",
            "B. Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
            "C. No, sólo pueden hacerlo los vehículos autorizados a tal fin.\n"
        ],
        "image": "via6.jpg"
    },
    {
        "text": "¿A qué se denomina conducción preventiva?",
        "correctIndex": 1,
        "options": [
            "A. A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e\ninflado de neumáticos.",
            "B. A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los\nactos que se llevan a cabo y a anticipar la conducta de los demás.",
            "C. A realizar cursos viales cada seis meses.\n"
        ]
    },
    {
        "text": "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar\nde conocer la normativa y la concientización gubernamental.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿A qué se denomina conducción eficiente?",
        "correctIndex": 0,
        "options": [
            "A. A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo\nde combustible.",
            "B. A una conducción que logre llegar a destino en el menor tiempo posible.",
            "C. A una conducción que mantenga durante todo el trayecto la misma velocidad.\n"
        ]
    },
    {
        "text": "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que\nse produzcan puntos ciegos cuando observe por los mismos",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿Cómo se pueden reducir los puntos ciegos al conducir un vehículo?",
        "correctIndex": 2,
        "options": [
            "A. Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras\nse circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando\nvistazos por encima de los hombros cuando sea necesario.",
            "B. Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar\nla luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia\nadelante para ampliar el ángulo de visión.",
            "C. Ambas respuestas, A y B, son correctas.\n"
        ]
    },
    {
        "text": "¿A qué se llama “Punto Ciego”?",
        "correctIndex": 0,
        "options": [
            "A. Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera\ndirecta o porque los espejos retrovisores no la reflejan.",
            "B. Sólo al área de visión que no es cubierta por los espejos retrovisores.",
            "C. Al punto imaginario ubicado en el horizonte de una ruta.\n"
        ]
    },
    {
        "text": "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de\nlos espejos retrovisores?",
        "correctIndex": 0,
        "options": [
            "A. Antes de iniciar la marcha.",
            "B. Durante la conducción, para poder hacer una prueba real.",
            "C. Con el vehículo inmovilizado y el conductor fuera del mismo.\n"
        ]
    },
    {
        "text": "Indique cuál de estas imágenes muestra la manera correcta de colocar el espejo retrovisor:",
        "correctIndex": 0,
        "options": [
            "A. Imagen A.",
            "B. Imagen B.",
            "C. Ambas respuestas, la A y la B, son correctas.\n"
        ],
        "image": "espejo.jpg"
    },
    {
        "text": "Todos los cristales de un vehículo deben garantizar visibilidad...",
        "correctIndex": 1,
        "options": [
            "A. Solamente de adentro del automóvil hacia afuera.",
            "B. Desde adentro hacia fuera y de afuera hacia adentro del vehículo.",
            "C. El único cristal que debe garantizar plena y total visibilidad es el parabrisas.\n"
        ]
    },
    {
        "text": "¿Qué se entiende por habitáculo?",
        "correctIndex": 0,
        "options": [
            "A. Al espacio a ser ocupado por el conductor y los pasajeros.",
            "B. Al lugar en el cual se transporta el equipaje (Baúl).",
            "C. Comprende a todo el vehículo en general.\n"
        ]
    },
    {
        "text": "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
        "correctIndex": 0,
        "options": [
            "Fríos.",
            "Calientes.",
            "Es indistinto, al ser de caucho se mantienen aislados de la temperatura.\n"
        ]
    },
    {
        "text": "¿Cuál es la correcta presión de los neumáticos de un automóvil particular?",
        "correctIndex": 1,
        "options": [
            "A. 28 lbs.",
            "B. La que indique el manual del usuario de ese automóvil.",
            "C. 30 lbs.\n"
        ]
    },
    {
        "text": "Si al circular se presenta la siguiente situación, ¿cuál es la acción que se recomienda\nrealizar?",
        "correctIndex": 2,
        "options": [
            "A. Frenar inmediatamente.",
            "B. Desacelerar rápidamente y frenar.",
            "C. Desacelerar lentamente y sujetar el volante.\n"
        ],
        "image": "pop.jpg"
    },
    {
        "text": "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado,\n¿puede afectar esta anomalía la conducción?",
        "correctIndex": 1,
        "options": [
            "A. No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en\nla conducción.",
            "B. Sí, puede afectar al correcto control del vehículo.",
            "C. No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el\ncontacto adecuado de las ruedas con la calzada.\n"
        ]
    },
    {
        "text": "Según la Ley N° 24.449, ¿qué ítem enumera los elementos de seguridad obligatorios que\nse deben llevar en un vehículo?",
        "correctIndex": 1,
        "options": [
            "A. Los elementos A, B y D.",
            "B. Los elementos B, C y D.",
            "C. Los elementos A, D y E.\n"
        ],
        "image": "items.jpg"
    },
    {
        "text": "El siguiente elemento de seguridad, está correctamente ubicado.",
        "correctIndex": 1,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "matafuegos.jpg"
    },
    {
        "text": "El siguiente elemento de seguridad, está correctamente ubicado",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "matafuegos2.jpg"
    },
    {
        "text": "¿En qué ocasiones se permite el uso de la bocina?",
        "correctIndex": 0,
        "options": [
            "A. Sólo para advertir una situación potencialmente de peligro.",
            "B. Sólo para advertir de un sobrepaso.",
            "C. Ambas respuestas, la A y la B, son incorrectas.\n"
        ]
    },
    {
        "text": "Los objetos sueltos como lentes, celular, llaves o similares resultan muy peligrosos en caso\nde incidentes o maniobras bruscas, porque pueden ocasionar una lesión grave producto de\nla energía cinética que poseen.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "Al transportar cualquier elemento, éste debe ubicarse de modo que no perturbe la\nvisibilidad, afecte peligrosamente las condiciones aerodinámicas del vehículo, oculte luces\no sobresalga de los límites permitidos.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ]
    },
    {
        "text": "¿En qué parte del vehículo es conveniente poner el equipaje?",
        "correctIndex": 0,
        "options": [
            "A. Lo más pesado en el fondo del baúl, cerca del centro del auto. Eso ayuda a la estabilidad\ndireccional y al comportamiento en las curvas.",
            "B. Lo más pesado en el techo del vehículo, sujeto con sogas. Eso ayuda al centro de gravedad.",
            "C. Lo más pesado en los asientos traseros (si es que se viaja sin ocupantes en esa zona).\nEso ayuda a la estabilidad direccional.\n"
        ]
    },
    {
        "text": "¿Quién es el responsable frente a la autoridad de control, si uno de los pasajeros del\nautomóvil no lleva puesto el cinturón de seguridad?",
        "correctIndex": 2,
        "options": [
            "A. El tomador del seguro.",
            "B. El pasajero, si es mayor de edad.",
            "C. El conductor.\n"
        ]
    },
    {
        "text": "Este elemento de seguridad pasiva sirve para reducir el daño producido a los ocupantes de\nun vehículo al momento de un siniestro.",
        "correctIndex": 0,
        "options": [
            "Verdadero.",
            "Falso.\n"
        ],
        "image": "air.jpg"
    },
    {
        "text": "Este elemento de seguridad...",
        "correctIndex": 1,
        "options": [
            "A. Permite prescindir del uso del cinturón de seguridad.",
            "B. Complementa el uso del cinturón de seguridad.",
            "C. Es incompatible con el uso del cinturón de seguridad.\n"
        ],
        "image": "air.jpg"
    },
    {
        "text": "Durante un siniestro, si el conductor del vehículo no lleva puesto el cinturón de seguridad,\nel airbag...",
        "correctIndex": 2,
        "options": [
            "A. Le salvará la vida ya que puede sustituir al cinturón de seguridad.",
            "B. Evitará que sufra lesiones, siempre y cuando el siniestro se produzca a menos de 80\nkm/h.",
            "C. Puede provocar lesiones graves.\n"
        ]
    },
    {
        "text": "¿Es correcta la colocación del dispositivo de retención infantil en este vehículo?",
        "correctIndex": 2,
        "options": [
            "A. Sí, salvo en rutas nacionales.",
            "B. Sí, siempre y cuando esté debidamente ajustado.",
            "C. No, ya que estos dispositivos deben ir colocados en los asientos traseros.\n"
        ],
        "image": "baby.jpg"
    },
    {
        "text": "En la siguiente imagen, ¿es correcta la colocación del dispositivo de retención infantil para\nun niño de 7 años?",
        "correctIndex": 1,
        "options": [
            "A. Sí, ya que se encuentra bien ajustado y en el asiento trasero.",
            "B. No, ya que la orientación “a contra marcha” de los SRI es sólo para los grupos 0 y 0+ y 1\nde SRI según indique su fabricante y este niño supera la edad para esos grupos.",
            "C. Sí, ya que la orientación “a contra marcha” reduce el efecto “latigazo” en caso de un\nsiniestro.\n"
        ],
        "image": "nene.jpg"
    },
    {
        "text": "¿Es correcta la manera en que utiliza el Sistema de Retención Infantil (SRI) esta niña?",
        "correctIndex": 2,
        "options": [
            "A. Sí, ya que se encuentra sentada en un SRI, en el asiento trasero.",
            "B. No, ya que la niña debería ubicarse “a contra marcha” para reducir el efecto “latigazo”.",
            "C. No, ya que la niña no utiliza el cinturón de seguridad del SRI.\n"
        ],
        "image": "nena.jpg"
    },
    {
        "text": "El apoyacabeza está correctamente ubicado en función del conductor.",
        "correctIndex": 0,
        "options": [
            "Sí",
            "No\n"
        ],
        "image": "head.jpg"
    },
    {
        "text": "¿Es obligatoria la utilización de este elemento en todos los asientos del automóvil?",
        "correctIndex": 0,
        "options": [
            "A. Sí. Lo establece la normativa para evitar lesiones graves en la zona cervical.",
            "B. No en todos, para los asientos traseros no cumplen ninguna función.",
            "C. No, ya que no forma parte de la seguridad activa ni pasiva de los vehículos\n"
        ],
        "image": "headseat.jpg"
    },
    {
        "text": "Frente a un siniestro, ¿qué puede evitar este elemento si está correctamente ubicado?",
        "correctIndex": 1,
        "options": [
            "A. Nada en especial, dado que sólo es un elemento de confort.",
            "B. Lesiones en la zona cervical.",
            "C. Lesiones en el tórax.\n"
        ],
        "image": "headseat.jpg"
    },
    {
        "text": "¿Todos los ocupantes del vehículo viajan de manera correcta?",
        "correctIndex": 2,
        "options": [
            "A. Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo al conductor",
            "B. Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo a las personas que\nse trasladen en los asientos delanteros.",
            "C. No, porque la obligación del uso del cinturón de seguridad es para todas las personas\ntransportadas.\n"
        ],
        "image": "people.jpg"
    },
    {
        "text": "Luego de un largo viaje en ruta, realizó una parada y le faltan muy pocos kilómetros para\nllegar a destino, ¿es necesario que todos los ocupantes vuelvan a ponerse el cinturón de\nseguridad?",
        "correctIndex": 2,
        "options": [
            "A. No, sólo es obligatorio para los que se ubiquen en los asientos delanteros.",
            "B. No, porque se está por llegar a destino.",
            "C. Sí, porque su uso es obligatorio para todos los ocupantes.\n"
        ]
    },
    {
        "text": "¿Cuál de estas imágenes muestra el uso adecuado del cinturón de seguridad durante el\nembarazo?",
        "correctIndex": 1,
        "options": [
            "A. Imagen A.",
            "B. Imagen B.\n"
        ],
        "image": "embarazada.jpg"
    },
    {
        "text": "¿Esta persona tiene el cinturón correctamente colocado?",
        "correctIndex": 0,
        "options": [
            "A. No, porque pasa por el abdomen y debería hacerlo por los huesos de la cadera.",
            "B. No, porque pasa por el abdomen y debería hacerlo por los muslos.",
            "C. Sí, porque pasa por la clavícula y el abdomen.\n"
        ],
        "image": "cinto.jpg"
    },
    {
        "text": "Los ocupantes de este vehículo ¿viajan de manera segura?",
        "correctIndex": 2,
        "options": [
            "A. Sí, ya que las personas se encuentran con cinturón de seguridad.",
            "B. No, ya que por normativa no está permitido trasladar mascotas en un automóvil particular.",
            "C. No, ya que las mascotas deben ser transportadas en los asientos traseros sujetos con\narnés o sistema de retención correspondiente.\n"
        ],
        "image": "perro.jpg"
    },
    {
        "text": "El dispositivo de airbag de un vehículo constituye un elemento de seguridad de tipo Activa",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "La seguridad Activa consiste",
        "correctIndex": 2,
        "options": [
            "a) Reducir al mínimo los daños que se pueden producir cuando acontece un sienestro.",
            "b) Compone el conjunto de soluciones técnicas y el contenido de los elementos que hacen\ndistendida la vida a bordo del vehículo.",
            "c) Está orientada a evitar al máximo los siniestros viales y comprende el conjunto de todos\naquellos elementos que contribuyen a propocionar una mayor eficacia en la conducción\ngarantizando respuestas eficaces.\n"
        ]
    },
    {
        "text": "La seguridad Pasiva consiste",
        "correctIndex": 1,
        "options": [
            "a) Reducir al mínimo los daños que se pueden producir cuando acontece un sienestro.",
            "b) Compone el conjunto de soluciones técnicas y el contenido de los elementos que hacen\ndistendida la vida a bordo del vehículo.",
            "c) Está orientada a evitar al máximo los siniestros viales y comprende el conjunto de todos\naquellos elementos que contribuyen a propocionar una mayor eficacia en la conducción\ngarantizando respuestas eficaces.\n"
        ]
    },
    {
        "text": "Definición de Automóvil: el automotor para el transporte de personas de hasta ocho\nplazas (excluido conductor) con cuatro o más ruedas, y los de tres ruedas que exceda los\nmil quinientos kg de peso;",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Además de ser trasladados en el asiento trasero del vehículo, deberán ubicarse en el\ndispositivo de retención infantil correspondiente:",
        "correctIndex": 2,
        "options": [
            "a) los menores de 2 años",
            "b) Los menores de 3 años",
            "c) Los menores de 4 años\n"
        ]
    },
    {
        "text": "Los faros delanteros deben ser:",
        "correctIndex": 1,
        "options": [
            "a) De luz blanca únicamente",
            "b) De luz blanca o amarilla indistintamente",
            "c) De luz amarilla únicamente\n"
        ]
    },
    {
        "text": "Los faros delanteros:",
        "correctIndex": 2,
        "options": [
            "a) No indican sentido de marcha",
            "b) Sólo indican el sentido de marcha si son amarillas",
            "c) Indican el sentido de marcha \n"
        ]
    },
    {
        "text": "Las luces de posición traseras deben ser:",
        "correctIndex": 2,
        "options": [
            "a) De color blanco",
            "b) De color blanco o rojo indistintamente",
            "c) De color rojo \n"
        ]
    },
    {
        "text": "La luz de retroceso debe ser:",
        "correctIndex": 1,
        "options": [
            "a) De color amarillo",
            "b) De color blanco",
            "c) De color rojo\n"
        ]
    },
    {
        "text": "La profundidad del dibujo del neumático debe tener como mínimo",
        "correctIndex": 1,
        "options": [
            "a) 1,4 ml",
            "b) 1,6 ml.",
            "c) 1,8 ml\n"
        ]
    },
    {
        "text": "Que es el aquaplanning",
        "correctIndex": 1,
        "options": [
            "a) Es una película de agua que se forma entre las cubiertas y el guardabarros del vehíuclo.",
            "b) Es una película de agua que se forma debajo de las cubiertas.",
            "c) Es una película de agua que se forma por encima de las cubiertas. \n"
        ]
    },
    {
        "text": "Las señales de demarcación horizontal longitudinales blancas separan las corrientes\nde tránsito en dirección opuesta. ",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Las señales de demarcación horizontal longitudinales blancas delimitan los carriles\nde ciruclación y tienen carácter permisivo para cambiar de carril. ",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Las señales de demarcación horizontal blancas de trazo intermitente delimitan los\ncarriles de ciruclación y tienen carácter prohibitivo para cambiar de carril. ",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Existen tres (3) tipos de desgastes de los neumáticos. En el centro, en los talones y el\nanormal rápido. ",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "En las vías reguladas por semáforos, los vehículos deben:",
        "correctIndex": 0,
        "options": [
            "a) Con luz roja, detenerse antes de la línea marcada a tal efecto o de la senda peatonal,\nevitando luego cualquier movimiento",
            "b) Con luz roja, detenerse sobre la línea marcada a tal efecto o de la senda peatonal,\nevitando luego cualquier movimiento.",
            "c) Con luz roja, detenerse antes de la línea marcada a tal efecto o de la senda peatonal,\nrealizando movimientos hasta que se ponga la luz verde.\n"
        ]
    },
    {
        "text": "Los amortiguadores tienen como función proporcionar seguridad y confort durante la\nconducción, aportando estabilidad al vehículo. ",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "El uso correcto del apoya cabezas en un vehículo es:",
        "correctIndex": 2,
        "options": [
            "a) Muy abajo, donde la parte saliente quede a la altura del cuello del usuario.",
            "b) Muy atrás en relación con la posición de la cabeza.",
            "c) La distancia entre el apoya cabezas y la nunca del usuario no debe ser mayor a 5 cm\n"
        ]
    },
    {
        "text": "El tiempo apróximado de recuperación por la ingesta de 400 cm3 de bebida alocholica\nes...",
        "correctIndex": 1,
        "options": [
            "a) de 2 a 3 hs.",
            "b) de 2 a 4 hs.",
            "c) de 3 a 5 hs. \n"
        ]
    },
    {
        "text": "Con una cantidad mayor a 1 gr/l de alcohol en sangre detectado en controles de\nalcoholemia se procederá al secuestro del vehículo y se incurrirá en falta grave reteniendo\nla licencia del conductor. ",
        "correctIndex": 0,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "El mal estado de los amortiguadores de un vehículo produce:",
        "correctIndex": 0,
        "options": [
            "a) Una mayor distancia de frenado y estabilidad.",
            "b) El no desgaste de los neumáticos.",
            "c) Una mayor inestabilidad de la dirección. \n"
        ]
    },
    {
        "text": "El cinturón de seguridad en los vehículos:",
        "correctIndex": 0,
        "options": [
            "a) Disminuye los riesgos y consecuencias de los siniestros de tránsito.",
            "b) Debe usarse sólo cuando se conduce fuera del ámbito urbano (rutas, autopistas, etc.).",
            "c) Disminuye la posibilidad de incurrir en un siniestro vial. \n"
        ]
    },
    {
        "text": "¿Cual es la distancia de seguridad que debe dejarse entre vehiculos al circular en\nciudad?",
        "correctIndex": 2,
        "options": [
            "a) 50 mts (3 segundos)",
            "b) 80 mts (4 segundos)",
            "c) 30 mts (2 segundos)\n"
        ]
    },
    {
        "text": "Al momento de producirse un sisniestro vial, se deben colocar los triángulos de\nemergencias a fin de señalizar el sinsiestro a una distancia de",
        "correctIndex": 0,
        "options": [
            "a) 50 mts del vehículo.",
            "b) 60 mts del vehículo.",
            "c) 70 mts del vehículo.\n"
        ]
    },
    {
        "text": "¿Puede un vehículo no destinado a remolque, remolcar a otros?",
        "correctIndex": 1,
        "options": [
            "a) Si.",
            "b) No, salvo casos de fuerza mayor.",
            "c) No, en ningún caso.\n"
        ]
    },
    {
        "text": "La prioridad de paso de un vehículo se pierde:",
        "correctIndex": 1,
        "options": [
            "a) Ante el paso de vehículos de mayor porte.",
            "b) Ante vehículos del servicio público de urgencia, en cumplimiento de su misión.",
            "c) Nunca se pierde. \n"
        ]
    },
    {
        "text": "El titular de una licencia de conducir tiene un plazo de gracia de 60 (sesenta) días para gestionar la renovación de su licencia una vez vencida la misma. En ese lapso de tiempo\nestá en condiciones de renovar pero no de manejar",
        "correctIndex": 1,
        "options": [
            "Verdadero",
            "Falso\n"
        ]
    },
    {
        "text": "Cuando un automóvil es conducido por un camino con nieve o hielo, ¿cuál es la\nmaniobra correcta que se debe realizar?:",
        "correctIndex": 1,
        "options": [
            "a) Conducir el vehículo con el freno de manos activado, sobrepasando a los demás vehículos.",
            "b) Conducir con regularidad, evitando frenar bruscamente y no sobrepasando a otros\nvehículos.",
            "c) Conducir a la menor velocidad posible con las balizas encendidas sin sobrepasar a otros. \n"
        ]
    },
    {
        "text": "¿Cuál es el grado máximo de alcoholemia permitido para conducir un automóvil?:",
        "correctIndex": 0,
        "options": [
            "a) 0,5 gramos por litro de sangre",
            "b) 0,2 gramos por litro de sangre",
            "c) 0,05 gramos por litro de sangre\n"
        ]
    },
    {
        "text": "El uso de enganches sobresalientes:",
        "correctIndex": 2,
        "options": [
            "a) Está permitido en vehículos de carga",
            "b) Está permitido en zonas de baja densidad de tránsito",
            "c) Está prohibido \n"
        ]
    },
    {
        "text": "¿En qué circunstancia está permitido circular sin respetar distancias prudentes con\nel vehículo que va adelante?",
        "correctIndex": 2,
        "options": [
            "a) Transitando vías multicarriles",
            "b) En toda circunstancia, si no se trata de vehículos de carga",
            "c) Está prohibido en toda circunstancia"
        ]
    }

]

.map(q=>({ ...q, image:q.image? process.env.PUBLIC_URL+"/source8/"+q.image : undefined}));;

