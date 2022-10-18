import { useLanguage } from "../context/LanguageContext";

export default function ChangeLanguage() {
  const { handleLanguage, texts } = useLanguage();
  const { title, description } = texts;

  return (
    <div>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
