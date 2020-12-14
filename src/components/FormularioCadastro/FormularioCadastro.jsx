import React from "react";
import { TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField variant="outlined" label="nome" id="nome" type="text" fullWidth margin="normal" />
      <TextField variant="outlined" label="sobrenome" id="sobrenome" type="text" fullWidth margin="normal" />
      <TextField variant="outlined" label="CPF" id="nome" type="text" fullWidth margin="normal" />
      

      <label>Sobrenome</label>
      <input type="text" />

      <label>CPF</label>
      <input type="text" />

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
