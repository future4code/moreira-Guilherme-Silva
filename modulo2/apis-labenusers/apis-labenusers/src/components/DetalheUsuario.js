import React from "react";
import styled from "styled-components";
import axios from "axios";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin: 0 auto;

  input {
    margin-right: 20px
  }
`

const ButtonTela = styled.button`
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  :hover {
      cursor: pointer;
      background-color: purple;
      transition-duration: 1s;
      transform: scale(1.2 , 1.2);
  }  
`

class DetalheUsuario extends React.Component {

  state = {
    usuario: []
  }

  


  render() {
    return(
      <div>
        <Header>
          <h1>Tela de Detalhes</h1>
          <ButtonTela onClick={this.props.irParaLista}>Ir Para a Tela de Cadastro</ButtonTela>
        </Header>
        <div>
          <p>{this.props.usuario}</p>
        </div>
      </div>
    )
  }
}

export default DetalheUsuario;