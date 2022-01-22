import React from "react";
import Main from "./layout/Main";
import { GlobalStyle } from "./styles/Global.styled";
import { BrowserRouter as Router } from "react-router-dom";
import Routess from "./router/Routess";

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />
        <Router>
          <Routess />
        </Router>
      </Main>
    </>
  );
};

export default App;
