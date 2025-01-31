import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Statistics from "./pages/Statistics";
import Main from "./pages/Main";
import Map from "./pages/Map";
import IndoEuropean from "./pages/LanguageFamilies/IndoEuropean";
import Language from "./pages/Language";
import TranslationInstructions from "./pages/TranslationInstructions"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/instructions" element={<TranslationInstructions />} />

          {/* The next two pages are being rendered dynamically. If you want to access their properties, refer to the JSON files */}
          {/* Language Families */}
          <Route path="/languagefamilies/Indo-European" element={<IndoEuropean />} />

          {/* Languages */}
          <Route path="/languages/:language" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
