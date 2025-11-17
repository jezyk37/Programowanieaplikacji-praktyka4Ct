import {  useEffect,useState } from "react"
import PoleKola from "./components/PoleKola"
import Zerowy from "./components/Zerowy"
import PoleRombu from "./components/Polerombu"
import Poletrojkata from "./components/Poletrojkata"
import PoleProstokata from "./components/PoleProstokata"
import EnergiaPot from "./components/Energiapot"
import Energiakin from "./components/Energiakin"



function App() {

  const [sterowanie, setSterowanie] = useState("0")
  const [operaje,setOperacje] = useState(<Zerowy/>)
  useEffect(()=>{
    if(sterowanie==="0") setOperacje(<Zerowy/>)
    if(sterowanie==="1") setOperacje(<PoleKola/>)
    if(sterowanie==="2") setOperacje(<PoleRombu/>)
    if(sterowanie==="3") setOperacje(<Poletrojkata/>)
    if(sterowanie==="4") setOperacje(<PoleProstokata/>)
    if(sterowanie==="5") setOperacje(<EnergiaPot/>)
    if(sterowanie==="6") setOperacje(<Energiakin/>)
  },[])

  return (
    <>
      <div>
        <select onChange={(e)=>setSterowanie(e.target.value)}>
          <option value="0">Zero</option>
          <option value="1">Pole Koła</option>
          <option value="2">Pole rombu</option>
          <option value="3">Pole Trojkata</option>
          <option value="4">Pole Prostokata</option>
          <option value="5">Energia Potencjalna</option>
          <option value="6">energia Kinetyczna</option>
          
          
        </select>
        {operaje}
      </div>
    </>
  )
}

export default App
