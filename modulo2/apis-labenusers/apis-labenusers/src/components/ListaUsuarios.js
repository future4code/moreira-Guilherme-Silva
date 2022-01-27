import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalheUsuario from "./DetalheUsuario";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin: 0 auto;

  input {
    margin-right: 20px
  }
`
const CardUsuario = styled.div `
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 15px;
  width: 300px;
`
const ContainerLista = styled.div`
  width: 40%;
  margin: 0 auto;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  input {
    margin-right: 20px;
    width: 200px;
  }
`

const ButtonTela = styled.button`
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  :hover {
      cursor: pointer;
      background-color: purple;
      transition-duration: 1s;
      transform: scale(1.2 , 1.2);
  }  
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
const ButtonDetalhe = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  height: 20px;
  margin-left: 10px;
  :hover {
      cursor: pointer;
      background-color: darkgreen;
      transition-duration: 1s;
      transform: scale(1.2 , 1.2);
  }  
`


const ButtonUsuario = styled.button`
  background-color: #3936EB;
  color: white;
  border: none;
  border-radius: 15px;
  height: 28px;
  :hover {
      cursor: pointer;
      background-color: #2CA0F5;
      transition-duration: 1s;
      transform: scale(1.1 , 1.1);
  }  
`


class ListaUsuarios extends React.Component {

  state = {
    usuarios: [],
    valorBusca: "",
    telaDetalhe: false,
    usuario: []
  }

  atualizaValorBusca = (event) => {
    this.setState({valorBusca: event.target.value})
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
      alert("Erro")
    })
  }

  deletaUsuario = (id, nome) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const confirmacao = window.confirm(`Tem certeza de que deseja deletar o usuário ${nome}?`)
    if(confirmacao) {
      axios.delete(url, {
        headers: {
          Authorization: "guilherme-silva-moreira"
        }
      })
      .then(resposta => {
          alert(`Usuário ${nome} deletado com sucesso`)
          this.mostraUsuarios()
      })
      .catch(erro => {
        alert("Erro ao deletar")
      })
    }
  }

  buscaUsuario = (nome) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}`
    axios.get(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resposta => {
      this.setState({usuarios: resposta.data})
    })
    .catch(erro => {
      alert("Erro ao pesquisar")
    })
  } 

  /* irParaDetalhe = () => {
    if(this.state.telaDetalhe) {
      return <DetalheUsuario 
              irParaLista = {this.irParaLista} 
              usuario = {this.state.usuario}
            />
    }
    
  } */

  detalheUsuario = (nome) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}`
    axios.get(url, {
      headers: {
        Authorization: "guilherme-silva-moreira"
      }
    })
    .then(resposta => {
      this.setState({usuario: resposta.data})
      console.log(this.state.usuario)
    })
    .catch(erro => {
      alert("Erro")
    })
  }

  componentDidMount = () => {
    this.mostraUsuarios()
  }


  render() {

    const usuariosRenderizados = this.state.usuarios.map(item => {
      return <CardUsuario key={item.id}>
              {item.name}
              <ButtonDetalhe onClick={() => this.detalheUsuario(item.name)}>
                  Detalhe
              </ButtonDetalhe>
              <Button onClick={() => this.deletaUsuario(item.id, item.name)}>Deletar</Button>
            </CardUsuario>
    })

    return(
      <MainContainer>
        <Header>
          <h1>Tela de Usuários</h1>
          <ButtonTela onClick={this.props.irParaCadastro}>Ir Para a Tela de Cadastro</ButtonTela>
        </Header>
        <ContainerLista>
          {usuariosRenderizados}
        </ContainerLista>
        <Container>
          <h2><strong>Procurar Usuário</strong></h2>
          <input 
            type="text" 
            placeholder="Nome do Usuário Para Busca" 
            value={this.state.valorBusca} 
            onChange={this.atualizaValorBusca}
          />
          <ButtonUsuario onClick={() => this.buscaUsuario(this.state.valorBusca)}>Procurar</ButtonUsuario>
        </Container>
        
      </MainContainer>
    )
  }
}

export default ListaUsuarios