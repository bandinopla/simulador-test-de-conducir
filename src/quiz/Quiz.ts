import { NumeredQuestion, Question } from "../providers/QuestionProvider";
import { Source1Provider } from "../providers/Source1.provider";
import { Source2Provider } from "../providers/Source2.provider";



export class Quiz {

    private providers = [
        new Source1Provider(),
        new Source2Provider()
    ]

    private _limit:number;
    private _sinResponder: NumeredQuestion[];
    private _incorrectas: number;

    constructor( limit:number=40 )
    {
        this._limit = limit;
        this._incorrectas = 0;
        this._sinResponder = [];
    }

    private totalQuestions() {
        return this.providers.reduce( (tot, prov)=>tot+prov.totalQuestions() ,0)
    }

    public get limit(){ return this._limit };

    init() {

        this._incorrectas = 0;

        //flatmapear el array...
        const all: Question[] = this.providers.reduce( (rtrn, prov)=>{

            for (let i = 0; i < prov.totalQuestions(); i++) {

                /** @ts-ignore */
                rtrn.push( prov.getQuestion(i) );
            }

            return rtrn;
        } ,[]);
 
        // mix array
        for (let i = all.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [all[i], all[j]] = [all[j], all[i]];
        } 

        // limitar preguntas a este numero
        all.length = this._limit;

        this._sinResponder = all.map( (q,i)=>({
            ...q,
            number: i+1
        })); 
    }

    getQuestion() {
        return this._sinResponder[0];
    }

    answer( index:number ) {

        const isCorrect = this._sinResponder[0].correctIndex == index;

        if( !isCorrect ) 
        {
            this._incorrectas++;
        }

        this._sinResponder.shift();

        return isCorrect;
    }

 
    public get correctas() {
        return this.limit - this._incorrectas;
    }

    public get incorrectas() {
        return this._incorrectas;
    }
}