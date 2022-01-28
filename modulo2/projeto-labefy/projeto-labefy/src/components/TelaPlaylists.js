import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const PlaylistCard = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: space-between;
  width: 400px;
  padding: 10px;
  margin: 10px;
`


class TelaPlaylists extends React.Component {

  state = {
    playlists: []
  }

  pegarPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resp => {
      this.setState({playlists: resp.data.result.list})
      /* console.log(this.state.playlists) */
    })
    .catch(err => {
      alert("Erro ao solicitar playlists")
    })
  }

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resp => {
      alert("Playlist deletada com sucesso!")
      this.pegarPlaylists()
    })
    .catch(err => {
      alert("Erro ao deletar playlist")
    })
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }

  render() {

    const listaPlaylists = this.state.playlists.map (playlist => {
      return <PlaylistCard key={playlist.id} onClick={() => this.props.irParaDetalhe(playlist.id, playlist.name)}  >
                {playlist.name}
                <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>            
            </PlaylistCard>
    })

    return (
      <div>
        <p>Tela Playlists</p>
        {listaPlaylists}
      </div>
    )
  }
}

export default TelaPlaylists