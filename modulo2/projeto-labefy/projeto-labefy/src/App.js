import React from 'react'
import TelaCriacao from './components/TelaCriacao'
import TelaPlaylists from './components/TelaPlaylists'
import TelaDetalhePlaylist from './components/TelaDetalhePlaylist'
import styled from 'styled-components'

const Header = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001219;
  padding: 20px;

  h1 {
    color: white;
  }
`
const ContainerButtons = styled.div `
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin: 0 30px;
`

const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  width: 150px;
  background-color: #f1faee;
  font-weight: bold;

  :hover {
    transform: scale(1.2, 1.2);
    transition-duration: 1s;
    background-color: #94d2bd;
    cursor: pointer;
  }
`


class App extends React.Component {
  
  state = {
    telaAtual: "",
    idPlaylist: "",
    nomePlaylist: ""
  }

  irParaCriacao = () => {
    this.setState({telaAtual: "criacao"})
  }

  irParaPlaylist = () => {
    this.setState({telaAtual: "playlist"})
  }

  irParaDetalhe = (id, nome) => {
    this.setState({telaAtual: "detalhe", idPlaylist: id, nomePlaylist: nome})
  }

  verificarTela = () => {
    switch(this.state.telaAtual) {
      case "criacao":
        return <TelaCriacao />
      case "playlist":
        return <TelaPlaylists  irParaDetalhe = {this.irParaDetalhe} />
      case "detalhe":
        return <TelaDetalhePlaylist idPlaylist = {this.state.idPlaylist} nomePlaylist = {this.state.nomePlaylist} />
      default:
        return <TelaCriacao />
    }
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Projeto Labefy</h1>
          <ContainerButtons>
            <Button onClick={this.irParaCriacao}>Criar Playlist</Button>
            <Button onClick={this.irParaPlaylist}>Visualizar Playlists</Button>
          </ContainerButtons>
        </Header>
        {this.verificarTela()}
      </div>
    );
  }
  
}

export default App;
