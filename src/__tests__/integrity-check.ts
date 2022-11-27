
import { src2imagePath } from "../component/Image";
import { Quiz } from "../quiz/Quiz";
import * as fs from "fs";
import * as path from "path";
 

var q = new Quiz();
    q.init(0, [], 0);


    describe("Chequeando integridad de la data...", ()=>{


        test("Chequear que todas las preguntas tengan respuesta...", ()=>{

    
            for (let i = 0; i < q.totalAvailableQuestions(); i++) {
        
                const question = q.getRawQuestion(i);
        
                if( question.correctIndex<0 || question.correctIndex>question.options.length )
                {
                    throw new Error(`La pregunta #${question.numberInProvider+1} de la fuente #${question.source.index!+1} (${question.source.name}) no tiene solución.`);
                }
        
            }
        
        })

        test("Chequear que todas las preguntas apunten a imágenes que existan...", ()=>{
 
            process.env['PUBLIC_URL'] = "";

            for (let i = 0; i < q.totalAvailableQuestions(); i++) {
        
                const question = q.getRawQuestion(i);
                const imgSrc = question.image? path.resolve(__dirname, `../../public${src2imagePath( question.image )}`)  : null;

        
                if( imgSrc && !fs.existsSync(imgSrc) )
                {
                    throw new Error(`La pregunta #${question.numberInProvider+1} de la fuente #${question.source.index!+1} (${question.source.name}) apunta a una imagen que no existe ---> ${imgSrc}`);
                }
        
            }
        
        })

    });

