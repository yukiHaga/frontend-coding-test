import { ThemeProvider } from "styled-components";
import { myTheme } from "./types/my-theme";
import Router from "./Router";
import Provider from "./context/Provider";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Provider>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
