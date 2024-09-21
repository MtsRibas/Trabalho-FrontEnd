import React from "react";
import {
  Obrigatorio,
  CampoFormulario,
  TituloSection,
  TituloEFoto,
  Form,
  TxtArea,
  TxtAreaDescricao,
  BtnAdicionar,
} from "./PostagemStyles";

export class Postagem extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    foto: "",
  };

  onChangeTitulo = (event) => {
    let titulo = event.target.value;
    if (titulo.length === 50) {
      alert("Numero de caracteres invalido");
    }
    this.setState({ titulo: event.target.value });
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
      foto === ""
        ? "https://scontent.fitp3-1.fna.fbcdn.net/v/t1.18169-9/15541317_690018271160272_6917414903352852076_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=1QnYMWzntnkQ7kNvgH5hRw-&_nc_ht=scontent.fitp3-1.fna&oh=00_AYDtC1VrriDbW9CAH4mks8ECO1I-IBuJ5w3w0QcI8RcmfA&oe=6716803E"
        : foto;
    const novaPostagem = { titulo, descricao, foto: fotoFinal };
    this.props.PostCriado(novaPostagem);

    this.setState({ titulo: "", descricao: "", foto: "" });
  };

  EnterPressionado = (event) => {
    if (event.key === "Enter") {
      this.AdicionarPostagem();
    }
  };

  render() {
    return (
      <Form>
        <TituloEFoto>
          <CampoFormulario>
            <TituloSection>
              Título
              <Obrigatorio />
            </TituloSection>
            <TxtArea
              type="text"
              maxLength={50}
              name="Titulo"
              onChange={this.onChangeTitulo}
              value={this.state.titulo}
              placeholder="Título"
              required
              onKeyDown={this.EnterPressionado}
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
              onKeyDown={this.EnterPressionado}
            />
          </CampoFormulario>
        </TituloEFoto>

        <CampoFormulario>
          <TituloSection>
            Descrição
            <Obrigatorio />
          </TituloSection>
          <TxtAreaDescricao
            type="text"
            name="Descricao"
            onChange={this.onChangeDescricao}
            value={this.state.descricao}
            placeholder="Descrição"
            required
            onKeyDown={this.EnterPressionado}
          />
        </CampoFormulario>

        <BtnAdicionar onClick={this.AdicionarPostagem}>Postar</BtnAdicionar>
      </Form>
    );
  }
}
