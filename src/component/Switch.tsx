

export const Switch : React.FC<{ on:boolean, setTo:(newValue:boolean)=>void }> = ({ on, setTo }) =>{

    return <button className="switch" onClick={(ev)=>setTo(!on)} style={{ backgroundColor:on?"green":"red" }}>
                {on?"Sí":"No"}
                </button>
}