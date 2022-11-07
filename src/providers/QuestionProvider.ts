export type Question = {
    text:string,
    image?:string,
    options:string[],
    correctIndex:number
}

export type SourceLink = {
    name:string,
    link:string
}

export type NumeredQuestion = {
    number:number
} & Question;

export interface IQuestionProvider {
    totalQuestions:()=>number;
    getQuestion: ( index:number ) => Question;
    get source():SourceLink;
}