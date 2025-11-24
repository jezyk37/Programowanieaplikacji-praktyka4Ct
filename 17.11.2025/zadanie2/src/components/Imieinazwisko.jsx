import { useState } from "react";
    
function ImieiNazwisko(){

   
    const [Imie, setImie] = useState("Jakub")
    const [Nzawisko, setNzawisko] = useState("Moliński")    

    return(
        <>
            <h1>Imie i Nazwisko</h1>
            <hr />
            <div>
            {Imie} {Nazwisko}
            </div>
            <hr />
        
        </>
    )
}

export default ImieiNazwisko