import { useState, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style.css";

export const ThemeContext = createContext();

function App() {
  const [motyw, setMotyw] = useState("czerwony");

  return (
    <ThemeContext.Provider value={{ motyw, setMotyw }}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
