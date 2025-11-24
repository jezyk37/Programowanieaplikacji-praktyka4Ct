import {  useEffect,useState } from "react"
import Zerowy from "./components/Zerowy"
import ImieiNazwisko from "./components/Imieinazwisko"
import Zdjecie from "./components/zdjecie"





function App() {

  const [sterowanie, setSterowanie] = useState("0")
  const [operaje,setOperacje] = useState(<Zerowy/>)
  
  useEffect(()=>{
    if(sterowanie==="0") setOperacje(<Zerowy/>)
    if(sterowanie==="1") setOperacje(<ImieiNazwisko/>)
    if(sterowanie==="2") setOperacje(<Zdjecie/>)
  },[])

  return (
    <>
      <div>
        <select onChange={(e)=>setSterowanie(e.target.value)}>
          <option value="0">Zero</option>
          <option value="1">Imie i Nazwisko</option>
          <option value="2">Zdjecie</option>
        </select>
        {operaje}
      </div>
    </>
  )
}

export default App
