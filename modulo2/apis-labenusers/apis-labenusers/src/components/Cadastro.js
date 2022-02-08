import React from "react";
import styled from "styled-components";
import axios from "axios";


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

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  input {
    margin-right: 20px
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

class Cadastro extends React.Component {

  state = {
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


  render() {
    return (
      <MainContainer>
        <Header>
          <h1>Tela de Cadastro</h1>
          <ButtonTela onClick={this.props.irParaLista}>Ir Para a Tela de Usuários</ButtonTela>
        </Header>
        <Container>
          <input value={this.state.valorNome} onChange={this.atualizaValorNome} /* type="text" */ placeholder="Nome" />
          <input value={this.state.valorEmail} onChange={this.atualizaValorEmail} /* type="email" */ placeholder="E-mail" />
          <ButtonUsuario onClick={this.adicionaUsuario}>Criar Usuário</ButtonUsuario>
        </Container>
      </MainContainer>
    )
  }

  
}

export default Cadastro