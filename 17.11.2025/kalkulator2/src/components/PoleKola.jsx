import { useState } from "react";
    
function PoleKola(){

    const[liczba1,setLiczba1] = useState(0)
    const[wynik, setWynik] = useState(0)

    const oblicz = () =>{
        const r = parseFloat(liczba1);
        setWynik((r ** 2 * Math.PI).toFixed(2));
    }

    return(
        <>
            <h1>Pole Koła:</h1>
            <hr />
            Podaj r: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj r" /> <br/>
            wynik: {wynik}
            <hr />
            <button onClick={()=> oblicz()}>Oblicz!</button>
        
        </>
    )
}

export default PoleKola