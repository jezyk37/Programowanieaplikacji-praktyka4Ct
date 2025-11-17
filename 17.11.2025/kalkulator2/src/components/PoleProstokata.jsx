import { useState } from "react";
    
function PoleProstokata(){

    const[liczba1,setLiczba1] = useState(0)
    const[liczba2,setLiczba2] = useState(0)
    const[wynik, setWynik] = useState(0)

    const oblicz = () =>{
        setWynik(parseInt(liczba1)*parseInt(liczba2))
    }

    return(
        <>
            <h1>Pole Prostokata</h1>
            <hr />
            bok1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj bok1" /> <br/>
            bok2: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj bok2" /> <br/>
            wynik: {wynik}
            <hr />
            <button onClick={()=> oblicz()}>Oblicz!</button>
        
        </>
    )
}

export default PoleProstokata