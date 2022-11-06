export type Question = {
    text:string,
    image?:string,
    options:string[],
    correctIndex:number
}

export type NumeredQuestion = {
    number:number
} & Question;

export interface IQuestionProvider {
    totalQuestions:()=>number;
    getQuestion: ( index:number ) => Question;
}