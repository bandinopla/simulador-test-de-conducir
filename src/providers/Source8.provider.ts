import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import { source as data} from "../data/source8";
 

export class Source8Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"(En progreso) Preguntas Examen Teórico Licencia de Conducir",
            link:"http://www.gob.gba.gov.ar/portal/portalgba/dppsv/cuestionario.pdf"
        }
    }


    totalQuestions() {
        return data.length;
    }

    getQuestion(index: number):Question {  
        return data[index]
    };
}