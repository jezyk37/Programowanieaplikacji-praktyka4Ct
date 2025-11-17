import { useState } from "react";
    
function Poletrojkata(){

    const[liczba1,setLiczba1] = useState(0)
    const[liczba2,setLiczba2] = useState(0)
    const[wynik, setWynik] = useState(0)

    const oblicz = () =>{
        setWynik( (parseInt(liczba1)*parseInt(liczba2))/2)
    }

    return(
        <>
            <h1>Pole trojkata</h1>
            <hr />
            bok: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj bok" /> <br/>
            wysokosc: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj wysokosc" /> <br/>
            wynik: {wynik}
            <hr />
            <button onClick={()=> oblicz()}>Oblicz!</button>
        
        </>
    )
}

export default Poletrojkata