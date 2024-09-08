import React from "react";
import styled from "styled-components";

const Obrigatorio = styled.span`
  &::after{
    content: "*";
    color: red;
  }
`

const CampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`
const TituloSection = styled.p`
  padding: 0 0 0 0.4rem;
  margin: 0rem 0rem 0.4rem 0rem;
`

const TituloEFoto = styled.div`
  display: flex;
  flex- direction: row;
  gap: 1rem;
  width: 100%
`

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 70%;
  margin: 3rem 0 0 0;
`

const TxtArea = styled.input `
  font-family: Helvetica, sans-serif;
  height: 2.5rem;
  background-color: #F1F1F1;
  border: none;
  padding: 0.2rem 0 0 0.4rem
`

const TxtAreaDescricao = styled.textarea `
  font-family: Helvetica, sans-serif;
  padding: 0.2rem 0 3rem 0.4rem;
  background-color: #F1F1F1;
  border: none;
  max-width: 100%;
`

const BtnAdicionar = styled.button `
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
`






export class Postagem extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    foto: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value });
    let titulo = this.state.titulo;
    if(titulo.length >= 50){
      alert("Numero de caracteres invalido")
    }
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangeFoto = (event) => {
    this.setState({ foto: event.target.value });
  };

  AdicionarPostagem = () => {
    const { titulo, descricao, foto } = this.state;

    if (!titulo || !descricao) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    const fotoFinal =
      foto === "" ? "https://picsum.photos/seed/picsum/200/300" : foto;
    const novaPostagem = { titulo, descricao, foto: fotoFinal };
    this.props.PostCriado(novaPostagem);

    this.setState({ titulo: "", descricao: "", foto: "" });
  };

  render() {
    return (
      <Form>
        <TituloEFoto>
          <CampoFormulario>
            <TituloSection>Título<Obrigatorio/></TituloSection>
            <TxtArea
              type="text"
              maxLength={50}
              name="Titulo"
              onChange={this.onChangeTitulo}
              value={this.state.titulo}
              placeholder="Título"
              required
            />
          </CampoFormulario>

          <CampoFormulario>
            <TituloSection>Foto</TituloSection>
            <TxtArea
              type="text"
              name="foto"
              onChange={this.onChangeFoto}
              value={this.state.foto}
              placeholder="URL da Foto"
            />
          </CampoFormulario>
        </TituloEFoto>
        
        

        <CampoFormulario>
          <TituloSection>Descrição<Obrigatorio/></TituloSection>
          <TxtAreaDescricao
            type="text"
            name="Descricao"
            onChange={this.onChangeDescricao}
            value={this.state.descricao}
            placeholder="Descrição"
            required
          />
        </CampoFormulario>

        <BtnAdicionar onClick={this.AdicionarPostagem}>Adicionar</BtnAdicionar>

        
      </Form>
    );
  }
}
