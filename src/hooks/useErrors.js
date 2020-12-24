import React, { useState } from 'react';

function useErrors(validacoes) {
    const estadoInicial = criaEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

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

    return [erros, validaCampos, possoEnviar];
}

function criaEstadoInicial(validacoes) {
    const estadoInicial = {};

    for(let campo in validacoes) {
        estadoInicial[campo] = {valido: true, texto: ""}
    }

    return estadoInicial;
}

export default useErrors;