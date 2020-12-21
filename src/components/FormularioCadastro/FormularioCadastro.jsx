import React, { useState } from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validaCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(3);

  function FormularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosPessoais aoEnviar={aoEnviar} validaCPF={validaCPF} />
      case 1:
        return <DadosUsuario />
      case 2:
        return <DadosEntrega />
      default:
        return <Typography>Erro ao carregar Formulário</Typography>
    }

  }

  return (
    <>
      {FormularioAtual(etapaAtual)}
    </>
  );
}

export default FormularioCadastro;
