import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import { source as data} from "../data/source6";
 

export class Source6Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"Manual de conducción vehicular/2022 - buenosaires.gob.ar",
            link:"https://www.buenosaires.gob.ar/sites/gcaba/files/manual_2022_compressed.pdf"
        }
    }


    totalQuestions() {
        return data.length;
    }

    getQuestion(index: number):Question {  
        return data[index]
    };
}