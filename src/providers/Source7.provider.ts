import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import { source as data} from "../data/source7";

//CATEGORIA B AUTOS Y CAMIONETAS HASTA 3.500KG: TEST 1
//Categoria B Autos y Camionetas hasta 3.500kg: Test 2
//Categoria B Autos y Camionetas hasta 3.500kg: Test 3
//Categoria B Autos y Camionetas hasta 3.500kg: Test 4
//Categoria B Autos y Camionetas hasta 3.500kg: Test 5

export class Source7Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"Señales viales - buenosaires.gob.ar",
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