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
        correctIndex:1 
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
        image: "abc"
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
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },
    // {
    //     text:"",
    //     options:[
    //         ""
    //     ],
    //     correctIndex: 0,
    //     image: undefined
    // },

]

.map(q=>({ ...q, image:q.image? process.env.PUBLIC_URL+"/source8/"+q.image : undefined}));;

 