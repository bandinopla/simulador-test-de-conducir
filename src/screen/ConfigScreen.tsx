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


export const ConfigScreen: React.FC<{ quiz: Quiz, start: () => void }> = ({ quiz, start }) => {

    const percent = useRef<HTMLInputElement>(null);
    const total = useRef<HTMLInputElement>(null);
    const [use, setUse] = useState<boolean[]>(savedUseState() ?? new Array(quiz.sourceLinks.length).fill(true));


    useLayoutEffect(() => {

        percent.current!.value = (parseInt(localStorage.getItem('percent2pass')||"0") || DEFAULT_PERCENT).toString();
        total.current!.value = (parseInt(localStorage.getItem('total')||"0") || DEFAULT_TOTAL).toString();

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

    const iniciar = () => {

        const limit = parseInt(total.current!.value) || DEFAULT_TOTAL;
        const sePasaCon = parseInt(percent.current!.value) || DEFAULT_PERCENT;

        if (!use.some(v => v)) {
            alert("Al menos una fuente de datos debe estar seleccionada!");
            return;
        }

        quiz.init(limit, use, sePasaCon);
        start();
    }


    return <div>
        <h1>Configurá tu examen↴</h1>
        <h3>Evaluar <input ref={total} size={3} style={{ color: "blue", textAlign: "center", fontWeight: "bold", fontSize: 25 }} type="text" placeholder="total" /> preguntas aleatorias de las siguientes fuentes:</h3>

        {quiz.sourceLinks.map((source, i) => <div key={i} style={{ padding: 10 }}>
            <Switch on={use[i]} setTo={value => setUseProvider(i, value)} /> Fuente <strong>#{i + 1}</strong>: <a href={source.link} target="_blank">{source.name}</a>
        </div>)}

        <h3>Se aprueba con <input ref={percent} size={3} style={{ color: "blue", textAlign: "center", fontWeight: "bold", fontSize: 25 }} type="text" placeholder="total" /> % correctas.</h3>

        <div className='next-question'>
            <a href="#" onClick={iniciar}><strong>Iniciar ⇒ </strong></a>
        </div>
    </div>
}