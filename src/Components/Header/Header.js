import React from "react";
import styled from "styled-components";
import { Cabecalho, BotaoPostagens } from "./HeaderStyles";

export class Header extends React.Component {
  scrollparaPostagens = () => {
    const { Referencia } = this.props;
    if (Referencia.current) {
      Referencia.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  render() {
    return (
      <Cabecalho>
        <h1>blogCria</h1>
        <BotaoPostagens onClick={this.scrollparaPostagens}>
          Postagens
        </BotaoPostagens>
      </Cabecalho>
    );
  }
}
