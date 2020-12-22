import React, { useState } from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validaCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo() {
    setEtapaAtual(etapaAtual+1)
  }

  function anterior() {
    setEtapaAtual(etapaAtual-1)
  }

  function FormularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />
      case 1:
        return <DadosPessoais aoEnviar={proximo} validaCPF={validaCPF} />
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />
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
