import React from "react";
import styled from "styled-components";
const Descricao = styled.textarea`
  width: 100%;
  height: 10rem;
  max-width: 100%;
  max-height: 15rem;
`;

export class Postagem extends React.Component {
  state = {
    titulo: "",
    descricao: "",
  };

  onChangeTitulo = (event) => {
    let titulo = event.target.value;
    this.setState({ titulo: event.target.value });
    console.log(this.state.titulo);
    if (titulo.length >= 50) {
      alert("o texto nao pode ser maior que 50");
    }
  };
  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
    console.log(this.state.descricao);
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            maxLength={50}
            name="Titulo"
            onChange={this.onChangeTitulo}
            value={this.state.titulo}
          />
        </div>
        <Descricao onChange={this.onChangeDescricao}></Descricao>
      </>
    );
  }
}
