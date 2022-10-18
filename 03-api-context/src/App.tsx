import "./App.css";
import ChangeLanguage from "./components/ChangeLanguage";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageContext>
        <ChangeLanguage />
      </LanguageContext>
    </div>
  );
}

export default App;
