import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";

const Main = styled.div`
  padding: 0em 7em;
`;

function App() {
  const [postagens, setPostagens] = useState([]);
  const referencia = useRef(null);

  const adicionarPostagem = (novaPostagem) => {
    setPostagens([...postagens, novaPostagem]);
  };

  return (
    <Main>
      <Header Referencia={referencia} />
      <Banner adicionarPostagem={adicionarPostagem} />
      <div>
        <span ref={referencia}></span>
        {postagens.map((postagem, index) => (
          <div key={index}>
            <p>{postagem.titulo}</p>
            <p>{postagem.descricao}</p>
            {postagem.foto && <img src={postagem.foto} alt="Imagem do post" />}
          </div>
        ))}
      </div>
    </Main>
  );
}

export default App;
