
import { useMemo, useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import { Image } from './component/Image';
import { NumeredQuestion } from './providers/QuestionProvider';
import { Quiz } from './quiz/Quiz';
import { ConfigScreen } from './screen/ConfigScreen';
import { ResultsScreen } from './screen/ResultsScreen';


const quiz = new Quiz();
type OptionResorted = {
    text:string,
    originalIndex:number
}


function App() {

    const [question, setQuestion] = useState<NumeredQuestion | undefined>();
    const [autoMode, setAutoMode] = useState<boolean>(false);
    const timer = useRef<NodeJS.Timeout>();

    /**
     * Para esta app, como solo nos importa en el momento de contestar si está bien o mal, no hace falta recordar el pasado. Con esto alcanza y sobra...
     */
    const [answer, setAnswer] = useState<number>(-1);

    const setMyAnswer = (optionIndex: number) => {

        if (answer < 0) {
            const correct = quiz.answer(optionIndex);
            setAnswer(optionIndex); 

            if( autoMode && correct )
            {
                clearInterval( timer.current ); 
                timer.current = setTimeout( next, 500 );
            }
        }
    }

    const next = () => {

        clearInterval( timer.current ); 
        setAnswer(-1);
        setQuestion(quiz.getQuestion())
    }

    const restart = () => {

        clearInterval( timer.current ); 
        quiz.restart();
        setQuestion(undefined);
        setAnswer(-3);
    }

    const questionOptions = useMemo<OptionResorted[]|undefined>(()=>{

        //barajar opciones para evitar que uno se memorize la posisión de la opción en base a la pregunta en vez de la respuesta.
        if( question?.options )
        {
            let options = question?.options;

            // remapear para no perder el indexOriginal...
            let rtrn : OptionResorted[] = question?.options.map((option,i)=>({ text:option, originalIndex:i }));

            // Barajar las opciones...
            for (let i = rtrn.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1));
                [rtrn[i], rtrn[j]] = [rtrn[j], rtrn[i]];
            }  

            return rtrn;
        }

    }, [question]);


    return (
        <div className="App">
            <Header />
            <main className="main-content">
                {!question && !quiz.termino() && <ConfigScreen quiz={quiz} start={(auto) => { setAutoMode(auto) ; setQuestion(quiz.getQuestion()) }} />}

                {!question && quiz.termino() && <ResultsScreen quiz={quiz} restart={restart} />}

                {question &&
                    <div className='question'>
                        <div className='pager'>
                            <strong>{question.number}</strong> / {quiz.limit}
                            <div style={{ fontSize: "0.3em" }}><strong>{quiz.limit}</strong> preguntas aleatorias de <strong>{quiz.totalAvailableQuestions()}</strong> barajadas.</div>
                        </div>

                        {question.image && <Image src={question.image} />}

                        <strong>{question.text}</strong>
                        <br/><span className="question-source">Fuente <strong>#{question.source.index!+1}</strong>: <a href={question.source.link} target="_blank">{question.source.name}</a> </span>
                    </div>
                }

                {   questionOptions?.map((option, i) => <div key={i} className={`option ${answer > -1 ? question!.correctIndex == option.originalIndex ? "isCorrect" : answer == option.originalIndex ? "isIncorrect" : "" : ""}`} onClick={() => setMyAnswer(option.originalIndex)}>{option.text}</div>)
                                     
                }

                {answer > -1 && <div className='next-question'>
                    <a href="#" onClick={next}><strong>Siguiente →</strong></a>
                </div>}

                {question && <div className='next-question' style={{ fontSize: "1em" }}>
                    <a href="#" onClick={restart}>↻ Reiniciar</a>
                </div>}

                <div style={{ marginTop: "50px", color: "#666", fontSize: "0.8em" }}>
                    Algún error? <a href="https://github.com/bandinopla/simulador-test-de-conducir/issues" target="_blank">Posteá un issue / Avisanos</a>
                    &nbsp;|&nbsp;Lee el <a href="https://www.buenosaires.gob.ar/sites/gcaba/files/manual_2022_compressed.pdf" target="_blank">Manual Teórico</a>
                </div>

                <div style={{ color: "#666", fontSize: "0.8em", whiteSpace:"break-spaces", margin:"20px auto" }}>
                    Fuente de los datos: <br/>
                    {quiz.sourceLinks.map((source, i) => <div key={i} ><strong>[{i+1}] </strong><a href={source.link} target="_blank" className="sourceLink">{source.name}</a></div>)}
                </div>
            </main>


        </div>
    );
}


export default App;
