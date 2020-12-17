import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
    }}>
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => setCPF(event.target.value)}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" checked={promocoes} onChange={(event) => setPromocoes(event.target.checked)} color="primary" />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" checked={novidades} onChange={(event) => setNovidades(event.target.checked)} color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
