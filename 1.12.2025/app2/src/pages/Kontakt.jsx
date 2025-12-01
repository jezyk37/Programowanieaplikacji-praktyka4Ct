import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Kontakt() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>Kontakt</h1>
      <p>Email: kontakt@nttatr.pl</p>
      <p>Telefon: +48 123 456 789</p>
      <p>Adres: ul. Górska 12, Zakopane</p>
    </div>
  );
}
