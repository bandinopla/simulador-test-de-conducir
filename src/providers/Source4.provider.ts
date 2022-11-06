import { IQuestionProvider, Question } from "./QuestionProvider";

import {Source4 as data} from "../data/source4";

export class Source4Provider implements IQuestionProvider
{
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