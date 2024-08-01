import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <MainContent />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
