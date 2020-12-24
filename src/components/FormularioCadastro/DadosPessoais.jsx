import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from './../../context/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors'

function DadosPessoais({ aoEnviar, anterior }) {

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampos, possoEnviar] = useErrors(validacoes);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }
    }}>
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        onBlur={validaCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => setCPF(event.target.value)}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validaCampos}
        name="cpf"
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" checked={promocoes} onChange={(event) => setPromocoes(event.target.checked)}  color="primary" />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" checked={novidades} onChange={(event) => setNovidades(event.target.checked)}  color="primary" />
        }
      />
      <div className="button-box">
      <Button type="button" onClick={anterior} variant="contained" color="default" margin="normal">
        Anterior
      </Button>

      <Button type="submit" variant="contained" color="primary" margin="normal">
        Próximo
      </Button>
      </div>
    </form>
  );
}

export default DadosPessoais;
