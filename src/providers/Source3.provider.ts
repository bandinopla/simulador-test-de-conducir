import { IQuestionProvider, Question } from "./QuestionProvider";

import {Source3 as data} from "../data/source3";

export class Source3Provider implements IQuestionProvider
{
    totalQuestions() {
        return data.questions.length;
    }

    getQuestion(index: number):Question {
        const q = data.questions[index];

        return {
            text : q.q ,
            image: undefined,
            correctIndex: q.a.findIndex(question=>question.correct),
            options: q.a.map(o=>o.option)
        }
    };
}