import { useState } from "react";
    
function Zdjecie(){

   
    const Imie = "Jakub"
    const Nazwisko = "Moliński"
    

    return(
        <>
            <h1>Imie i Nazwisko</h1>
            <hr />
            {Imie} {Nazwisko}
            <hr />
        
        </>
    )
}

export default Zdjecie