import { useEffect, useState } from "react";
// import "./assets"

import foto1 from "./assets/obraz1.jpg"
import foto2 from "./assets/obraz2.jpg"
import foto3 from "./assets/obraz3.jpg"
import foto4 from "./assets/obraz4.jpg"
import foto5 from "./assets/obraz5.jpg"
import foto6 from "./assets/obraz6.jpg"
import foto7 from "./assets/obraz7.jpg"
import foto8 from "./assets/obraz8.jpg"
import foto9 from "./assets/obraz9.jpg"
import foto10 from "./assets/obraz10.jpg"
import foto11 from "./assets/obraz11.jpg"
import foto12 from "./assets/obraz12.jpg"


function Galeria(){

    const tablica = [
    {id: 0, alt: "Mak", filename: foto1, category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: foto2, category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: foto3, category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: foto4, category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: foto5, category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: foto6, category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: foto7, category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: foto8, category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: foto9, category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: foto10, category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: foto11, category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: foto12, category:3, downloads: 321}
    ]
const [kat,setKat]=useState(tablica)
    function zmianaKategori(zmiana,kategoria){
        console.log(zmiana,kategoria)
        if(zmiana){
        setKat([...tablica])
        }
        else{
        const newT = tablica.filter(el=>el.downloads!=kategoria);
        setKat([...newT])
    }
    }
    return(
        <>
            <h1>Kategorie zdjęć</h1>
            <div className="d-flex">
                <div className="form-check form-switch mx-4">
                    <input type="checkbox" className="form-check-input" role="switch" defaultChecked 
                    onChange={(e)=>zmianaKategori(e.target.checked,1)}/>Kwiaty
                </div>
                <div className="form-check form-switch mx-4">
                    <input type="checkbox" className="form-check-input" role="switch" defaultChecked
                    onChange={(e)=>zmianaKategori(e.target.checked,2)}/>Samochod
                </div>
                <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input" role="switch" defaultChecked
                    onChange={(e)=>zmianaKategori(e.target.checked,3)}/>Zwierzeta
                </div>
            </div>

            {
                tablica.map(el=>{
                    
                const [licznik,setLicznik] = useState(el.downloads)
                    return(
                        <div key={el.id} className="displayFoto">
                            <img src={el.filename} alt={el.alt}/> <br/>
                            Pobrania: {licznik}
                            <br/> 
                            <button onClick={()=>setLicznik(licznik+1)}>Pobierz</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Galeria;