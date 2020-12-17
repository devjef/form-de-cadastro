import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {

  const [nome, setNome] = useState('');

  function handleInputNome(event) {

    let tmpNome = event.target.value
    if(tmpNome.length >= 3) {
      tmpNome = (tmpNome.substr(0,3))
    }
    
    setNome(tmpNome);
  };

  const [sobrenome, setSobrenome] = useState('');

  function handleInputSobrenome(event) {
    setSobrenome(event.target.value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(nome, sobrenome);
    
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        value={nome}
        onChange={handleInputNome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={handleInputSobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" defaultChecked={true} color="primary" />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" defaultChecked={true} color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
