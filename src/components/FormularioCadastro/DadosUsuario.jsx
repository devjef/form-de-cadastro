import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({ aoEnviar, validacoes }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erros, setErros] = useState({senha: {valido: true, texto: ""}});

  function validaCampos(event) {
    const {name, value} = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);

    console.log(novoEstado);
  };

  function possoEnviar() {
    for(let campo in erros) {
      if(!erros[campo].valido) return false;
    };

    return true;
  }

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
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
