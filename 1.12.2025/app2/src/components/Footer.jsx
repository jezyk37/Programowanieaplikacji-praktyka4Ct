import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={dark ? "dark" : ""}>
      &copy; 2025 NT Tatr. Wszelkie prawa zastrzeżone.
    </footer>
  );
}
