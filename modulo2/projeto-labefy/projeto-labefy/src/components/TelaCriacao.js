import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

  const MainContainer = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding: 10px;
  margin: 50px auto;
  background-color: #023047;
  color: white;


    input {
      margin: 0 20px 0 100px;
    }

    h2 {
      text-decoration: underline;
    }
  `
  const Button = styled.button`
  height: 30px;
  border: none;
  border-radius: 5px;
  width: 100px;
  background-color: #0077b6;
  color: white;

  :hover {
    transform: scale(1.2, 1.2);
    transition-duration: 1s;
    background-color: #023e8a;
    cursor: pointer;
  }
  `


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
      <MainContainer>
        <h2>Criação de Novas Playlists:</h2>
        <input 
        placeholder='Nome da Playlist' 
        value={this.state.nomePlaylist}
        onChange={this.atualizaNomePlaylist}
        />
        <Button onClick={this.criarPlaylist}>Criar Playlist</Button>
      </MainContainer>
    )
  }
}

export default TelaCriacao