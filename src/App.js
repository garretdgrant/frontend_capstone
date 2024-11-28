import "./App.css";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import Header from "./components/Header/Header";
function App() {
  return (
    <ColorModeProvider forcedTheme="light">
      <Provider>
        <Header />
      </Provider>
    </ColorModeProvider>
  );
}

export default App;
