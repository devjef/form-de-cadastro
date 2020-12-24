import React, { useState, useEffect } from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

function FormularioCadastro({ aoEnviar }) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} anterior={anterior} />,
    <DadosEntrega aoEnviar={coletarDados} anterior={anterior} />,
    <Typography variant="h5" align="center">Obrigado pelo cadastro {dadosColetados.nome}!</Typography>
  ];

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual+1)
  };

  function anterior() {
    setEtapaAtual(etapaAtual-1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
};

export default FormularioCadastro;
