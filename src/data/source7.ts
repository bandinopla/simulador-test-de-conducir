import { Question } from "../providers/QuestionProvider";

 

export const source:Question[] = [

    {
        text:"Cuál de las siguientes señales indica prohibición de avanzar?",
        image:"/source7/signs1.jpg",
        correctIndex:0,
        options: [
            "La primera",
            "La del medio",
            "La última"
        ]
    },

    {
        text:"Cuál de las siguientes señales indica que debemos girar a la derecha de forma obligatoria?",
        image:"/source7/signs2.jpg",
        correctIndex:2,
        options: "12345".split("").map(n=>`la ${n}`)
    },

    {
        text:"Cuál de las siguientes señales indica el sentido de la circulación?",
        image:"/source7/signs2.jpg",
        correctIndex:4,
        options: "12345".split("").map(n=>`la ${n}`)
    },

    {
        text:"Cuál de las siguientes señales indica que no podemos detener el vehículo?",
        image:"/source7/signs3.jpg",
        correctIndex:1,
        options: [
            "La primera",
            "La segunda"
        ]
    },

    {
        text:"Cuál de las siguientes señales indica que no podemos realizar la maniobra de aledantamiento?",
        image:"/source7/signs4.jpg",
        correctIndex:0,
        options: [
            "La primera",
            "La segunda"
        ]
    },

    {
        text:"Qué señal indica un límite en la velocidad mínima?",
        image:"/source7/signs5.jpg",
        correctIndex:1,
        options: [
            "La primera",
            "La segunda"
        ]
    },

    {
        text:"Si un vehículo tiene 3.8 metros de altura y 3.3 metros de ancho, según estas señales, podría circular?",
        image:"/source7/signs6.jpg",
        correctIndex:1,
        options: [
            "Sí",
            "No"
        ]
    },

    {
        text:"Si un vehículo va por una vía estrecha de doble vía y ve esta señal, qué significa?",
        image:"/source7/signs7.jpg",
        correctIndex:0,
        options: [
            "Que si otro vehículo viene de la mano contraria tiene prioridad de paso",
            "Que el vehículo tiene prioridad de paso y deben cederle el paso",
            "Que no se permite circular en esa dirección"
        ]
    },

    {
        text:"Qué señal nos indica que nos aproximamos a una curva en forma de \"S\"?",
        image:"/source7/curvas.jpg",
        correctIndex:2,
        options: "1234".split("").map(n=>`la ${n}`)
    },

    {
        text:"Qué señal nos indica que nos aproximamos a un camino sinuoso?",
        image:"/source7/curvas.jpg",
        correctIndex:3,
        options: "1234".split("").map(n=>`la ${n}`)
    },

    {
        text:"Qué señal nos indica que nos aproximamos a una contracurva leve?",
        image:"/source7/curvas.jpg",
        correctIndex:1,
        options: "1234".split("").map(n=>`la ${n}`)
    },
 
    {
        text:"Qué señal nos indica que se aproxima un estrechamiento del camino ",
        image:"/source7/estrecho.jpg",
        correctIndex:3,
        options: [
            "La 1",
            "La 2",
            "La 3",
            "La 1 y la 2",
            "La 1 y la 3", 
            "Todas"
        ]
    },

    {
        text: "Cuál de estas señales nos indica una encrucijada del tipo empalme?",
        image:"/source7/tetris.jpg",
        options: "1234".split("").map(n=>`la ${n}`),
        correctIndex: 1
    },

    {
        text: "Cuál de estas señales nos indica que nos acercamos a un cruce de caminos?",
        image:"/source7/tetris.jpg",
        options: "1234".split("").map(n=>`la ${n}`),
        correctIndex: 0
    },

    {
        text: "Cuál de estas señales indica que se incorporará tránsito lateralmente?",
        image:"/source7/incorporacion.jpg",
        options: [
            "La 1",
            "La 2",
            "La 3",
            "La 4",
            "La 1 y la 2",
            "La 1 y la 3",
            "Las 4 (todas)",
            "Ninguna"
        ],
        correctIndex: 0
    },

    {
        text: "Cuál de estas señales advierte sobre el riesgo de patinar el vehículo?",
        image:"/source7/camino.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 1
    },
 
    {
        text: "Cuál de estas señales nos está advirtiendo que estamos por entrar en una curva?",
        image:"/source7/right.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 2
    },

    {
        text: "Cuál de estas señales nos está obligando girar a la derecha?",
        image:"/source7/right.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 0
    },

    {
        text: "Cuál de estas señales nos está indicando una acción que tenemos permitida?",
        image:"/source7/right.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 1
    },

    {
        text: "Cuál de estas señales indica un desvío temporal?",
        image:"/source7/transitoria.jpg",
        options: "1234".split("").map(n=>`la ${n}`),
        correctIndex: 3
    },

    {
        text: "Cuál de estas señales es de carácter obligatorio?",
        image:"/source7/transitoria.jpg",
        options: [
            "La 1 y la 2",
            "La 3 y la 4",
            "Solo la 3",
            "Solo la 4",
            "Todas"
        ],
        correctIndex: 1
    },

    {
        text: "Cuál de estas señales indica una ruta Nacional?",
        image:"/source7/ruta.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 1
    },

    {
        text: "Cuál de estas señales indica una ruta Provincial?",
        image:"/source7/ruta.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 2
    },

    {
        text: "Cuál de estas señales indica una ruta Panamericana?",
        image:"/source7/ruta.jpg",
        options: [
            "La primera",
            "La segunda",
            "La tercera"
        ],
        correctIndex: 0
    },

    {
        text: "Cuál de estas vías permite que se haga cambio de carril?",
        image:"/source7/vias.jpg",
        options: [
            "La primera",
            "La segunda",
            "Ambas",
            "Ninguna"
        ],
        correctIndex: 3
    },

    {
        text: "Cuál de estas vías posee carriles con circulación opuesta una de otra?",
        image:"/source7/vias.jpg",
        options: [
            "La primera",
            "La segunda",
            "Ambas",
            "Ninguna"
        ],
        correctIndex: 1
    },

    {
        text: "En esta vía, por dónde NO se puede cruzar de carril en ninguna de las dos vías?",
        image:"/source7/via2.jpg",
        options: [
            "Por los extremos",
            "Por el medio",
            "En ninguna se puede", 
        ],
        correctIndex: 1
    },

    {
        text: "En esta vía se puede realizar cambio de carril?",
        image:"/source7/vias3.jpg",
        options: [
            "En la primera",
            "En la segunda",
            "En la tercera", 
        ],
        correctIndex: 0
    },

]
.map(q=>({ ...q, image:q.image? process.env.PUBLIC_URL+q.image : undefined}));