import React, { useState } from "react";
import { Postagem } from "../Postagem/Postagem";
import { TxtBanner, H1, Destaque, H2, Button } from "./BannerStyles";

export const Banner = ({ adicionarPostagem }) => {
  const [mostrarInputs, setMostrarInputs] = useState(false);

  const CriarPost = () => {
    setMostrarInputs(true);
  };

  const PostExibido = (novaPostagem) => {
    adicionarPostagem(novaPostagem);
    setMostrarInputs(false);
  };

  return (
    <>
      <TxtBanner>
        <H1>
          Bem vindo ao <Destaque>blogCria</Destaque>,
        </H1>
        <H2>o lugar das postagens de “cria”!</H2>
        {!mostrarInputs ? (
          <Button onClick={CriarPost}>Criar Postagem</Button>
        ) : (
          <Postagem PostCriado={PostExibido} />
        )}
      </TxtBanner>
    </>
  );
};
