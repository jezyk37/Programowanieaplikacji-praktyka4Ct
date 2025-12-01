import React from "react"
import Informacje from "./components/informacja"

export const NazwaMotywu = React.createContext();

function App() {

  return (
    <>
      <NazwaMotywu.Provider value={{stronamocy: "ciemny"}}>
      <Informacje/>
      </NazwaMotywu.Provider>
    </>
  )
}

export default App
