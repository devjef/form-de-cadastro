import React, { useState } from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validaCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validaCPF={validaCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} />
  ]

  function proximo() {
    setEtapaAtual(etapaAtual+1)
  }

  function anterior() {
    setEtapaAtual(etapaAtual-1)
  }

  return (
    <>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
