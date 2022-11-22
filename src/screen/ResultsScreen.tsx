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

        <div style={{marginTop:-20}} className="result-gifs-container mb-9">
            { !aprobo && <iframe src="https://giphy.com/embed/tFMDtM35rm4V2" width="470" height="270" frameBorder="0" className="giphy-embed drop-shadow-md" allowFullScreen></iframe> }
            { aprobo && percent<100 && <iframe src="https://giphy.com/embed/gVoBC0SuaHStq" width="270" height="280" frameBorder="0" className="giphy-embed drop-shadow-md" allowFullScreen></iframe> }
            { aprobo && percent>=100 && <iframe src="https://giphy.com/embed/BPJmthQ3YRwD6QqcVD" width="480" height="270" frameBorder="0" className="giphy-embed drop-shadow-md" allowFullScreen></iframe>}
        </div>

        <div style={{padding:10, fontSize:"2em",  backgroundColor:aprobo?"green":"red", color:"white"}} className="text-center">
            { aprobo?"Aprobaste!" : "Fallaste, seguí intentando."}
        </div>

        <div className='next-question'>
            <a href="#" onClick={restart}>↻ Reiniciar</a>
        </div>
    </div>

}