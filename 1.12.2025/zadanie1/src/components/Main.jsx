import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Main() {
  const { motyw, setMotyw } = useContext(ThemeContext);

  return (
    <>
    <div className="wybor">
        <label><strong>Wybierz motyw:</strong> </label>
        <select value={motyw} onChange={(e) => setMotyw(e.target.value)}>
          <option value="czerwony">Czerwony (tło: czerwone, tekst: biały)</option>
          <option value="zielony">Zielony (tło: zielone, tekst: pomarańczowy)</option>
          <option value="niebieski">Niebieski (tło: niebieskie, tekst: czarny)</option>
        </select>
    </div>
    

    <div className={`main ${motyw}`}>
      

      <p style={{ marginTop: "30px" }}>
        To jest sekcja główna. Wszystkie komponenty korzystają z aktualnego 
        stylu przekazywanego przez <code>Context</code> i <code>useContext</code>.
      </p>
    </div>
    </>
  );
}
