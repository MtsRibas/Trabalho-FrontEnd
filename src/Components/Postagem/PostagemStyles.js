import styled from "styled-components";


export const Obrigatorio = styled.span`
  &::after {
    content: "*";
    color: red;
  }
`;

export const CampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TituloSection = styled.p`
  padding: 0 0 0 0.4rem;
  margin: 0rem 0rem 0.4rem 0rem;
`;

export const TituloEFoto = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 70%;
  margin: 3rem 0 0 0;
`;

export const TxtArea = styled.input`
  font-family: Helvetica, sans-serif;
  height: 2.5rem;
  background-color: #f1f1f1;
  border: none;
  padding: 0.2rem 0 0 0.4rem;
`;

export const TxtAreaDescricao = styled.textarea`
  font-family: Helvetica, sans-serif;
  padding: 0.2rem 0 3rem 0.4rem;
  background-color: #f1f1f1;
  border: none;
  max-width: 100%;
`;

export const BtnAdicionar = styled.button`
  font-family: Helvetica, sans-serif;
  padding: 16px 48px;
  border-radius: 16px;
  background-color: #0084ff;
  border: 2px solid #0084ff;
  color: #ffff;
  font-size: 16px;
  font-weight: medium;
  cursor: pointer;

  &:hover {
    background-color: #024889;
    border: 2px solid #024889;
  }

  justify-content: center;
  width: 35%;
  `;