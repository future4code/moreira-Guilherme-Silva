import React from 'react'
import axios from 'axios'

class TelaCriacao extends React.Component {

  state = {
    nomePlaylist: ""
  }

  atualizaNomePlaylist = (event) => {
    this.setState({nomePlaylist: event.target.value})
  }

  criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      name: this.state.nomePlaylist 
    }

    axios.post(url, body, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resposta => {
      /* console.log(resposta) */
      alert(`Playlist ${this.state.nomePlaylist} criada com sucesso!`)
    })
    .catch(erro => {
      alert("Erro ao criar a playlist")
      /* console.log(erro.response) */
    })
  }

  render() {
    return (
      <div>
        <p>Tela Criação</p>
        <input 
        placeholder='Nome da Playlist' 
        value={this.state.nomePlaylist}
        onChange={this.atualizaNomePlaylist}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
      </div>
    )
  }
}

export default TelaCriacao