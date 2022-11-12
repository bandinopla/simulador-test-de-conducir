import { NumeredQuestion, Question, SourceLink } from "../providers/QuestionProvider";
import { Source1Provider } from "../providers/Source1.provider";
import { Source2Provider } from "../providers/Source2.provider";
import { Source3Provider } from "../providers/Source3.provider";
import { Source4Provider } from "../providers/Source4.provider";
import { Source5Provider } from "../providers/Source5.provider";
import { Source6Provider } from "../providers/Source6.provider";
import { Source7Provider } from "../providers/Source7.provider";



export class Quiz {

    private providers = [
        new Source1Provider(),
        new Source2Provider(),
        new Source3Provider(),
        new Source4Provider(),
        new Source5Provider(), 
        new Source7Provider(),
        new Source6Provider(),
    ]

    private _limit:number;
    private _sinResponder: NumeredQuestion[];
    private _incorrectas: number;
    private _correctPercentToPass: number;
    private _totalAvailableQuestions: number;

    constructor( )
    {
        this._limit = 0;
        this._incorrectas = 0;
        this._sinResponder = [];
        this._correctPercentToPass = 0;
        this._totalAvailableQuestions = 0;
    }

    totalAvailableQuestions() {
        return this._totalAvailableQuestions; //this.providers.reduce( (tot, prov)=>tot+prov.totalQuestions() ,0)
    }

    public get limit(){ return this._limit };


    restart() {
        this._limit = 0; 
        this._sinResponder = []; 
    }

    init( limit:number, providersON:boolean[], seApruebaCon:number ) {

        this._limit = limit;
        this._incorrectas = 0;
        this._correctPercentToPass = seApruebaCon;

        //flatmapear el array...
        const all: Question[] = this.providers.reduce( (rtrn, prov, provIndex)=>{

            if( providersON[provIndex] )
            {
                for (let i = 0; i < prov.totalQuestions(); i++) {

                    /** @ts-ignore */
                    rtrn.push( prov.getQuestion(i) );
                }
            } 

            return rtrn;
        } ,[]);
 
        // mix array
        for (let i = all.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [all[i], all[j]] = [all[j], all[i]];
        } 

        this._totalAvailableQuestions = all.length;

        // limitar preguntas a este numero
        all.length = Math.min( this._limit, all.length );

        //en caso de que haya cambiado...
        this._limit = all.length;

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

    public get sourceLinks() : SourceLink[] {
        return this.providers.map(p=>p.source)
    }

    public percent() {
        return Math.round(this.correctas / this.limit * 100);
    }
    public aprobo() {
        return this.percent()>=this._correctPercentToPass;
    }

    public termino() {
        return this._limit>0 && this._sinResponder.length==0;
    }
}