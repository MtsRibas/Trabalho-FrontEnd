import React from "react";

import { ModalAberto, ConteudoModal, BotaoFechar } from "./ModalStyles";

export class Modal extends React.Component {
  render() {
    const { aberto, fechado, descricaoCompleta } = this.props;

    if (!aberto) return null;

    return (
      <ModalAberto>
        <ConteudoModal>
          <BotaoFechar onClick={fechado}>&times;</BotaoFechar>
          <p>{descricaoCompleta}</p>
        </ConteudoModal>
      </ModalAberto>
    );
  }
}
