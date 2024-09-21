import styled from "styled-components";

export const ModalAberto = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto; 
`;

export const ConteudoModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  max-height: 300px;
  overflow-y: auto; 
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  word-wrap: break-word; 
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: red;
  }
`;
