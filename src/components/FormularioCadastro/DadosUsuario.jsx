import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from './../../context/ValidacoesCadastro';
import useErrors from './../../hooks/useErrors';

function DadosUsuario({ aoEnviar }) {

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampos, possoEnviar] = useErrors(validacoes);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()) {
        aoEnviar({email, senha});
      };

    }}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validaCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <div className="btn-right">
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
      </div>
      
    </form>
  );
}

export default DadosUsuario;
