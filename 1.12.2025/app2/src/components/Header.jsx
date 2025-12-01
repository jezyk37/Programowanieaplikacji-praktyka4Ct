import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={dark ? "header dark" : "header"}>
      <h1>NT Tatr</h1>
      <nav>
        <Link to="/o-nas">O nas</Link>
        <Link to="/aktualnosci">Aktualności</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/oferta">Oferta</Link>
        <Link to="/rezerwacja">Rezerwacja</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <button onClick={toggleTheme}>
        {dark ? "Jasny motyw" : "Ciemny motyw"}
      </button>
    </header>
  );
}
