import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Container from "@material-ui/core/Container"
import {validaCPF, validaSenha} from './models/cadastro'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro aoEnviar={enviarFormulario} validacoes={{cpf: validaCPF, senha: validaSenha, nome: validaSenha }} />
      </Container>
    );
  }
}

function enviarFormulario(dados) {
  console.log(dados);
};

export default App;
