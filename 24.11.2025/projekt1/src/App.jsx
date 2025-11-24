import Aplikacja from "./components/aplikacja"
import DownLoadDataAxios from "./components/DownLoadDataAxios"
//import DownLoadData from "./components/DownLoadData"

function App() {

  return (
    <>
      <Aplikacja/>
      <hr />
      {/* <DownLoadData/> */}
      <DownLoadDataAxios par = "100"/>
    </>
  )
}

export default App
