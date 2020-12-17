import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Container from "@material-ui/core/Container"

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro aoEnviar={enviarFormulario} validaCPF={validaCPF} />
      </Container>
    );
  }
}

function enviarFormulario(dados) {
  console.log(dados);
};

function validaCPF(cpf) {
  if(cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
