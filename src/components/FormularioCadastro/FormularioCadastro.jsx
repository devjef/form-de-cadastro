import React, { useState } from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({ aoEnviar, validaCPF }) {

  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validaCPF={validaCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
