import React, { useRef } from "react";
import styled from "styled-components";
import { Header } from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import { Postagem } from "./Components/Postagem/Postagem";

const Main = styled.div`
  padding: 0em 7em;
`;

function App() {
  const referencia = useRef(null);

  return (
    <Main>
      <Header Referencia={referencia} />
      <Banner />
      <Postagem />

      <div ref={referencia}>
        <h2>Seção alvo</h2>
        <p>Conteúdo da seção alvo...</p>
      </div>
    </Main>
  );
}

export default App;
