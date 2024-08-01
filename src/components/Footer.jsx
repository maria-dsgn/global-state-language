import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <p
      style={{
        backgroundColor: "purple",
        color: "white",
      }}
    >
      Footer, Language: {language}
    </p>
  );
}
