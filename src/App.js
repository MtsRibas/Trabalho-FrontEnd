import React from "react";
import { Header } from "./Components/Header/Header";
import styled from "styled-components";
import { Banner } from "./Components/Banner/Banner";

const Main = styled.div`
  padding: 0em 7em;
`;

function App() {
  return (
    <Main>
      <Header />
      <Banner />
      
    </Main>
  );
}

export default App;
