import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import data from "../data/source5";

//CATEGORIA B AUTOS Y CAMIONETAS HASTA 3.500KG: TEST 1
//Categoria B Autos y Camionetas hasta 3.500kg: Test 2
//Categoria B Autos y Camionetas hasta 3.500kg: Test 3
//Categoria B Autos y Camionetas hasta 3.500kg: Test 4
//Categoria B Autos y Camionetas hasta 3.500kg: Test 5

export class Source5Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"driverschool.com.ar",
            link:"http://www.driverschool.com.ar/manuales/iesvi"
        }
    }


    totalQuestions() {
        return data.questions.length;
    }

    getQuestion(index: number):Question {
        const q = data.questions[index];

        return {
            text : q.Name ,
            image: q.Image? `http://www.driverschool.com.ar/iesvi/evaluaciones/imagenes/${q.Image}`:undefined,
            correctIndex: q.Options.findIndex(option=>option.IsAnswer),
            options: q.Options.map(o=>o.Name)
        }
    };
}