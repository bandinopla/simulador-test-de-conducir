
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import './App.css';
import { NumeredQuestion, Question } from './providers/QuestionProvider';
import { Quiz } from './quiz/Quiz';


const quiz = new Quiz(40);
quiz.init();


function App() {

    const [question, setQuestion] = useState<NumeredQuestion>(quiz.getQuestion());

    /**
     * Para esta app, como solo nos importa en el momento de contestar si está bien o mal, no hace falta recordar el pasado. Con esto alcanza y sobra...
     */
    const [answer, setAnswer] = useState<number>(-1);

    const setMyAnswer = (optionIndex: number) => {

        if (answer < 0) {
            quiz.answer(optionIndex);
            setAnswer(optionIndex);
        }
    }

    const next = () => {

        setAnswer(-1);
        setQuestion(quiz.getQuestion())
    }

    const restart = () => {
        setAnswer(-1);
        quiz.init();
        setQuestion(quiz.getQuestion())
    }



    return (
        <div className="App">
            <header style={{ lineHeight: "20px" }}>
                <h1>Simulador de Test Teórico de conducción</h1>
                <h2>Argentina. CABA. Categoría B.</h2>
                <sup>Sourcecode: <a href="https://github.com/bandinopla/simulador-test-de-conducir" target="_blank">github.com/bandinopla/simulador-test-de-conducir</a></sup>
            </header>


            {!question && <ResultsScreen restart={restart} />}


            {question &&
                <div className='question'>
                    <div className='pager'>
                        <strong>{question.number}</strong> / {quiz.limit}
                        <div style={{ fontSize: "0.3em" }}><strong>{quiz.limit}</strong> preguntas aleatorias de <strong>{quiz.totalAvailableQuestions()}</strong> disponibles.</div>
                    </div>

                    {question.image && <Image src={question.image} />}

                    <strong>{question.text}</strong>
                </div>
            }

            {question?.options.map((option, i) => <div key={i} className={`option ${answer > -1 ? question.correctIndex == i ? "isCorrect" : answer == i ? "isIncorrect" : "" : ""}`} onClick={() => setMyAnswer(i)}>{option}</div>)}

            {answer > -1 && <div className='next-question'>
                <a href="#" onClick={next}>Siguiente →</a>
            </div>}

            <div style={{ marginTop: "50px", color: "#666", fontSize: "0.8em" }}>
                Algún error? <a href="https://github.com/bandinopla/simulador-test-de-conducir/issues" target="_blank">Posteá un issue / Avisanos</a>
                &nbsp;|&nbsp;Lee el <a href="https://www.buenosaires.gob.ar/sites/gcaba/files/manual_2022_compressed.pdf" target="_blank">Manual Teórico</a>
            </div>

            <div style={{ color: "#666", fontSize: "0.8em" }}>
               Fuente de los datos: { quiz.sourceLinks.map((source,i)=><a key={i} href={source.link} target="_blank" className="sourceLink">{source.name}</a>)}
            </div>

        </div>
    );
}


const ResultsScreen: React.FC<{ restart: () => void }> = ({ restart }) => {

    const percent = Math.round(quiz.correctas / quiz.limit * 100);

    return <div style={{ margin: "100px 0" }}>

        <h1>Resultado ↴</h1>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
            <Stat label="Correctas">{quiz.correctas}</Stat>
            <Stat label="Fallas">{quiz.incorrectas}</Stat>
            <Stat label="Puntaje de acierto">{percent}%</Stat>
        </div>

        <div className='next-question'>
            <a href="#" onClick={restart}>↻ Reiniciar</a>
        </div>
    </div>

}

const Stat: React.FC<PropsWithChildren<{ label: string }>> = ({ label, children }) => {
    return <div style={{ margin: 55 }}>
        <div>{label}</div>
        <div style={{ fontSize: "3em" }}>{children}</div>
    </div>
}

const Image: React.FC<{ src: string }> = ({ src }) => {

    const ref = useRef<HTMLImageElement>(null);
    const [loadedSrc, setLoadedSrc] = useState("");

    useEffect(() => {

        if (ref.current) {
            const emiter = ref.current;

            emiter.onload = () => {
                setLoadedSrc(src);
            }

            return () => { emiter.onload = null };
        }



    }, [src]);

    return <>
        {loadedSrc != src ? <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>Cargando imagen...</div> : ""}
        <a href={src} target="_blank"><img src={src} ref={ref} loading="eager" style={{ display: loadedSrc == src ? "block" : "none", margin: "0 auto", marginBottom: 20, height: 300, border: "2px solid #ccc" }} /></a>
    </>;
}


export default App;