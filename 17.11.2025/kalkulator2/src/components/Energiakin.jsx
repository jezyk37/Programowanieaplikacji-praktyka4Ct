import { useState } from "react";
    
function Energiakin(){

    const[liczba1,setLiczba1] = useState(0)
    const[liczba2,setLiczba2] = useState(0)
    const[wynik, setWynik] = useState(0)

    const oblicz = () =>{
        setWynik( (parseInt(liczba1)*(parseInt(liczba2)*parseInt(liczba2)))/2)
    }

    return(
        <>
            <h1>Energia Potencjalna</h1>
            <hr />
            m: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj mase" /> <br/>
            v: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj prędkosc" /> <br/>
            wynik: {wynik}
            <hr />
            <button onClick={()=> oblicz()}>Oblicz!</button>
        
        </>
    )
}

export default Energiakin