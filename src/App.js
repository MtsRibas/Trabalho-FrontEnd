import React from "react";
import { Header } from "./Components/Header/Header";
import styled from "styled-components";

const Main = styled.div`
  padding: 0em 7em;
`;

function App() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default App;
