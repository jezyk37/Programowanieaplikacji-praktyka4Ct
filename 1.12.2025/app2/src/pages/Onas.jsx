import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Onas() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>O nas</h1>
      <p>Witamy w NT Tatr – miejscu, gdzie pasja spotyka góry!</p>
      <p>Nasza firma zajmuje się organizacją wycieczek, noclegów i wydarzeń w Tatrach od 2005 roku.</p>
    </div>
  );
}
