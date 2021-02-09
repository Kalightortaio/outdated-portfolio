import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return(
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={Theme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
