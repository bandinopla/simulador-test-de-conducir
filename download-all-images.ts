import { Quiz } from './src/quiz/Quiz';
import * as http from "http";
import * as https from "https";
import * as fs from "fs"


/**
 * Escanea todas las preguntas y descarga las imagenes a la carpeta public si es que no fueron ya descargadas...
 * Por las dudas de que los servidores caigan o dejen de estar disponibles...
 * 
 * Sugerido por @charistae https://www.reddit.com/user/charistae/
 * https://www.reddit.com/r/argentina/comments/yt42lg/comment/iw2psha/?context=3
 */

let downloadOp = Promise.resolve(null);

const q = new Quiz();

    q.init(-1, new Array(q.sourceLinks.length).fill(true) ,1);

    for (let i = 0; i < q.limit ; i++) 
    {
        const question = q.getRawQuestion(i);

        if( question.image && question.image?.indexOf("http")>-1 )
        {
            let request = http.get;

            if( question.image.indexOf("https")==0 )
            {
                request = https.get;
            }

            const filepath = "./public/"+question.image.substring(0, question.image.lastIndexOf("/")).replace(/\W+/g,"-");
            const filename = question.image.split("/").pop();
            const image = question.image;

            if( !fs.existsSync(filepath) )
            {
                fs.mkdirSync(filepath)
            } 

            downloadOp = downloadOp.then(_=>new Promise(resolve=>{ 

                const finalFile = filepath+"/"+filename;

                if( !fs.existsSync(finalFile) )
                {
                    console.log(`Downloading ${image}...`);

                    request(image, res=> {

                        const { statusCode } = res; 
        
                        if ( statusCode === 200) 
                        {  
        
                            if( !fs.existsSync(finalFile) )
                            {
                                res.pipe(fs.createWriteStream(finalFile))
                                            .on('error', ()=>{
                                                console.log("No se pudo descargar: "+question.image);
                                            });
                            } 
                            
                        }
                        else 
                        {
                            res.resume();
                        }
    
                        resolve(null);
                    })
                } 
                else 
                {
                    resolve(null);
                } 
                

            }))

            
        }
        
    }