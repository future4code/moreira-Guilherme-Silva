import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const MainContainer = styled.div`
    margin-left: 20px;
    display: flex;
    /* flex-direction: column; */
    justify-content: left;
    
    h2 {
      text-decoration: underline;
      text-align: center;
    }
  `

const DetalhesCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  width: 600px;
  padding: 10px;
  margin: 10px;
  background-color: #023047;
  color: white;
`
const Musica = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: 1px white solid;
  border-radius: 5px;
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

const CardAdicionar = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 10px;
  margin: 10px;
  background-color: #03071e;
  color: white;

  input {
    width: 300px;
    height: 20px;
  }
`

const ButtonAdicionar = styled.button`
height: 30px;
border: none;
border-radius: 5px;
width: 200px;
background-color: #0077b6;
color: white;

:hover {
  transform: scale(1.2, 1.2);
  transition-duration: 1s;
  background-color: #023e8a;
  cursor: pointer;
}
`


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
      <Musica key={detalhe.id}>{detalhe.name} 
        <audio controls>
          <source src={detalhe.url} type="audio/mpeg" />
        </audio>
        <Button onClick={() => this.deletarMusica(detalhe.id)}>Deletar</Button>
      </Musica>)
    })

    return (
      <MainContainer>
        <DetalhesCard>
          <h2>{this.props.nomePlaylist}</h2>
          {listaDetalhes}
        </DetalhesCard>
        <CardAdicionar>
        <h2>Adicionar Música</h2>
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
        <ButtonAdicionar onClick={() => this.adicionaMusica(this.props.idPlaylist)}>Adicionar Música</ButtonAdicionar>
        </CardAdicionar>
      </MainContainer>
    )
  }
}

export default TelaDetalhePlaylist