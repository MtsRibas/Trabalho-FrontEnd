import React, { Component, createRef } from "react";
import styled from "styled-components";
import { Header } from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import { ListaPostagens } from "./Components/ListaPostagens/ListaPostagens";
const Main = styled.div`
  padding: 0em 7em;
`;

class App extends Component {
  state = {
    postagens: [],
  };

  referencia = createRef();
  //utilizando uma referencia para poder usar o botao do header para rolar a pagina ate essa area de referencia

  adicionarPostagem = (novaPostagem) => {
    const novaPostagemComId = {
      ...novaPostagem,
      id: Math.random(),
      //aqui estamos gerando novas postagens com id random garantindo que nao tenha ids iguais
    };
    this.setState((post) => ({
      postagens: [...post.postagens, novaPostagemComId],
    }));
  };

  
  deletarPostagem = (id) => {
    this.setState((postagem) => ({
      postagens: postagem.postagens.filter((postagem) => postagem.id !== id),
    }));
  };

  render() {
    return (
      <Main>
        <Header Referencia={this.referencia} />
        <Banner adicionarPostagem={this.adicionarPostagem} />
        <ListaPostagens
          postagens={this.state.postagens}
          referencia={this.referencia}
          Deletar={this.deletarPostagem}
        />
      </Main>
    );
  }
}

export default App;
