import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Onas from "./pages/Onas";
import Kontakt from "./pages/Kontakt";
import Aktualnosci from "./pages/Aktualnosci";
import Galeria from "./pages/Galeria";
import Oferta from "./pages/Oferta";
import Rezerwacja from "./pages/Rezerwacja";

import "./styles.css";

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <Router>
        <Header />
        <main className={dark ? "dark" : ""}>
          <Routes>
            <Route path="/o-nas" element={<Onas />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/aktualnosci" element={<Aktualnosci />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/rezerwacja" element={<Rezerwacja />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
