import styled from "styled-components";


export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Helvetica, sans-serif;
  align-items: center;
`;

export const BotaoPostagens = styled.button`
  padding: 16px 24px;
  border-radius: 16px;
  background-color: transparent;
  border: 2px solid #0084ff;
  color: #0084ff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0084ff;
    color: #ffffff;
  }
`;