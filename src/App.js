import "./App.css";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage'
function App() {
  return (
    <ColorModeProvider forcedTheme="light">
      <Provider>
        <Header />
        <HomePage />
      </Provider>
    </ColorModeProvider>
  );
}

export default App;
