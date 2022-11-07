import { IQuestionProvider, Question, SourceLink } from "./QuestionProvider";

import {Source3 as data} from "../data/source3";

export class Source3Provider implements IQuestionProvider
{
    get source(): SourceLink {
        return {
            name:"tramitesonline.top",
            link:"https://tramitesonline.top/solo-tipo-B/"
        }
    }

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