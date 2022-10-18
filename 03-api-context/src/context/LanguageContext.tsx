import React, { createContext, useContext, useState } from "react";

const INITIAL_STATE: string = "es";

interface LanguageContextProps {
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  texts: { title: string; description: string };
}

const translation = {
  es: {
    title: "Hola mundo",
    description: "Esto es un context con typescript en español",
  },
  en: {
    title: "Hello world",
    description: "This is a context with typescript en ingles",
  },
};

//create context
const languageContext = createContext({} as LanguageContextProps);

export const LanguageContext = ({ children }: { children: JSX.Element }) => {
  const [language, setLanguage] = useState(INITIAL_STATE);
  const [texts, setTexts] = useState(
    translation[language as keyof typeof translation]
  );

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translation.es);
    } else {
      setLanguage("en");
      setTexts(translation.en);
    }
  };

  return (
    <languageContext.Provider value={{ handleLanguage, texts }}>
      {children}
    </languageContext.Provider>
  );
};

//export context
export const useLanguage = () => {
  const context = useContext(languageContext);

  return context;
};
