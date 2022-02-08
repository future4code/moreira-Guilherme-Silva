import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const PlaylistCard = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px;
  margin: 10px;
  background-color: #023047;
  color: white;
  :hover {
    transform: scale(1.1, 1.1);
    transition-duration: 1s;
    cursor: pointer;

  }
`
const MainContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
  `

const Button = styled.div`
  padding: 10px;
  border: none;
  text-align: center;

  border-radius: 5px;
  background-color: #ca6702;
  color: white;
  :hover {
    
    transition-duration: 1s;
    background-color: #bb3e03;
    cursor: pointer;
  }
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
                <Button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</Button>            
            </PlaylistCard>
    })

    return (
      <MainContainer>
        <h2><u>Playlists Existentes:</u> (obs: Clicar na playlist para abrir detalhes)</h2>
        <div>
          {listaPlaylists}
        </div>
      </MainContainer>
    )
  }
}

export default TelaPlaylists