import React, { Component } from "react";
import { Modal } from "../Modal/Modal";
import {
  LeiaMais,
  BtnDelete,
  TxtPostagem,
  Descricao,
  Titulo,
  ConteudoPostagem,
  ImagemPostagem,
  PostagemContainer,
} from "./ListaPostagensStyles";


export class ListaPostagens extends Component {
  state = {
    descricaoCompleta: null,
    modal: false,
  };

  exibirDescricao = (descricao) => {
    this.setState({ descricaoCompleta: descricao, modal: true });
  };

  fecharModal = () => {
    this.setState({ modal: false });
  };

  limiteDescricao = (descricao) => {
    if (descricao.length > 400) {
      return (
        <>
          {descricao.substring(0, 400)}...
          <LeiaMais onClick={() => this.exibirDescricao(descricao)}>
            Leia mais
          </LeiaMais>
        </>
      );
    }
    return descricao;
  };

  render() {
    const { postagens, referencia, Deletar } = this.props;
    const { descricaoCompleta, modal } = this.state;

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
                <Descricao>
                  {this.limiteDescricao(postagem.descricao)}
                </Descricao>
              </TxtPostagem>
              <BtnDelete onClick={() => Deletar(postagem.id)}>
                Deletar
              </BtnDelete>
            </ConteudoPostagem>
          </PostagemContainer>
        ))}
        <Modal
          aberto={modal}
          fechado={this.fecharModal}
          descricaoCompleta={descricaoCompleta}
        />
      </div>
    );
  }
}
