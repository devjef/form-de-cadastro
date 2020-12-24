import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import './style.css'

function DadosEntrega({ aoEnviar, anterior }) {

  const [cep, setCEP] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("");

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
        fullWidth
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
        fullWidth
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
        fullWidth
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
        fullWidth
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
        fullWidth
      />
      <div className="button-box">
      <Button type="button" onClick={anterior} variant="contained" color="default" margin="normal">
        Anterior
      </Button>
      <Button type="submit" variant="contained" color="primary" margin="normal">
        Finalizar Cadastro
      </Button>
      </div>
       
     
    </form>
  );
}

export default DadosEntrega;
