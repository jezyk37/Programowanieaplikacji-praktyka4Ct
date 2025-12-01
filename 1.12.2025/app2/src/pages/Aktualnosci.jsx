import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";

export default function Aktualnosci() {
  const { dark } = useContext(ThemeContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews([
      { id: 1, title: "Nowa trasa w Tatrach otwarta!" },
      { id: 2, title: "Zimowe warsztaty fotograficzne" }
    ]);
  }, []);

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>Aktualności</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
