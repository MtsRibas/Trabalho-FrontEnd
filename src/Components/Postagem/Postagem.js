import React from "react";

export class Postagem extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    foto: "",
  };

  onChangeTitulo = (event) => {
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
      foto === "" ? "https://picsum.photos/seed/picsum/200/300" : foto;
    const novaPostagem = { titulo, descricao, foto: fotoFinal };
    this.props.PostCriado(novaPostagem);

    this.setState({ titulo: "", descricao: "", foto: "" });
  };

  render() {
    return (
      <div>
        <p>Título</p>
        <input
          type="text"
          maxLength={50}
          name="Titulo"
          onChange={this.onChangeTitulo}
          value={this.state.titulo}
          placeholder="Título"
          required
        />
        <div>
          <p>Descrição</p>
          <input
            type="text"
            name="Descricao"
            onChange={this.onChangeDescricao}
            value={this.state.descricao}
            placeholder="Descrição"
            required
          />
        </div>

        <p>Foto</p>
        <input
          type="text"
          name="foto"
          onChange={this.onChangeFoto}
          value={this.state.foto}
          placeholder="URL da Foto"
        />
        <button onClick={this.AdicionarPostagem}>Adicionar</button>
      </div>
    );
  }
}
