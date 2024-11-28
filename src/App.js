import "./App.css";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <ColorModeProvider forcedTheme="light">
      <Provider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<h1>404</h1>} /> {/* Optional 404 */}
          </Routes>
        </Router>
      </Provider>
    </ColorModeProvider>
  );
}

export default App;
