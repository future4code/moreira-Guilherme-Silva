import React from "react";
import styled from "styled-components";


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
  background-color: #EB8C49;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  :hover {
      cursor: pointer;
      background-color: #EB543E;
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

function Cadastro(props) {
  return (
    <MainContainer>
      <Header>
        <h1>Tela de Cadastro</h1>
        <ButtonTela>Ir Para a Tela de Usuários</ButtonTela>
      </Header>
      <Container>
        <input value={props.valorNome} onChange={props.atualizaValorNome} /* type="text" */ placeholder="Nome" />
        <input value={props.valorEmail} onChange={props.atualizaValorEmail} /* type="email" */ placeholder="E-mail" />
        <ButtonUsuario onClick={props.adicionaUsuario}>Criar Usuário</ButtonUsuario>
      </Container>
      

    </MainContainer>
  )
}

export default Cadastro