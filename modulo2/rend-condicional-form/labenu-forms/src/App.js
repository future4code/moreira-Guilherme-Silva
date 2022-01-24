import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import React from 'react';
import styled from 'styled-components';


const MainContainer =styled.div `
  text-align: center;

`
const ButtonContainer =styled.button `
  margin-top: 20px;

`


class App extends React.Component {

  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
  } 
  }

  verificaBotao = () => {
    if(this.state.etapa !== 4) {
      return <ButtonContainer onClick={this.irParaProximaEtapa}>Próxima etapa</ButtonContainer>
    }
  }

  render() {
    return (
      <MainContainer>
        {this.renderizaEtapa()}
        {this.verificaBotao()}
      </MainContainer>
    );
  }
}

export default App;
