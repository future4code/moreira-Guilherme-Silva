import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import axios from "axios"

const MainContainer = styled.div`
  /* border: 1px solid white;
  background-color: rgb(55, 26, 72);
  color: white; */
`

const Button = styled.button`
  background-color: #EB8C49;
  color: white;
  border: none;
  border-radius: 5px;
  height: 20px;
  margin-left: 10px;
  :hover {
      cursor: pointer;
      background-color: #EB543E;
      transition-duration: 1s;
      transform: scale(1.2 , 1.2);
  }  
`

class App extends React.Component {

  state = {
    usuarios: [],
    valorNome: "",
    valorEmail: ""
  }

  atualizaValorNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  atualizaValorEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  }

  adicionaUsuario = () => {
    const body = {
      name: this.state.valorNome,
      email: this.state.valorEmail
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.post(url, body, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then((resposta => {
      alert(`Usuário ${this.state.valorNome} adicionado com sucesso!`)
      this.setState({valorNome: ""})
      this.setState({valorEmail: ""})
    }))
    .catch(erro => {
      alert("Erro ao criar usuário!")
      /* console.log(erro.response) */
    })
  }

  mostraUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
    }})
    .then(resposta => {
      this.setState({usuarios: resposta.data})
    })
    .catch(erro => {
      console.log(erro.message)
    })
  }

  deletaUsuario = (id, nome) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`
    axios.delete(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resposta => {
      alert(`Usuário ${nome} deletado com sucesso`)
    })
    .catch(erro => {
      alert("Erro ao deletar")
    })
  }

  componentDidMount = () => {
    this.mostraUsuarios()
  }

  render() {

    const usuariosRenderizados = this.state.usuarios.map(item => {
      return <li>{item.name}<Button>Deletar</Button></li>
    })

    return (
      <MainContainer>
        <div>
          <Cadastro 
          valorNome = {this.state.valorNome}
          valorEmail = {this.state.valorEmail}
          atualizaValorNome = {this.atualizaValorNome}
          atualizaValorEmail = {this.atualizaValorEmail}
          adicionaUsuario = {this.adicionaUsuario}
          mostraUsuarios = {this.mostraUsuarios}
          />
          
          <div>
            <h1>Tela de Usuários</h1>
            {usuariosRenderizados}
            <p>Procurar Usuário</p>
            <input type="text" placeholder="Nome do Usuário Para Busca" />
            <button>Procurar</button>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default App;
