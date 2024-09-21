import styled from "styled-components";

export const PostagemContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;

export const ImagemPostagem = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 430px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ConteudoPostagem = styled.div`
  font-family: Helvetica, sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titulo = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  word-wrap: break-word;
  max-width: 100%;
  text-transform: capitalize;
`;

export const Descricao = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  word-wrap: break-word;
  max-width: 100%;
`;

export const TxtPostagem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BtnDelete = styled.button`
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
`;

export const LeiaMais = styled.span`
  font-family: Helvetica, sans-serif;
  color: #0084ff;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 0.5rem;
  display: inline-block;

  &:hover {
    color: #024889;
  }
`;
