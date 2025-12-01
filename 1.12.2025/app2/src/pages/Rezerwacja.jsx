import { useState, useContext } from "react";
import { ThemeContext } from "../App";

export default function Rezerwacja() {
  const { dark } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", people: 1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za rezerwację, ${form.name}!`);
  };

  return (
    <div className={dark ? "dark-page" : ""}>
      <h1>Rezerwacja</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Imię" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="people" type="number" min="1" value={form.people} onChange={handleChange} required />
        <button type="submit">Zarezerwuj</button>
      </form>
    </div>
  );
}
