import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: {valido: true, texto: ""}});

  function validaCampos(event) {
    const {name, value} = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);

    console.log(novoEstado);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }}>
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
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

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
