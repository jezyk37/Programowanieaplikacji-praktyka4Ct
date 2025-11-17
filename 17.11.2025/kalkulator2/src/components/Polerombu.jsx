import { useState } from "react";
    
function PoleRombu(){

    const[liczba1,setLiczba1] = useState(0)
    const[liczba2,setLiczba2] = useState(0)
    const[wynik, setWynik] = useState(0)

    const oblicz = () =>{
        setWynik( (parseInt(liczba1)*parseInt(liczba2))/2)
    }

    return(
        <>
            <h1>Pole Rombu</h1>
            <hr />
            d1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj d1" /> <br/>
            d2: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj d2" /> <br/>
            wynik: {wynik}
            <hr />
            <button onClick={()=> oblicz()}>Oblicz!</button>
        
        </>
    )
}

export default PoleRombu