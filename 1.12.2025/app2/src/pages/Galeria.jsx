import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Galeria() {
  const { dark } = useContext(ThemeContext);
  const images = [
    "https://climb2change.pl/wp-content/uploads/2025/04/Tatry-wiosna-propozycje-szlakow-climb2change-2-scaled.jpg",
    "https://1.bp.blogspot.com/-7lvK5gKrlYM/UXppJgweO0I/AAAAAAAAUpo/CSo29CN6FGI/s1600/IMG_4914.jpg",
    "https://brubeck.pl/wp-content/uploads/2024/06/tatry-wysokie-szlaki-1.webp"
  ];

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>Galeria</h1>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Tatry ${i+1}`} />
        ))}
      </div>
    </div>
  );
}
