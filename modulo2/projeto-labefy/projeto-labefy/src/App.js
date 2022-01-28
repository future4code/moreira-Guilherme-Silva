import React from 'react'
import TelaCriacao from './components/TelaCriacao'
import TelaPlaylists from './components/TelaPlaylists'
import TelaDetalhePlaylist from './components/TelaDetalhePlaylist'




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
      <div >
        <h1>Projeto Labefy</h1>
        <button onClick={this.irParaCriacao}>Criar Playlist</button>
        <button onClick={this.irParaPlaylist}>Visualizar Playlists</button>
        {this.verificarTela()}
      </div>
    );
  }
  
}

export default App;
