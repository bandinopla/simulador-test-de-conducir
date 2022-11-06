import { IQuestionProvider, Question } from "./QuestionProvider";

import {quizJSON as data} from "../data/source2";

export class Source2Provider implements IQuestionProvider
{
    totalQuestions() {
        return data.questions.length;
    }

    getQuestion(index: number):Question {
        const q = data.questions[index];

        return {
            text : q.q ,
            image: q.i!==""? q.i.match(/src=\"([^\"]+)\"/)![1] : undefined,
            correctIndex: q.a.findIndex(question=>question.correct),
            options: q.a.map(o=>o.option)
        }
    };
}