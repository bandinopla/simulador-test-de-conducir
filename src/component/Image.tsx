import { useEffect, useRef, useState } from "react";

export const Image: React.FC<{ src: string }> = ({ src }) => {

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
        <a href={src} target="_blank"><img src={src} ref={ref} loading="eager" style={{ display: loadedSrc == src ? "block" : "none", margin: "0 auto", marginBottom: 20, height: 300, border: "2px solid #ccc" }} /></a>
    </>;
}