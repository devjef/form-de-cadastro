import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {

  const [cep, setCEP] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({cep, endereco, numero, estado, cidade});
    }}>
      <TextField
        value={cep}
        onChange={(e) => setCEP(e.target.value)}
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
