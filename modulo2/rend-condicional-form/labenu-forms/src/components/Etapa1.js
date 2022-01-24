import React from "react";
import styled from "styled-components";



function Etapa1() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input placeholder="Nome" />
        <p>2. Qual sua idade?</p>
        <input placeholder="Idade" />
        <p>3. Qual seu email?</p>
        <input placeholder="E-mail" />
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
        </select>

      </div>
    );
  }
  
  export default Etapa1;


