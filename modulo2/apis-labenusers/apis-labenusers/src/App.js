import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import ListaUsuarios from "./components/ListaUsuarios";
/* import DetalheUsuario from "./components/DetalheUsuario"; */

const MainContainer = styled.div`
  /* border: 1px solid white;
  background-color: rgb(55, 26, 72);
  color: white; */
`



class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista = {this.irParaLista} />
      case "lista":
        return <ListaUsuarios 
                  irParaCadastro = {this.irParaCadastro} 
                  irParaDetalhe = {this.irParaDetalhe}
                />
      /* case "detalhe":
        return <DetalheUsuario irParaLista = {this.irParaLista} /> */
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  irParaDetalhe = () => {
    this.setState({telaAtual: "detalhe"})
  }

  render() {

    

    return (
      <MainContainer>
        {this.escolheTela()}
      </MainContainer>
    );
  }
}

export default App;
