import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Container from "@material-ui/core/Container"
import {validaCPF, validaSenha} from './models/cadastro'
import ValidacoesCadastro from './context/ValidacoesCadastro';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <ValidacoesCadastro.Provider value={{cpf: validaCPF, senha: validaSenha, nome: validaSenha}}>
        <FormularioCadastro aoEnviar={enviarFormulario} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function enviarFormulario(dados) {
  console.log(dados);
};

export default App;
