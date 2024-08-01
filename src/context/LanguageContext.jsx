import { useState, createContext } from "react";

export const LanguageContext = createContext();

const languages = ["de", "en", "fr"];

export function LanguageProvider({ children }) {
  // de, en, jp
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider
      value={{
        language,
      }}
    >
      <h2>Language: {language}</h2>
      {children}
    </LanguageContext.Provider>
  );
}
