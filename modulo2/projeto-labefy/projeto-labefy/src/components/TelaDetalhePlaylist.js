import React from 'react';
import axios from 'axios';


class TelaDetalhePlaylist extends React.Component {

  state = {
    detalhes: [],
    nomeMusica: "",
    artista: "",
    urlMusica: ""
  }

  atualizaNomeMusica = (event) => {
    this.setState({nomeMusica: event.target.value})
  }
  atualizaArtista = (event) => {
    this.setState({artista: event.target.value})
  }
  atualizaUrlMusica = (event) => {
    this.setState({urlMusica: event.target.value})
  }

  componentDidMount = () => {
    this.detalhePlaylist(this.props.idPlaylist)
  }

  detalhePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resp => {
      /* console.log(resp.data) */
      this.setState({detalhes: resp.data.result.tracks})
    })
    .catch(err => {
      console.log(err)
    })
  }

  adicionaMusica = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    const body = {
      name: this.state.nomeMusica, 
      artist: this.state.artista,
      url: this.state.urlMusica
    }

    axios.post(url, body, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resp => {
      alert("Música adicionada com sucesso!")
      this.detalhePlaylist(this.props.idPlaylist)
    })
    .catch(err => {
      alert("Erro ao adicionar música")
      console.log(err)
    })
  }

  deletarMusica = (idMusica) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${idMusica}`
  
    axios.delete(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resp => {
      alert("Música deletada com sucesso")
      this.detalhePlaylist(this.props.idPlaylist)
    })
    .catch(err => {
      alert("Erro em deletar música")
    })
  }
  
  render() {

    const listaDetalhes = this.state.detalhes.map (detalhe => {
      return (
      <p key={detalhe.id}>{detalhe.name} 
        <audio controls>
          <source src={detalhe.url} type="audio/mpeg" />
        </audio>
        <button onClick={() => this.deletarMusica(detalhe.id)}>Deletar</button>
      </p>)
    })

    return (
      <div>
        <p>Tela Detalhes</p>
        {/* {this.detalhePlaylist(this.props.idPlaylist)} */}
        
        <p>Adicionar Música</p>
        <input 
          placeholder='Nome da música'
          value={this.state.nomeMusica}
          onChange={this.atualizaNomeMusica}
        />
        <input 
          placeholder='Nome do artista'
          value={this.state.artista}
          onChange={this.atualizaArtista}
        />
        <input 
          placeholder='URL da música'
          value={this.state.urlMusica}
          onChange={this.atualizaUrlMusica}
        />
        <button onClick={() => this.adicionaMusica(this.props.idPlaylist)}>Adicionar Música</button>
        <h2>{this.props.nomePlaylist}</h2>
        {listaDetalhes}
      </div>
    )
  }
}

export default TelaDetalhePlaylist