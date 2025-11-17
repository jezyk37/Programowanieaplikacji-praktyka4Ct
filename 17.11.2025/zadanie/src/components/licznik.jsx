import { useState } from "react";

function Licznik(){

    const [Licznik,setLicznik] = useState(0)

    return(
        <>
        <h2>
        Licznik: {Licznik}
        </h2>
        <hr/>
        <div>
            <button onClick={()=>setLicznik(wartosc=>wartosc+1)}>Licznik+++</button>
            <button onClick={()=>setLicznik(0)}>Reset</button>
        </div>
        </>
    )
}

export default Licznik;