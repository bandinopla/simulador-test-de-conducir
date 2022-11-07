import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import {Source4 as data} from "../data/source4";

export class Source4Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"test-conducir.yurkap.com",
            link:"https://test-conducir.yurkap.com/test-de-conducir/respuestas-correctas"
        }
    }

    totalQuestions() {
        return data.length;
    }

    getQuestion(index: number):Question {
        const q = data[index];

        return {
            text : q.text ,
            image: q.img,
            correctIndex: q.options.findIndex(question=>question.correct),
            options: q.options.map(o=>o.text)
        }
    };
}