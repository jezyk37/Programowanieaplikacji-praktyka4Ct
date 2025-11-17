import { use, useEffect,useState } from "react"
import Dodawanie from "./components/dodawanie"
import Dzielenie from "./components/dzielenie"
import Mnozenie from "./components/mnozenie"
import Odejmowanie from "./components/odejmowanie"
import Zerowy from "./components/Zerowy"



function App() {

  const [sterowanie, setSterowanie] = useState("0")
  const [operaje,setOperacje] = useState(<Zerowy/>)
  useEffect(()=>{
    if(sterowanie==="0") setOperacje(<Zerowy/>)
    if(sterowanie==="1") setOperacje(<Dodawanie/>)
    if(sterowanie==="2") setOperacje(<Odejmowanie/>)
    if(sterowanie==="3") setOperacje(<Mnozenie/>)
    if(sterowanie==="4") setOperacje(<Dzielenie/>)
  })

  return (
    <>
      <div>
        <select onChange={(e)=>setSterowanie(e.target.value)}>
          <option value="0">Zero</option>
          <option value="1">Dodawanie</option>
          <option value="2">Odejmowanie</option>
          <option value="3">Mnozenie</option>
          <option value="4">Dzielenie</option>
          
        </select>
        {operaje}
      </div>
    </>
  )
}

export default App
