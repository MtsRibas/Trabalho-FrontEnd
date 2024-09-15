import React, { Component } from "react";
import styled from "styled-components";

const PostagemContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;

const ImagemPostagem = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 430px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const ConteudoPostagem = styled.div`
  font-family: Helvetica, sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Titulo = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`
const Descricao = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
`

const TxtPostagem = styled.div`
`//essa .div serve apenas para juntar os dois textos (titulo + descricao) nao precisa adicionar nada nela

const BtnDelete = styled.button`
  width: 35%;
  font-family: Helvetica, sans-serif;
  padding: 16px 48px;
  border-radius: 16px;
  background-color: transparent;
  border: 2px solid red;
  color: red;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: red;
    border: 2px solid red;
    color: white;
  }
`

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
              <TxtPostagem>
                <Titulo>{postagem.titulo}</Titulo>
                <Descricao>{postagem.descricao}</Descricao>
              </TxtPostagem>
              <BtnDelete onClick={() => Deletar(postagem.id)}>Deletar</BtnDelete>
            </ConteudoPostagem>
          </PostagemContainer>
        ))}
      </div>
    );
  }
}

export default ListaPostagens;
