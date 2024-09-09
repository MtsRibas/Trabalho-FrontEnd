import React, { Component } from "react";
import styled from "styled-components";

const PostagemContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-top: 50px;
`;

const ImagemPostagem = styled.div`
  img {
    width: 100%;
    height: 430px;
    display: block;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid black;
  }
`;

const ConteudoPostagem = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: top;
`;

export class ListaPostagens extends Component {
  render() {
    const { postagens, referencia, Deletar } = this.props;

    return (
      <div>
        <span ref={referencia}></span>
        {postagens.map((postagem) => (
          <PostagemContainer key={postagem.id}>
            <ImagemPostagem>
              {postagem.foto && (
                <img src={postagem.foto} alt="Imagem do post" />
              )}
            </ImagemPostagem>
            <ConteudoPostagem>
              <p>{postagem.titulo}</p>
              <p>{postagem.descricao}</p>
              <button onClick={() => Deletar(postagem.id)}>Deletar</button>
            </ConteudoPostagem>
          </PostagemContainer>
        ))}
      </div>
    );
  }
}

export default ListaPostagens;
