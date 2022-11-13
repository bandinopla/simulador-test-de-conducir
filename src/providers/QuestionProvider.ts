export type Question = {
    text:string,
    image?:string,
    options:string[],
    correctIndex:number
}

export type SourceLink = {
    name:string,
    link:string,
    index?:number
}

export type NumeredQuestion = {
    number:number,
    source:SourceLink
} & Question;

export interface IQuestionProvider {
    totalQuestions:()=>number;
    getQuestion: ( index:number ) => Question;
    get source():SourceLink;
}