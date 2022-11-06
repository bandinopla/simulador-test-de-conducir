import { IQuestionProvider, Question } from "./QuestionProvider";

import data from "../data/source1";

export class Source1Provider implements IQuestionProvider
{
    totalQuestions() {
        return data.length;
    }

    getQuestion(index: number):Question {
        const q = data[index];

        return {
            text : q.text ,
            image: q.img,
            correctIndex: q.responses.findIndex(question=>question.correct),
            options: q.responses.map(o=>o.text)
        }
    };
}