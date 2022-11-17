import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Switch } from "../component/Switch";
import { Quiz } from "../quiz/Quiz";


const DEFAULT_TOTAL = 40;
const DEFAULT_PERCENT = 85;


const savedUseState = () => {

    try {
        const saved = JSON.parse(localStorage.getItem('use') ?? "false");
        if (saved) {
            return saved;
        }
    }
    catch (e) {
        // nothing...
    }

    return false;
}


/**
 * a pedido de https://www.reddit.com/user/Jauretche/
 * https://www.reddit.com/r/argentina/comments/yt42lg/comment/iw2uiws/?context=3 
 */
// const savedAutoAdvance = ()=> { 
//     var saved = false; 
//     try {
//         saved = JSON.parse(localStorage.getItem('autoadvance') ?? "false"); 
//     }
//     catch (e) {
//         // nothing...
//     } 
//     return saved;
// }

const savedBoolean = (id: string, defaultValue: boolean = false) => {

    var val = defaultValue;

    try {
        val = JSON.parse(localStorage.getItem(id) ?? "false") || defaultValue;
    }
    catch (e) {
        // nothing...
    }

    return val;
}




export const ConfigScreen: React.FC<{ quiz: Quiz, start: (auto: boolean, barajarOpciones: boolean) => void }> = ({ quiz, start }) => {

    const percent = useRef<HTMLInputElement>(null);
    const total = useRef<HTMLInputElement>(null);
    const [use, setUse] = useState<boolean[]>(savedUseState() || new Array(quiz.sourceLinks.length).fill(true));
    const [auto, setAuto] = useState<boolean>(savedBoolean("autoadvance"))//(savedAutoAdvance());
    const [barajaOpciones, setBarajaOpciones] = useState<boolean>(savedBoolean("baraja-opciones"));


    useLayoutEffect(() => {

        percent.current!.value = (parseInt(localStorage.getItem('percent2pass') || "0") || DEFAULT_PERCENT).toString();
        total.current!.value = (parseInt(localStorage.getItem('total') || "0") || DEFAULT_TOTAL).toString();

        return () => {

            localStorage.setItem('percent2pass', parseInt(percent.current!.value).toString() || DEFAULT_PERCENT.toString());
            localStorage.setItem('total', parseInt(total.current!.value).toString() || DEFAULT_TOTAL.toString());
        }

    }, []);

    // save state 
    useEffect(() => localStorage.setItem('use', JSON.stringify(use)), [use])



    const setUseProvider: (providerIndex: number, mustUse: boolean) => void = (providerIndex, mustUse) => {
        use[providerIndex] = mustUse;
        setUse([...use]);
    }

    const onSetAuto: (val: boolean) => void = val => {
        localStorage.setItem('autoadvance', JSON.stringify(val));
        setAuto(val)
    }

    const setBarajaOptions: (val: boolean) => void = val => {
        localStorage.setItem('baraja-opciones', JSON.stringify(val));
        setBarajaOpciones(val)
    }

    const iniciar = () => {

        const limit = parseInt(total.current!.value) || DEFAULT_TOTAL;
        const sePasaCon = parseInt(percent.current!.value) || DEFAULT_PERCENT;

        if (!use.some(v => v)) {
            alert("Al menos una fuente de datos debe estar seleccionada!");
            return;
        }

        quiz.init(limit, use, sePasaCon);
        start(auto, barajaOpciones);
    }


    return <div>
        <h1>Configurá tu examen↴</h1>
        <h3>Evaluar <input className="questions-number-input" ref={total} size={3} type="text" placeholder="total" /> preguntas aleatorias de las siguientes fuentes:</h3>

        <div className="question-sources-container">
            {quiz.sourceLinks.map((source, i) => <div key={i} style={{ padding: 10 }}>
                <Switch on={use[i]} setTo={value => setUseProvider(i, value)} /> Fuente <strong>#{i + 1}</strong>: <a href={source.link} target="_blank">{source.name}</a>
            </div>)}

        </div>

        <h3 className="question-config-percentage">Se aprueba con <input className="questions-number-input" ref={percent} size={3} type="text" placeholder="total" /> % correctas.</h3>

        <h4> <Switch on={auto} setTo={nvalue => onSetAuto(nvalue)} /> Avanzar automaticamente si respondí bien (ahorra tiempo)</h4>
        <h4> <Switch on={barajaOpciones} setTo={nvalue => setBarajaOptions(nvalue)} /> Barajar opciones de la pregunta también.
            <br /><sub>↳ Para evitar memorizar el orden de la respuesta correcta.</sub>
        </h4>

        <div className='next-question'>
            <a href="#" onClick={iniciar}><strong>Iniciar ⇒ </strong></a>
        </div>
    </div>
}