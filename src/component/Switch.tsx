

export const Switch : React.FC<{ on:boolean, setTo:(newValue:boolean)=>void }> = ({ on, setTo }) =>{

    return <div onClick={(ev)=>setTo(!on)} style={{ textAlign:"center", display:"inline-block", caret:"unset", cursor:"pointer", color:"white", fontWeight:"bold", backgroundColor:on?"green":"red", border:"2px solid #ccc", borderColor:on?"green":"red", padding:5, width:50}}>
                {on?"Sí":"No"}
                </div>
}