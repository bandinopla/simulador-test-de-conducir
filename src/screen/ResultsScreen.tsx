import { Stat } from "../component/Stat";
import { Quiz } from "../quiz/Quiz";

export const ResultsScreen: React.FC<{ quiz:Quiz, restart: () => void }> = ({ quiz, restart }) => {

    const percent = quiz.percent();
    const aprobo = quiz.aprobo();

    return <div style={{ margin: "100px 0" }}>

        <h1>Resultado ↴</h1>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
            <Stat label="Correctas">{quiz.correctas}</Stat>
            <Stat label="Fallas">{quiz.incorrectas}</Stat>
            <Stat label="Puntaje de acierto">{percent}%</Stat>
        </div>

        <div style={{padding:20, fontSize:"2em", margin:"40px 0", backgroundColor:aprobo?"green":"red", color:"white"}}>
            { aprobo?"Aprobaste!" : "Fallaste, seguí intentando."}
        </div>

        <div className='next-question'>
            <a href="#" onClick={restart}>↻ Reiniciar</a>
        </div>
    </div>

}