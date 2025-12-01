import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Oferta() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>Oferta</h1>
      <ul>
        <li>Wycieczki górskie z przewodnikiem</li>
        <li>Noclegi w komfortowych pensjonatach</li>
        <li>Wypożyczalnia sprzętu turystycznego</li>
        <li>Warsztaty fotograficzne i survivalowe</li>
      </ul>
    </div>
  );
}
