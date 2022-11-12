import { useEffect, useMemo, useRef, useState } from "react";

export const Image: React.FC<{ src: string }> = ({ src }) => {

    const imageSrc = useMemo(() =>{
        
        if( src.indexOf("http") > -1 )
        {
            return process.env.PUBLIC_URL+"/"+src.substring(0, src.lastIndexOf("/")).replace(/\W+/g,"-")+"/"+src.split("/").pop();
        }
        else 
        {
            return src;
        } 
    
    }, [src]);


    const ref = useRef<HTMLImageElement>(null);
    const [loadedSrc, setLoadedSrc] = useState("");

    useEffect(() => {

        if (ref.current) {
            const emiter = ref.current;

            emiter.onload = () => {
                setLoadedSrc(src);
            }

            return () => { emiter.onload = null };
        }



    }, [src]);

    return <>
        {loadedSrc != src ? <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>Cargando imagen...</div> : ""}
        <a href={imageSrc} target="_blank" style={{display:"none"}}>
            <img src={imageSrc} ref={ref} loading="eager" style={{ display: loadedSrc == src ? "block" : "none", margin: "0 auto", marginBottom: 20, minHeight: 300, maxWidth: 800 , border: "2px solid #ccc" }} />
        </a>
        { loadedSrc==src && <div onClick={()=>window.open(imageSrc,"_blank")} style={{ cursor:"pointer", maxWidth:"100%", marginBottom: 20, backgroundPositionY:"center", backgroundPositionX:"center", height:250, backgroundImage:`url(${imageSrc})`, backgroundRepeat:"no-repeat", backgroundSize:"contain"}}></div> }
    </>;
}